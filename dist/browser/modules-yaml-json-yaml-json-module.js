(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-yaml-json-yaml-json-module"],{

/***/ "1wPH":
/*!**********************************************************!*\
  !*** ./src/app/modules/yaml-json/yaml-json.component.ts ***!
  \**********************************************************/
/*! exports provided: YamlJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YamlJsonComponent", function() { return YamlJsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sb-heading/sb-heading.component */ "tL0y");
/* harmony import */ var _shared_sb_textarea_sb_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sb-textarea/sb-textarea.component */ "MJuv");
/* harmony import */ var _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sb-related-tools/sb-related-tools.component */ "ZE/+");





const YAML = __webpack_require__(/*! yaml-js */ "FRKV");
class YamlJsonComponent {
    constructor(seo) {
        this.seo = seo;
        this.title = 'Online YAML or YML to JSON Convertor';
        this.subtitle = 'We provide free online YAML or YML to JSON Convertor which will help many developers in their daily work.';
        this.childInputText = '';
        this.Data = '';
    }
    ngOnInit() {
        this.seo.setSEO(this.title, this.subtitle);
    }
    convert() {
        try {
            let obj = YAML.load(this.childInputText);
            this.Data = JSON.stringify(obj);
            this.inputData = JSON.stringify(JSON.parse(this.Data), null, 4);
            return this.inputData;
        }
        catch (error) {
            return this.inputData = "Invalid YAML Input!!!";
        }
    }
}
YamlJsonComponent.ɵfac = function YamlJsonComponent_Factory(t) { return new (t || YamlJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
YamlJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YamlJsonComponent, selectors: [["app-yaml-json"]], decls: 64, vars: 5, consts: [[3, "title", "subtitle"], [1, "tool-container"], [1, "text-area", 3, "type", "event"], [1, "button-align"], [1, "btn", 3, "click"], [1, "text-area", 3, "type", "parentData"], [1, "grid-container", "text-container"]], template: function YamlJsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sb-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sb-textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function YamlJsonComponent_Template_app_sb_textarea_event_2_listener($event) { return ctx.childInputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YamlJsonComponent_Template_button_click_4_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "YAML TO JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sb-textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "YAML to JSON Converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This is an online tool that converts your YAML format data to JSON data format and vice versa. It converts YAML tree structure into an JSON objects or arrays structure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " How to use this YAML TO JSON tool? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The tool we designed is easy to use. Kindly follow the below steps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Write or paste the YAML code into the input box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Press the \u201CYAML to JSON button\u201D to convert the data into JSON. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " If you want to convert JSON to YAML, click on the \u201CJSON to YAML\u201D button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " You can download or copy your result by clicking on the download or copy button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " What is JSON? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute\u2013value pairs and arrays. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " It is a common data format with diverse uses in electronic data interchange, including that of web applications with servers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " JSON format syntax has been derived from Javascript, but it is a language independent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " JSON structure comprise of item or exhibit of articles , Objects are key-esteem sets encased in upset commas. Clusters are likewise informational collections containing key-esteem sets encased in square sections. The entire code is encased in wavy sections. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " JSON structure is as simple Javascript object structure, So it's very easy to understand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " What is YAML? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " YAML is a comprehensible information serialization language. It is regularly utilized for design records and in applications where information is being put away or communicated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "The YAML structure is very easy to use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " The whole YAML is structured to obtain a hierarchal or tree structure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Why do you need YAML to JSON tool?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "To efficiently convert YAML format data to JSON:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " These days programs are not composed by single individual on a solitary arrangement so we really want YAML to JSON or the other way around assists you with changing your document over to another arrangement effectively. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " In future, you may come up with a file with needs to be used in a programs that supports another formats. So our, converters will come into play. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " if program does not support some formats then again we have to rewrite. So just use our tools for conversation, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "To get dual results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Our tools will help in converting the data from YAML to JSON or JSON to YAML and save the human efforts with just one click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-sb-related-tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "output")("parentData", ctx.inputData);
    } }, directives: [_shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__["SbHeadingComponent"], _shared_sb_textarea_sb_textarea_component__WEBPACK_IMPORTED_MODULE_3__["SbTextareaComponent"], _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_4__["SbRelatedToolsComponent"]], styles: [".tool-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 75% 25%;\n  grid-gap: 10px;\n}\n\n@media (max-width: 992px) {\n  .tool-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3lhbWwtanNvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQURGOztBQ0FFO0VES0E7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFERjs7RUFHQTtJQUNFLDJCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJ5YW1sLWpzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvcmVzcG9uc2l2ZSc7XG5cbi50b29sLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbkBpbmNsdWRlIHNtYWxsRGVza3RvcEFuZExlc3Mge1xuICAudG9vbC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn1cbiIsIiRtb2JpbGUtd2lkdGg6IDQ2MHB4O1xuJHRhYmxldC13aWR0aDogNzY4cHg7XG4kZGVza3RvcC13aWR0aDogOTkycHg7XG4kbWlkZGxlLWRlc2t0b3Atd2lkdGg6IDEzNjZweDtcbiRiaWctZGVza3RvcC13aWR0aDogMTkyMHB4O1xuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGggKyAxfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtaWRkbGVEZXNrdG9wQW5kTGVzcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtaWRkbGUtZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGxEZXNrdG9wQW5kTGVzcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXRBbmRMZXNzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWlkZGxlRGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRoICsgMX0pIGFuZCAobWF4LXdpZHRoOiAjeyRtaWRkbGUtZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGxEZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aCArIDF9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1vYmlsZS13aWR0aCArIDF9KSBhbmQgKG1heC13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "e1c2":
/*!*******************************************************!*\
  !*** ./src/app/modules/yaml-json/yaml-json.module.ts ***!
  \*******************************************************/
/*! exports provided: YamlJsonModule, YamlJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YamlJsonModule", function() { return YamlJsonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _yaml_json_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yaml-json.component */ "1wPH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YamlJsonComponent", function() { return _yaml_json_component__WEBPACK_IMPORTED_MODULE_1__["YamlJsonComponent"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/sb-heading/sb-heading.module */ "jd7e");
/* harmony import */ var src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/sb-textarea/sb-textarea.module */ "TCRW");
/* harmony import */ var src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/sb-related-tools/sb-related-tools.module */ "998r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _yaml_json_component__WEBPACK_IMPORTED_MODULE_1__["YamlJsonComponent"],
    },
];
class YamlJsonModule {
}
YamlJsonModule.ɵfac = function YamlJsonModule_Factory(t) { return new (t || YamlJsonModule)(); };
YamlJsonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: YamlJsonModule });
YamlJsonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"], src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__["SbTextareaModule"],
            src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_5__["SbRelatedToolsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](YamlJsonModule, { declarations: [_yaml_json_component__WEBPACK_IMPORTED_MODULE_1__["YamlJsonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"], src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__["SbTextareaModule"],
        src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_5__["SbRelatedToolsModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=modules-yaml-json-yaml-json-module.js.map