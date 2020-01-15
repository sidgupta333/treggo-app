import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
})
export class ConfirmOrderPage implements OnInit {

  orderItems: any = {
    items: [],
    total: null,
    grandTotal: null,
    order_id: null,
    sub_order_id: null
  };

  user: any = null;
  total: any = 0;
  taxAmount: any = 0;
  grandTotal: any = 0;
  order: any = null;
  couponCode: any = '';
  backupTotal: any = 0;

  constructor(private rest: RestService,
    private loading: LoadingController,
    private storage: Storage,
    private dialogs: Dialogs,
    private router: Router) { }

  ngOnInit() {

    this.storage.ready().then(() => {

      this.storage.get('user').then((res) => {
        this.user = res;
      })
    });

    //Get order items selected in previous screen:
    this.loading.create({
      message: 'Fetching Order Details',
      spinner: 'dots',
      showBackdrop: true,
    }).then(loading => {

      loading.present();

      this.storage.ready().then(() => {
        this.storage.get('dishes').then((res: any) => {

          loading.dismiss();
          res.forEach(category => {

            category.dishes.forEach(dish => {
              if (dish.count > 0) {
                this.orderItems.items.push({
                  dish_id: dish.dish_id,
                  dish_name: dish.dish_name,
                  category_id: category.category_id,
                  count: dish.count,
                  base_price: dish.base_price
                });

                this.total += (dish.base_price * dish.count);
              }
            });
          });

          this.taxAmount = (0.12 * this.total).toFixed(2);
          this.grandTotal = parseFloat(this.total) + parseFloat(this.taxAmount);
          this.backupTotal = this.grandTotal;
        });
      });
    });
  }


  applyCoupon() {

    let dto = {
      amount: this.backupTotal,
      coupon_name: this.couponCode
    };

    this.rest.applyCoupon(dto).subscribe((res: any) => {

      this.grandTotal = res.amount;
    },
    err => {
      this.removeCoupon();
      this.dialogs.alert("Your promocode was not correct", "FAILURE");
    });


  }

  removeCoupon() {
    this.grandTotal = this.backupTotal;
    this.couponCode = '';
  }


  completeOrder() {

    this.loading.create({
      message: 'Completing your order',
      spinner: 'dots',
      showBackdrop: true,
    }).then(loading => {

      loading.present();

      this.orderItems.total = this.total;
      this.orderItems.grandTotal = this.grandTotal;

      //Create new order and then create sub-order for the same, but also check if order is new or in continuation:

      this.storage.ready().then(() => {

        this.storage.get('order').then((res: any) => {

          //If this is new order:
          if (res && res.order_status == 'OPEN') {

            //Create suborder with existing order
            this.order = res;
            this.createSubOrder("ORDERED", loading);

          }

          else {
            //Create new order and then suborder
            this.createOrder(loading);
          }
        });
      });
    });

  }



  //Create new suborder
  createSubOrder(status: string, loading) {

    let dto = {
      customer_id: this.user.customer_id,
      order_date: this.rest.formatDate(new Date()),
      order_id: this.order.order_id,
      status: status,
      dishes: this.prepareDishesString().dishes,
      quantities: this.prepareDishesString().quantities
    };

    this.rest.createSubOrder(dto).subscribe((res: any) => {

      this.orderItems.order_id = this.order.order_id;
      this.orderItems.sub_order_id = res.sub_order_id;
      this.orderItems.status = res.status;

      this.storage.set('placedOrder', this.orderItems);
      console.log("Order items --> ", this.orderItems);

      loading.dismiss();

      this.router.navigate(['menu', 'status']);

      this.dialogs.alert("Your food has been ordered successfully", "SUCCESS").then(() => {
        this.router.navigate(['menu', 'status']);
      });

    },
      err => {
        this.dialogs.alert("Your order has been failed, Please Contact Admin ", "ERROR")
      });
  }



  //Create new order
  createOrder(loading) {

    let dto = {
      customer_id: this.user.customer_id,
      orderDate: this.rest.formatDate(new Date()),
      total_amount: this.grandTotal
    };

    this.rest.createOrder(dto).subscribe((res: any) => {

      this.order = res;

      this.storage.set('order', res);
      //Create new sub order based on order created
      this.createSubOrder("ORDERED", loading);
    },
      err => {
        this.dialogs.alert("Your order has been failed, Please Contact Admin ", "ERROR")
      });
  }



  prepareDishesString() {

    let output = {
      dishes: "",
      quantities: ""
    };

    this.orderItems.items.forEach(element => {
      output.dishes = output.dishes.concat(element.dish_name, " | ");
      output.quantities = output.quantities.concat(element.count.toString(), " | ");
    });

    output.dishes.trim();
    output.quantities.trim();

    return output;
  }

}
