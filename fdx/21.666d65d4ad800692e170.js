(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{fNlQ:function(l,n,e){"use strict";e.d(n,"a",function(){return u});var t=e("gIcY"),u=function(){function l(l){this._regions=l,this.companyCountry="",this.companyState="",this.companyCity="",this.cardNoRegex="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$",this.expiryRegex="^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$",this.document=t.v.pattern("^[a-zA-z0-9 -_]*$"),this.phone_number=t.v.pattern("[0-9]\\d{9}"),this.numberValidation=t.v.pattern("^[0-9]*$"),this.name=t.v.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"),this.alpha_numeric=t.v.pattern("[a-zA-Z0-9.:_//@ '-]+$"),this.card_number=t.v.pattern(this.cardNoRegex),this.expiry_date=t.v.pattern(this.expiryRegex),this.house_number=t.v.pattern(/\d+/g),this.zip_code=t.v.pattern(/\d+/g),this.website=t.v.pattern("^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$"),this.job_type=["Full Time","Part Time","Contract","Internship","Temporary","Commission"],this.job_duration=["Days","Weeks","Months","Years"],this.pay_rate_type=["Salary","Hourly"],this.workAuth=[{key:"1",value:"Citizen"},{key:"2",value:"Green Card"},{key:"3",value:"H-1B"},{key:"4",value:"EAD"},{key:"5",value:"CPT"},{key:"6",value:"TN"},{key:"7",value:"Other"}],this.searchJob={jobTitle:"",jobTitles:[],jobType:"",jobTypes:[],skill:"",skills:[],rolesAndResponsibilities:"",specialSkills:"",jobQualificationOrRequirements:"",jobDescription:"",cityDetailsId:"",stateDetailsId:"",countryDetailsId:"",pinCode:"",location:[]},this.searchHotlist={jobTitle:"",skill:"",role:"",specialSkills:"",availabilityDate:"",relocation:"",cityDetailsId:"",stateDetailsId:"",countryDetailsId:"",pinCode:""},this.searchCandiate={searchTerm:"",jobTitles:[],skills:[],cityDetailsId:"",stateDetailsId:"",postalCode:"",locations:[]},this.recruitementStatus=[{},{key:"1",value:"Send Offer"},{key:"2",value:"Send Quote"},{key:"3",value:"RFC Quote"},{key:"4",value:"Accept Quote"},{key:"5",value:"Send Terms"},{key:"6",value:"RFC Terms"},{key:"7",value:"Accept Terms"},{key:"8",value:"Interview Schedule"},{key:"9",value:"RFC Interview Schedule"},{key:"10",value:"Interview Complete"},{key:"11",value:"Send Agreements"},{key:"12",value:"RFC Agreements"},{key:"13",value:"Accept Agreements"},{key:"14",value:"Send Onboarding"},{key:"15",value:"RFC Onboarding"},{key:"16",value:"Accept Onboarding"},{key:"17",value:"Submit Review"}],this.degree=[{key:"Secondary(10th Pass)",value:"Secondary(10th Pass)"},{key:"Higher Secondary(12th Pass)",value:"Higher Secondary(12th Pass)"},{key:"3Diploma",value:"Diploma"},{key:"Bachelor's",value:"Bachelor's"},{key:"Master's",value:"Master's"},{key:"Doctorate",value:"Doctorate"},{key:"Other",value:"Other"}]}return l.prototype._keyPress=function(l){var n=String.fromCharCode(l.charCode);/[0-9]/.test(n)||l.preventDefault()},l.prototype._keyPressDocument=function(l){var n=String.fromCharCode(l.charCode);/[^a-zA-Z0-9\-]/.test(n)||l.preventDefault()},l.prototype.getStates=function(){this.states=this._regions.getStates(this.companyCountry)},l.prototype.getCities=function(){this.cities=this._regions.getCities(this.companyState,this.companyCountry)},l.prototype.dateFormatter=function(l){var n=new Date(l);return[("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2),n.getFullYear()].join("-")},l.prototype.timeSince=function(l){var n=Math.floor((new Date).getTime()/1e3-new Date(l).getTime()/1e3),e=Math.floor(n/31536e3);return e>1?e+" years ago":(e=Math.floor(n/2592e3))>1?e+" months ago":(e=Math.floor(n/86400))>=1?e+" days ago":(e=Math.floor(n/3600))>=1?e+" hours ago":(e=Math.floor(n/60))>1?e+" minutes ago":Math.floor(n)+" seconds ago"},l}()},ghTM:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),a=e("Vurf"),o=e("zJpK"),r=e("bzQm"),s=e("fNlQ"),i=e("Eo4b"),c=e("2g2N"),g=function(l){function n(n,e,t,u,a,o,r){var i=l.call(this)||this;return i.toast=n,i.authService=e,i.fb=t,i.router=u,i._settings=a,i._backend=o,i.translate=r,i.newUser=!1,i.accessData={},i.password="",i.tfa={},i.authcode="",i.errorMessage=null,i.showTAQRCode=!1,i.validate=new s.a,i}return Object(u.__extends)(n,l),n.prototype.ngOnInit=function(){this.translate.use("en"),this.translate.get("login").subscribe(function(l){}),this.getAuthDetails();var l=this.authService.getInfo();l.responsePayload&&(this.showTAQRCode=!!l.responsePayload.showTAQRCode&&l.responsePayload.showTAQRCode)},n.prototype.getAuthDetails=function(){var l=this;this._backend.getAuth().subscribe(function(n){var e=n.body;200===n.status&&(null==e?(console.log("getAuthDetails ",e),l.setup()):l.tfa=e)})},n.prototype.setup=function(){var l=this;this._backend.setupAuth().subscribe(function(n){var e=n.body;200===n.status&&(console.log("setup ",e),sessionStorage.setItem("tempSecret",e.tempSecret),l.tfa=e)})},n.prototype.confirm=function(){var l=this;this._backend.verifyAuth(this.authcode,this.tfa.tempSecret).subscribe(function(n){var e=n.body;if(200===e.status){console.log(e),l.errorMessage=null,l.tfa.secret=l.tfa.tempSecret,l.tfa.tempSecret="";var t=l.authService.getInfo();l.authService.setToken(t.responsePayload.authCode),t.responsePayload.organizations&&t.responsePayload.organizations.length&&l.authService.setOrganization(t.responsePayload.organizations[0].organizationDetailsId),l.authService.setUserInfo(t.responsePayload),l.showTAQRCode?l._backend.put("employee/tfastatus/update").subscribe(function(n){l.redirectPage()}):l.redirectPage()}else l.errorMessage=e.message})},n.prototype.redirectPage=function(){"1"==this.authService.getUserInfoItem("roleId")?this.router.navigate(["/dashboard/buckets-list/all"]):this.router.navigate(["/dashboard"])},n}(s.a),d=function(){},h=e("pMnS"),b=e("9AJC"),p=e("Ip0R"),m=e("gIcY"),y=e("ZYCi"),f=t.Ua({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,3,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.ob(-1,null,[" Scan the QR code or enter the secret key in Google Authenticator "])),(l()(),t.Wa(2,0,null,null,1,"a",[["href","https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&ref=hackernoon.com"],["target","_blank"]],null,null,null,null,null)),(l()(),t.ob(-1,null,["Download Scanner APP"]))],null,null)}function k(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,0,"img",[["alt",""],["class","img-thumbnail"],["style","display:block;margin:auto;margin-bottom: 10px;"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.tfa.dataURL)})}function C(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,1,"p",[["class","text-danger"],["style","text-align:center;"]],null,null,null,null,null)),(l()(),t.ob(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.errorMessage)})}function S(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,26,"span",[],null,null,null,null,null)),(l()(),t.Na(16777216,null,null,1,null,v)),t.Va(2,16384,null,0,p.l,[t.V,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Na(16777216,null,null,1,null,k)),t.Va(4,16384,null,0,p.l,[t.V,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Wa(5,0,null,null,19,"form",[["class","form-group"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var u=!0,a=l.component;return"submit"===n&&(u=!1!==t.gb(l,7).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.gb(l,7).onReset()&&u),"ngSubmit"===n&&(u=!1!==a.confirm()&&u),u},null,null)),t.Va(6,16384,null,0,m.y,[],null,null),t.Va(7,4210688,[["otpForm",4]],0,m.p,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.lb(2048,null,m.b,null,[m.p]),t.Va(9,16384,null,0,m.o,[[4,m.b]],null,null),(l()(),t.Wa(10,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Wa(11,0,null,null,10,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.Wa(12,0,null,null,9,"input",[["autocomplete","off"],["class","form-control"],["id","authcode"],["maxlength","6"],["name","authcode"],["placeholder","Enter the Auth Code"],["required",""],["type","number"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var u=!0,a=l.component;return"input"===n&&(u=!1!==t.gb(l,13)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t.gb(l,13).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.gb(l,13)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.gb(l,13)._compositionEnd(e.target.value)&&u),"change"===n&&(u=!1!==t.gb(l,14).onChange(e.target.value)&&u),"input"===n&&(u=!1!==t.gb(l,14).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t.gb(l,14).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(a.authcode=e)&&u),u},null,null)),t.Va(13,16384,null,0,m.c,[t.J,t.m,[2,m.a]],null,null),t.Va(14,16384,null,0,m.x,[t.J,t.m],null,null),t.Va(15,16384,null,0,m.t,[],{required:[0,"required"]},null),t.Va(16,540672,null,0,m.i,[],{maxlength:[0,"maxlength"]},null),t.lb(1024,null,m.k,function(l,n){return[l,n]},[m.t,m.i]),t.lb(1024,null,m.l,function(l,n){return[l,n]},[m.c,m.x]),t.Va(19,671744,[["iauthcode",4]],0,m.q,[[2,m.b],[6,m.k],[8,null],[6,m.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.lb(2048,null,m.m,null,[m.q]),t.Va(21,16384,null,0,m.n,[[4,m.m]],null,null),(l()(),t.Wa(22,0,null,null,2,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t.Wa(23,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-signin"],["type","Submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.ob(-1,null,["Verify"])),(l()(),t.Na(16777216,null,null,1,null,C)),t.Va(26,16384,null,0,p.l,[t.V,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.showTAQRCode),l(n,4,0,e.showTAQRCode),l(n,15,0,""),l(n,16,0,"6"),l(n,19,0,"authcode",e.authcode),l(n,26,0,e.errorMessage)},function(l,n){l(n,5,0,t.gb(n,9).ngClassUntouched,t.gb(n,9).ngClassTouched,t.gb(n,9).ngClassPristine,t.gb(n,9).ngClassDirty,t.gb(n,9).ngClassValid,t.gb(n,9).ngClassInvalid,t.gb(n,9).ngClassPending),l(n,12,0,t.gb(n,15).required?"":null,t.gb(n,16).maxlength?t.gb(n,16).maxlength:null,t.gb(n,21).ngClassUntouched,t.gb(n,21).ngClassTouched,t.gb(n,21).ngClassPristine,t.gb(n,21).ngClassDirty,t.gb(n,21).ngClassValid,t.gb(n,21).ngClassInvalid,t.gb(n,21).ngClassPending),l(n,23,0,null==t.gb(n,19)?null:null==t.gb(n,19).errors?null:t.gb(n,19).errors.required)})}function A(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,14,"div",[["class","page-wrapper"]],null,null,null,null,null)),(l()(),t.Wa(1,0,null,null,13,"div",[["class","auth-bg"]],null,null,null,null,null)),(l()(),t.Wa(2,0,null,null,12,"div",[["class","authentication-box"]],null,null,null,null,null)),(l()(),t.Wa(3,0,null,null,4,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Wa(4,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),t.Wa(5,0,null,null,2,"a",[["routerLink","/"],["style","display: flex;justify-content: center;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.gb(l,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.Va(6,671744,null,0,y.n,[y.l,y.a,p.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Wa(7,0,null,null,0,"img",[["class","logo"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Wa(8,0,null,null,6,"div",[["class","card mt-4"]],null,null,null,null,null)),(l()(),t.Wa(9,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Wa(10,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Wa(11,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.ob(-1,null,["Authenticate With OTP"])),(l()(),t.Na(16777216,null,null,1,null,S)),t.Va(14,16384,null,0,p.l,[t.V,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,6,0,"/"),l(n,14,0,!!e.tfa.tempSecret)},function(l,n){var e=n.component;l(n,5,0,t.gb(n,6).target,t.gb(n,6).href),l(n,7,0,t.Ya(1,"",e._settings.data.logo,""))})}var w=t.Sa("app-two-factor-auth",g,function(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,1,"app-two-factor-auth",[],null,null,null,A,f)),t.Va(1,114688,null,0,g,[c.a,a.a,m.d,y.l,r.a,o.a,i.j],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),I=e("4GxJ"),T=e("d2mR"),D=e("t/Na"),_=e("7HA4");e.d(n,"TwoFactorAuthModuleNgFactory",function(){return P});var P=t.Ta(d,[],function(l){return t.db([t.eb(512,t.k,t.Ia,[[8,[h.a,b.a,b.b,b.i,b.e,b.f,b.g,b.h,w]],[3,t.k],t.C]),t.eb(4608,p.n,p.m,[t.z,[2,p.z]]),t.eb(4608,m.z,m.z,[]),t.eb(4608,m.d,m.d,[]),t.eb(4608,I.t,I.t,[t.k,t.v,I.W,I.u]),t.eb(5120,i.f,T.b,[D.c]),t.eb(4608,i.c,i.e,[]),t.eb(4608,i.h,i.d,[]),t.eb(4608,i.b,i.a,[]),t.eb(4608,i.m,i.m,[]),t.eb(4608,i.j,i.j,[i.m,i.f,i.c,i.h,i.b,i.k,i.l]),t.eb(1073742336,p.c,p.c,[]),t.eb(1073742336,m.w,m.w,[]),t.eb(1073742336,m.h,m.h,[]),t.eb(1073742336,m.s,m.s,[]),t.eb(1073742336,y.o,y.o,[[2,y.u],[2,y.l]]),t.eb(1073742336,_.a,_.a,[]),t.eb(1073742336,i.g,i.g,[]),t.eb(1073742336,I.c,I.c,[]),t.eb(1073742336,I.f,I.f,[]),t.eb(1073742336,I.g,I.g,[]),t.eb(1073742336,I.k,I.k,[]),t.eb(1073742336,I.l,I.l,[]),t.eb(1073742336,I.q,I.q,[]),t.eb(1073742336,I.r,I.r,[]),t.eb(1073742336,I.v,I.v,[]),t.eb(1073742336,I.z,I.z,[]),t.eb(1073742336,I.A,I.A,[]),t.eb(1073742336,I.D,I.D,[]),t.eb(1073742336,I.G,I.G,[]),t.eb(1073742336,I.M,I.M,[]),t.eb(1073742336,I.Q,I.Q,[]),t.eb(1073742336,I.T,I.T,[]),t.eb(1073742336,I.U,I.U,[]),t.eb(1073742336,I.w,I.w,[]),t.eb(1073742336,T.c,T.c,[]),t.eb(1073742336,d,d,[]),t.eb(256,i.l,void 0,[]),t.eb(256,i.k,void 0,[]),t.eb(1024,y.j,function(){return[[{path:"",component:g,children:[{path:"login",component:g}]}]]},[])])})}}]);