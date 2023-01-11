(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pdf-password-remover-pdf-password-remover-module"],{

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

/***/ "JFYN":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pdf-password-remover/pdf-password-remover.component.ts ***!
  \********************************************************************************/
/*! exports provided: PdfPasswordRemoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPasswordRemoverComponent", function() { return PdfPasswordRemoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/file.service */ "cpn4");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sb-heading/sb-heading.component */ "tL0y");
/* harmony import */ var _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sb-related-tools/sb-related-tools.component */ "ZE/+");





const URL = '';
class PdfPasswordRemoverComponent {
    constructor(fileService, seo) {
        this.fileService = fileService;
        this.seo = seo;
        this.title = 'Online PDF Password Remover';
        this.subtitle = 'We provide free online PDF Password Remover which will help many people in their daily work.';
    }
    ngOnInit() {
        this.seo.setSEO(this.title, this.subtitle);
        this.fileService.getFile();
    }
    uploadFiles() {
    }
}
PdfPasswordRemoverComponent.ɵfac = function PdfPasswordRemoverComponent_Factory(t) { return new (t || PdfPasswordRemoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SEOService"])); };
PdfPasswordRemoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfPasswordRemoverComponent, selectors: [["app-pdf-password-remover"]], decls: 35, vars: 2, consts: [[3, "title", "subtitle"], [1, "tool"], ["id", "workArea", 1, "tool__workarea"], ["id", "dropArea"], [1, ""], ["for", "file1", 1, "file-upload"], [1, "btn", "uploader__btn"], ["id", "file1", "type", "file", "multiple", ""], [1, "box-placeholder", "my-drop-zone"], [1, "grid-container", "text-container"], ["id", "what-is-xml"]], template: function PdfPasswordRemoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sb-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select PDF file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "or drop PDF here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "What is PDF?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Portable Document Format, standardized as ISO 32000, is a file format developed by Adobe in 1992 to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pick a PDF document to open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Select the PDF to open: transfer the PDF eliminate secret word record or documents from your PC. You can likewise drop documents straightforwardly from your PC. Simplified PDF documents into the container from your PC to start to eliminate secret phrase and open PDF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Open the PDF secret file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Enter and utilize the secret word that was made to limit admittance to the PDF record. On the off chance that the secret word you entered matches the one made to lock the record, the PDF will open and eliminate all limitations to the document. You can then access the PDF record uninhibitedly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "View and download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Once your file has been unlocked and the PDF password has been entered, access the file or files by: downloading to your computer, viewing the PDF in your browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-sb-related-tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
    } }, directives: [_shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_3__["SbHeadingComponent"], _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_4__["SbRelatedToolsComponent"]], styles: [".tool[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n.tool__workarea[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 100%;\n  padding: 24px;\n  box-sizing: border-box;\n  flex: 1 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\ntool__header[_ngcontent-%COMP%] {\n  padding: 6px 24px 30px;\n}\n\n.tool__header__title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  letter-spacing: 0;\n  font-weight: 600;\n  color: #383e45;\n  margin-bottom: 8px;\n  line-height: 46px;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.tool__header__subtitle[_ngcontent-%COMP%] {\n  max-width: 800px;\n  font-size: 22px;\n  font-weight: 400;\n  color: #383e45;\n  letter-spacing: 0;\n  margin: 0 auto 8px;\n  line-height: 32px;\n}\n\n.uploader__btn.active[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n}\n\n.uploader__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 80px;\n  box-sizing: border-box;\n  background: #17a2b8;\n  padding: 24px 56px;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 32px;\n  vertical-align: middle;\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 12px;\n  transition: all 0.1s linear;\n  border-radius: 8px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.14);\n  order: 1;\n  max-width: 60vw;\n}\n\n.uploader__btn.active[_ngcontent-%COMP%]:hover {\n  background-color: #161616;\n}\n\n.file-upload[_ngcontent-%COMP%]   [type=file][_ngcontent-%COMP%] {\n  min-height: 100%;\n  margin-left: -294px;\n  min-width: 23%;\n  opacity: 0;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BkZi1wYXNzd29yZC1yZW1vdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBRUEsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUtBO0VBRUksb0JBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFHQSwyQkFBQTtFQUNBLGtCQUFBO0VBRUEsMkNBQUE7RUFFQSxRQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtFO0VBQ0YscUJBQUE7QUFGQSIsImZpbGUiOiJwZGYtcGFzc3dvcmQtcmVtb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbi50b29sX193b3JrYXJlYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1mbGV4OiAxIDE7XG4gICAgZmxleDogMSAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudG9vbF9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiA2cHggMjRweCAzMHB4O1xufVxuXG4udG9vbF9faGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzODNlNDU7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4udG9vbF9faGVhZGVyX19zdWJ0aXRsZSB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzM4M2U0NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBtYXJnaW46IDAgYXV0byA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cblxuLnVwbG9hZGVyX19idG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xufVxuXG4udXBsb2FkZXJfX2J0biB7XG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xuICAgIHBhZGRpbmc6IDI0cHggNTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gMTQlKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyAxNCUpO1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xuICAgIG9yZGVyOiAxO1xuICAgIG1heC13aWR0aDogNjB2dztcbn1cblxuLnVwbG9hZGVyX19idG4uYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xufVxuXG4uZmlsZS11cGxvYWQgW3R5cGU9XCJmaWxlXCJdIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjk0cHg7XG4gICAgbWluLXdpZHRoOiAyMyU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIGEsIGEgOmhvdmVye1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9Il19 */"] });


/***/ }),

/***/ "K//c":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pdf-password-remover/pdf-password-remover.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PdfPasswordRemoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPasswordRemoverModule", function() { return PdfPasswordRemoverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pdf_password_remover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-password-remover.component */ "JFYN");
/* harmony import */ var src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/sb-heading/sb-heading.module */ "jd7e");
/* harmony import */ var src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/sb-related-tools/sb-related-tools.module */ "998r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _pdf_password_remover_component__WEBPACK_IMPORTED_MODULE_2__["PdfPasswordRemoverComponent"],
    },
];
class PdfPasswordRemoverModule {
}
PdfPasswordRemoverModule.ɵfac = function PdfPasswordRemoverModule_Factory(t) { return new (t || PdfPasswordRemoverModule)(); };
PdfPasswordRemoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PdfPasswordRemoverModule });
PdfPasswordRemoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"],
            src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_4__["SbRelatedToolsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PdfPasswordRemoverModule, { declarations: [_pdf_password_remover_component__WEBPACK_IMPORTED_MODULE_2__["PdfPasswordRemoverComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"],
        src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_4__["SbRelatedToolsModule"]] }); })();


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

/***/ "cpn4":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FileService {
    constructor() { }
    getFile() {
        return true;
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=modules-pdf-password-remover-pdf-password-remover-module.js.map