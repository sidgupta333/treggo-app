(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/members/status/status.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/status/status.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button style=\"color: rgb(42, 129, 170)\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title><span style=\"float: left; width: 80%; text-align: left;\">ORDER STATUS </span>\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf=\"order != null\">\n        <div class=\"flex-container-horizontal\">\n            <img *ngIf=\"currentStatus != 'COMPLETED' && currentStatus != 'CLOSED'\" src=\"../../../assets/images/giphy.gif\" height=\"300\">\n            <img *ngIf=\"currentStatus == 'COMPLETED' || currentStatus == 'CLOSED'\" src=\"../../../assets/images/correct.png\" height=\"300\">\n        </div>\n        <br>\n        <br>\n        <div class=\"flex-container-vertical\">\n            <h4> <span style=\"font-weight: lighter; padding-bottom: 2px; border-bottom: 1px solid white;\">CURRENT\n                    STATUS:\n                </span> </h4>\n\n            <h1 *ngIf=\"currentStatus != 'COMPLETED'\"><span style=\"font-weight: bold; padding-bottom: 2px; color: rgb(241, 228, 23);\"> {{currentStatus}} </span>\n            </h1>\n\n            <h1 *ngIf=\"currentStatus == 'COMPLETED'\"><span style=\"font-weight: bold; padding-bottom: 2px; color: rgb(56, 243, 23);\"> COMPLETED </span></h1>\n\n            <div></div>\n            <div style=\"margin-top: 15vh;\" class=\"flex-container-horizontal\">\n                <ion-button (click)=\"navigateToDashboard()\" color=\"success\">Order Again?</ion-button> &nbsp;\n                <ion-button *ngIf=\"currentStatus == 'COMPLETED'\" (click)=\"closeOrder()\" color=\"danger\">Complete Order\n                </ion-button>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"order == null\" class=\"flex-container-vertical\">\n        <h5 style=\"color: rgb(155, 152, 158); margin-top: 45vh;\"> NO ITEMS IN CART</h5>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/members/status/status.module.ts":
/*!*************************************************!*\
  !*** ./src/app/members/status/status.module.ts ***!
  \*************************************************/
/*! exports provided: StatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageModule", function() { return StatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status.page */ "./src/app/members/status/status.page.ts");







var routes = [
    {
        path: '',
        component: _status_page__WEBPACK_IMPORTED_MODULE_6__["StatusPage"]
    }
];
var StatusPageModule = /** @class */ (function () {
    function StatusPageModule() {
    }
    StatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_status_page__WEBPACK_IMPORTED_MODULE_6__["StatusPage"]]
        })
    ], StatusPageModule);
    return StatusPageModule;
}());



/***/ }),

/***/ "./src/app/members/status/status.page.scss":
/*!*************************************************!*\
  !*** ./src/app/members/status/status.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvc3RhdHVzL3N0YXR1cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/members/status/status.page.ts":
/*!***********************************************!*\
  !*** ./src/app/members/status/status.page.ts ***!
  \***********************************************/
/*! exports provided: StatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPage", function() { return StatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");







var StatusPage = /** @class */ (function () {
    function StatusPage(rest, loading, storage, dialogs, router) {
        this.rest = rest;
        this.loading = loading;
        this.storage = storage;
        this.dialogs = dialogs;
        this.router = router;
        this.order = null;
        this.currentStatus = null;
    }
    StatusPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.create({
            message: 'Completing your order',
            spinner: 'dots',
            showBackdrop: true,
        }).then(function (loading) {
            loading.present();
            _this.storage.ready().then(function () {
                _this.storage.get('placedOrder').then(function (res) {
                    _this.order = res;
                    if (res) {
                        _this.rest.getSubOrder(_this.order.sub_order_id).subscribe(function (res) {
                            loading.dismiss();
                            _this.currentStatus = res.status;
                        });
                    }
                    else {
                        loading.dismiss();
                    }
                    // Fetch status of order after every 5 seconds
                    var interval = window.setInterval(function () {
                        _this.rest.getSubOrder(_this.order.sub_order_id).subscribe(function (res) {
                            _this.currentStatus = res.status;
                            _this.rest.getOrder(_this.order.order_id).subscribe(function (res) {
                                if (res.order_status == "CLOSED") {
                                    window.clearInterval(interval);
                                    _this.dialogs.alert("Your order closed successfully, Thank you for using Treggo Technical Restaurant :) ", "SUCCESS").then(function (res) {
                                        _this.router.navigate(['home']);
                                    });
                                }
                            });
                        });
                    }, 5000);
                });
            });
        });
    };
    StatusPage.prototype.navigateToDashboard = function () {
        this.router.navigate(['menu', 'dashboard']);
    };
    StatusPage.prototype.closeOrder = function () {
        var _this = this;
        var dto1 = {
            status: 'COMPLETED',
            subOrderId: this.order.sub_order_id
        };
        this.rest.updateSubOrder(dto1).subscribe(function (res) {
            var dto2 = {
                status: 'CLOSED',
                order_id: _this.order.order_id
            };
            _this.rest.updateOrder(dto2).subscribe(function (res) {
                _this.dialogs.alert("Your order closed successfully, Thank you for using Treggo Technical Restaurant :) ", "SUCCESS").then(function (res) {
                    _this.router.navigate(['home']);
                });
            }, function (err) {
                _this.dialogs.alert("Unable to close order, Please Contact Admin ", "ERROR");
            });
        }, function (err) {
            _this.dialogs.alert("Unable to close order, Please Contact Admin ", "ERROR");
        });
    };
    StatusPage.ctorParameters = function () { return [
        { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    StatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! raw-loader!./status.page.html */ "./node_modules/raw-loader/index.js!./src/app/members/status/status.page.html"),
            styles: [__webpack_require__(/*! ./status.page.scss */ "./src/app/members/status/status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StatusPage);
    return StatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=status-status-module-es5.js.map