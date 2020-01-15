import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  order: any = null;
  currentStatus: any = null;

  constructor(private rest: RestService,
    private loading: LoadingController,
    private storage: Storage,
    private dialogs: Dialogs,
    private router: Router) { }

  ngOnInit() {

    this.loading.create({
      message: 'Completing your order',
      spinner: 'dots',
      showBackdrop: true,
    }).then(loading => {

      loading.present();
      this.storage.ready().then(() => {

        this.storage.get('placedOrder').then((res) => {
          this.order = res;
         
          if (res) {
            this.rest.getSubOrder(this.order.sub_order_id).subscribe((res: any) => {
               loading.dismiss();
              this.currentStatus = res.status;
            });
          }
          else {
             loading.dismiss();
          }


          // Fetch status of order after every 5 seconds
         let interval =  window.setInterval(() => {

            this.rest.getSubOrder(this.order.sub_order_id).subscribe((res: any) => {
              this.currentStatus = res.status;

              this.rest.getOrder(this.order.order_id).subscribe((res: any) => {
                if (res.order_status == "CLOSED") {
                  window.clearInterval(interval);
                    this.router.navigate(['home']);
                }
              })
            });

          }, 5000);

          

        });

      });

    });
  }


  navigateToDashboard() {
    this.router.navigate(['menu', 'dashboard']);
  }

  closeOrder() {
    let dto1 = {
      status: 'COMPLETED',
      subOrderId: this.order.sub_order_id
    };

    this.rest.updateSubOrder(dto1).subscribe((res: any) => {

      let dto2 = {
        status: 'CLOSED',
        order_id: this.order.order_id
      };

      this.rest.updateOrder(dto2).subscribe((res: any) => {

          this.router.navigate(['home']);
        
      },
        err => {
          this.dialogs.alert("Unable to close order, Please Contact Admin ", "ERROR");
        })

    },
      err => {
        this.dialogs.alert("Unable to close order, Please Contact Admin ", "ERROR");
      });
  }

}
