(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-json-yaml-json-yaml-module"],{

/***/ "2X4y":
/*!****************************************!*\
  !*** ./node_modules/remedial/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jslint onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true */
(function () {
    "use strict";

    var global = Function('return this')()
      , classes = "Boolean Number String Function Array Date RegExp Object".split(" ")
      , i
      , name
      , class2type = {}
      ;

    for (i in classes) {
      if (classes.hasOwnProperty(i)) {
        name = classes[i];
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    }

    function typeOf(obj) {
      return (null === obj || undefined === obj) ? String(obj) : class2type[Object.prototype.toString.call(obj)] || "object";
    }

    function isEmpty(o) {
        var i, v;
        if (typeOf(o) === 'object') {
            for (i in o) { // fails jslint
                v = o[i];
                if (v !== undefined && typeOf(v) !== 'function') {
                    return false;
                }
            }
        }
        return true;
    }

    if (!String.prototype.entityify) {
        String.prototype.entityify = function () {
            return this.replace(/&/g, "&amp;").replace(/</g,
                "&lt;").replace(/>/g, "&gt;");
        };
    }

    if (!String.prototype.quote) {
        String.prototype.quote = function () {
            var c, i, l = this.length, o = '"';
            for (i = 0; i < l; i += 1) {
                c = this.charAt(i);
                if (c >= ' ') {
                    if (c === '\\' || c === '"') {
                        o += '\\';
                    }
                    o += c;
                } else {
                    switch (c) {
                    case '\b':
                        o += '\\b';
                        break;
                    case '\f':
                        o += '\\f';
                        break;
                    case '\n':
                        o += '\\n';
                        break;
                    case '\r':
                        o += '\\r';
                        break;
                    case '\t':
                        o += '\\t';
                        break;
                    default:
                        c = c.charCodeAt();
                        o += '\\u00' + Math.floor(c / 16).toString(16) +
                            (c % 16).toString(16);
                    }
                }
            }
            return o + '"';
        };
    } 

    if (!String.prototype.supplant) {
        String.prototype.supplant = function (o) {
            return this.replace(/{([^{}]*)}/g,
                function (a, b) {
                    var r = o[b];
                    return typeof r === 'string' || typeof r === 'number' ? r : a;
                }
            );
        };
    }

    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
        };
    }

    // CommonJS / npm / Ender.JS
    module.exports = {
        typeOf: typeOf,
        isEmpty: isEmpty
    };
    global.typeOf = global.typeOf || typeOf;
    global.isEmpty = global.isEmpty || isEmpty;
}());


/***/ }),

/***/ "IIl/":
/*!**********************************************************!*\
  !*** ./node_modules/remove-trailing-spaces/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * removeTrailingSpaces
 * Remove the trailing spaces from a string.
 *
 * @name removeTrailingSpaces
 * @function
 * @param {String} input The input string.
 * @returns {String} The output string.
 */

module.exports = function removeTrailingSpaces(input) {
  // TODO If possible, use a regex
  return input.split("\n").map(function (x) {
    return x.trimRight();
  }).join("\n");
};

/***/ }),

/***/ "L0jO":
/*!**********************************************************!*\
  !*** ./src/app/modules/json-yaml/json-yaml.component.ts ***!
  \**********************************************************/
/*! exports provided: JsonYamlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonYamlComponent", function() { return JsonYamlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sb-heading/sb-heading.component */ "tL0y");
/* harmony import */ var _shared_sb_textarea_sb_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sb-textarea/sb-textarea.component */ "MJuv");
/* harmony import */ var _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sb-related-tools/sb-related-tools.component */ "ZE/+");





