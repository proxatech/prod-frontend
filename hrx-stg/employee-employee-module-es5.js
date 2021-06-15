function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"], {
  /***/
  "./src/app/employee/employee-dashboard/employee-dashboard.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/employee/employee-dashboard/employee-dashboard.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EmployeeDashboardComponent */

  /***/
  function srcAppEmployeeEmployeeDashboardEmployeeDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeDashboardComponent", function () {
      return EmployeeDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/enums/gender.enum */
    "./src/app/shared/enums/gender.enum.ts");
    /* harmony import */


    var _app_shared_enums_maritalstatus_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/enums/maritalstatus.enum */
    "./src/app/shared/enums/maritalstatus.enum.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/service/auth.service */
    "./src/app/core/service/auth.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _app_core_myprofile_myprofile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/myprofile/myprofile.service */
    "./src/app/core/myprofile/myprofile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmployeeDashboardComponent_div_61_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r5195.profile == null ? null : ctx_r5195.profile.dateOfMarriage, ")");
      }
    }

    function EmployeeDashboardComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeDashboardComponent_div_61_span_2_Template, 2, 1, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r5191.MaritalStatus[ctx_r5191.profile == null ? null : ctx_r5191.profile.maritalStatus] || "-", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5191.profile == null ? null : ctx_r5191.profile.dateOfMarriage);
      }
    }

    function EmployeeDashboardComponent_span_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r5192.getImmigrationStatus(ctx_r5192.profile == null ? null : ctx_r5192.profile.immigrationStatus), "");
      }
    }

    function EmployeeDashboardComponent_div_70_h5_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5196.errorLabel, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        display: a0
      };
    };

    function EmployeeDashboardComponent_div_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r5198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeDashboardComponent_div_70_h5_4_Template, 2, 1, "h5", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDashboardComponent_div_70_Template_button_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5198);

          var ctx_r5197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5197.closeAddmodal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r5193.profileinfo));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5193.errorLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](": ", ctx_r5193.profile == null ? null : ctx_r5193.profile.firstName, " ", ctx_r5193.profile == null ? null : ctx_r5193.profile.lastName, "");
      }
    }

    function EmployeeDashboardComponent_div_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var report_r5199 = ctx.$implicit;

        var ctx_r5194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5194.pictureUrl + report_r5199.photoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r5199.fullName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("( ", report_r5199.employeeId, " )");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r5199.department);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r5199.designation);
      }
    }

    var EmployeeDashboardComponent =
    /*#__PURE__*/
    function () {
      function EmployeeDashboardComponent(authService, sharedService, profileService, router) {
        _classCallCheck(this, EmployeeDashboardComponent);

        this.authService = authService;
        this.sharedService = sharedService;
        this.profileService = profileService;
        this.router = router;
        this.errorLabel = '';
        this.profileinfo = 'none';
        this.pictureUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pictureUrl;
        this.activeTabIndex = 0;
      }

      _createClass(EmployeeDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.currentUser;
          this.getProfile(this.user.employeeDetailsId);
          console.log(this.user.role);
        }
      }, {
        key: "getProfile",
        value: function getProfile(employeeDetailsId) {
          var _this = this;

          this.profileService.getProfile(employeeDetailsId).subscribe(function (res) {
            if (res.statusCode == 200) {
              _this.profile = res.responsePayload;
              return;
            }
          });
        }
      }, {
        key: "errorMessage",
        value: function errorMessage(error) {
          this.sharedService.add({
            severity: 'error',
            summary: 'Error',
            detail: error
          });
        }
      }, {
        key: "hiddenScroll",
        value: function hiddenScroll() {
          try {
            var bodyElement = document.getElementById('modalbody');

            if (bodyElement) {
              bodyElement.classList.add('modal-open');
            }
          } catch (ex) {
            this.clientErrorMsg(ex, 'hiddenScroll');
          }
        }
      }, {
        key: "displayScroll",
        value: function displayScroll() {
          try {
            var bodyElement = document.getElementById('modalbody');

            if (bodyElement) {
              bodyElement.classList.remove('modal-open');
            }
          } catch (ex) {
            this.clientErrorMsg(ex, 'displayScroll');
          }
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.errorLabel = '';
          this.profileinfo = 'none';
          this.displayScroll();
        }
      }, {
        key: "getImmigrationStatus",
        value: function getImmigrationStatus(statusCode) {
          switch (statusCode) {
            case '0':
              return 'Not Valid';

            case '1':
              return 'Valid';

            default:
              return 'Save Immigration Details';
          }
        }
      }, {
        key: "navigateToMyProfile",
        value: function navigateToMyProfile() {
          this.router.navigate([this.user.role + '/myprofile']);
        }
      }, {
        key: "Gender",
        get: function get() {
          return _app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_1__["Gender"];
        }
      }, {
        key: "MaritalStatus",
        get: function get() {
          return _app_shared_enums_maritalstatus_enum__WEBPACK_IMPORTED_MODULE_2__["MaritalStatus"];
        }
      }]);

      return EmployeeDashboardComponent;
    }();

    EmployeeDashboardComponent.ɵfac = function EmployeeDashboardComponent_Factory(t) {
      return new (t || EmployeeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_myprofile_myprofile_service__WEBPACK_IMPORTED_MODULE_6__["MyProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    EmployeeDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeDashboardComponent,
      selectors: [["app-employee-dashboard"]],
      decls: 79,
      vars: 15,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javscript:void(0)"], [1, "card", "mb-0"], [1, "card-body"], [1, "col-md-12"], [1, "profile-view"], [1, "profile-img-wrap"], [1, "profile-img"], ["href", "javascript:void(0)"], ["alt", "", 3, "src"], [1, "profile-basic"], [1, "col-md-5"], [1, "profile-info-left"], [1, "user-name", "m-t-0", "mb-0"], [1, "text-muted"], [1, "staff-id"], [1, "small", "doj", "text-muted"], [1, "col-md-7"], [1, "personal-info"], [1, "clearfix"], [1, "title"], [1, "text"], ["class", "text", 4, "ngIf"], [4, "ngIf"], [1, "pro-edit", "hover-item"], [1, "nav-link", 2, "cursor", "pointer", "color", "blue", 3, "click"], ["id", "profile_info", "class", "modal custom-modal backdrop", "role", "dialog", 3, "ngStyle", 4, "ngIf"], [1, "col-md-12", "d-flex"], [1, "card", "mt-3", "profile-box", "flex-fill"], [1, "card-title"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["class", "ml-3", 4, "ngIf"], [1, "ml-3"], ["id", "profile_info", "role", "dialog", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["style", "position: absolute; left: 15px", "class", "text-danger", 4, "ngIf"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "text-danger", 2, "position", "absolute", "left", "15px"], [1, "col-md-4"], [1, "leave-info-box"], [1, "media", "align-items-center"], ["href", "javascript:void(0)", 1, "avatar"], ["alt", "user", 3, "src"], [1, "media-body"], [1, "text-sm", "my-0"]],
      template: function EmployeeDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Employee Id : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Supervisor : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Date Of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Marital status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, EmployeeDashboardComponent_div_61_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Imigration Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, EmployeeDashboardComponent_span_66_Template, 2, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_a_click_68_listener($event) {
            return ctx.navigateToMyProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, EmployeeDashboardComponent_div_70_Template, 12, 6, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Direct Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, EmployeeDashboardComponent_div_78_Template, 16, 5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pictureUrl + (ctx.profile == null ? null : ctx.profile.photoPath), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.fullName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.designation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.employeeId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Date of Join : ", ctx.profile == null ? null : ctx.profile.dateOfJoining, " (", ctx.profile == null ? null : ctx.profile.duration, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.reportingToEmployeeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", (ctx.profile == null ? null : ctx.profile.email) || "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", (ctx.profile == null ? null : ctx.profile.dateOfBirth) || "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", (ctx.profile == null ? null : ctx.profile.nationality) || "-", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile == null ? null : ctx.profile.maritalStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile == null ? null : ctx.profile.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileinfo == "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profile == null ? null : ctx.profile.directReports);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]],
      styles: [".welcome-box[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGFzaGJvYXJkL2VtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGFzaGJvYXJkL2VtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtYm94IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-dashboard',
          templateUrl: './employee-dashboard.component.html',
          styleUrls: ['./employee-dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _app_core_myprofile_myprofile_service__WEBPACK_IMPORTED_MODULE_6__["MyProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/employee-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/employee/employee-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
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


    var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-dashboard/employee-dashboard.component */
    "./src/app/employee/employee-dashboard/employee-dashboard.component.ts");
    /* harmony import */


    var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/myprofile/myprofile.component */
    "./src/app/core/myprofile/myprofile.component.ts");
    /* harmony import */


    var _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/custommodules/notes/notes.component */
    "./src/app/core/custommodules/notes/notes.component.ts");
    /* harmony import */


    var _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/custommodules/timesheets/timesheets.component */
    "./src/app/core/custommodules/timesheets/timesheets.component.ts");
    /* harmony import */


    var _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/custommodules/w4/w4.component */
    "./src/app/core/custommodules/w4/w4.component.ts");
    /* harmony import */


    var _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/custommodules/i9/i9.component */
    "./src/app/core/custommodules/i9/i9.component.ts");
    /* harmony import */


    var _app_core_custommodules_immigrations_immigrations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/custommodules/immigrations/immigrations.component */
    "./src/app/core/custommodules/immigrations/immigrations.component.ts");
    /* harmony import */


    var _app_core_myprofile_profile_documents_profile_documents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/core/myprofile/profile-documents/profile-documents.component */
    "./src/app/core/myprofile/profile-documents/profile-documents.component.ts");
    /* harmony import */


    var _app_core_myprofile_profile_project_documents_profile_project_documents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/core/myprofile/profile-project-documents/profile-project-documents.component */
    "./src/app/core/myprofile/profile-project-documents/profile-project-documents.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_advance_advance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/advance/advance.component */
    "./src/app/core/custommodules/payhistory/advance/advance.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_advance_view_advance_view_advance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/advance/view-advance/view-advance.component */
    "./src/app/core/custommodules/payhistory/advance/view-advance/view-advance.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_deductions_deduction_view_deduction_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/deductions/deduction-view/deduction-view.component */
    "./src/app/core/custommodules/payhistory/deductions/deduction-view/deduction-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_deductions_deductions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/deductions/deductions.component */
    "./src/app/core/custommodules/payhistory/deductions/deductions.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_payrate_payrate_view_payrate_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/payrate/payrate-view/payrate-view.component */
    "./src/app/core/custommodules/payhistory/payrate/payrate-view/payrate-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_payrate_payrate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/payrate/payrate.component */
    "./src/app/core/custommodules/payhistory/payrate/payrate.component.ts");
    /* harmony import */


    var _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/core/custommodules/paystubs/paystubs.component */
    "./src/app/core/custommodules/paystubs/paystubs.component.ts");
    /* harmony import */


    var _app_core_myprofile_profile_supplier_documents_profile_supplier_documents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/core/myprofile/profile-supplier-documents/profile-supplier-documents.component */
    "./src/app/core/myprofile/profile-supplier-documents/profile-supplier-documents.component.ts");
    /* harmony import */


    var _app_core_custommodules_requests_requests_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @app/core/custommodules/requests/requests.component */
    "./src/app/core/custommodules/requests/requests.component.ts");
    /* harmony import */


    var _app_core_custommodules_requests_view_request_view_request_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/core/custommodules/requests/view-request/view-request.component */
    "./src/app/core/custommodules/requests/view-request/view-request.component.ts");

    var routes = [{
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    }, {
      path: "dashboard",
      component: _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDashboardComponent"]
    }, {
      path: "myprofile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"]
    }, {
      path: "timesheets",
      component: _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_5__["TimesheetsComponent"]
    }, {
      path: "w4",
      component: _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_6__["W4Component"]
    }, {
      path: "i9",
      component: _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_7__["I9Component"]
    }, {
      path: "notes",
      component: _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"]
    }, {
      path: "requests",
      component: _app_core_custommodules_requests_requests_component__WEBPACK_IMPORTED_MODULE_19__["RequestsComponent"]
    }, {
      path: "requests/request/view",
      component: _app_core_custommodules_requests_view_request_view_request_component__WEBPACK_IMPORTED_MODULE_20__["ViewRequestComponent"]
    }, {
      path: "immigrations",
      component: _app_core_custommodules_immigrations_immigrations_component__WEBPACK_IMPORTED_MODULE_8__["ImmigrationsComponent"]
    }, {
      path: "documents",
      component: _app_core_myprofile_profile_documents_profile_documents_component__WEBPACK_IMPORTED_MODULE_9__["ProfileDocumentsComponent"]
    }, {
      path: "projectDocuments",
      component: _app_core_myprofile_profile_project_documents_profile_project_documents_component__WEBPACK_IMPORTED_MODULE_10__["ProfileProjectDocumentsComponent"]
    }, {
      path: "supplierDocuments",
      component: _app_core_myprofile_profile_supplier_documents_profile_supplier_documents_component__WEBPACK_IMPORTED_MODULE_18__["ProfileSupplierDocumentsComponent"]
    }, {
      path: "deductions",
      component: _app_core_custommodules_payhistory_deductions_deductions_component__WEBPACK_IMPORTED_MODULE_14__["DeductionsComponent"]
    }, {
      path: "deductions/deduction/view",
      component: _app_core_custommodules_payhistory_deductions_deduction_view_deduction_view_component__WEBPACK_IMPORTED_MODULE_13__["DeductionViewComponent"]
    }, {
      path: "payrate",
      component: _app_core_custommodules_payhistory_payrate_payrate_component__WEBPACK_IMPORTED_MODULE_16__["PayrateComponent"]
    }, {
      path: "payrate/view",
      component: _app_core_custommodules_payhistory_payrate_payrate_view_payrate_view_component__WEBPACK_IMPORTED_MODULE_15__["PayrateViewComponent"]
    }, {
      path: "advances",
      component: _app_core_custommodules_payhistory_advance_advance_component__WEBPACK_IMPORTED_MODULE_11__["AdvanceComponent"]
    }, {
      path: "advances/advance/view",
      component: _app_core_custommodules_payhistory_advance_view_advance_view_advance_component__WEBPACK_IMPORTED_MODULE_12__["ViewAdvanceComponent"]
    }, {
      path: "paystub",
      component: _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_17__["PaystubsComponent"]
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeRoutingModule
    });
    EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
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
  "./src/app/employee/employee.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/employee/employee.module.ts ***!
    \*********************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
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


    var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-dashboard/employee-dashboard.component */
    "./src/app/employee/employee-dashboard/employee-dashboard.component.ts");
    /* harmony import */


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/employee/employee-routing.module.ts");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
    EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, {
        declarations: [_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=employee-employee-module-es5.js.map