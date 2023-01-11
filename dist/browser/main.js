(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/softobotics/project/sb-tools/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 2, consts: [[1, "logo"], ["target", "_blank", "href", "https://www.softobotics.com/"], ["src", "assets/logo.svg", "alt", "menu", "height", "55"], ["type", "checkbox", "id", "click"], ["for", "click", 1, "menu-btn"], ["src", "../../../assets/menu.svg", "alt", "menu", "width", "30", "height", "30"], ["routerLinkActive", "active", "routerLink", "/", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/online-rar-extractor/"], ["routerLinkActive", "active", "routerLink", "/xml-to-json-convertor/"], ["target", "_blank", "href", "https://www.softobotics.com/#contact"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "RAR Extractor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "XML to JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  height: 80px;\n  width: 100%;\n  background: #ededed;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 50px 0 100px;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #1b1b1b;\n  font-size: 35px;\n  font-weight: 600;\n  margin-left: -40px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1b1b1b;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 8px 15px;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  transition: all 0.3s ease;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #636363;\n}\n\nnav[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1b1b1b;\n  font-size: 22px;\n  cursor: pointer;\n  display: none;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 1000px) {\n  nav[_ngcontent-%COMP%] {\n    padding: 0 40px 0 50px;\n  }\n}\n\n@media (max-width: 920px) {\n  nav[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 80px;\n    left: -100%;\n    background: #111;\n    height: 100vh;\n    width: 100%;\n    text-align: center;\n    display: block;\n    transition: all 0.3s ease;\n  }\n\n  #click[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n    left: 0;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 40px 0;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: -100%;\n    display: block;\n    font-size: 20px;\n  }\n\n  #click[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: none;\n    color: #f09a19;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUtGOztBQUhBOztFQUVFLFlBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtBQVFGOztBQU5BO0VBQ0U7SUFDRSxzQkFBQTtFQVNGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGNBQUE7RUFTRjs7RUFKQTtJQUNFLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtFQU9GOztFQUxBO0lBQ0UsT0FBQTtFQVFGOztFQU5BO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUFTRjs7RUFQQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBVUY7O0VBUkE7SUFDRSxnQkFBQTtFQVdGOztFQVRBOztJQUVFLGdCQUFBO0lBQ0EsY0FBQTtFQVlGO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDUwcHggMCAxMDBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxubmF2IC5sb2dvIHtcbiAgY29sb3I6ICMxYjFiMWI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxubmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxubmF2IHVsIGxpIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbm5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICMxYjFiMWI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxubmF2IHVsIGxpIGEuYWN0aXZlLFxubmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xufVxubmF2IC5tZW51LWJ0biBpIHtcbiAgY29sb3I6ICMxYjFiMWI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgbmF2IHtcbiAgICBwYWRkaW5nOiAwIDQwcHggMCA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgbmF2IC5tZW51LWJ0biBpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAvLyAjY2xpY2s6Y2hlY2tlZCB+IC5tZW51LWJ0biBpOmJlZm9yZSB7XG4gIC8vICAgY29udGVudDogXCJcXGYwMGRcIjtcbiAgLy8gfVxuICBuYXYgdWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDgwcHg7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgYmFja2dyb3VuZDogIzExMTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gICNjbGljazpjaGVja2VkIH4gdWwge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgbmF2IHVsIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgfVxuICBuYXYgdWwgbGkgYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAjY2xpY2s6Y2hlY2tlZCB+IHVsIGxpIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgbmF2IHVsIGxpIGEuYWN0aXZlLFxuICBuYXYgdWwgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogcmdiKDI0MCwgMTU0LCAyNSk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "6A8j":
/*!***********************************!*\
  !*** ./src/trailing-slash-fix.ts ***!
  \***********************************/
/*! exports provided: TrailingSlashUrlSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailingSlashUrlSerializer", function() { return TrailingSlashUrlSerializer; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");

class TrailingSlashUrlSerializer extends _angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"] {
    serialize(tree) {
        return this._withTrailingSlash(super.serialize(tree));
    }
    _withTrailingSlash(url) {
        const splitOn = url.indexOf('?') > -1 ? '?' : '#';
        const pathArr = url.split(splitOn);
        if (!pathArr[0].endsWith('/')) {
            const fileName = url.substring(url.lastIndexOf('/') + 1);
            if (fileName.indexOf('.') === -1) {
                pathArr[0] += '/';
            }
        }
        return pathArr.join(splitOn);
    }
}


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    baseUrl: `http://localhost:4200`
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

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 26, vars: 0, consts: [[1, "flex-container"], [1, "flex-item"], [1, "flex-links"], ["routerLink", "/online-rar-extractor/", "title", "RAR Extractor"], ["routerLink", "pdf-password-remover/", "title", "PDF Password Remover"], ["routerLink", "/xml-formatter/", "title", "XML Formatter"], ["routerLink", "/json-formatter/", "title", "JSON Formatter"], ["routerLink", "/yaml-formatter/", "title", "YAML Formatter"], ["routerLink", "/json-to-xml-convertor/", "title", "JSON to XML Convertor"], ["routerLink", "/json-to-yaml-convertor/", "title", "JSON to YAML Convertor"], ["routerLink", "/yaml-to-json-convertor/", "title", "YAML to JSON Convertor"], ["routerLink", "/xml-to-json-convertor/", "title", "XML to JSON Convertor"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RAR Extractor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PDF Password Remover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "XML Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "JSON Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "YAML Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "JSON to XML Convertor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "JSON to YAML Convertor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "YAML to JSON Convertor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "XML to JSON Convertor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background-color: #d4e0e0;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  text-align: center;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  flex: 33%;\n}\n\n.flex-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: black;\n  margin: 10px;\n  text-align: center;\n  font-size: 13px;\n}\n\n\n\n@media (max-width: 800px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQSwrRUFBQTs7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIyNCwgMjI0KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsZXg6IDMzJTtcbn1cblxuLmZsZXgtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1saW5rcyA+IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgYSBvbmUgY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIHR3by1jb2x1bW4gbGF5b3V0ICovXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmZsZXgtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'sb-tools';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDI1cHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_trailing_slash_fix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/trailing-slash-fix */ "6A8j");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const js2xmlparser = __webpack_require__(/*! js2xmlparser */ "P1SL");
const format = __webpack_require__(/*! xml-formatter */ "4+qP");
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["UrlSerializer"],
            useClass: src_trailing_slash_fix__WEBPACK_IMPORTED_MODULE_7__["TrailingSlashUrlSerializer"],
        },
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "iydT")).then((m) => m.HomeModule),
    },
    {
        path: 'online-rar-extractor',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-rar-file-extractor-rar-file-extractor-module */ "modules-rar-file-extractor-rar-file-extractor-module").then(__webpack_require__.bind(null, /*! ./modules/rar-file-extractor/rar-file-extractor.module */ "NNbQ")).then((m) => m.RarFileExtractorModule),
    },
    {
        path: 'xml-to-json-convertor',
        loadChildren: () => Promise.all(/*! import() | modules-xml-json-xml-json-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("modules-xml-json-xml-json-module")]).then(__webpack_require__.bind(null, /*! ./modules/xml-json/xml-json.module */ "mTQU")).then((m) => m.XmlJsonModule),
    },
    {
        path: 'json-to-yaml-convertor',
        loadChildren: () => Promise.all(/*! import() | modules-json-yaml-json-yaml-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("modules-json-yaml-json-yaml-module")]).then(__webpack_require__.bind(null, /*! ./modules/json-yaml/json-yaml.module */ "wio5")).then((m) => m.JsonYamlModule),
    },
    {
        path: 'yaml-to-json-convertor',
        loadChildren: () => Promise.all(/*! import() | modules-yaml-json-yaml-json-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("default~modules-yaml-formatter-yaml-formatter-module~modules-yaml-json-yaml-json-module"), __webpack_require__.e("modules-yaml-json-yaml-json-module")]).then(__webpack_require__.bind(null, /*! ./modules/yaml-json/yaml-json.module */ "e1c2")).then((m) => m.YamlJsonModule),
    },
    {
        path: 'json-to-xml-convertor',
        loadChildren: () => Promise.all(/*! import() | modules-json-xml-json-xml-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("modules-json-xml-json-xml-module")]).then(__webpack_require__.bind(null, /*! ./modules/json-xml/json-xml.module */ "3Le3")).then((m) => m.JsonXmlModule),
    },
    {
        path: 'xml-formatter',
        loadChildren: () => Promise.all(/*! import() | modules-xml-formatter-xml-formatter-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("modules-xml-formatter-xml-formatter-module")]).then(__webpack_require__.bind(null, /*! ./modules/xml-formatter/xml-formatter.module */ "g64O")).then((m) => m.XmlFormatterModule),
    },
    {
        path: 'json-formatter',
        loadChildren: () => Promise.all(/*! import() | modules-json-formatter-json-formatter-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("modules-json-formatter-json-formatter-module")]).then(__webpack_require__.bind(null, /*! ./modules/json-formatter/json-formatter.module */ "JClp")).then((m) => m.JsonFormatterModule),
    },
    {
        path: 'yaml-formatter',
        loadChildren: () => Promise.all(/*! import() | modules-yaml-formatter-yaml-formatter-module */[__webpack_require__.e("default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"), __webpack_require__.e("default~modules-yaml-formatter-yaml-formatter-module~modules-yaml-json-yaml-json-module"), __webpack_require__.e("modules-yaml-formatter-yaml-formatter-module")]).then(__webpack_require__.bind(null, /*! ./modules/yaml-formatter/yaml-formatter.module */ "AX5w")).then((m) => m.YamlFormatterModule),
    },
    {
        path: 'pdf-password-remover',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-pdf-password-remover-pdf-password-remover-module */ "modules-pdf-password-remover-pdf-password-remover-module").then(__webpack_require__.bind(null, /*! ./modules/pdf-password-remover/pdf-password-remover.module */ "K//c")).then((m) => m.PdfPasswordRemoverModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch((err) => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map