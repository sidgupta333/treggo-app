(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-confirm-order-confirm-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/members/confirm-order/confirm-order.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/confirm-order/confirm-order.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>ORDER SUMMARY</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"orderItems.items.length > 0\">\n        <div class=\"grid-structure\">\n            <div *ngFor=\"let item of orderItems.items\" class=\"child-structure\">\n                <p>\n                    {{item.dish_name}}\n                </p>\n                <p></p>\n                <p class=\"price-styling\">\n                    {{item.base_price}} X {{item.count}}\n                </p>\n            </div>\n        </div>\n\n        <br>\n        <br>\n\n        <div class=\"flex-container-horizontal\">\n            <ion-item style=\"width: 190px;\">\n                <ion-label position=\"floating\">Apply Promocode?</ion-label>\n                <ion-input type=\"text\"></ion-input>\n            </ion-item> &nbsp;\n\n            <ion-button color=\"success\">Apply</ion-button>\n\n        </div>\n\n        <br>\n        <br>\n        <div class=\"flex-container-vertical summary-container\">\n            <div class=\"summary-header\">\n                <ion-icon name=\"ios-paper\"></ion-icon> &nbsp; SUMMARY\n            </div>\n            <br>\n            <div class=\"grid-total\">\n                <span> Item Total</span>\n                <span style=\"font-weight: bolder; justify-self: end;\"> {{total}} ₹</span>\n                <span style=\"margin-top: 10px;\"> Taxes (CGST & SGST)</span>\n                <span style=\"font-weight: bolder; justify-self: end; margin-top: 10px; padding-bottom: 10px;\"> {{taxAmount}} ₹</span>\n                <span style=\"text-decoration: underline; font-size: 16px; margin-top: 20px;\">GRAND TOTAL</span>\n                <span style=\"font-weight: bolder; justify-self: end; font-size: 16px; margin-top: 20px;\"> {{grandTotal}} ₹ </span>\n            </div>\n\n        </div>\n    </div>\n\n    <div *ngIf=\"orderItems.items.length == 0\" class=\"flex-container-vertical\">\n        <h5 style=\"color: rgb(155, 152, 158); margin-top: 45vh;\"> NO ITEMS IN CART</h5>\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf=\"orderItems.items.length > 0\">\n    <ion-toolbar>\n        <ion-button (click)=\"completeOrder()\" expand=\"full\" size=\"large\" color=\"primary\">CONFIRM ORDER</ion-button>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/members/confirm-order/confirm-order.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/members/confirm-order/confirm-order.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function() { return ConfirmOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-order.page */ "./src/app/members/confirm-order/confirm-order.page.ts");







const routes = [
    {
        path: '',
        component: _confirm_order_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmOrderPage"]
    }
];
let ConfirmOrderPageModule = class ConfirmOrderPageModule {
};
ConfirmOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_confirm_order_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmOrderPage"]]
    })
], ConfirmOrderPageModule);



/***/ }),

