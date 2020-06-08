function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_chart_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/chart/chart */
    "./src/app/components/chart/chart.ts");

    var AdminDashboardComponent = /*#__PURE__*/function () {
      function AdminDashboardComponent() {
        _classCallCheck(this, AdminDashboardComponent);

        this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: '#ff9b44',
            borderColor: '#ff9b44',
            data: [65, 59, 80, 81, 56, 55, 40]
          }, {
            label: 'My Second dataset',
            backgroundColor: '#fc6075',
            borderColor: '#fc6075',
            data: [28, 48, 40, 19, 86, 27, 90]
          }]
        };
        this.data2 = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#ff9b44'
          }, {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#fc6075'
          }]
        };
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)();
    };

    AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 772,
      vars: 2,
      consts: [[1, "page-wrapper", 2, "min-height", "657px"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "breadcrumb"], [1, "breadcrumb-item", "active"], [1, "col-md-6", "col-sm-6", "col-lg-6", "col-xl-3"], [1, "card", "dash-widget"], [1, "card-body"], [1, "dash-widget-icon"], [1, "fa", "fa-cubes"], [1, "dash-widget-info"], [1, "fa", "fa-usd"], [1, "fa", "fa-diamond"], [1, "fa", "fa-user"], [1, "col-md-12"], [1, "col-md-6", "text-center"], [1, "card"], [1, "card-title"], ["type", "bar", 3, "data"], ["type", "line", 3, "data"], [1, "card-group", "m-b-30"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "d-block"], [1, "text-success"], [1, "mb-3"], [1, "progress", "mb-2", 2, "height", "5px"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], [1, "mb-0"], [1, "text-muted"], [1, "text-danger"], [1, "col-md-12", "col-lg-12", "col-xl-4", "d-flex"], [1, "card", "flex-fill", "dash-statistics"], [1, "stats-list"], [1, "stats-info"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "31", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "31%"], ["role", "progressbar", "aria-valuenow", "31", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "31%"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "62%"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "62%"], ["role", "progressbar", "aria-valuenow", "22", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "22%"], [1, "col-md-12", "col-lg-6", "col-xl-4", "d-flex"], [1, "card", "flex-fill"], [1, "statistics"], [1, "col-md-6", "col-6", "text-center"], [1, "stats-box", "mb-4"], [1, "progress", "mb-4"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-purple", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "18", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "22%"], ["role", "progressbar", "aria-valuenow", "12", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "24%"], ["role", "progressbar", "aria-valuenow", "14", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "26%"], ["role", "progressbar", "aria-valuenow", "14", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "10%"], [1, "fa", "fa-dot-circle-o", "text-purple", "mr-2"], [1, "float-right"], [1, "fa", "fa-dot-circle-o", "text-warning", "mr-2"], [1, "fa", "fa-dot-circle-o", "text-success", "mr-2"], [1, "fa", "fa-dot-circle-o", "text-danger", "mr-2"], [1, "fa", "fa-dot-circle-o", "text-info", "mr-2"], [1, "badge", "bg-inverse-danger", "ml-2"], [1, "leave-info-box"], [1, "media", "align-items-center"], ["href", "profile.html", 1, "avatar"], ["alt", "", "src", "assets/img/user.jpg"], [1, "media-body"], [1, "text-sm", "my-0"], [1, "row", "align-items-center", "mt-3"], [1, "col-6"], [1, "text-sm", "text-muted"], [1, "col-6", "text-right"], [1, "badge", "bg-inverse-danger"], [1, "badge", "bg-inverse-success"], [1, "load-more", "text-center"], ["href", "javascript:void(0);", 1, "text-dark"], [1, "col-md-6", "d-flex"], [1, "card", "card-table", "flex-fill"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "table-responsive"], [1, "table", "table-nowrap", "custom-table", "mb-0"], ["href", "invoice-view.html"], ["href", "#"], [1, "badge", "bg-inverse-warning"], [1, "card-footer"], ["href", "invoices.html"], [1, "table", "custom-table", "table-nowrap", "mb-0"], ["href", "payments.html"], [1, "table", "custom-table", "mb-0"], [1, "text-right"], [1, "table-avatar"], ["href", "#", 1, "avatar"], ["alt", "", "src", "assets/img/profiles/avatar-19.jpg"], ["href", "javascript:void(0)"], [1, "dropdown", "action-label"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "btn-sm", "btn-rounded", "dropdown-toggle"], [1, "fa", "fa-dot-circle-o", "text-success"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "fa", "fa-dot-circle-o", "text-danger"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "fa", "fa-ellipsis-v"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "fa", "fa-pencil", "m-r-5"], [1, "fa", "fa-trash-o", "m-r-5"], [1, "avatar"], ["alt", "", "src", "assets/img/profiles/avatar-07.jpg"], ["href", "client-profile.html", 1, "avatar"], ["alt", "", "src", "assets/img/profiles/avatar-06.jpg"], ["href", "client-profile.html"], ["alt", "", "src", "assets/img/profiles/avatar-14.jpg"], [1, "block", "text-ellipsis"], [1, "progress", "progress-xs", "progress-striped"], ["role", "progressbar", "data-toggle", "tooltip", "title", "", "data-original-title", "65%", 1, "progress-bar", 2, "width", "65%"], ["role", "progressbar", "data-toggle", "tooltip", "title", "", "data-original-title", "15%", 1, "progress-bar", 2, "width", "15%"], ["role", "progressbar", "data-toggle", "tooltip", "title", "", "data-original-title", "49%", 1, "progress-bar", 2, "width", "49%"], ["href", "project-view.html"], ["role", "progressbar", "data-toggle", "tooltip", "title", "", "data-original-title", "88%", 1, "progress-bar", 2, "width", "88%"], ["role", "progressbar", "data-toggle", "tooltip", "title", "", "data-original-title", "100%", 1, "progress-bar", 2, "width", "100%"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "112");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "37");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "218");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total Revenue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "p-chart", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sales Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "p-chart", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "New Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "+10%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Overall Employees 218");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Earnings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "+12.5%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "$1,42,300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Previous Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "$1,15,852");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Expenses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "-2.8%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "$8,500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Previous Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "$7,500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Profit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "-75%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "$1,12,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Previous Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "$1,42,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Today Leave ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "/ 65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Pending Invoice ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "15 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "/ 92");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Completed Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "85 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "/ 112");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Open Tickets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "190 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "/ 212");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Closed Tickets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "22 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "/ 212");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Task Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Total Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "385");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Overdue Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "22%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "24%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "21%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "10%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Completed Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "166");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Inprogress Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "115");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "On Hold Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "31");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Pending Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "47");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Review Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Today Absent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Martin Lewis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "4 Sep 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Leave Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Martin Lewis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "4 Sep 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Leave Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Approved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Load More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h3", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Invoices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "table", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Invoice ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Due Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "#INV-0001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Global Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "11 Mar 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "$380");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Partially Paid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "#INV-0002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Delta Infotech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "8 Feb 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "$500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Paid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "#INV-0003");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Cream Inc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "23 Jan 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "$60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Unpaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "View all invoices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "h3", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "table", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Invoice ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Payment Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Paid Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Paid Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "#INV-0001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Global Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Paypal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "11 Mar 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "$380");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "#INV-0002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Delta Infotech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Paypal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "8 Feb 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "$500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "#INV-0003");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Cream Inc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Paypal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "23 Jan 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "$60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "a", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "View all payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h3", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "table", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "th", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "h2", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Barry Cuda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "barrycuda@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " Active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, " Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "h2", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Tressa Wexler ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "tressawexler@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, " Inactive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, " Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "h2", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "a", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "Ruby Bartlett ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "rubybartlett@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, " Inactive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, " Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "h2", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "a", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, " Misty Tison ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "mistytison@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](555, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " Active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](559, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, " Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](567, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](573, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "h2", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "a", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, " Daniel Deacon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "danieldeacon@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, " Inactive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](596, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, " Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](607, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "View all clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "h3", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "Recent Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "table", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "Project Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "Progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "th", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "Office Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "small", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "open tasks, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "tasks completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](645, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](649, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](652, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](655, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "Project Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "small", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "open tasks, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "tasks completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](673, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](677, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](680, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](683, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "Video Calling App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "small", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "open tasks, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "tasks completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](701, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](705, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](708, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](711, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "a", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "Hospital Administration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "small", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "open tasks, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "tasks completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](729, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](736, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "a", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "Digital Marketplace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "small", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "open tasks, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "tasks completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](757, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](761, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](764, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](767, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "View all projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data2);
        }
      },
      directives: [_components_chart_chart__WEBPACK_IMPORTED_MODULE_1__["UIChart"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-dashboard',
          templateUrl: './admin-dashboard.component.html',
          styleUrls: ['./admin-dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

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


    var src_app_admin_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/admin/employeeinfo/employeeinfo.component */
    "./src/app/admin/employeeinfo/employeeinfo.component.ts");
    /* harmony import */


    var _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./departments/departments.component */
    "./src/app/admin/departments/departments.component.ts");
    /* harmony import */


    var _designations_designations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./designations/designations.component */
    "./src/app/admin/designations/designations.component.ts");
    /* harmony import */


    var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/myprofile/myprofile.component */
    "./src/app/core/myprofile/myprofile.component.ts");
    /* harmony import */


    var _company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./company/company.component */
    "./src/app/admin/company/company.component.ts");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/admin/project/project.component.ts");
    /* harmony import */


    var _departments_category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./departments-category/category.component */
    "./src/app/admin/departments-category/category.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: src_app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]
    }, {
      path: 'employees',
      component: src_app_admin_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeinfoComponent"]
    }, {
      path: 'departments',
      component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentsComponent"]
    }, {
      path: 'designation',
      component: _designations_designations_component__WEBPACK_IMPORTED_MODULE_5__["DesignationsComponent"]
    }, {
      path: 'myprofile',
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_6__["MyprofileComponent"]
    }, {
      path: 'employee/:id/profile',
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_6__["MyprofileComponent"]
    }, {
      path: 'company',
      component: _company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"]
    }, {
      path: 'projects',
      component: _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"]
    }, {
      path: 'category',
      component: _departments_category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"]
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


    var _employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./employeeinfo/employeeinfo.component */
    "./src/app/admin/employeeinfo/employeeinfo.component.ts");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/button/button */
    "./src/app/components/button/button.ts");
    /* harmony import */


    var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/dialog/dialog */
    "./src/app/components/dialog/dialog.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/dropdown/dropdown */
    "./src/app/components/dropdown/dropdown.ts");
    /* harmony import */


    var _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/confirmdialog/confirmdialog */
    "./src/app/components/confirmdialog/confirmdialog.ts");
    /* harmony import */


    var _components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _components_chart_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../components/chart/chart */
    "./src/app/components/chart/chart.ts");
    /* harmony import */


    var _departments_departments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./departments/departments.component */
    "./src/app/admin/departments/departments.component.ts");
    /* harmony import */


    var _designations_designations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./designations/designations.component */
    "./src/app/admin/designations/designations.component.ts");
    /* harmony import */


    var _departments_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./departments/add-department/add-department.component */
    "./src/app/admin/departments/add-department/add-department.component.ts");
    /* harmony import */


    var _departments_edit_department_edit_department_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./departments/edit-department/edit-department.component */
    "./src/app/admin/departments/edit-department/edit-department.component.ts");
    /* harmony import */


    var _designations_add_edit_designation_add_edit_designation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./designations/add-edit-designation/add-edit-designation.component */
    "./src/app/admin/designations/add-edit-designation/add-edit-designation.component.ts");
    /* harmony import */


    var _employeeinfo_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./employeeinfo/add-employee/add-employee.component */
    "./src/app/admin/employeeinfo/add-employee/add-employee.component.ts");
    /* harmony import */


    var _employeeinfo_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./employeeinfo/edit-employee/edit-employee.component */
    "./src/app/admin/employeeinfo/edit-employee/edit-employee.component.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @app/shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");
    /* harmony import */


    var _app_components_public_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @app/components/public_api */
    "./src/app/components/public_api.ts");
    /* harmony import */


    var _company_company_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./company/company.component */
    "./src/app/admin/company/company.component.ts");
    /* harmony import */


    var _company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./company/add-company/add-company.component */
    "./src/app/admin/company/add-company/add-company.component.ts");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/admin/project/project.component.ts");
    /* harmony import */


    var _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./project/add-project/add-project.component */
    "./src/app/admin/project/add-project/add-project.component.ts");
    /* harmony import */


    var _departments_category_category_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./departments-category/category.component */
    "./src/app/admin/departments-category/category.component.ts");
    /* harmony import */


    var _departments_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./departments-category/add-category/add-category.component */
    "./src/app/admin/departments-category/add-category/add-category.component.ts");

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
      providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_24__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_14__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedServiceModule"], src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"]], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedServiceModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"], _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_23__["DisplayStatus"], _company_company_component__WEBPACK_IMPORTED_MODULE_25__["CompanyComponent"], _company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_26__["AddCompanyComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_27__["ProjectComponent"], _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_28__["AddProjectComponent"], _departments_category_category_component__WEBPACK_IMPORTED_MODULE_29__["CategoryComponent"], _departments_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_30__["AddCategoryComponent"], _employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeinfoComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentsComponent"], _designations_designations_component__WEBPACK_IMPORTED_MODULE_16__["DesignationsComponent"], _designations_add_edit_designation_add_edit_designation_component__WEBPACK_IMPORTED_MODULE_19__["AddEditDesignationComponent"], _departments_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_17__["AddDepartmentComponent"], _departments_edit_department_edit_department_component__WEBPACK_IMPORTED_MODULE_18__["EditDepartmentComponent"], _employeeinfo_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__["AddEmployeeComponent"], _employeeinfo_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_21__["EditEmployeeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_24__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_14__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedServiceModule"], src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"]],
        exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedServiceModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"], _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_23__["DisplayStatus"], _company_company_component__WEBPACK_IMPORTED_MODULE_25__["CompanyComponent"], _company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_26__["AddCompanyComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_27__["ProjectComponent"], _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_28__["AddProjectComponent"], _departments_category_category_component__WEBPACK_IMPORTED_MODULE_29__["CategoryComponent"], _departments_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_30__["AddCategoryComponent"], _employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeinfoComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentsComponent"], _designations_designations_component__WEBPACK_IMPORTED_MODULE_16__["DesignationsComponent"], _designations_add_edit_designation_add_edit_designation_component__WEBPACK_IMPORTED_MODULE_19__["AddEditDesignationComponent"], _departments_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_17__["AddDepartmentComponent"], _departments_edit_department_edit_department_component__WEBPACK_IMPORTED_MODULE_18__["EditDepartmentComponent"], _employeeinfo_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__["AddEmployeeComponent"], _employeeinfo_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_21__["EditEmployeeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_24__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_14__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedServiceModule"], src_app_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"]],
          exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedServiceModule"]],
          providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/company/add-company/add-company.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/company/add-company/add-company.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddCompanyComponent */

  /***/
  function srcAppAdminCompanyAddCompanyAddCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
      return AddCompanyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_company_module_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/company-module.model */
    "./src/app/shared/models/company-module.model.ts");
    /* harmony import */


    var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../company.service */
    "./src/app/admin/company/company.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/service/auth.service */
    "./src/app/core/service/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/inputtextarea/inputtextarea */
    "./src/app/components/inputtextarea/inputtextarea.ts");

    function AddCompanyComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1955 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1955.errLabel, " ");
      }
    }

    function AddCompanyComponent_i_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    function AddCompanyComponent_i_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 38);
      }
    }

    function AddCompanyComponent_div_111_Template(rf, ctx) {
      if (rf & 1) {
        var _r1969 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_textarea_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1968 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1968.company.company2Address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1970 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1970.company.companyEmail2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1971 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1971.company.companyPhone2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Phone Extn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1972 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1972.company.companyPhone2Extn = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Contact Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1973 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1973.company.companyContact2Name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company Contact Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1974 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1974.company.companyContact2Title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Company Contact Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1975 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1975.company.companyContact2Email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Company Contact Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_111_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1969);

          var ctx_r1976 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1976.company.companyContact2Phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1958 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.company2Address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyEmail2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyPhone2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyPhone2Extn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyContact2Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyContact2Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyContact2Email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1958.company.companyContact2Phone);
      }
    }

    function AddCompanyComponent_i_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    function AddCompanyComponent_i_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 38);
      }
    }

    function AddCompanyComponent_div_119_Template(rf, ctx) {
      if (rf & 1) {
        var _r1978 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_textarea_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1977 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1977.company.company3Address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1979 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1979.company.companyEmail3 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1980 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1980.company.companyPhone3 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Phone Extn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1981 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1981.company.companyPhone3Extn = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Contact Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1982 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1982.company.companyContact3Name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company Contact Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1983 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1983.company.companyContact3Title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Company Contact Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1984 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1984.company.companyContact3Email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Company Contact Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_119_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1978);

          var ctx_r1985 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1985.company.companyContact3Phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1961 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.company3Address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyEmail3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyPhone3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyPhone3Extn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyContact3Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyContact3Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyContact3Email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1961.company.companyContact3Phone);
      }
    }

    function AddCompanyComponent_i_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    function AddCompanyComponent_i_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 38);
      }
    }

    function AddCompanyComponent_div_127_Template(rf, ctx) {
      if (rf & 1) {
        var _r1987 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_textarea_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1986 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1986.company.company4Address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1988 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1988.company.companyEmail4 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1989 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1989.company.companyPhone4 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Phone Extn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1990 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1990.company.companyPhone4Extn = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Contact Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1991 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1991.company.companyContact4Name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company Contact Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1992 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1992.company.companyContact4Title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Company Contact Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1993 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1993.company.companyContact4Email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Company Contact Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_127_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1987);

          var ctx_r1994 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1994.company.companyContact4Phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1964 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.company4Address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyEmail4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyPhone4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyPhone4Extn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyContact4Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyContact4Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyContact4Email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1964.company.companyContact4Phone);
      }
    }

    function AddCompanyComponent_i_133_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    function AddCompanyComponent_i_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 38);
      }
    }

    function AddCompanyComponent_div_135_Template(rf, ctx) {
      if (rf & 1) {
        var _r1996 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_textarea_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r1995 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1995.company.company5Address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r1997 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1997.company.companyEmail5 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r1998 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1998.company.companyPhone5 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Phone Extn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r1999 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1999.company.companyPhone5Extn = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Contact Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r2000 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2000.company.companyContact5Name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company Contact Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r2001 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2001.company.companyContact5Title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Company Contact Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r2002 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2002.company.companyContact5Email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Company Contact Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_div_135_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1996);

          var ctx_r2003 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2003.company.companyContact5Phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1967 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.company5Address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyEmail5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyPhone5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyPhone5Extn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyContact5Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyContact5Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyContact5Email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1967.company.companyContact5Phone);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var AddCompanyComponent = /*#__PURE__*/function () {
      function AddCompanyComponent(companyService, sharedService, authService) {
        _classCallCheck(this, AddCompanyComponent);

        this.companyService = companyService;
        this.sharedService = sharedService;
        this.authService = authService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addemployeeDisplay = "none"; //this.company = new Company();
        //this.company.organizationDetailsId = this.authService.currentUser.organizationDetailsId;
      }

      _createClass(AddCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.companyType == 'Add') {
            this.company = new _app_shared_models_company_module_model__WEBPACK_IMPORTED_MODULE_1__["Company"]();
          }

          this.showDialogToAdd();
          this.company.organizationDetailsId = this.authService.currentUser.organizationDetailsId;
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.addemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "checkCompanyAlreadyExist",
        value: function checkCompanyAlreadyExist() {
          var _this = this;

          this.companyService.isCompanyExists(this.company.companyName).subscribe(function (res) {
            if (res.statusCode != 200) {
              _this.errLabel = res.message;
              _this.company.companyName = "";
            }
          }, function (error) {
            _this.errLabel = error;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          if (this.companyType == 'Add') {
            this.companyService.addCompany(this.company).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this2.addemployeeDisplay = "none";

                _this2.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this2.displayScroll();

                _this2.onClose.emit({
                  type: 'add'
                });
              } else {
                _this2.errLabel = res.message;
              }
            }, function (error) {
              _this2.errLabel = error;
            });
          } else {
            this.companyService.updateCompany(this.company).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this2.addemployeeDisplay = "none";

                _this2.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this2.displayScroll();

                _this2.onClose.emit({
                  type: 'edit',
                  company: _this2.company
                });
              } else {
                _this2.errLabel = res.message;
              }
            }, function (error) {
              _this2.errLabel = error;
            });
          }
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: 'cancel'
          });
        }
      }]);

      return AddCompanyComponent;
    }();

    AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) {
      return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddCompanyComponent,
      selectors: [["app-add-company"]],
      inputs: {
        companyType: "companyType",
        company: "company"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 139,
      vars: 28,
      consts: [["id", "add_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "name", "companyName", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["pInputText", "", "name", "desc", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "eiNumber", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyWebsite", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-12"], ["rows", "5", "cols", "1", "name", "company1Address", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyEmail1", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone1", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone1Extn", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact1Name", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact1Title", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact1Email", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact1Phone", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-title", 3, "click"], [1, "pull-right"], ["class", "fa fa-angle-down", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-angle-up", "aria-hidden", "true", 4, "ngIf"], [1, "submit-section"], ["type", "button", 1, "btn", "btn-primary", "submit-btn", 3, "click"], [1, "col-sm-6", 2, "color", "red"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], ["aria-hidden", "true", 1, "fa", "fa-angle-up"], ["rows", "5", "cols", "1", "name", "company2Address", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyEmail2", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone2", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone2Extn", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact2Name", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact2Title", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact2Email", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact2Phone", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "5", "cols", "1", "name", "company3Address", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyEmail3", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone3", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone3Extn", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact3Name", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact3Title", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact3Email", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact3Phone", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "5", "cols", "1", "name", "company4Address", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyEmail4", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone4", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone4Extn", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact4Name", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact4Title", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact4Email", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact4Phone", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "5", "cols", "1", "name", "company5Address", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyEmail5", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone5", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyPhone5Extn", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact5Name", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact5Title", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact5Email", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "companyContact5Phone", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function AddCompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddCompanyComponent_div_11_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Company Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Company Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddCompanyComponent_Template_input_blur_23_listener($event) {
            return ctx.checkCompanyAlreadyExist();
          })("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.company.companyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.company.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "EI Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.company.eiNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Company Website ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.company.companyWebsite = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Company 1 Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Company Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_textarea_ngModelChange_56_listener($event) {
            return ctx.company.company1Address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Company Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.company.companyEmail1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Company Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.company.companyPhone1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Company Phone Extn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_75_listener($event) {
            return ctx.company.companyPhone1Extn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Company Contact Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_82_listener($event) {
            return ctx.company.companyContact1Name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Company Contact Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_89_listener($event) {
            return ctx.company.companyContact1Title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Company Contact Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_96_listener($event) {
            return ctx.company.companyContact1Email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Company Contact Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_103_listener($event) {
            return ctx.company.companyContact1Phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_h3_click_106_listener($event) {
            return ctx.displayCompany2 = !ctx.displayCompany2;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Company 2 Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AddCompanyComponent_i_109_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AddCompanyComponent_i_110_Template, 1, 0, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AddCompanyComponent_div_111_Template, 41, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_h3_click_114_listener($event) {
            return ctx.displayCompany3 = !ctx.displayCompany3;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Company 3 Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, AddCompanyComponent_i_117_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, AddCompanyComponent_i_118_Template, 1, 0, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AddCompanyComponent_div_119_Template, 41, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_h3_click_122_listener($event) {
            return ctx.displayCompany4 = !ctx.displayCompany4;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Company 4 Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, AddCompanyComponent_i_125_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, AddCompanyComponent_i_126_Template, 1, 0, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, AddCompanyComponent_div_127_Template, 41, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_h3_click_130_listener($event) {
            return ctx.displayCompany5 = !ctx.displayCompany5;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Company 5 Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, AddCompanyComponent_i_133_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, AddCompanyComponent_i_134_Template, 1, 0, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, AddCompanyComponent_div_135_Template, 41, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_137_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.addemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.eiNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyWebsite);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.company1Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyEmail1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyPhone1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyPhone1Extn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyContact1Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyContact1Title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyContact1Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyContact1Phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayCompany2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayCompany3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayCompany4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayCompany5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCompany5);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextarea"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBhbnkvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-company',
          templateUrl: './add-company.component.html',
          styleUrls: ['./add-company.component.css']
        }]
      }], function () {
        return [{
          type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, {
        companyType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        company: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/company/company.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/company/company.component.ts ***!
    \****************************************************/

  /*! exports provided: CompanyComponent */

  /***/
  function srcAppAdminCompanyCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
      return CompanyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company.service */
    "./src/app/admin/company/company.service.ts");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-company/add-company.component */
    "./src/app/admin/company/add-company/add-company.component.ts");
    /* harmony import */


    var _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");

    function CompanyComponent_div_17_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1776 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CompanyComponent_div_17_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1776);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1770 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1770.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanyComponent_div_17_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1779 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1779.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1779.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1779.field);
      }
    }

    function CompanyComponent_div_17_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1777 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1777);
      }
    }

    function CompanyComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1783 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1780 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1780[col_r1783.field]), " ");
      }
    }

    function CompanyComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1783 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1780 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1780[col_r1783.field], " ");
      }
    }

    function CompanyComponent_div_17_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompanyComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1783 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1783.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1783.field != "status");
      }
    }

    function CompanyComponent_div_17_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1791 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyComponent_div_17_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_div_17_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1791);

          var rowData_r1780 = ctx.$implicit;

          var ctx_r1790 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1790.onRowSelect(rowData_r1780);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_div_17_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1791);

          var rowData_r1780 = ctx.$implicit;

          var ctx_r1792 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1792.onDelete(rowData_r1780);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1780 = ctx.$implicit;
        var columns_r1781 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1780);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1781);
      }
    }

    function CompanyComponent_div_17_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No companies found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    var _c1 = function _c1() {
      return ["companyName", "description", "eiNumber"];
    };

    function CompanyComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompanyComponent_div_17_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompanyComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1766 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1766.cols)("value", ctx_r1766.lstCompanies)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function CompanyComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1799 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CompanyComponent_div_19_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1799);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1793 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1793.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanyComponent_div_19_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1802 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1802.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1802.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1802.field);
      }
    }

    function CompanyComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1800 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1800);
      }
    }

    function CompanyComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1803[col_r1806.field]), " ");
      }
    }

    function CompanyComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1803[col_r1806.field], " ");
      }
    }

    function CompanyComponent_div_19_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompanyComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1806 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1806.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1806.field != "status");
      }
    }

    function CompanyComponent_div_19_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1814 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyComponent_div_19_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_div_19_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1814);

          var rowData_r1803 = ctx.$implicit;

          var ctx_r1813 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1813.onRowSelect(rowData_r1803);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_div_19_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1814);

          var rowData_r1803 = ctx.$implicit;

          var ctx_r1815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1815["delete"](rowData_r1803);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1803 = ctx.$implicit;
        var columns_r1804 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1803);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1804);
      }
    }

    function CompanyComponent_div_19_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No companies found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanyComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompanyComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompanyComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1767 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1767.cols)("value", ctx_r1767.lstCompanies)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function CompanyComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r1817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-company", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function CompanyComponent_ng_container_37_Template_app_add_company_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1817);

          var ctx_r1816 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1816.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1768 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("companyType", ctx_r1768.companyType);
      }
    }

    function CompanyComponent_ng_container_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r1819 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-company", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function CompanyComponent_ng_container_38_Template_app_add_company_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1819);

          var ctx_r1818 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1818.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1769 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("companyType", ctx_r1769.companyType)("company", ctx_r1769.company);
      }
    }

    var CompanyComponent = /*#__PURE__*/function () {
      function CompanyComponent(confirmationService, sharedService, companyService) {
        _classCallCheck(this, CompanyComponent);

        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.companyService = companyService;
        this.editCompanyDisplay = 'none';
        this.addCompanyDisplay = "none";
        this.loading = false;
        this.status = 1;
      }

      _createClass(CompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [// { field: 'departmentDetailsId', header: 'ID' },
          {
            field: 'companyName',
            header: 'Company Name'
          }, {
            field: 'description',
            header: 'Description'
          }, {
            field: 'eiNumber',
            header: 'EINumber'
          }];
          this.getComapnies();
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.status = 1;
            this.getComapnies(1);
          } else if (event.index == 1) {
            this.status = 0;
            this.getComapnies(0);
          }
        }
      }, {
        key: "getComapnies",
        value: function getComapnies() {
          var _this3 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.loading = true;
          this.lstCompanies = [];
          this.companyService.getAllCompanies(status).subscribe(function (res) {
            _this3.loading = false;
            _this3.lstCompanies = [];
            if (res.statusCode == 200) _this3.lstCompanies = res.responsePayload;
          }, function (error) {
            _this3.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.companyType = 'Add'; //this.hiddenScroll();
        }
      }, {
        key: "onDeptAddCloseClick",
        value: function onDeptAddCloseClick(event) {
          if (event.type == 'add') {
            this.getComapnies();
          } else if (event.type == 'edit') {
            this.getComapnies();
          }

          this.companyType = '';
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
        key: "save",
        value: function save() {
          this.displayScroll();
        }
      }, {
        key: "confirm",
        value: function confirm(rowData) {
          var _this4 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to Inactivate this data?',
            accept: function accept() {
              _this4["delete"](rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this5 = this;

          if (this.status == 1) {
            this.companyService.deactivateCompany(rowData.companyDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this5.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this5.displayDialog = false;

                _this5.getComapnies();
              } else {
                _this5.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });
              }
            });
          } else {
            this.companyService.activateCompany(rowData.companyDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this5.displayDialog = false;

                _this5.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this5.getComapnies(_this5.status);
              } else {
                _this5.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });
              }
            });
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.company = rowData;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.company = data;
          this.companyType = 'Edit'; // this.editemployeeDisplay = "block";
          // this.newCar = false;
          // this.car = this.cloneCar(data);
          // this.displayDialog = true;

          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editCompanyDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addCompanyDisplay = "none";
          this.displayScroll();
        }
      }]);

      return CompanyComponent;
    }();

    CompanyComponent.ɵfac = function CompanyComponent_Factory(t) {
      return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]));
    };

    CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyComponent,
      selectors: [["app-company"]],
      decls: 39,
      vars: 4,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Companies"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Companies"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [1, "fas", "fa-toggle-on"], [3, "companyType", "onClose"], [3, "companyType", "company", "onClose"]],
      template: function CompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function CompanyComponent_Template_p_tabView_onChange_15_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyComponent_div_17_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CompanyComponent_div_19_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inactive Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Are you sure want to Inactive the company?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_a_click_32_listener($event) {
            return ctx["delete"](ctx.company);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CompanyComponent_ng_container_37_Template, 2, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CompanyComponent_ng_container_38_Template, 2, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyType == "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyType == "Edit");
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"], _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_9__["AddCompanyComponent"]],
      pipes: [_app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__["DisplayStatus"]],
      styles: [".actions[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    text-align: center;    \r\n}\r\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\r\n    color: #777;\r\n}\r\n.actions[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    text-align: center;    \r\n}\r\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\r\n    color: #777;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\r\n    border-radius: 2px;\r\n    padding: 0.25em 0.5em;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\r\n    background-color: #c8e6c9;\r\n    color: #256029;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\r\n    background-color: #ffcdd2;\r\n    color: #c63737;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\r\n    background-color: #feedaf;\r\n    color: #8a5340;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\r\n    background-color: #b3e5fc;\r\n    color: #23547b;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\r\n    background-color: #eccfff;\r\n    color: #694382;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\r\n    background-color: #ffd8b2;\r\n    color: #805b36;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .flag {\r\n    vertical-align: middle;\r\n    width: 30px;\r\n    height: 20px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\r\n    vertical-align: middle;\r\n    width: 24px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\r\n    margin-top: 0.125em;\r\n    vertical-align: middle;\r\n    margin-left: 0.5em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\r\n    float: left;\r\n    width: auto;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\r\n    height: 8px;\r\n    background-color: #d8dadc;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\r\n    background-color: #00acad;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\r\n    display: block;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\r\n    width: 200px;\r\n    height: 33px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\r\n    min-width: 25em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\r\n    font-weight: 400;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\r\n    border: 0 none;\r\n    padding: 12px;\r\n    text-align: left;\r\n    font-size: 19px;\r\n    color: #ffffff;\r\n    background: #ffffff;\r\n    border-bottom: 1px solid #ff9b44;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\r\n    border: 0 none;\r\n    padding: 1em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\r\n    border: 0 none;\r\n    text-align: left;\r\n    border-bottom: 2px solid #dee2e6;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\r\n    border-top: 1px solid #c8c8c8;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\r\n    \r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\r\n    border: 0 none;\r\n    cursor: auto;\r\n    word-wrap: break-word;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\r\n    \r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\r\n    text-transform: uppercase;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 64em) {\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\r\n        display: none !important;\r\n   }\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\r\n        text-align: left;\r\n        display: block;\r\n        border: 0 none !important;\r\n        width: 100% !important;\r\n        float: left;\r\n        clear: left;\r\n        border: 0 none;\r\n   }\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\r\n        padding: 0.4em;\r\n        min-width: 30%;\r\n        display: inline-block;\r\n        margin: -0.4em 1em -0.4em -0.4em;\r\n        font-weight: bold;\r\n   }\r\n}\r\nh2.table-avatar[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: inline-flex;\r\n    font-size: inherit;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksK0dBQStHO0FBQ25IO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLHdCQUF3QjtHQUM3QjtJQUNDO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztHQUNuQjtJQUNDO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLGlCQUFpQjtHQUN0QjtBQUNIO0FBQ0M7SUFDRyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uc3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmFjdGlvbnMgLmFjdGlvbi1pY29ue1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcbi5hY3Rpb25zIC5hY3Rpb24taWNvbntcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1xdWFsaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcclxuICAgIGNvbG9yOiAjMjU2MDI5O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtdW5xdWFsaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcclxuICAgIGNvbG9yOiAjYzYzNzM3O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmVnb3RpYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWRhZjtcclxuICAgIGNvbG9yOiAjOGE1MzQwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmM7XHJcbiAgICBjb2xvcjogIzIzNTQ3YjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXJlbmV3YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjY2ZmZjtcclxuICAgIGNvbG9yOiAjNjk0MzgyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcHJvcG9zYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDhiMjtcclxuICAgIGNvbG9yOiAjODA1YjM2O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5mbGFnIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiBpbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24gc3BhbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjEyNWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3IgLnVpLXBhZ2luYXRvci1jdXJyZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYWRjO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wcm9ncmVzc2JhciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNhZDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kYXRlcGlja2VyIHtcclxuICAgIG1pbi13aWR0aDogMjVlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB0ZCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1jYXB0aW9uIHtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmOWI0NDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIHtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aC51aS1maWx0ZXItY29sdW1uIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQge1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kcm9wZG93bi1sYWJlbDpub3QoLnVpLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRlbSkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aCwgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjbGVhcjogbGVmdDtcclxuICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAudWktY29sdW1uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjRlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAtMC40ZW0gMWVtIC0wLjRlbSAtMC40ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxufVxyXG4gaDIudGFibGUtYXZhdGFyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-company',
          templateUrl: './company.component.html',
          styleUrls: ['./company.component.css']
        }]
      }], function () {
        return [{
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/company/company.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/company/company.service.ts ***!
    \**************************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppAdminCompanyCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CompanyService = /*#__PURE__*/function () {
      function CompanyService(http) {
        _classCallCheck(this, CompanyService);

        this.http = http;
      }

      _createClass(CompanyService, [{
        key: "getAllCompanies",
        value: function getAllCompanies(status) {
          return this.http.get("api/company/all?status=".concat(status));
        }
      }, {
        key: "getDepartment",
        value: function getDepartment(departmentDetailsId) {
          return this.http.get("api/department/".concat(departmentDetailsId));
        }
      }, {
        key: "addCompany",
        value: function addCompany(company) {
          return this.http.post("api/company/add", company);
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          return this.http.post('api/company/update', company);
        }
      }, {
        key: "activateCompany",
        value: function activateCompany(companyDetailsId) {
          return this.http.put("api/company/activate/".concat(companyDetailsId), {});
        }
      }, {
        key: "deactivateCompany",
        value: function deactivateCompany(companyDetailsId) {
          return this.http.put("api/company/deactivate/".concat(companyDetailsId), {});
        }
      }, {
        key: "isCompanyExists",
        value: function isCompanyExists(companyName) {
          return this.http.get("api/company/exists?companyName=".concat(companyName));
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ɵfac = function CompanyService_Factory(t) {
      return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CompanyService,
      factory: CompanyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments-category/add-category/add-category.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/departments-category/add-category/add-category.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AddCategoryComponent */

  /***/
  function srcAppAdminDepartmentsCategoryAddCategoryAddCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return AddCategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_document_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/document-category.model */
    "./src/app/shared/models/document-category.model.ts");
    /* harmony import */


    var _app_shared_models_documentcategory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/models/documentcategory.model */
    "./src/app/shared/models/documentcategory.model.ts");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../category.service */
    "./src/app/admin/departments-category/category.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/service/auth.service */
    "./src/app/core/service/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/checkbox/checkbox */
    "./src/app/components/checkbox/checkbox.ts");

    function AddCategoryComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2005 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2005.errLabel, " ");
      }
    }

    function AddCategoryComponent_ng_container_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r2010 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-checkbox", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function AddCategoryComponent_ng_container_35_Template_p_checkbox_onChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2010);

          var document_r2007 = ctx.$implicit;

          var ctx_r2009 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2009.documentCategoryChange(document_r2007, "read", $event);
        })("ngModelChange", function AddCategoryComponent_ng_container_35_Template_p_checkbox_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2010);

          var document_r2007 = ctx.$implicit;
          return document_r2007.read = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-checkbox", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function AddCategoryComponent_ng_container_35_Template_p_checkbox_onChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2010);

          var document_r2007 = ctx.$implicit;

          var ctx_r2012 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2012.documentCategoryChange(document_r2007, "write", $event);
        })("ngModelChange", function AddCategoryComponent_ng_container_35_Template_p_checkbox_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2010);

          var document_r2007 = ctx.$implicit;
          return document_r2007.write = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-checkbox", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function AddCategoryComponent_ng_container_35_Template_p_checkbox_onChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2010);

          var document_r2007 = ctx.$implicit;

          var ctx_r2014 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2014.documentCategoryChange(document_r2007, "delete", $event);
        })("ngModelChange", function AddCategoryComponent_ng_container_35_Template_p_checkbox_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2010);

          var document_r2007 = ctx.$implicit;
          return document_r2007["delete"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var document_r2007 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", document_r2007.documentCategory, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", document_r2007.read);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", document_r2007.write);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", document_r2007["delete"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var AddCategoryComponent = /*#__PURE__*/function () {
      function AddCategoryComponent(categoryService, sharedService, authService) {
        _classCallCheck(this, AddCategoryComponent);

        this.categoryService = categoryService;
        this.sharedService = sharedService;
        this.authService = authService;
        this.lstDocumentCategory = [];
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addemployeeDisplay = "none";
        this.roles = [{
          label: 'Super Admin',
          value: 'superAdminAccessType'
        }, {
          label: 'Admin',
          value: 'adminAccessType'
        }, {
          label: 'Accounts',
          value: 'accountsAccessType'
        }, {
          label: 'HR',
          value: 'hrAccessType'
        }, {
          label: 'Employee',
          value: 'employeeAccessType'
        }];
      }

      _createClass(AddCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.categoryType == 'Add') {
            this.category = new _app_shared_models_documentcategory_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
          }

          for (var index = 0; index < this.roles.length; index++) {
            var element = this.roles[index];
            var categoryItem = new _app_shared_models_document_category_model__WEBPACK_IMPORTED_MODULE_1__["DocumentCategory"]();
            categoryItem.documentCategory = element.label;
            categoryItem.value = element.value;
            this.lstDocumentCategory.push(categoryItem);
          }

          if (this.categoryType == 'Edit') {
            for (var key in this.category) {
              for (var _index = 0; _index < this.lstDocumentCategory.length; _index++) {
                var _element = this.lstDocumentCategory[_index];

                if (_element.value == key) {
                  if (this.category[key] == 3) {
                    _element["delete"] = true;
                  } else if (this.category[key] == 2) {
                    _element.write = true;
                  } else {
                    _element.read = true;
                  }
                }
              }
            }
          }

          this.showDialogToAdd();
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.department = new Department;
          this.addemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "checkProjectAlreadyExist",
        value: function checkProjectAlreadyExist() {
          var _this6 = this;

          this.categoryService.isDocumentCategoryExists(this.category.documentCategory).subscribe(function (res) {
            if (res.statusCode != 200) {
              _this6.errLabel = res.message;
              _this6.category.documentCategory = "";
            }
          }, function (error) {
            _this6.errLabel = error;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this7 = this;

          if (this.categoryType == 'Add') {
            for (var index = 0; index < this.lstDocumentCategory.length; index++) {
              var element = this.lstDocumentCategory[index];

              if (element["delete"]) {
                this.category[element.value] = 3;
              } else if (element.write) {
                this.category[element.value] = 2;
              } else {
                this.category[element.value] = 1;
              }
            }

            this.categoryService.addDocumentCategory(this.category).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this7.addemployeeDisplay = "none";

                _this7.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this7.displayScroll();

                _this7.onClose.emit({
                  type: 'add'
                });
              } else {
                _this7.errLabel = res.message;
              }
            }, function (error) {
              _this7.errLabel = error;
            });
          } else {
            this.categoryService.updateDocumentCategory(this.category).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this7.addemployeeDisplay = "none";

                _this7.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this7.displayScroll();

                _this7.onClose.emit({
                  type: 'edit',
                  project: _this7.category
                });
              } else {
                _this7.errLabel = res.message;
              }
            }, function (error) {
              _this7.errLabel = error;
            });
          }
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: 'cancel'
          });
        }
      }, {
        key: "documentCategoryChange",
        value: function documentCategoryChange(document, accessType, $event) {
          if (accessType == 'read' && $event.checked) {
            document.read = true;
            document.write = false;
            document["delete"] = false;
          } else if (accessType == 'write' && $event.checked) {
            document.read = false;
            document.write = true;
            document["delete"] = false;
          } else if (accessType == 'delete' && $event.checked) {
            document.read = false;
            document.write = false;
            document["delete"] = true;
          }
        }
      }]);

      return AddCategoryComponent;
    }();

    AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) {
      return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    AddCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddCategoryComponent,
      selectors: [["app-add-category"]],
      inputs: {
        categoryType: "categoryType",
        category: "category"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 39,
      vars: 6,
      consts: [["id", "add_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "name", "projectName", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "module-div"], [1, "col-6"], [1, "col-2", "check-box-div"], [4, "ngFor", "ngForOf"], [1, "submit-section"], ["type", "button", 1, "btn", "btn-primary", "submit-btn", 3, "click"], [1, "col-sm-6", 2, "color", "red"], ["binary", "true", 3, "ngModel", "onChange", "ngModelChange"]],
      template: function AddCategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Document Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddCategoryComponent_div_11_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Document Category Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddCategoryComponent_Template_input_blur_19_listener($event) {
            return ctx.checkProjectAlreadyExist();
          })("ngModelChange", function AddCategoryComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.category.documentCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Document Category Access");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Write ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddCategoryComponent_ng_container_35_Template, 15, 4, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_37_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.addemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.documentCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstDocumentCategory);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2RlcGFydG1lbnRzLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-category',
          templateUrl: './add-category.component.html',
          styleUrls: ['./add-category.component.css']
        }]
      }], function () {
        return [{
          type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, {
        categoryType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments-category/category.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/departments-category/category.component.ts ***!
    \******************************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppAdminDepartmentsCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category.service */
    "./src/app/admin/departments-category/category.service.ts");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-category/add-category.component */
    "./src/app/admin/departments-category/add-category/add-category.component.ts");
    /* harmony import */


    var _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");

    function CategoryComponent_div_17_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1885 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CategoryComponent_div_17_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1885);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1879 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1879.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoryComponent_div_17_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1888 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1888.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1888.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1888.field);
      }
    }

    function CategoryComponent_div_17_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1886 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1886);
      }
    }

    function CategoryComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1892 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1889 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1889[col_r1892.field]), " ");
      }
    }

    function CategoryComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1892 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1889 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1889[col_r1892.field], " ");
      }
    }

    function CategoryComponent_div_17_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1892 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1892.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1892.field != "status");
      }
    }

    function CategoryComponent_div_17_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_17_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_div_17_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1900);

          var rowData_r1889 = ctx.$implicit;

          var ctx_r1899 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1899.onRowSelect(rowData_r1889);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_div_17_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1900);

          var rowData_r1889 = ctx.$implicit;

          var ctx_r1901 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1901.onDelete(rowData_r1889);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1889 = ctx.$implicit;
        var columns_r1890 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1889);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1890);
      }
    }

    function CategoryComponent_div_17_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Document categories found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    var _c1 = function _c1() {
      return ["documentCategory", "status"];
    };

    function CategoryComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoryComponent_div_17_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1875 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1875.cols)("value", ctx_r1875.documentCategories)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function CategoryComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1908 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CategoryComponent_div_19_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1908);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1902 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1902.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoryComponent_div_19_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1911 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1911.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1911.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1911.field);
      }
    }

    function CategoryComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1909 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1909);
      }
    }

    function CategoryComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1912 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1912[col_r1915.field]), " ");
      }
    }

    function CategoryComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1912 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1912[col_r1915.field], " ");
      }
    }

    function CategoryComponent_div_19_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1915 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1915.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1915.field != "status");
      }
    }

    function CategoryComponent_div_19_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1923 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_19_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_div_19_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1923);

          var rowData_r1912 = ctx.$implicit;

          var ctx_r1922 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1922.onRowSelect(rowData_r1912);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_div_19_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1923);

          var rowData_r1912 = ctx.$implicit;

          var ctx_r1924 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1924["delete"](rowData_r1912);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1912 = ctx.$implicit;
        var columns_r1913 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1912);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1913);
      }
    }

    function CategoryComponent_div_19_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Document Category found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoryComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoryComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1876 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1876.cols)("value", ctx_r1876.documentCategories)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function CategoryComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r1926 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-category", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function CategoryComponent_ng_container_37_Template_app_add_category_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1926);

          var ctx_r1925 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1925.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1877 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryType", ctx_r1877.categoryType);
      }
    }

    function CategoryComponent_ng_container_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r1928 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-category", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function CategoryComponent_ng_container_38_Template_app_add_category_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1928);

          var ctx_r1927 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1927.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1878 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryType", ctx_r1878.categoryType)("category", ctx_r1878.documentCategory);
      }
    }

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(confirmationService, sharedService, categoryService) {
        _classCallCheck(this, CategoryComponent);

        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.categoryService = categoryService;
        this.editProjectDisplay = 'none';
        this.addProjectDisplay = "none";
        this.loading = false;
        this.status = 1;
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [// { field: 'departmentDetailsId', header: 'ID' },
          {
            field: 'documentCategory',
            header: 'Project Name'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.getCategories();
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.status = 1;
            this.getCategories(1);
          } else if (event.index == 1) {
            this.status = 0;
            this.getCategories(0);
          }
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this8 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.loading = true;
          this.documentCategories = [];
          this.categoryService.getAllDocumentCategory(status).subscribe(function (res) {
            _this8.loading = false;
            _this8.documentCategories = [];
            if (res.statusCode == 200) _this8.documentCategories = res.responsePayload;
          }, function (error) {
            _this8.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.categoryType = 'Add'; //this.hiddenScroll();
        }
      }, {
        key: "onDeptAddCloseClick",
        value: function onDeptAddCloseClick(event) {
          if (event.type == 'add') {
            this.getCategories();
          } else if (event.type == 'edit') {
            this.getCategories();
          }

          this.categoryType = '';
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
        key: "save",
        value: function save() {
          this.displayScroll();
        }
      }, {
        key: "confirm",
        value: function confirm(rowData) {
          var _this9 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to Inactivate this data?',
            accept: function accept() {
              _this9["delete"](rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this10 = this;

          if (this.status == 1) {
            this.categoryService.deactivateDocumentCategory(rowData.documentCategoryDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this10.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this10.displayDialog = false;

                _this10.getCategories();
              } else {
                _this10.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });
              }
            });
          } else {
            this.categoryService.activateDocumentCategory(rowData.documentCategoryDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this10.displayDialog = false;

                _this10.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this10.getCategories(_this10.status);
              } else {
                _this10.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });
              }
            });
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.documentCategory = rowData;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.documentCategory = data;
          this.categoryType = 'Edit'; // this.editemployeeDisplay = "block";
          // this.newCar = false;
          // this.car = this.cloneCar(data);
          // this.displayDialog = true;

          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editProjectDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addProjectDisplay = "none";
          this.displayScroll();
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["app-category"]],
      decls: 39,
      vars: 4,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Document Categories"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Document Categories"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [1, "fas", "fa-toggle-on"], [3, "categoryType", "onClose"], [3, "categoryType", "category", "onClose"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Document Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function CategoryComponent_Template_p_tabView_onChange_15_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CategoryComponent_div_17_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CategoryComponent_div_19_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inactive Document Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Are you sure want to Inactive the Category?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_32_listener($event) {
            return ctx["delete"](ctx.documentCategory);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CategoryComponent_ng_container_37_Template, 2, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CategoryComponent_ng_container_38_Template, 2, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryType == "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryType == "Edit");
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"]],
      pipes: [_app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__["DisplayStatus"]],
      styles: [".actions[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    text-align: center;    \r\n}\r\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\r\n    color: #777;\r\n}\r\n.actions[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    text-align: center;    \r\n}\r\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\r\n    color: #777;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\r\n    border-radius: 2px;\r\n    padding: 0.25em 0.5em;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\r\n    background-color: #c8e6c9;\r\n    color: #256029;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\r\n    background-color: #ffcdd2;\r\n    color: #c63737;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\r\n    background-color: #feedaf;\r\n    color: #8a5340;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\r\n    background-color: #b3e5fc;\r\n    color: #23547b;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\r\n    background-color: #eccfff;\r\n    color: #694382;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\r\n    background-color: #ffd8b2;\r\n    color: #805b36;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .flag {\r\n    vertical-align: middle;\r\n    width: 30px;\r\n    height: 20px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\r\n    vertical-align: middle;\r\n    width: 24px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\r\n    margin-top: 0.125em;\r\n    vertical-align: middle;\r\n    margin-left: 0.5em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\r\n    float: left;\r\n    width: auto;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\r\n    height: 8px;\r\n    background-color: #d8dadc;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\r\n    background-color: #00acad;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\r\n    display: block;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\r\n    width: 200px;\r\n    height: 33px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\r\n    min-width: 25em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\r\n    font-weight: 400;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\r\n    border: 0 none;\r\n    padding: 12px;\r\n    text-align: left;\r\n    font-size: 19px;\r\n    color: #ffffff;\r\n    background: #ffffff;\r\n    border-bottom: 1px solid #ff9b44;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\r\n    border: 0 none;\r\n    padding: 1em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\r\n    border: 0 none;\r\n    text-align: left;\r\n    border-bottom: 2px solid #dee2e6;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\r\n    border-top: 1px solid #c8c8c8;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\r\n    \r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\r\n    border: 0 none;\r\n    cursor: auto;\r\n    word-wrap: break-word;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\r\n    \r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\r\n    text-transform: uppercase;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 64em) {\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\r\n        display: none !important;\r\n   }\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\r\n        text-align: left;\r\n        display: block;\r\n        border: 0 none !important;\r\n        width: 100% !important;\r\n        float: left;\r\n        clear: left;\r\n        border: 0 none;\r\n   }\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\r\n        padding: 0.4em;\r\n        min-width: 30%;\r\n        display: inline-block;\r\n        margin: -0.4em 1em -0.4em -0.4em;\r\n        font-weight: bold;\r\n   }\r\n}\r\nh2.table-avatar[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: inline-flex;\r\n    font-size: inherit;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGVwYXJ0bWVudHMtY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSwrR0FBK0c7QUFDbkg7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksd0JBQXdCO0dBQzdCO0lBQ0M7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO0dBQ25CO0lBQ0M7UUFDSSxjQUFjO1FBQ2QsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMsaUJBQWlCO0dBQ3RCO0FBQ0g7QUFDQztJQUNHLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kZXBhcnRtZW50cy1jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcbi5hY3Rpb25zIC5hY3Rpb24taWNvbntcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcbi5hY3Rpb25ze1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4uYWN0aW9ucyAuYWN0aW9uLWljb257XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcXVhbGlmaWVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XHJcbiAgICBjb2xvcjogIzI1NjAyOTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXVucXVhbGlmaWVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XHJcbiAgICBjb2xvcjogI2M2MzczNztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLW5lZ290aWF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWVkYWY7XHJcbiAgICBjb2xvcjogIzhhNTM0MDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLW5ldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xyXG4gICAgY29sb3I6ICMyMzU0N2I7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1yZW5ld2FsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2NmZmY7XHJcbiAgICBjb2xvcjogIzY5NDM4MjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXByb3Bvc2FsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4YjI7XHJcbiAgICBjb2xvcjogIzgwNWIzNjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuZmxhZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24gaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHNwYW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciAudWktZHJvcGRvd24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1wYWdpbmF0b3ItY3VycmVudCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZGFkYztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjYWQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWNvbHVtbi1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWNvbHVtbi1maWx0ZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1nbG9iYWxmaWx0ZXItY29udGFpbmVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzNweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB7XHJcbiAgICBtaW4td2lkdGg6IDI1ZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWRhdGVwaWNrZXIgdGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtY2FwdGlvbiB7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjliNDQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciB7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgudWktZmlsdGVyLWNvbHVtbiB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M4YzhjODtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkIHtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZHJvcGRvd24tbGFiZWw6bm90KC51aS1wbGFjZWhvbGRlcikge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIC51aS1jb2x1bW4tdGl0bGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcclxuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgsIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Zm9vdCA+IHRyID4gdGQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgY2xlYXI6IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMC40ZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogLTAuNGVtIDFlbSAtMC40ZW0gLTAuNGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcbn1cclxuIGgyLnRhYmxlLWF2YXRhciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.css']
        }]
      }], function () {
        return [{
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments-category/category.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/departments-category/category.service.ts ***!
    \****************************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppAdminDepartmentsCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "getAllDocumentCategory",
        value: function getAllDocumentCategory(status) {
          return this.http.get("api/document/categories?status=".concat(status));
        }
      }, {
        key: "getDocumentCategory",
        value: function getDocumentCategory(documentCategoryDetailsId) {
          return this.http.get("api/document/category/".concat(documentCategoryDetailsId));
        }
      }, {
        key: "addDocumentCategory",
        value: function addDocumentCategory(category) {
          return this.http.post("api/document/category/add", category);
        }
      }, {
        key: "updateDocumentCategory",
        value: function updateDocumentCategory(category) {
          return this.http.post('api/document/category/update', category);
        }
      }, {
        key: "activateDocumentCategory",
        value: function activateDocumentCategory(documentCategoryDetailsId) {
          return this.http.put("api/document/category/activate/".concat(documentCategoryDetailsId), {});
        }
      }, {
        key: "deactivateDocumentCategory",
        value: function deactivateDocumentCategory(documentCategoryDetailsId) {
          return this.http.put("api/document/category/deactivate/".concat(documentCategoryDetailsId), {});
        }
      }, {
        key: "isDocumentCategoryExists",
        value: function isDocumentCategoryExists(documentCategory) {
          return this.http.get("api/document/category/exists?documentCategory=".concat(documentCategory));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments/add-department/add-department.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/departments/add-department/add-department.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AddDepartmentComponent */

  /***/
  function srcAppAdminDepartmentsAddDepartmentAddDepartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDepartmentComponent", function () {
      return AddDepartmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_department_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/department.model */
    "./src/app/shared/models/department.model.ts");
    /* harmony import */


    var _departments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../departments.service */
    "./src/app/admin/departments/departments.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");

    function AddDepartmentComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1929 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1929.errLabel, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var AddDepartmentComponent = /*#__PURE__*/function () {
      function AddDepartmentComponent(departmentService, sharedService) {
        _classCallCheck(this, AddDepartmentComponent);

        this.departmentService = departmentService;
        this.sharedService = sharedService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addemployeeDisplay = "none";
        this.department = new _app_shared_models_department_model__WEBPACK_IMPORTED_MODULE_1__["Department"]();
      }

      _createClass(AddDepartmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.departmentType == 'Add') {
            this.department = new _app_shared_models_department_model__WEBPACK_IMPORTED_MODULE_1__["Department"]();
            this.showDialogToAdd();
          }
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.department = new Department;
          this.addemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "save",
        value: function save() {
          var _this11 = this;

          this.departmentService.isDepartmentExists(this.department.department).subscribe(function (res) {
            if (res.message == "Department available.") {
              _this11.departmentService.addDepartment(_this11.department).subscribe(function (res) {
                if (res.message == "Department added successfully") {
                  _this11.addemployeeDisplay = "none";

                  _this11.sharedService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: res.message
                  });
                }

                _this11.displayScroll();

                _this11.onClose.emit({
                  type: 'add'
                });
              });
            } else {
              _this11.errLabel = res.message;
            }
          }, function (error) {
            _this11.errLabel = error;
          });
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: 'cancel'
          });
        }
      }]);

      return AddDepartmentComponent;
    }();

    AddDepartmentComponent.ɵfac = function AddDepartmentComponent_Factory(t) {
      return new (t || AddDepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]));
    };

    AddDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddDepartmentComponent,
      selectors: [["app-add-department"]],
      inputs: {
        departmentType: "departmentType"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 30,
      vars: 7,
      consts: [["id", "add_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "desc", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", 1, "btn", "btn-primary", "submit-btn", 3, "disabled", "click"], [1, "col-sm-6", 2, "color", "red"]],
      template: function AddDepartmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDepartmentComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddDepartmentComponent_div_11_Template, 3, 1, "div", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDepartmentComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.department.department = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDepartmentComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.department.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDepartmentComponent_Template_button_click_28_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.addemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.department.department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.department.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.department == null ? null : ctx.department.department));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2RlcGFydG1lbnRzL2FkZC1kZXBhcnRtZW50L2FkZC1kZXBhcnRtZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-department',
          templateUrl: './add-department.component.html',
          styleUrls: ['./add-department.component.css']
        }]
      }], function () {
        return [{
          type: _departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      }, {
        departmentType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments/departments.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/departments/departments.component.ts ***!
    \************************************************************/

  /*! exports provided: DepartmentsComponent */

  /***/
  function srcAppAdminDepartmentsDepartmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function () {
      return DepartmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _departments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./departments.service */
    "./src/app/admin/departments/departments.service.ts");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _add_department_add_department_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-department/add-department.component */
    "./src/app/admin/departments/add-department/add-department.component.ts");
    /* harmony import */


    var _edit_department_edit_department_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit-department/edit-department.component */
    "./src/app/admin/departments/edit-department/edit-department.component.ts");
    /* harmony import */


    var _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");

    function DepartmentsComponent_div_17_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DepartmentsComponent_div_17_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1580);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1574 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1574.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DepartmentsComponent_div_17_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1583 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1583.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1583.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1583.field);
      }
    }

    function DepartmentsComponent_div_17_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1581 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1581);
      }
    }

    function DepartmentsComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1587 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1584 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1584[col_r1587.field]), " ");
      }
    }

    function DepartmentsComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1587 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1584 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1584[col_r1587.field], " ");
      }
    }

    function DepartmentsComponent_div_17_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentsComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1587 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1587.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1587.field != "status");
      }
    }

    function DepartmentsComponent_div_17_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1595 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_div_17_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_div_17_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1595);

          var rowData_r1584 = ctx.$implicit;

          var ctx_r1594 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1594.onRowSelect(rowData_r1584);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_div_17_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1595);

          var rowData_r1584 = ctx.$implicit;

          var ctx_r1596 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1596.onDelete(rowData_r1584);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1584 = ctx.$implicit;
        var columns_r1585 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1584);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1585);
      }
    }

    function DepartmentsComponent_div_17_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No departments found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    var _c1 = function _c1() {
      return ["department", "description", "status"];
    };

    function DepartmentsComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentsComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentsComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentsComponent_div_17_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DepartmentsComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1570 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1570.cols)("value", ctx_r1570.lstDepartments)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function DepartmentsComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1603 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DepartmentsComponent_div_19_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1603);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1597.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DepartmentsComponent_div_19_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1606 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1606.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1606.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1606.field);
      }
    }

    function DepartmentsComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1604 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1604);
      }
    }

    function DepartmentsComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1607[col_r1610.field]), " ");
      }
    }

    function DepartmentsComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1607[col_r1610.field], " ");
      }
    }

    function DepartmentsComponent_div_19_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentsComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1610 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1610.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1610.field != "status");
      }
    }

    function DepartmentsComponent_div_19_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1618 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_div_19_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_div_19_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1618);

          var rowData_r1607 = ctx.$implicit;

          var ctx_r1617 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1617.onRowSelect(rowData_r1607);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_div_19_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1618);

          var rowData_r1607 = ctx.$implicit;

          var ctx_r1619 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1619["delete"](rowData_r1607);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1607 = ctx.$implicit;
        var columns_r1608 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1607);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1608);
      }
    }

    function DepartmentsComponent_div_19_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No departments found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DepartmentsComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentsComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentsComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentsComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DepartmentsComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1571 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1571.cols)("value", ctx_r1571.lstDepartments)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function DepartmentsComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r1621 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-department", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function DepartmentsComponent_ng_container_37_Template_app_add_department_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1621);

          var ctx_r1620 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1620.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1572 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("departmentType", ctx_r1572.departmentType);
      }
    }

    function DepartmentsComponent_ng_container_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r1623 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-edit-department", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function DepartmentsComponent_ng_container_38_Template_app_edit_department_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1623);

          var ctx_r1622 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1622.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1573 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("departmentType", ctx_r1573.departmentType)("department", ctx_r1573.department);
      }
    }

    var DepartmentsComponent = /*#__PURE__*/function () {
      function DepartmentsComponent(confirmationService, sharedService, departmentService) {
        _classCallCheck(this, DepartmentsComponent);

        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.departmentService = departmentService;
        this.editemployeeDisplay = 'none';
        this.addemployeeDisplay = "none";
        this.loading = false;
        this.status = 1;
      }

      _createClass(DepartmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [// { field: 'departmentDetailsId', header: 'ID' },
          {
            field: 'department',
            header: 'Name'
          }, {
            field: 'description',
            header: 'Description'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.getDepartments();
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.status = 1;
            this.getDepartments(1);
          } else if (event.index == 1) {
            this.status = 0;
            this.getDepartments(0);
          }
        }
      }, {
        key: "getDepartments",
        value: function getDepartments() {
          var _this12 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.loading = true;
          this.lstDepartments = [];
          this.departmentService.getAllDepartments(status).subscribe(function (res) {
            _this12.loading = false;
            _this12.lstDepartments = [];
            if (res.message == "departments") _this12.lstDepartments = res.responsePayload;
          }, function (error) {
            _this12.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.departmentType = 'Add'; //this.hiddenScroll();
        }
      }, {
        key: "onDeptAddCloseClick",
        value: function onDeptAddCloseClick(event) {
          if (event.type == 'add') {
            this.getDepartments();
          }

          this.departmentType = '';
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
        key: "save",
        value: function save() {
          this.displayScroll();
        }
      }, {
        key: "confirm",
        value: function confirm(rowData) {
          var _this13 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to Inactivate this data?',
            accept: function accept() {
              _this13["delete"](rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this14 = this;

          if (this.status == 1) {
            this.departmentService.deactivateDepartment(rowData.departmentDetailsId).subscribe(function (res) {
              if (res.message == "Deactivate department successful") {
                _this14.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this14.displayDialog = false;

                _this14.getDepartments();
              }
            });
          } else {
            this.departmentService.activateDepartment(rowData.departmentDetailsId).subscribe(function (res) {
              if (res.message == "Activate department successful") {
                _this14.displayDialog = false;

                _this14.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this14.getDepartments(_this14.status);
              }
            });
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.department = rowData;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.department = data;
          this.departmentType = 'Edit'; // this.editemployeeDisplay = "block";
          // this.newCar = false;
          // this.car = this.cloneCar(data);
          // this.displayDialog = true;

          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editemployeeDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
        }
      }]);

      return DepartmentsComponent;
    }();

    DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) {
      return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]));
    };

    DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepartmentsComponent,
      selectors: [["app-departments"]],
      decls: 39,
      vars: 4,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Departments"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Departments"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [1, "fas", "fa-toggle-on"], [3, "departmentType", "onClose"], [3, "departmentType", "department", "onClose"]],
      template: function DepartmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Departments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function DepartmentsComponent_Template_p_tabView_onChange_15_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DepartmentsComponent_div_17_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DepartmentsComponent_div_19_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inactive Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Are you sure want to Inactive the department?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_a_click_32_listener($event) {
            return ctx["delete"](ctx.department);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DepartmentsComponent_ng_container_37_Template, 2, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DepartmentsComponent_ng_container_38_Template, 2, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departmentType == "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departmentType == "Edit");
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"], _add_department_add_department_component__WEBPACK_IMPORTED_MODULE_9__["AddDepartmentComponent"], _edit_department_edit_department_component__WEBPACK_IMPORTED_MODULE_10__["EditDepartmentComponent"]],
      pipes: [_app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_11__["DisplayStatus"]],
      styles: [".actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n.actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n[_nghost-%COMP%]     .ui-table-customers {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\n    border-radius: 2px;\n    padding: 0.25em 0.5em;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 12px;\n    letter-spacing: 0.3px;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\n    background-color: #c8e6c9;\n    color: #256029;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\n    background-color: #ffcdd2;\n    color: #c63737;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\n    background-color: #feedaf;\n    color: #8a5340;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\n    background-color: #b3e5fc;\n    color: #23547b;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\n    background-color: #eccfff;\n    color: #694382;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\n    background-color: #ffd8b2;\n    color: #805b36;\n}\n[_nghost-%COMP%]     .ui-table-customers .flag {\n    vertical-align: middle;\n    width: 30px;\n    height: 20px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\n    display: inline-block;\n    vertical-align: middle;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\n    vertical-align: middle;\n    width: 24px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\n    margin-top: 0.125em;\n    vertical-align: middle;\n    margin-left: 0.5em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\n    float: left;\n    width: auto;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\n    height: 8px;\n    background-color: #d8dadc;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\n    background-color: #00acad;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\n    display: block;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\n    width: 100%;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\n    width: 200px;\n    height: 33px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\n    min-width: 25em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\n    font-weight: 400;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\n    border: 0 none;\n    padding: 12px;\n    text-align: left;\n    font-size: 19px;\n    color: #ffffff;\n    background: #ffffff;\n    border-bottom: 1px solid #ff9b44;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\n    border: 0 none;\n    padding: 1em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\n    border: 0 none;\n    text-align: left;\n    border-bottom: 2px solid #dee2e6;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\n    border-top: 1px solid #c8c8c8;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\n    border: 0 none;\n    cursor: auto;\n    word-wrap: break-word;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\n    text-transform: uppercase;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n    display: none;\n}\n\n@media screen and (max-width: 64em) {\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\n        display: none !important;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\n        text-align: left;\n        display: block;\n        border: 0 none !important;\n        width: 100% !important;\n        float: left;\n        clear: left;\n        border: 0 none;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n        padding: 0.4em;\n        min-width: 30%;\n        display: inline-block;\n        margin: -0.4em 1em -0.4em -0.4em;\n        font-weight: bold;\n   }\n}\nh2.table-avatar[_ngcontent-%COMP%] {\n    align-items: center;\n    display: inline-flex;\n    font-size: inherit;\n    font-weight: 400;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSwrR0FBK0c7QUFDbkg7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksd0JBQXdCO0dBQzdCO0lBQ0M7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO0dBQ25CO0lBQ0M7UUFDSSxjQUFjO1FBQ2QsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMsaUJBQWlCO0dBQ3RCO0FBQ0g7QUFDQztJQUNHLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kZXBhcnRtZW50cy9kZXBhcnRtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnN7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG59XG4uYWN0aW9ucyAuYWN0aW9uLWljb257XG4gICAgY29sb3I6ICM3Nzc7XG59XG4uYWN0aW9uc3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbn1cbi5hY3Rpb25zIC5hY3Rpb24taWNvbntcbiAgICBjb2xvcjogIzc3Nztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXF1YWxpZmllZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcbiAgICBjb2xvcjogIzI1NjAyOTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtdW5xdWFsaWZpZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XG4gICAgY29sb3I6ICNjNjM3Mzc7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLW5lZ290aWF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZGFmO1xuICAgIGNvbG9yOiAjOGE1MzQwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1uZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmM7XG4gICAgY29sb3I6ICMyMzU0N2I7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXJlbmV3YWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2NmZmY7XG4gICAgY29sb3I6ICM2OTQzODI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXByb3Bvc2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOGIyO1xuICAgIGNvbG9yOiAjODA1YjM2O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmZsYWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMjRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24gc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogMC4xMjVlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3IgLnVpLWRyb3Bkb3duIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3IgLnVpLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIge1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGRhZGM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2FkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWNvbHVtbi1maWx0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWNvbHVtbi1maWx0ZXIgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1nbG9iYWxmaWx0ZXItY29udGFpbmVyIGlucHV0IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWRhdGVwaWNrZXIge1xuICAgIG1pbi13aWR0aDogMjVlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kYXRlcGlja2VyIHRkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWNhcHRpb24ge1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmOWI0NDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3Ige1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLnVpLWZpbHRlci1jb2x1bW4ge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQge1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGN1cnNvcjogYXV0bztcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWRyb3Bkb3duLWxhYmVsOm5vdCgudWktcGxhY2Vob2xkZXIpIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAudWktY29sdW1uLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgsIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Zm9vdCA+IHRyID4gdGQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IC0wLjRlbSAxZW0gLTAuNGVtIC0wLjRlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG59XG4gaDIudGFibGUtYXZhdGFyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-departments',
          templateUrl: './departments.component.html',
          styleUrls: ['./departments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments/departments.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/departments/departments.service.ts ***!
    \**********************************************************/

  /*! exports provided: DepartmentService */

  /***/
  function srcAppAdminDepartmentsDepartmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentService", function () {
      return DepartmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DepartmentService = /*#__PURE__*/function () {
      function DepartmentService(http) {
        _classCallCheck(this, DepartmentService);

        this.http = http;
      }

      _createClass(DepartmentService, [{
        key: "getAllDepartments",
        value: function getAllDepartments(status) {
          return this.http.get("api/department/all?status=".concat(status));
        }
      }, {
        key: "getDepartment",
        value: function getDepartment(departmentDetailsId) {
          return this.http.get("api/department/".concat(departmentDetailsId));
        }
      }, {
        key: "addDepartment",
        value: function addDepartment(department) {
          return this.http.post("api/department/add", department);
        }
      }, {
        key: "updateDepartment",
        value: function updateDepartment(department) {
          return this.http.put('api/department/update', department);
        }
      }, {
        key: "activateDepartment",
        value: function activateDepartment(departmentDetailsId) {
          return this.http.put("api/department/activate/".concat(departmentDetailsId), {});
        }
      }, {
        key: "deactivateDepartment",
        value: function deactivateDepartment(departmentDetailsId) {
          return this.http.put("api/department/deactivate/".concat(departmentDetailsId), {});
        }
      }, {
        key: "isDepartmentExists",
        value: function isDepartmentExists(department) {
          return this.http.get("api/department/exists?department=".concat(department));
        }
      }]);

      return DepartmentService;
    }();

    DepartmentService.ɵfac = function DepartmentService_Factory(t) {
      return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DepartmentService,
      factory: DepartmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/departments/edit-department/edit-department.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/departments/edit-department/edit-department.component.ts ***!
    \********************************************************************************/

  /*! exports provided: EditDepartmentComponent */

  /***/
  function srcAppAdminDepartmentsEditDepartmentEditDepartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDepartmentComponent", function () {
      return EditDepartmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _departments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../departments.service */
    "./src/app/admin/departments/departments.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");

    function EditDepartmentComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1932 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDepartmentComponent_div_10_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1932);

          var ctx_r1931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1931.department.department = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditDepartmentComponent_div_10_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1932);

          var ctx_r1933 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1933.department.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDepartmentComponent_div_10_Template_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1932);

          var ctx_r1934 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1934.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1930 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1930.department.department);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1930.department.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r1930.department == null ? null : ctx_r1930.department.department));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var EditDepartmentComponent = /*#__PURE__*/function () {
      function EditDepartmentComponent(departmentService) {
        _classCallCheck(this, EditDepartmentComponent);

        this.departmentService = departmentService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editemployeeDisplay = "none";
      }

      _createClass(EditDepartmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.departmentType == 'Edit') {
            //this.department = new Department();
            this.showDialogToAdd();
          }
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.department = new Department;
          this.editemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "save",
        value: function save() {
          var _this15 = this;

          this.departmentService.updateDepartment(this.department).subscribe(function (res) {
            if (res.message == "Update department successful") {
              _this15.editemployeeDisplay = "none";

              _this15.displayScroll();

              _this15.onClose.emit({
                type: 'add'
              });
            }
          });
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: 'Add'
          });
        }
      }]);

      return EditDepartmentComponent;
    }();

    EditDepartmentComponent.ɵfac = function EditDepartmentComponent_Factory(t) {
      return new (t || EditDepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_departments_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentService"]));
    };

    EditDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditDepartmentComponent,
      selectors: [["app-edit-department"]],
      inputs: {
        departmentType: "departmentType",
        department: "department"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 11,
      vars: 4,
      consts: [["id", "edit_employee", "data-backdrop", "static", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "value", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "employeeid", "value", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "submit-btn", 3, "disabled", "click"]],
      template: function EditDepartmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditDepartmentComponent_Template_button_click_6_listener($event) {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditDepartmentComponent_div_10_Template, 19, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.editemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.department);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2RlcGFydG1lbnRzL2VkaXQtZGVwYXJ0bWVudC9lZGl0LWRlcGFydG1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-department',
          templateUrl: './edit-department.component.html',
          styleUrls: ['./edit-department.component.css']
        }]
      }], function () {
        return [{
          type: _departments_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentService"]
        }];
      }, {
        departmentType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        department: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/designations/add-edit-designation/add-edit-designation.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/admin/designations/add-edit-designation/add-edit-designation.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AddEditDesignationComponent */

  /***/
  function srcAppAdminDesignationsAddEditDesignationAddEditDesignationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEditDesignationComponent", function () {
      return AddEditDesignationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_designation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/designation.model */
    "./src/app/shared/models/designation.model.ts");
    /* harmony import */


    var _designations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../designations.service */
    "./src/app/admin/designations/designations.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");

    function AddEditDesignationComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1935 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1935.errLabel, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var AddEditDesignationComponent = /*#__PURE__*/function () {
      function AddEditDesignationComponent(designationService, sharedService) {
        _classCallCheck(this, AddEditDesignationComponent);

        this.designationService = designationService;
        this.sharedService = sharedService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addemployeeDisplay = "none";
        this.errLabel = '';
        if (this.designationType == "Add") this.designation = new _app_shared_models_designation_model__WEBPACK_IMPORTED_MODULE_1__["Designation"]();
      }

      _createClass(AddEditDesignationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showDialogToAdd();
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.designation = new Designation;
          this.addemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "save",
        value: function save() {
          var _this16 = this;

          if (this.designationType == 'Add') {
            this.designationService.isDesignationExists(this.designation.designation).subscribe(function (res) {
              if (res.message == "Designation available.") {
                _this16.designationService.addDesignation(_this16.designation).subscribe(function (res) {
                  if (res.message == "Designation added successfully") {
                    _this16.closeAddmodal(_this16.designationType);

                    _this16.sharedService.add({
                      severity: 'success',
                      summary: 'Success',
                      detail: res.message
                    });
                  } else {
                    _this16.errLabel = res.message;
                  }
                }, function (error) {
                  _this16.errLabel = res.message;
                });
              }
            }, function (error) {
              _this16.errLabel = error;
            });
          } else if (this.designationType == 'Edit') {
            this.designationService.updateDesignation(this.designation).subscribe(function (res) {
              if (res.message == "Update designation successful") {
                _this16.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this16.closeAddmodal(_this16.designationType);
              } else {
                _this16.errLabel = res.message;
              }
            }, function (error) {
              _this16.errLabel = error;
            });
          }
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal(type) {
          this.addemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: type
          });
        }
      }]);

      return AddEditDesignationComponent;
    }();

    AddEditDesignationComponent.ɵfac = function AddEditDesignationComponent_Factory(t) {
      return new (t || AddEditDesignationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_designations_service__WEBPACK_IMPORTED_MODULE_2__["DesignationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]));
    };

    AddEditDesignationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddEditDesignationComponent,
      selectors: [["app-add-edit-designation"]],
      inputs: {
        designationType: "designationType",
        designation: "designation"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 30,
      vars: 7,
      consts: [["id", "add_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "desc", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", 1, "btn", "btn-primary", "submit-btn", 3, "disabled", "click"], [1, "col-sm-6", 2, "color", "red"]],
      template: function AddEditDesignationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Designation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditDesignationComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddEditDesignationComponent_div_11_Template, 3, 1, "div", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditDesignationComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.designation.designation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditDesignationComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.designation.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditDesignationComponent_Template_button_click_28_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.addemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.designation.designation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.designation.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.designation == null ? null : ctx.designation.designation));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rlc2lnbmF0aW9ucy9hZGQtZWRpdC1kZXNpZ25hdGlvbi9hZGQtZWRpdC1kZXNpZ25hdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditDesignationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-edit-designation',
          templateUrl: './add-edit-designation.component.html',
          styleUrls: ['./add-edit-designation.component.css']
        }]
      }], function () {
        return [{
          type: _designations_service__WEBPACK_IMPORTED_MODULE_2__["DesignationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      }, {
        designationType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        designation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/designations/designations.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/designations/designations.component.ts ***!
    \**************************************************************/

  /*! exports provided: DesignationsComponent */

  /***/
  function srcAppAdminDesignationsDesignationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesignationsComponent", function () {
      return DesignationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_designation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/designation.model */
    "./src/app/shared/models/designation.model.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _designations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./designations.service */
    "./src/app/admin/designations/designations.service.ts");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _add_edit_designation_add_edit_designation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-edit-designation/add-edit-designation.component */
    "./src/app/admin/designations/add-edit-designation/add-edit-designation.component.ts");
    /* harmony import */


    var _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");

    function DesignationsComponent_div_17_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1633 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DesignationsComponent_div_17_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1633);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1627.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DesignationsComponent_div_17_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1636 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1636.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1636.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1636.field);
      }
    }

    function DesignationsComponent_div_17_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesignationsComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1634 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1634);
      }
    }

    function DesignationsComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1640 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1637 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1637[col_r1640.field]), " ");
      }
    }

    function DesignationsComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1640 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1637 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1637[col_r1640.field], " ");
      }
    }

    function DesignationsComponent_div_17_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesignationsComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DesignationsComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1640 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1640.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1640.field != "status");
      }
    }

    function DesignationsComponent_div_17_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1648 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesignationsComponent_div_17_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignationsComponent_div_17_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1648);

          var rowData_r1637 = ctx.$implicit;

          var ctx_r1647 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1647.onRowSelect(rowData_r1637);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignationsComponent_div_17_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1648);

          var rowData_r1637 = ctx.$implicit;

          var ctx_r1649 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1649.onDelete(rowData_r1637);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1637 = ctx.$implicit;
        var columns_r1638 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1637);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1638);
      }
    }

    function DesignationsComponent_div_17_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No designations found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    var _c1 = function _c1() {
      return ["designation", "description", "status"];
    };

    function DesignationsComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DesignationsComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DesignationsComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DesignationsComponent_div_17_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DesignationsComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1624.cols)("value", ctx_r1624.lstDesignations)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function DesignationsComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1656 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DesignationsComponent_div_19_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1656);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1650 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1650.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DesignationsComponent_div_19_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1659 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1659.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1659.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1659.field);
      }
    }

    function DesignationsComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesignationsComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1657 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1657);
      }
    }

    function DesignationsComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1660[col_r1663.field]), " ");
      }
    }

    function DesignationsComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1660[col_r1663.field], " ");
      }
    }

    function DesignationsComponent_div_19_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesignationsComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DesignationsComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1663 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1663.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1663.field != "status");
      }
    }

    function DesignationsComponent_div_19_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1671 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesignationsComponent_div_19_ng_template_5_td_1_Template, 3, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignationsComponent_div_19_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1671);

          var rowData_r1660 = ctx.$implicit;

          var ctx_r1670 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1670.onRowSelect(rowData_r1660);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignationsComponent_div_19_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1671);

          var rowData_r1660 = ctx.$implicit;

          var ctx_r1672 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1672.onDelete(rowData_r1660);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1660 = ctx.$implicit;
        var columns_r1661 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1660);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1661);
      }
    }

    function DesignationsComponent_div_19_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No designations found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DesignationsComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DesignationsComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DesignationsComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DesignationsComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DesignationsComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1625.cols)("value", ctx_r1625.lstDesignations)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function DesignationsComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r1674 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-edit-designation", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function DesignationsComponent_ng_container_37_Template_app_add_edit_designation_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1674);

          var ctx_r1673 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1673.onDeptCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1626 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("designationType", ctx_r1626.designationType)("designation", ctx_r1626.designation);
      }
    }

    var DesignationsComponent = /*#__PURE__*/function () {
      function DesignationsComponent(sharedService, confirmationService, designationService) {
        _classCallCheck(this, DesignationsComponent);

        this.sharedService = sharedService;
        this.confirmationService = confirmationService;
        this.designationService = designationService;
        this.loading = false;
        this.editemployeeDisplay = 'none';
        this.addemployeeDisplay = "none";
      }

      _createClass(DesignationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [// { field: 'designationDetailsId', header: 'ID' },
          {
            field: 'designation',
            header: 'Name'
          }, {
            field: 'description',
            header: 'Description'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.getDesignations();
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.getDesignations(1);
          } else if (event.index == 1) {
            this.getDesignations(0);
          }
        }
      }, {
        key: "getDesignations",
        value: function getDesignations() {
          var _this17 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.loading = true;
          this.lstDesignations = [];
          this.designationService.getAllDesignations(status).subscribe(function (res) {
            _this17.loading = false;
            _this17.lstDesignations = [];
            _this17.lstDesignations = res.responsePayload;
          }, function (error) {
            _this17.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          // this.newCar = true;
          // this.car = {};
          // this.addemployeeDisplay = "block";
          this.designationType = 'Add';
          this.designation = new _app_shared_models_designation_model__WEBPACK_IMPORTED_MODULE_1__["Designation"]();
          this.hiddenScroll();
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
        key: "confirm",
        value: function confirm(rowData) {
          var _this18 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to Inactivate this data?',
            accept: function accept() {
              _this18["delete"](rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this19 = this;

          this.designationService.deactivateDesignation(rowData.designationDetailsId).subscribe(function (res) {
            if (res.message == "Deactivate designation successful") {
              _this19.displayDialog = false;

              _this19.sharedService.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message
              });

              _this19.getDesignations();
            }
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.designation = rowData;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.designation = new _app_shared_models_designation_model__WEBPACK_IMPORTED_MODULE_1__["Designation"]();
          this.designationType = 'Edit';
          this.designation = data;
          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editemployeeDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "onDeptCloseClick",
        value: function onDeptCloseClick(event) {
          if (event.type == 'Add' || event.type == 'Edit') {
            this.getDesignations();
          }

          this.designationType = null;
        }
      }]);

      return DesignationsComponent;
    }();

    DesignationsComponent.ɵfac = function DesignationsComponent_Factory(t) {
      return new (t || DesignationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_designations_service__WEBPACK_IMPORTED_MODULE_4__["DesignationService"]));
    };

    DesignationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DesignationsComponent,
      selectors: [["app-designations"]],
      decls: 38,
      vars: 3,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Designations"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Designations"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [3, "designationType", "designation", "onClose"]],
      template: function DesignationsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Designations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignationsComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Designation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function DesignationsComponent_Template_p_tabView_onChange_15_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DesignationsComponent_div_17_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DesignationsComponent_div_19_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inactive Designation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Are you sure want to Inactive the designation?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesignationsComponent_Template_a_click_32_listener($event) {
            return ctx["delete"](ctx.designation);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DesignationsComponent_ng_container_37_Template, 2, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.designationType == "Edit" || ctx.designationType == "Add");
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["SelectableRow"], _add_edit_designation_add_edit_designation_component__WEBPACK_IMPORTED_MODULE_10__["AddEditDesignationComponent"]],
      pipes: [_app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_11__["DisplayStatus"]],
      styles: [".actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n.actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n[_nghost-%COMP%]     .ui-table-customers {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\n    border-radius: 2px;\n    padding: 0.25em 0.5em;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 12px;\n    letter-spacing: 0.3px;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\n    background-color: #c8e6c9;\n    color: #256029;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\n    background-color: #ffcdd2;\n    color: #c63737;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\n    background-color: #feedaf;\n    color: #8a5340;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\n    background-color: #b3e5fc;\n    color: #23547b;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\n    background-color: #eccfff;\n    color: #694382;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\n    background-color: #ffd8b2;\n    color: #805b36;\n}\n[_nghost-%COMP%]     .ui-table-customers .flag {\n    vertical-align: middle;\n    width: 30px;\n    height: 20px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\n    display: inline-block;\n    vertical-align: middle;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\n    vertical-align: middle;\n    width: 24px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\n    margin-top: 0.125em;\n    vertical-align: middle;\n    margin-left: 0.5em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\n    float: left;\n    width: auto;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\n    height: 8px;\n    background-color: #d8dadc;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\n    background-color: #00acad;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\n    display: block;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\n    width: 100%;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\n    width: 200px;\n    height: 33px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\n    min-width: 25em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\n    font-weight: 400;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\n    border: 0 none;\n    padding: 12px;\n    text-align: left;\n    font-size: 19px;\n    color: #ffffff;\n    background: #ffffff;\n    border-bottom: 1px solid #ff9b44;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\n    border: 0 none;\n    padding: 1em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\n    border: 0 none;\n    text-align: left;\n    border-bottom: 2px solid #dee2e6;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\n    border-top: 1px solid #c8c8c8;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\n    border: 0 none;\n    cursor: auto;\n    word-wrap: break-word;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\n    text-transform: uppercase;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n    display: none;\n}\n\n@media screen and (max-width: 64em) {\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\n        display: none !important;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\n        text-align: left;\n        display: block;\n        border: 0 none !important;\n        width: 100% !important;\n        float: left;\n        clear: left;\n        border: 0 none;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n        padding: 0.4em;\n        min-width: 30%;\n        display: inline-block;\n        margin: -0.4em 1em -0.4em -0.4em;\n        font-weight: bold;\n   }\n}\nh2.table-avatar[_ngcontent-%COMP%] {\n    align-items: center;\n    display: inline-flex;\n    font-size: inherit;\n    font-weight: 400;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGVzaWduYXRpb25zL2Rlc2lnbmF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLCtHQUErRztBQUNuSDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsZUFBZTtBQUNmO0lBQ0k7UUFDSSx3QkFBd0I7R0FDN0I7SUFDQztRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsV0FBVztRQUNYLGNBQWM7R0FDbkI7SUFDQztRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyxpQkFBaUI7R0FDdEI7QUFDSDtBQUNDO0lBQ0csbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rlc2lnbmF0aW9ucy9kZXNpZ25hdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25ze1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuLmFjdGlvbnMgLmFjdGlvbi1pY29ue1xuICAgIGNvbG9yOiAjNzc3O1xufVxuLmFjdGlvbnN7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG59XG4uYWN0aW9ucyAuYWN0aW9uLWljb257XG4gICAgY29sb3I6ICM3Nzc7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1xdWFsaWZpZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XG4gICAgY29sb3I6ICMyNTYwMjk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXVucXVhbGlmaWVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xuICAgIGNvbG9yOiAjYzYzNzM3O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1uZWdvdGlhdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWRhZjtcbiAgICBjb2xvcjogIzhhNTM0MDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xuICAgIGNvbG9yOiAjMjM1NDdiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1yZW5ld2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNjZmZmO1xuICAgIGNvbG9yOiAjNjk0MzgyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1wcm9wb3NhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDhiMjtcbiAgICBjb2xvcjogIzgwNWIzNjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5mbGFnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDI0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDAuMTI1ZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1wYWdpbmF0b3ItY3VycmVudCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYWRjO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNhZDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1jb2x1bW4tZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1jb2x1bW4tZmlsdGVyIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1nbG9iYWxmaWx0ZXItY29udGFpbmVyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kYXRlcGlja2VyIHtcbiAgICBtaW4td2lkdGg6IDI1ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1jYXB0aW9uIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjliNDQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBwYWRkaW5nOiAxZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aC51aS1maWx0ZXItY29sdW1uIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M4YzhjODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkIHtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kcm9wZG93bi1sYWJlbDpub3QoLnVpLXBsYWNlaG9sZGVyKSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLCA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIC51aS1jb2x1bW4tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAtMC40ZW0gMWVtIC0wLjRlbSAtMC40ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgfVxufVxuIGgyLnRhYmxlLWF2YXRhciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-designations',
          templateUrl: './designations.component.html',
          styleUrls: ['./designations.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]
        }, {
          type: _designations_service__WEBPACK_IMPORTED_MODULE_4__["DesignationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/designations/designations.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/designations/designations.service.ts ***!
    \************************************************************/

  /*! exports provided: DesignationService */

  /***/
  function srcAppAdminDesignationsDesignationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesignationService", function () {
      return DesignationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DesignationService = /*#__PURE__*/function () {
      function DesignationService(http) {
        _classCallCheck(this, DesignationService);

        this.http = http;
      }

      _createClass(DesignationService, [{
        key: "getAllDesignations",
        value: function getAllDesignations(status) {
          return this.http.get("api/designation/all?status=".concat(status));
        }
      }, {
        key: "getDesignation",
        value: function getDesignation(designationDetailsId) {
          return this.http.get("api/designation/".concat(designationDetailsId));
        }
      }, {
        key: "addDesignation",
        value: function addDesignation(designation) {
          return this.http.post("api/designation/add", designation);
        }
      }, {
        key: "updateDesignation",
        value: function updateDesignation(designation) {
          return this.http.put('api/designation/update', designation);
        }
      }, {
        key: "activateDesignation",
        value: function activateDesignation(designationDetailsId) {
          return this.http.get("api/designation/activate/".concat(designationDetailsId), {});
        }
      }, {
        key: "deactivateDesignation",
        value: function deactivateDesignation(designationDetailsId) {
          return this.http.put("api/designation/deactivate/".concat(designationDetailsId), {});
        }
      }, {
        key: "isDesignationExists",
        value: function isDesignationExists(designation) {
          return this.http.get("api/designation/exists?designation=".concat(designation));
        }
      }]);

      return DesignationService;
    }();

    DesignationService.ɵfac = function DesignationService_Factory(t) {
      return new (t || DesignationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DesignationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DesignationService,
      factory: DesignationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/employeeinfo/add-employee/add-employee.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/employeeinfo/add-employee/add-employee.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AddEmployeeComponent */

  /***/
  function srcAppAdminEmployeeinfoAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/employee.model */
    "./src/app/shared/models/employee.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/enums/role.enum */
    "./src/app/shared/enums/role.enum.ts");
    /* harmony import */


    var _employeeinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../employeeinfo.service */
    "./src/app/admin/employeeinfo/employeeinfo.service.ts");
    /* harmony import */


    var _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/service/auth.service */
    "./src/app/core/service/auth.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/radiobutton/radiobutton */
    "./src/app/components/radiobutton/radiobutton.ts");

    function AddEmployeeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1936 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1936.errLabel, " ");
      }
    }

    function AddEmployeeComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r1942 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEmployeeComponent_div_48_Template_p_radioButton_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1942);

          var ctx_r1941 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1941.employee.roleId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r1939 = ctx.$implicit;
        var i_r1940 = ctx.index;

        var ctx_r1937 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r1940 == 0 ? "ui-g-3" : "ui-g-2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r1939.value)("label", role_r1939.label)("ngModel", ctx_r1937.employee.roleId)("inputId", "role" + i_r1940);
      }
    }

    function AddEmployeeComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r1946 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEmployeeComponent_div_56_Template_p_radioButton_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1946);

          var ctx_r1945 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1945.employee.sendRegistrationLink = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1943 = ctx.$implicit;
        var i_r1944 = ctx.index;

        var ctx_r1938 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1943.value)("label", item_r1943.label)("ngModel", ctx_r1938.employee.sendRegistrationLink)("inputId", "approval" + i_r1944);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var AddEmployeeComponent = /*#__PURE__*/function () {
      function AddEmployeeComponent(employeeService, authService, fb, sharedService) {
        _classCallCheck(this, AddEmployeeComponent);

        this.employeeService = employeeService;
        this.authService = authService;
        this.fb = fb;
        this.sharedService = sharedService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedRole = '1';
        this.addemployeeDisplay = "none";
        this.errLabel = '';
        this.roles = [{
          label: 'Super Admin',
          value: _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].SuperAdmin
        }, {
          label: 'Admin',
          value: _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin
        }, {
          label: 'Accounts',
          value: _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].Accounts
        }, {
          label: 'HR',
          value: _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].HR
        }, {
          label: 'Employee',
          value: _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_3__["Role"].Employee
        }];
        this.approvals = [{
          label: 'Yes',
          value: 1
        }, {
          label: 'No',
          value: 0
        }];
        this.employee = new _app_shared_models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
        this.addEmployeeForm = this.fb.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
      }

      _createClass(AddEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showDialogToAdd();
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.employee = new Employee;
          this.addemployeeDisplay = "block";
          this.hiddenScroll();
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {}
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
        key: "save",
        value: function save() {
          var _this20 = this;

          this.employeeService.isEmployeeExists(this.employee.email).subscribe(function (res) {
            if (res.message == "Email already exists.") {
              _this20.sharedService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.message
              });
            } else {
              _this20.employee.organizationDetailsId = _this20.authService.currentUser.employeeDetailsId;

              _this20.employeeService.addEmployee(_this20.employee).subscribe(function (res) {
                if (res.message == "Employee added successfully") {
                  _this20.closeAddmodal(_this20.employeeType);

                  _this20.sharedService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: res.message
                  });
                } else if (!res.responsePayload) _this20.errLabel = res.message;
              }, function (error) {
                _this20.errLabel = error;
              });
            }
          }, function (error) {
            _this20.errLabel = error;
          });
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal(type) {
          this.addemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: type
          });
        }
      }]);

      return AddEmployeeComponent;
    }();

    AddEmployeeComponent.ɵfac = function AddEmployeeComponent_Factory(t) {
      return new (t || AddEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employeeinfo_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]));
    };

    AddEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddEmployeeComponent,
      selectors: [["app-add-employee"]],
      inputs: {
        employeeType: "employeeType",
        employee: "employee"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 60,
      vars: 10,
      consts: [["id", "add_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "placeholder", " ", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-12"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "ui-g-3", 4, "ngFor", "ngForOf"], [1, "submit-section"], ["type", "button", 1, "btn", "btn-primary", "submit-btn", 3, "click"], ["name", "role", 3, "value", "label", "ngModel", "inputId", "ngModelChange"], [1, "ui-g-3"], ["name", "approval", 3, "value", "label", "ngModel", "inputId", "ngModelChange"]],
      template: function AddEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddEmployeeComponent_div_11_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEmployeeComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.employee.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEmployeeComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.employee.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEmployeeComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.employee.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEmployeeComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.employee.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AddEmployeeComponent_div_48_Template, 2, 7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Send approval Mail ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AddEmployeeComponent_div_56_Template, 2, 4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_58_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.addemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.approvals);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_9__["RadioButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlaW5mby9hZGQtZW1wbG95ZWUvYWRkLWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-employee',
          templateUrl: './add-employee.component.html',
          styleUrls: ['./add-employee.component.css']
        }]
      }], function () {
        return [{
          type: _employeeinfo_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
        }, {
          type: _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      }, {
        employeeType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        employee: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/employeeinfo/edit-employee/edit-employee.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/employeeinfo/edit-employee/edit-employee.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EditEmployeeComponent */

  /***/
  function srcAppAdminEmployeeinfoEditEmployeeEditEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function () {
      return EditEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employeeinfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employeeinfo.service */
    "./src/app/admin/employeeinfo/employeeinfo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");

    function EditEmployeeComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1948 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1948.errLabel, " ");
      }
    }

    function EditEmployeeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1950 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditEmployeeComponent_div_10_div_1_Template, 3, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditEmployeeComponent_div_10_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1950);

          var ctx_r1949 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1949.employee.firstName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditEmployeeComponent_div_10_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1950);

          var ctx_r1951 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1951.employee.lastName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditEmployeeComponent_div_10_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1950);

          var ctx_r1952 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1952.employee.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditEmployeeComponent_div_10_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1950);

          var ctx_r1953 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1953.employee.phoneNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_10_Template_button_click_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1950);

          var ctx_r1954 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1954.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1947 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1947.errLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1947.employee.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1947.employee.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1947.employee.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1947.employee.phoneNumber);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var EditEmployeeComponent = /*#__PURE__*/function () {
      function EditEmployeeComponent(employeeService) {
        _classCallCheck(this, EditEmployeeComponent);

        this.employeeService = employeeService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editemployeeDisplay = "none";
        this.errLabel = '';
      }

      _createClass(EditEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showDialogToAdd();
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.employee = new Employee;
          this.editemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "save",
        value: function save() {
          var _this21 = this;

          this.employeeService.updateEmployee(this.employee).subscribe(function (res) {
            if (res.message == "Update employee successful") _this21.closeAddmodal(_this21.employeeType);
          }, function (error) {
            _this21.errLabel = error;
          });
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal(type) {
          this.editemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: type
          });
        }
      }]);

      return EditEmployeeComponent;
    }();

    EditEmployeeComponent.ɵfac = function EditEmployeeComponent_Factory(t) {
      return new (t || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employeeinfo_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]));
    };

    EditEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditEmployeeComponent,
      selectors: [["app-edit-employee"]],
      inputs: {
        employeeType: "employeeType",
        employee: "employee"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 11,
      vars: 4,
      consts: [["id", "edit_employee", "data-backdrop", "static", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "name", "lastName", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pInputText", "", "disabled", "", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "submit-btn", 3, "click"]],
      template: function EditEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditEmployeeComponent_div_10_Template, 34, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.editemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlaW5mby9lZGl0LWVtcGxveWVlL2VkaXQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-employee',
          templateUrl: './edit-employee.component.html',
          styleUrls: ['./edit-employee.component.css']
        }]
      }], function () {
        return [{
          type: _employeeinfo_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }];
      }, {
        employeeType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        employee: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/employeeinfo/employeeinfo.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/employeeinfo/employeeinfo.component.ts ***!
    \**************************************************************/

  /*! exports provided: EmployeeinfoComponent */

  /***/
  function srcAppAdminEmployeeinfoEmployeeinfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeinfoComponent", function () {
      return EmployeeinfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/enums/role.enum */
    "./src/app/shared/enums/role.enum.ts");
    /* harmony import */


    var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _employeeinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./employeeinfo.service */
    "./src/app/admin/employeeinfo/employeeinfo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/checkbox/checkbox */
    "./src/app/components/checkbox/checkbox.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./add-employee/add-employee.component */
    "./src/app/admin/employeeinfo/add-employee/add-employee.component.ts");
    /* harmony import */


    var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./edit-employee/edit-employee.component */
    "./src/app/admin/employeeinfo/edit-employee/edit-employee.component.ts");

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1510);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1504.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1513 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1513.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1513.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1513.field);
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_4_th_1_Template, 3, 3, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1511 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1511);
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1514 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/profiles/avatar-0", rowData_r1514.employeeDetailsId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rowData_r1514[col_r1517.field]);
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1514 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1514[col_r1517.field], " ");
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_td_1_ng_container_1_Template, 6, 2, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1517 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1517.field == "fullName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1517.field != "fullName");
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var _c1 = function _c1(a0) {
      return {
        userDetailsId: a0
      };
    };

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1525 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_td_1_Template, 3, 2, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1525);

          var rowData_r1514 = ctx.$implicit;

          var ctx_r1524 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r1524.onManageAccess(rowData_r1514);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Manage Access");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_Template_a_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1525);

          var rowData_r1514 = ctx.$implicit;

          var ctx_r1526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r1526.resetPassword(rowData_r1514);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Reset Password Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_Template_a_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1525);

          var rowData_r1514 = ctx.$implicit;

          var ctx_r1527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r1527.sendRegistrationLink(rowData_r1514);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Send Registration Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_Template_a_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1525);

          var rowData_r1514 = ctx.$implicit;

          var ctx_r1528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r1528.onDelete(rowData_r1514);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1514 = ctx.$implicit;
        var columns_r1515 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1515);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "../employee/" + rowData_r1514.employeeDetailsId + "/profile"))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, rowData_r1514.employeeDetailsId));
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_2_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No employees found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return [10, 25, 50];
    };

    var _c3 = function _c3() {
      return ["fullName", "description", "email", "phoneNumber", "role", "employeeDetailsId"];
    };

    function EmployeeinfoComponent_p_tabView_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_3_Template, 3, 0, "ng-template", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_4_Template, 4, 1, "ng-template", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_5_Template, 23, 7, "ng-template", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmployeeinfoComponent_p_tabView_15_div_2_ng_template_6_Template, 3, 0, "ng-template", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1502.cols)("value", ctx_r1502.lstEmployees)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1535 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1535);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1529.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1538 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1538.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1538.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1538.field);
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_4_th_1_Template, 3, 3, "th", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1536 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1536);
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1542 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1539 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/profiles/avatar-0", rowData_r1539.employeeDetailsId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rowData_r1539[col_r1542.field]);
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1542 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1539 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1539[col_r1542.field], " ");
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_td_1_ng_container_1_Template, 6, 2, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1542 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1542.field == "fullName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1542.field != "fullName");
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1550 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_td_1_Template, 3, 2, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1550);

          var rowData_r1539 = ctx.$implicit;

          var ctx_r1549 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r1549.onDelete(rowData_r1539);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1539 = ctx.$implicit;
        var columns_r1540 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1540);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "../employee/" + rowData_r1539.employeeDetailsId + "/profile"))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, rowData_r1539.employeeDetailsId));
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No employees found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeinfoComponent_p_tabView_15_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_3_Template, 3, 0, "ng-template", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_4_Template, 4, 1, "ng-template", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_5_Template, 14, 7, "ng-template", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmployeeinfoComponent_p_tabView_15_div_4_ng_template_6_Template, 3, 0, "ng-template", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1503.cols)("value", ctx_r1503.lstEmployees)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
      }
    }

    function EmployeeinfoComponent_p_tabView_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r1552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-tabView", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function EmployeeinfoComponent_p_tabView_15_Template_p_tabView_onChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1552);

          var ctx_r1551 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1551.handleChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-tabPanel", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeinfoComponent_p_tabView_15_div_2_Template, 7, 10, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-tabPanel", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeinfoComponent_p_tabView_15_div_4_Template, 7, 10, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1496.listviewcol && !ctx_r1496.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1496.listviewcol && !ctx_r1496.loading);
      }
    }

    function EmployeeinfoComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "John Doe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Web Designer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Richard Miles");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Web Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "John Smith");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Android Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Mike Litorus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "IOS Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Wilmer Deluna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Team Leader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Jeffrey Warden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Web Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Bernardo Galaviz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Web Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Lesley Grauer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Team Leader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Jeffery Lalor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Team Leader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Loren Gatlin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Android Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Tarah Shropshire");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Android Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h4", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Catherine Manseau");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Android Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeinfoComponent_ng_container_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r1556 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-checkbox", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeeinfoComponent_ng_container_62_Template_p_checkbox_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1556);

          var module_r1553 = ctx.$implicit;
          return module_r1553.active = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var module_r1553 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r1553.moduleName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", module_r1553.active);
      }
    }

    function EmployeeinfoComponent_ng_container_78_Template(rf, ctx) {
      if (rf & 1) {
        var _r1560 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-checkbox", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function EmployeeinfoComponent_ng_container_78_Template_p_checkbox_onChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1560);

          var document_r1557 = ctx.$implicit;

          var ctx_r1559 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1559.documentCategoryChange(document_r1557, "read", $event);
        })("ngModelChange", function EmployeeinfoComponent_ng_container_78_Template_p_checkbox_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1560);

          var document_r1557 = ctx.$implicit;
          return document_r1557.read = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-checkbox", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function EmployeeinfoComponent_ng_container_78_Template_p_checkbox_onChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1560);

          var document_r1557 = ctx.$implicit;

          var ctx_r1562 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1562.documentCategoryChange(document_r1557, "write", $event);
        })("ngModelChange", function EmployeeinfoComponent_ng_container_78_Template_p_checkbox_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1560);

          var document_r1557 = ctx.$implicit;
          return document_r1557.write = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-checkbox", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function EmployeeinfoComponent_ng_container_78_Template_p_checkbox_onChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1560);

          var document_r1557 = ctx.$implicit;

          var ctx_r1564 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1564.documentCategoryChange(document_r1557, "delete", $event);
        })("ngModelChange", function EmployeeinfoComponent_ng_container_78_Template_p_checkbox_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1560);

          var document_r1557 = ctx.$implicit;
          return document_r1557["delete"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var document_r1557 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", document_r1557.documentCategory, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", document_r1557.read);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", document_r1557.write);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", document_r1557["delete"]);
      }
    }

    function EmployeeinfoComponent_ng_container_86_Template(rf, ctx) {
      if (rf & 1) {
        var _r1567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-employee", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function EmployeeinfoComponent_ng_container_86_Template_app_add_employee_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1567);

          var ctx_r1566 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1566.onEmployeeAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employeeType", ctx_r1500.employeeType);
      }
    }

    function EmployeeinfoComponent_ng_container_87_Template(rf, ctx) {
      if (rf & 1) {
        var _r1569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-edit-employee", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function EmployeeinfoComponent_ng_container_87_Template_app_edit_employee_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1569);

          var ctx_r1568 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1568.onEmployeeAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1501 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employeeType", ctx_r1501.employeeType)("employee", ctx_r1501.employee);
      }
    }

    var EmployeeinfoComponent = /*#__PURE__*/function () {
      function EmployeeinfoComponent(confirmationService, sharedService, employeeService) {
        _classCallCheck(this, EmployeeinfoComponent);

        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.employeeService = employeeService;
        this.listviewcol = true;
        this.gridviewcol = false;
        this.editemployeeDisplay = 'none';
        this.addemployeeDisplay = "none";
        this.employeeType = "";
        this.loading = false;
        this.designation = [{
          label: 'Select Designation',
          value: null
        }, {
          label: 'Web Developer',
          value: {
            id: 'Web Developer',
            name: 'Web Developer'
          }
        }, {
          label: 'UI Developer',
          value: {
            id: 'UI Developer',
            name: 'UI Developer'
          }
        }, {
          label: 'Android Developer',
          value: {
            id: 'Android Developer',
            name: 'Android Developer'
          }
        }, {
          label: 'Ios Developer',
          value: {
            id: 'Ios Developer',
            name: 'Ios Developer'
          }
        }];
      }

      _createClass(EmployeeinfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'fullName',
            header: 'Name'
          }, {
            field: 'employeeDetailsId',
            header: 'Employee ID'
          }, {
            field: 'email',
            header: 'Email'
          }, {
            field: 'phoneNumber',
            header: 'Mobile'
          }, {
            field: 'role',
            header: 'Role'
          }];
          this.getEmployees();
        }
      }, {
        key: "onEmployeeAddCloseClick",
        value: function onEmployeeAddCloseClick(event) {
          if (event.type == 'Add' || event.type == 'Edit') {
            this.getEmployees();
          }

          this.employeeType = null;
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.getEmployees(1);
          } else if (event.index == 1) {
            this.getEmployees(0);
          }
        }
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this22 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.lstEmployees = [];
          this.loading = true;
          this.employeeService.getAllEmployees(status).subscribe(function (res) {
            _this22.loading = false;
            _this22.lstEmployees = [];

            if (res.message == "Employees") {
              var lstEmp = res.responsePayload;
              lstEmp.forEach(function (element) {
                element.role = _app_shared_enums_role_enum__WEBPACK_IMPORTED_MODULE_1__["Role"][element.roleId];
              });
              _this22.lstEmployees = lstEmp;
            } // lstEmp.forEach((value, index) => {
            //   this.orginalCars.push(value);
            // })

          }), function (error) {
            _this22.loading = false;
          };
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.employeeType = 'Add'; //this.addemployeeDisplay = "block";

          this.hiddenScroll();
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
        key: "gridview",
        value: function gridview() {
          this.gridviewcol = true;
          this.listviewcol = false;
          document.getElementById("grid").classList.add("active");
          document.getElementById("list").classList.remove("active");
        }
      }, {
        key: "listview",
        value: function listview() {
          this.listviewcol = true;
          this.gridviewcol = false;
          document.getElementById("list").classList.add("active");
          document.getElementById("grid").classList.remove("active");
        }
      }, {
        key: "save",
        value: function save() {
          this.displayScroll();
        }
      }, {
        key: "confirm",
        value: function confirm(rowData) {
          var _this23 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this data?',
            accept: function accept() {
              _this23["delete"](rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this24 = this;

          this.employeeService.deactivateEmployee(rowData.employeeDetailsId).subscribe(function (res) {
            if (res.message == "Employee deactivate successful") {
              _this24.displayDialog = false;

              _this24.sharedService.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message
              });

              _this24.getEmployees();
            }
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.employee = rowData;
        }
      }, {
        key: "onManageAccess",
        value: function onManageAccess(rowData) {
          var _this25 = this;

          this.employee = rowData;
          this.employeeService.getManageAccess(this.employee.employeeDetailsId).subscribe(function (res) {
            _this25.loading = false;
            _this25.accessibleModulesDetailsId = res.responsePayload.accessibleModulesDetailsId;
            var allModules = res.responsePayload.allModules;
            _this25.lstDocumentCategory = res.responsePayload.documentAccess;
            var existModules = res.responsePayload.accessibleModules;
            _this25.lstAccessModules = [];

            for (var index = 0; index < allModules.length; index++) {
              var _module = {};
              var element = allModules[index];
              _module.moduleName = element;

              for (var x = 0; x < existModules.length; x++) {
                var existModule = existModules[x];

                if (existModule == element) {
                  _module.active = true;
                  break;
                }
              }

              _this25.lstAccessModules.push(_module);
            }

            for (var _index2 = 0; _index2 < _this25.lstDocumentCategory.length; _index2++) {
              var _element2 = _this25.lstDocumentCategory[_index2];

              if (_element2.accessType == 3) {
                _element2["delete"] = true;
              } else if (_element2.accessType == 2) {
                _element2.write = true;
              } else {
                _element2.read = true;
              }
            }

            console.log(_this25.lstDocumentCategory);
          }), function (error) {
            _this25.loading = false;
          };
        }
      }, {
        key: "documentCategoryChange",
        value: function documentCategoryChange(document, accessType, $event) {
          if (accessType == 'read' && $event.checked) {
            document.read = true;
            document.write = false;
            document["delete"] = false;
          } else if (accessType == 'write' && $event.checked) {
            document.read = false;
            document.write = true;
            document["delete"] = false;
          } else if (accessType == 'delete' && $event.checked) {
            document.read = false;
            document.write = false;
            document["delete"] = true;
          }
        }
      }, {
        key: "saveAccess",
        value: function saveAccess(rowData) {
          var _this26 = this;

          var activeModules = [];

          for (var index = 0; index < this.lstAccessModules.length; index++) {
            var element = this.lstAccessModules[index];

            if (element.active) {
              activeModules.push(element.moduleName);
            }
          }

          for (var _index3 = 0; _index3 < this.lstDocumentCategory.length; _index3++) {
            var _element3 = this.lstDocumentCategory[_index3];

            if (_element3["delete"]) {
              _element3.accessType = 3;
            } else if (_element3.write) {
              _element3.accessType = 2;
            } else {
              _element3.accessType = 1;
            }
          }

          this.employeeService.saveManageAccess({
            employeeDetailsId: this.employee.employeeDetailsId,
            accessibleModulesDetailsId: this.accessibleModulesDetailsId,
            accessibleModules: activeModules.toString(),
            documentAccess: this.lstDocumentCategory
          }).subscribe(function (res) {
            _this26.loading = false;

            if (res.statusCode == 200) {
              _this26.sharedService.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message
              });
            } else {
              _this26.sharedService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.message
              });
            }
          }), function (error) {
            _this26.loading = false;
          };
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(rowData) {
          this.employee = rowData;
        }
      }, {
        key: "sendRegistrationLink",
        value: function sendRegistrationLink(rowData) {
          var _this27 = this;

          this.employeeService.sendRegistrationLink(rowData.employeeDetailsId).subscribe(function (res) {
            if (res.message != "Registration link sent successful") {
              _this27.sharedService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.message
              });
            } else {
              _this27.sharedService.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message
              });
            }
          });
        }
      }, {
        key: "resetPasswordConfirm",
        value: function resetPasswordConfirm(rowData) {
          var _this28 = this;

          this.employeeService.resetPasswordEmployee(rowData.employeeDetailsId).subscribe(function (res) {
            if (res.message == "Employee password reset successful") {
              _this28.displayDialog = false;
            }
          });
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.employeeType = 'Edit';
          this.employee = data; // this.editemployeeDisplay = "block";
          // this.newCar = false;
          // this.car = this.cloneCar(data);
          // this.displayDialog = true;

          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editemployeeDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
        }
      }]);

      return EmployeeinfoComponent;
    }();

    EmployeeinfoComponent.ɵfac = function EmployeeinfoComponent_Factory(t) {
      return new (t || EmployeeinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employeeinfo_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]));
    };

    EmployeeinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeinfoComponent,
      selectors: [["app-employeeinfo"]],
      decls: 88,
      vars: 6,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange", 4, "ngIf"], ["class", "col pl-0 pr-0", 4, "ngIf"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], ["id", "reset_password_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], ["id", "manage_access", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "card"], [1, "card-body"], [1, "card-title"], [4, "ngFor", "ngForOf"], [1, "row", "module-div"], [1, "col-2", "check-box-div"], [4, "ngIf"], [3, "onChange"], ["header", "Active Employees"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Employees"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "routerLink", "state"], [1, "fa", "fa-pencil", "m-r-5"], ["data-target", "#manage_access", "href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-key"], ["data-target", "#reset_password_employee", "href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], [1, "table-avatar"], ["href", "javascript:void(0)", 1, "avatar"], ["alt", "", 3, "src"], ["colspan", "6", 2, "text-align", "left"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", 3, "click"], [1, "col", "pl-0", "pr-0"], [1, "row", "staff-grid-row"], [1, "col-md-4", "col-sm-6", "col-12", "col-lg-4", "col-xl-3"], [1, "profile-widget"], [1, "profile-img"], ["href", "profile.html", 1, "avatar"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", ""], [1, "dropdown", "profile-action"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", "data-toggle", "modal", "data-target", "#edit_employee", 1, "dropdown-item"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item"], [1, "user-name", "m-t-10", "mb-0", "text-ellipsis"], ["href", "profile.html"], [1, "small", "text-muted"], ["src", "assets/img/profiles/avatar-09.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-10.jpg", "alt", ""], [1, "avatar"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-11.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-12.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-13.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-01.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-16.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-04.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-03.jpg", "alt", ""], ["src", "assets/img/profiles/avatar-08.jpg", "alt", ""], [1, "col-6", "check-box-div"], ["binary", "true", 3, "ngModel", "ngModelChange"], ["binary", "true", 3, "ngModel", "onChange", "ngModelChange"], [3, "employeeType", "onClose"], [3, "employeeType", "employee", "onClose"]],
      template: function EmployeeinfoComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmployeeinfoComponent_p_tabView_15_Template, 5, 2, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmployeeinfoComponent_div_16_Template, 254, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Are you sure want to delete?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_Template_a_click_29_listener($event) {
            return ctx["delete"](ctx.employee);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Are you sure want to Reset password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_Template_a_click_46_listener($event) {
            return ctx.resetPasswordConfirm(ctx.employee);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Manage Access");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Module Access");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EmployeeinfoComponent_ng_container_62_Template, 9, 2, "ng-container", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Document Category Access");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " DocumentCategory ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Write ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, EmployeeinfoComponent_ng_container_78_Template, 15, 4, "ng-container", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_Template_a_click_81_listener($event) {
            return ctx.saveAccess(ctx.employee);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, EmployeeinfoComponent_ng_container_86_Template, 2, 1, "ng-container", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, EmployeeinfoComponent_ng_container_87_Template, 2, 2, "ng-container", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gridviewcol);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridviewcol);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstAccessModules);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstDocumentCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employeeType == "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employeeType == "Edit");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_7__["SortIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_13__["AddEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__["EditEmployeeComponent"]],
      styles: [".actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n.actions[_ngcontent-%COMP%]{\n    width: 100px;\n    text-align: center;    \n}\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\n    color: #777;\n}\n[_nghost-%COMP%]     .ui-table-customers {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\n    border-radius: 2px;\n    padding: 0.25em 0.5em;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 12px;\n    letter-spacing: 0.3px;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\n    background-color: #c8e6c9;\n    color: #256029;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\n    background-color: #ffcdd2;\n    color: #c63737;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\n    background-color: #feedaf;\n    color: #8a5340;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\n    background-color: #b3e5fc;\n    color: #23547b;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\n    background-color: #eccfff;\n    color: #694382;\n}\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\n    background-color: #ffd8b2;\n    color: #805b36;\n}\n[_nghost-%COMP%]     .ui-table-customers .flag {\n    vertical-align: middle;\n    width: 30px;\n    height: 20px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\n    display: inline-block;\n    vertical-align: middle;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\n    vertical-align: middle;\n    width: 24px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\n    margin-top: 0.125em;\n    vertical-align: middle;\n    margin-left: 0.5em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\n    float: left;\n    width: auto;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\n    height: 8px;\n    background-color: #d8dadc;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\n    background-color: #00acad;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\n    display: block;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\n    width: 100%;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\n    float: right;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\n    width: 200px;\n    height: 33px;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\n    min-width: 25em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\n    font-weight: 400;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\n    border: 0 none;\n    padding: 12px;\n    text-align: left;\n    font-size: 19px;\n    color: #ffffff;\n    background: #ffffff;\n    border-bottom: 1px solid #ff9b44;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\n    border: 0 none;\n    padding: 1em;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\n    border: 0 none;\n    text-align: left;\n    border-bottom: 2px solid #dee2e6;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\n    border-top: 1px solid #c8c8c8;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\n    border: 0 none;\n    cursor: auto;\n    word-wrap: break-word;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\n    \n    text-align: center;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\n    text-transform: uppercase;\n}\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n    display: none;\n}\n\n@media screen and (max-width: 64em) {\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\n        display: none !important;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\n        text-align: left;\n        display: block;\n        border: 0 none !important;\n        width: 100% !important;\n        float: left;\n        clear: left;\n        border: 0 none;\n   }\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n        padding: 0.4em;\n        min-width: 30%;\n        display: inline-block;\n        margin: -0.4em 1em -0.4em -0.4em;\n        font-weight: bold;\n   }\n}\nh2.table-avatar[_ngcontent-%COMP%] {\n    align-items: center;\n    display: inline-flex;\n    font-size: inherit;\n    font-weight: 400;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWVpbmZvL2VtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLCtHQUErRztBQUNuSDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsZUFBZTtBQUNmO0lBQ0k7UUFDSSx3QkFBd0I7R0FDN0I7SUFDQztRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsV0FBVztRQUNYLGNBQWM7R0FDbkI7SUFDQztRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyxpQkFBaUI7R0FDdEI7QUFDSDtBQUNDO0lBQ0csbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlaW5mby9lbXBsb3llZWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25ze1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuLmFjdGlvbnMgLmFjdGlvbi1pY29ue1xuICAgIGNvbG9yOiAjNzc3O1xufVxuLmFjdGlvbnN7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG59XG4uYWN0aW9ucyAuYWN0aW9uLWljb257XG4gICAgY29sb3I6ICM3Nzc7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1xdWFsaWZpZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XG4gICAgY29sb3I6ICMyNTYwMjk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXVucXVhbGlmaWVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xuICAgIGNvbG9yOiAjYzYzNzM3O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1uZWdvdGlhdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWRhZjtcbiAgICBjb2xvcjogIzhhNTM0MDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xuICAgIGNvbG9yOiAjMjM1NDdiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1yZW5ld2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNjZmZmO1xuICAgIGNvbG9yOiAjNjk0MzgyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1wcm9wb3NhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDhiMjtcbiAgICBjb2xvcjogIzgwNWIzNjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5mbGFnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDI0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDAuMTI1ZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1wYWdpbmF0b3ItY3VycmVudCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYWRjO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNhZDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1jb2x1bW4tZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1jb2x1bW4tZmlsdGVyIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1nbG9iYWxmaWx0ZXItY29udGFpbmVyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kYXRlcGlja2VyIHtcbiAgICBtaW4td2lkdGg6IDI1ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1jYXB0aW9uIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjliNDQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBwYWRkaW5nOiAxZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aC51aS1maWx0ZXItY29sdW1uIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M4YzhjODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkIHtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kcm9wZG93bi1sYWJlbDpub3QoLnVpLXBsYWNlaG9sZGVyKSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLCA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIC51aS1jb2x1bW4tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAtMC40ZW0gMWVtIC0wLjRlbSAtMC40ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgfVxufVxuIGgyLnRhYmxlLWF2YXRhciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeinfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employeeinfo',
          templateUrl: './employeeinfo.component.html',
          styleUrls: ['./employeeinfo.component.css']
        }]
      }], function () {
        return [{
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _employeeinfo_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/employeeinfo/employeeinfo.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/employeeinfo/employeeinfo.service.ts ***!
    \************************************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppAdminEmployeeinfoEmployeeinfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(http) {
        _classCallCheck(this, EmployeeService);

        this.http = http;
      }

      _createClass(EmployeeService, [{
        key: "getAllEmployees",
        value: function getAllEmployees(status) {
          return this.http.get("api/employee/all?status=".concat(status));
        }
      }, {
        key: "getEmployee",
        value: function getEmployee(employeeDetailsId) {
          return this.http.get("api/employee/".concat(employeeDetailsId));
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(employee) {
          return this.http.post("api/employee/add", employee);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(employee) {
          return this.http.put('api/employee/update', employee);
        }
      }, {
        key: "activateEmployee",
        value: function activateEmployee(employeeDetailsId) {
          return this.http.put("api/employee/activate/".concat(employeeDetailsId), {});
        }
      }, {
        key: "deactivateEmployee",
        value: function deactivateEmployee(employeeDetailsId) {
          return this.http.put("api/employee/deactivate/".concat(employeeDetailsId), {});
        }
      }, {
        key: "resetPasswordEmployee",
        value: function resetPasswordEmployee(employeeDetailsId) {
          return this.http.put("api/employee/password/reset/".concat(employeeDetailsId), {});
        }
      }, {
        key: "sendRegistrationLink",
        value: function sendRegistrationLink(employeeDetailsId) {
          return this.http.put("api/employee/registrationlink/send/".concat(employeeDetailsId), {});
        }
      }, {
        key: "isEmployeeExists",
        value: function isEmployeeExists(email) {
          return this.http.get("api/employee/email/exists?email=".concat(email));
        }
      }, {
        key: "getManageAccess",
        value: function getManageAccess(employeeDetailsId) {
          return this.http.get("api/manage/access/get/".concat(employeeDetailsId));
        }
      }, {
        key: "saveManageAccess",
        value: function saveManageAccess(accessibleModules) {
          return this.http.post("api/manage/access/update", accessibleModules);
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ɵfac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/project/add-project/add-project.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/project/add-project/add-project.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddProjectComponent */

  /***/
  function srcAppAdminProjectAddProjectAddProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function () {
      return AddProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/project.model */
    "./src/app/shared/models/project.model.ts");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/admin/project/project.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/service/auth.service */
    "./src/app/core/service/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/calendar/calendar */
    "./src/app/components/calendar/calendar.ts");
    /* harmony import */


    var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/dropdown/dropdown */
    "./src/app/components/dropdown/dropdown.ts");

    function AddProjectComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2004 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2004.errLabel, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var AddProjectComponent = /*#__PURE__*/function () {
      function AddProjectComponent(projectService, sharedService, authService) {
        _classCallCheck(this, AddProjectComponent);

        this.projectService = projectService;
        this.sharedService = sharedService;
        this.authService = authService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addemployeeDisplay = "none";
      }

      _createClass(AddProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.projectType == 'Add') {
            this.project = new _app_shared_models_project_model__WEBPACK_IMPORTED_MODULE_1__["Project"]();
          } else {
            if (this.project.startDate) {
              var date = this.project.startDate.split('-');
              this.project.startDateFormat = new Date(parseInt(date[2]), parseInt(date[0]) - 1, parseInt(date[1]));
            }

            if (this.project.endDate) {
              var _date = this.project.endDate.split('-');

              this.project.endDateFormat = new Date(parseInt(_date[2]), parseInt(_date[0]) - 1, parseInt(_date[1]));
            }
          }

          console.log(this.companyList);
          this.showDialogToAdd();
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          //this.department = new Department;
          this.addemployeeDisplay = "block";
          this.hiddenScroll();
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
        key: "checkProjectAlreadyExist",
        value: function checkProjectAlreadyExist() {
          var _this29 = this;

          this.projectService.isProjectExists(this.project.projectName).subscribe(function (res) {
            if (res.statusCode != 200) {
              _this29.errLabel = res.message;
              _this29.project.projectName = "";
            }
          }, function (error) {
            _this29.errLabel = error;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this30 = this;

          if (this.project.startDateFormat) {
            var day = this.project.startDateFormat.getDate();
            var month = this.project.startDateFormat.getMonth() + 1; // add 1 because months are indexed from 0

            var year = this.project.startDateFormat.getFullYear();
            this.project.startDate = month + "-" + day + "-" + year;
          }

          if (this.project.endDateFormat) {
            var _day = this.project.endDateFormat.getDate();

            var _month = this.project.endDateFormat.getMonth() + 1; // add 1 because months are indexed from 0


            var _year = this.project.endDateFormat.getFullYear();

            this.project.endDate = _month + "-" + _day + "-" + _year;
          } else {
            this.project.endDate = undefined;
          }

          if (this.projectType == 'Add') {
            this.projectService.addProject(this.project).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this30.addemployeeDisplay = "none";

                _this30.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this30.displayScroll();

                _this30.onClose.emit({
                  type: 'add'
                });
              } else {
                _this30.errLabel = res.message;
              }
            }, function (error) {
              _this30.errLabel = error;
            });
          } else {
            this.projectService.updateProject(this.project).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this30.addemployeeDisplay = "none";

                _this30.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this30.displayScroll();

                _this30.onClose.emit({
                  type: 'edit',
                  project: _this30.project
                });
              } else {
                _this30.errLabel = res.message;
              }
            }, function (error) {
              _this30.errLabel = error;
            });
          }
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addemployeeDisplay = "none";
          this.displayScroll();
          this.onClose.emit({
            type: 'cancel'
          });
        }
      }]);

      return AddProjectComponent;
    }();

    AddProjectComponent.ɵfac = function AddProjectComponent_Factory(t) {
      return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    AddProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProjectComponent,
      selectors: [["app-add-project"]],
      inputs: {
        companyList: "companyList",
        projectType: "projectType",
        project: "project"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 49,
      vars: 10,
      consts: [["id", "add_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "name", "projectName", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["pInputText", "", "name", "desc", "placeholder", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "startDate", "showIcon", "true", "dateFormat", "mm-dd-yy", 3, "ngModel", "ngModelChange"], ["name", "endDate", "showIcon", "true", "dateFormat", "mm-dd-yy", 3, "ngModel", "ngModelChange"], ["name", "company", "placeholder", "Select Company", 3, "options", "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", 1, "btn", "btn-primary", "submit-btn", 3, "click"], [1, "col-sm-6", 2, "color", "red"]],
      template: function AddProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_6_listener($event) {
            return ctx.closeAddmodal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddProjectComponent_div_11_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Project Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddProjectComponent_Template_input_blur_19_listener($event) {
            return ctx.checkProjectAlreadyExist();
          })("ngModelChange", function AddProjectComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.project.projectName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.project.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p-calendar", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_p_calendar_ngModelChange_33_listener($event) {
            return ctx.project.startDateFormat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p-calendar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_p_calendar_ngModelChange_38_listener($event) {
            return ctx.project.endDateFormat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p-dropdown", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_p_dropdown_ngModelChange_45_listener($event) {
            return ctx.project.companyDetailsId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_47_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.addemployeeDisplay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.projectName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.startDateFormat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.endDateFormat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.companyList)("ngModel", ctx.project.companyDetailsId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2plY3QvYWRkLXByb2plY3QvYWRkLXByb2plY3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-project',
          templateUrl: './add-project.component.html',
          styleUrls: ['./add-project.component.css']
        }]
      }], function () {
        return [{
          type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, {
        companyList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        projectType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        project: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/project/project.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/project/project.component.ts ***!
    \****************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppAdminProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_project_assignment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/models/project-assignment.model */
    "./src/app/shared/models/project-assignment.model.ts");
    /* harmony import */


    var _employeeinfo_employeeinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../employeeinfo/employeeinfo.service */
    "./src/app/admin/employeeinfo/employeeinfo.service.ts");
    /* harmony import */


    var _company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../company/company.service */
    "./src/app/admin/company/company.service.ts");
    /* harmony import */


    var src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project.service */
    "./src/app/admin/project/project.service.ts");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/dropdown/dropdown */
    "./src/app/components/dropdown/dropdown.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/calendar/calendar */
    "./src/app/components/calendar/calendar.ts");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./add-project/add-project.component */
    "./src/app/admin/project/add-project/add-project.component.ts");
    /* harmony import */


    var _app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");

    function ProjectComponent_div_17_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProjectComponent_div_17_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1830);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1824 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1824.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectComponent_div_17_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1833 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1833.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1833.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1833.field);
      }
    }

    function ProjectComponent_div_17_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1831 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1831);
      }
    }

    function ProjectComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1837 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1834 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1834[col_r1837.field]), " ");
      }
    }

    function ProjectComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1837 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1834 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1834[col_r1837.field], " ");
      }
    }

    function ProjectComponent_div_17_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1837 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1837.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1837.field != "status");
      }
    }

    function ProjectComponent_div_17_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1845 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_17_ng_template_5_td_1_Template, 3, 2, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_17_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1845);

          var rowData_r1834 = ctx.$implicit;

          var ctx_r1844 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1844.onRowSelect(rowData_r1834);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_17_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1845);

          var rowData_r1834 = ctx.$implicit;

          var ctx_r1846 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1846.onProjectAssignSelect(rowData_r1834);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Assign Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_17_ng_template_5_Template_a_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1845);

          var rowData_r1834 = ctx.$implicit;

          var ctx_r1847 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1847.onDelete(rowData_r1834);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1834 = ctx.$implicit;
        var columns_r1835 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1834);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1835);
      }
    }

    function ProjectComponent_div_17_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No projects found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    var _c1 = function _c1() {
      return ["projectName", "description", "startDate"];
    };

    function ProjectComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectComponent_div_17_ng_template_5_Template, 17, 2, "ng-template", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1820 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1820.cols)("value", ctx_r1820.lstProjects)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function ProjectComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r1854 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProjectComponent_div_19_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1854);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1848.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectComponent_div_19_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1857 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r1857.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r1857.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r1857.field);
      }
    }

    function ProjectComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r1855 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1855);
      }
    }

    function ProjectComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1861 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1858 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r1858[col_r1861.field]), " ");
      }
    }

    function ProjectComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r1861 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r1858 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r1858[col_r1861.field], " ");
      }
    }

    function ProjectComponent_div_19_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1861 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1861.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1861.field != "status");
      }
    }

    function ProjectComponent_div_19_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1869 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_19_ng_template_5_td_1_Template, 3, 2, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_19_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1869);

          var rowData_r1858 = ctx.$implicit;

          var ctx_r1868 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1868.onRowSelect(rowData_r1858);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_19_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1869);

          var rowData_r1858 = ctx.$implicit;

          var ctx_r1870 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1870["delete"](rowData_r1858);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r1858 = ctx.$implicit;
        var columns_r1859 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r1858);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r1859);
      }
    }

    function ProjectComponent_div_19_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No projects found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r1821.cols)("value", ctx_r1821.lstProjects)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      }
    }

    function ProjectComponent_ng_container_68_Template(rf, ctx) {
      if (rf & 1) {
        var _r1872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-project", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function ProjectComponent_ng_container_68_Template_app_add_project_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1872);

          var ctx_r1871 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1871.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1822 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectType", ctx_r1822.projectType)("companyList", ctx_r1822.companyList);
      }
    }

    function ProjectComponent_ng_container_69_Template(rf, ctx) {
      if (rf & 1) {
        var _r1874 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-project", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function ProjectComponent_ng_container_69_Template_app_add_project_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1874);

          var ctx_r1873 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1873.onDeptAddCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1823 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectType", ctx_r1823.projectType)("project", ctx_r1823.project)("companyList", ctx_r1823.companyList);
      }
    }

    var ProjectComponent = /*#__PURE__*/function () {
      function ProjectComponent(emplService, companyService, confirmationService, sharedService, projectService) {
        _classCallCheck(this, ProjectComponent);

        this.emplService = emplService;
        this.companyService = companyService;
        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.projectService = projectService;
        this.editProjectDisplay = 'none';
        this.addProjectDisplay = "none";
        this.loading = false;
        this.status = 1;
        this.selectedProjectAssignMent = new _app_shared_models_project_assignment_model__WEBPACK_IMPORTED_MODULE_1__["projectAssignment"]();
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.cols = [// { field: 'departmentDetailsId', header: 'ID' },
          {
            field: 'projectName',
            header: 'Project Name'
          }, {
            field: 'description',
            header: 'Description'
          }, {
            field: 'startDate',
            header: 'Start Date'
          }];
          this.getComapnies();
          this.companyService.getAllCompanies(1).subscribe(function (res) {
            _this31.loading = false;
            _this31.companyList = [];

            if (res.statusCode == 200) {
              for (var index = 0; index < res.responsePayload.length; index++) {
                var element = res.responsePayload[index];

                _this31.companyList.push({
                  label: element.companyName,
                  value: element.companyDetailsId
                });
              }
            }
          }, function (error) {
            _this31.loading = false;
          });
          this.emplService.getAllEmployees(1).subscribe(function (res) {
            _this31.loading = false;
            _this31.lstEmployes = [];

            if (res.statusCode == 200) {
              for (var index = 0; index < res.responsePayload.length; index++) {
                var element = res.responsePayload[index];

                _this31.lstEmployes.push({
                  label: element.fullName,
                  value: element.employeeDetailsId
                });
              }
            }
          }, function (error) {
            _this31.loading = false;
          });
        }
      }, {
        key: "getProjectAssignMents",
        value: function getProjectAssignMents(event) {
          var _this32 = this;

          this.selectedProjectAssignMent = new _app_shared_models_project_assignment_model__WEBPACK_IMPORTED_MODULE_1__["projectAssignment"]();
          this.projectService.getProjectAssignMent(event).subscribe(function (res) {
            if (res.statusCode == 200) {
              var projectAssignMents = res.responsePayload;

              for (var index = 0; index < projectAssignMents.length; index++) {
                if (_this32.project.projectDetailsId == projectAssignMents[index].projectDetailsId) {
                  _this32.selectedProjectAssignMent = projectAssignMents[index];

                  if (_this32.selectedProjectAssignMent.startDate) {
                    var date = _this32.selectedProjectAssignMent.startDate.split('-');

                    _this32.selectedProjectAssignMent.startDateFormat = new Date(parseInt(date[2]), parseInt(date[0]) - 1, parseInt(date[1]));
                  }

                  if (_this32.selectedProjectAssignMent.endDate) {
                    var _date2 = _this32.selectedProjectAssignMent.endDate.split('-');

                    _this32.selectedProjectAssignMent.endDateFormat = new Date(parseInt(_date2[2]), parseInt(_date2[0]) - 1, parseInt(_date2[1]));
                  }

                  break;
                }
              }
            }
          }, function (error) {
            _this32.loading = false;
          });
        }
      }, {
        key: "assignProject",
        value: function assignProject() {
          var _this33 = this;

          if (!this.selectedEmployee) {
            return;
          }

          this.selectedProjectAssignMent.projectDetailsId = this.project.projectDetailsId;
          this.selectedProjectAssignMent.employeeDetailsId = this.selectedEmployee;

          if (this.selectedProjectAssignMent.startDateFormat) {
            var day = this.selectedProjectAssignMent.startDateFormat.getDate();
            var month = this.selectedProjectAssignMent.startDateFormat.getMonth() + 1; // add 1 because months are indexed from 0

            var year = this.selectedProjectAssignMent.startDateFormat.getFullYear();
            this.selectedProjectAssignMent.startDate = month + "-" + day + "-" + year;
          }

          if (this.selectedProjectAssignMent.endDateFormat) {
            var _day2 = this.selectedProjectAssignMent.endDateFormat.getDate();

            var _month2 = this.selectedProjectAssignMent.endDateFormat.getMonth() + 1; // add 1 because months are indexed from 0


            var _year2 = this.selectedProjectAssignMent.endDateFormat.getFullYear();

            this.selectedProjectAssignMent.endDate = _month2 + "-" + _day2 + "-" + _year2;
          } else {
            this.selectedProjectAssignMent.endDate = undefined;
          }

          if (this.selectedProjectAssignMent.projectAssignmentDetailsId) {
            this.projectService.updateProjectAssignMent(this.selectedProjectAssignMent).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this33.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this33.displayScroll();
              } else {
                _this33.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });

                _this33.displayScroll();
              }
            }, function (error) {
              _this33.loading = false;
            });
          } else {
            this.projectService.saveProjectAssignMent(this.selectedProjectAssignMent).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this33.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this33.displayScroll();
              } else {
                _this33.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });

                _this33.displayScroll();
              }
            }, function (error) {
              _this33.loading = false;
            });
          }
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.status = 1;
            this.getComapnies(1);
          } else if (event.index == 1) {
            this.status = 0;
            this.getComapnies(0);
          }
        }
      }, {
        key: "getComapnies",
        value: function getComapnies() {
          var _this34 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.loading = true;
          this.lstProjects = [];
          this.projectService.getAllProject(status).subscribe(function (res) {
            _this34.loading = false;
            _this34.lstProjects = [];
            if (res.statusCode == 200) _this34.lstProjects = res.responsePayload;
          }, function (error) {
            _this34.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.projectType = 'Add'; //this.hiddenScroll();
        }
      }, {
        key: "onDeptAddCloseClick",
        value: function onDeptAddCloseClick(event) {
          if (event.type == 'add') {
            this.getComapnies();
          } else if (event.type == 'edit') {
            this.getComapnies();
          }

          this.projectType = '';
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
        key: "save",
        value: function save() {
          this.displayScroll();
        }
      }, {
        key: "confirm",
        value: function confirm(rowData) {
          var _this35 = this;

          this.confirmationService.confirm({
            message: 'Are you sure that you want to Inactivate this data?',
            accept: function accept() {
              _this35["delete"](rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this36 = this;

          if (this.status == 1) {
            this.projectService.deactivateProject(rowData.projectDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this36.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this36.displayDialog = false;

                _this36.getComapnies();
              } else {
                _this36.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });
              }
            });
          } else {
            this.projectService.activateProject(rowData.projectDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this36.displayDialog = false;

                _this36.sharedService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message
                });

                _this36.getComapnies(_this36.status);
              } else {
                _this36.sharedService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message
                });
              }
            });
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.project = rowData;
        }
      }, {
        key: "onProjectAssignSelect",
        value: function onProjectAssignSelect(data) {
          this.project = data;
          this.selectedProjectAssignMent = new _app_shared_models_project_assignment_model__WEBPACK_IMPORTED_MODULE_1__["projectAssignment"]();
          this.selectedEmployee = 0;
          this.hiddenScroll();
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.project = data;
          this.projectType = 'Edit'; // this.editemployeeDisplay = "block";
          // this.newCar = false;
          // this.car = this.cloneCar(data);
          // this.displayDialog = true;

          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editProjectDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.addProjectDisplay = "none";
          this.displayScroll();
        }
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employeeinfo_employeeinfo_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]));
    };

    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      decls: 70,
      vars: 8,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Projects"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Projects"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], ["id", "assign_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "col-12"], [1, "form-group"], ["placeholder", "Select a Employee", 3, "options", "ngModel", "ngModelChange"], ["name", "startDate", "showIcon", "true", "dateFormat", "mm-dd-yy", 3, "ngModel", "ngModelChange"], ["name", "endDate", "showIcon", "true", "dateFormat", "mm-dd-yy", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#assign_employee", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-tasks", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [1, "fas", "fa-toggle-on"], [3, "projectType", "companyList", "onClose"], [3, "projectType", "project", "companyList", "onClose"]],
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function ProjectComponent_Template_p_tabView_onChange_15_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectComponent_div_17_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectComponent_div_19_Template, 7, 10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inactive Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Are you sure want to Inactive the project?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_a_click_32_listener($event) {
            return ctx["delete"](ctx.project);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Assign Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p-dropdown", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectComponent_Template_p_dropdown_ngModelChange_50_listener($event) {
            return ctx.selectedEmployee = $event;
          })("ngModelChange", function ProjectComponent_Template_p_dropdown_ngModelChange_50_listener($event) {
            return ctx.getProjectAssignMents($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p-calendar", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectComponent_Template_p_calendar_ngModelChange_55_listener($event) {
            return ctx.selectedProjectAssignMent.startDateFormat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p-calendar", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectComponent_Template_p_calendar_ngModelChange_60_listener($event) {
            return ctx.selectedProjectAssignMent.endDateFormat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_a_click_63_listener($event) {
            return ctx.assignProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ProjectComponent_ng_container_68_Template, 2, 2, "ng-container", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ProjectComponent_ng_container_69_Template, 2, 3, "ng-container", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.lstEmployes)("ngModel", ctx.selectedEmployee);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProjectAssignMent.startDateFormat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProjectAssignMent.endDateFormat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectType == "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectType == "Edit");
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_11__["Calendar"], _components_table_table__WEBPACK_IMPORTED_MODULE_12__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_13__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_12__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_12__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_12__["SelectableRow"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_15__["AddProjectComponent"]],
      pipes: [_app_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_16__["DisplayStatus"]],
      styles: [".actions[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    text-align: center;    \r\n}\r\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\r\n    color: #777;\r\n}\r\n.actions[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    text-align: center;    \r\n}\r\n.actions[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]{\r\n    color: #777;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge {\r\n    border-radius: 2px;\r\n    padding: 0.25em 0.5em;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-qualified {\r\n    background-color: #c8e6c9;\r\n    color: #256029;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-unqualified {\r\n    background-color: #ffcdd2;\r\n    color: #c63737;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-negotiation {\r\n    background-color: #feedaf;\r\n    color: #8a5340;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-new {\r\n    background-color: #b3e5fc;\r\n    color: #23547b;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-renewal {\r\n    background-color: #eccfff;\r\n    color: #694382;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .customer-badge.status-proposal {\r\n    background-color: #ffd8b2;\r\n    color: #805b36;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .flag {\r\n    vertical-align: middle;\r\n    width: 30px;\r\n    height: 20px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option img {\r\n    vertical-align: middle;\r\n    width: 24px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-multiselect-representative-option span {\r\n    margin-top: 0.125em;\r\n    vertical-align: middle;\r\n    margin-left: 0.5em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-dropdown {\r\n    float: left;\r\n    width: auto;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator .ui-paginator-current {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar {\r\n    height: 8px;\r\n    background-color: #d8dadc;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-progressbar .ui-progressbar-value {\r\n    background-color: #00acad;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter {\r\n    display: block;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-column-filter input {\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-globalfilter-container input {\r\n    width: 200px;\r\n    height: 33px;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker {\r\n    min-width: 25em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-datepicker td {\r\n    font-weight: 400;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-caption {\r\n    border: 0 none;\r\n    padding: 12px;\r\n    text-align: left;\r\n    font-size: 19px;\r\n    color: #ffffff;\r\n    background: #ffffff;\r\n    border-bottom: 1px solid #ff9b44;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-paginator {\r\n    border: 0 none;\r\n    padding: 1em;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th {\r\n    border: 0 none;\r\n    text-align: left;\r\n    border-bottom: 2px solid #dee2e6;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\r\n    border-top: 1px solid #c8c8c8;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-thead > tr > th:last-child {\r\n    \r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td {\r\n    border: 0 none;\r\n    cursor: auto;\r\n    word-wrap: break-word;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td:last-child {\r\n    \r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\r\n    text-transform: uppercase;\r\n}\r\n[_nghost-%COMP%]     .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 64em) {\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-thead > tr > th, [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\r\n        display: none !important;\r\n   }\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td {\r\n        text-align: left;\r\n        display: block;\r\n        border: 0 none !important;\r\n        width: 100% !important;\r\n        float: left;\r\n        clear: left;\r\n        border: 0 none;\r\n   }\r\n    [_nghost-%COMP%]     .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\r\n        padding: 0.4em;\r\n        min-width: 30%;\r\n        display: inline-block;\r\n        margin: -0.4em 1em -0.4em -0.4em;\r\n        font-weight: bold;\r\n   }\r\n}\r\nh2.table-avatar[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: inline-flex;\r\n    font-size: inherit;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksK0dBQStHO0FBQ25IO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLHdCQUF3QjtHQUM3QjtJQUNDO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztHQUNuQjtJQUNDO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLGlCQUFpQjtHQUN0QjtBQUNIO0FBQ0M7SUFDRyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uc3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmFjdGlvbnMgLmFjdGlvbi1pY29ue1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcbi5hY3Rpb25zIC5hY3Rpb24taWNvbntcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1xdWFsaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcclxuICAgIGNvbG9yOiAjMjU2MDI5O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtdW5xdWFsaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcclxuICAgIGNvbG9yOiAjYzYzNzM3O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmVnb3RpYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWRhZjtcclxuICAgIGNvbG9yOiAjOGE1MzQwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmM7XHJcbiAgICBjb2xvcjogIzIzNTQ3YjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXJlbmV3YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjY2ZmZjtcclxuICAgIGNvbG9yOiAjNjk0MzgyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcHJvcG9zYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDhiMjtcclxuICAgIGNvbG9yOiAjODA1YjM2O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5mbGFnIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiBpbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24gc3BhbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjEyNWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3IgLnVpLXBhZ2luYXRvci1jdXJyZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYWRjO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wcm9ncmVzc2JhciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNhZDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kYXRlcGlja2VyIHtcclxuICAgIG1pbi13aWR0aDogMjVlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZGF0ZXBpY2tlciB0ZCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS1jYXB0aW9uIHtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmOWI0NDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcGFnaW5hdG9yIHtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aC51aS1maWx0ZXItY29sdW1uIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQge1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kcm9wZG93bi1sYWJlbDpub3QoLnVpLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRlbSkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRoZWFkID4gdHIgPiB0aCwgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjbGVhcjogbGVmdDtcclxuICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAudWktY29sdW1uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjRlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAtMC40ZW0gMWVtIC0wLjRlbSAtMC40ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxufVxyXG4gaDIudGFibGUtYXZhdGFyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project',
          templateUrl: './project.component.html',
          styleUrls: ['./project.component.css']
        }]
      }], function () {
        return [{
          type: _employeeinfo_employeeinfo_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
        }, {
          type: _company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
        }, {
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/project/project.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/project/project.service.ts ***!
    \**************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppAdminProjectProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectService = /*#__PURE__*/function () {
      function ProjectService(http) {
        _classCallCheck(this, ProjectService);

        this.http = http;
      }

      _createClass(ProjectService, [{
        key: "getAllProject",
        value: function getAllProject(status) {
          return this.http.get("api/project/all?status=".concat(status));
        }
      }, {
        key: "getProject",
        value: function getProject(projectDetailsId) {
          return this.http.get("api/project/".concat(projectDetailsId));
        }
      }, {
        key: "addProject",
        value: function addProject(project) {
          return this.http.post("api/project/add", project);
        }
      }, {
        key: "updateProject",
        value: function updateProject(project) {
          return this.http.post('api/project/update', project);
        }
      }, {
        key: "activateProject",
        value: function activateProject(projectDetailsId) {
          return this.http.put("api/project/activate/".concat(projectDetailsId), {});
        }
      }, {
        key: "deactivateProject",
        value: function deactivateProject(projectDetailsId) {
          return this.http.put("api/project/deactivate/".concat(projectDetailsId), {});
        }
      }, {
        key: "isProjectExists",
        value: function isProjectExists(projectName) {
          return this.http.get("api/project/exists?projectName=".concat(projectName));
        }
      }, {
        key: "getProjectAssignMent",
        value: function getProjectAssignMent(employeeDetailsId) {
          return this.http.get("api/project/assignment/all/".concat(employeeDetailsId, "?status=1"));
        }
      }, {
        key: "updateProjectAssignMent",
        value: function updateProjectAssignMent(projectAssignment) {
          return this.http.post('api/project/assignment/update', projectAssignment);
        }
      }, {
        key: "saveProjectAssignMent",
        value: function saveProjectAssignMent(projectAssignment) {
          return this.http.post('api/project/assignment/save', projectAssignment);
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ɵfac = function ProjectService_Factory(t) {
      return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectService,
      factory: ProjectService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/company-module.model.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/models/company-module.model.ts ***!
    \*******************************************************/

  /*! exports provided: Company */

  /***/
  function srcAppSharedModelsCompanyModuleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Company", function () {
      return Company;
    });

    var Company = function Company() {
      _classCallCheck(this, Company);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/department.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/models/department.model.ts ***!
    \***************************************************/

  /*! exports provided: Department */

  /***/
  function srcAppSharedModelsDepartmentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Department", function () {
      return Department;
    });

    var Department = function Department() {
      _classCallCheck(this, Department);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/designation.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/models/designation.model.ts ***!
    \****************************************************/

  /*! exports provided: Designation */

  /***/
  function srcAppSharedModelsDesignationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Designation", function () {
      return Designation;
    });

    var Designation = function Designation() {
      _classCallCheck(this, Designation);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/document-category.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/models/document-category.model.ts ***!
    \**********************************************************/

  /*! exports provided: DocumentCategory */

  /***/
  function srcAppSharedModelsDocumentCategoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentCategory", function () {
      return DocumentCategory;
    });

    var DocumentCategory = function DocumentCategory() {
      _classCallCheck(this, DocumentCategory);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/documentcategory.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/models/documentcategory.model.ts ***!
    \*********************************************************/

  /*! exports provided: Category */

  /***/
  function srcAppSharedModelsDocumentcategoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });

    var Category = function Category() {
      _classCallCheck(this, Category);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/employee.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/models/employee.model.ts ***!
    \*************************************************/

  /*! exports provided: Employee */

  /***/
  function srcAppSharedModelsEmployeeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Employee", function () {
      return Employee;
    });

    var Employee = function Employee() {
      _classCallCheck(this, Employee);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/project-assignment.model.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/models/project-assignment.model.ts ***!
    \***********************************************************/

  /*! exports provided: projectAssignment */

  /***/
  function srcAppSharedModelsProjectAssignmentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectAssignment", function () {
      return projectAssignment;
    });

    var projectAssignment = function projectAssignment() {
      _classCallCheck(this, projectAssignment);
    };
    /***/

  },

  /***/
  "./src/app/shared/models/project.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/project.model.ts ***!
    \************************************************/

  /*! exports provided: Project */

  /***/
  function srcAppSharedModelsProjectModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });

    var Project = function Project() {
      _classCallCheck(this, Project);
    };
    /***/

  },

  /***/
  "./src/app/shared/pipes/status.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/pipes/status.pipe.ts ***!
    \*********************************************/

  /*! exports provided: DisplayStatus */

  /***/
  function srcAppSharedPipesStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayStatus", function () {
      return DisplayStatus;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisplayStatus = /*#__PURE__*/function () {
      function DisplayStatus() {
        _classCallCheck(this, DisplayStatus);
      }

      _createClass(DisplayStatus, [{
        key: "transform",
        value: function transform(value) {
          switch (+value) {
            case 1:
              {
                return 'Active';
              }

            case 0:
              {
                return 'Inactive';
              }

            default:
              {
                return value;
              }
          }
        }
      }]);

      return DisplayStatus;
    }();

    DisplayStatus.ɵfac = function DisplayStatus_Factory(t) {
      return new (t || DisplayStatus)();
    };

    DisplayStatus.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "status",
      type: DisplayStatus,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayStatus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'status'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map