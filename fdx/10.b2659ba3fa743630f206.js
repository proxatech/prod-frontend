(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{oSKP:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("y1Tc"),a=u("zJpK"),r=u("Eo4b"),o=u("Vurf"),c=u("2g2N"),s=(u("PSD3"),function(){function l(l,n,u,e){this._authService=l,this._backend=n,this.translate=u,this.toast=e,this.breadcrumbs={},this.data_loaded=!0,this.buckets=[],this.message=""}return l.prototype.ngOnInit=function(){var l=this;this.translate.use("en"),this.translate.get("bucket").subscribe(function(n){l.breadcrumbs={parentBreadcrumb:n.breadcrumbs.parentBreadcrumb,childBreadcrumb:n.breadcrumbs.childBreadcrumb,link:"buckets/configure-bucket",label:n.breadcrumbs.label}}),this.getUsers()},l.prototype.getUsers=function(){var l=this;this.data_loaded=!1,this._backend.get("s3bucket/containers/configurations").subscribe(function(n){200==n.statusCode?(l.buckets=n.responsePayload,l.data_loaded=!0):(l.message=n.message,l.data_loaded=!0)})},l}()),i=u("mrSG"),b=u("gIcY"),d=u("fNlQ"),g=function(l){function n(n,u,e,t,a,r,o){var c=l.call(this)||this;return c.translate=n,c._bucketForm=u,c._backend=e,c.router=t,c.route=a,c.authService=r,c.toast=o,c.breadcrumbs={},c.validate=new d.a,c.bucket={s3BucketConfigurationDetailsId:null,accessKey:"",secretId:"",region:"",bucketName:"",saasBucket:"0",employeeDetailsId:null,employeeName:""},c.url="s3bucket/container/configuration/save",c.bucketForm=u.group({accessKey:["",[b.u.required,b.u.maxLength(150)]],secretId:["",[b.u.required,b.u.maxLength(150)]],region:["",[b.u.required,c.validate.alpha_numeric,b.u.maxLength(150)]],bucketName:["",[b.u.required,c.validate.alpha_numeric,b.u.maxLength(200)]]}),c}return Object(i.__extends)(n,l),n.prototype.ngOnInit=function(){var l=this;this.translate.use("en"),this.translate.get("bucket").subscribe(function(n){l.breadcrumbs={parentBreadcrumb:n.add.parentBreadcrumb,childBreadcrumb:n.add.childBreadcrumb},l.sub=l.route.params.subscribe(function(u){u.bucketId&&(l.isEdit=!0,l.breadcrumbs={parentBreadcrumb:n.edit.parentBreadcrumb,childBreadcrumb:n.edit.childBreadcrumb},l.sub=l.route.params.subscribe(function(n){l._backend.get("s3bucket/container/configuration/"+n.bucketId).subscribe(function(n){200==n.statusCode&&("0"==n.responsePayload.saasBucket?l.bucket=n.responsePayload:l.navigate("/dashboard/buckets"))})}))})})},n.prototype.navigate=function(l){this.router.navigate([l])},n.prototype.testBucket=function(l){var n=this;this.isVerified=!1,l.saasBucket=this.bucket.saasBucket;try{this._backend.post("s3bucket/container/configuration/validate",l).subscribe(function(l){if(null!=l)if(200==l.statusCode)try{n.toast.alert("success",l.message,"Success"),n.isVerified=!0}catch(l){console.log(l)}else n.toast.alert("error",l.message,"Error!");else n.toast.alert("error","Server Down...","Uh")},function(l){n.toast.alert("error",l.message,"Error!")})}catch(l){console.log(l)}},n.prototype.submit=function(l){var n=this;if(this.isVerified&&this.isValidBucket||this.isEdit)try{l.saasBucket=this.bucket.saasBucket,this.isEdit&&(l.s3BucketConfigurationDetailsId=this.bucket.s3BucketConfigurationDetailsId),this._backend.post(this.url,l).subscribe(function(l){if(null!=l)if(200==l.statusCode)try{n.toast.alert("success",l.message,"Success"),n.bucketForm.reset(),n.navigate("/dashboard/buckets")}catch(l){console.log(l)}else n.toast.alert("error",l.message,"Error!");else n.toast.alert("error","Server Down...","Uh")},function(l){n.toast.alert("error",l.message,"Error!")})}catch(l){console.log(l)}else this.toast.alert("error","Please Validate Bucket","Error!")},n.prototype.validateBucket=function(){var l=this;this.isValidBucket=!1;var n=this.bucketForm.value.bucketName;if(n)try{this._backend.get("s3bucket/exists?bucketName="+n).subscribe(function(n){null!=n?200===n.statusCode?(l.toast.alert("success",n.message,"Success"),l.isValidBucket=!0):1001===n.statusCode?l.toast.alert("success",n.message,"Success"):(l.toast.alert("error",n.message,"Error!"),l.bucketForm.value.bucketName="",l.bucket.bucketName=""):(l.toast.alert("error","Server Down...","Uh"),l.bucketForm.value.bucketName="",l.bucket.bucketName="")},function(n){l.toast.alert("error",n.message,"Error!"),l.bucketForm.value.bucketName="",l.bucket.bucketName=""})}catch(l){console.log(l)}else this.isValidBucket=!1},n}(d.a),m=function(){},f=u("pMnS"),p=u("9AJC"),k=u("ZYCi"),h=u("Ip0R"),v=u("8AVf"),C=u("pqks"),W=u("jzHF"),V=u("QcA8"),y=u("pXdA"),I=u("aIf3"),q=u("4SU1"),N=u("YAZ3"),S=u("d2mR"),_=u("PC7G"),x=u("+803"),F=e.Ua({encapsulation:0,styles:[[".success-user[_ngcontent-%COMP%]{color:#22af47}.danger-user[_ngcontent-%COMP%]{color:#ff5370}.pending-user[_ngcontent-%COMP%]{color:#e8ebf2}.fw100[_ngcontent-%COMP%]{font-weight:100!important}"]],data:{}});function B(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,8,"div",[["class","card-header custom-header"]],null,null,null,null,null)),(l()(),e.Wa(1,0,null,null,7,"div",[["class","row pull-right"]],null,null,null,null,null)),(l()(),e.Wa(2,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e.Wa(3,0,null,null,5,"input",[["class","form-control"],["placeholder","Search"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.gb(l,4)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.gb(l,4).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.gb(l,4)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.gb(l,4)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(a.filter=u)&&t),t},null,null)),e.Va(4,16384,null,0,b.c,[e.J,e.m,[2,b.a]],null,null),e.lb(1024,null,b.l,function(l){return[l]},[b.c]),e.Va(6,671744,null,0,b.p,[[8,null],[8,null],[8,null],[6,b.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.lb(2048,null,b.m,null,[b.p]),e.Va(8,16384,null,0,b.n,[[4,b.m]],null,null)],function(l,n){l(n,6,0,n.component.filter)},function(l,n){l(n,3,0,e.gb(n,8).ngClassUntouched,e.gb(n,8).ngClassTouched,e.gb(n,8).ngClassPristine,e.gb(n,8).ngClassDirty,e.gb(n,8).ngClassValid,e.gb(n,8).ngClassInvalid,e.gb(n,8).ngClassPending)})}function w(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.Wa(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.ob(2,null,["",""])),(l()(),e.Wa(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.ob(4,null,["",""])),(l()(),e.Wa(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.ob(6,null,["",""])),(l()(),e.Wa(7,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Wa(8,0,null,null,3,"a",[["href","javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.gb(l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.Va(9,671744,null,0,k.n,[k.l,k.a,h.i],{routerLink:[0,"routerLink"]},null),(l()(),e.Wa(10,0,null,null,1,"app-feather-icons",[["size","xxx-small m-r-10"]],null,null,null,v.b,v.a)),e.Va(11,114688,null,0,C.a,[],{icon:[0,"icon"],size:[1,"size"]},null)],function(l,n){l(n,9,0,"/dashboard/buckets/configure-bucket/"+n.context.$implicit.s3BucketConfigurationDetailsId),l(n,11,0,"edit-2","xxx-small m-r-10")},function(l,n){l(n,2,0,n.context.$implicit.bucketName),l(n,4,0,n.context.$implicit.owner),l(n,6,0,"1"==n.context.$implicit.saasBucket?"Yes":"No"),l(n,8,0,e.gb(n,9).target,e.gb(n,9).href)})}function K(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,6,"tfoot",[],null,null,null,null,null)),(l()(),e.Wa(1,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.Wa(2,0,null,null,4,"td",[["colspan","4"]],null,null,null,null,null)),(l()(),e.Wa(3,0,null,null,3,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e.Wa(4,0,null,null,2,"mfBootstrapPaginator",[],null,null,null,W.b,W.a)),e.Va(5,573440,null,0,V.a,[],{rowsOnPageSet:[0,"rowsOnPageSet"]},null),e.hb(6,3)],function(l,n){l(n,5,0,l(n,6,0,5,10,25))},null)}function j(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,21,"div",[["class","product-box"]],null,null,null,null,null)),(l()(),e.Wa(1,0,null,null,20,"table",[["class","table"]],null,null,null,null,null)),e.Va(2,868352,[["mf",4]],0,y.a,[I.a],{inputData:[0,"inputData"],rowsOnPage:[1,"rowsOnPage"]},null),e.jb(3,{bucketName:0}),e.kb(4,2),(l()(),e.Wa(5,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),e.Wa(6,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e.Wa(7,0,null,null,3,"th",[],null,null,null,null,null)),(l()(),e.Wa(8,0,null,null,2,"mfDefaultSorter",[["by","bucketName"]],null,null,null,q.b,q.a)),e.Va(9,49152,null,0,N.a,[y.a],{sortBy:[0,"sortBy"],showSortableArrows:[1,"showSortableArrows"]},null),(l()(),e.ob(-1,0,["Bucket Name "])),(l()(),e.Wa(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.ob(-1,null,["Owner"])),(l()(),e.Wa(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.ob(-1,null,["SaaS Bucket"])),(l()(),e.Wa(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.ob(-1,null,["\xa0"])),(l()(),e.Wa(17,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.Na(16777216,null,null,1,null,w)),e.Va(19,278528,null,0,h.k,[e.V,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Na(16777216,null,null,1,null,K)),e.Va(21,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,e.pb(n,2,0,l(n,4,0,e.gb(n.parent,0),u.buckets,l(n,3,0,u.filter))),u._authService.pageSize),l(n,9,0,"bucketName",!0),l(n,19,0,e.gb(n,2).data),l(n,21,0,u.buckets.length>=u._authService.pageSize)},null)}function P(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,1,"div",[["class","product-box p-20 text-center"]],null,null,null,null,null)),(l()(),e.ob(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.message)})}function M(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,1,"div",[["class","product-box p-20 text-center"]],null,null,null,null,null)),(l()(),e.ob(-1,null,["Loading..."]))],null,null)}function D(l){return e.qb(0,[e.ib(0,S.a,[]),(l()(),e.Wa(1,0,null,null,5,"app-breadcrumb",[],null,null,null,_.b,_.a)),e.Va(2,114688,null,0,x.a,[k.l],{breadcrumbs:[0,"breadcrumbs"]},null),(l()(),e.Wa(3,0,null,0,3,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e.Wa(4,0,null,null,2,"a",[["href","javascript:void(0)"],["routerLink","/dashboard/configurator"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.gb(l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.Va(5,671744,null,0,k.n,[k.l,k.a,h.i],{routerLink:[0,"routerLink"]},null),(l()(),e.ob(-1,null,["Configurator"])),(l()(),e.Wa(7,0,null,null,11,"div",[["class","product-wrapper-grid"]],null,null,null,null,null)),(l()(),e.Wa(8,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Wa(9,0,null,null,9,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e.Wa(10,0,null,null,8,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.Na(16777216,null,null,1,null,B)),e.Va(12,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,j)),e.Va(14,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,P)),e.Va(16,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,M)),e.Va(18,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.breadcrumbs),l(n,5,0,"/dashboard/configurator"),l(n,12,0,u.buckets.length),l(n,14,0,u.data_loaded&&u.buckets.length),l(n,16,0,u.data_loaded&&!u.buckets.length),l(n,18,0,!u.data_loaded&&!u.buckets.length)},function(l,n){l(n,4,0,e.gb(n,5).target,e.gb(n,5).href)})}var E=e.Sa("app-buckets",s,function(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,1,"app-buckets",[],null,null,null,D,F)),e.Va(1,114688,null,0,s,[o.a,a.a,r.j,c.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),L=e.Ua({encapsulation:0,styles:[[""]],data:{}});function U(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.accessKey_required")))})}function T(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.accessKey_invalid")))})}function A(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.secretId_required")))})}function O(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.secretId_invalid")))})}function z(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.region_required")))})}function J(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.region_invalid")))})}function G(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.bucketName_required")))})}function Y(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,2,"div",[["class","text text-danger mt-1"]],null,null,null,null,null)),(l()(),e.ob(1,null,[" "," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){l(n,1,0,e.pb(n,1,0,e.gb(n,2).transform("bucket.bucketName_invalid")))})}function Q(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,3,"button",[["class","btn btn-primary mr-2"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.submit(t.bucketForm.value)&&e),e},null,null)),(l()(),e.Wa(1,0,null,null,0,"i",[["class","fa fa-save"]],null,null,null,null,null)),(l()(),e.ob(2,null,["\xa0"," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){var u=n.component;l(n,0,0,!u.bucketForm.valid||u.authService.showLoader),l(n,2,0,u.authService.showLoader?"":e.pb(n,2,0,e.gb(n,3).transform("bucket.submit")))})}function R(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,3,"button",[["class","btn btn-primary mr-2"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.testBucket(t.bucketForm.value)&&e),e},null,null)),(l()(),e.Wa(1,0,null,null,0,"i",[["class","fa fa-save"]],null,null,null,null,null)),(l()(),e.ob(2,null,["\xa0"," "])),e.ib(131072,r.i,[r.j,e.i])],null,function(l,n){var u=n.component;l(n,0,0,!u.bucketForm.valid||u.authService.showLoader),l(n,2,0,e.pb(n,2,0,e.gb(n,3).transform("bucket.validate")))})}function $(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,10,"app-breadcrumb",[],null,null,null,_.b,_.a)),e.Va(1,114688,null,0,x.a,[k.l],{breadcrumbs:[0,"breadcrumbs"],title:[1,"title"]},null),e.ib(131072,r.i,[r.j,e.i]),(l()(),e.Wa(3,0,null,0,3,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e.Wa(4,0,null,null,2,"a",[["href","javascript:void(0)"],["routerLink","/dashboard/configurator"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.gb(l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.Va(5,671744,null,0,k.n,[k.l,k.a,h.i],{routerLink:[0,"routerLink"]},null),(l()(),e.ob(-1,null,["Configurator"])),(l()(),e.Wa(7,0,null,0,3,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e.Wa(8,0,null,null,2,"a",[["href","javascript:void(0)"],["routerLink","/dashboard/buckets"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.gb(l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.Va(9,671744,null,0,k.n,[k.l,k.a,h.i],{routerLink:[0,"routerLink"]},null),(l()(),e.ob(-1,null,["S3"])),(l()(),e.Wa(11,0,null,null,96,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e.Wa(12,0,null,null,95,"div",[["class","authentication-box1 contact-profile-form"]],null,null,null,null,null)),(l()(),e.Wa(13,0,null,null,94,"div",[["class","card mt-4"]],null,null,null,null,null)),(l()(),e.Wa(14,0,null,null,93,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Wa(15,0,null,null,92,"form",[["class","p-t-0"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.gb(l,17).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.gb(l,17).onReset()&&t),t},null,null)),e.Va(16,16384,null,0,b.w,[],null,null),e.Va(17,540672,null,0,b.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.lb(2048,null,b.b,null,[b.g]),e.Va(19,16384,null,0,b.o,[[4,b.b]],null,null),(l()(),e.Wa(20,0,null,null,76,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e.Wa(21,0,null,null,18,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Wa(22,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Wa(23,0,null,null,4,"label",[["class","form-label"]],null,null,null,null,null)),(l()(),e.ob(24,null,["",""])),e.ib(131072,r.i,[r.j,e.i]),(l()(),e.Wa(26,0,null,null,1,"sup",[["class","required"]],null,null,null,null,null)),(l()(),e.ob(-1,null,["*"])),(l()(),e.Wa(28,0,null,null,7,"input",[["class","form-control"],["formControlName","accessKey"],["placeholder","Access Key"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.gb(l,29)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.gb(l,29).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.gb(l,29)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.gb(l,29)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(a.bucket.accessKey=u)&&t),t},null,null)),e.Va(29,16384,null,0,b.c,[e.J,e.m,[2,b.a]],null,null),e.Va(30,16384,null,0,b.s,[],{required:[0,"required"]},null),e.lb(1024,null,b.k,function(l){return[l]},[b.s]),e.lb(1024,null,b.l,function(l){return[l]},[b.c]),e.Va(33,671744,null,0,b.f,[[3,b.b],[6,b.k],[8,null],[6,b.l],[2,b.y]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.lb(2048,null,b.m,null,[b.f]),e.Va(35,16384,null,0,b.n,[[4,b.m]],null,null),(l()(),e.Na(16777216,null,null,1,null,U)),e.Va(37,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,T)),e.Va(39,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Wa(40,0,null,null,18,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Wa(41,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Wa(42,0,null,null,4,"label",[["class","form-label"]],null,null,null,null,null)),(l()(),e.ob(43,null,["",""])),e.ib(131072,r.i,[r.j,e.i]),(l()(),e.Wa(45,0,null,null,1,"sup",[["class","required"]],null,null,null,null,null)),(l()(),e.ob(-1,null,["*"])),(l()(),e.Wa(47,0,null,null,7,"input",[["class","form-control"],["formControlName","secretId"],["placeholder","Secret ID"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.gb(l,48)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.gb(l,48).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.gb(l,48)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.gb(l,48)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(a.bucket.secretId=u)&&t),t},null,null)),e.Va(48,16384,null,0,b.c,[e.J,e.m,[2,b.a]],null,null),e.Va(49,16384,null,0,b.s,[],{required:[0,"required"]},null),e.lb(1024,null,b.k,function(l){return[l]},[b.s]),e.lb(1024,null,b.l,function(l){return[l]},[b.c]),e.Va(52,671744,null,0,b.f,[[3,b.b],[6,b.k],[8,null],[6,b.l],[2,b.y]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.lb(2048,null,b.m,null,[b.f]),e.Va(54,16384,null,0,b.n,[[4,b.m]],null,null),(l()(),e.Na(16777216,null,null,1,null,A)),e.Va(56,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,O)),e.Va(58,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Wa(59,0,null,null,18,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Wa(60,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Wa(61,0,null,null,4,"label",[["class","form-label"]],null,null,null,null,null)),(l()(),e.ob(62,null,["",""])),e.ib(131072,r.i,[r.j,e.i]),(l()(),e.Wa(64,0,null,null,1,"sup",[["class","required"]],null,null,null,null,null)),(l()(),e.ob(-1,null,["*"])),(l()(),e.Wa(66,0,null,null,7,"input",[["autocomplete","off"],["class","form-control"],["formControlName","region"],["placeholder","Region"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.gb(l,67)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.gb(l,67).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.gb(l,67)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.gb(l,67)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(a.bucket.region=u)&&t),t},null,null)),e.Va(67,16384,null,0,b.c,[e.J,e.m,[2,b.a]],null,null),e.Va(68,16384,null,0,b.s,[],{required:[0,"required"]},null),e.lb(1024,null,b.k,function(l){return[l]},[b.s]),e.lb(1024,null,b.l,function(l){return[l]},[b.c]),e.Va(71,671744,null,0,b.f,[[3,b.b],[6,b.k],[8,null],[6,b.l],[2,b.y]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.lb(2048,null,b.m,null,[b.f]),e.Va(73,16384,null,0,b.n,[[4,b.m]],null,null),(l()(),e.Na(16777216,null,null,1,null,z)),e.Va(75,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,J)),e.Va(77,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Wa(78,0,null,null,18,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Wa(79,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Wa(80,0,null,null,4,"label",[["class","form-label"]],null,null,null,null,null)),(l()(),e.ob(81,null,["",""])),e.ib(131072,r.i,[r.j,e.i]),(l()(),e.Wa(83,0,null,null,1,"sup",[["class","required"]],null,null,null,null,null)),(l()(),e.ob(-1,null,["*"])),(l()(),e.Wa(85,0,null,null,7,"input",[["class","form-control"],["formControlName","bucketName"],["placeholder","Bucket Name"],["required",""],["type","text"]],[[1,"disabled",0],[1,"readonly",0],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.gb(l,86)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.gb(l,86).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.gb(l,86)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.gb(l,86)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(a.bucket.bucketName=u)&&t),"blur"===n&&(t=!1!==(a.isEdit?null:a.validateBucket())&&t),t},null,null)),e.Va(86,16384,null,0,b.c,[e.J,e.m,[2,b.a]],null,null),e.Va(87,16384,null,0,b.s,[],{required:[0,"required"]},null),e.lb(1024,null,b.k,function(l){return[l]},[b.s]),e.lb(1024,null,b.l,function(l){return[l]},[b.c]),e.Va(90,671744,null,0,b.f,[[3,b.b],[6,b.k],[8,null],[6,b.l],[2,b.y]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.lb(2048,null,b.m,null,[b.f]),e.Va(92,16384,null,0,b.n,[[4,b.m]],null,null),(l()(),e.Na(16777216,null,null,1,null,G)),e.Va(94,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,Y)),e.Va(96,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Wa(97,0,null,null,10,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e.Wa(98,0,null,null,9,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e.Wa(99,0,null,null,8,"div",[["class","form-group form-row mt-3 mb-0"]],null,null,null,null,null)),(l()(),e.Na(16777216,null,null,1,null,Q)),e.Va(101,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(16777216,null,null,1,null,R)),e.Va(103,16384,null,0,h.l,[e.V,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Wa(104,0,null,null,3,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.navigate("/dashboard/buckets")&&e),e},null,null)),(l()(),e.Wa(105,0,null,null,0,"i",[["class","fa fa-times"]],null,null,null,null,null)),(l()(),e.ob(106,null,["\xa0"," "])),e.ib(131072,r.i,[r.j,e.i])],function(l,n){var u=n.component;l(n,1,0,u.breadcrumbs,e.Ya(1,"",e.pb(n,1,1,e.gb(n,2).transform("bucket.title")),"")),l(n,5,0,"/dashboard/configurator"),l(n,9,0,"/dashboard/buckets"),l(n,17,0,u.bucketForm),l(n,30,0,""),l(n,33,0,"accessKey",u.bucket.accessKey),l(n,37,0,u.bucketForm.controls.accessKey.touched&&(null==u.bucketForm.controls.accessKey.errors?null:u.bucketForm.controls.accessKey.errors.required)),l(n,39,0,u.bucketForm.controls.accessKey.touched&&(null==u.bucketForm.controls.accessKey.errors?null:u.bucketForm.controls.accessKey.errors.accessKey)),l(n,49,0,""),l(n,52,0,"secretId",u.bucket.secretId),l(n,56,0,u.bucketForm.controls.secretId.touched&&(null==u.bucketForm.controls.secretId.errors?null:u.bucketForm.controls.secretId.errors.required)),l(n,58,0,u.bucketForm.controls.secretId.touched&&(null==u.bucketForm.controls.secretId.errors?null:u.bucketForm.controls.secretId.errors.secretId)),l(n,68,0,""),l(n,71,0,"region",u.bucket.region),l(n,75,0,u.bucketForm.controls.region.touched&&(null==u.bucketForm.controls.region.errors?null:u.bucketForm.controls.region.errors.required)),l(n,77,0,u.bucketForm.controls.region.touched&&(null==u.bucketForm.controls.region.errors?null:u.bucketForm.controls.region.errors.region)),l(n,87,0,""),l(n,90,0,"bucketName",u.bucket.bucketName),l(n,94,0,u.bucketForm.controls.bucketName.touched&&(null==u.bucketForm.controls.bucketName.errors?null:u.bucketForm.controls.bucketName.errors.required)),l(n,96,0,u.bucketForm.controls.bucketName.touched&&(null==u.bucketForm.controls.bucketName.errors?null:u.bucketForm.controls.bucketName.errors.bucketName)),l(n,101,0,u.isVerified||u.isEdit),l(n,103,0,!u.isVerified&&!u.isEdit)},function(l,n){var u=n.component;l(n,4,0,e.gb(n,5).target,e.gb(n,5).href),l(n,8,0,e.gb(n,9).target,e.gb(n,9).href),l(n,15,0,e.gb(n,19).ngClassUntouched,e.gb(n,19).ngClassTouched,e.gb(n,19).ngClassPristine,e.gb(n,19).ngClassDirty,e.gb(n,19).ngClassValid,e.gb(n,19).ngClassInvalid,e.gb(n,19).ngClassPending),l(n,24,0,e.pb(n,24,0,e.gb(n,25).transform("bucket.accessKey"))),l(n,28,0,e.gb(n,30).required?"":null,e.gb(n,35).ngClassUntouched,e.gb(n,35).ngClassTouched,e.gb(n,35).ngClassPristine,e.gb(n,35).ngClassDirty,e.gb(n,35).ngClassValid,e.gb(n,35).ngClassInvalid,e.gb(n,35).ngClassPending),l(n,43,0,e.pb(n,43,0,e.gb(n,44).transform("bucket.secretId"))),l(n,47,0,e.gb(n,49).required?"":null,e.gb(n,54).ngClassUntouched,e.gb(n,54).ngClassTouched,e.gb(n,54).ngClassPristine,e.gb(n,54).ngClassDirty,e.gb(n,54).ngClassValid,e.gb(n,54).ngClassInvalid,e.gb(n,54).ngClassPending),l(n,62,0,e.pb(n,62,0,e.gb(n,63).transform("bucket.region"))),l(n,66,0,e.gb(n,68).required?"":null,e.gb(n,73).ngClassUntouched,e.gb(n,73).ngClassTouched,e.gb(n,73).ngClassPristine,e.gb(n,73).ngClassDirty,e.gb(n,73).ngClassValid,e.gb(n,73).ngClassInvalid,e.gb(n,73).ngClassPending),l(n,81,0,e.pb(n,81,0,e.gb(n,82).transform("bucket.bucketName"))),l(n,85,0,u.isEdit,u.isEdit,e.gb(n,87).required?"":null,e.gb(n,92).ngClassUntouched,e.gb(n,92).ngClassTouched,e.gb(n,92).ngClassPristine,e.gb(n,92).ngClassDirty,e.gb(n,92).ngClassValid,e.gb(n,92).ngClassInvalid,e.gb(n,92).ngClassPending),l(n,106,0,e.pb(n,106,0,e.gb(n,107).transform("bucket.cancel")))})}var H=e.Sa("app-configure-bucket",g,function(l){return e.qb(0,[(l()(),e.Wa(0,0,null,null,1,"app-configure-bucket",[],null,null,null,$,L)),e.Va(1,114688,null,0,g,[r.j,b.d,a.a,k.l,k.a,o.a,c.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Z=u("4GxJ"),X=u("t/Na"),ll=u("7HA4"),nl=u("zF/N"),ul=u("SdnV");u.d(n,"BucketsModuleNgFactory",function(){return el});var el=e.Ta(m,[],function(l){return e.db([e.eb(512,e.k,e.Ia,[[8,[f.a,p.a,p.b,p.i,p.e,p.f,p.g,p.h,E,H]],[3,e.k],e.C]),e.eb(4608,h.n,h.m,[e.z,[2,h.z]]),e.eb(4608,b.x,b.x,[]),e.eb(4608,b.d,b.d,[]),e.eb(4608,Z.t,Z.t,[e.k,e.v,Z.W,Z.u]),e.eb(5120,r.f,S.b,[X.c]),e.eb(4608,r.c,r.e,[]),e.eb(4608,r.h,r.d,[]),e.eb(4608,r.b,r.a,[]),e.eb(4608,r.m,r.m,[]),e.eb(4608,r.j,r.j,[r.m,r.f,r.c,r.h,r.b,r.k,r.l]),e.eb(4608,I.a,I.a,[]),e.eb(1073742336,h.c,h.c,[]),e.eb(1073742336,b.v,b.v,[]),e.eb(1073742336,b.h,b.h,[]),e.eb(1073742336,k.o,k.o,[[2,k.u],[2,k.l]]),e.eb(1073742336,b.r,b.r,[]),e.eb(1073742336,ll.a,ll.a,[]),e.eb(1073742336,nl.a,nl.a,[]),e.eb(1073742336,r.g,r.g,[]),e.eb(1073742336,Z.c,Z.c,[]),e.eb(1073742336,Z.f,Z.f,[]),e.eb(1073742336,Z.g,Z.g,[]),e.eb(1073742336,Z.k,Z.k,[]),e.eb(1073742336,Z.l,Z.l,[]),e.eb(1073742336,Z.q,Z.q,[]),e.eb(1073742336,Z.r,Z.r,[]),e.eb(1073742336,Z.v,Z.v,[]),e.eb(1073742336,Z.z,Z.z,[]),e.eb(1073742336,Z.A,Z.A,[]),e.eb(1073742336,Z.D,Z.D,[]),e.eb(1073742336,Z.G,Z.G,[]),e.eb(1073742336,Z.M,Z.M,[]),e.eb(1073742336,Z.Q,Z.Q,[]),e.eb(1073742336,Z.T,Z.T,[]),e.eb(1073742336,Z.U,Z.U,[]),e.eb(1073742336,Z.w,Z.w,[]),e.eb(1073742336,S.c,S.c,[]),e.eb(1073742336,ul.a,ul.a,[]),e.eb(1073742336,m,m,[]),e.eb(256,r.l,void 0,[]),e.eb(256,r.k,void 0,[]),e.eb(1024,k.j,function(){return[[{path:"",component:s,canActivate:[t.a]},{path:"configure-bucket",component:g,canActivate:[t.a]},{path:"configure-bucket/:bucketId",component:g,canActivate:[t.a]}]]},[])])})}}]);