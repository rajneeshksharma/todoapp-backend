(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'todos', component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);\n@import url(https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.min.css);\n@import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n/* @import \"~bootstrap/dist/css/bootstrap.css\";  */\n.redxx{\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGLHNGQUFzRjtBQUV0RixxRUFBcUU7QUFDckUsbURBQW1EO0FBQ25EO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWRib290c3RyYXAvNC40LjMvY3NzL21kYi5taW4uY3NzKTtcblxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7IFxuLyogQGltcG9ydCBcIn5ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiOyAgKi9cbi5yZWR4eHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todoapp-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_social__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-social */ "./node_modules/ng-social/fesm5/ng-social.js");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function getAuthServiceConfigs() {
    var config = new ng_social__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
        {
            id: ng_social__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new ng_social__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]('944810954390-h38pg22rqo9t0riau7sr1p1hf7fc1ko0.apps.googleusercontent.com')
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_12__["TodosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ng_social__WEBPACK_IMPORTED_MODULE_11__["NgSocialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production })
            ],
            providers: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _service_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], {
                    provide: ng_social__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat works!\n</p>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.hm-gradient {\n    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);\n}\n.darken-grey-text {\n    color: #2E2E2E;\n}\n.danger-text {\n    color: #ff3547; }\n.default-text {\n    color: #2BBBAD; \n}\n.info-text {\n    color: #33b5e5; \n}\n.form-white .md-form label {\n  color: #fff; \n}\n.form-white input[type=text]:focus:not([readonly]) {\n    border-bottom: 1px solid #fff;\n    box-shadow: 0 1px 0 0 #fff; \n}\n.form-white input[type=text]:focus:not([readonly]) + label {\n    color: #fff; \n}\n.form-white input[type=password]:focus:not([readonly]) {\n    border-bottom: 1px solid #fff;\n    box-shadow: 0 1px 0 0 #fff; \n}\n.form-white input[type=password]:focus:not([readonly]) + label {\n    color: #fff; \n}\n.form-white input[type=password], .form-white input[type=text] {\n    border-bottom: 1px solid #fff; \n}\n.form-white .form-control:focus {\n    color: #fff;\n}\n.form-white .form-control {\n    color: #fff;\n}\n.form-white textarea.md-textarea:focus:not([readonly]) {\n    border-bottom: 1px solid #fff;\n    box-shadow: 0 1px 0 0 #fff;\n    color: #fff; \n}\n.form-white textarea.md-textarea  {\n    border-bottom: 1px solid #fff;\n    color: #fff;\n}\n.form-white textarea.md-textarea:focus:not([readonly])+label {\n    color: #fff;\n}\n.ripe-malinka-gradient {\n    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);\n}\n.near-moon-gradient {\n    background-image: linear-gradient(to bottom, #5ee7df 0%, #b490ca 100%);\n}\n.test {\n    background-image: linear-gradient(to right, #232526, #414345);\n    }\nbody { padding: 2em; }\n/* Shared */\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpRkFBaUY7Q0FDcEY7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWUsRUFBRTtBQUNyQjtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0lBQ0ksOEJBQThCO0lBRTlCLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSw4QkFBOEI7SUFFOUIsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsWUFBWTtDQUNmO0FBQ0Q7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG9FQUFvRTtDQUN2RTtBQUNEO0lBQ0ksdUVBQXVFO0NBQzFFO0FBQ0Q7SUFDSSw4REFBOEQ7S0FDN0Q7QUFDRCxPQUFPLGFBQWEsRUFBRTtBQUcxQixZQUFZO0FBQ1o7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLDZDQUE2QztDQUM5QztBQUdELFlBQVk7QUFDWjtFQUNFLHFEQUFxRDtFQUNyRCxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyx3R0FBd0c7Q0FDekc7QUFDRDs7RUFFRSxvQkFBb0I7O0NBRXJCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhtLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjNlN2U5IDAlLCAjZTNlZWZmIDk5JSwgI2UzZWVmZiAxMDAlKTtcbn1cbi5kYXJrZW4tZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogIzJFMkUyRTtcbn1cbi5kYW5nZXItdGV4dCB7XG4gICAgY29sb3I6ICNmZjM1NDc7IH1cbi5kZWZhdWx0LXRleHQge1xuICAgIGNvbG9yOiAjMkJCQkFEOyBcbn1cbi5pbmZvLXRleHQge1xuICAgIGNvbG9yOiAjMzNiNWU1OyBcbn1cbi5mb3JtLXdoaXRlIC5tZC1mb3JtIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7IFxufVxuLmZvcm0td2hpdGUgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZmY7IFxufVxuLmZvcm0td2hpdGUgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7IFxufVxuLmZvcm0td2hpdGUgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmZmOyBcbn1cbi5mb3JtLXdoaXRlIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjsgXG59XG4uZm9ybS13aGl0ZSBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgLmZvcm0td2hpdGUgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7IFxufVxuLmZvcm0td2hpdGUgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uZm9ybS13aGl0ZSAuZm9ybS1jb250cm9sIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5mb3JtLXdoaXRlIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZmY7XG4gICAgY29sb3I6ICNmZmY7IFxufVxuLmZvcm0td2hpdGUgdGV4dGFyZWEubWQtdGV4dGFyZWEgIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5mb3JtLXdoaXRlIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKStsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ucmlwZS1tYWxpbmthLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xufVxuLm5lYXItbW9vbi1ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTtcbn1cbi50ZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMzI1MjYsICM0MTQzNDUpO1xuICAgIH1cbiAgICBib2R5IHsgcGFkZGluZzogMmVtOyB9XG5cblxuLyogU2hhcmVkICovXG4ubG9naW5CdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xuICBtYXJnaW46IDAuMmVtO1xuICBwYWRkaW5nOiAwIDE1cHggMCA0NnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5sb2dpbkJ0bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dpbkJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW5CdG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzJweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cblxuLyogR29vZ2xlICovXG4ubG9naW5CdG4tLWdvb2dsZSB7XG4gIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgYmFja2dyb3VuZDogI0RENEIzOTtcbn1cbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XG59XG4ubG9naW5CdG4tLWdvb2dsZTpob3Zlcixcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI0U3NEIzNztcbiAgXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:auto; background-image: linear-gradient(to right, #232526, #414345); background-size: cover; \">\n<div class=\"row justify-content-center\">\n  <div class=\"col-sm-8\" style=\"padding-top: 5%; padding-bottom: 2%; color:white;\">\n    <h2 class=\"text-center\"><u>Welcome to Todo Application</u></h2>\n    <hr>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6 mb-4\">\n        <div class=\"card test form-white\">\n          <div class=\"card-body\">\n            <h3 class=\"text-center white-text py-3\"><i class=\"fa fa-user\"></i> Login</h3>\n            <p *ngIf=\"emptyForm\" class=\"danger-text\">These fileds can't be empty</p>\n            <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onSubmit()\" role=\"form\">\n              <fieldset>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-envelope prefix white-text\"></i>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Your email\">\n                    <div style=\"padding-left: 50px;\" *ngIf=\"loginForm.controls['email'].errors && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\">\n                      <span class=\"danger-text\" *ngIf=\"loginForm.controls['email'].errors.required\">\n                        email is required.\n                      </span>\n                      <span class=\"danger-text\" *ngIf=\"loginForm.controls['email'].errors.pattern\">\n                        email is invalid.\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-lock prefix white-text\"></i>\n                    <input type=\"password\" formControlName=\"password\" id=\"defaultForm-pass1\" class=\"form-control\"\n                      placeholder=\"Your Password\">\n                    <div style=\"padding-left: 50px;\" *ngIf=\"loginForm.controls['password'].errors && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\">\n                      <span class=\"danger-text\" *ngIf=\"loginForm.controls['password'].errors.required\">\n                        password is required.\n                      </span>\n                      <span class=\"danger-text\" *ngIf=\"loginForm.controls['password'].errors.pattern\">\n                        Password must be(at least 8 char, 1 num. & one upercase alpha.)\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-outline-white waves-effect waves-light\">Login</button>\n                </div>\n              </fieldset>\n            </form>\n            <hr>\n            <div class=\"googleButton\" style=\"text-align: center;\">\n              <button (click)=\"socialLogin('google')\" class=\"loginBtn loginBtn--google\">\n                Login / Signup with Google\n              </button>\n            </div>\n            <h5 style=\"text-align: center;\">Don't have account Signup now <a routerLink='/signup'>here</a></h5>\n          </div>\n          <hr>\n        </div>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-social */ "./node_modules/ng-social/fesm5/ng-social.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, apiService, router, socialAuthService) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.emptyForm = false;
        this.emptyForm = false;
        this.loginForm = fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$')
                ]],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')
                ]]
        });
    }
    LoginComponent.prototype.socialLogin = function (platform) {
        var _this = this;
        var socialPlatformProvider;
        socialPlatformProvider = ng_social__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.name = userData.name;
            _this.fullName = _this.name.split(' ');
            _this.firstName = _this.fullName[0];
            _this.lastName = _this.fullName[_this.fullName.length - 1];
            // tslint:disable-next-line:max-line-length
            // console.log(platform + ' login in data : ', userData, userData.email, userData.id, this.firstName, this.lastName);
            _this.userSocial_id = userData.id;
            var socialUser = {
                firstName: _this.firstName,
                lastName: _this.lastName,
                email: userData.email,
                social_id: userData.id,
                provider: userData.provider
            };
            // console.log(socialUser);
            _this.apiService.social(socialUser).subscribe(function (res) {
                if (res.code === 200) {
                    _this.apiService.sendUserId(res.data[0].userData._id);
                    localStorage.setItem('token', res.data[0].token);
                    _this.router.navigate(['/todos']);
                }
                else {
                    console.log(res.message);
                }
            }, function (err) {
                console.log(err, "error");
            });
        }).catch(function (err) { console.error(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            // console.log(this.loginForm.value);
            this.apiService.logIn(this.loginForm.value).subscribe(function (res) {
                if (res.code === 200) {
                    _this.apiService.sendUserId(res.data[0].user._id);
                    localStorage.setItem('token', res.data[0].token);
                    _this.router.navigate(['/todos']);
                }
                else {
                    console.log(res.message);
                }
            }, function (err) {
                console.log(err, "error");
            });
        }
        else {
            this.emptyForm = true;
            setTimeout(function () {
                _this.emptyForm = false;
            }, 4000);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng_social__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.subject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.mysubject = this.subject.asObservable();
        this.uri = 'https://dry-river-10752.herokuapp.com/api/';
    }
    ApiService.prototype.getUserId = function () {
        return this.subject.asObservable();
    };
    ApiService.prototype.sendUserId = function (data) {
        this.subject.next(data);
    };
    ApiService.prototype.gethttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
        return httpOptions;
    };
    ApiService.prototype.signUp = function (user) {
        return this.http.post(this.uri + "users/signup", user, httpOptions);
    };
    ApiService.prototype.logIn = function (user) {
        return this.http.post(this.uri + "users/signin", user, httpOptions);
    };
    ApiService.prototype.social = function (user) {
        return this.http.post(this.uri + "users/socialuser", user, httpOptions);
    };
    ApiService.prototype.isAuthenticated = function () {
        this.token = window.localStorage.getItem('token');
        return this.token != null;
    };
    ApiService.prototype.getAllTodos = function (data) {
        var header = this.gethttpOptions();
        return this.http.post(this.uri + "todos", data, header);
    };
    ApiService.prototype.addTodo = function (data) {
        var header = this.gethttpOptions();
        return this.http.post(this.uri + "addtodo", data, header);
    };
    ApiService.prototype.rmTodo = function (data) {
        var header = this.gethttpOptions();
        return this.http.get(this.uri + "rmtodo/" + data._id, header);
    };
    ApiService.prototype.isComplete = function (data) {
        var header = this.gethttpOptions();
        return this.http.get(this.uri + "tododone/" + data._id, header);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.hm-gradient {\n    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);\n}\n.darken-grey-text {\n    color: #2E2E2E;\n}\n.danger-text {\n    color: #ff3547; }\n.default-text {\n    color: #2BBBAD; \n}\n.info-text {\n    color: #33b5e5; \n}\n.form-white .md-form label {\n  color: #fff; \n}\n.form-white input[type=text]:focus:not([readonly]) {\n    border-bottom: 1px solid #fff;\n    box-shadow: 0 1px 0 0 #fff; \n}\n.form-white input[type=text]:focus:not([readonly]) + label {\n    color: #fff; \n}\n.form-white input[type=password]:focus:not([readonly]) {\n    border-bottom: 1px solid #fff;\n    box-shadow: 0 1px 0 0 #fff; \n}\n.form-white input[type=password]:focus:not([readonly]) + label {\n    color: #fff; \n}\n.form-white input[type=password], .form-white input[type=text] {\n    border-bottom: 1px solid #fff; \n}\n.form-white .form-control:focus {\n    color: #fff;\n}\n.form-white .form-control {\n    color: #fff;\n}\n.form-white textarea.md-textarea:focus:not([readonly]) {\n    border-bottom: 1px solid #fff;\n    box-shadow: 0 1px 0 0 #fff;\n    color: #fff; \n}\n.form-white textarea.md-textarea  {\n    border-bottom: 1px solid #fff;\n    color: #fff;\n}\n.form-white textarea.md-textarea:focus:not([readonly])+label {\n    color: #fff;\n}\n.ripe-malinka-gradient {\n    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);\n}\n.near-moon-gradient {\n    background-image: linear-gradient(to bottom, #5ee7df 0%, #b490ca 100%);\n}\n.test {\n    background-image: linear-gradient(to right, #232526, #414345);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlGQUFpRjtDQUNwRjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZSxFQUFFO0FBQ3JCO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7SUFDSSw4QkFBOEI7SUFFOUIsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLDhCQUE4QjtJQUU5QiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLDhCQUE4QjtJQUM5QixZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksb0VBQW9FO0NBQ3ZFO0FBQ0Q7SUFDSSx1RUFBdUU7Q0FDMUU7QUFDRDtJQUNJLDhEQUE4RDtLQUM3RCIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhtLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjNlN2U5IDAlLCAjZTNlZWZmIDk5JSwgI2UzZWVmZiAxMDAlKTtcbn1cbi5kYXJrZW4tZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogIzJFMkUyRTtcbn1cbi5kYW5nZXItdGV4dCB7XG4gICAgY29sb3I6ICNmZjM1NDc7IH1cbi5kZWZhdWx0LXRleHQge1xuICAgIGNvbG9yOiAjMkJCQkFEOyBcbn1cbi5pbmZvLXRleHQge1xuICAgIGNvbG9yOiAjMzNiNWU1OyBcbn1cbi5mb3JtLXdoaXRlIC5tZC1mb3JtIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7IFxufVxuLmZvcm0td2hpdGUgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZmY7IFxufVxuLmZvcm0td2hpdGUgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7IFxufVxuLmZvcm0td2hpdGUgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmZmOyBcbn1cbi5mb3JtLXdoaXRlIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjsgXG59XG4uZm9ybS13aGl0ZSBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgLmZvcm0td2hpdGUgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7IFxufVxuLmZvcm0td2hpdGUgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uZm9ybS13aGl0ZSAuZm9ybS1jb250cm9sIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5mb3JtLXdoaXRlIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZmY7XG4gICAgY29sb3I6ICNmZmY7IFxufVxuLmZvcm0td2hpdGUgdGV4dGFyZWEubWQtdGV4dGFyZWEgIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5mb3JtLXdoaXRlIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKStsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ucmlwZS1tYWxpbmthLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xufVxuLm5lYXItbW9vbi1ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTtcbn1cbi50ZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMzI1MjYsICM0MTQzNDUpO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:auto; background-image: linear-gradient(to right, #232526, #414345);\">\n<div class=\"row justify-content-center\">\n  <div class=\"col-sm-8\" style=\"padding-top: 5%; padding-bottom: 2%; color:white;\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8 mb-5\">\n        <div class=\"card test form-white\">\n          <div class=\"card-body\">\n            <h3 class=\"text-center white-text py-3\"><i class=\"fa fa-user\"></i>SignUp</h3>\n            <p *ngIf=\"emptyForm\" class=\"danger-text\">These fileds can't be empty</p>\n            <form class=\"form-group\" role=\"form\" [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"onSubmit()\">\n              <fieldset>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-user prefix white-text\"></i>\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control placeholder-size\" placeholder=\"First name\">\n                    <div style=\"padding-left: 50px;\" *ngIf=\"signupForm.controls['firstName'].errors && (signupForm.controls['firstName'].dirty || signupForm.controls['firstName'].touched)\">\n                      <span class=\"danger-text\" *ngIf=\"signupForm.controls['firstName'].errors.required\">\n                        firstName is required.\n                      </span>\n                      <span class=\"danger-text\" *ngIf=\"signupForm.controls['firstName'].errors.pattern\">\n                        firstName is invalid.\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-user prefix white-text\"></i>\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control placeholder-size\" placeholder=\"Last name\">\n                    <div style=\"padding-left: 50px;\" *ngIf=\"signupForm.controls['lastName'].errors && (signupForm.controls['lastName'].dirty || signupForm.controls['lastName'].touched)\">\n                      <span class=\"danger-text\" *ngIf=\"signupForm.controls['lastName'].errors.required\">\n                        lastName is required.\n                      </span>\n                      <span class=\"danger-text\" *ngIf=\"signupForm.controls['lastName'].errors.pattern\">\n                        lastName is invalid.\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-envelope prefix white-text\"></i>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Your email\">\n\n\n                    <div style=\"padding-left: 50px;\" *ngIf=\"signupForm.controls['email'].errors && (signupForm.controls['email'].dirty || signupForm.controls['email'].touched)\">\n                      <span class=\"danger-text\" *ngIf=\"signupForm.controls['email'].errors.required\">\n                        email is required.\n                      </span>\n                      <span class=\"danger-text\" *ngIf=\"signupForm.controls['email'].errors.pattern\">\n                        email is invalid.\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-lock prefix white-text\"></i>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control placeholder-size\" placeholder=\"Password\">\n                      <div style=\"padding-left: 50px;\" *ngIf=\"signupForm.controls['password'].errors && (signupForm.controls['password'].dirty || signupForm.controls['password'].touched)\">\n                        <span class=\"danger-text\" *ngIf=\"signupForm.controls['password'].errors.required\">\n                          password is required.\n                        </span>\n                        <span class=\"danger-text\" *ngIf=\"signupForm.controls['password'].errors.pattern\">\n                          Password must be(at least 8 char, 1 num. & one upercase alpha.)\n                        </span>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <div>\n                    <i class=\"fa fa-lock prefix white-text\"></i>\n                    <input  type=\"password\" formControlName=\"cpassword\" class=\"form-control placeholder-size\" placeholder=\"Confirm Password\">\n                    <div style=\"padding-left: 50px;\" *ngIf=\" signupForm.controls['cpassword'].dirty || signupForm.controls['cpassword'].touched\">\n                        <span  class=\"danger-text\" *ngIf=\"signupForm.controls['cpassword'].errors?.required\">\n                          confirm password is required.\n                        </span>\n      \n                        <span class=\"danger-text\"  *ngIf=\"signupForm.controls['password'].valid  && signupForm.errors?.mismatch\">\n                          password mismatch.\n                        </span>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-outline-white waves-effect waves-light\">Login</button>\n                </div>\n              </fieldset>\n            </form>\n            <hr>\n            <h5 style=\"text-align: center;\">Go to Login now <a routerLink=''>here</a></h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
        this.emptyForm = false;
        this.signupDone = false;
        this.signupForm = fb.group({
            'firstName': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([a-zA-Z]*)$'),
                ]],
            'lastName': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([a-zA-Z]*)$'),
                ]],
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$')
                ]],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')
                ])],
            'cpassword': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]]
        }, { validator: this.passwordMatchValidator });
    }
    SignupComponent.prototype.passwordMatchValidator = function (formGroup) {
        return formGroup.get('password').value === formGroup.get('cpassword').value
            ? null : { 'mismatch': true };
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signupForm.valid) {
            var newUserData = {
                firstName: this.signupForm.value.firstName,
                lastName: this.signupForm.value.lastName,
                email: this.signupForm.value.email,
                password: this.signupForm.value.password
            };
            this.apiService.signUp(newUserData).subscribe(function (res) {
                if (res.code === 200) {
                    _this.signupDone = true;
                }
                else {
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.emptyForm = true;
            setTimeout(function () {
                _this.emptyForm = false;
            }, 4000);
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Raleway');\n\nbody {\n    padding: 0;\n    margin: 0;\n\n}\n\nform {\n    max-width: 30em;\n    margin: 4em auto;\n    position: relative;\n    background: #f4f4f4;\n    padding: 2em 3em;\n    overflow: hidden;\n}\n\nform h1 {\n    font-family: \"Raleway\";\n    color: #F97300;\n}\n\nform input[type=text]::-webkit-input-placeholder {\n    font-family: \"Raleway\";\n    color: #666;\n}\n\nform input[type=text]::-ms-input-placeholder {\n    font-family: \"Raleway\";\n    color: #666;\n}\n\nform input[type=text]::placeholder {\n    font-family: \"Raleway\";\n    color: #666;\n}\n\nform .data {\n    margin-top: 1em;\n}\n\nform .data li {\n    background: #fff;\n    border-left: 4px solid #F97300;\n    padding: 1em;\n    margin: 1em auto;\n    color: #666;\n    font-family: \"Raleway\";\n}\n\nform .data li i {\n    float: right;\n    color: #888;\n    cursor: pointer;\n}\n\nform .input-group-text {\n    background: #F97300;\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n    padding: 1em 23px;\n    color: #fff;\n    position: absolute;\n    right: 13px;\n    top: 68px;\n    cursor: pointer;\n}\n\nform .input-group-text i {\n    font-size: 2em;\n}\n\nform .form-control {\n    height: 3em;\n    font-family: \"Raleway\";\n}\n\nform .form-control:focus {\n    box-shadow: 0;\n}\n\n.line {\n    color: red;\n    text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7O0FBRS9EO0lBQ0ksV0FBVztJQUNYLFVBQVU7O0NBRWI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7Q0FDZjs7QUFIRDtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0NBQ2Y7O0FBSEQ7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5Jyk7XG5cbmJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuXG59XG5cbmZvcm0ge1xuICAgIG1heC13aWR0aDogMzBlbTtcbiAgICBtYXJnaW46IDRlbSBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgIHBhZGRpbmc6IDJlbSAzZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZm9ybSBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICAgIGNvbG9yOiAjRjk3MzAwO1xufVxuXG5mb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbmZvcm0gLmRhdGEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuZm9ybSAuZGF0YSBsaSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNGOTczMDA7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xufVxuXG5mb3JtIC5kYXRhIGxpIGkge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0gLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICNGOTczMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgcGFkZGluZzogMWVtIDIzcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxM3B4O1xuICAgIHRvcDogNjhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0gLmlucHV0LWdyb3VwLXRleHQgaSB7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbmZvcm0gLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xufVxuXG5mb3JtIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDA7XG59XG5cbi5saW5lIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n  <form [formGroup]=\"todoForm\">\n    <div class=\"form-group\">\n      <h1 class=\"text-center \">Todo App</h1>\n      <div class=\"input-group-prepend\">\n        <input type=\"text\" formControlName=\"todo\" class=\"form-control\" placeholder=\"Add Todo\" name=\"todo\">\n\n        <span class=\"input-group-text\" (click)=\"addTodo(todoForm.value)\">\n          <i class=\"material-icons\">add</i></span>\n\n      </div>\n      <div *ngIf=\"todoForm.controls['todo'].errors && (todoForm.controls['todo'].dirty || todoForm.controls['todo'].touched)\">\n        <span class=\"redxx\" *ngIf=\"todoForm.controls['todo'].errors.required\">\n          todo is required.\n        </span>\n      </div>\n      <span *ngIf=\"notValid\" class=\"redxx\">enter some valid value</span>\n\n    </div>\n    <div class=\"data\">\n      <ul class=\"list-unstyled\">\n\n        <li *ngFor=\"let todo of todoArray\">\n<div [ngClass]=\"{'line': todo.complete}\">\n            {{todo.todo}}\n     \n          <i (click)=\"deleteItem(todo)\" class=\"material-icons\">delete</i>\n          <i *ngIf=\"!todo.complete\" (click)=\"todoDone(todo)\" class=\"material-icons\">done</i>\n        </div>\n        </li>\n      </ul>\n\n    </div>\n    <div>\n    <a (click)=\"logout()\" class=\"btn btn-info btn-lg\"><strong>Logout</strong>\n      </a>\n    </div>\n  </form>\n \n</div>"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodosComponent = /** @class */ (function () {
    function TodosComponent(fb, apiService, router) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.todoArray = [];
        this.notValid = false;
        this.todoForm = fb.group({
            'todo': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUserId().subscribe(function (res) {
            _this.userId = res;
        });
        var data = {
            user: this.userId
        };
        this.apiService.getAllTodos(data).subscribe(function (res) {
            if (res.code === 200) {
                var value = res.data[0];
                value.forEach(function (v) {
                    _this.todoArray.push(v);
                });
            }
            else {
                console.log(res.message);
            }
        }, function (err) { console.error(err, "err"); });
    };
    TodosComponent.prototype.deleteItem = function (todo) {
        var _this = this;
        this.apiService.rmTodo(todo).subscribe(function (res) {
            var pos = _this.todoArray.indexOf(todo);
            _this.todoArray.splice(pos, 1);
        }, function (err) { console.log(err); });
    };
    TodosComponent.prototype.todoDone = function (todo) {
        var _this = this;
        this.apiService.isComplete(todo).subscribe(function (res) {
            var pos = _this.todoArray.indexOf(todo);
            _this.todoArray.splice(pos, 1);
            _this.todoArray.push(res.data[0]);
        }, function (err) { console.log(err); });
    };
    TodosComponent.prototype.addTodo = function (todo) {
        var _this = this;
        if (this.todoForm.valid) {
            var newTodo = {
                todo: todo.todo,
                user: this.userId
            };
            this.apiService.addTodo(newTodo).subscribe(function (res) {
                _this.todoArray.push(res.data[0]);
                _this.todoForm.reset();
            }, function (err) { console.error(err); });
        }
        else {
            this.notValid = true;
            setTimeout(function () {
                _this.notValid = false;
            }, 2000);
        }
    };
    TodosComponent.prototype.logout = function () {
        window.localStorage.removeItem('token');
        this.apiService.sendUserId(0);
        this.router.navigate(['']);
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rajneeshsharma/Desktop/to-do app/worldchat-app-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map