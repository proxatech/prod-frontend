function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var src_app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/myprofile/myprofile.component */
    "./src/app/core/myprofile/myprofile.component.ts");
    /* harmony import */


    var _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/custommodules/notes/notes.component */
    "./src/app/core/custommodules/notes/notes.component.ts");
    /* harmony import */


    var _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/custommodules/employeeinfo/employeeinfo.component */
    "./src/app/core/custommodules/employeeinfo/employeeinfo.component.ts");
    /* harmony import */


    var _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/custommodules/departments/departments.component */
    "./src/app/core/custommodules/departments/departments.component.ts");
    /* harmony import */


    var _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/custommodules/designations/designations.component */
    "./src/app/core/custommodules/designations/designations.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/custommodules/company/company.component */
    "./src/app/core/custommodules/company/company.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/core/custommodules/project/project.component */
    "./src/app/core/custommodules/project/project.component.ts");
    /* harmony import */


    var _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/core/custommodules/documents/documents.component */
    "./src/app/core/custommodules/documents/documents.component.ts");
    /* harmony import */


    var _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/core/custommodules/departments-category/category.component */
    "./src/app/core/custommodules/departments-category/category.component.ts");
    /* harmony import */


    var _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/core/custommodules/w4/w4.component */
    "./src/app/core/custommodules/w4/w4.component.ts");
    /* harmony import */


    var _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/core/custommodules/i9/i9.component */
    "./src/app/core/custommodules/i9/i9.component.ts");
    /* harmony import */


    var _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/core/custommodules/paystubs/paystubs.component */
    "./src/app/core/custommodules/paystubs/paystubs.component.ts");
    /* harmony import */


    var _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/core/custommodules/timesheets/timesheets.component */
    "./src/app/core/custommodules/timesheets/timesheets.component.ts");
    /* harmony import */


    var _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/core/custommodules/approvers/approvers.component */
    "./src/app/core/custommodules/approvers/approvers.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/invoices.component */
    "./src/app/core/custommodules/invoices/invoices.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/edit-invoice/edit-invoice.component */
    "./src/app/core/custommodules/invoices/edit-invoice/edit-invoice.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/view-invoice/view-invoice.component */
    "./src/app/core/custommodules/invoices/view-invoice/view-invoice.component.ts");
    /* harmony import */


    var _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/core/my-organization-details/my-organization-details.component */
    "./src/app/core/my-organization-details/my-organization-details.component.ts");
    /* harmony import */


    var _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @app/core/custommodules/payments/payments.component */
    "./src/app/core/custommodules/payments/payments.component.ts");
    /* harmony import */


    var _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @app/core/custommodules/my-documents/my-documents.component */
    "./src/app/core/custommodules/my-documents/my-documents.component.ts");

    var routes = [{
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    }, {
      path: "dashboard",
      component: src_app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]
    }, {
      path: "organizationDetails",
      component: _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_20__["MyOrganizationDetailsComponent"]
    }, {
      path: "employees",
      component: _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeinfoComponent"]
    }, {
      path: "departments",
      component: _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"]
    }, {
      path: "designations",
      component: _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_7__["DesignationsComponent"]
    }, {
      path: "myprofile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"]
    }, {
      path: "company",
      component: _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"]
    }, {
      path: "projects",
      component: _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"]
    }, {
      path: "documents",
      component: _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_10__["DocumentsComponent"]
    }, {
      path: "approvers",
      component: _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_16__["ApproversComponent"]
    }, {
      path: "category",
      component: _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"]
    }, {
      path: "w4",
      component: _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_12__["W4Component"]
    }, {
      path: "i9",
      component: _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_13__["I9Component"]
    }, {
      path: "paystubs",
      component: _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_14__["PaystubsComponent"]
    }, {
      path: "timesheets",
      component: _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_15__["TimesheetsComponent"]
    }, {
      path: "notes",
      component: _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"]
    }, {
      path: "invoices",
      component: _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_17__["InvoicesComponent"]
    }, {
      path: "invoices/invoice",
      component: _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_18__["EditInvoiceComponent"]
    }, {
      path: "invoices/invoice/view",
      component: _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewInvoiceComponent"]
    }, {
      path: "payments",
      component: _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["PaymentsComponent"]
    }, {
      path: "my_documents",
      component: _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_22__["MyDocumentsComponent"]
    }, {
      path: "employees/:id/profile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
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
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/admin/admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/button/button */
    "./src/app/components/button/button.ts");
    /* harmony import */


    var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/dialog/dialog */
    "./src/app/components/dialog/dialog.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/dropdown/dropdown */
    "./src/app/components/dropdown/dropdown.ts");
    /* harmony import */


    var _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/confirmdialog/confirmdialog */
    "./src/app/components/confirmdialog/confirmdialog.ts");
    /* harmony import */


    var _components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../components/chart/chart */
    "./src/app/components/chart/chart.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/components/public_api */
    "./src/app/components/public_api.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"], src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"]], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"], src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"]],
        exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"], src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"]],
          exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedServiceModule"]],
          providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map