(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supreme-admin-supreme-admin-module"],{

/***/ "./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditFreeemaildomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFreeemaildomainComponent", function() { return EditFreeemaildomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../freeemaildomain.service */ "./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts");
/* harmony import */ var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");







function EditFreeemaildomainComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2214.errLabel, " ");
} }
function EditFreeemaildomainComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EditFreeemaildomainComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { display: a0 }; };
class EditFreeemaildomainComponent {
    constructor(fEdomainService, sharedService) {
        this.fEdomainService = fEdomainService;
        this.sharedService = sharedService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayDialog = true;
        this.freeEmailDisplayDomain = "none";
    }
    ngOnInit() {
        this.showDialogToAdd();
    }
    showDialogToAdd() {
        this.freeEmailDisplayDomain = "block";
        this.hiddenScroll();
    }
    hiddenScroll() {
        try {
            let bodyElement = document.getElementById("modalbody");
            if (bodyElement) {
                bodyElement.classList.add("modal-open");
            }
        }
        catch (ex) {
            this.clientErrorMsg(ex, "hiddenScroll");
        }
    }
    displayScroll() {
        try {
            let bodyElement = document.getElementById("modalbody");
            if (bodyElement) {
                bodyElement.classList.remove("modal-open");
            }
        }
        catch (ex) {
            this.clientErrorMsg(ex, "displayScroll");
        }
    }
    save() {
        this.fEdomainService.isFEDomainExists(this.fEDomain.domainName).subscribe((res) => {
            if (res.statusCode == 200) {
                if (this.fEDomainType == "Add") {
                    this.addFEDomain(this.fEDomain);
                }
                else if (this.fEDomainType == "Edit") {
                    this.updateFEDomain(this.fEDomain);
                }
            }
            else {
                this.errLabel = res.message;
                this.fEDomain = {
                    domainName: "",
                    freeEmailProviderDomainsDetailsId: null,
                    status: null,
                };
            }
        }, (error) => {
            this.errLabel = error;
        });
    }
    addFEDomain(fEDomain) {
        this.fEdomainService.addFEDomain(fEDomain).subscribe((res) => {
            if (res.statusCode == 200) {
                this.freeEmailDisplayDomain = "none";
                this.sharedService.add({
                    severity: "success",
                    summary: "Success",
                    detail: res.message,
                });
            }
            this.displayScroll();
            this.onClose.emit({ type: "add" });
        });
    }
    updateFEDomain(fEDomain) {
        this.fEdomainService.updateFEDomain(fEDomain).subscribe((res) => {
            if ((res.statusCode = 200)) {
                this.freeEmailDisplayDomain = "none";
                this.sharedService.add({
                    severity: "success",
                    summary: "Success",
                    detail: res.message,
                });
            }
            this.displayScroll();
            this.onClose.emit({ type: "add" });
        });
    }
    modalClose() {
        this.freeEmailDisplayDomain = "none";
        this.displayScroll();
        this.onClose.emit({ type: "Add" });
    }
}
EditFreeemaildomainComponent.ɵfac = function EditFreeemaildomainComponent_Factory(t) { return new (t || EditFreeemaildomainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_freeemaildomain_service__WEBPACK_IMPORTED_MODULE_1__["FreeEmailDomainServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
EditFreeemaildomainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditFreeemaildomainComponent, selectors: [["app-edit-freeemaildomain"]], inputs: { fEDomainType: "fEDomainType", fEDomain: "fEDomain" }, outputs: { onClose: "onClose" }, decls: 24, vars: 9, consts: [["data-backdrop", "static", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "value", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "submit-btn", 3, "disabled", "click"], [4, "ngIf"], [1, "col-sm-6", 2, "color", "red"]], template: function EditFreeemaildomainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFreeemaildomainComponent_Template_button_click_6_listener($event) { return ctx.modalClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditFreeemaildomainComponent_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFreeemaildomainComponent_Template_input_ngModelChange_19_listener($event) { return ctx.fEDomain.domainName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFreeemaildomainComponent_Template_button_click_21_listener($event) { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditFreeemaildomainComponent_ng_container_22_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditFreeemaildomainComponent_ng_container_23_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.freeEmailDisplayDomain));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.fEDomainType, " Free Email Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fEDomain.domainName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.fEDomain == null ? null : ctx.fEDomain.domainName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fEDomainType == "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fEDomainType == "Add");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHJlbWUtYWRtaW4vZnJlZWVtYWlsZG9tYWluL2VkaXQtZnJlZWVtYWlsZG9tYWluL2VkaXQtZnJlZWVtYWlsZG9tYWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditFreeemaildomainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-edit-freeemaildomain",
                templateUrl: "./edit-freeemaildomain.component.html",
                styleUrls: ["./edit-freeemaildomain.component.css"],
            }]
    }], function () { return [{ type: _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_1__["FreeEmailDomainServices"] }, { type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, { fEDomainType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fEDomain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts ***!
  \****************************************************************************/
/*! exports provided: FreeemaildomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeemaildomainComponent", function() { return FreeemaildomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/api/confirmationservice */ "./src/app/components/api/confirmationservice.ts");
/* harmony import */ var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freeemaildomain.service */ "./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_api_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/api/shared */ "./src/app/components/api/shared.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-freeemaildomain/edit-freeemaildomain.component */ "./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts");
/* harmony import */ var _shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/status.pipe */ "./src/app/shared/pipes/status.pipe.ts");












function FreeemaildomainComponent_div_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FreeemaildomainComponent_div_17_ng_template_3_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2172); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r2166.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FreeemaildomainComponent_div_17_ng_template_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r2175.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r2175.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r2175.field);
} }
function FreeemaildomainComponent_div_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r2173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2173);
} }
function FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r2179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r2176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r2176[col_r2179.field]), " ");
} }
function FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r2179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r2176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2176[col_r2179.field], " ");
} }
function FreeemaildomainComponent_div_17_ng_template_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2179.field == "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2179.field != "status");
} }
function FreeemaildomainComponent_div_17_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r2187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_17_ng_template_5_td_1_Template, 3, 2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_17_ng_template_5_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2187); const rowData_r2176 = ctx.$implicit; const ctx_r2186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2186.onRowSelect(rowData_r2176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_17_ng_template_5_Template_a_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2187); const rowData_r2176 = ctx.$implicit; const ctx_r2188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2188.onDelete(rowData_r2176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r2176 = ctx.$implicit;
    const columns_r2177 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r2176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2177);
} }
function FreeemaildomainComponent_div_17_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Free Email found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [10, 25, 50]; };
const _c1 = function () { return ["domainName", "status"]; };
function FreeemaildomainComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FreeemaildomainComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FreeemaildomainComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FreeemaildomainComponent_div_17_ng_template_5_Template, 14, 2, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FreeemaildomainComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r2163.cols)("value", ctx_r2163.lstDomain)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
} }
function FreeemaildomainComponent_div_19_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FreeemaildomainComponent_div_19_ng_template_3_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2195); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r2189.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FreeemaildomainComponent_div_19_ng_template_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r2198.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r2198.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r2198.field);
} }
function FreeemaildomainComponent_div_19_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r2196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2196);
} }
function FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r2202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r2199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r2199[col_r2202.field]), " ");
} }
function FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r2202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r2199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2199[col_r2202.field], " ");
} }
function FreeemaildomainComponent_div_19_ng_template_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2202.field == "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2202.field != "status");
} }
function FreeemaildomainComponent_div_19_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r2210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_19_ng_template_5_td_1_Template, 3, 2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_19_ng_template_5_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2210); const rowData_r2199 = ctx.$implicit; const ctx_r2209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2209.onRowSelect(rowData_r2199); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_19_ng_template_5_Template_a_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2210); const rowData_r2199 = ctx.$implicit; const ctx_r2211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2211.delete(rowData_r2199); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r2199 = ctx.$implicit;
    const columns_r2200 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r2199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2200);
} }
function FreeemaildomainComponent_div_19_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Free Email Domain found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FreeemaildomainComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FreeemaildomainComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FreeemaildomainComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FreeemaildomainComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FreeemaildomainComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r2164.cols)("value", ctx_r2164.lstDomain)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
} }
function FreeemaildomainComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r2213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-edit-freeemaildomain", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function FreeemaildomainComponent_ng_container_37_Template_app_edit_freeemaildomain_onClose_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2213); const ctx_r2212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2212.onFEDomainCloseClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fEDomainType", ctx_r2165.fEDomainType)("fEDomain", ctx_r2165.fEDomain);
} }
class FreeemaildomainComponent {
    constructor(confirmationService, sharedService, FreeEmailDomainServices) {
        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.FreeEmailDomainServices = FreeEmailDomainServices;
        this.fEDDisplay = "none";
        this.loading = false;
        this.status = 1;
    }
    ngOnInit() {
        this.cols = [
            // { field: 'departmentDetailsId', header: 'ID' },
            // { field: "freeEmailProviderDomainsDetailsId", header: "ID" },
            { field: "domainName", header: "Domain Name" },
            { field: "status", header: "Status" },
        ];
        this.getDomain(this.status);
    }
    handleChange(event) {
        if (event.index == 0) {
            this.status = 1;
            this.getDomain(1);
        }
        else if (event.index == 1) {
            this.status = 0;
            this.getDomain(0);
        }
    }
    getDomain(status) {
        this.loading = true;
        this.lstDomain = [];
        this.FreeEmailDomainServices.getAllFreeEmailDomain(status).subscribe((res) => {
            this.loading = false;
            this.lstDomain = [];
            if (res.message == "freeEmailProviderDomains")
                this.lstDomain = res.responsePayload;
        }, (error) => {
            this.loading = false;
        });
    }
    showDialogToAdd() {
        this.fEDomainType = "Add";
        this.displayDialog = true;
        this.hiddenScroll();
        this.fEDomain = {
            domainName: null,
            freeEmailProviderDomainsDetailsId: null,
            status: null,
        };
    }
    onFEDomainCloseClick(event) {
        if (event.type == "add") {
            this.getDomain(this.status);
        }
        this.fEDomainType = "";
        this.displayDialog = undefined;
    }
    hiddenScroll() {
        try {
            let bodyElement = document.getElementById("modalbody");
            if (bodyElement) {
                bodyElement.classList.add("modal-open");
            }
        }
        catch (ex) {
            this.clientErrorMsg(ex, "hiddenScroll");
        }
    }
    displayScroll() {
        try {
            let bodyElement = document.getElementById("modalbody");
            if (bodyElement) {
                bodyElement.classList.remove("modal-open");
            }
        }
        catch (ex) {
            this.clientErrorMsg(ex, "displayScroll");
        }
    }
    save() {
        this.displayScroll();
    }
    confirm(rowData) {
        this.confirmationService.confirm({
            message: "Are you sure that you want to Inactivate this data?",
            accept: () => {
                this.delete(rowData);
                //Actual logic to perform a confirmation
            },
        });
    }
    delete(rowData) {
        if (this.status == 1) {
            this.FreeEmailDomainServices.deactivateFEDomain(rowData.freeEmailProviderDomainsDetailsId).subscribe((res) => {
                if (res.statusCode == 200) {
                    this.sharedService.add({
                        severity: "success",
                        summary: "Success",
                        detail: res.message,
                    });
                    this.getDomain(this.status);
                }
            });
        }
        else {
            this.FreeEmailDomainServices.activateFEDomain(rowData.freeEmailProviderDomainsDetailsId).subscribe((res) => {
                if (res.statusCode == 200) {
                    this.sharedService.add({
                        severity: "success",
                        summary: "Success",
                        detail: res.message,
                    });
                    this.getDomain(this.status);
                }
            });
        }
    }
    onDelete(rowData) {
        this.fEDomain = rowData;
    }
    onRowSelect(data) {
        this.fEDomain = data;
        this.fEDomainType = "Edit";
        this.displayDialog = true;
        this.hiddenScroll();
    }
    modalClose() {
        this.fEDDisplay = "none";
        this.displayScroll();
    }
    closeAddmodal() {
        this.fEDDisplay = "none";
        this.displayScroll();
    }
}
FreeemaildomainComponent.ɵfac = function FreeemaildomainComponent_Factory(t) { return new (t || FreeemaildomainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_freeemaildomain_service__WEBPACK_IMPORTED_MODULE_3__["FreeEmailDomainServices"])); };
FreeemaildomainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FreeemaildomainComponent, selectors: [["app-freeemaildomain"]], decls: 38, vars: 3, consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Free Email Domain"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Free Email Doamin"], ["id", "delete_Domain", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_Domain", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [1, "fas", "fa-toggle-on"], [3, "fEDomainType", "fEDomain", "onClose"]], template: function FreeemaildomainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Free Email Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_Template_a_click_12_listener($event) { return ctx.showDialogToAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Free Email Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function FreeemaildomainComponent_Template_p_tabView_onChange_15_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FreeemaildomainComponent_div_17_Template, 7, 10, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FreeemaildomainComponent_div_19_Template, 7, 10, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inactive Free Email Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Are you sure want to Inactive the free Email Domain?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_Template_a_click_32_listener($event) { return ctx.delete(ctx.fEDomain); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Inactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FreeemaildomainComponent_ng_container_37_Template, 2, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayDialog);
    } }, directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"], _edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_9__["EditFreeemaildomainComponent"]], pipes: [_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__["DisplayStatus"]], styles: [".actions[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  color: #777;\n}\n.actions[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  color: #777;\n}\n[_nghost-%COMP%]     .ui-table-customers {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5em;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\n  background-color: #c8e6c9;\n  color: #256029;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\n  background-color: #ffcdd2;\n  color: #c63737;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\n  background-color: #feedaf;\n  color: #8a5340;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\n  background-color: #b3e5fc;\n  color: #23547b;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\n  background-color: #eccfff;\n  color: #694382;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\n  background-color: #ffd8b2;\n  color: #805b36;\n}\n[_nghost-%COMP%]     .ui-table-customers .flag {\n  vertical-align: middle;\n  width: 30px;\n  height: 20px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\n  display: inline-block;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\n  vertical-align: middle;\n  width: 24px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\n  margin-top: 0.125em;\n  vertical-align: middle;\n  margin-left: 0.5em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\n  float: left;\n  width: auto;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\n  float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\n  height: 8px;\n  background-color: #d8dadc;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\n  background-color: #00acad;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\n  display: block;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\n  width: 100%;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\n  float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\n  width: 200px;\n  height: 33px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\n  min-width: 25em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\n  font-weight: 400;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\n  border: 0 none;\n  padding: 12px;\n  text-align: left;\n  font-size: 19px;\n  color: #ffffff;\n  background: #ffffff;\n  border-bottom: 1px solid #ff9b44;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\n  border: 0 none;\n  padding: 1em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\n  border: 0 none;\n  text-align: left;\n  border-bottom: 2px solid #dee2e6;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\n  border-top: 1px solid #c8c8c8;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\n  text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\n  border: 0 none;\n  cursor: auto;\n  word-wrap: break-word;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\n  text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n  display: none;\n}\n\n@media screen and (max-width: 64em) {\n  [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\n    display: none !important;\n  }\n  [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  [_nghost-%COMP%]    \n    .ui-table.ui-table-customers\n    .ui-table-tbody\n    > tr\n    > td\n    .ui-column-title {\n    padding: 0.4em;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4em;\n    font-weight: bold;\n  }\n}\nh2.table-avatar[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcmVtZS1hZG1pbi9mcmVlZW1haWxkb21haW4vZnJlZWVtYWlsZG9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0U7c0NBQ29DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0VBQ0U7O0lBRUUsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0VBQ0E7Ozs7Ozs7SUFPRSxjQUFjO0lBQ2QsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdXByZW1lLWFkbWluL2ZyZWVlbWFpbGRvbWFpbi9mcmVlZW1haWxkb21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWN0aW9ucyAuYWN0aW9uLWljb24ge1xuICBjb2xvcjogIzc3Nztcbn1cbi5hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWN0aW9ucyAuYWN0aW9uLWljb24ge1xuICBjb2xvcjogIzc3Nztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXF1YWxpZmllZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XG4gIGNvbG9yOiAjMjU2MDI5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy11bnF1YWxpZmllZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XG4gIGNvbG9yOiAjYzYzNzM3O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1uZWdvdGlhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVkYWY7XG4gIGNvbG9yOiAjOGE1MzQwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1uZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xuICBjb2xvcjogIzIzNTQ3Yjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcmVuZXdhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2NmZmY7XG4gIGNvbG9yOiAjNjk0MzgyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1wcm9wb3NhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4YjI7XG4gIGNvbG9yOiAjODA1YjM2O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmZsYWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24gaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDI0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAwLjEyNWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3IgLnVpLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGRhZGM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNhZDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1jb2x1bW4tZmlsdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWRhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDI1ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtY2FwdGlvbiB7XG4gIGJvcmRlcjogMCBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmOWI0NDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3Ige1xuICBib3JkZXI6IDAgbm9uZTtcbiAgcGFkZGluZzogMWVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIGJvcmRlcjogMCBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgudWktZmlsdGVyLWNvbHVtbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGN1cnNvcjogYXV0bztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZHJvcGRvd24tbGFiZWw6bm90KC51aS1wbGFjZWhvbGRlcikge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAudWktY29sdW1uLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcbiAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBsZWZ0O1xuICAgIGJvcmRlcjogMCBub25lO1xuICB9XG4gIDpob3N0XG4gICAgOjpuZy1kZWVwXG4gICAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVyc1xuICAgIC51aS10YWJsZS10Ym9keVxuICAgID4gdHJcbiAgICA+IHRkXG4gICAgLnVpLWNvbHVtbi10aXRsZSB7XG4gICAgcGFkZGluZzogMC40ZW07XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLTAuNGVtIDFlbSAtMC40ZW0gLTAuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5oMi50YWJsZS1hdmF0YXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeemaildomainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-freeemaildomain",
                templateUrl: "./freeemaildomain.component.html",
                styleUrls: ["./freeemaildomain.component.css"],
            }]
    }], function () { return [{ type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] }, { type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_3__["FreeEmailDomainServices"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts ***!
  \**************************************************************************/
/*! exports provided: FreeEmailDomainServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeEmailDomainServices", function() { return FreeEmailDomainServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FreeEmailDomainServices {
    constructor(http) {
        this.http = http;
    }
    getAllFreeEmailDomain(status) {
        return this.http.get(`api/freeemailproviderdomains/all?status=${status}`);
    }
    addFEDomain(fEDomain) {
        return this.http.post(`api/freeemailproviderdomains/add?freeEmailProviderDomain=${fEDomain.domainName}`, {});
    }
    updateFEDomain(fEDomain) {
        return this.http.post("api/freeemailproviderdomains/update", fEDomain);
    }
    activateFEDomain(freeEmailProviderDomainsDetailsId) {
        return this.http.put(`api/freeemailproviderdomains/activate/${freeEmailProviderDomainsDetailsId}`, {});
    }
    deactivateFEDomain(freeEmailProviderDomainsDetailsId) {
        return this.http.put(`api/freeemailproviderdomains/deactivate/${freeEmailProviderDomainsDetailsId}`, {});
    }
    isFEDomainExists(freeEmailDomain) {
        return this.http.get(`api/freeemailproviderdomains/exists?workEmail=${freeEmailDomain}`);
    }
}
FreeEmailDomainServices.ɵfac = function FreeEmailDomainServices_Factory(t) { return new (t || FreeEmailDomainServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FreeEmailDomainServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FreeEmailDomainServices, factory: FreeEmailDomainServices.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeEmailDomainServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supreme-admin/organization/organization.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/supreme-admin/organization/organization.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/api/confirmationservice */ "./src/app/components/api/confirmationservice.ts");
/* harmony import */ var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization.service */ "./src/app/supreme-admin/organization/organization.service.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/inputtextarea/inputtextarea */ "./src/app/components/inputtextarea/inputtextarea.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_api_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/api/shared */ "./src/app/components/api/shared.ts");












const _c0 = ["closeBtn"];
function OrganizationComponent_div_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OrganizationComponent_div_13_ng_template_3_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2128); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r2122.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrganizationComponent_div_13_ng_template_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r2131.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r2131.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r2131.field);
} }
function OrganizationComponent_div_13_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_13_ng_template_4_th_1_Template, 3, 3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r2129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2129);
} }
function OrganizationComponent_div_13_ng_template_5_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r2135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r2132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2132[col_r2135.field], " ");
} }
function OrganizationComponent_div_13_ng_template_5_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r2135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r2132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2132[col_r2135.field], " ");
} }
function OrganizationComponent_div_13_ng_template_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_13_ng_template_5_td_1_ng_container_1_Template, 2, 1, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganizationComponent_div_13_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2135.field == "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2135.field != "status");
} }
function OrganizationComponent_div_13_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r2143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_13_ng_template_5_td_1_Template, 3, 2, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_13_ng_template_5_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2143); const rowData_r2132 = ctx.$implicit; const ctx_r2142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2142.onDelete(rowData_r2132); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_13_ng_template_5_Template_a_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2143); const rowData_r2132 = ctx.$implicit; const ctx_r2144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2144.onSendMessage(rowData_r2132); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r2132 = ctx.$implicit;
    const columns_r2133 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r2132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2133);
} }
function OrganizationComponent_div_13_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No departments found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return ["organizationName", "phoneNumber", "noOfEmployees"]; };
function OrganizationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganizationComponent_div_13_ng_template_3_Template, 3, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganizationComponent_div_13_ng_template_4_Template, 4, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrganizationComponent_div_13_ng_template_5_Template, 14, 2, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrganizationComponent_div_13_ng_template_6_Template, 3, 0, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r2119.cols)("value", ctx_r2119.lstOrganizations)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
} }
function OrganizationComponent_div_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OrganizationComponent_div_15_ng_template_3_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2151); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r2145.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrganizationComponent_div_15_ng_template_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r2154.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r2154.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r2154.field);
} }
function OrganizationComponent_div_15_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_15_ng_template_4_th_1_Template, 3, 3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r2152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2152);
} }
function OrganizationComponent_div_15_ng_template_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2158 = ctx.$implicit;
    const rowData_r2155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2155[col_r2158.field], " ");
} }
function OrganizationComponent_div_15_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r2161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_15_ng_template_5_td_1_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_15_ng_template_5_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2161); const rowData_r2155 = ctx.$implicit; const ctx_r2160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2160.delete(rowData_r2155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_15_ng_template_5_Template_a_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2161); const rowData_r2155 = ctx.$implicit; const ctx_r2162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2162.onSendMessage(rowData_r2155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r2155 = ctx.$implicit;
    const columns_r2156 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r2155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2156);
} }
function OrganizationComponent_div_15_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No organizations found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrganizationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganizationComponent_div_15_ng_template_3_Template, 3, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganizationComponent_div_15_ng_template_4_Template, 4, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrganizationComponent_div_15_ng_template_5_Template, 14, 2, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrganizationComponent_div_15_ng_template_6_Template, 3, 0, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r2120.cols)("value", ctx_r2120.lstOrganizations)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
} }
class OrganizationComponent {
    constructor(confirmationService, sharedService, organizationService) {
        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.organizationService = organizationService;
        this.editemployeeDisplay = "none";
        this.addemployeeDisplay = "none";
        this.loading = false;
        this.sendMessage = {};
    }
    ngOnInit() {
        this.cols = [
            // { field: 'departmentDetailsId', header: 'ID' },
            { field: "organizationName", header: "Name" },
            { field: "phoneNumber", header: "Phone Number" },
            { field: "noOfEmployees", header: "No of Employees" },
        ];
        this.getOrganizations();
        this.status = 1;
    }
    handleChange(event) {
        if (event.index == 0) {
            this.status = 1;
            this.getOrganizations(1);
        }
        else if (event.index == 1) {
            this.status = 0;
            this.getOrganizations(0);
        }
    }
    getOrganizations(status = 1) {
        this.loading = true;
        this.lstOrganizations = [];
        this.organizationService.getAllOrganizations(status).subscribe((res) => {
            this.loading = false;
            this.lstOrganizations = [];
            if (res.message == "Organizations")
                this.lstOrganizations = res.responsePayload;
        }, (error) => {
            this.loading = false;
        });
    }
    showDialogToAdd() {
        this.departmentType = "Add";
        //this.hiddenScroll();
    }
    hiddenScroll() {
        try {
            let bodyElement = document.getElementById("modalbody");
            if (bodyElement) {
                bodyElement.classList.add("modal-open");
            }
        }
        catch (ex) {
            this.clientErrorMsg(ex, "hiddenScroll");
        }
    }
    displayScroll() {
        try {
            let bodyElement = document.getElementById("modalbody");
            if (bodyElement) {
                bodyElement.classList.remove("modal-open");
            }
        }
        catch (ex) {
            this.clientErrorMsg(ex, "displayScroll");
        }
    }
    save() {
        this.displayScroll();
    }
    confirm(rowData) {
        this.confirmationService.confirm({
            message: "Are you sure that you want to Inactivate this data?",
            accept: () => {
                this.delete(rowData);
                //Actual logic to perform a confirmation
            },
        });
    }
    delete(rowData) {
        if (this.status == 1) {
            this.organizationService
                .deactivateOrganization(rowData.organizationDetailsId)
                .subscribe((res) => {
                if (res.message == "Organization deactivate successful") {
                    this.displayDialog = false;
                    this.getOrganizations(this.status);
                }
            });
        }
        else {
            this.organizationService
                .activateOrganization(rowData.organizationDetailsId)
                .subscribe((res) => {
                if (res.message == "Organization activate successful") {
                    this.displayDialog = false;
                    this.getOrganizations(this.status);
                }
            });
        }
    }
    sendMessageToOrganization(rowData) {
        if (!this.sendMessage.subject || this.sendMessage.subject.trim() == "") {
            return;
        }
        this.sendMessage.organizationDetailsId = rowData.organizationDetailsId;
        this.organizationService.sendMessage(this.sendMessage).subscribe((res) => {
            if (res.message == "Send Communication successful") {
                this.sharedService.add({
                    severity: "success",
                    summary: "Success",
                    detail: res.message,
                });
            }
            else {
                this.sharedService.add({
                    severity: "error",
                    summary: "Error",
                    detail: res.message,
                });
            }
        });
        this.closeBtn.nativeElement.click();
    }
    onDelete(rowData) {
        this.organization = rowData;
    }
    onSendMessage(rowData) {
        this.organization = rowData;
    }
    onRowSelect(data) {
        this.organization = data;
        this.departmentType = "Edit";
        this.hiddenScroll();
    }
    modalClose() {
        this.editemployeeDisplay = "none";
        this.displayScroll();
    }
}
OrganizationComponent.ɵfac = function OrganizationComponent_Factory(t) { return new (t || OrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"])); };
OrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationComponent, selectors: [["app-organization"]], viewQuery: function OrganizationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeBtn = _t.first);
    } }, inputs: { sendMessage: "sendMessage" }, decls: 63, vars: 4, consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [3, "onChange"], ["header", "Active Organizations"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Organizations"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], ["id", "send_Message", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "col-sm-12"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "placeholder", " ", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "5", "cols", "1", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["closeBtn", ""], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#send_Message", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-paper-plane", "m-r-5"], [4, "ngIf"], ["colspan", "4", 2, "text-align", "left"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"]], template: function OrganizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Organizations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-tabView", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function OrganizationComponent_Template_p_tabView_onChange_11_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-tabPanel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrganizationComponent_div_13_Template, 7, 10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-tabPanel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrganizationComponent_div_15_Template, 7, 10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inactive Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Are you sure want to Inactive the Organization?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_Template_a_click_28_listener($event) { return ctx.delete(ctx.organization); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizationComponent_Template_input_ngModelChange_48_listener($event) { return ctx.sendMessage.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizationComponent_Template_textarea_ngModelChange_55_listener($event) { return ctx.sendMessage.messageBody = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_Template_a_click_57_listener($event) { return ctx.sendMessageToOrganization(ctx.organization); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 21, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sendMessage.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sendMessage.messageBody);
    } }, directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextarea"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_10__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["SelectableRow"]], styles: [".actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n.actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n[_nghost-%COMP%]     .ui-table-customers {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\n    border-radius: 2px;\n    padding: 0.25em 0.5em;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 12px;\n    letter-spacing: 0.3px;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\n    background-color: #c8e6c9;\n    color: #256029;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\n    background-color: #ffcdd2;\n    color: #c63737;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\n    background-color: #feedaf;\n    color: #8a5340;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\n    background-color: #b3e5fc;\n    color: #23547b;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\n    background-color: #eccfff;\n    color: #694382;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\n    background-color: #ffd8b2;\n    color: #805b36;\n}\n[_nghost-%COMP%]     .ui-table-customers .flag {\n    vertical-align: middle;\n    width: 30px;\n    height: 20px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\n    display: inline-block;\n    vertical-align: middle;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\n    vertical-align: middle;\n    width: 24px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\n    margin-top: 0.125em;\n    vertical-align: middle;\n    margin-left: 0.5em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\n    float: left;\n    width: auto;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\n    height: 8px;\n    background-color: #d8dadc;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\n    background-color: #00acad;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\n    display: block;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\n    width: 100%;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\n    width: 200px;\n    height: 33px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\n    min-width: 25em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\n    font-weight: 400;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\n    border: 0 none;\n    padding: 12px;\n    text-align: left;\n    font-size: 19px;\n    color: #ffffff;\n    background: #ffffff;\n    border-bottom: 1px solid #ff9b44;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\n    border: 0 none;\n    padding: 1em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\n    border: 0 none;\n    text-align: left;\n    border-bottom: 2px solid #dee2e6;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\n    border-top: 1px solid #c8c8c8;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\n    border: 0 none;\n    cursor: auto;\n    word-wrap: break-word;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\n    text-transform: uppercase;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n    display: none;\n}\n\n@media screen and (max-width: 64em) {\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\n        display: none !important;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\n        text-align: left;\n        display: block;\n        border: 0 none !important;\n        width: 100% !important;\n        float: left;\n        clear: left;\n        border: 0 none;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n        padding: 0.4em;\n        min-width: 30%;\n        display: inline-block;\n        margin: -0.4em 1em -0.4em -0.4em;\n        font-weight: bold;\n   }\n}\nh2.table-avatar[_ngcontent-%COMP%] {\n    align-items: center;\n    display: inline-flex;\n    font-size: inherit;\n    font-weight: 400;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcmVtZS1hZG1pbi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksK0dBQStHO0FBQ25IO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLHdCQUF3QjtHQUM3QjtJQUNDO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztHQUNuQjtJQUNDO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLGlCQUFpQjtHQUN0QjtBQUNIO0FBQ0M7SUFDRyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3VwcmVtZS1hZG1pbi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uc3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbn1cbi5hY3Rpb25zIC5hY3Rpb24taWNvbntcbiAgICBjb2xvcjogIzc3Nztcbn1cbi5hY3Rpb25ze1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuLmFjdGlvbnMgLmFjdGlvbi1pY29ue1xuICAgIGNvbG9yOiAjNzc3O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcXVhbGlmaWVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xuICAgIGNvbG9yOiAjMjU2MDI5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy11bnF1YWxpZmllZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcbiAgICBjb2xvcjogI2M2MzczNztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmVnb3RpYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWVkYWY7XG4gICAgY29sb3I6ICM4YTUzNDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLW5ldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmYztcbiAgICBjb2xvcjogIzIzNTQ3Yjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcmVuZXdhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjY2ZmZjtcbiAgICBjb2xvcjogIzY5NDM4Mjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcHJvcG9zYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4YjI7XG4gICAgY29sb3I6ICM4MDViMzY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuZmxhZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24gaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAwLjEyNWVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciAudWktZHJvcGRvd24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciAudWktcGFnaW5hdG9yLWN1cnJlbnQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wcm9ncmVzc2JhciB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZGFkYztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wcm9ncmVzc2JhciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjYWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIgaW5wdXQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB7XG4gICAgbWluLXdpZHRoOiAyNWVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWRhdGVwaWNrZXIgdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtY2FwdGlvbiB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY5YjQ0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgcGFkZGluZzogMWVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgudWktZmlsdGVyLWNvbHVtbiB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCB7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZHJvcGRvd24tbGFiZWw6bm90KC51aS1wbGFjZWhvbGRlcikge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIC51aS1jb2x1bW4tdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aCwgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAudWktY29sdW1uLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMC40ZW07XG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogLTAuNGVtIDFlbSAtMC40ZW0gLTAuNGVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbn1cbiBoMi50YWJsZS1hdmF0YXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-organization",
                templateUrl: "./organization.component.html",
                styleUrls: ["./organization.component.css"],
            }]
    }], function () { return [{ type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] }, { type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: _organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"] }]; }, { sendMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["closeBtn"]
        }] }); })();


