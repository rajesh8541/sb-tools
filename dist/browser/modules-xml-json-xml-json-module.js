(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-xml-json-xml-json-module"],{

/***/ "Oi53":
/*!********************************************************!*\
  !*** ./src/app/modules/xml-json/xml-json.component.ts ***!
  \********************************************************/
/*! exports provided: XmlJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlJsonComponent", function() { return XmlJsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "dMHM");
/* harmony import */ var _shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sb-heading/sb-heading.component */ "tL0y");
/* harmony import */ var _shared_sb_textarea_sb_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sb-textarea/sb-textarea.component */ "MJuv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sb-related-tools/sb-related-tools.component */ "ZE/+");







class XmlJsonComponent {
    constructor(seo, ngxXml2jsonService) {
        this.seo = seo;
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.title = 'Online XML to JSON Convertor';
        this.subtitle = 'We provide free online XML to JSON Convertor which will help many developers in their daily work.';
        this.childInputText = '';
        this.result = '';
        this.outputText = '';
    }
    ngOnInit() {
        this.seo.setSEO(this.title, this.subtitle);
    }
    convert() {
        const xml = this.childInputText;
        const parser = new DOMParser();
        const xml_ = parser.parseFromString(xml.replace(/\s/g, ''), 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml_);
        const errorMsg = xml_.querySelector('parsererror');
        if (errorMsg) {
            this.outputText = 'INVALID XML INPUT';
        }
        else {
            this.outputText = JSON.stringify(obj, null, 4);
        }
    }
    onCopy() {
        console.log('Asd');
    }
    clearOutputData() {
        console.log('Asd');
    }
}
XmlJsonComponent.ɵfac = function XmlJsonComponent_Factory(t) { return new (t || XmlJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"])); };
XmlJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XmlJsonComponent, selectors: [["app-xml-json"]], decls: 82, vars: 6, consts: [[3, "title", "subtitle"], [1, "tool-container"], [1, "text-area", 3, "type", "event"], [1, "button-align"], [1, "btn", 3, "click"], [1, "text-area", 3, "type", "parentData"], [1, "grid-container", "text-container"], [3, "routerLink"]], template: function XmlJsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sb-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sb-textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function XmlJsonComponent_Template_app_sb_textarea_event_2_listener($event) { return ctx.childInputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XmlJsonComponent_Template_button_click_4_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "XML TO JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sb-textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " XML to JSON converter helps us to convert XML file to JSON file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " It's changes XML tree elements into the JSON key-value within a seconds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How to convert XML to JSON?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "To convert XML code, follow the below steps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Write or paste XML code in the input box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click the XML TO JSON button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " You can also convert your JSON code to XML by using our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "JSON to XML converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "What are XML and JSON?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " XML stands for Extensible Markup Language is a markup language like HTML, it was originated from SGML for web use. It is used to represent structured text as well as to transfer data across the internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute\u2013value pairs and arrays. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "JSON is commanly used for transmitting the data in the Web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "How does this converter work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " The XML to JSON converter, Converts the XML tree structure code to JSON structure which basically contains objets and arrays. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "XML Conversion Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Once you Write or paste the XMl code our tool will convert that to JSON:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " The common rules to convert XMl to JSON: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " The XML tags or attributes of the structure will be treated as JSON properties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " if two are more root elements with same name will be traeted as array. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " The namespaces in the code are captured from the resulting property names. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "JSON Conversion Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Once you Write or paste the JSON code our tool will convert that to XML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " The common rules to convert JSON to XML: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "JSON properties value will be converted to #item types.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Root element is created and the offending characters will be XML escaped. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Array entries will be converted to individual XML root elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Why use this converter?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " It is a easy to use tool which help programmer to format his data XML to JSON or vice versa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " even we provide the example to the users: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Get an Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Our tool provide quick example to the users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Download Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Once we done with the conversion it allow users to share or download the converted file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-sb-related-tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "output")("parentData", ctx.outputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/json-to-xml-convertor/");
    } }, directives: [_shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_3__["SbHeadingComponent"], _shared_sb_textarea_sb_textarea_component__WEBPACK_IMPORTED_MODULE_4__["SbTextareaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_6__["SbRelatedToolsComponent"]], styles: [".tool-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 75% 25%;\n  grid-gap: 10px;\n}\n\n@media (max-width: 992px) {\n  .tool-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3htbC1qc29uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBREY7O0FDQUU7RURLQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQURGOztFQUdBO0lBQ0UsMkJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InhtbC1qc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3Jlc3BvbnNpdmUnO1xuXG4udG9vbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmJ1dHRvbi1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JSAyNSU7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG5AaW5jbHVkZSBzbWFsbERlc2t0b3BBbmRMZXNzIHtcbiAgLnRvb2wtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICB9XG59XG4iLCIkbW9iaWxlLXdpZHRoOiA0NjBweDtcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xuJGRlc2t0b3Atd2lkdGg6IDk5MnB4O1xuJG1pZGRsZS1kZXNrdG9wLXdpZHRoOiAxMzY2cHg7XG4kYmlnLWRlc2t0b3Atd2lkdGg6IDE5MjBweDtcblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRoICsgMX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWlkZGxlRGVza3RvcEFuZExlc3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skbWlkZGxlLWRlc2t0b3Atd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsRGVza3RvcEFuZExlc3Mge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0QW5kTGVzcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1pZGRsZURlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aCArIDF9KSBhbmQgKG1heC13aWR0aDogI3skbWlkZGxlLWRlc2t0b3Atd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtYWxsRGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGggKyAxfSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtb2JpbGUtd2lkdGggKyAxfSkgYW5kIChtYXgtd2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JG1vYmlsZS13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "dMHM":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-xml2json/__ivy_ngcc__/fesm2015/ngx-xml2json.js ***!
  \*************************************************************************/
/*! exports provided: NgxXml2jsonService, NgxXml2jsonComponent, NgxXml2jsonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxXml2jsonService", function() { return NgxXml2jsonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxXml2jsonComponent", function() { return NgxXml2jsonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxXml2jsonModule", function() { return NgxXml2jsonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

class NgxXml2jsonService {
    constructor() { }
    /**
     * @param {?} xml
     * @return {?}
     */
    xmlToJson(xml) {
        let /** @type {?} */ obj = {};
        if (xml.nodeType === 1) {
            if (xml.attributes.length > 0) {
                obj['@attributes'] = {};
                for (let /** @type {?} */ j = 0; j < xml.attributes.length; j += 1) {
                    const /** @type {?} */ attribute = xml.attributes.item(j);
                    obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
        else if (xml.nodeType === 3) {
            obj = xml.nodeValue;
        }
        if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
            obj = xml.childNodes[0].nodeValue;
        }
        else if (xml.hasChildNodes()) {
            for (let /** @type {?} */ i = 0; i < xml.childNodes.length; i += 1) {
                const /** @type {?} */ item = xml.childNodes.item(i);
                const /** @type {?} */ nodeName = item.nodeName;
                if (typeof (obj[nodeName]) === 'undefined') {
                    obj[nodeName] = this.xmlToJson(item);
                }
                else {
                    if (typeof (obj[nodeName].push) === 'undefined') {
                        const /** @type {?} */ old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    }
}
NgxXml2jsonService.ɵfac = function NgxXml2jsonService_Factory(t) { return new (t || NgxXml2jsonService)(); };
NgxXml2jsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxXml2jsonService, factory: NgxXml2jsonService.ɵfac, providedIn: 'root' });
/** @nocollapse */
NgxXml2jsonService.ctorParameters = () => [];
/** @nocollapse */ NgxXml2jsonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxXml2jsonService_Factory() { return new NgxXml2jsonService(); }, token: NgxXml2jsonService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxXml2jsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxXml2jsonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgxXml2jsonComponent.ɵfac = function NgxXml2jsonComponent_Factory(t) { return new (t || NgxXml2jsonComponent)(); };
NgxXml2jsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxXml2jsonComponent, selectors: [["lib-ngx-xml2json"]], decls: 2, vars: 0, template: function NgxXml2jsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ngx-xml2json ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/** @nocollapse */
NgxXml2jsonComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxXml2jsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-ngx-xml2json',
                template: `
    <p>
      Ngx-xml2json
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxXml2jsonModule {
}
NgxXml2jsonModule.ɵfac = function NgxXml2jsonModule_Factory(t) { return new (t || NgxXml2jsonModule)(); };
NgxXml2jsonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxXml2jsonModule });
NgxXml2jsonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxXml2jsonModule, { declarations: [NgxXml2jsonComponent], exports: [NgxXml2jsonComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxXml2jsonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [NgxXml2jsonComponent],
                exports: [NgxXml2jsonComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXhtbDJqc29uLmpzIiwic291cmNlcyI6WyJuZ3gteG1sMmpzb24vbGliL25neC14bWwyanNvbi5zZXJ2aWNlLnRzIiwibmd4LXhtbDJqc29uL2xpYi9uZ3gteG1sMmpzb24uY29tcG9uZW50LnRzIiwibmd4LXhtbDJqc29uL2xpYi9uZ3gteG1sMmpzb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUEyQixJQU96QixpQkFBaUI7QUFDbkI7QUFDTztBQUVFO0FBRUE7QUFBUSxJQUpmLFNBQVMsQ0FBQyxHQUFHO0FBQ2YsUUFDSSxxQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFFBQ0ksSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUM1QixZQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3JDLGdCQUFRLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEMsZ0JBQVEsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzNELG9CQUFVLHVCQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCxvQkFBVSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDdkUsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUFDLGFBQUssSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUNuQyxZQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQzFCLFNBQUs7QUFDTCxRQUNJLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEdBQUcsQ0FB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QUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQTFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDSkEsQUFhQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBYkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNWQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFhtbDJqc29uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB4bWxUb0pzb24oeG1sKSB7XG5cbiAgICBsZXQgb2JqID0ge307XG5cbiAgICBpZiAoeG1sLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpZiAoeG1sLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmpbJ0BhdHRyaWJ1dGVzJ10gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XG4gICAgICAgICAgb2JqWydAYXR0cmlidXRlcyddW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh4bWwubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgIG9iaiA9IHhtbC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHhtbC5oYXNDaGlsZE5vZGVzKCkgJiYgeG1sLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIHhtbC5jaGlsZE5vZGVzWzBdLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICBvYmogPSB4bWwuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gICAgfSBlbHNlIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhtbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB4bWwuY2hpbGROb2Rlcy5pdGVtKGkpO1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG9ialtub2RlTmFtZV0gPSB0aGlzLnhtbFRvSnNvbihpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWVdLnB1c2gpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3Qgb2xkID0gb2JqW25vZGVOYW1lXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvYmpbbm9kZU5hbWVdLnB1c2godGhpcy54bWxUb0pzb24oaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC14bWwyanNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBOZ3gteG1sMmpzb25cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4WG1sMmpzb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WG1sMmpzb25Db21wb25lbnQgfSBmcm9tICcuL25neC14bWwyanNvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFhtbDJqc29uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neFhtbDJqc29uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hYbWwyanNvbk1vZHVsZSB7IH1cbiJdfQ==

/***/ }),

/***/ "mTQU":
/*!*****************************************************!*\
  !*** ./src/app/modules/xml-json/xml-json.module.ts ***!
  \*****************************************************/
/*! exports provided: XmlJsonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlJsonModule", function() { return XmlJsonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _xml_json_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xml-json.component */ "Oi53");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/sb-textarea/sb-textarea.module */ "TCRW");
/* harmony import */ var src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/sb-heading/sb-heading.module */ "jd7e");
/* harmony import */ var src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/sb-related-tools/sb-related-tools.module */ "998r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: '',
        component: _xml_json_component__WEBPACK_IMPORTED_MODULE_1__["XmlJsonComponent"],
    },
];
class XmlJsonModule {
}
XmlJsonModule.ɵfac = function XmlJsonModule_Factory(t) { return new (t || XmlJsonModule)(); };
XmlJsonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: XmlJsonModule });
XmlJsonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__["SbTextareaModule"],
            src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_5__["SbHeadingModule"],
            src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_6__["SbRelatedToolsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](XmlJsonModule, { declarations: [_xml_json_component__WEBPACK_IMPORTED_MODULE_1__["XmlJsonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__["SbTextareaModule"],
        src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_5__["SbHeadingModule"],
        src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_6__["SbRelatedToolsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-xml-json-xml-json-module.js.map