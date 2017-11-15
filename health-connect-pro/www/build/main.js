webpackJsonp([0],{

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pages__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__app_pages__["c" /* AllFacilitiesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__app_pages__["b" /* AddFacilityPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__app_pages__["j" /* MyFacilitiesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__app_pages__["g" /* InboxPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="View All" tabIcon="home"></ion-tab>\n    <!-- <ion-tab [root]="tab2Root" tabTitle="Show data" tabIcon="clipboard"></ion-tab> -->\n    <ion-tab [root]="tab2Root" tabTitle="Add New" tabIcon="create"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="My Facilities" tabIcon="happy"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Inbox" tabIcon="mail"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatData = (function () {
    function ChatData(http) {
        this.http = http;
        // apiPath = "http://localhost:3000";
        // apiPath = environment.path;
        this.apiPath = "https://api-server-sheen.herokuapp.com";
    }
    ChatData.prototype.getChatByChatId = function (chatId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/chat/' + chatId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatData.prototype.getInboxByUID = function (UID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/chat/inbox/' + UID)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatData.prototype.saveChat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiPath + '/chat', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return ChatData;
}());
ChatData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ChatData);

//# sourceMappingURL=chat-data.js.map

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 257;

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 299;

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    path: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapData = (function () {
    function MapData(http, authProvider) {
        this.http = http;
        this.authProvider = authProvider;
    }
    MapData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    MapData.prototype.processData = function (data) {
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        return this.data;
    };
    MapData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    return MapData;
}());
MapData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]])
], MapData);

//# sourceMappingURL=map-data.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_data__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, storage, chatData, userData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.chatData = chatData;
        this.userData = userData;
        this.opposingUser = { name: '', uid: '' };
        this.senderUser = { name: '', uid: '' };
        this.submitted = false;
        this.msgData = { message: '' };
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__('https://websocket-io-sheen.herokuapp.com/');
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChatPage');
        this.chatId = this.navParams.data.chatId;
        this.storage.get('UID').then(function (val) {
            _this.senderUID = val;
            _this.getUserForSender(_this.senderUID);
            _this.receiverUID = _this.getOpposingUIDForChat(_this.chatId);
            _this.getUserForOpposing(_this.receiverUID);
        });
        this.getChatByChatId(this.chatId);
        this.socket.on('new-message', function (data) {
            if (data.message.chatId === this.chatId) {
                console.log(data, data.message, "test");
                this.chats.push(data.message);
            }
        }.bind(this));
    };
    ChatPage.prototype.getOpposingUIDForChat = function (chatId) {
        var opposingUID;
        opposingUID = chatId.replace(this.senderUID, "");
        opposingUID = opposingUID.replace("-", "");
        return opposingUID;
    };
    ChatPage.prototype.ionViewWillEnter = function () {
        this.content.resize();
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom();
    };
    ChatPage.prototype.getChatByChatId = function (chatId) {
        var _this = this;
        this.chatData.getChatByChatId(chatId).then(function (res) {
            _this.chats = res;
        }, function (err) {
            console.log(err);
        });
    };
    ChatPage.prototype.getUserForOpposing = function (receiverUID) {
        var _this = this;
        this.userData.getNormalUserByUID(receiverUID).then(function (res) {
            _this.opposingUser = res;
            _this.opposingUserName = _this.opposingUser.name;
        }, function (err) {
            console.log(err);
        });
    };
    ChatPage.prototype.getUserForSender = function (senderUID) {
        var _this = this;
        this.userData.getProUserByUID(senderUID).then(function (res) {
            _this.senderUser = res;
            _this.senderUserName = _this.senderUser.name;
        }, function (err) {
            console.log(err);
        });
    };
    ChatPage.prototype.sendMessage = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var message = this.msgData.message;
            this.msgData = {
                chatId: this.chatId,
                senderUID: this.senderUID,
                receiverUID: this.receiverUID,
                senderName: this.senderUserName,
                proUserName: this.senderUserName,
                normalUserName: this.opposingUserName,
                message: message
            };
            this.chatData.saveChat(this.msgData).then(function (result) {
                _this.socket.emit('save-message', result);
                _this.msgData.message = '';
                _this.submitted = false;
                // this.navCtrl.pop();
                // this.navCtrl.push(ChatPage, { chatId: this.chatId });
            }, function (err) {
                console.log(err);
            });
        }
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" no-border-bottom>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Messages - {{opposingUserName}}</ion-title>\n  </ion-navbar>\n\n  <!-- <ion-toolbar color="secondary" style="display: hidden;">\n    <ion-title>Chat</ion-title>\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> -->\n\n  <ion-list>\n\n    <!-- <ion-item-group *ngFor="let group of groups" [hidden]="group.hide"> -->\n\n    <!-- <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider> -->\n    <!-- <ion-item></ion-item> -->\n    <ion-item-sliding *ngFor="let chat of chats" #slidingItem>\n\n      <button ion-item>\n        <h3>{{chat.senderName}}</h3>\n        <p>\n\n          {{chat.message}}\n        </p>\n        <p style="float: right;">{{chat.updated_at | date: \'medium\' }}</p>\n      </button>\n\n      <!-- <ion-item-options>\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n            Favorite\n          </button>\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n            Remove\n          </button>\n        </ion-item-options> -->\n\n    </ion-item-sliding>\n\n    <!-- </ion-item-group> -->\n\n  </ion-list>\n\n  <!-- <ion-list-header [hidden]="shownSessions > 0">\n      No Sessions Found\n  </ion-list-header> -->\n\n  <!-- <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <form #sendMessageForm="ngForm" novalidate>\n    <ion-list no-lines>\n\n      <ion-item>\n        <ion-label stacked color="primary">Message</ion-label>\n        <ion-input [(ngModel)]="msgData.message" name="message" type="text" #message="ngModel" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="message.valid || submitted == false" color="danger" padding-left>\n        Message is required\n      </p>\n    </ion-list>\n\n    <div padding>\n      <button ion-button (click)="sendMessage(sendMessageForm)" type="submit" block>Send Message</button>\n    </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_chat_data__["a" /* ChatData */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(473);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database_deprecated__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_map_data__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_chat_data__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_geocoder_geocoder__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { HomePage } from '../pages/home/home';


















var firebaseConfig = {
    apiKey: "AIzaSyCgHczEUO2Q7zdqBCzZ4yGCPX3tBKQp1PM",
    authDomain: "ionic-frontend-sheen.firebaseapp.com",
    databaseURL: "https://ionic-frontend-sheen.firebaseio.com",
    projectId: "ionic-frontend-sheen",
    storageBucket: "ionic-frontend-sheen.appspot.com",
    messagingSenderId: "498093185822"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["k" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["i" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["g" /* InboxPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["c" /* AllFacilitiesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["f" /* FacilityDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["b" /* AddFacilityPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["j" /* MyFacilitiesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["e" /* EditFacilityPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["d" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["k" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["l" /* SupportPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["k" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["i" /* MapPage */], name: 'MapPage', segment: 'map' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["g" /* InboxPage */], name: 'InboxPage', segment: 'inbox' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["l" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["d" /* ChatPage */], name: 'ChatPage', segment: 'chat' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["e" /* EditFacilityPage */], name: 'EditFacilityPage', segment: 'editFacility' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["j" /* MyFacilitiesPage */], name: 'MyFacilitiesPage', segment: 'myFacilities' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["b" /* AddFacilityPage */], name: 'AddFacilityPage', segment: 'addFacility' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["f" /* FacilityDetailPage */], name: 'FacilityDetailPage', segment: 'facilityDetail' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages__["c" /* AllFacilitiesPage */], name: 'AllFacilitiesPage', segment: 'allFacilities' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["a" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["k" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["i" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["g" /* InboxPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["c" /* AllFacilitiesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["f" /* FacilityDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["b" /* AddFacilityPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["j" /* MyFacilitiesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["e" /* EditFacilityPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["d" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["k" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages__["l" /* SupportPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_map_data__["a" /* MapData */],
            __WEBPACK_IMPORTED_MODULE_17__providers_chat_data__["a" /* ChatData */],
            __WEBPACK_IMPORTED_MODULE_18__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_20__providers_facility_data__["a" /* FacilityData */],
            __WEBPACK_IMPORTED_MODULE_21__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { HomePage } from '../pages/home/home';


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, menu, events, authProvider, alertCtrl, storage) {
        var _this = this;
        this.afAuth = afAuth;
        this.menu = menu;
        this.events = events;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'View All', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages__["c" /* AllFacilitiesPage */], index: 0, icon: 'home' },
            { title: 'Add New', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages__["b" /* AddFacilityPage */], index: 1, icon: 'create' },
            { title: 'My Facilities', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages__["j" /* MyFacilitiesPage */], index: 2, icon: 'happy' },
            { title: 'Inbox', name: 'InboxPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages__["g" /* InboxPage */], index: 3, icon: 'mail' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["l" /* SupportPage */], icon: 'help' },
            { title: 'Logout', name: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_6__pages__["k" /* SignupPage */], icon: 'person-add' }
        ];
        afAuth.authState.subscribe(function (user) {
            _this.enableMenu(user !== null);
            if (user) {
                _this.rootPage = 'TabsPage';
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */]);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["m" /* TabsPage */]);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages__["h" /* LoginPage */]);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.getActivePage = function () {
        if (this.nav.getActive())
            return this.nav.getActive().name;
        else
            return '';
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.authProvider.logout();
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/app/app.html"*/'<ion-split-pane>\n<ion-menu id="loggedOutMenu" [content]="content" >\n\n      <ion-header color="primary">\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class="outer-content">\n\n        <ion-list>\n          <ion-list-header>\n            Account\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n            <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n\n    <!-- logged in menu -->\n    <ion-menu id="loggedInMenu" [content]="content">\n\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class="outer-content">\n\n        <ion-list>\n          <ion-list-header>\n            Navigate\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n            <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n        <br/>\n        <br/>\n        <ion-list>\n          <ion-list-header>\n            Account\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n            <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n<ion-nav #content swipeBackEnabled="false" main [root]="rootPage"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authProvider, events, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        // login: {username?: string, password?: string} = {};
        this.login = { username: "", password: "" };
        this.submitted = false;
        this.message = '';
        this.events.subscribe('user:login_login.ts', function (data) {
            _this.message = data;
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // this.selectRole();
    };
    LoginPage.prototype.googleLogin = function () {
        this.authProvider.googleLogin();
    };
    LoginPage.prototype.facebookLogin = function () {
        this.authProvider.facebookLogin();
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.authProvider.login(this.login.username, this.login.password);
            // this.navCtrl.push(TabsPage);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  	<div class="logo">\n        <img src="assets/img/appicon.png" alt="Ionic logo">\n      </div>\n\n  <form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n		</ion-row>\n		<div>\n			<p ion-text color="danger" padding-left>{{message}}</p>\n		</div>\n  </form>\n\n  <br/>\n\n  <!-- <button ion-button block color="danger" (click)="googleLogin()">\n    <ion-icon name="logo-googleplus"></ion-icon>\n    Login with Google\n  </button> -->\n\n  <button ion-button block color="possitive" (click)="facebookLogin()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    &nbsp; &nbsp; Login with Facebook\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, events, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.authProvider = authProvider;
        this.signup = { email: "", password: "", name: "" };
        this.submitted = false;
        this.message = '';
        this.events.subscribe('user:signup_signup.ts', function (data) {
            _this.message = data;
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.authProvider.signup(this.signup.email, this.signup.password, this.signup.name);
        }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Signup</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="login-page">\n\n    <div class="logo">\n      <img src="assets/img/appicon.png" alt="Ionic Logo">\n    </div>\n\n    <form #signupForm="ngForm" novalidate>\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label stacked color="primary">Email</ion-label>\n          <ion-input [(ngModel)]="signup.email" name="email" type="text" #email="ngModel" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n          Email is required\n        </p>\n\n        <ion-item>\n          <ion-label stacked color="primary">Password</ion-label>\n          <ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n          Password is required\n        </p>\n\n        <ion-item>\n          <ion-label stacked color="primary">Provider Name</ion-label>\n          <ion-input [(ngModel)]="signup.name" name="name" type="text" #name="ngModel" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n          Provider Name is required\n        </p>\n      </ion-list>\n\n      <div padding>\n        <button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n      </div>\n\n      <div>\n        <p ion-text color="danger" padding-left>{{message}}</p>\n      </div>\n    </form>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_map_data__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams, mapData, platform, geolocation, facilityData, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapData = mapData;
        this.platform = platform;
        this.geolocation = geolocation;
        this.facilityData = facilityData;
        this.toastCtrl = toastCtrl;
        this.facilities = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        console.log("it worked");
        this.loadPage();
        // this.presentMyToast();
    };
    MapPage.prototype.loadPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFacilityList()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadMap()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var infowindow = new google.maps.InfoWindow({
                content: ''
            });
            var marker, i;
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                center: latLng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var markers = [];
            var locationsArray = [];
            var closestFacility = '';
            //First Location - Your Current Location
            locationsArray.push(['Your Current Location', position.coords.latitude, position.coords.longitude, "", ""]);
            _this.facilities.forEach(function (facility) {
                // markers.push([facility.name, facility.lat, facility.lng])
                locationsArray.push([facility.name, facility.lat, facility.lng, facility.description, facility.openingHours]);
            });
            for (i = 0; i < locationsArray.length; i++) {
                marker = new google.maps.Marker({
                    title: locationsArray[i][0],
                    position: new google.maps.LatLng(locationsArray[i][1], locationsArray[i][2]),
                    map: _this.map
                });
                markers.push(marker);
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        var infoWindowContent = '<div class="info_content"><h6>' + locationsArray[i][0] + '</h6><p>' +
                            locationsArray[i][3] + '</p><p>' +
                            'Opening Hours:<br/>' + locationsArray[i][4] +
                            '</p></div>';
                        if (i == 0) {
                            infowindow.setContent(locationsArray[i][0]);
                        }
                        if (i !== 0) {
                            infowindow.setContent(infoWindowContent);
                        }
                        ;
                        infowindow.open(this.map, marker);
                    };
                })(marker, i));
            }
            _this.markerData = markers;
            for (i = 1; i < markers.length; i++) {
                position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                bounds.extend(position);
            }
            google.maps.event.addListenerOnce(_this.map, 'tilesloaded', find_closest_marker);
            function find_closest_marker(event) {
                var j;
                var distances = [];
                var closest = -1;
                for (j = 1; j < markers.length; j++) {
                    var d = google.maps.geometry.spherical.computeDistanceBetween(markers[j].position, latLng);
                    distances[j] = d;
                    if (closest == -1 || d < distances[closest]) {
                        closest = j;
                    }
                }
                closestFacility = markers[closest].getTitle();
                console.log('Closest marker is: ' + markers[closest].getTitle());
                alert('Closest Facility is: ' + markers[closest].getTitle());
            }
            // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
            var boundsListener = google.maps.event.addListener((_this.map), 'bounds_changed', function (event) {
                this.setZoom(14);
                google.maps.event.removeListener(boundsListener);
            });
        }, function (err) {
            console.log(err);
        });
    };
    MapPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapPage.prototype.getFacilityList = function () {
        var _this = this;
        this.facilityData.getAllFacilities().then(function (res) {
            _this.facilities = res;
        }, function (err) {
            console.log(err);
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_map_data__["a" /* MapData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__providers_facility_data__["a" /* FacilityData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_data__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InboxPage = (function () {
    function InboxPage(navCtrl, navParams, chatData, authProvider, userData, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatData = chatData;
        this.authProvider = authProvider;
        this.userData = userData;
        this.storage = storage;
        this.http = http;
        this.isEmpty = true;
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InboxPage');
        this.storage.get('UID').then(function (val) {
            _this.myUID = val;
        });
        this.authProvider.getUid().then(function (uid) {
            _this.getInbox(uid);
        });
    };
    InboxPage.prototype.getInbox = function (UID) {
        var _this = this;
        this.chatData.getInboxByUID(UID).then(function (res) {
            _this.inboxChats = res;
            _this.originalInboxChats = _this.inboxChats;
            if (_this.originalInboxChats.length == 0) {
                _this.isEmpty = true;
            }
            else {
                _this.isEmpty = false;
            }
            ;
        }, function (err) {
            console.log(err);
        });
    };
    InboxPage.prototype.goToChat = function (chatId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], { chatId: chatId });
    };
    InboxPage.prototype.searchInbox = function (ev) {
        // Reset items back to all of the items
        this.inboxChats = this.originalInboxChats;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.inboxChats = this.inboxChats.filter(function (inboxChat) {
                if (inboxChat.proUserName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    inboxChat.normalUserName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    inboxChat.message.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    inboxChat.updated_at.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    return true;
            });
        }
    };
    return InboxPage;
}());
InboxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inbox',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/inbox/inbox.html"*/'<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom color="danger">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inbox</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n      <ion-searchbar color="primary" (ionInput)="searchInbox($event)" placeholder="Search Inbox">\n      </ion-searchbar>\n    </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngIf="isEmpty">\n    <ion-card-header>Your Inbox is Empty!</ion-card-header>\n\n    <ion-card-content>\n      <p>There will be items on this page once people contact you!</p>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-list>\n      <ion-item-sliding *ngFor="let chat of inboxChats" #slidingItem>\n\n        <button ion-item (click)="goToChat(chat.chatId)">\n          <h3>{{chat.normalUserName}}</h3>\n          <p>\n            {{chat.message}}\n          </p>\n          <p style="float: right;">{{chat.updated_at | date: \'medium\' }}</p>\n        </button>\n\n      </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/inbox/inbox.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_chat_data__["a" /* ChatData */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]])
], InboxPage);

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFacilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_pages__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllFacilitiesPage = (function () {
    function AllFacilitiesPage(navCtrl, navParams, events, facilityData, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.facilityData = facilityData;
        this.storage = storage;
        this.http = http;
    }
    AllFacilitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllFacilityPage');
        this.getFacilityList();
    };
    AllFacilitiesPage.prototype.searchFacilities = function (ev) {
        // Reset items back to all of the items
        this.facilities = this.originalFacilities;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.facilities = this.facilities.filter(function (facility) {
                if (facility.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    facility.description.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    facility.address.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    facility.publicOrPrivate.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    return true;
            });
        }
    };
    AllFacilitiesPage.prototype.getFacilityList = function () {
        var _this = this;
        this.facilityData.getAllFacilities().then(function (res) {
            _this.facilities = res;
            _this.originalFacilities = _this.facilities;
        }, function (err) {
            console.log(err);
        });
    };
    AllFacilitiesPage.prototype.goToFacility = function (facilityData) {
        console.log("clicked");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__app_pages__["f" /* FacilityDetailPage */], { facilityId: facilityData._id, name: facilityData.name });
    };
    AllFacilitiesPage.prototype.getBadgeClass = function (facility) {
        return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
    };
    return AllFacilitiesPage;
}());
AllFacilitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-facilites',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/all-facilities/all-facilities.html"*/'<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom color="primary">\n\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>All Medical Facilities</ion-title>\n\n      </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary" (ionInput)="searchFacilities($event)" placeholder="Search">\n    </ion-searchbar>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n  <div class="header-image"></div>\n  <ion-list>\n\n    <ion-item *ngFor="let facility of facilities">\n\n      <button ion-item (click)="goToFacility(facility)">\n        <ion-row>\n          <ion-col col-2>\n              <ion-avatar item-left>\n                  <img src="https://www.bestmasterofscienceinnursing.com/wp-content/uploads/2015/03/Kaiser-foundation-hospital-modern-hospitals.jpg?x86614" />\n                </ion-avatar>\n          </ion-col>\n          <ion-col offset-2 col-6>\n              <h2>{{facility.name}}</h2>\n              <ion-badge [color]="getBadgeClass(facility)">{{facility.publicOrPrivate}}</ion-badge>\n              <p>Facility Type: {{facility.facilityType}}</p>\n              <p>Contact Number: {{facility.contactNumber}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n\n        </ion-row>\n\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/all-facilities/all-facilities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__["a" /* FacilityData */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
], AllFacilitiesPage);

//# sourceMappingURL=all-facilities.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_pages__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the FacilityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacilityDetailPage = (function () {
    function FacilityDetailPage(navCtrl, navParams, facilityData, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facilityData = facilityData;
        this.storage = storage;
        this.facility = { lat: 0,
            lng: 0,
            ownerUID: '',
            publicOrPrivate: '',
            name: '',
            address: '',
            postal: '',
            facilityType: '',
            description: '',
            openingHours: '',
            peakHours: '',
            serviceProvided: '',
            healthCareGroup: '' };
        this.isOwner = false;
    }
    FacilityDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacilityDetailPage');
        // console.log(this.navParams.data, "Data");
        this.facilityId = this.navParams.data.facilityId;
        this.getFacilityDetail(this.facilityId);
    };
    FacilityDetailPage.prototype.getFacilityDetail = function (facilityId) {
        var _this = this;
        this.facilityData.getFacilityByID(facilityId).then(function (res) {
            _this.facility = res;
            console.log(_this.facility);
            _this.storage.get('UID').then(function (val) {
                if (val == _this.facility.ownerUID) {
                    _this.isOwner = true;
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    FacilityDetailPage.prototype.goToEditFacilityDetail = function (facilityId) {
        console.log("clicked");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__app_pages__["e" /* EditFacilityPage */], { facilityId: facilityId });
    };
    FacilityDetailPage.prototype.getClass = function (facility) {
        return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
    };
    return FacilityDetailPage;
}());
FacilityDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-facility-detail',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/facility-detail/facility-detail.html"*/'<!--\n  Generated template for the FacilityDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{facility.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-card *ngIf="facility">\n    <ion-card-content>\n      <ion-item>\n\n        <ion-avatar item-left>\n          <img src="http://cdn.centralfloridalifestyle.com/2016/09/modern-medical-advancements.jpg" />\n        </ion-avatar>\n        <h2>{{facility.name}}</h2>\n        <ion-badge [color]="getClass(facility)">{{facility.publicOrPrivate}}</ion-badge>\n        <br/>\n\n      </ion-item>\n\n      <img src="https://www.bestmasterofscienceinnursing.com/wp-content/uploads/2015/03/Kaiser-foundation-hospital-modern-hospitals.jpg?x86614"\n        style="width:500px; height:200px;" />\n\n      <br/>\n      <br/>\n      <p>Facility Type : {{facility.facilityType}}</p>\n      <br/>\n\n      <p>Healthcare Group: {{facility.healthcareGroup}}</p>\n\n      <p>Description:</p>\n\n      <p>{{facility.description}}</p>\n      <br/>\n      <p>Opening Hours:</p>\n      <p>{{facility.openingHours}}</p>\n      <br/>\n\n      <p>Peak Hours:</p>\n      <p>{{facility.peakHours}}</p>\n      <br/>\n\n      <p>Service Provided:</p>\n      <p>{{facility.serviceProvided}}</p>\n      <br/>\n\n      <p>Contact: {{facility.contactNumber}}</p>\n\n      <p>Email: {{facility.email}}</p>\n\n      <p>Location: {{facility.detectedAddress}}</p>\n\n      <p>Address: {{facility.address}}</p>\n\n      <p>Postal Code: {{facility.postal}}</p>\n      <button ion-button round color="secondary" [hidden]="!isOwner" (click)="goToEditFacilityDetail(facility._id)">Edit Facility</button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/facility-detail/facility-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__["a" /* FacilityData */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], FacilityDetailPage);

//# sourceMappingURL=facility-detail.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFacilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// var NodeGeocoder = require('node-geocoder');
// import { GeocoderProvider } from '../../providers/geocoder/geocoder';
/**
 * Generated class for the AddFacilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFacilityPage = (function () {
    function AddFacilityPage(navCtrl, navParams, facilityData, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facilityData = facilityData;
        this.storage = storage;
        this.facility = { lat: 0, lng: 0, detectedAddress: '' };
        this.submitted = false;
    }
    AddFacilityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddFacilityPage');
        this.storage.get('UID').then(function (val) {
            _this.facility.ownerUID = val;
            console.log(_this.facility.ownerUID);
        });
    };
    AddFacilityPage.prototype.createNewFacility = function (form) {
        var _this = this;
        this.submitted = true;
        console.log(this.facility);
        if (form.valid) {
            // this.authProvider.signup(this.signup.username, this.signup.password, this.signup.name);
            this.facilityData.saveFacility(this.facility).then(function (result) {
                // this.navCtrl.pop();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }, function (err) {
                console.log(err);
            });
        }
    };
    AddFacilityPage.prototype.onPostalChange = function (postalCode) {
        var _this = this;
        var googleMapsClient = __webpack_require__(373).createClient({
            key: 'AIzaSyAoD9nOgrj7ADeRao3HsjoFyeqUa8GjEEs',
            Promise: Promise // 'Promise' is the native constructor.
        });
        googleMapsClient.geocode({
            address: postalCode + ', Singapore',
            region: 'SG'
        }).asPromise()
            .then(function (response) {
            console.log(response.json.results);
            console.log(response, response.json.results[0].geometry.location.lat, response.json.results[0].geometry.location.lng);
            _this.facility.lat = response.json.results[0].geometry.location.lat;
            _this.facility.lng = response.json.results[0].geometry.location.lng;
            _this.facility.detectedAddress = response.json.results[0].address_components[1].long_name;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return AddFacilityPage;
}());
AddFacilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-facility',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/add-facility/add-facility.html"*/'<!--\n  Generated template for the AddFacilityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Facility</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="add-facility-page">\n\n  <form #createFacilityForm="ngForm" novalidate>\n    <ion-list>\n      <ion-item>\n          <ion-icon name="home" item-start></ion-icon>\n        <ion-label stacked color="primary">Facility Name</ion-label>\n        <ion-input [(ngModel)]="facility.name" name="name" type="text" #name="ngModel" placeholder="Facility Name" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n        Name is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="pin" item-start></ion-icon>\n        <ion-label stacked color="primary">Address</ion-label>\n        <ion-input [(ngModel)]="facility.address" name="address" type="text" #address="ngModel" placeholder="Address" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="address.valid || submitted == false" color="danger" padding-left>\n        Address is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="send" item-start></ion-icon>\n        <ion-label stacked color="primary">Postal Code</ion-label>\n        <ion-input [(ngModel)]="facility.postal" (ionChange)="onPostalChange(facility.postal)" minlength="6" maxlength="6" name="postal" type="text" #postal="ngModel"\n          placeholder="Postal Code" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="postal.valid || submitted == false" color="danger" padding-left>\n        Postal is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="pin" item-start></ion-icon>\n        <ion-label stacked color="primary">Latitude</ion-label>\n        <ion-input [(ngModel)]="facility.lat" type="number" placeholder="Latitude" readonly #lat="ngModel" name="lat"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="pin" item-start></ion-icon>\n        <ion-label stacked color="primary">Longitude</ion-label>\n        <ion-input [(ngModel)]="facility.lng" type="number" placeholder="Longitude" readonly #lng="ngModel" name="lng"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="car" item-start></ion-icon>\n        <ion-label stacked color="primary">Detected Address</ion-label>\n        <ion-input [(ngModel)]="facility.detectedAddress" type="text" placeholder="Address" readonly #detectedAddress="ngModel" name="detectedAddress"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="mail" item-start></ion-icon>\n        <ion-label stacked color="primary">Email</ion-label>\n        <ion-input [(ngModel)]="facility.email" name="email" type="email" #email="ngModel" placeholder="Email" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n        Email Contact is required\n      </p>\n\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n        <ion-label stacked color="primary">Contact Number</ion-label>\n        <ion-input [(ngModel)]="facility.contactNumber" name="contactNumber" type="tel" minlength="8" maxlength="8" #contactNumber="ngModel" placeholder="Contact Number" required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="contactNumber.valid || submitted == false" color="danger" padding-left>\n        Contact Number must be valid\n      </p>\n\n      <ion-item>\n        <ion-icon name="alert" item-start></ion-icon>\n        <ion-label stacked color="primary">Public or Private Sector</ion-label>\n        <ion-select [(ngModel)]="facility.publicOrPrivate" name="publicOrPrivate" #publicOrPrivate="ngModel" placeholder="Select One" required>\n          <ion-option value="Public">Public</ion-option>\n          <ion-option value="Private">Private</ion-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text [hidden]="publicOrPrivate.valid || submitted == false" color="danger" padding-left>\n        Sector - Private or Public is required\n      </p>\n\n      <ion-item>\n        <ion-icon name="aperture" item-start></ion-icon>\n        <ion-label stacked color="primary">Facility Type</ion-label>\n        <ion-select [(ngModel)]="facility.facilityType" name="facilityType" #facilityType="ngModel" placeholder="Select One" required>\n          <ion-option value="Hospital">Hospital</ion-option>\n          <ion-option value="Polyclinic">Polyclinic</ion-option>\n          <ion-option value="Family Clinic">Family Clinic</ion-option>\n          <ion-option value="Pharmacy">Pharmacy</ion-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text [hidden]="facilityType.valid || submitted == false" color="danger" padding-left>\n        Facility Type is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="folder-open" item-start></ion-icon>\n        <ion-label stacked color="primary">Description</ion-label>\n        <ion-textarea [(ngModel)]="facility.description" name="description" #description="ngModel" required placeholder="Description"></ion-textarea>\n      </ion-item>\n\n      <p ion-text [hidden]="description.valid || submitted == false" color="danger" padding-left>\n        Description is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="time" item-start></ion-icon>\n        <ion-label stacked color="primary">Opening Hours</ion-label>\n        <ion-textarea [(ngModel)]="facility.openingHours" name="openingHours" #openingHours="ngModel" required placeholder="Opening Hours"></ion-textarea>\n      </ion-item>\n\n      <p ion-text [hidden]="openingHours.valid || submitted == false" color="danger" padding-left>\n        Opening Hours is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="clock" item-start></ion-icon>\n        <ion-label stacked color="primary">Peak Hours</ion-label>\n        <ion-textarea [(ngModel)]="facility.peakHours" name="peakHours" #peakHours="ngModel" required placeholder="Peak Hours"></ion-textarea>\n      </ion-item>\n\n      <p ion-text [hidden]="peakHours.valid || submitted == false" color="danger" padding-left>\n        Peak Hours is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="body" item-start></ion-icon>\n        <ion-label stacked color="primary">Service Provided</ion-label>\n        <ion-textarea [(ngModel)]="facility.serviceProvided" name="serviceProvided" #serviceProvided="ngModel" required placeholder="Service Provided (E.g. Gynaecologist, Paediatrics, Surgery"></ion-textarea>\n      </ion-item>\n\n      <p ion-text [hidden]="serviceProvided.valid || submitted == false" color="danger" padding-left>\n        Peak Hours is required\n      </p>\n\n      <ion-item>\n          <ion-icon name="cart" item-start></ion-icon>\n          <ion-label stacked color="primary">Healthcare Group</ion-label>\n          <ion-select [(ngModel)]="facility.healthcareGroup" name="healthcareGroup" #healthcareGroup="ngModel" placeholder="Select One" required>\n              <ion-option value="None">None</ion-option>\n              <ion-option value="Alexandra Health System">Alexandra Health System</ion-option>\n              <ion-option value="Eastern Health Alliance">Eastern Health Alliance</ion-option>\n              <ion-option value="JurongHealth">JurongHealth</ion-option>\n              <ion-option value="National Healthcare Group">National Healthcare Group</ion-option>\n              <ion-option value="National University Health System">National University Health System</ion-option>\n              <ion-option value="SingHealth">SingHealth</ion-option>\n            </ion-select>\n      </ion-item>\n\n      <p ion-text [hidden]="healthcareGroup.valid || submitted == false" color="danger" padding-left>\n        Select one of the options\n      </p>\n    </ion-list>\n\n    <div padding>\n      <button ion-button (click)="createNewFacility(createFacilityForm)" type="submit" block>Create</button>\n    </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/add-facility/add-facility.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__["a" /* FacilityData */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], AddFacilityPage);

//# sourceMappingURL=add-facility.js.map

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthProvider = (function () {
    function AuthProvider(afAuth, googlePlus, facebook, storage, events, userData
        // public navCtrl: NavController
    ) {
        this.afAuth = afAuth;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.storage = storage;
        this.events = events;
        this.userData = userData;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.registerData = {};
        this.UID = '';
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth();
    }
    AuthProvider.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    AuthProvider.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    AuthProvider.prototype.getUid = function () {
        return this.storage.get('UID').then(function (value) {
            return value;
        });
    };
    ;
    AuthProvider.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    AuthProvider.prototype.resetPassword = function (email) {
        var _this = this;
        return this.fireAuth.sendPasswordResetEmail(email)
            .then(function () {
            //console.log('Reset Password Email Sent.');
            _this.events.publish('resetPassword', 'Reset Password Email has been sent Successfully.');
        })
            .catch(function () {
            //console.log('Reset Password Email CANNOT Sent.');
            _this.events.publish('resetPassword', 'Cannot send Reset Password Email for now.');
        });
    };
    AuthProvider.prototype.login = function (username, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithEmailAndPassword(username, password)
            .then(function (auth) {
            console.log('Log In Successful, UID: ' + auth.uid + ', ' + 'Email: ' + username);
            _this.UID = auth.uid;
            _this.storage.set('UID', auth.uid);
            _this.storage.set('EMAIL', username);
            _this.storage.set('PASSWORD', password);
            _this.storage.set(_this.HAS_LOGGED_IN, true);
            _this.setUsername(username);
            _this.events.publish('user:login');
            // this.navCtrl.push(TabsPage);
        }).catch(function (err) { console.log(err.message); _this.events.publish('user:login_login.ts', err.message); });
    };
    ;
    AuthProvider.prototype.signup = function (username, password, name) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().createUserWithEmailAndPassword(username, password)
            .then(function (auth) {
            _this.UID = auth.uid;
            _this.storage.set('UID', auth.uid);
            _this.storage.set('EMAIL', username);
            _this.storage.set('PASSWORD', password);
            _this.storage.set(_this.HAS_LOGGED_IN, true);
            _this.setUsername(username);
            _this.events.publish('user:signup');
            _this.registerData = {
                "email": username,
                "uid": auth.uid,
                "pwd": password,
                "name": name
            };
            _this.userData.registerUser(_this.registerData);
        })
            .catch(function (err) { console.log(err.message); _this.events.publish('user:signup_signup.ts', err.message); });
    };
    ;
    AuthProvider.prototype.logout = function () {
        var _this = this;
        // this.af.auth.logout()
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signOut()
            .then(function () {
            _this.UID = '';
            _this.storage.set('UID', '');
            _this.storage.set('EMAIL', '');
            _this.storage.set('PASSWORD', '');
            _this.storage.set('role', '');
            console.log('Log Out Successful');
            _this.storage.remove(_this.HAS_LOGGED_IN);
            _this.storage.remove('username');
            _this.events.publish('user:logout');
            //this.navCtrl.setRoot(LoginPage);
        })
            .catch(function (err) { return console.log(err); });
    };
    ;
    AuthProvider.prototype.getUser = function () {
        return this.afAuth.auth.currentUser;
    };
    AuthProvider.prototype.googleLogin = function () {
        var _this = this;
        return this.googlePlus
            .login({
            webClientId: '809778044945-roi5n89efs8k7h96i766i1ev0jfsdmlp.apps.googleusercontent.com',
            offline: true
        })
            .then(function (res) {
            var credential = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.GoogleAuthProvider.credential(res.idToken);
            _this.afAuth.auth
                .signInWithCredential(credential)
                .then(function (success) {
                console.log('Firebase success: ' + JSON.stringify(success));
                _this.storage.set('UID', success.uid);
                _this.storage.set(_this.HAS_LOGGED_IN, true);
                _this.storage.set('EMAIL', success.email);
                _this.storage.set('PASSWORD', success.password);
                _this.setUsername(success.username);
                _this.events.publish('user:login');
            })
                .catch(function (error) {
                console.log('Firebase failure: ' + JSON.stringify(error));
                _this.storage.set('UID', '');
                _this.storage.set('EMAIL', '');
                _this.storage.set('PASSWORD', '');
                console.log('Log Out Successful');
                _this.storage.remove(_this.HAS_LOGGED_IN);
                _this.storage.remove('username');
                _this.events.publish('user:logout');
            });
        })
            .catch(function (err) { return console.error('Error: ', err); });
    };
    AuthProvider.prototype.facebookLogin = function () {
        var _this = this;
        return this.facebook
            .login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
            _this.afAuth.auth
                .signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log('Firebase success: ' + JSON.stringify(success));
                _this.UID = success.uid;
                _this.storage.set('UID', success.uid);
                _this.storage.set(_this.HAS_LOGGED_IN, true);
                _this.storage.set('EMAIL', success.email);
                _this.storage.set('PASSWORD', success.password);
                _this.setUsername(success.username);
                _this.events.publish('user:login');
            })
                .catch(function (error) {
                console.log('Firebase failure: ' + JSON.stringify(error));
                _this.storage.set('UID', '');
                _this.storage.set('EMAIL', '');
                _this.storage.set('PASSWORD', '');
                console.log('Log Out Successful');
                _this.storage.remove(_this.HAS_LOGGED_IN);
                _this.storage.remove('username');
                _this.events.publish('user:logout');
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__user_data__["a" /* UserData */]
        // public navCtrl: NavController
    ])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(556);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_signup_signup__ = __webpack_require__(557);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__pages_signup_signup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_map_map__ = __webpack_require__(558);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__ = __webpack_require__(559);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_all_facilities_all_facilities__ = __webpack_require__(580);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_all_facilities_all_facilities__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_facility_detail_facility_detail__ = __webpack_require__(581);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_facility_detail_facility_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_facility_add_facility__ = __webpack_require__(582);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_add_facility_add_facility__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_facilities_my_facilities__ = __webpack_require__(684);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__pages_my_facilities_my_facilities__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_facility_edit_facility__ = __webpack_require__(685);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__pages_edit_facility_edit_facility__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(362);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(686);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_support_support__ = __webpack_require__(687);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a"]; });













//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFacilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_pages__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MyFacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyFacilitiesPage = (function () {
    function MyFacilitiesPage(navCtrl, navParams, storage, facilityData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.facilityData = facilityData;
        this.isEmpty = true;
    }
    MyFacilitiesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyFacilitiesPage');
        this.storage.get('UID').then(function (val) {
            _this.getMyFacilityList(val);
        });
    };
    MyFacilitiesPage.prototype.goToFacilityDetail = function (facilityId) {
        console.log("clicked");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__app_pages__["f" /* FacilityDetailPage */], { facilityId: facilityId });
    };
    MyFacilitiesPage.prototype.getMyFacilityList = function (ownerUID) {
        var _this = this;
        this.facilityData.getAllFacilitiesForOneUser(ownerUID).then(function (res) {
            _this.facilities = res;
            if (_this.facilities.length == 0) {
                _this.isEmpty = true;
            }
            else {
                _this.isEmpty = false;
            }
            ;
        }, function (err) {
            console.log(err);
        });
    };
    MyFacilitiesPage.prototype.getBadgeClass = function (facility) {
        return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
    };
    return MyFacilitiesPage;
}());
MyFacilitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-facilities',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/my-facilities/my-facilities.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>My Facilities</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n\n      <ion-card *ngIf="isEmpty">\n        <ion-card-header>No Created Facilities</ion-card-header>\n\n        <ion-card-content>\n          <p>You currently have no facilities.</p>\n          <p>First create a facility so you can manage it.</p>\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-list>\n        <ion-card *ngFor="let facility of facilities">\n\n          <button ion-item (click)="goToFacilityDetail(facility._id)">\n            <ion-item>\n\n              <ion-avatar item-left>\n                <img src="http://cdn.centralfloridalifestyle.com/2016/09/modern-medical-advancements.jpg" />\n              </ion-avatar>\n              <h2>{{facility.name}}</h2>\n              <ion-badge [color]="getBadgeClass(facility)">{{facility.publicOrPrivate}}</ion-badge>\n              <br/>\n\n            </ion-item>\n\n            <img src="https://www.bestmasterofscienceinnursing.com/wp-content/uploads/2015/03/Kaiser-foundation-hospital-modern-hospitals.jpg?x86614"\n              style="width:500px; height:200px;" />\n\n            <ion-card-content>\n              <p>Facility Type : {{facility.facilityType}}</p>\n              <br/>\n\n              <p>Description:</p>\n\n              <p>{{facility.description}}</p>\n              <br/>\n              <p>Opening Hours:</p>\n              <p>{{facility.openingHours}}</p>\n              <br/>\n\n              <p>Service Provided:</p>\n              <p>{{facility.serviceProvided}}</p>\n              <br/>\n\n              <p>Contact: {{facility.contactNumber}}</p>\n\n            </ion-card-content>\n\n            <ion-row>\n              <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="thumbs-up"></ion-icon>\n                  <div>12 Likes</div>\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>4 Comments</div>\n                </button>\n              </ion-col>\n              <ion-col center text-center>\n                <ion-note>\n                  11h ago\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          </button>\n\n        </ion-card>\n      </ion-list>\n\n    </ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/my-facilities/my-facilities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__["a" /* FacilityData */]])
], MyFacilitiesPage);

