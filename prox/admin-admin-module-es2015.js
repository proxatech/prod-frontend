(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/myprofile/myprofile.component */ "Mi3L");
/* harmony import */ var _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/custommodules/notes/notes.component */ "CFxq");
/* harmony import */ var _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/custommodules/employeeinfo/employeeinfo.component */ "Zyl5");
/* harmony import */ var _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/custommodules/departments/departments.component */ "JsNv");
/* harmony import */ var _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/custommodules/designations/designations.component */ "vMat");
/* harmony import */ var _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/custommodules/company/company.component */ "vfGD");
/* harmony import */ var _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/custommodules/project/project.component */ "OWg1");
/* harmony import */ var _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/custommodules/documents/documents.component */ "gV9m");
/* harmony import */ var _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/custommodules/departments-category/category.component */ "6gLa");
/* harmony import */ var _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/custommodules/w4/w4.component */ "X/95");
/* harmony import */ var _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/core/custommodules/i9/i9.component */ "DhFf");
/* harmony import */ var _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/core/custommodules/paystubs/paystubs.component */ "cQPb");
/* harmony import */ var _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/core/custommodules/timesheets/timesheets.component */ "vW2J");
/* harmony import */ var _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/core/custommodules/approvers/approvers.component */ "cYOE");
/* harmony import */ var _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/core/custommodules/invoices/invoices.component */ "V6yz");
/* harmony import */ var _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/core/custommodules/invoices/edit-invoice/edit-invoice.component */ "3ayB");
/* harmony import */ var _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/core/custommodules/invoices/view-invoice/view-invoice.component */ "rh2V");
/* harmony import */ var _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/core/my-organization-details/my-organization-details.component */ "rmlw");
/* harmony import */ var _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/core/custommodules/payments/payments.component */ "wcXI");
/* harmony import */ var _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/core/custommodules/my-documents/my-documents.component */ "D/vR");

























const routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: src_app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"] },
    { path: "organizationDetails", component: _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_20__["MyOrganizationDetailsComponent"] },
    { path: "employees", component: _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeinfoComponent"] },
    { path: "departments", component: _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"] },
    { path: "designations", component: _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_7__["DesignationsComponent"] },
    {
        path: "myprofile",
        component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"],
    },
    {
        path: "company",
        component: _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"],
    },
    {
        path: "projects",
        component: _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
    },
    {
        path: "documents",
        component: _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_10__["DocumentsComponent"],
    },
    { path: "approvers", component: _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_16__["ApproversComponent"] },
    {
        path: "category",
        component: _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
    },
    { path: "w4", component: _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_12__["W4Component"] },
    { path: "i9", component: _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_13__["I9Component"] },
    { path: "paystubs", component: _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_14__["PaystubsComponent"] },
    { path: "timesheets", component: _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_15__["TimesheetsComponent"] },
    { path: "notes", component: _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"] },
    { path: "invoices", component: _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_17__["InvoicesComponent"] },
    { path: "invoices/invoice", component: _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_18__["EditInvoiceComponent"] },
    { path: "invoices/invoice/view", component: _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewInvoiceComponent"] },
    { path: "payments", component: _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["PaymentsComponent"] },
    { path: "my_documents", component: _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_22__["MyDocumentsComponent"] },
    {
        path: "employees/:id/profile",
        component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"],
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/admin-routing.module */ "0Em7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table/table */ "pzzw");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/inputtext/inputtext */ "mWoB");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button/button */ "q5e5");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/dialog/dialog */ "WDBf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/dropdown/dropdown */ "gnOX");
/* harmony import */ var _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/confirmdialog/confirmdialog */ "ZCg6");
/* harmony import */ var _components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/api/confirmationservice */ "xiIZ");
/* harmony import */ var _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/chart/chart */ "uHdF");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/public_api */ "JKU3");

















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _components_table_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
            _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"],
            src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
        ],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _components_table_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
        _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
        _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"],
        src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
        _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"]], exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _components_table_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                    _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                    _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
                    _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"],
                    src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
                    _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
                ],
                exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"]],
                providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map