/***/ }),

/***/ "./src/app/supreme-admin/organization/organization.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/supreme-admin/organization/organization.service.ts ***!
  \********************************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class OrganizationService {
    constructor(http) {
        this.http = http;
    }
    getAllOrganizations(status) {
        return this.http.get(`api/sadmin/organizations/get?status=${status}`);
    }
    activateOrganization(organizationDetailsId) {
        return this.http.put(`api/sadmin/organization/activate/${organizationDetailsId}`, {});
    }
    deactivateOrganization(organizationDetailsId) {
        return this.http.put(`api/sadmin/organization/deactivate/${organizationDetailsId}?reason='reason'`, {});
    }
    sendMessage(sendMessage) {
        return this.http.post(`api/sadmin/organization/communication/send`, sendMessage);
    }
}
OrganizationService.ɵfac = function OrganizationService_Factory(t) { return new (t || OrganizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrganizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrganizationService, factory: OrganizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supreme-admin/supreme-admin-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/supreme-admin/supreme-admin-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SupremeAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupremeAdminRoutingModule", function() { return SupremeAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/supreme-admin/organization/organization.component.ts");
/* harmony import */ var _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freeemaildomain/freeemaildomain.component */ "./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts");






const routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "organization", component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationComponent"] },
    { path: "freeemaildomain", component: _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_3__["FreeemaildomainComponent"] },
];
class SupremeAdminRoutingModule {
}
SupremeAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SupremeAdminRoutingModule });
SupremeAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SupremeAdminRoutingModule_Factory(t) { return new (t || SupremeAdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupremeAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupremeAdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/supreme-admin/supreme-admin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/supreme-admin/supreme-admin.module.ts ***!
  \*******************************************************/
/*! exports provided: SupremeAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupremeAdminModule", function() { return SupremeAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dialog/dialog */ "./src/app/components/dialog/dialog.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/dropdown/dropdown */ "./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/confirmdialog/confirmdialog */ "./src/app/components/confirmdialog/confirmdialog.ts");
/* harmony import */ var _components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/api/confirmationservice */ "./src/app/components/api/confirmationservice.ts");
/* harmony import */ var _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/chart/chart */ "./src/app/components/chart/chart.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/public_api */ "./src/app/components/public_api.ts");
/* harmony import */ var _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./supreme-admin-routing.module */ "./src/app/supreme-admin/supreme-admin-routing.module.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/supreme-admin/organization/organization.component.ts");
/* harmony import */ var _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./freeemaildomain/freeemaildomain.component */ "./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts");
/* harmony import */ var _freeemaildomain_edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component */ "./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts");



















class SupremeAdminModule {
}
SupremeAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SupremeAdminModule });
SupremeAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SupremeAdminModule_Factory(t) { return new (t || SupremeAdminModule)(); }, providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
            _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
            _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"],
            _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupremeAdminRoutingModule"],
            _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"],
        ],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupremeAdminModule, { declarations: [_organization_organization_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationComponent"],
        _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_16__["FreeemaildomainComponent"],
        _freeemaildomain_edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_17__["EditFreeemaildomainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
        _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
        _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
        _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"],
        _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupremeAdminRoutingModule"],
        _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"]], exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupremeAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _organization_organization_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationComponent"],
                    _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_16__["FreeemaildomainComponent"],
                    _freeemaildomain_edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_17__["EditFreeemaildomainComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                    _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
                    _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                    _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                    _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"],
                    _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupremeAdminRoutingModule"],
                    _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"],
                ],
                exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"]],
                providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=supreme-admin-supreme-admin-module-es2015.js.map