//# sourceMappingURL=my-facilities.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFacilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditFacilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditFacilityPage = (function () {
    function EditFacilityPage(navCtrl, navParams, facilityData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facilityData = facilityData;
        this.facility = {};
        this.submitted = false;
    }
    EditFacilityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditFacilityPage');
        this.facilityId = this.navParams.data.facilityId;
        this.getFacilityDetail(this.facilityId);
    };
    EditFacilityPage.prototype.getFacilityDetail = function (facilityId) {
        var _this = this;
        this.facilityData.getFacilityByID(facilityId).then(function (res) {
            _this.facility = res;
            console.log(_this.facility);
        }, function (err) {
            console.log(err);
        });
    };
    EditFacilityPage.prototype.updateFacility = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.facilityData.updateFacility(this.facilityId, this.facility).then(function (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditFacilityPage.prototype.deleteFacility = function (facilityId) {
        var _this = this;
        this.facilityData.deleteFacility(facilityId).then(function (result) {
            // this.navCtrl.setRoot(TabsPage);
            _this.navCtrl.popToRoot();
        }, function (err) {
            console.log(err);
        });
    };
    EditFacilityPage.prototype.onPostalChange = function (postalCode) {
        var _this = this;
        var googleMapsClient = __webpack_require__(373).createClient({
            key: 'AIzaSyAoD9nOgrj7ADeRao3HsjoFyeqUa8GjEEs',
            Promise: Promise // 'Promise' is the native constructor.
        });
        googleMapsClient.geocode({
            address: postalCode + ', Singapore',
            region: 'SG'
        }).asPromise()
            .then(function (response) {
            console.log(response.json.results);
            console.log(response, response.json.results[0].geometry.location.lat, response.json.results[0].geometry.location.lng);
            _this.facility.lat = response.json.results[0].geometry.location.lat;
            _this.facility.lng = response.json.results[0].geometry.location.lng;
            _this.facility.detectedAddress = response.json.results[0].address_components[1].long_name;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return EditFacilityPage;
}());
EditFacilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-facility',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/edit-facility/edit-facility.html"*/'<!--\n  Generated template for the EditFacilityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Facility</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="add-facility-page">\n\n  <form #createFacilityForm="ngForm" novalidate>\n      <ion-list>\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Facility Name</ion-label>\n            <ion-input [(ngModel)]="facility.name" name="name" type="text" #name="ngModel" placeholder="Facility Name" required>\n            </ion-input>\n          </ion-item>\n          <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n            Name is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Address</ion-label>\n            <ion-input [(ngModel)]="facility.address" name="address" type="text" #address="ngModel" placeholder="Address" required>\n            </ion-input>\n          </ion-item>\n          <p ion-text [hidden]="address.valid || submitted == false" color="danger" padding-left>\n            Address is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Postal Code</ion-label>\n            <ion-input [(ngModel)]="facility.postal" (ionChange)="onPostalChange(facility.postal)" minlength="6" maxlength="6" name="postal" type="text" #postal="ngModel"\n              placeholder="Postal Code" required>\n            </ion-input>\n          </ion-item>\n          <p ion-text [hidden]="postal.valid || submitted == false" color="danger" padding-left>\n            Postal is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Latitude</ion-label>\n            <ion-input [(ngModel)]="facility.lat" type="number" placeholder="Latitude" readonly #lat="ngModel" name="lat"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Longitude</ion-label>\n            <ion-input [(ngModel)]="facility.lng" type="number" placeholder="Longitude" readonly #lng="ngModel" name="lng"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Detected Address</ion-label>\n            <ion-input [(ngModel)]="facility.detectedAddress" type="text" placeholder="Address" readonly #detectedAddress="ngModel" name="detectedAddress"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Email</ion-label>\n            <ion-input [(ngModel)]="facility.email" name="email" type="email" #email="ngModel" placeholder="Email" required>\n            </ion-input>\n          </ion-item>\n          <p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n            Email Contact is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Contact Number</ion-label>\n            <ion-input [(ngModel)]="facility.contactNumber" name="contactNumber" type="tel" minlength="8" maxlength="8" #contactNumber="ngModel" placeholder="Contact Number" required>\n            </ion-input>\n          </ion-item>\n          <p ion-text [hidden]="contactNumber.valid || submitted == false" color="danger" padding-left>\n            Contact Number must be valid\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Public or Private Sector</ion-label>\n            <ion-select [(ngModel)]="facility.publicOrPrivate" name="publicOrPrivate" #publicOrPrivate="ngModel" placeholder="Select One" required>\n              <ion-option value="Public">Public</ion-option>\n              <ion-option value="Private">Private</ion-option>\n            </ion-select>\n          </ion-item>\n          <p ion-text [hidden]="publicOrPrivate.valid || submitted == false" color="danger" padding-left>\n            Sector - Private or Public is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Facility Type</ion-label>\n            <ion-select [(ngModel)]="facility.facilityType" name="facilityType" #facilityType="ngModel" placeholder="Select One" required>\n              <ion-option value="Hospital">Hospital</ion-option>\n              <ion-option value="Polyclinic">Polyclinic</ion-option>\n              <ion-option value="Family Clinic">Family Clinic</ion-option>\n              <ion-option value="Pharmacy">Pharmacy</ion-option>\n            </ion-select>\n          </ion-item>\n          <p ion-text [hidden]="facilityType.valid || submitted == false" color="danger" padding-left>\n            Facility Type is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Description</ion-label>\n            <ion-textarea [(ngModel)]="facility.description" name="description" #description="ngModel" required placeholder="Description"></ion-textarea>\n          </ion-item>\n\n          <p ion-text [hidden]="description.valid || submitted == false" color="danger" padding-left>\n            Description is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Opening Hours</ion-label>\n            <ion-textarea [(ngModel)]="facility.openingHours" name="openingHours" #openingHours="ngModel" required placeholder="Opening Hours"></ion-textarea>\n          </ion-item>\n\n          <p ion-text [hidden]="openingHours.valid || submitted == false" color="danger" padding-left>\n            Opening Hours is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Peak Hours</ion-label>\n            <ion-textarea [(ngModel)]="facility.peakHours" name="peakHours" #peakHours="ngModel" required placeholder="Peak Hours"></ion-textarea>\n          </ion-item>\n\n          <p ion-text [hidden]="peakHours.valid || submitted == false" color="danger" padding-left>\n            Peak Hours is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n            <ion-label stacked color="primary">Service Provided</ion-label>\n            <ion-textarea [(ngModel)]="facility.serviceProvided" name="serviceProvided" #serviceProvided="ngModel" required placeholder="Service Provided (E.g. Gynaecologist, Paediatrics, Surgery"></ion-textarea>\n          </ion-item>\n\n          <p ion-text [hidden]="serviceProvided.valid || submitted == false" color="danger" padding-left>\n            Peak Hours is required\n          </p>\n\n          <ion-item>\n              <ion-icon name="pin" item-start></ion-icon>\n              <ion-label stacked color="primary">Healthcare Group</ion-label>\n              <ion-select [(ngModel)]="facility.healthcareGroup" name="healthcareGroup" #healthcareGroup="ngModel" placeholder="Select One" required>\n                  <ion-option value="None">None</ion-option>\n                  <ion-option value="Alexandra Health System">Alexandra Health System</ion-option>\n                  <ion-option value="Eastern Health Alliance">Eastern Health Alliance</ion-option>\n                  <ion-option value="JurongHealth">JurongHealth</ion-option>\n                  <ion-option value="National Healthcare Group">National Healthcare Group</ion-option>\n                  <ion-option value="National University Health System">National University Health System</ion-option>\n                  <ion-option value="SingHealth">SingHealth</ion-option>\n                </ion-select>\n          </ion-item>\n\n          <p ion-text [hidden]="healthcareGroup.valid || submitted == false" color="danger" padding-left>\n            Select one of the options\n          </p>\n        </ion-list>\n\n    <div padding>\n      <button ion-button (click)="updateFacility(createFacilityForm)" type="submit" block>Update</button>\n    </div>\n    <div padding>\n      <button color="danger" ion-button (click)="deleteFacility(facility._id)" type="submit" block>Delete Facility</button>\n    </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/edit-facility/edit-facility.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_facility_data__["a" /* FacilityData */]])
], EditFacilityPage);

//# sourceMappingURL=edit-facility.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_pages__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, userData, alertCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
        this.getUsername();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.authProvider.getUsername().then(function (username) {
            _this.username = username;
            console.log('user', username);
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.authProvider.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__app_pages__["h" /* LoginPage */]);
    };
    AccountPage.prototype.support = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__app_pages__["l" /* SupportPage */]);
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.authProvider.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="support()">Support</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/Sheen_An/Projects/ionic projects/full app/health-connect-pro/src/pages/support/support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacilityData = (function () {
    function FacilityData(http) {
        this.http = http;
        this.users = [];
        this.path = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].path + '/auth';
        // apiPath = "http://localhost:3000"
        // apiPath = environment.path;
        this.apiPath = "https://api-server-sheen.herokuapp.com";
    }
    FacilityData.prototype.getUsers = function () {
        var _this = this;
        this.http.get(this.apiPath + '/users').subscribe(function (res) {
            // console.log(res);
            _this.users = res.json();
        });
    };
    FacilityData.prototype.getAllFacilities = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/facility/all')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FacilityData.prototype.getAllFacilitiesForOneUser = function (ownerUID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/facility/owner/' + ownerUID)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FacilityData.prototype.getFacilityByID = function (facilityId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/facility/' + facilityId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FacilityData.prototype.saveFacility = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiPath + '/facility', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FacilityData.prototype.updateFacility = function (facilityId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(data, "data");
            _this.http.put(_this.apiPath + '/facility/' + facilityId, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FacilityData.prototype.deleteFacility = function (facilityId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiPath + '/facility/' + facilityId)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return FacilityData;
}());
FacilityData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], FacilityData);