const YAML = __webpack_require__(/*! json-to-pretty-yaml */ "ViL0");
class JsonYamlComponent {
    constructor(seo) {
        this.seo = seo;
        this.title = 'Online Json to YAML or YML Convertor';
        this.subtitle = 'We provide free online Json to YAML or YML Convertor which will help many developers in their daily work.';
        this.childInputText = '';
        this.inputData = '';
    }
    ngOnInit() {
        this.seo.setSEO(this.title, this.subtitle);
    }
    convert() {
        try {
            let obj = JSON.parse(this.childInputText);
            this.inputData = YAML.stringify(obj);
            return this.inputData;
        }
        catch (_a) {
            return this.inputData = "Invalid JSON Input";
        }
    }
}
JsonYamlComponent.ɵfac = function JsonYamlComponent_Factory(t) { return new (t || JsonYamlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
JsonYamlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonYamlComponent, selectors: [["app-json-yaml"]], decls: 66, vars: 5, consts: [[3, "title", "subtitle"], [1, "tool-container"], [1, "text-area", 3, "type", "event"], [1, "button-align"], [1, "btn", 3, "click"], [1, "text-area", 3, "type", "parentData"], [1, "grid-container", "text-container"]], template: function JsonYamlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sb-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sb-textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function JsonYamlComponent_Template_app_sb_textarea_event_2_listener($event) { return ctx.childInputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonYamlComponent_Template_button_click_4_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "JSON TO YAML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sb-textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "JSON to YAML Converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This is an online tool that converts your JSON format data to YAML data format and vice versa. It converts JSON objects into an YAML tree structure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How to use this JSON TO YAML tool?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The tool we designed is easy to use. Kindly follow the below steps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Write or paste the JSON code into the input box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Press the \u201CJSON to YAML button\u201D to convert the data into YAML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " If you want to convert YAML to JSON, click on the \u201CYAML to JSON\u201D button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " You can download or copy your result by clicking on the download or copy button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "What is JSON?");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " JSON structure consist of object or array of objects , Objects are key-value pairs enclosed in inverted commas. Arrays are also data sets containing key-value pairs enclosed in square brackets. The whole code is enclosed in curly brackets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " JSON structure is as simple Javascript object structure, So it's very easy to understand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "What is YAML?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " The YAML structure is very easy to use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " The attributes that are objects (key-value pairs). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "The whole YAML is structured to obtain a hierarchal or tree structure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Why do you need JSON to YAML tool?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "To efficiently convert JSON format data to YAML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Nowadays programs are not written by single person on a single format so we need JSON to YAML or vice versa helps you to convert your file to another format efficiently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " In future, you may come up with a file with needs to be used in a programs that supports another formats. So our, converters will come into play. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " if program does not support some formats then again we have to rewrite. So just use our tools for conversation, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "To get dual results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Our tools will help in converting the data from JSON to YAML or YAML to JSON and save the human efforts with just one click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "app-sb-related-tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "output")("parentData", ctx.inputData);
    } }, directives: [_shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__["SbHeadingComponent"], _shared_sb_textarea_sb_textarea_component__WEBPACK_IMPORTED_MODULE_3__["SbTextareaComponent"], _shared_sb_related_tools_sb_related_tools_component__WEBPACK_IMPORTED_MODULE_4__["SbRelatedToolsComponent"]], styles: [".tool-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.button-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 75% 25%;\n  grid-gap: 10px;\n}\n\n@media (max-width: 992px) {\n  .tool-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2pzb24teWFtbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQURGOztBQ0FFO0VES0E7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFERjs7RUFHQTtJQUNFLDJCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJqc29uLXlhbWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvcmVzcG9uc2l2ZSc7XG5cbi50b29sLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbkBpbmNsdWRlIHNtYWxsRGVza3RvcEFuZExlc3Mge1xuICAudG9vbC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn1cbiIsIiRtb2JpbGUtd2lkdGg6IDQ2MHB4O1xuJHRhYmxldC13aWR0aDogNzY4cHg7XG4kZGVza3RvcC13aWR0aDogOTkycHg7XG4kbWlkZGxlLWRlc2t0b3Atd2lkdGg6IDEzNjZweDtcbiRiaWctZGVza3RvcC13aWR0aDogMTkyMHB4O1xuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGggKyAxfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtaWRkbGVEZXNrdG9wQW5kTGVzcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtaWRkbGUtZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGxEZXNrdG9wQW5kTGVzcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXRBbmRMZXNzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWlkZGxlRGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRoICsgMX0pIGFuZCAobWF4LXdpZHRoOiAjeyRtaWRkbGUtZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc21hbGxEZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aCArIDF9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1vYmlsZS13aWR0aCArIDF9KSBhbmQgKG1heC13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ViL0":
/*!***************************************************!*\
  !*** ./node_modules/json-to-pretty-yaml/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function() {
    "use strict";

    var typeOf = __webpack_require__(/*! remedial */ "2X4y").typeOf;
    var trimWhitespace = __webpack_require__(/*! remove-trailing-spaces */ "IIl/");

    function stringify(data) {
        var handlers, indentLevel = '';

        handlers = {
            "undefined": function() {
                // objects will not have `undefined` converted to `null`
                // as this may have unintended consequences
                // For arrays, however, this behavior seems appropriate
                return 'null';
            },
            "null": function() {
                return 'null';
            },
            "number": function(x) {
                return x;
            },
            "boolean": function(x) {
                return x ? 'true' : 'false';
            },
            "string": function(x) {
                // to avoid the string "true" being confused with the
                // the literal `true`, we always wrap strings in quotes
                return JSON.stringify(x);
            },
            "array": function(x) {
                var output = '';

                if (0 === x.length) {
                    output += '[]';
                    return output;
                }

                indentLevel = indentLevel.replace(/$/, '  ');
                x.forEach(function(y, i) {
                    // TODO how should `undefined` be handled?
                    var handler = handlers[typeOf(y)];

                    if (!handler) {
                        throw new Error('what the crap: ' + typeOf(y));
                    }

                    output += '\n' + indentLevel + '- ' + handler(y, true);

                });
                indentLevel = indentLevel.replace(/  /, '');

                return output;
            },
            "object": function(x, inArray, rootNode) {
                var output = '';

                if (0 === Object.keys(x).length) {
                    output += '{}';
                    return output;
                }

                if (!rootNode) {
                    indentLevel = indentLevel.replace(/$/, '  ');
                }

                Object.keys(x).forEach(function(k, i) {
                    var val = x[k],
                        handler = handlers[typeOf(val)];

                    if ('undefined' === typeof val) {
                        // the user should do
                        // delete obj.key
                        // and not
                        // obj.key = undefined
                        // but we'll error on the side of caution
                        return;
                    }

                    if (!handler) {
                        throw new Error('what the crap: ' + typeOf(val));
                    }

                    if (!(inArray && i === 0)) {
                        output += '\n' + indentLevel;
                    }

                    output += k + ': ' + handler(val);
                });
                indentLevel = indentLevel.replace(/  /, '');

                return output;
            },
            "function": function() {
                // TODO this should throw or otherwise be ignored
                return '[object Function]';
            }
        };

        return trimWhitespace(handlers[typeOf(data)](data, true, true) + '\n');
    }

    module.exports.stringify = stringify;
}());


