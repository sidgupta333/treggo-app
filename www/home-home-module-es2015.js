(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content view-title=\"Treggo APP\" class=\"login-pane\">\n\n    <div style=\"margin-top: 10vh;\" class=\"flex-container-vertical\">\n        <img class=\"img-head\" src=\"assets/images/Treggo-header.png\" />\n        <br>\n        <img src=\"assets/images/header-2.png\" />\n\n        <div class=\"flex-container-vertical box-size\">\n\n            <form [@Animation1] *ngIf=\"!otpDisplayed\" class=\"flex-container-vertical\" [formGroup]=\"loginForm\">\n\n                <ion-item class=\"form-styling\">\n                    <ion-label position=\"floating\">Full Name</ion-label>\n                    <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n                </ion-item>\n                <br>\n                <ion-item class=\"form-styling\">\n                    <ion-label position=\"floating\">Phone Number</ion-label>\n                    <ion-input type=\"number\" onKeyPress=\"if(this.value.length==10) return false;\" formControlName=\"phone\"></ion-input>\n                </ion-item>\n                <br>\n                <ion-button class=\"btn-standard\" type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"enterOTP()\">Send OTP\n                </ion-button>\n            </form>\n\n\n            <!-- OTP FORM -->\n            <form [@Animation1] *ngIf=\"otpDisplayed\" class=\"flex-container-vertical\" [formGroup]=\"otpForm\" (ngSubmit)=\"submitOTP()\">\n\n                <ion-item class=\"form-styling\">\n                    <ion-label position=\"floating\">ENTER OTP</ion-label>\n                    <ion-input onKeyPress=\"if(this.value.length==6) return false;\" id=\"partitioned\" type=\"number\" formControlName=\"otp\"></ion-input>\n                </ion-item>\n                <br>\n                <ion-button size=\"large\" class=\"btn-standard\" type=\"submit\" color=\"primary\" expand=\"block\">VALIDATE\n                </ion-button>\n\n                <br>\n                <a (click)=\"switchToPhone()\" style=\"text-decoration: underline; cursor: pointer; color: white;\"> Resend? </a>\n            </form>\n        </div>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-pane {\n  --background: none;\n  background: url('bg.png') no-repeat center center fixed;\n  background-size: cover;\n}\n\n.img-head {\n  width: 60vw;\n}\n\n.box-size {\n  margin-top: 15vh;\n  width: 90vw;\n  height: 280px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 5%;\n}\n\n.form-styling {\n  --background: none;\n  width: 90vw;\n  height: 60px;\n}\n\n#partitioned {\n  letter-spacing: 10vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdHNcXFRyZWdnby1hcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1REFBQTtFQUdBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFuZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbWctaGVhZCB7XG4gICAgd2lkdGg6IDYwdnc7XG59XG5cbi5ib3gtc2l6ZSB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmZvcm0tc3R5bGluZyB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuI3BhcnRpdGlvbmVkIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTB2dztcbn0iLCIubG9naW4tcGFuZSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW1nLWhlYWQge1xuICB3aWR0aDogNjB2dztcbn1cblxuLmJveC1zaXplIHtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbiAgd2lkdGg6IDkwdnc7XG4gIGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5mb3JtLXN0eWxpbmcge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbiNwYXJ0aXRpb25lZCB7XG4gIGxldHRlci1zcGFjaW5nOiAxMHZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let HomePage = class HomePage {
    constructor(formBuilder, loading, dialogs, rest, storage, router) {
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.dialogs = dialogs;
        this.rest = rest;
        this.storage = storage;
        this.router = router;
        this.otpDisplayed = false;
        this.user = null;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[6-9]\d{9}$/)])]
        });
        this.otpForm = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]\d{6}$/)])]
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
                table_id: 3 // For now we assume this table 
            };
            this.rest.createNewCustomer(dto).subscribe((res) => {
                this.otpDisplayed = true;
                this.user = res;
                loading.dismiss();
            }, err => {
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
            this.rest.updateCustomerStatus(dto).subscribe((res) => {
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
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('Animation1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.5s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"],
        _services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map