(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{fNlQ:function(l,n,e){"use strict";e.d(n,"a",function(){return u});var t=e("gIcY"),u=function(){function l(l){this._regions=l,this.companyCountry="",this.companyState="",this.companyCity="",this.cardNoRegex="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$",this.expiryRegex="^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$",this.document=t.v.pattern("^[a-zA-z0-9 -_]*$"),this.phone_number=t.v.pattern("[0-9]\\d{9}"),this.numberValidation=t.v.pattern("^[0-9]*$"),this.name=t.v.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$"),this.alpha_numeric=t.v.pattern("[a-zA-Z0-9.:_//@ '-]+$"),this.card_number=t.v.pattern(this.cardNoRegex),this.expiry_date=t.v.pattern(this.expiryRegex),this.house_number=t.v.pattern(/\d+/g),this.zip_code=t.v.pattern(/\d+/g),this.website=t.v.pattern("^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$"),this.job_type=["Full Time","Part Time","Contract","Internship","Temporary","Commission"],this.job_duration=["Days","Weeks","Months","Years"],this.pay_rate_type=["Salary","Hourly"],this.workAuth=[{key:"1",value:"Citizen"},{key:"2",value:"Green Card"},{key:"3",value:"H-1B"},{key:"4",value:"EAD"},{key:"5",value:"CPT"},{key:"6",value:"TN"},{key:"7",value:"Other"}],this.searchJob={jobTitle:"",jobTitles:[],jobType:"",jobTypes:[],skill:"",skills:[],rolesAndResponsibilities:"",specialSkills:"",jobQualificationOrRequirements:"",jobDescription:"",cityDetailsId:"",stateDetailsId:"",countryDetailsId:"",pinCode:"",location:[]},this.searchHotlist={jobTitle:"",skill:"",role:"",specialSkills:"",availabilityDate:"",relocation:"",cityDetailsId:"",stateDetailsId:"",countryDetailsId:"",pinCode:""},this.searchCandiate={searchTerm:"",jobTitles:[],skills:[],cityDetailsId:"",stateDetailsId:"",postalCode:"",locations:[]},this.recruitementStatus=[{},{key:"1",value:"Send Offer"},{key:"2",value:"Send Quote"},{key:"3",value:"RFC Quote"},{key:"4",value:"Accept Quote"},{key:"5",value:"Send Terms"},{key:"6",value:"RFC Terms"},{key:"7",value:"Accept Terms"},{key:"8",value:"Interview Schedule"},{key:"9",value:"RFC Interview Schedule"},{key:"10",value:"Interview Complete"},{key:"11",value:"Send Agreements"},{key:"12",value:"RFC Agreements"},{key:"13",value:"Accept Agreements"},{key:"14",value:"Send Onboarding"},{key:"15",value:"RFC Onboarding"},{key:"16",value:"Accept Onboarding"},{key:"17",value:"Submit Review"}],this.degree=[{key:"Secondary(10th Pass)",value:"Secondary(10th Pass)"},{key:"Higher Secondary(12th Pass)",value:"Higher Secondary(12th Pass)"},{key:"3Diploma",value:"Diploma"},{key:"Bachelor's",value:"Bachelor's"},{key:"Master's",value:"Master's"},{key:"Doctorate",value:"Doctorate"},{key:"Other",value:"Other"}]}return l.prototype._keyPress=function(l){var n=String.fromCharCode(l.charCode);/[0-9]/.test(n)||l.preventDefault()},l.prototype._keyPressDocument=function(l){var n=String.fromCharCode(l.charCode);/[^a-zA-Z0-9\-]/.test(n)||l.preventDefault()},l.prototype.getStates=function(){this.states=this._regions.getStates(this.companyCountry)},l.prototype.getCities=function(){this.cities=this._regions.getCities(this.companyState,this.companyCountry)},l.prototype.dateFormatter=function(l){var n=new Date(l);return[("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2),n.getFullYear()].join("-")},l.prototype.timeSince=function(l){var n=Math.floor((new Date).getTime()/1e3-new Date(l).getTime()/1e3),e=Math.floor(n/31536e3);return e>1?e+" years ago":(e=Math.floor(n/2592e3))>1?e+" months ago":(e=Math.floor(n/86400))>=1?e+" days ago":(e=Math.floor(n/3600))>=1?e+" hours ago":(e=Math.floor(n/60))>1?e+" minutes ago":Math.floor(n)+" seconds ago"},l}()},ghTM:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),a=e("Vurf"),o=e("zJpK"),r=e("bzQm"),i=e("fNlQ"),s=e("Eo4b"),c=e("2g2N"),g=function(l){function n(n,e,t,u,a,o,r){var s=l.call(this)||this;return s.toast=n,s.authService=e,s.fb=t,s.router=u,s._settings=a,s._backend=o,s.translate=r,s.newUser=!1,s.accessData={},s.password="",s.tfa={},s.authcode="",s.errorMessage=null,s.validate=new i.a,s}return Object(u.__extends)(n,l),n.prototype.ngOnInit=function(){this.translate.use("en"),this.translate.get("login").subscribe(function(l){}),this.getAuthDetails()},n.prototype.getAuthDetails=function(){var l=this;this._backend.getAuth().subscribe(function(n){var e=n.body;200===n.status&&(null==e?(console.log("getAuthDetails ",e),l.setup()):l.tfa=e)})},n.prototype.setup=function(){var l=this;this._backend.setupAuth().subscribe(function(n){var e=n.body;200===n.status&&(console.log("setup ",e),sessionStorage.setItem("tempSecret",e.tempSecret),l.tfa=e)})},n.prototype.confirm=function(){var l=this;this._backend.verifyAuth(this.authcode,this.tfa.tempSecret).subscribe(function(n){var e=n.body;if(200===e.status){console.log(e),l.errorMessage=null,l.tfa.secret=l.tfa.tempSecret,l.tfa.tempSecret="";var t=l.authService.getInfo();l.authService.setToken(t.responsePayload.authCode),t.responsePayload.organizations&&t.responsePayload.organizations.length&&l.authService.setOrganization(t.responsePayload.organizations[0].organizationDetailsId),l.authService.setUserInfo(t.responsePayload),"1"==l.authService.getUserInfoItem("roleId")?l.router.navigate(["/dashboard/buckets-list/all"]):l.router.navigate(["/dashboard"])}else l.errorMessage=e.message})},n}(i.a),d=function(){},h=e("pMnS"),b=e("9AJC"),p=e("gIcY"),m=e("Ip0R"),y=e("ZYCi"),v=t.Ua({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,1,"p",[["class","text-danger"],["style","text-align:center;"]],null,null,null,null,null)),(l()(),t.ob(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.errorMessage)})}function k(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,27,"span",[],null,null,null,null,null)),(l()(),t.Wa(1,0,null,null,3,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.ob(-1,null,[" Scan the QR code or enter the secret key in Google Authenticator "])),(l()(),t.Wa(3,0,null,null,1,"a",[["href","https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&ref=hackernoon.com"],["target","_blank"]],null,null,null,null,null)),(l()(),t.ob(-1,null,["Download Scanner APP"])),(l()(),t.Wa(5,0,null,null,0,"img",[["alt",""],["class","img-thumbnail"],["style","display:block;margin:auto;margin-bottom: 10px;"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Wa(6,0,null,null,19,"form",[["class","form-group"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var u=!0,a=l.component;return"submit"===n&&(u=!1!==t.gb(l,8).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.gb(l,8).onReset()&&u),"ngSubmit"===n&&(u=!1!==a.confirm()&&u),u},null,null)),t.Va(7,16384,null,0,p.y,[],null,null),t.Va(8,4210688,[["otpForm",4]],0,p.p,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.lb(2048,null,p.b,null,[p.p]),t.Va(10,16384,null,0,p.o,[[4,p.b]],null,null),(l()(),t.Wa(11,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Wa(12,0,null,null,10,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.Wa(13,0,null,null,9,"input",[["autocomplete","off"],["class","form-control"],["id","authcode"],["maxlength","6"],["name","authcode"],["placeholder","Enter the Auth Code"],["required",""],["type","number"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var u=!0,a=l.component;return"input"===n&&(u=!1!==t.gb(l,14)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t.gb(l,14).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.gb(l,14)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.gb(l,14)._compositionEnd(e.target.value)&&u),"change"===n&&(u=!1!==t.gb(l,15).onChange(e.target.value)&&u),"input"===n&&(u=!1!==t.gb(l,15).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t.gb(l,15).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(a.authcode=e)&&u),u},null,null)),t.Va(14,16384,null,0,p.c,[t.J,t.m,[2,p.a]],null,null),t.Va(15,16384,null,0,p.x,[t.J,t.m],null,null),t.Va(16,16384,null,0,p.t,[],{required:[0,"required"]},null),t.Va(17,540672,null,0,p.i,[],{maxlength:[0,"maxlength"]},null),t.lb(1024,null,p.k,function(l,n){return[l,n]},[p.t,p.i]),t.lb(1024,null,p.l,function(l,n){return[l,n]},[p.c,p.x]),t.Va(20,671744,[["iauthcode",4]],0,p.q,[[2,p.b],[6,p.k],[8,null],[6,p.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.lb(2048,null,p.m,null,[p.q]),t.Va(22,16384,null,0,p.n,[[4,p.m]],null,null),(l()(),t.Wa(23,0,null,null,2,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t.Wa(24,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-signin"],["type","Submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.ob(-1,null,["Verify"])),(l()(),t.Na(16777216,null,null,1,null,f)),t.Va(27,16384,null,0,m.l,[t.V,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,16,0,""),l(n,17,0,"6"),l(n,20,0,"authcode",e.authcode),l(n,27,0,e.errorMessage)},function(l,n){l(n,5,0,n.component.tfa.dataURL),l(n,6,0,t.gb(n,10).ngClassUntouched,t.gb(n,10).ngClassTouched,t.gb(n,10).ngClassPristine,t.gb(n,10).ngClassDirty,t.gb(n,10).ngClassValid,t.gb(n,10).ngClassInvalid,t.gb(n,10).ngClassPending),l(n,13,0,t.gb(n,16).required?"":null,t.gb(n,17).maxlength?t.gb(n,17).maxlength:null,t.gb(n,22).ngClassUntouched,t.gb(n,22).ngClassTouched,t.gb(n,22).ngClassPristine,t.gb(n,22).ngClassDirty,t.gb(n,22).ngClassValid,t.gb(n,22).ngClassInvalid,t.gb(n,22).ngClassPending),l(n,24,0,null==t.gb(n,20)?null:null==t.gb(n,20).errors?null:t.gb(n,20).errors.required)})}function C(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,14,"div",[["class","page-wrapper"]],null,null,null,null,null)),(l()(),t.Wa(1,0,null,null,13,"div",[["class","auth-bg"]],null,null,null,null,null)),(l()(),t.Wa(2,0,null,null,12,"div",[["class","authentication-box"]],null,null,null,null,null)),(l()(),t.Wa(3,0,null,null,4,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Wa(4,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),t.Wa(5,0,null,null,2,"a",[["routerLink","/"],["style","display: flex;justify-content: center;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.gb(l,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.Va(6,671744,null,0,y.n,[y.l,y.a,m.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Wa(7,0,null,null,0,"img",[["class","logo"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Wa(8,0,null,null,6,"div",[["class","card mt-4"]],null,null,null,null,null)),(l()(),t.Wa(9,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Wa(10,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Wa(11,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.ob(-1,null,["Authenticate With OTP"])),(l()(),t.Na(16777216,null,null,1,null,k)),t.Va(14,16384,null,0,m.l,[t.V,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,6,0,"/"),l(n,14,0,!!e.tfa.tempSecret)},function(l,n){var e=n.component;l(n,5,0,t.gb(n,6).target,t.gb(n,6).href),l(n,7,0,t.Ya(1,"",e._settings.data.logo,""))})}var S=t.Sa("app-two-factor-auth",g,function(l){return t.qb(0,[(l()(),t.Wa(0,0,null,null,1,"app-two-factor-auth",[],null,null,null,C,v)),t.Va(1,114688,null,0,g,[c.a,a.a,p.d,y.l,r.a,o.a,s.j],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=e("4GxJ"),A=e("d2mR"),w=e("t/Na"),I=e("7HA4");e.d(n,"TwoFactorAuthModuleNgFactory",function(){return _});var _=t.Ta(d,[],function(l){return t.db([t.eb(512,t.k,t.Ia,[[8,[h.a,b.a,b.b,b.i,b.e,b.f,b.g,b.h,S]],[3,t.k],t.C]),t.eb(4608,m.n,m.m,[t.z,[2,m.z]]),t.eb(4608,p.z,p.z,[]),t.eb(4608,p.d,p.d,[]),t.eb(4608,D.t,D.t,[t.k,t.v,D.W,D.u]),t.eb(5120,s.f,A.b,[w.c]),t.eb(4608,s.c,s.e,[]),t.eb(4608,s.h,s.d,[]),t.eb(4608,s.b,s.a,[]),t.eb(4608,s.m,s.m,[]),t.eb(4608,s.j,s.j,[s.m,s.f,s.c,s.h,s.b,s.k,s.l]),t.eb(1073742336,m.c,m.c,[]),t.eb(1073742336,p.w,p.w,[]),t.eb(1073742336,p.h,p.h,[]),t.eb(1073742336,p.s,p.s,[]),t.eb(1073742336,y.o,y.o,[[2,y.u],[2,y.l]]),t.eb(1073742336,I.a,I.a,[]),t.eb(1073742336,s.g,s.g,[]),t.eb(1073742336,D.c,D.c,[]),t.eb(1073742336,D.f,D.f,[]),t.eb(1073742336,D.g,D.g,[]),t.eb(1073742336,D.k,D.k,[]),t.eb(1073742336,D.l,D.l,[]),t.eb(1073742336,D.q,D.q,[]),t.eb(1073742336,D.r,D.r,[]),t.eb(1073742336,D.v,D.v,[]),t.eb(1073742336,D.z,D.z,[]),t.eb(1073742336,D.A,D.A,[]),t.eb(1073742336,D.D,D.D,[]),t.eb(1073742336,D.G,D.G,[]),t.eb(1073742336,D.M,D.M,[]),t.eb(1073742336,D.Q,D.Q,[]),t.eb(1073742336,D.T,D.T,[]),t.eb(1073742336,D.U,D.U,[]),t.eb(1073742336,D.w,D.w,[]),t.eb(1073742336,A.c,A.c,[]),t.eb(1073742336,d,d,[]),t.eb(256,s.l,void 0,[]),t.eb(256,s.k,void 0,[]),t.eb(1024,y.j,function(){return[[{path:"",component:g,children:[{path:"login",component:g}]}]]},[])])})}}]);