/***/ }),

/***/ "wio5":
/*!*******************************************************!*\
  !*** ./src/app/modules/json-yaml/json-yaml.module.ts ***!
  \*******************************************************/
/*! exports provided: JsonYamlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonYamlModule", function() { return JsonYamlModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _json_yaml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-yaml.component */ "L0jO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/sb-heading/sb-heading.module */ "jd7e");
/* harmony import */ var src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/sb-textarea/sb-textarea.module */ "TCRW");
/* harmony import */ var src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/sb-related-tools/sb-related-tools.module */ "998r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _json_yaml_component__WEBPACK_IMPORTED_MODULE_1__["JsonYamlComponent"],
    },
];
class JsonYamlModule {
}
JsonYamlModule.ɵfac = function JsonYamlModule_Factory(t) { return new (t || JsonYamlModule)(); };
JsonYamlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: JsonYamlModule });
JsonYamlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"], src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__["SbTextareaModule"],
            src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_5__["SbRelatedToolsModule"],]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](JsonYamlModule, { declarations: [_json_yaml_component__WEBPACK_IMPORTED_MODULE_1__["JsonYamlComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"], src_app_shared_sb_textarea_sb_textarea_module__WEBPACK_IMPORTED_MODULE_4__["SbTextareaModule"],
        src_app_shared_sb_related_tools_sb_related_tools_module__WEBPACK_IMPORTED_MODULE_5__["SbRelatedToolsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-json-yaml-json-yaml-module.js.map