(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244"],{

/***/ "998r":
/*!********************************************************************!*\
  !*** ./src/app/shared/sb-related-tools/sb-related-tools.module.ts ***!
  \********************************************************************/
/*! exports provided: SbRelatedToolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbRelatedToolsModule", function() { return SbRelatedToolsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sb_related_tools_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sb-related-tools.component */ "ZE/+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SbRelatedToolsModule {
}
SbRelatedToolsModule.ɵfac = function SbRelatedToolsModule_Factory(t) { return new (t || SbRelatedToolsModule)(); };
SbRelatedToolsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SbRelatedToolsModule });
SbRelatedToolsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SbRelatedToolsModule, { declarations: [_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_1__["SbRelatedToolsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_1__["SbRelatedToolsComponent"]] }); })();


/***/ }),

/***/ "MJuv":
/*!*************************************************************!*\
  !*** ./src/app/shared/sb-textarea/sb-textarea.component.ts ***!
  \*************************************************************/
/*! exports provided: SbTextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbTextareaComponent", function() { return SbTextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class SbTextareaComponent {
    constructor() {
        this.type = '';
        this.input = '';
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.childInput = '';
    }
    onChange(event) {
        this.childInput = event.target.value;
        this.event.emit(this.childInput);
    }
    ngOnInit() { }
}
SbTextareaComponent.ɵfac = function SbTextareaComponent_Factory(t) { return new (t || SbTextareaComponent)(); };
SbTextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SbTextareaComponent, selectors: [["app-sb-textarea"]], inputs: { type: "type", input: ["parentData", "input"] }, outputs: { event: "event" }, decls: 9, vars: 4, consts: [[1, "icons-main"], [1, "icons-box"], ["rows", "22", 3, "change"]], template: function SbTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SbTextareaComponent_Template_textarea_change_7_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], styles: ["textarea[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  border: solid 1px grey;\n  border-radius: 0 0 5px 5px;\n  resize: none;\n  padding: 10px;\n}\n\n.icons-box[_ngcontent-%COMP%] {\n  background-color: #727272;\n  padding: 8px 10px 5px 10px;\n  color: white;\n  text-align: right;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px 5px 0 0;\n}\n\n.icons-main[_ngcontent-%COMP%] {\n  color: grey;\n  background: #f3f3f3;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  background: url(http://i.imgur.com/2cOaJ.png);\n  background-attachment: local;\n  background-repeat: no-repeat;\n  padding-left: 35px;\n  padding-top: 10px;\n  border-color: #b8a9a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NiLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InNiLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmljb25zLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjcyNzI7XG4gIHBhZGRpbmc6IDhweCAxMHB4IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4uaWNvbnMtbWFpbiB7XG4gIGNvbG9yOiBncmV5O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuXG50ZXh0YXJlYXtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9pLmltZ3VyLmNvbS8yY09hSi5wbmcpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGxvY2FsO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7IFxuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWNvbG9yOnJnYigxODQsIDE2OSwgMTY5KTtcbiAgXG59XG5cblxuXG5cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "TCRW":
/*!**********************************************************!*\
  !*** ./src/app/shared/sb-textarea/sb-textarea.module.ts ***!
  \**********************************************************/
/*! exports provided: SbTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbTextareaModule", function() { return SbTextareaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sb_textarea_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sb-textarea.component */ "MJuv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SbTextareaModule {
}
SbTextareaModule.ɵfac = function SbTextareaModule_Factory(t) { return new (t || SbTextareaModule)(); };
SbTextareaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SbTextareaModule });
SbTextareaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SbTextareaModule, { declarations: [_sb_textarea_component__WEBPACK_IMPORTED_MODULE_1__["SbTextareaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_sb_textarea_component__WEBPACK_IMPORTED_MODULE_1__["SbTextareaComponent"]] }); })();


/***/ }),

/***/ "ZE/+":
/*!***********************************************************************!*\
  !*** ./src/app/shared/sb-related-tools/sb-related-tools.component.ts ***!
  \***********************************************************************/
/*! exports provided: SbRelatedToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbRelatedToolsComponent", function() { return SbRelatedToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function SbRelatedToolsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relatedTool_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", relatedTool_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", relatedTool_r1.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", relatedTool_r1.title, " ");
} }
class SbRelatedToolsComponent {
    constructor() {
        this.relatedTools = [
            { title: 'XML Formatter', slug: '/xml-formatter/' },
            { title: 'JSON Formatter', slug: '/json-formatter/' },
            { title: 'YAML Formatter', slug: '/yaml-formatter/' },
        ];
    }
    ngOnInit() { }
}
SbRelatedToolsComponent.ɵfac = function SbRelatedToolsComponent_Factory(t) { return new (t || SbRelatedToolsComponent)(); };
SbRelatedToolsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SbRelatedToolsComponent, selectors: [["app-sb-related-tools"]], decls: 4, vars: 1, consts: [[1, "related-tools"], [4, "ngFor", "ngForOf"], [3, "routerLink", "title"]], template: function SbRelatedToolsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Related Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SbRelatedToolsComponent_div_3_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relatedTools);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".related-tools[_ngcontent-%COMP%] {\n  background-color: #d4e0e0;\n  border-radius: 5px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NiLXJlbGF0ZWQtdG9vbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InNiLXJlbGF0ZWQtdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVsYXRlZC10b29scyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIyNCwgMjI0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "gYN0":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





const seoVariables = {
    author: 'Softobotics',
    image: 'https://www.softobotics.com/assets/img/logo.png',
};
const MetaDespMinLength = 110;
const MetaDespMaxLength = 160;
class SEOService {
    constructor(title, doc, platformId, meta) {
        this.title = title;
        this.doc = doc;
        this.platformId = platformId;
        this.meta = meta;
    }
    setPageTitle(title = '') {
        // Have to add ... to prevent duplicated title and h1 issue
        this.title.setTitle(title.length > 60
            ? title.substring(0, 60) + '...'
            : title.length < 40
                ? title + ' - Softobotics Tools'
                : title);
    }
    setMetaData(type, name, content) {
        const metaData = { [type]: name, content };
        this.meta.updateTag(metaData);
    }
    setSEO(title, description) {
        description =
            description.length > MetaDespMaxLength
                ? description.substring(0, MetaDespMaxLength)
                : description.length < MetaDespMinLength
                    ? description + ' - Softobotics Online Tools for developers'
                    : description;
        this.setPageTitle(title);
        this.setMetaData('name', 'description', description);
        this.setMetaData('property', 'og:title', title);
        this.setMetaData('property', 'og:description', description);
        this.setMetaData('property', 'og:url', this.getURL());
        this.setMetaData('property', 'og:image', `${seoVariables.image}?v=${Date.now()}`);
        this.setMetaData('name', 'twitter:image', seoVariables.image);
        this.setMetaData('name', 'twitter:creator', seoVariables.author);
        this.setMetaData('name', 'twitter:site', this.getURL());
        this.setMetaData('name', 'twitter:title', title);
        this.setMetaData('name', 'twitter:description', description);
        this.createLinkForCanonicalURL();
    }
    getURL() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            return this.doc.URL;
        }
        else {
            return (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + this.doc.URL) + (this.doc.URL !== '/' ? '/' : '');
        }
    }
    createLinkForCanonicalURL() {
        var _a;
        if ((_a = this.doc.URL) === null || _a === void 0 ? void 0 : _a.includes('https')) {
            const existingLink = this.doc.querySelector('link[rel="canonical"]');
            if (existingLink) {
                existingLink.setAttribute('href', this.getURL());
            }
            else {
                const newLink = this.doc.createElement('link');
                newLink.setAttribute('rel', 'canonical');
                this.doc.head.appendChild(newLink);
                newLink.setAttribute('href', this.getURL());
            }
        }
    }
}
SEOService.ɵfac = function SEOService_Factory(t) { return new (t || SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
SEOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SEOService, factory: SEOService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jd7e":
/*!********************************************************!*\
  !*** ./src/app/shared/sb-heading/sb-heading.module.ts ***!
  \********************************************************/
/*! exports provided: SbHeadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbHeadingModule", function() { return SbHeadingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sb_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sb-heading.component */ "tL0y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SbHeadingModule {
}
SbHeadingModule.ɵfac = function SbHeadingModule_Factory(t) { return new (t || SbHeadingModule)(); };
SbHeadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SbHeadingModule });
SbHeadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SbHeadingModule, { declarations: [_sb_heading_component__WEBPACK_IMPORTED_MODULE_1__["SbHeadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_sb_heading_component__WEBPACK_IMPORTED_MODULE_1__["SbHeadingComponent"]] }); })();


/***/ }),

/***/ "tL0y":
/*!***********************************************************!*\
  !*** ./src/app/shared/sb-heading/sb-heading.component.ts ***!
  \***********************************************************/
/*! exports provided: SbHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbHeadingComponent", function() { return SbHeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SbHeadingComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
    }
    ngOnInit() {
    }
}
SbHeadingComponent.ɵfac = function SbHeadingComponent_Factory(t) { return new (t || SbHeadingComponent)(); };
SbHeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SbHeadingComponent, selectors: [["app-sb-heading"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 5, vars: 2, consts: [[1, "text-center"]], template: function SbHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYi1oZWFkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default~modules-json-formatter-json-formatter-module~modules-json-xml-json-xml-module~modules-json-y~be884244.js.map