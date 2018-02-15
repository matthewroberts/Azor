webpackJsonp([22],{

/***/ 1256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileFourPage = /** @class */ (function () {
    function ProfileFourPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.following = false;
        this.user = {
            name: 'Marty McFly',
            profileImage: 'assets/img/avatar/marty-avatar.jpg',
            coverImage: 'assets/img/avatar/BTF-ProfileBG.jpg',
            occupation: 'Time Traveler',
            location: 'The Future',
            description: 'Fictional character and the main protagonist of the Back to the Future trilogy.',
            followers: 456,
            following: 1052,
            posts: 35
        };
        this.posts = [
            {
                postImageUrl: 'assets/imgs/pizza1.jpg',
                text: "Loving some pizza from the Hut! #pizzahut #pizza",
                date: 'November 5, 2016',
                likes: 12,
                comments: 4,
                timestamp: '11h ago'
            },
            {
                postImageUrl: 'assets/imgs/pizza2.jpg',
                text: 'HMM Which one to devour first??? #pizzahut #pizza',
                date: 'October 23, 2016',
                likes: 30,
                comments: 64,
                timestamp: '30d ago'
            },
            {
                postImageUrl: 'assets/imgs/pizza3.jpg',
                date: 'June 28, 2016',
                likes: 46,
                text: "Just hanging with @iamjamiefoxx and @channingtatum enjoying some awesome #pizzahut #pizza",
                comments: 66,
                timestamp: '4mo ago'
            },
        ];
    }
    ProfileFourPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ProfileFour Page');
    };
    ProfileFourPage.prototype.follow = function () {
        this.following = !this.following;
        this.toastCtrl.create('Follow user clicked');
    };
    ProfileFourPage.prototype.imageTapped = function (post) {
        this.toastCtrl.create('Post image clicked');
    };
    ProfileFourPage.prototype.comment = function (post) {
        this.toastCtrl.create('Comments clicked');
    };
    ProfileFourPage.prototype.like = function (post) {
        this.toastCtrl.create('Like clicked');
    };
    ProfileFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-profile-four',template:/*ion-inline-start:"C:\Users\mroberts\Documents\Ionic\AzorApp\src\pages\profile\profile-four\profile-four.html"*/'<ion-content padding class="transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n  <div id="content">\n    <div id="profile-info" padding>\n      <img id="profile-image" [src]="user.profileImage">\n      <h3 id="profile-name">{{user.name}}</h3>\n      <p>{{user.occupation}} &bull; {{user.location}}</p>\n      <p class="profile-description">{{user.description}}</p>\n      <button ion-button *ngIf="!following" small color="purple" (click)="follow()">Contact</button>\n      <button ion-button *ngIf="following" class="follow-button" small color="purple" (click)="follow()">Contacted<ion-icon name="checkmark"></ion-icon></button>\n    </div>\n    <hr/>\n    <ion-row class="profile-numbers">\n      <ion-col col-4>\n        <p>Followers</p>\n        <span>{{user.followers}}</span>\n      </ion-col>\n      <ion-col col-4>\n        <p>Following</p>\n        <span>{{user.following}}</span>\n      </ion-col>\n      <ion-col col-4>\n        <p>Posts</p>\n        <span>{{user.posts}}</span>\n      </ion-col>\n    </ion-row>\n    <div id="posts">\n      <ion-card *ngFor="let post of posts">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="user.profileImage">\n          </ion-avatar>\n          <h2 class="sticky">{{user.name}}</h2>\n          <p>{{post.date}}</p>\n        </ion-item>\n        <img [src]="post.postImageUrl" (click)="imageTapped(post)">\n        <ion-card-content>\n          <p>{{post.text}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button color="purple" clear small icon-left (click)="like(post)">\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n                {{post.likes}} Likes\n              </button>\n          </ion-col>\n          <ion-col col-5>\n            <button ion-button no-padding color="purple" clear small icon-left (click)="comment(post)">\n                <ion-icon name=\'text\'></ion-icon>\n                {{post.comments}} Comments\n              </button>\n          </ion-col>\n          <ion-col col-3 align-self-center text-center>\n            <p>\n              {{post.timestamp}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mroberts\Documents\Ionic\AzorApp\src\pages\profile\profile-four\profile-four.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */]])
    ], ProfileFourPage);
    return ProfileFourPage;
}());

//# sourceMappingURL=profile-four.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFourPageModule", function() { return ProfileFourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_four__ = __webpack_require__(1256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileFourPageModule = /** @class */ (function () {
    function ProfileFourPageModule() {
    }
    ProfileFourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__profile_four__["a" /* ProfileFourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile_four__["a" /* ProfileFourPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__profile_four__["a" /* ProfileFourPage */]
            ]
        })
    ], ProfileFourPageModule);
    return ProfileFourPageModule;
}());

//# sourceMappingURL=profile-four.module.js.map

/***/ })

});
//# sourceMappingURL=22.js.map