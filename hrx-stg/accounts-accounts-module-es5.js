function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"], {
  /***/
  "./src/app/accounts/account-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/accounts/account-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: AccountsRoutingModule */

  /***/
  function srcAppAccountsAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function () {
      return AccountsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/custommodules/timesheets/timesheets.component */
    "./src/app/core/custommodules/timesheets/timesheets.component.ts");
    /* harmony import */


    var _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/custommodules/w4/w4.component */
    "./src/app/core/custommodules/w4/w4.component.ts");
    /* harmony import */


    var _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/custommodules/i9/i9.component */
    "./src/app/core/custommodules/i9/i9.component.ts");
    /* harmony import */


    var _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/custommodules/notes/notes.component */
    "./src/app/core/custommodules/notes/notes.component.ts");
    /* harmony import */


    var _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/custommodules/employeeinfo/employeeinfo.component */
    "./src/app/core/custommodules/employeeinfo/employeeinfo.component.ts");
    /* harmony import */


    var _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/custommodules/departments/departments.component */
    "./src/app/core/custommodules/departments/departments.component.ts");
    /* harmony import */


    var _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/custommodules/designations/designations.component */
    "./src/app/core/custommodules/designations/designations.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/core/custommodules/company/company.component */
    "./src/app/core/custommodules/company/company.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/core/custommodules/project/project.component */
    "./src/app/core/custommodules/project/project.component.ts");
    /* harmony import */


    var _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/core/custommodules/documents/documents.component */
    "./src/app/core/custommodules/documents/documents.component.ts");
    /* harmony import */


    var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/core/myprofile/myprofile.component */
    "./src/app/core/myprofile/myprofile.component.ts");
    /* harmony import */


    var _app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/comingsoon-page/comingsoon-page.component */
    "./src/app/comingsoon-page/comingsoon-page.component.ts");
    /* harmony import */


    var _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/core/custommodules/approvers/approvers.component */
    "./src/app/core/custommodules/approvers/approvers.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_companyview_companyview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/core/custommodules/company/companyview/companyview.component */
    "./src/app/core/custommodules/company/companyview/companyview.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/core/custommodules/company/edit-company/edit-company.component */
    "./src/app/core/custommodules/company/edit-company/edit-company.component.ts");
    /* harmony import */


    var _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/core/custommodules/departments-category/category.component */
    "./src/app/core/custommodules/departments-category/category.component.ts");
    /* harmony import */


    var _app_core_custommodules_immigrations_immigrations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @app/core/custommodules/immigrations/immigrations.component */
    "./src/app/core/custommodules/immigrations/immigrations.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/edit-invoice/edit-invoice.component */
    "./src/app/core/custommodules/invoices/edit-invoice/edit-invoice.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/invoices.component */
    "./src/app/core/custommodules/invoices/invoices.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/view-invoice/view-invoice.component */
    "./src/app/core/custommodules/invoices/view-invoice/view-invoice.component.ts");
    /* harmony import */


    var _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @app/core/custommodules/my-documents/my-documents.component */
    "./src/app/core/custommodules/my-documents/my-documents.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_advance_advance_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/advance/advance.component */
    "./src/app/core/custommodules/payhistory/advance/advance.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_advance_view_advance_view_advance_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/advance/view-advance/view-advance.component */
    "./src/app/core/custommodules/payhistory/advance/view-advance/view-advance.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_deductions_deduction_view_deduction_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/deductions/deduction-view/deduction-view.component */
    "./src/app/core/custommodules/payhistory/deductions/deduction-view/deduction-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_deductions_deductions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/deductions/deductions.component */
    "./src/app/core/custommodules/payhistory/deductions/deductions.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_expences_expence_view_expence_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/expences/expence-view/expence-view.component */
    "./src/app/core/custommodules/payhistory/expences/expence-view/expence-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_expences_expences_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/expences/expences.component */
    "./src/app/core/custommodules/payhistory/expences/expences.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_payrate_payrate_view_payrate_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/payrate/payrate-view/payrate-view.component */
    "./src/app/core/custommodules/payhistory/payrate/payrate-view/payrate-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_payrate_payrate_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/payrate/payrate.component */
    "./src/app/core/custommodules/payhistory/payrate/payrate.component.ts");
    /* harmony import */


    var _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @app/core/custommodules/payments/payments.component */
    "./src/app/core/custommodules/payments/payments.component.ts");
    /* harmony import */


    var _app_core_custommodules_payments_viewpayments_viewpayments_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @app/core/custommodules/payments/viewpayments/viewpayments.component */
    "./src/app/core/custommodules/payments/viewpayments/viewpayments.component.ts");
    /* harmony import */


    var _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @app/core/custommodules/paystubs/paystubs.component */
    "./src/app/core/custommodules/paystubs/paystubs.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @app/core/custommodules/project/edit-project/edit-project.component */
    "./src/app/core/custommodules/project/edit-project/edit-project.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @app/core/custommodules/project/view-project/view-project.component */
    "./src/app/core/custommodules/project/view-project/view-project.component.ts");
    /* harmony import */


    var _app_core_custommodules_timesheets_view_timesheet_view_timesheet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @app/core/custommodules/timesheets/view-timesheet/view-timesheet.component */
    "./src/app/core/custommodules/timesheets/view-timesheet/view-timesheet.component.ts");
    /* harmony import */


    var _app_core_guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @app/core/guards/unsaved-changes.guard */
    "./src/app/core/guards/unsaved-changes.guard.ts");
    /* harmony import */


    var _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @app/core/my-organization-details/my-organization-details.component */
    "./src/app/core/my-organization-details/my-organization-details.component.ts");

    var routes = [{
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    }, {
      path: "dashboard",
      component: _app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["AdminDashboardComponent"]
    }, {
      path: "organizationDetails",
      component: _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_39__["MyOrganizationDetailsComponent"]
    }, {
      path: "employees",
      component: _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeinfoComponent"]
    }, {
      path: "departments",
      component: _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentsComponent"]
    }, {
      path: "designations",
      component: _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_8__["DesignationsComponent"]
    }, {
      path: "myprofile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_12__["MyprofileComponent"]
    }, {
      path: "company",
      component: _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"]
    }, {
      path: "company/view",
      component: _app_core_custommodules_company_companyview_companyview_component__WEBPACK_IMPORTED_MODULE_16__["CompanyviewComponent"]
    }, {
      path: "company/edit",
      component: _app_core_custommodules_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_17__["EditCompanyComponent"]
    }, {
      path: "projects",
      component: _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"]
    }, {
      path: "projects/project/view",
      component: _app_core_custommodules_project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_36__["ViewProjectComponent"]
    }, {
      path: "projects/project/edit",
      component: _app_core_custommodules_project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_35__["EditProjectComponent"]
    }, {
      path: "documents",
      component: _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_11__["DocumentsComponent"]
    }, {
      path: "approvers",
      component: _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_15__["ApproversComponent"]
    }, {
      path: "category",
      component: _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_18__["CategoryComponent"]
    }, {
      path: "w4",
      component: _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_3__["W4Component"]
    }, {
      path: "i9",
      component: _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_4__["I9Component"]
    }, {
      path: "paystubs",
      component: _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_34__["PaystubsComponent"]
    }, {
      path: "timesheets",
      component: _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_2__["TimesheetsComponent"]
    }, {
      path: "timesheets/timesheet/view",
      component: _app_core_custommodules_timesheets_view_timesheet_view_timesheet_component__WEBPACK_IMPORTED_MODULE_37__["ViewTimesheetComponent"]
    }, {
      path: "notes",
      component: _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"]
    }, {
      path: "invoices",
      component: _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_21__["InvoicesComponent"]
    }, {
      path: "invoices/invoice",
      component: _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_20__["EditInvoiceComponent"],
      canDeactivate: [_app_core_guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_38__["UnsavedChangesGuard"]]
    }, {
      path: "invoices/invoice/view",
      component: _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_22__["ViewInvoiceComponent"]
    }, {
      path: "payments",
      component: _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_32__["PaymentsComponent"]
    }, {
      path: "payments/payment/view",
      component: _app_core_custommodules_payments_viewpayments_viewpayments_component__WEBPACK_IMPORTED_MODULE_33__["ViewpaymentsComponent"]
    }, {
      path: "my_documents",
      component: _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_23__["MyDocumentsComponent"]
    }, {
      path: "deductions",
      component: _app_core_custommodules_payhistory_deductions_deductions_component__WEBPACK_IMPORTED_MODULE_27__["DeductionsComponent"]
    }, {
      path: "deductions/deduction/view",
      component: _app_core_custommodules_payhistory_deductions_deduction_view_deduction_view_component__WEBPACK_IMPORTED_MODULE_26__["DeductionViewComponent"]
    }, {
      path: "payrate",
      component: _app_core_custommodules_payhistory_payrate_payrate_component__WEBPACK_IMPORTED_MODULE_31__["PayrateComponent"]
    }, {
      path: "payrate/view",
      component: _app_core_custommodules_payhistory_payrate_payrate_view_payrate_view_component__WEBPACK_IMPORTED_MODULE_30__["PayrateViewComponent"]
    }, {
      path: "advances",
      component: _app_core_custommodules_payhistory_advance_advance_component__WEBPACK_IMPORTED_MODULE_24__["AdvanceComponent"]
    }, {
      path: "advances/advance/view",
      component: _app_core_custommodules_payhistory_advance_view_advance_view_advance_component__WEBPACK_IMPORTED_MODULE_25__["ViewAdvanceComponent"]
    }, {
      path: "expenses",
      component: _app_core_custommodules_payhistory_expences_expences_component__WEBPACK_IMPORTED_MODULE_29__["ExpencesComponent"]
    }, {
      path: "expenses/expence/view",
      component: _app_core_custommodules_payhistory_expences_expence_view_expence_view_component__WEBPACK_IMPORTED_MODULE_28__["ExpenceViewComponent"]
    }, {
      path: "immigrations",
      component: _app_core_custommodules_immigrations_immigrations_component__WEBPACK_IMPORTED_MODULE_19__["ImmigrationsComponent"]
    }, {
      path: "timeline",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "debit",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "ap_invoices",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "payment_reports",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "invoice_Reports",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "employee_reports",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "employee_timeline",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "prospect_supplier",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "prospect_employee",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "Prospect_position",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_14__["ComingsoonPageComponent"]
    }, {
      path: "employees/:id/profile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_12__["MyprofileComponent"]
    }];

    var AccountsRoutingModule = function AccountsRoutingModule() {
      _classCallCheck(this, AccountsRoutingModule);
    };

    AccountsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountsRoutingModule
    });
    AccountsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountsRoutingModule_Factory(t) {
        return new (t || AccountsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/accounts.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/accounts/accounts.module.ts ***!
    \*********************************************/

  /*! exports provided: AccountsModule */

  /***/
  function srcAppAccountsAccountsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsModule", function () {
      return AccountsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/components/confirmdialog/confirmdialog */
    "./src/app/components/confirmdialog/confirmdialog.ts");
    /* harmony import */


    var _app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/components/public_api */
    "./src/app/components/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/accounts/account-routing.module.ts");

    var AccountsModule = function AccountsModule() {
      _classCallCheck(this, AccountsModule);
    };

    AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountsModule
    });
    AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountsModule_Factory(t) {
        return new (t || AccountsModule)();
      },
      providers: [_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"], _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountsRoutingModule"]], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"], _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountsRoutingModule"]],
        exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"], _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountsRoutingModule"]],
          exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"]],
          providers: [_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=accounts-accounts-module-es5.js.map