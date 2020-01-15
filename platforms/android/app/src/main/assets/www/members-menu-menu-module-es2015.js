(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/members/menu/menu.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/menu/menu.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" type=\"overlay\" contentid=\"content\">\n    <ion-header>\n        <div class=\"menu-header\">\n\n            <img style=\"width: 60%;\" src=\"../../../assets/images/Treggo-header.png\">\n            <img style=\"width: 60%;\" src=\"../../../assets/images/header-2.png\">\n        </div>\n\n    </ion-header>\n\n\n    <ion-content>\n        <ion-list>\n            <ion-menu-toggle auto-hide=\"true\">\n                <ion-item (click)=\"navigateToDashboard()\" routerDirection=\"root\">\n                    <ion-icon name=\"home\" color=\"light\"></ion-icon>\n                    <span class=\"menu-item\"> Home</span>\n                </ion-item>\n\n                <ion-item (click)=\"navigateToStatus()\" routerDirection=\"root\">\n                    <ion-icon name=\"ios-barcode\" color=\"light\"></ion-icon>\n                    <span class=\"menu-item\"> Order Status</span>\n                </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>"

/***/ }),

/***/ "./src/app/members/menu/menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/members/menu/menu.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/members/menu/menu.page.ts");







const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/members/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule) },
            { path: 'status', loadChildren: () => Promise.all(/*! import() | status-status-module */[__webpack_require__.e("common"), __webpack_require__.e("status-status-module")]).then(__webpack_require__.bind(null, /*! ../status/status.module */ "./src/app/members/status/status.module.ts")).then(m => m.StatusPageModule) }
        ]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/members/menu/menu.page.scss":
/*!*********************************************!*\
  !*** ./src/app/members/menu/menu.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-header {\n  height: 20vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 3vh;\n  border-bottom: 1px solid black;\n}\n\n.menu-item {\n  margin-left: 8vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW51L0Q6XFxQcm9qZWN0c1xcVHJlZ2dvLWFwcC9zcmNcXGFwcFxcbWVtYmVyc1xcbWVudVxcbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4dnc7XHJcbn0iLCIubWVudS1oZWFkZXIge1xuICBoZWlnaHQ6IDIwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogM3ZoO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogOHZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/menu/menu.page.ts":
/*!*******************************************!*\
  !*** ./src/app/members/menu/menu.page.ts ***!
  \*******************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToDashboard() {
        this.router.navigate(['menu', 'dashboard']);
    }
    navigateToStatus() {
        this.router.navigate(['menu', 'status']);
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/members/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/members/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=members-menu-menu-module-es2015.js.map