/***/ "./src/app/members/confirm-order/confirm-order.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/members/confirm-order/confirm-order.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-structure {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  width: 92%;\n  margin: 4% 2vh;\n}\n\n.child-structure {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 19vh;\n  width: auto;\n  margin: 0.5vh;\n  border-radius: 10px;\n  background-color: #0c0c13;\n}\n\n.price-styling {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-weight: bolder;\n  font-size: 16px;\n  color: greenyellow;\n  background-color: #1C1F2B;\n  width: 100%;\n  height: 90%;\n  margin-bottom: 0;\n  border-radius: 0 0 10px 10px;\n}\n\n.grid-total {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  width: 90%;\n  margin: 4% 2vh;\n}\n\n.summary-header {\n  padding-top: 15px;\n  font-size: x-large;\n}\n\n.summary-container {\n  border-radius: 10px;\n  width: 80vw;\n  background-color: #0C0C13;\n  margin-left: 10vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jb25maXJtLW9yZGVyL0Q6XFxQcm9qZWN0c1xcVHJlZ2dvLWFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcY29uZmlybS1vcmRlclxcY29uZmlybS1vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvY29uZmlybS1vcmRlci9jb25maXJtLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvY29uZmlybS1vcmRlci9jb25maXJtLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLXN0cnVjdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBtYXJnaW46IDQlIDJ2aDtcclxufVxyXG5cclxuLmNoaWxkLXN0cnVjdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTl2aDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwLjV2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEyLCAxOSk7XHJcbn1cclxuXHJcbi5wcmljZS1zdHlsaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUYyQjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuLmdyaWQtdG90YWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDQlIDJ2aDtcclxufVxyXG5cclxuLnN1bW1hcnktaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMxMztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG59IiwiLmdyaWQtc3RydWN0dXJlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiA0JSAydmg7XG59XG5cbi5jaGlsZC1zdHJ1Y3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOXZoO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwLjV2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMxMztcbn1cblxuLnByaWNlLXN0eWxpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFGMkI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuLmdyaWQtdG90YWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNCUgMnZoO1xufVxuXG4uc3VtbWFyeS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uc3VtbWFyeS1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogODB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMxMztcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59Il19 */"

/***/ }),

/***/ "./src/app/members/confirm-order/confirm-order.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/members/confirm-order/confirm-order.page.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPage", function() { return ConfirmOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");







let ConfirmOrderPage = class ConfirmOrderPage {
    constructor(rest, loading, storage, dialogs, router) {
        this.rest = rest;
        this.loading = loading;
        this.storage = storage;
        this.dialogs = dialogs;
        this.router = router;
        this.orderItems = {
            items: [],
            total: null,
            grandTotal: null,
            order_id: null,
            sub_order_id: null
        };
        this.user = null;
        this.total = 0;
        this.taxAmount = 0;
        this.grandTotal = 0;
        this.order = null;
    }
    ngOnInit() {
        this.storage.ready().then(() => {
            this.storage.get('user').then((res) => {
                this.user = res;
            });
        });
        //Get order items selected in previous screen:
        this.loading.create({
            message: 'Fetching Order Details',
            spinner: 'dots',
            showBackdrop: true,
        }).then(loading => {
            loading.present();
            this.storage.ready().then(() => {
                this.storage.get('dishes').then((res) => {
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
                });
            });
        });
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
                this.storage.get('order').then((res) => {
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
    createSubOrder(status, loading) {
        let dto = {
            customer_id: this.user.customer_id,
            order_date: this.rest.formatDate(new Date()),
            order_id: this.order.order_id,
            status: status,
            dishes: this.prepareDishesString().dishes,
            quantities: this.prepareDishesString().quantities
        };
        this.rest.createSubOrder(dto).subscribe((res) => {
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
        }, err => {
            this.dialogs.alert("Your order has been failed, Please Contact Admin ", "ERROR");
        });
    }
    //Create new order
    createOrder(loading) {
        let dto = {
            customer_id: this.user.customer_id,
            orderDate: this.rest.formatDate(new Date()),
            total_amount: this.grandTotal
        };
        this.rest.createOrder(dto).subscribe((res) => {
            this.order = res;
            this.storage.set('order', res);
            //Create new sub order based on order created
            this.createSubOrder("ORDERED", loading);
        }, err => {
            this.dialogs.alert("Your order has been failed, Please Contact Admin ", "ERROR");
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
};
ConfirmOrderPage.ctorParameters = () => [
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfirmOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-order',
        template: __webpack_require__(/*! raw-loader!./confirm-order.page.html */ "./node_modules/raw-loader/index.js!./src/app/members/confirm-order/confirm-order.page.html"),
        styles: [__webpack_require__(/*! ./confirm-order.page.scss */ "./src/app/members/confirm-order/confirm-order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ConfirmOrderPage);



/***/ })

}]);
//# sourceMappingURL=members-confirm-order-confirm-order-module-es2015.js.map