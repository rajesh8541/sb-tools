(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-rar-file-extractor-rar-file-extractor-module"],{

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

/***/ "NNbQ":
/*!*************************************************************************!*\
  !*** ./src/app/modules/rar-file-extractor/rar-file-extractor.module.ts ***!
  \*************************************************************************/
/*! exports provided: RarFileExtractorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RarFileExtractorModule", function() { return RarFileExtractorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/sb-heading/sb-heading.module */ "jd7e");
/* harmony import */ var src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/sb-related-tools/sb-related-tools.module */ "998r");
/* harmony import */ var _rar_file_extractor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rar-file-extractor.component */ "QOw8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _rar_file_extractor_component__WEBPACK_IMPORTED_MODULE_4__["RarFileExtractorComponent"],
    },
];
class RarFileExtractorModule {
}
RarFileExtractorModule.ɵfac = function RarFileExtractorModule_Factory(t) { return new (t || RarFileExtractorModule)(); };
RarFileExtractorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RarFileExtractorModule });
RarFileExtractorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_2__["SbHeadingModule"],
            src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_3__["SbRelatedToolsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RarFileExtractorModule, { declarations: [_rar_file_extractor_component__WEBPACK_IMPORTED_MODULE_4__["RarFileExtractorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_2__["SbHeadingModule"],
        src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_3__["SbRelatedToolsModule"]] }); })();


/***/ }),

/***/ "QOw8":
/*!****************************************************************************!*\
  !*** ./src/app/modules/rar-file-extractor/rar-file-extractor.component.ts ***!
  \****************************************************************************/
/*! exports provided: RarFileExtractorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RarFileExtractorComponent", function() { return RarFileExtractorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sb-heading/sb-heading.component */ "tL0y");
/* harmony import */ var _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sb-related-tools/sb-related-tools.component */ "ZE/+");