//# sourceMappingURL=facility-data.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeocoderProvider = (function () {
    function GeocoderProvider(http, _GEOCODE) {
        this.http = http;
        this._GEOCODE = _GEOCODE;
    }
    /**
      *
      * Perform reverseGeocoding operation and return address details
      *
      * @public
      * @method reverseGeocode
      * @return {Promise}
      *
      */
    GeocoderProvider.prototype.reverseGeocode = function (lat, lng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.reverseGeocode(lat, lng)
                .then(function (result) {
                var str = "The reverseGeocode address is " + result.postalCode + " in " + result.countryCode;
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    /**
      *
      * Perform forwardGeocode operation and return latitude/longitude details
      *
      * @public
      * @method forwardGeocode
      * @return {Promise}
      *
      */
    GeocoderProvider.prototype.forwardGeocode = function (keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.forwardGeocode(keyword)
                .then(function (coordinates) {
                var str = "The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude;
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    return GeocoderProvider;
}());
GeocoderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], GeocoderProvider);

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserData = (function () {
    function UserData(http) {
        this.http = http;
        this.users = [];
        this.path = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].path + '/auth';
        // apiPath = "http://localhost:3000"
        // apiPath = environment.path;
        this.apiPath = "https://api-server-sheen.herokuapp.com";
    }
    UserData.prototype.registerUser = function (registerData) {
        this.http.post(this.apiPath + '/auth/registerPro', registerData).subscribe(function (res) {
            // this.saveToken(res.token());
        });
    };
    UserData.prototype.getUsers = function () {
        var _this = this;
        this.http.get(this.apiPath + '/users').subscribe(function (res) {
            // console.log(res);
            _this.users = res.json();
        });
    };
    UserData.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/users')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserData.prototype.getUserByUID = function (UID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/profile/' + UID)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // console.log("test2", res);
                resolve(res);
            }, function (err) {
                // console.log("test3", err);
                reject(err);
            });
        });
    };
    UserData.prototype.getNameByUID = function (UID) {
        var _this = this;
        this.http.get(this.apiPath + '/profile/' + UID).subscribe(function (res) {
            // console.log(res.json(), "yu", res.json().name);
            _this.chatName = res.json().name;
        });
    };
    UserData.prototype.getNormalUserByUID = function (UID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/user/' + UID)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // console.log("test2", res);
                resolve(res);
            }, function (err) {
                // console.log("test3", err);
                reject(err);
            });
        });
    };
    UserData.prototype.getProUserByUID = function (UID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiPath + '/prouser/' + UID)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // console.log("test2", res);
                resolve(res);
            }, function (err) {
                // console.log("test3", err);
                reject(err);
            });
        });
    };
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ })

},[457]);
//# sourceMappingURL=main.js.map