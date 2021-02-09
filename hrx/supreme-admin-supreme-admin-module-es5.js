function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supreme-admin-supreme-admin-module"], {
  /***/
  "./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: EditFreeemaildomainComponent */

  /***/
  function srcAppSupremeAdminFreeemaildomainEditFreeemaildomainEditFreeemaildomainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditFreeemaildomainComponent", function () {
      return EditFreeemaildomainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../freeemaildomain.service */
    "./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts");
    /* harmony import */


    var _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");

    function EditFreeemaildomainComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4010 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4010.errLabel, " ");
      }
    }

    function EditFreeemaildomainComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function EditFreeemaildomainComponent_ng_container_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        display: a0
      };
    };

    var EditFreeemaildomainComponent =
    /*#__PURE__*/
    function () {
      function EditFreeemaildomainComponent(fEdomainService, sharedService) {
        _classCallCheck(this, EditFreeemaildomainComponent);

        this.fEdomainService = fEdomainService;
        this.sharedService = sharedService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayDialog = true;
        this.freeEmailDisplayDomain = "none";
      }

      _createClass(EditFreeemaildomainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showDialogToAdd();
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.freeEmailDisplayDomain = "block";
          this.hiddenScroll();
        }
      }, {
        key: "hiddenScroll",
        value: function hiddenScroll() {
          try {
            var bodyElement = document.getElementById("modalbody");

            if (bodyElement) {
              bodyElement.classList.add("modal-open");
            }
          } catch (ex) {
            this.clientErrorMsg(ex, "hiddenScroll");
          }
        }
      }, {
        key: "displayScroll",
        value: function displayScroll() {
          try {
            var bodyElement = document.getElementById("modalbody");

            if (bodyElement) {
              bodyElement.classList.remove("modal-open");
            }
          } catch (ex) {
            this.clientErrorMsg(ex, "displayScroll");
          }
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;

          this.fEdomainService.isFEDomainExists(this.fEDomain.domainName).subscribe(function (res) {
            if (res.statusCode == 200) {
              if (_this.fEDomainType == "Add") {
                _this.addFEDomain(_this.fEDomain);
              } else if (_this.fEDomainType == "Edit") {
                _this.updateFEDomain(_this.fEDomain);
              }
            } else {
              _this.errLabel = res.message;
              _this.fEDomain = {
                domainName: "",
                freeEmailProviderDomainsDetailsId: null,
                status: null
              };
            }
          }, function (error) {
            _this.errLabel = error;
          });
        }
      }, {
        key: "addFEDomain",
        value: function addFEDomain(fEDomain) {
          var _this2 = this;

          this.fEdomainService.addFEDomain(fEDomain).subscribe(function (res) {
            if (res.statusCode == 200) {
              _this2.freeEmailDisplayDomain = "none";

              _this2.sharedService.add({
                severity: "success",
                summary: "Success",
                detail: res.message
              });
            }

            _this2.displayScroll();

            _this2.onClose.emit({
              type: "add"
            });
          });
        }
      }, {
        key: "updateFEDomain",
        value: function updateFEDomain(fEDomain) {
          var _this3 = this;

          this.fEdomainService.updateFEDomain(fEDomain).subscribe(function (res) {
            if (res.statusCode = 200) {
              _this3.freeEmailDisplayDomain = "none";

              _this3.sharedService.add({
                severity: "success",
                summary: "Success",
                detail: res.message
              });
            }

            _this3.displayScroll();

            _this3.onClose.emit({
              type: "add"
            });
          });
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.freeEmailDisplayDomain = "none";
          this.displayScroll();
          this.onClose.emit({
            type: "Add"
          });
        }
      }]);

      return EditFreeemaildomainComponent;
    }();

    EditFreeemaildomainComponent.ɵfac = function EditFreeemaildomainComponent_Factory(t) {
      return new (t || EditFreeemaildomainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_freeemaildomain_service__WEBPACK_IMPORTED_MODULE_1__["FreeEmailDomainServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    EditFreeemaildomainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditFreeemaildomainComponent,
      selectors: [["app-edit-freeemaildomain"]],
      inputs: {
        fEDomainType: "fEDomainType",
        fEDomain: "fEDomain"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 24,
      vars: 9,
      consts: [["data-backdrop", "static", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "backdrop", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "value", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "submit-btn", 3, "disabled", "click"], [4, "ngIf"], [1, "col-sm-6", 2, "color", "red"]],
      template: function EditFreeemaildomainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFreeemaildomainComponent_Template_button_click_6_listener($event) {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFreeemaildomainComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.fEDomain.domainName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFreeemaildomainComponent_Template_button_click_21_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditFreeemaildomainComponent_ng_container_22_Template, 2, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditFreeemaildomainComponent_ng_container_23_Template, 2, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHJlbWUtYWRtaW4vZnJlZWVtYWlsZG9tYWluL2VkaXQtZnJlZWVtYWlsZG9tYWluL2VkaXQtZnJlZWVtYWlsZG9tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditFreeemaildomainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-edit-freeemaildomain",
          templateUrl: "./edit-freeemaildomain.component.html",
          styleUrls: ["./edit-freeemaildomain.component.css"]
        }]
      }], function () {
        return [{
          type: _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_1__["FreeEmailDomainServices"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, {
        fEDomainType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        fEDomain: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FreeemaildomainComponent */

  /***/
  function srcAppSupremeAdminFreeemaildomainFreeemaildomainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeemaildomainComponent", function () {
      return FreeemaildomainComponent;
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


    var _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./freeemaildomain.service */
    "./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts");
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


    var _edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-freeemaildomain/edit-freeemaildomain.component */
    "./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts");
    /* harmony import */


    var _shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/pipes/status.pipe */
    "./src/app/shared/pipes/status.pipe.ts");

    function FreeemaildomainComponent_div_17_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3968 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FreeemaildomainComponent_div_17_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3968);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3962 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r3962.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3971 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r3971.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r3971.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r3971.field);
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_17_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r3969 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3969);
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r3975 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r3972 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r3972[col_r3975.field]), " ");
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r3975 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r3972 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3972[col_r3975.field], " ");
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FreeemaildomainComponent_div_17_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3975 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r3975.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r3975.field != "status");
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3983 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_17_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3983);

          var rowData_r3972 = ctx.$implicit;

          var ctx_r3982 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3982.onRowSelect(rowData_r3972);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_17_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3983);

          var rowData_r3972 = ctx.$implicit;

          var ctx_r3984 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3984.onDelete(rowData_r3972);
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
        var rowData_r3972 = ctx.$implicit;
        var columns_r3973 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r3972);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3973);
      }
    }

    function FreeemaildomainComponent_div_17_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Free Email found. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    var _c1 = function _c1() {
      return ["domainName", "status"];
    };

    function FreeemaildomainComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FreeemaildomainComponent_div_17_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FreeemaildomainComponent_div_17_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FreeemaildomainComponent_div_17_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FreeemaildomainComponent_div_17_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3959 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r3959.cols)("value", ctx_r3959.lstDomain)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("alwaysShowPaginator", false)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3991 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FreeemaildomainComponent_div_19_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3991);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3985 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r3985.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3994 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r3994.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r3994.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r3994.field);
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_19_ng_template_4_th_1_Template, 3, 3, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r3992 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3992);
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r3998 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r3995 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rowData_r3995[col_r3998.field]), " ");
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r3998 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r3995 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3995[col_r3998.field], " ");
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_1_Template, 3, 3, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FreeemaildomainComponent_div_19_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3998 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r3998.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r3998.field != "status");
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4006 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_19_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4006);

          var rowData_r3995 = ctx.$implicit;

          var ctx_r4005 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4005.onRowSelect(rowData_r3995);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_div_19_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4006);

          var rowData_r3995 = ctx.$implicit;

          var ctx_r4007 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4007.delete(rowData_r3995);
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
        var rowData_r3995 = ctx.$implicit;
        var columns_r3996 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r3995);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3996);
      }
    }

    function FreeemaildomainComponent_div_19_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Free Email Domain found. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FreeemaildomainComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FreeemaildomainComponent_div_19_ng_template_3_Template, 3, 0, "ng-template", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FreeemaildomainComponent_div_19_ng_template_4_Template, 4, 1, "ng-template", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FreeemaildomainComponent_div_19_ng_template_5_Template, 14, 2, "ng-template", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FreeemaildomainComponent_div_19_ng_template_6_Template, 3, 0, "ng-template", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3960 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r3960.cols)("value", ctx_r3960.lstDomain)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("paginator", true)("rows", 10)("showCurrentPageReport", true)("alwaysShowPaginator", false)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
      }
    }

    function FreeemaildomainComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r4009 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-edit-freeemaildomain", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function FreeemaildomainComponent_ng_container_37_Template_app_edit_freeemaildomain_onClose_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4009);

          var ctx_r4008 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4008.onFEDomainCloseClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3961 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fEDomainType", ctx_r3961.fEDomainType)("fEDomain", ctx_r3961.fEDomain);
      }
    }

    var FreeemaildomainComponent =
    /*#__PURE__*/
    function () {
      function FreeemaildomainComponent(confirmationService, sharedService, FreeEmailDomainServices) {
        _classCallCheck(this, FreeemaildomainComponent);

        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.FreeEmailDomainServices = FreeEmailDomainServices;
        this.fEDDisplay = "none";
        this.loading = false;
        this.status = 1;
      }

      _createClass(FreeemaildomainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [// { field: 'departmentDetailsId', header: 'ID' },
          // { field: "freeEmailProviderDomainsDetailsId", header: "ID" },
          {
            field: "domainName",
            header: "Domain Name"
          }, {
            field: "status",
            header: "Status"
          }];
          this.getDomain(this.status);
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.status = 1;
            this.getDomain(1);
          } else if (event.index == 1) {
            this.status = 0;
            this.getDomain(0);
          }
        }
      }, {
        key: "getDomain",
        value: function getDomain(status) {
          var _this4 = this;

          this.loading = true;
          this.lstDomain = [];
          this.FreeEmailDomainServices.getAllFreeEmailDomain(status).subscribe(function (res) {
            _this4.loading = false;
            _this4.lstDomain = [];
            if (res.message == "freeEmailProviderDomains") _this4.lstDomain = res.responsePayload;
          }, function (error) {
            _this4.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.fEDomainType = "Add";
          this.displayDialog = true;
          this.hiddenScroll();
          this.fEDomain = {
            domainName: null,
            freeEmailProviderDomainsDetailsId: null,
            status: null
          };
        }
      }, {
        key: "onFEDomainCloseClick",
        value: function onFEDomainCloseClick(event) {
          if (event.type == "add") {
            this.getDomain(this.status);
          }

          this.fEDomainType = "";
          this.displayDialog = undefined;
        }
      }, {
        key: "hiddenScroll",
        value: function hiddenScroll() {
          try {
            var bodyElement = document.getElementById("modalbody");

            if (bodyElement) {
              bodyElement.classList.add("modal-open");
            }
          } catch (ex) {
            this.clientErrorMsg(ex, "hiddenScroll");
          }
        }
      }, {
        key: "displayScroll",
        value: function displayScroll() {
          try {
            var bodyElement = document.getElementById("modalbody");

            if (bodyElement) {
              bodyElement.classList.remove("modal-open");
            }
          } catch (ex) {
            this.clientErrorMsg(ex, "displayScroll");
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
          var _this5 = this;

          this.confirmationService.confirm({
            message: "Are you sure that you want to Inactivate this data?",
            accept: function accept() {
              _this5.delete(rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this6 = this;

          if (this.status == 1) {
            this.FreeEmailDomainServices.deactivateFEDomain(rowData.freeEmailProviderDomainsDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this6.sharedService.add({
                  severity: "success",
                  summary: "Success",
                  detail: res.message
                });

                _this6.getDomain(_this6.status);
              }
            });
          } else {
            this.FreeEmailDomainServices.activateFEDomain(rowData.freeEmailProviderDomainsDetailsId).subscribe(function (res) {
              if (res.statusCode == 200) {
                _this6.sharedService.add({
                  severity: "success",
                  summary: "Success",
                  detail: res.message
                });

                _this6.getDomain(_this6.status);
              }
            });
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.fEDomain = rowData;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.fEDomain = data;
          this.fEDomainType = "Edit";
          this.displayDialog = true;
          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.fEDDisplay = "none";
          this.displayScroll();
        }
      }, {
        key: "closeAddmodal",
        value: function closeAddmodal() {
          this.fEDDisplay = "none";
          this.displayScroll();
        }
      }]);

      return FreeemaildomainComponent;
    }();

    FreeemaildomainComponent.ɵfac = function FreeemaildomainComponent_Factory(t) {
      return new (t || FreeemaildomainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_freeemaildomain_service__WEBPACK_IMPORTED_MODULE_3__["FreeEmailDomainServices"]));
    };

    FreeemaildomainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FreeemaildomainComponent,
      selectors: [["app-freeemaildomain"]],
      decls: 38,
      vars: 3,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [1, "col-auto", "float-right", "ml-auto"], ["href", "javascript:void(0)", 1, "btn", "add-btn", 3, "click"], [1, "fa", "fa-plus"], [3, "onChange"], ["header", "Active Free Email Domain"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Free Email Doamin"], ["id", "delete_Domain", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [4, "ngIf"], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "alwaysShowPaginator", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_Domain", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "4", 2, "text-align", "left"], [1, "fas", "fa-toggle-on"], [3, "fEDomainType", "fEDomain", "onClose"]],
      template: function FreeemaildomainComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Free Email Domain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_Template_a_click_12_listener($event) {
            return ctx.showDialogToAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Free Email Domain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-tabView", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function FreeemaildomainComponent_Template_p_tabView_onChange_15_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-tabPanel", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FreeemaildomainComponent_div_17_Template, 7, 11, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-tabPanel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FreeemaildomainComponent_div_19_Template, 7, 11, "div", 13);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FreeemaildomainComponent_Template_a_click_32_listener($event) {
            return ctx.delete(ctx.fEDomain);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FreeemaildomainComponent_ng_container_37_Template, 2, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayDialog);
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"], _edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_9__["EditFreeemaildomainComponent"]],
      pipes: [_shared_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_10__["DisplayStatus"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHJlbWUtYWRtaW4vZnJlZWVtYWlsZG9tYWluL2ZyZWVlbWFpbGRvbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeemaildomainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-freeemaildomain",
          templateUrl: "./freeemaildomain.component.html",
          styleUrls: ["./freeemaildomain.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _freeemaildomain_service__WEBPACK_IMPORTED_MODULE_3__["FreeEmailDomainServices"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/supreme-admin/freeemaildomain/freeemaildomain.service.ts ***!
    \**************************************************************************/

  /*! exports provided: FreeEmailDomainServices */

  /***/
  function srcAppSupremeAdminFreeemaildomainFreeemaildomainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeEmailDomainServices", function () {
      return FreeEmailDomainServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FreeEmailDomainServices =
    /*#__PURE__*/
    function () {
      function FreeEmailDomainServices(http) {
        _classCallCheck(this, FreeEmailDomainServices);

        this.http = http;
      }

      _createClass(FreeEmailDomainServices, [{
        key: "getAllFreeEmailDomain",
        value: function getAllFreeEmailDomain(status) {
          return this.http.get("api/freeemailproviderdomains/all?status=".concat(status));
        }
      }, {
        key: "addFEDomain",
        value: function addFEDomain(fEDomain) {
          return this.http.post("api/freeemailproviderdomains/add?freeEmailProviderDomain=".concat(fEDomain.domainName), {});
        }
      }, {
        key: "updateFEDomain",
        value: function updateFEDomain(fEDomain) {
          return this.http.post("api/freeemailproviderdomains/update", fEDomain);
        }
      }, {
        key: "activateFEDomain",
        value: function activateFEDomain(freeEmailProviderDomainsDetailsId) {
          return this.http.put("api/freeemailproviderdomains/activate/".concat(freeEmailProviderDomainsDetailsId), {});
        }
      }, {
        key: "deactivateFEDomain",
        value: function deactivateFEDomain(freeEmailProviderDomainsDetailsId) {
          return this.http.put("api/freeemailproviderdomains/deactivate/".concat(freeEmailProviderDomainsDetailsId), {});
        }
      }, {
        key: "isFEDomainExists",
        value: function isFEDomainExists(freeEmailDomain) {
          return this.http.get("api/freeemailproviderdomains/exists?workEmail=".concat(freeEmailDomain));
        }
      }]);

      return FreeEmailDomainServices;
    }();

    FreeEmailDomainServices.ɵfac = function FreeEmailDomainServices_Factory(t) {
      return new (t || FreeEmailDomainServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FreeEmailDomainServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FreeEmailDomainServices,
      factory: FreeEmailDomainServices.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeEmailDomainServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/supreme-admin/organization/organization.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/supreme-admin/organization/organization.component.ts ***!
    \**********************************************************************/

  /*! exports provided: OrganizationComponent */

  /***/
  function srcAppSupremeAdminOrganizationOrganizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function () {
      return OrganizationComponent;
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


    var _organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/supreme-admin/organization/organization.service.ts");
    /* harmony import */


    var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/tabview/tabview */
    "./src/app/components/tabview/tabview.ts");
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
    /*! ../../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/inputtextarea/inputtextarea */
    "./src/app/components/inputtextarea/inputtextarea.ts");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_api_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/api/shared */
    "./src/app/components/api/shared.ts");

    var _c0 = ["closeBtn"];

    function OrganizationComponent_div_13_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3924 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OrganizationComponent_div_13_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3924);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3918 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r3918.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrganizationComponent_div_13_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3927 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r3927.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r3927.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r3927.field);
      }
    }

    function OrganizationComponent_div_13_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_13_ng_template_4_th_1_Template, 3, 3, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r3925 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3925);
      }
    }

    function OrganizationComponent_div_13_ng_template_5_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r3931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r3928 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3928[col_r3931.field], " ");
      }
    }

    function OrganizationComponent_div_13_ng_template_5_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r3931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var rowData_r3928 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3928[col_r3931.field], " ");
      }
    }

    function OrganizationComponent_div_13_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_13_ng_template_5_td_1_ng_container_1_Template, 2, 1, "ng-container", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganizationComponent_div_13_ng_template_5_td_1_ng_container_2_Template, 2, 1, "ng-container", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3931 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r3931.field == "status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r3931.field != "status");
      }
    }

    function OrganizationComponent_div_13_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3939 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_13_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3939);

          var rowData_r3928 = ctx.$implicit;

          var ctx_r3938 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3938.onDelete(rowData_r3928);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_13_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3939);

          var rowData_r3928 = ctx.$implicit;

          var ctx_r3940 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3940.onSendMessage(rowData_r3928);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send Message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r3928 = ctx.$implicit;
        var columns_r3929 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r3928);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3929);
      }
    }

    function OrganizationComponent_div_13_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No departments found. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return [10, 25, 50];
    };

    var _c2 = function _c2() {
      return ["organizationName", "phoneNumber", "noOfEmployees"];
    };

    function OrganizationComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 32, 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganizationComponent_div_13_ng_template_3_Template, 3, 0, "ng-template", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganizationComponent_div_13_ng_template_4_Template, 4, 1, "ng-template", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrganizationComponent_div_13_ng_template_5_Template, 14, 2, "ng-template", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrganizationComponent_div_13_ng_template_6_Template, 3, 0, "ng-template", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r3915.cols)("value", ctx_r3915.lstOrganizations)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1))("paginator", true)("rows", 10)("showCurrentPageReport", true)("alwaysShowPaginator", false)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
      }
    }

    function OrganizationComponent_div_15_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3947 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OrganizationComponent_div_15_ng_template_3_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3947);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3941 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r3941.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrganizationComponent_div_15_ng_template_4_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3950 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r3950.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r3950.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r3950.field);
      }
    }

    function OrganizationComponent_div_15_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizationComponent_div_15_ng_template_4_th_1_Template, 3, 3, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r3948 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3948);
      }
    }

    function OrganizationComponent_div_15_ng_template_5_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3954 = ctx.$implicit;

        var rowData_r3951 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3951[col_r3954.field], " ");
      }
    }

    function OrganizationComponent_div_15_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3957 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_15_ng_template_5_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3957);

          var rowData_r3951 = ctx.$implicit;

          var ctx_r3956 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3956.delete(rowData_r3951);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_div_15_ng_template_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3957);

          var rowData_r3951 = ctx.$implicit;

          var ctx_r3958 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3958.onSendMessage(rowData_r3951);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send Message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r3951 = ctx.$implicit;
        var columns_r3952 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r3951);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3952);
      }
    }

    function OrganizationComponent_div_15_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No organizations found. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrganizationComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 32, 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganizationComponent_div_15_ng_template_3_Template, 3, 0, "ng-template", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganizationComponent_div_15_ng_template_4_Template, 4, 1, "ng-template", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrganizationComponent_div_15_ng_template_5_Template, 14, 2, "ng-template", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrganizationComponent_div_15_ng_template_6_Template, 3, 0, "ng-template", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3916 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r3916.cols)("value", ctx_r3916.lstOrganizations)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1))("paginator", true)("rows", 10)("showCurrentPageReport", true)("alwaysShowPaginator", false)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
      }
    }

    var OrganizationComponent =
    /*#__PURE__*/
    function () {
      function OrganizationComponent(confirmationService, sharedService, organizationService) {
        _classCallCheck(this, OrganizationComponent);

        this.confirmationService = confirmationService;
        this.sharedService = sharedService;
        this.organizationService = organizationService;
        this.editemployeeDisplay = "none";
        this.addemployeeDisplay = "none";
        this.loading = false;
        this.sendMessage = {};
      }

      _createClass(OrganizationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [// { field: 'departmentDetailsId', header: 'ID' },
          {
            field: "organizationName",
            header: "Name"
          }, {
            field: "phoneNumber",
            header: "Phone Number"
          }, {
            field: "noOfEmployees",
            header: "No of Employees"
          }];
          this.getOrganizations();
          this.status = 1;
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (event.index == 0) {
            this.status = 1;
            this.getOrganizations(1);
          } else if (event.index == 1) {
            this.status = 0;
            this.getOrganizations(0);
          }
        }
      }, {
        key: "getOrganizations",
        value: function getOrganizations() {
          var _this7 = this;

          var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.loading = true;
          this.lstOrganizations = [];
          this.organizationService.getAllOrganizations(status).subscribe(function (res) {
            _this7.loading = false;
            _this7.lstOrganizations = [];
            if (res.message == "Organizations") _this7.lstOrganizations = res.responsePayload;
          }, function (error) {
            _this7.loading = false;
          });
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.departmentType = "Add"; //this.hiddenScroll();
        }
      }, {
        key: "hiddenScroll",
        value: function hiddenScroll() {
          try {
            var bodyElement = document.getElementById("modalbody");

            if (bodyElement) {
              bodyElement.classList.add("modal-open");
            }
          } catch (ex) {
            this.clientErrorMsg(ex, "hiddenScroll");
          }
        }
      }, {
        key: "displayScroll",
        value: function displayScroll() {
          try {
            var bodyElement = document.getElementById("modalbody");

            if (bodyElement) {
              bodyElement.classList.remove("modal-open");
            }
          } catch (ex) {
            this.clientErrorMsg(ex, "displayScroll");
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
          var _this8 = this;

          this.confirmationService.confirm({
            message: "Are you sure that you want to Inactivate this data?",
            accept: function accept() {
              _this8.delete(rowData); //Actual logic to perform a confirmation

            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(rowData) {
          var _this9 = this;

          if (this.status == 1) {
            this.organizationService.deactivateOrganization(rowData.organizationDetailsId).subscribe(function (res) {
              if (res.message == "Organization deactivate successful") {
                _this9.displayDialog = false;

                _this9.getOrganizations(_this9.status);
              }
            });
          } else {
            this.organizationService.activateOrganization(rowData.organizationDetailsId).subscribe(function (res) {
              if (res.message == "Organization activate successful") {
                _this9.displayDialog = false;

                _this9.getOrganizations(_this9.status);
              }
            });
          }
        }
      }, {
        key: "sendMessageToOrganization",
        value: function sendMessageToOrganization(rowData) {
          var _this10 = this;

          if (!this.sendMessage.subject || this.sendMessage.subject.trim() == "") {
            return;
          }

          this.sendMessage.organizationDetailsId = rowData.organizationDetailsId;
          this.organizationService.sendMessage(this.sendMessage).subscribe(function (res) {
            if (res.message == "Send Communication successful") {
              _this10.sharedService.add({
                severity: "success",
                summary: "Success",
                detail: res.message
              });
            } else {
              _this10.sharedService.add({
                severity: "error",
                summary: "Error",
                detail: res.message
              });
            }
          });
          this.closeBtn.nativeElement.click();
        }
      }, {
        key: "onDelete",
        value: function onDelete(rowData) {
          this.organization = rowData;
        }
      }, {
        key: "onSendMessage",
        value: function onSendMessage(rowData) {
          this.organization = rowData;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(data) {
          this.organization = data;
          this.departmentType = "Edit";
          this.hiddenScroll();
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          this.editemployeeDisplay = "none";
          this.displayScroll();
        }
      }]);

      return OrganizationComponent;
    }();

    OrganizationComponent.ɵfac = function OrganizationComponent_Factory(t) {
      return new (t || OrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]));
    };

    OrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrganizationComponent,
      selectors: [["app-organization"]],
      viewQuery: function OrganizationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeBtn = _t.first);
        }
      },
      inputs: {
        sendMessage: "sendMessage"
      },
      decls: 63,
      vars: 4,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], [3, "onChange"], ["header", "Active Organizations"], ["class", "col pl-0 pr-0 mt-2", 4, "ngIf"], ["header", "Inactive Organizations"], ["id", "delete_employee", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "row"], [1, "col-6"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], ["id", "send_Message", "role", "dialog", "aria-modal", "true", 1, "modal", "custom-modal", "fade"], [1, "col-sm-12"], [1, "form-group"], [1, "col-form-label"], [1, "text-danger"], ["pInputText", "", "placeholder", " ", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "5", "cols", "1", "pInputTextarea", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "continue-btn", 3, "click"], ["closeBtn", ""], [1, "col", "pl-0", "pr-0", "mt-2"], ["styleClass", "ui-table-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "rowsPerPageOptions", "paginator", "rows", "showCurrentPageReport", "alwaysShowPaginator", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "ui-table-globalfilter-container"], ["pInputText", "", "type", "text", "placeholder", "Search", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "actions"], [3, "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "dropdown", "dropdown-action"], ["href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], ["x-placement", "top-end", 1, "dropdown-menu", "dropdown-menu-right", 2, "position", "absolute", "will-change", "transform", "top", "0px", "left", "0px", "transform", "translate3d(72px, -2px, 0px)"], ["href", "#", "data-toggle", "modal", "data-target", "#delete_employee", 1, "dropdown-item", "delete", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["href", "#", "data-toggle", "modal", "data-target", "#send_Message", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-paper-plane", "m-r-5"], [4, "ngIf"], ["colspan", "4", 2, "text-align", "left"], ["href", "#", "data-toggle", "modal", 1, "dropdown-item", 3, "click"]],
      template: function OrganizationComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Organizations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-tabView", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function OrganizationComponent_Template_p_tabView_onChange_11_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-tabPanel", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrganizationComponent_div_13_Template, 7, 11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-tabPanel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrganizationComponent_div_15_Template, 7, 11, "div", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_Template_a_click_28_listener($event) {
            return ctx.delete(ctx.organization);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizationComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.sendMessage.subject = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizationComponent_Template_textarea_ngModelChange_55_listener($event) {
            return ctx.sendMessage.messageBody = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationComponent_Template_a_click_57_listener($event) {
            return ctx.sendMessageToOrganization(ctx.organization);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sendMessage.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sendMessage.messageBody);
        }
      },
      directives: [_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabView"], _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextarea"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["Table"], _components_api_shared__WEBPACK_IMPORTED_MODULE_10__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["SortableColumn"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["SortIcon"], _components_table_table__WEBPACK_IMPORTED_MODULE_9__["SelectableRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHJlbWUtYWRtaW4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-organization",
          templateUrl: "./organization.component.html",
          styleUrls: ["./organization.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
        }, {
          type: _app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]
        }];
      }, {
        sendMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["closeBtn"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/supreme-admin/organization/organization.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/supreme-admin/organization/organization.service.ts ***!
    \********************************************************************/

  /*! exports provided: OrganizationService */

  /***/
  function srcAppSupremeAdminOrganizationOrganizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationService", function () {
      return OrganizationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrganizationService =
    /*#__PURE__*/
    function () {
      function OrganizationService(http) {
        _classCallCheck(this, OrganizationService);

        this.http = http;
      }

      _createClass(OrganizationService, [{
        key: "getAllOrganizations",
        value: function getAllOrganizations(status) {
          return this.http.get("api/sadmin/organizations/get?status=".concat(status));
        }
      }, {
        key: "activateOrganization",
        value: function activateOrganization(organizationDetailsId) {
          return this.http.put("api/sadmin/organization/activate/".concat(organizationDetailsId), {});
        }
      }, {
        key: "deactivateOrganization",
        value: function deactivateOrganization(organizationDetailsId) {
          return this.http.put("api/sadmin/organization/deactivate/".concat(organizationDetailsId, "?reason='reason'"), {});
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(_sendMessage) {
          return this.http.post("api/sadmin/organization/communication/send", _sendMessage);
        }
      }]);

      return OrganizationService;
    }();

    OrganizationService.ɵfac = function OrganizationService_Factory(t) {
      return new (t || OrganizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    OrganizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrganizationService,
      factory: OrganizationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationService, [{
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
  "./src/app/supreme-admin/supreme-admin-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/supreme-admin/supreme-admin-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SupremeAdminRoutingModule */

  /***/
  function srcAppSupremeAdminSupremeAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupremeAdminRoutingModule", function () {
      return SupremeAdminRoutingModule;
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


    var _organization_organization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./organization/organization.component */
    "./src/app/supreme-admin/organization/organization.component.ts");
    /* harmony import */


    var _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./freeemaildomain/freeemaildomain.component */
    "./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts");
    /* harmony import */


    var _app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/comingsoon-page/comingsoon-page.component */
    "./src/app/comingsoon-page/comingsoon-page.component.ts");
    /* harmony import */


    var _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/custommodules/approvers/approvers.component */
    "./src/app/core/custommodules/approvers/approvers.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/custommodules/company/company.component */
    "./src/app/core/custommodules/company/company.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_companyview_companyview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/custommodules/company/companyview/companyview.component */
    "./src/app/core/custommodules/company/companyview/companyview.component.ts");
    /* harmony import */


    var _app_core_custommodules_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/core/custommodules/company/edit-company/edit-company.component */
    "./src/app/core/custommodules/company/edit-company/edit-company.component.ts");
    /* harmony import */


    var _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/core/custommodules/departments-category/category.component */
    "./src/app/core/custommodules/departments-category/category.component.ts");
    /* harmony import */


    var _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/core/custommodules/departments/departments.component */
    "./src/app/core/custommodules/departments/departments.component.ts");
    /* harmony import */


    var _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/core/custommodules/designations/designations.component */
    "./src/app/core/custommodules/designations/designations.component.ts");
    /* harmony import */


    var _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/core/custommodules/documents/documents.component */
    "./src/app/core/custommodules/documents/documents.component.ts");
    /* harmony import */


    var _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/core/custommodules/employeeinfo/employeeinfo.component */
    "./src/app/core/custommodules/employeeinfo/employeeinfo.component.ts");
    /* harmony import */


    var _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/core/custommodules/i9/i9.component */
    "./src/app/core/custommodules/i9/i9.component.ts");
    /* harmony import */


    var _app_core_custommodules_immigrations_immigrations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/core/custommodules/immigrations/immigrations.component */
    "./src/app/core/custommodules/immigrations/immigrations.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/edit-invoice/edit-invoice.component */
    "./src/app/core/custommodules/invoices/edit-invoice/edit-invoice.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/invoices.component */
    "./src/app/core/custommodules/invoices/invoices.component.ts");
    /* harmony import */


    var _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @app/core/custommodules/invoices/view-invoice/view-invoice.component */
    "./src/app/core/custommodules/invoices/view-invoice/view-invoice.component.ts");
    /* harmony import */


    var _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/core/custommodules/my-documents/my-documents.component */
    "./src/app/core/custommodules/my-documents/my-documents.component.ts");
    /* harmony import */


    var _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @app/core/custommodules/notes/notes.component */
    "./src/app/core/custommodules/notes/notes.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_advance_advance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/advance/advance.component */
    "./src/app/core/custommodules/payhistory/advance/advance.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_advance_view_advance_view_advance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/advance/view-advance/view-advance.component */
    "./src/app/core/custommodules/payhistory/advance/view-advance/view-advance.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_deductions_deduction_view_deduction_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/deductions/deduction-view/deduction-view.component */
    "./src/app/core/custommodules/payhistory/deductions/deduction-view/deduction-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_deductions_deductions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/deductions/deductions.component */
    "./src/app/core/custommodules/payhistory/deductions/deductions.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_expences_expence_view_expence_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/expences/expence-view/expence-view.component */
    "./src/app/core/custommodules/payhistory/expences/expence-view/expence-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_expences_expences_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/expences/expences.component */
    "./src/app/core/custommodules/payhistory/expences/expences.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_payrate_payrate_view_payrate_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/payrate/payrate-view/payrate-view.component */
    "./src/app/core/custommodules/payhistory/payrate/payrate-view/payrate-view.component.ts");
    /* harmony import */


    var _app_core_custommodules_payhistory_payrate_payrate_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @app/core/custommodules/payhistory/payrate/payrate.component */
    "./src/app/core/custommodules/payhistory/payrate/payrate.component.ts");
    /* harmony import */


    var _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @app/core/custommodules/payments/payments.component */
    "./src/app/core/custommodules/payments/payments.component.ts");
    /* harmony import */


    var _app_core_custommodules_payments_viewpayments_viewpayments_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @app/core/custommodules/payments/viewpayments/viewpayments.component */
    "./src/app/core/custommodules/payments/viewpayments/viewpayments.component.ts");
    /* harmony import */


    var _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @app/core/custommodules/paystubs/paystubs.component */
    "./src/app/core/custommodules/paystubs/paystubs.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @app/core/custommodules/project/edit-project/edit-project.component */
    "./src/app/core/custommodules/project/edit-project/edit-project.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @app/core/custommodules/project/project.component */
    "./src/app/core/custommodules/project/project.component.ts");
    /* harmony import */


    var _app_core_custommodules_project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @app/core/custommodules/project/view-project/view-project.component */
    "./src/app/core/custommodules/project/view-project/view-project.component.ts");
    /* harmony import */


    var _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @app/core/custommodules/timesheets/timesheets.component */
    "./src/app/core/custommodules/timesheets/timesheets.component.ts");
    /* harmony import */


    var _app_core_custommodules_timesheets_view_timesheet_view_timesheet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @app/core/custommodules/timesheets/view-timesheet/view-timesheet.component */
    "./src/app/core/custommodules/timesheets/view-timesheet/view-timesheet.component.ts");
    /* harmony import */


    var _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @app/core/custommodules/w4/w4.component */
    "./src/app/core/custommodules/w4/w4.component.ts");
    /* harmony import */


    var _app_core_guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @app/core/guards/unsaved-changes.guard */
    "./src/app/core/guards/unsaved-changes.guard.ts");
    /* harmony import */


    var _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @app/core/my-organization-details/my-organization-details.component */
    "./src/app/core/my-organization-details/my-organization-details.component.ts");
    /* harmony import */


    var _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @app/core/myprofile/myprofile.component */
    "./src/app/core/myprofile/myprofile.component.ts");

    var routes = [{
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    }, {
      path: "dashboard",
      component: _app_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]
    }, {
      path: "organizationDetails",
      component: _app_core_my_organization_details_my_organization_details_component__WEBPACK_IMPORTED_MODULE_40__["MyOrganizationDetailsComponent"]
    }, {
      path: "employees",
      component: _app_core_custommodules_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeinfoComponent"]
    }, {
      path: "departments",
      component: _app_core_custommodules_departments_departments_component__WEBPACK_IMPORTED_MODULE_11__["DepartmentsComponent"]
    }, {
      path: "designations",
      component: _app_core_custommodules_designations_designations_component__WEBPACK_IMPORTED_MODULE_12__["DesignationsComponent"]
    }, {
      path: "myprofile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_41__["MyprofileComponent"]
    }, {
      path: "company",
      component: _app_core_custommodules_company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"]
    }, {
      path: "company/view",
      component: _app_core_custommodules_company_companyview_companyview_component__WEBPACK_IMPORTED_MODULE_8__["CompanyviewComponent"]
    }, {
      path: "company/edit",
      component: _app_core_custommodules_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_9__["EditCompanyComponent"]
    }, {
      path: "projects",
      component: _app_core_custommodules_project_project_component__WEBPACK_IMPORTED_MODULE_34__["ProjectComponent"]
    }, {
      path: "projects/project/view",
      component: _app_core_custommodules_project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_35__["ViewProjectComponent"]
    }, {
      path: "projects/project/edit",
      component: _app_core_custommodules_project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_33__["EditProjectComponent"]
    }, {
      path: "documents",
      component: _app_core_custommodules_documents_documents_component__WEBPACK_IMPORTED_MODULE_13__["DocumentsComponent"]
    }, {
      path: "approvers",
      component: _app_core_custommodules_approvers_approvers_component__WEBPACK_IMPORTED_MODULE_6__["ApproversComponent"]
    }, {
      path: "category",
      component: _app_core_custommodules_departments_category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"]
    }, {
      path: "w4",
      component: _app_core_custommodules_w4_w4_component__WEBPACK_IMPORTED_MODULE_38__["W4Component"]
    }, {
      path: "i9",
      component: _app_core_custommodules_i9_i9_component__WEBPACK_IMPORTED_MODULE_15__["I9Component"]
    }, {
      path: "paystubs",
      component: _app_core_custommodules_paystubs_paystubs_component__WEBPACK_IMPORTED_MODULE_32__["PaystubsComponent"]
    }, {
      path: "timesheets",
      component: _app_core_custommodules_timesheets_timesheets_component__WEBPACK_IMPORTED_MODULE_36__["TimesheetsComponent"]
    }, {
      path: "timesheets/timesheet/view",
      component: _app_core_custommodules_timesheets_view_timesheet_view_timesheet_component__WEBPACK_IMPORTED_MODULE_37__["ViewTimesheetComponent"]
    }, {
      path: "notes",
      component: _app_core_custommodules_notes_notes_component__WEBPACK_IMPORTED_MODULE_21__["NotesComponent"]
    }, {
      path: "invoices",
      component: _app_core_custommodules_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_18__["InvoicesComponent"]
    }, {
      path: "invoices/invoice",
      component: _app_core_custommodules_invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_17__["EditInvoiceComponent"],
      canDeactivate: [_app_core_guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_39__["UnsavedChangesGuard"]]
    }, {
      path: "invoices/invoice/view",
      component: _app_core_custommodules_invoices_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewInvoiceComponent"]
    }, {
      path: "payments",
      component: _app_core_custommodules_payments_payments_component__WEBPACK_IMPORTED_MODULE_30__["PaymentsComponent"]
    }, {
      path: "payments/payment/view",
      component: _app_core_custommodules_payments_viewpayments_viewpayments_component__WEBPACK_IMPORTED_MODULE_31__["ViewpaymentsComponent"]
    }, {
      path: "my_documents",
      component: _app_core_custommodules_my_documents_my_documents_component__WEBPACK_IMPORTED_MODULE_20__["MyDocumentsComponent"]
    }, {
      path: "deductions",
      component: _app_core_custommodules_payhistory_deductions_deductions_component__WEBPACK_IMPORTED_MODULE_25__["DeductionsComponent"]
    }, {
      path: "deductions/deduction/view",
      component: _app_core_custommodules_payhistory_deductions_deduction_view_deduction_view_component__WEBPACK_IMPORTED_MODULE_24__["DeductionViewComponent"]
    }, {
      path: "payrate",
      component: _app_core_custommodules_payhistory_payrate_payrate_component__WEBPACK_IMPORTED_MODULE_29__["PayrateComponent"]
    }, {
      path: "payrate/view",
      component: _app_core_custommodules_payhistory_payrate_payrate_view_payrate_view_component__WEBPACK_IMPORTED_MODULE_28__["PayrateViewComponent"]
    }, {
      path: "advances",
      component: _app_core_custommodules_payhistory_advance_advance_component__WEBPACK_IMPORTED_MODULE_22__["AdvanceComponent"]
    }, {
      path: "advances/advance/view",
      component: _app_core_custommodules_payhistory_advance_view_advance_view_advance_component__WEBPACK_IMPORTED_MODULE_23__["ViewAdvanceComponent"]
    }, {
      path: "expenses",
      component: _app_core_custommodules_payhistory_expences_expences_component__WEBPACK_IMPORTED_MODULE_27__["ExpencesComponent"]
    }, {
      path: "expenses/expence/view",
      component: _app_core_custommodules_payhistory_expences_expence_view_expence_view_component__WEBPACK_IMPORTED_MODULE_26__["ExpenceViewComponent"]
    }, {
      path: "immigrations",
      component: _app_core_custommodules_immigrations_immigrations_component__WEBPACK_IMPORTED_MODULE_16__["ImmigrationsComponent"]
    }, {
      path: "timeline",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "debit",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "ap_invoices",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "payment_reports",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "invoice_Reports",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "employee_reports",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "employee_timeline",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "prospect_supplier",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "prospect_employee",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "Prospect_position",
      component: _app_comingsoon_page_comingsoon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingsoonPageComponent"]
    }, {
      path: "employees/:id/profile",
      component: _app_core_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_41__["MyprofileComponent"]
    }, {
      path: "organization",
      component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationComponent"]
    }, {
      path: "freeemaildomain",
      component: _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_3__["FreeemaildomainComponent"]
    }];

    var SupremeAdminRoutingModule = function SupremeAdminRoutingModule() {
      _classCallCheck(this, SupremeAdminRoutingModule);
    };

    SupremeAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SupremeAdminRoutingModule
    });
    SupremeAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SupremeAdminRoutingModule_Factory(t) {
        return new (t || SupremeAdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupremeAdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupremeAdminRoutingModule, [{
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
  "./src/app/supreme-admin/supreme-admin.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/supreme-admin/supreme-admin.module.ts ***!
    \*******************************************************/

  /*! exports provided: SupremeAdminModule */

  /***/
  function srcAppSupremeAdminSupremeAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupremeAdminModule", function () {
      return SupremeAdminModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/table/table */
    "./src/app/components/table/table.ts");
    /* harmony import */


    var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/inputtext/inputtext */
    "./src/app/components/inputtext/inputtext.ts");
    /* harmony import */


    var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/button/button */
    "./src/app/components/button/button.ts");
    /* harmony import */


    var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/dialog/dialog */
    "./src/app/components/dialog/dialog.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/dropdown/dropdown */
    "./src/app/components/dropdown/dropdown.ts");
    /* harmony import */


    var _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/confirmdialog/confirmdialog */
    "./src/app/components/confirmdialog/confirmdialog.ts");
    /* harmony import */


    var _components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/api/confirmationservice */
    "./src/app/components/api/confirmationservice.ts");
    /* harmony import */


    var _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/chart/chart */
    "./src/app/components/chart/chart.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/components/public_api */
    "./src/app/components/public_api.ts");
    /* harmony import */


    var _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./supreme-admin-routing.module */
    "./src/app/supreme-admin/supreme-admin-routing.module.ts");
    /* harmony import */


    var _organization_organization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./organization/organization.component */
    "./src/app/supreme-admin/organization/organization.component.ts");
    /* harmony import */


    var _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./freeemaildomain/freeemaildomain.component */
    "./src/app/supreme-admin/freeemaildomain/freeemaildomain.component.ts");
    /* harmony import */


    var _freeemaildomain_edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component */
    "./src/app/supreme-admin/freeemaildomain/edit-freeemaildomain/edit-freeemaildomain.component.ts");

    var SupremeAdminModule = function SupremeAdminModule() {
      _classCallCheck(this, SupremeAdminModule);
    };

    SupremeAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SupremeAdminModule
    });
    SupremeAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SupremeAdminModule_Factory(t) {
        return new (t || SupremeAdminModule)();
      },
      providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"], _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupremeAdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"]], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupremeAdminModule, {
        declarations: [_organization_organization_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationComponent"], _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_16__["FreeemaildomainComponent"], _freeemaildomain_edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_17__["EditFreeemaildomainComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"], _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupremeAdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"]],
        exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupremeAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_organization_organization_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationComponent"], _freeemaildomain_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_16__["FreeemaildomainComponent"], _freeemaildomain_edit_freeemaildomain_edit_freeemaildomain_component__WEBPACK_IMPORTED_MODULE_17__["EditFreeemaildomainComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"], _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_components_public_api__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _components_chart_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"], _supreme_admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupremeAdminRoutingModule"], _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModule"]],
          exports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedServiceModule"]],
          providers: [_components_api_confirmationservice__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=supreme-admin-supreme-admin-module-es5.js.map