class RarFileExtractorComponent {
    constructor(seo) {
        this.seo = seo;
        this.title = 'Online RAR file extractor';
        this.subtitle = 'We provide free online RAR file extractor which will help many people in their daily work.';
    }
    ngOnInit() {
        this.seo.setSEO(this.title, this.subtitle);
    }
    fileChanged(event) { }
}
RarFileExtractorComponent.ɵfac = function RarFileExtractorComponent_Factory(t) { return new (t || RarFileExtractorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
RarFileExtractorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RarFileExtractorComponent, selectors: [["app-rar-file-extractor"]], decls: 36, vars: 2, consts: [[3, "title", "subtitle"], [1, "tool"], ["id", "workArea", 1, "tool__workarea"], ["id", "dropArea"], [1, "tool__header"], [1, "row"], [1, "col", "d-flex", "justify-content-center", "mt-5"], [1, "btn", "btn-outline-info", "btn-lg"], ["type", "file", "hidden", "", 1, "form-control-file", 3, "change"], ["src", "../../../assets/folder-icon.svg", "alt", "folder", "width", "30", "height", "30"], [1, "grid-container", "text-container"], [1, ""], ["id", "what-is-xml"]], template: function RarFileExtractorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sb-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Choose file from your computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RarFileExtractorComponent_Template_input_change_9_listener($event) { return ctx.fileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "What is RAR?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A RAR document (short for a Roshal Archive Compressed record) is a packed document, or information holder, that holds at least one different records and envelopes within it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "What Are RAR Files Used For?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " You'll presumably possibly run into a RAR document while you're downloading PC programming. Record sharing sites and programming wholesalers here and there put their records in a RAR document so they can pack it down to a more modest size, permitting you to download it quicker than you in any case could. Some RAR records are parted into parts for simpler transmission.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " When you open a RAR document, you can separate the information from within and then, at that point, utilize the documents like you would some other record on you PC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "How to use this tool?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Click on choose file from your computer button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Then choose the folder to extract.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Our tool will process your folder and give option to share or download the files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-sb-related-tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
    } }, directives: [_shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__["SbHeadingComponent"], _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_3__["SbRelatedToolsComponent"]], styles: [".tool__workarea[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  box-sizing: border-box;\n  flex: 1 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.tool__workarea__rendered[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 8px;\n  flex-wrap: wrap;\n  display: none;\n}\n\n.tool__workarea__info[_ngcontent-%COMP%] {\n  margin: 42px 24px 24px;\n  width: 100%;\n}\n\n.tool__workarea[_ngcontent-%COMP%]    > .wait[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.tool__header[_ngcontent-%COMP%] {\n  padding: 6px 24px 30px;\n}\n\n.tool__header__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n@media (max-width: 62em) {\n  .tool__header__title[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n\n@media (max-width: 840px) {\n  .tool__header__title[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 42px;\n  }\n}\n\n@media (max-width: 460px) {\n  .tool__header__title[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n\n.tool__header__subtitle[_ngcontent-%COMP%] {\n  max-width: 800px;\n  font-size: 22px;\n  font-weight: 400;\n  color: #383e45;\n  letter-spacing: 0;\n  margin: 0 auto 8px;\n  line-height: 32px;\n}\n\n.tool__header__subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #383e45;\n}\n\n@media (max-width: 62em) {\n  .tool__header__subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n}\n\n@media (max-width: 840px) {\n  .tool__header__subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 20px;\n  }\n}\n\n@media (max-width: 460px) {\n  .tool__header__subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n\n.tool-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 75% 25%;\n  grid-gap: 10px;\n}\n\n@media (max-width: 992px) {\n  .tool-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jhci1maWxlLWV4dHJhY3Rvci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFFQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFEQTtFQUNFLHNCQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBRUY7O0FDMUZFO0VENEZBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBRUY7O0VBQ0E7SUFDRSwyQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoicmFyLWZpbGUtZXh0cmFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xfX3dvcmthcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1mbGV4OiAxIDE7XG4gIGZsZXg6IDEgMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9vbF9fd29ya2FyZWFfX3JlbmRlcmVkIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b29sX193b3JrYXJlYV9faW5mbyB7XG4gIG1hcmdpbjogNDJweCAyNHB4IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvb2xfX3dvcmthcmVhID4gLndhaXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50b29sX19oZWFkZXIge1xuICBwYWRkaW5nOiA2cHggMjRweCAzMHB4O1xufVxuXG4udG9vbF9faGVhZGVyX190aXRsZSBzdHJvbmcge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHtcbiAgLnRvb2xfX2hlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gIC50b29sX19oZWFkZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAudG9vbF9faGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB9XG59XG5cbi50b29sX19oZWFkZXJfX3N1YnRpdGxlIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM4M2U0NTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG4udG9vbF9faGVhZGVyX19zdWJ0aXRsZSBhOmhvdmVyIHtcbiAgY29sb3I6ICMzODNlNDU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjJlbSkge1xuICAudG9vbF9faGVhZGVyX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgLnRvb2xfX2hlYWRlcl9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC50b29sX19oZWFkZXJfX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbn1cblxuXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvcmVzcG9uc2l2ZSc7XG5cbi50b29sLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbkBpbmNsdWRlIHNtYWxsRGVza3RvcEFuZExlc3Mge1xuICAudG9vbC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgfVxufVxuXG4iLCIkbW9iaWxlLXdpZHRoOiA0NjBweDtcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xuJGRlc2t0b3Atd2lkdGg6IDk5MnB4O1xuJG1pZGRsZS1kZXNrdG9wLXdpZHRoOiAxMzY2cHg7XG4kYmlnLWRlc2t0b3Atd2lkdGg6IDE5MjBweDtcblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRoICsgMX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWlkZGxlRGVza3RvcEFuZExlc3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skbWlkZGxlLWRlc2t0b3Atd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsRGVza3RvcEFuZExlc3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0QW5kTGVzcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1pZGRsZURlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aCArIDF9KSBhbmQgKG1heC13aWR0aDogI3skbWlkZGxlLWRlc2t0b3Atd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsRGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGggKyAxfSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtb2JpbGUtd2lkdGggKyAxfSkgYW5kIChtYXgtd2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JG1vYmlsZS13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"] });


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
//# sourceMappingURL=modules-rar-file-extractor-rar-file-extractor-module.js.map