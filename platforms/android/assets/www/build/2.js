webpackJsonp([2],{

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global_setting__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlidesListPage = /** @class */ (function () {
    function SlidesListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'SlidesListPage';
        this.items = __WEBPACK_IMPORTED_MODULE_2__app_global_setting__["o" /* LISTMENUSLIDE */];
    }
    SlidesListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.component);
    };
    SlidesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\Users\mroberts\Documents\Ionic\AzorApp\src\pages\slide\slides.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      {{item.title}}\n    </button>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mroberts\Documents\Ionic\AzorApp\src\pages\slide\slides.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SlidesListPage);
    return SlidesListPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesListPageModule", function() { return SlidesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidesListPageModule = /** @class */ (function () {
    function SlidesListPageModule() {
    }
    SlidesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slides__["a" /* SlidesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slides__["a" /* SlidesListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slides__["a" /* SlidesListPage */]
            ]
        })
    ], SlidesListPageModule);
    return SlidesListPageModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map