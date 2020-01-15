import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger(
      'Animation1',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s linear',
              style({ opacity: 1, }))
          ]
        )
      ]
    )
  ]
})
export class HomePage implements OnInit {

  loginForm: FormGroup;
  otpForm: FormGroup;
  otpDisplayed: boolean = false;
  user: any = null;

  constructor(private formBuilder: FormBuilder,
    private loading: LoadingController,
    private dialogs: Dialogs,
    private rest: RestService,
    private storage: Storage,
    private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)])]
    });

    this.otpForm = this.formBuilder.group({
      otp: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.pattern(/^[0-9]\d{6}$/)])]
    });

  }


  enterOTP() {
    this.otpForm.patchValue({
      otp: ''
    });

    //Create new customer
    this.loading.create({
      message: 'Creating Customer',
      spinner: 'dots',
      showBackdrop: true,
    }).then(loading => {

      loading.present();

      // let dto = {
      //   customer_name: this.loginForm.value.name,
      //   phone: this.loginForm.value.phone,
      //   validated: 'N'
      //   table_id: 3
      // };

      let dto = {
        customer_name: "Siddhant Gupta",
        phone: "8999090358",
        validated: 'N',
        table_id: 3   // For now we assume this table 
      };

      this.rest.createNewCustomer(dto).subscribe((res: any) => {
        this.otpDisplayed = true;
        this.user = res;

        loading.dismiss();
      },
        err => {
          loading.dismiss();

          this.dialogs.alert("Unable to register the customer on this device, please contact ADMIN", "ERROR");
        });
    });


  }

  switchToPhone() {
    this.otpForm.patchValue({
      otp: ''
    });

    this.otpDisplayed = false;
  }


  submitOTP() {

    this.loading.create({
      message: 'Validating OTP',
      spinner: 'dots',
      showBackdrop: true,
    }).then(loading => {

      loading.present();

      //Validate OTP:


      //Activate Customer:
      let dto = {
        custId: this.user.customer_id,
        status: true
      };

      this.rest.updateCustomerStatus(dto).subscribe((res: any) => {

        loading.dismiss();
        this.user.status = 'Y';
        this.storage.set('user', this.user);
        console.log("User storage --> ", this.user);

        this.storage.set('order', null);
        this.storage.set('placedOrder', null);
        this.storage.set('dishes', null);

        //Navigate to menu after validation:
        this.router.navigate(['menu', 'dashboard']);
        
        

      }, err => {
        loading.dismiss();
        this.storage.set('order', null);
        this.dialogs.alert("Unable to activate the customer, please contact ADMIN", "ERROR");
      });

    });


  }


}
