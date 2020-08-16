(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hr-hr-module"], {
    /***/
    "./src/app/hr/hr-dashboard/hr-dashboard.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/hr/hr-dashboard/hr-dashboard.component.ts ***!
      \***********************************************************/

    /*! exports provided: HrDashboardComponent */

    /***/
    function srcAppHrHrDashboardHrDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrDashboardComponent", function () {
        return HrDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HrDashboardComponent = /*#__PURE__*/function () {
        function HrDashboardComponent() {
          _classCallCheck(this, HrDashboardComponent);
        }

        _createClass(HrDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HrDashboardComponent;
      }();

      HrDashboardComponent.ɵfac = function HrDashboardComponent_Factory(t) {
        return new (t || HrDashboardComponent)();
      };

      HrDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HrDashboardComponent,
        selectors: [["app-hr-dashboard"]],
        decls: 2,
        vars: 0,
        template: function HrDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hr-dashboard works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL2hyLWRhc2hib2FyZC9oci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-hr-dashboard',
            templateUrl: './hr-dashboard.component.html',
            styleUrls: ['./hr-dashboard.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/hr/hr-routing.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/hr/hr-routing.module.ts ***!
      \*****************************************/

    /*! exports provided: HrRoutingModule */

    /***/
    function srcAppHrHrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrRoutingModule", function () {
        return HrRoutingModule;
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


      var _hr_dashboard_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hr-dashboard/hr-dashboard.component */
      "./src/app/hr/hr-dashboard/hr-dashboard.component.ts");
      /* harmony import */


      var _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/core/custommodules/employeeinfo/employeeinfo.component */
      "./src/app/core/custommodules/employeeinfo/employeeinfo.component.ts");
      /* harmony import */


      var _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/core/custommodules/departments/departments.component */
      "./src/app/core/custommodules/departments/departments.component.ts");
      /* harmony import */


      var _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/core/custommodules/designations/designations.component */
      "./src/app/core/custommodules/designations/designations.component.ts");
      /* harmony import */


      var _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/core/custommodules/company/company.component */
      "./src/app/core/custommodules/company/company.component.ts");
      /* harmony import */


      var _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/core/custommodules/project/project.component */
      "./src/app/core/custommodules/project/project.component.ts");
      /* harmony import */


      var _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @app/core/custommodules/documents/documents.component */
      "./src/app/core/custommodules/documents/documents.component.ts");
      /* harmony import */


      var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/core/myprofile/myprofile.component */
      "./src/app/core/myprofile/myprofile.component.ts");

      var routes = [{
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }, {
        path: "dashboard",
        component: _hr_dashboard_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["HrDashboardComponent"]
      }, {
        path: "employees",
        component: _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeinfoComponent"]
      }, {
        path: "departments",
        component: _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentsComponent"]
      }, {
        path: "designations",
        component: _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_9__["DesignationsComponent"]
      }, {
        path: "company",
        component: _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_10__["CompanyComponent"]
      }, {
        path: "projects",
        component: _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"]
      }, {
        path: "documents",
        component: _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_12__["DocumentsComponent"]
      }, {
        path: "timesheets",
        component: _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_2__["TimesheetsComponent"]
      }, {
        path: "w4",
        component: _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_3__["W4Component"]
      }, {
        path: "i9",
        component: _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_4__["I9Component"]
      }, {
        path: "notes",
        component: _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"]
      }, {
        path: "employees/:id/profile",
        component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_13__["MyprofileComponent"]
      }];

      var HrRoutingModule = function HrRoutingModule() {
        _classCallCheck(this, HrRoutingModule);
      };

      HrRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HrRoutingModule
      });
      HrRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HrRoutingModule_Factory(t) {
          return new (t || HrRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrRoutingModule, [{
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
    "./src/app/hr/hr.module.ts":
    /*!*********************************!*\
      !*** ./src/app/hr/hr.module.ts ***!
      \*********************************/

    /*! exports provided: HrModule */

    /***/
    function srcAppHrHrModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrModule", function () {
        return HrModule;
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


      var _hr_dashboard_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hr-dashboard/hr-dashboard.component */
      "./src/app/hr/hr-dashboard/hr-dashboard.component.ts");
      /* harmony import */


      var _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hr-routing.module */
      "./src/app/hr/hr-routing.module.ts");
      /* harmony import */


      var _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/components/confirmdialog/confirmdialog */
      "./src/app/components/confirmdialog/confirmdialog.ts");
      /* harmony import */


      var _app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/components/api/confirmationservice */
      "./src/app/components/api/confirmationservice.ts");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/components/public_api */
      "./src/app/components/public_api.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var HrModule = function HrModule() {
        _classCallCheck(this, HrModule);
      };

      HrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HrModule
      });
      HrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HrModule_Factory(t) {
          return new (t || HrModule)();
        },
        providers: [_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["TableModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedServiceModule"], _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModule"], _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrRoutingModule"]], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedServiceModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrModule, {
          declarations: [_hr_dashboard_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["HrDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["TableModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedServiceModule"], _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModule"], _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrRoutingModule"]],
          exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedServiceModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_hr_dashboard_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["HrDashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["TableModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedServiceModule"], _app_components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModule"], _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrRoutingModule"]],
            exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedServiceModule"]],
            providers: [_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=hr-hr-module-es5.js.map