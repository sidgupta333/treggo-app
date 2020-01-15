(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/members/dashboard/dashboard.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/dashboard/dashboard.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button style=\"color: rgb(42, 129, 170)\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title><span style=\"float: left; width: 80%; text-align: left;\">TREGGO </span>\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class=\"flex-container-vertical page-layout\">\n        <p class=\"\">Highlights of Restaurant</p>\n    </div>\n\n    <!-- Image sliders with dynamic images -->\n    <ion-slides pager=\"true\" [options]=\"slidesConfig\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n        <ion-slide *ngFor=\"let s of bannersUrls\">\n            <img style=\"width: 100%; height: 250px;\" [src]=\"s\">\n\n        </ion-slide>\n    </ion-slides>\n\n\n\n    <ion-card style=\"margin-top: 25px;\" *ngFor=\"let category of dishes; let i = index\">\n        <ion-card-header class=\"accordion-header flex-container-horizontal\" (click)=\"toggleAccordion(i)\">\n            <ion-icon name=\"arrow-down\"></ion-icon> &nbsp; {{category.category_name}} &nbsp;\n            <ion-icon name=\"arrow-down\"></ion-icon>\n        </ion-card-header>\n        <ion-card-content class=\"accordion-content\" [ngClass]=\"{active: accordionExpanded[i]}\">\n            <div class=\"dish-flex\">\n\n                <div *ngFor=\"let dish of category.dishes\" class=\"dish-card\">\n                    <div class=\"dish-header\">{{ dish.dish_name}} </div>\n                    <img class=\"dish-img\" [src]=\"dish.imgUrl\">\n                    <ion-button [@Animation1] *ngIf=\"dish.count == 0\" (click)=\"addCount(dish)\" style=\"margin: 0; margin-top: 5px;\" expand=\"full\" color=\"success\">ADD</ion-button>\n\n\n                    <div class=\"flex-container-horizontal\" [@Animation1] *ngIf=\"dish.count != 0\">\n                        <ion-button (click)=\"minusCount(dish)\" color=\"danger\"> - </ion-button>\n                        <div class=\"count-text\"><span>{{dish.count}}</span></div>\n                        <ion-button (click)=\"addCount(dish)\" color=\"success\"> + </ion-button>\n                    </div>\n                </div>\n            </div>\n\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-button (click)=\"completeOrder()\" expand=\"full\" size=\"large\" color=\"primary\">CONTINUE</ion-button>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordion-header {\n  background-color: #2d9aad;\n  color: #fff;\n}\n\n.accordion-content {\n  padding: 0;\n  max-height: 0px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.active {\n  max-height: 100vh;\n}\n\n.dish-card {\n  color: #fff;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  width: 180px;\n  margin-right: 15px;\n  margin-top: 5px;\n  height: 240px;\n  background-color: #28283d;\n}\n\n.dish-card ::-webkit-scrollbar {\n  display: none;\n}\n\n.dish-flex {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.dish-flex ::-webkit-scrollbar {\n  display: none;\n}\n\n.dish-header {\n  padding: 10px 0px;\n  width: 100%;\n  background-color: #b12323;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n\n.dish-img {\n  width: 180px;\n  height: 155px;\n}\n\n.count-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 90px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvRDpcXFByb2plY3RzXFxUcmVnZ28tYXBwL3NyY1xcYXBwXFxtZW1iZXJzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQUs7RUFDRyxhQUFBO0FDRVI7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQUs7RUFDRyxhQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxNTQsIDE3Myk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uZGlzaC1jYXJkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNjEpO1xyXG4gICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXNoLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlzaC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDM1LCAzNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uZGlzaC1pbWcge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTVweDtcclxufVxyXG5cclxuLmNvdW50LXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59IiwiLmFjY29yZGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ5YWFkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFjY29yZGlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWF4LWhlaWdodDogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWN0aXZlIHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5kaXNoLWNhcmQge1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4M2Q7XG59XG4uZGlzaC1jYXJkIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzaC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uZGlzaC1mbGV4IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzaC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMTIzMjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uZGlzaC1pbWcge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTU1cHg7XG59XG5cbi5jb3VudC10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var DashboardPage = /** @class */ (function () {
    function DashboardPage(rest, loading, dialogs, storage, router) {
        this.rest = rest;
        this.loading = loading;
        this.dialogs = dialogs;
        this.storage = storage;
        this.router = router;
        this.slidesConfig = {
            initialSlide: 0,
            autoplay: true,
            speed: 400,
            centeredSlides: true,
            pager: true,
        };
        this.bannersUrls = [];
        this.banners = [];
        this.dishes = [];
        this.accordionExpanded = [];
    }
    DashboardPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        //Delete any existing order data:
        this.storage.ready().then(function () {
            _this.storage.remove('dishes');
        });
        // Get All the banners from the server
        this.loading.create({
            message: 'Fetching Dishes',
            spinner: 'dots',
            showBackdrop: true,
        }).then(function (loading) {
            loading.present();
            //Get all the available dishes:
            _this.rest.getAllDishes().subscribe(function (res) {
                loading.dismiss();
                _this.dishes = res;
                res.forEach(function (e) {
                    _this.accordionExpanded.push(false);
                });
                //Create image URL based on dish ID:
                _this.dishes.forEach(function (category) {
                    category.dishes.forEach(function (dish) {
                        dish.imgUrl = _this.rest.createDishUrl(dish.dish_id);
                        dish.count = 0;
                    });
                });
            });
            _this.rest.getAllBanners().subscribe(function (res) {
                _this.banners = res;
                _this.banners.forEach(function (element) {
                    _this.bannersUrls.push(_this.rest.createBannerUrl(element.banner_id));
                });
            });
        });
    };
    //Create order object with all dishes:
    DashboardPage.prototype.completeOrder = function () {
        this.storage.set('dishes', this.dishes);
        console.log("Dishes -> ", this.dishes);
        this.router.navigate(['confirm-order']);
    };
    DashboardPage.prototype.toggleAccordion = function (i) {
        this.accordionExpanded[i] = !this.accordionExpanded[i];
    };
    DashboardPage.prototype.addCount = function (dish) {
        dish.count++;
    };
    DashboardPage.prototype.minusCount = function (dish) {
        dish.count--;
    };
    DashboardPage.ctorParameters = function () { return [
        { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/members/dashboard/dashboard.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('Animation1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.2s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/members/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map