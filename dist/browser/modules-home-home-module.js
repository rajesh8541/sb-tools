(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sb-heading/sb-heading.component */ "tL0y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", module_r1.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", module_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r1.title);
} }
class HomeComponent {
    constructor(seo) {
        this.seo = seo;
        this.title = 'Online Tools for developers';
        this.subtitle = `Every developer, especially in the
    digital age, outsources new technologies, and there is a need to migrate
    between tech stacks on a regular basis. Online Dev Tools is one such hub
    that satisfies all of the requirements for Web Development. The ability
    to outlive the developer's goal is to create visually appealing,
    user-friendly websites. It's about knowing how to use the right
    development tools to help you with your work. The importance of
    implementation is equal to that of vision. That is why each of us has
    access to so many unique development tools to reinvent and renew our
    work.`;
        this.moduleList = [
            {
                title: 'Rar Extractor',
                subtitle: 'Upload RAR file and get extracted folder.',
                slug: '/online-rar-extractor/',
            },
            {
                title: 'PDF Pasword Remover',
                subtitle: 'Upload password protected pdf and get a pdf without password.',
                slug: '/pdf-password-remover/',
            },
            {
                title: 'Json to XML Convertor',
                subtitle: 'Convert your json file to xml.',
                slug: '/json-to-xml-convertor/',
            },
            {
                title: 'XML to Json Convertor',
                subtitle: 'Convert your XML file to json.',
                slug: '/xml-to-json-convertor/',
            },
            {
                title: 'Json to YAML Convertor',
                subtitle: 'Convert your json file to yaml.',
                slug: '/json-to-yaml-convertor/',
            },
            {
                title: 'YAML to Json Convertor',
                subtitle: 'Convert your yaml file to json.',
                slug: '/yaml-to-json-convertor/',
            },
            {
                title: 'Json Validator and Formatter',
                subtitle: 'Validate or Format your JSON file.',
                slug: '/json-formatter/',
            },
            {
                title: 'XML Validator or Formatter',
                subtitle: 'Validate or Format your XML file.',
                slug: '/xml-formatter/',
            },
            {
                title: 'YAML Validator or Formatter',
                subtitle: 'Validate or Format your YAML file.',
                slug: '/yaml-formatter/',
            },
        ];
    }
    ngOnInit() {
        this.seo.setSEO(this.title, 'We provide all types of easy to use tools for developers which will be helpful for them in their day to day working.');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 3, consts: [[3, "title", "subtitle"], [1, "card-container"], [1, "tools"], ["class", "cards", 4, "ngFor", "ngForOf"], [1, "cards"], [1, "item-card", 3, "routerLink", "title"], [1, "module-title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sb-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_li_3_Template, 4, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moduleList);
    } }, directives: [_shared_sb_heading_sb_heading_component__WEBPACK_IMPORTED_MODULE_2__["SbHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".card-container[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.tools[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-decoration: none;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  word-wrap: break-word;\n  background-color: white;\n  background-clip: border-box;\n  border: 1px solid white;\n  margin: 10px;\n  width: 17%;\n  word-wrap: break-word;\n  box-shadow: 0 2px 10px 0 #edededed;\n}\n\n.item-card[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n}\n\n.module-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  color: #138496;\n  text-transform: uppercase;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na.item-card[_ngcontent-%COMP%]:hover {\n  transition: all 0.15s ease-in-out, z-index 0s;\n  transform: translateY(-5px);\n  box-shadow: 0 11px 55px 0 rgba(0, 0, 0, 0.13);\n}\n\n@media screen and (max-width: 992px) and (min-width: 300px) {\n  .tools[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .cards[_ngcontent-%COMP%] {\n    margin: 10px;\n    width: 100%;\n  }\n\n  .item-card[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFHRTtFQUVFLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSw2Q0FBQTtBQUFKOztBQUlBO0VBQ0U7SUFDRSxpQkFBQTtFQURGOztFQUlBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQURGOztFQUlBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFERjs7RUFJQTtJQUNFLGtCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4udG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTclO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCAjZWRlZGVkZWQ7XG59XG5cbi5pdGVtLWNhcmQge1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG5cbi5tb2R1bGUtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEzODQ5NjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYS5pdGVtLWNhcmQge1xuICAmOmhvdmVyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dCwgei1pbmRleCAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQsIHotaW5kZXggMHM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTFweCA1NXB4IDAgcmdiKDAgMCAwIC8gMTMlKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkgYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XG4gIC50b29scyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5jYXJkcyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuaXRlbS1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"] });


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

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "0Pcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/sb-heading/sb-heading.module */ "jd7e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_sb_heading_sb_heading_module__WEBPACK_IMPORTED_MODULE_3__["SbHeadingModule"]] }); })();


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
//# sourceMappingURL=modules-home-home-module.js.map