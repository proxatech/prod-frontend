(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ax3S:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),t=u("Eo4b"),e=u("0np6"),c=u("Vurf"),s=u("zJpK"),r=u("2g2N"),o=function(){function l(l,n,u,a,t,e,c){this._authService=l,this._backend=n,this.translate=u,this.toast=a,this.router=t,this.route=e,this._config=c,this.breadcrumbs={},this.s3Buckets=[],this.sftpBuckets=[],this.data_loaded=!1,this.message="Loading..."}return l.prototype.ngOnInit=function(){var l=this;this.translate.use("en"),this.translate.get("containers").subscribe(function(n){l.breadcrumbs={parentBreadcrumb:n.breadcrumbs.parentBreadcrumb,childBreadcrumb:n.breadcrumbs.childBreadcrumb,label:n.breadcrumbs.label}}),this.sub=this.route.params.subscribe(function(n){n.bucketName&&(l.bucketName=n.bucketName,l.getBucketsInfo())})},l.prototype.getBucketsInfo=function(){var l=this;this._backend.get("s3bucket/containers/configurations").subscribe(function(n){null!=n&&200==n.statusCode&&(l.s3Buckets=n.responsePayload,l.data_loaded=!0)}),this._backend.get("sftp/containers/configurations").subscribe(function(n){null!=n&&200==n.statusCode&&(l.sftpBuckets=n.responsePayload,l.data_loaded=!0)})},l}(),i=function(){},b=u("pMnS"),d=u("9AJC"),f=u("ZYCi"),m=u("Ip0R"),k=u("PC7G"),p=u("+803"),g=a.Ua({encapsulation:0,styles:[[""]],data:{}});function h(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,1,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),a.ob(-1,null,["S3"]))],null,null)}function v(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,1,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),a.ob(-1,null,["SFTP"]))],null,null)}function N(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,1,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),a.ob(-1,null,["GCP"]))],null,null)}function W(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.Wa(1,0,null,null,0,"span",[["class","fa fa-folder-open m-r-10 folder"]],null,null,null,null,null)),(l()(),a.Wa(2,0,null,null,2,"a",[],[[8,"title",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.gb(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),a.Va(3,671744,null,0,f.n,[f.l,f.a,m.i],{routerLink:[0,"routerLink"]},null),(l()(),a.ob(4,null,["",""]))],function(l,n){l(n,3,0,"/dashboard/bucket-list/bucket-folders/"+n.context.$implicit.bucketName)},function(l,n){l(n,2,0,a.Ya(1,"",n.context.$implicit.bucketName,""),a.gb(n,3).target,a.gb(n,3).href),l(n,4,0,n.context.$implicit.bucketName)})}function V(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),a.Na(16777216,null,null,1,null,W)),a.Va(2,278528,null,0,m.k,[a.V,a.S,a.x],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.s3Buckets)},null)}function x(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,10,"div",[["class","product-box"]],null,null,null,null,null)),a.Va(1,278528,null,0,m.j,[a.x,a.y,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.jb(2,{"col-sm-12 col-md-4":0,"col-md-12 full-box":1}),(l()(),a.Wa(3,0,null,null,7,"div",[["class","card list-custom-card"]],null,null,null,null,null)),(l()(),a.Wa(4,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a.Wa(5,0,null,null,0,"div",[["class","s3"]],null,null,null,null,null)),(l()(),a.Wa(6,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.ob(-1,null,["S3"])),(l()(),a.Wa(8,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.Na(16777216,null,null,1,null,V)),a.Va(10,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,"product-box",l(n,2,0,"all"==u.bucketName,"all"!==u.bucketName)),l(n,10,0,u.s3Buckets&&u.s3Buckets.length)},null)}function I(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.Wa(1,0,null,null,0,"span",[["class","fa fa-folder-open m-r-10 folder"]],null,null,null,null,null)),(l()(),a.Wa(2,0,null,null,2,"a",[],[[8,"title",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.gb(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),a.Va(3,671744,null,0,f.n,[f.l,f.a,m.i],{routerLink:[0,"routerLink"]},null),(l()(),a.ob(4,null,["",""]))],function(l,n){l(n,3,0,"/dashboard/sftp-bucket-list/sftp-bucket-folders/"+n.context.$implicit.bucketName)},function(l,n){l(n,2,0,a.Ya(1,"",n.context.$implicit.bucketName,""),a.gb(n,3).target,a.gb(n,3).href),l(n,4,0,n.context.$implicit.bucketName)})}function y(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),a.Na(16777216,null,null,1,null,I)),a.Va(2,278528,null,0,m.k,[a.V,a.S,a.x],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.sftpBuckets)},null)}function S(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,10,"div",[["class","product-box"]],null,null,null,null,null)),a.Va(1,278528,null,0,m.j,[a.x,a.y,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.jb(2,{"col-sm-12 col-md-4":0,"col-md-12 full-box":1}),(l()(),a.Wa(3,0,null,null,7,"div",[["class","card list-custom-card"]],null,null,null,null,null)),(l()(),a.Wa(4,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a.Wa(5,0,null,null,0,"div",[["class","sftp"]],null,null,null,null,null)),(l()(),a.Wa(6,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.ob(-1,null,["SFTP"])),(l()(),a.Wa(8,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.Na(16777216,null,null,1,null,y)),a.Va(10,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,"product-box",l(n,2,0,"all"==u.bucketName,"all"!==u.bucketName)),l(n,10,0,u.sftpBuckets&&u.sftpBuckets.length)},null)}function C(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,9,"div",[["class","product-box"]],null,null,null,null,null)),a.Va(1,278528,null,0,m.j,[a.x,a.y,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.jb(2,{"col-sm-12 col-md-4":0,"col-md-12 full-box":1}),(l()(),a.Wa(3,0,null,null,6,"div",[["class","card list-custom-card"]],null,null,null,null,null)),(l()(),a.Wa(4,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a.Wa(5,0,null,null,0,"div",[["class","gcp"]],null,null,null,null,null)),(l()(),a.Wa(6,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.ob(-1,null,["GCP"])),(l()(),a.Wa(8,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.Wa(9,0,null,null,0,"div",[["class","comingsoonsec"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,1,0,"product-box",l(n,2,0,"all"==u.bucketName,"all"!==u.bucketName))},null)}function B(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),a.Wa(1,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Na(16777216,null,null,1,null,x)),a.Va(3,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(16777216,null,null,1,null,S)),a.Va(5,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(16777216,null,null,1,null,C)),a.Va(7,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,"s3"==u.bucketName||"all"==u.bucketName),l(n,5,0,"sftp"==u.bucketName||"all"==u.bucketName),l(n,7,0,"gcp"==u.bucketName||"all"==u.bucketName)},null)}function q(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,1,"div",[["class","product-box p-20 text-center"]],null,null,null,null,null)),(l()(),a.ob(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.message)})}function j(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,11,"app-breadcrumb",[],null,null,null,k.b,k.a)),a.Va(1,114688,null,0,p.a,[f.l],null,null),(l()(),a.Wa(2,0,null,0,3,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),a.Wa(3,0,null,null,2,"a",[["href","javascript:void(0)"],["routerLink","/dashboard/buckets-list/all"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.gb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),a.Va(4,671744,null,0,f.n,[f.l,f.a,m.i],{routerLink:[0,"routerLink"]},null),(l()(),a.ob(-1,null,["Containers"])),(l()(),a.Na(16777216,null,0,1,null,h)),a.Va(7,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(16777216,null,0,1,null,v)),a.Va(9,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(16777216,null,0,1,null,N)),a.Va(11,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null),(l()(),a.Wa(12,0,null,null,6,"div",[["class","product-wrapper-grid"]],null,null,null,null,null)),(l()(),a.Wa(13,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Wa(14,0,null,null,4,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),a.Na(16777216,null,null,1,null,B)),a.Va(16,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(16777216,null,null,1,null,q)),a.Va(18,16384,null,0,m.l,[a.V,a.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0),l(n,4,0,"/dashboard/buckets-list/all"),l(n,7,0,"s3"==u.bucketName),l(n,9,0,"sftp"==u.bucketName),l(n,11,0,"gcp"==u.bucketName),l(n,16,0,u.data_loaded),l(n,18,0,!u.data_loaded)},function(l,n){l(n,3,0,a.gb(n,4).target,a.gb(n,4).href)})}var w=a.Sa("app-bucket-list",o,function(l){return a.qb(0,[(l()(),a.Wa(0,0,null,null,1,"app-bucket-list",[],null,null,null,j,g)),a.Va(1,114688,null,0,o,[c.a,s.a,t.j,r.a,f.l,f.a,e.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),K=u("gIcY"),_=u("4GxJ"),F=u("d2mR"),L=u("t/Na"),J=u("7HA4"),z=u("zF/N");u.d(n,"BucketListModuleNgFactory",function(){return G});var G=a.Ta(i,[],function(l){return a.db([a.eb(512,a.k,a.Ia,[[8,[b.a,d.a,d.b,d.i,d.e,d.f,d.g,d.h,w]],[3,a.k],a.C]),a.eb(4608,m.n,m.m,[a.z,[2,m.z]]),a.eb(4608,K.x,K.x,[]),a.eb(4608,K.d,K.d,[]),a.eb(4608,_.t,_.t,[a.k,a.v,_.W,_.u]),a.eb(5120,t.f,F.b,[L.c]),a.eb(4608,t.c,t.e,[]),a.eb(4608,t.h,t.d,[]),a.eb(4608,t.b,t.a,[]),a.eb(4608,t.m,t.m,[]),a.eb(4608,t.j,t.j,[t.m,t.f,t.c,t.h,t.b,t.k,t.l]),a.eb(1073742336,m.c,m.c,[]),a.eb(1073742336,K.v,K.v,[]),a.eb(1073742336,K.h,K.h,[]),a.eb(1073742336,f.o,f.o,[[2,f.u],[2,f.l]]),a.eb(1073742336,K.r,K.r,[]),a.eb(1073742336,J.a,J.a,[]),a.eb(1073742336,z.a,z.a,[]),a.eb(1073742336,t.g,t.g,[]),a.eb(1073742336,_.c,_.c,[]),a.eb(1073742336,_.f,_.f,[]),a.eb(1073742336,_.g,_.g,[]),a.eb(1073742336,_.k,_.k,[]),a.eb(1073742336,_.l,_.l,[]),a.eb(1073742336,_.q,_.q,[]),a.eb(1073742336,_.r,_.r,[]),a.eb(1073742336,_.v,_.v,[]),a.eb(1073742336,_.z,_.z,[]),a.eb(1073742336,_.A,_.A,[]),a.eb(1073742336,_.D,_.D,[]),a.eb(1073742336,_.G,_.G,[]),a.eb(1073742336,_.M,_.M,[]),a.eb(1073742336,_.Q,_.Q,[]),a.eb(1073742336,_.T,_.T,[]),a.eb(1073742336,_.U,_.U,[]),a.eb(1073742336,_.w,_.w,[]),a.eb(1073742336,F.c,F.c,[]),a.eb(1073742336,i,i,[]),a.eb(256,t.l,void 0,[]),a.eb(256,t.k,void 0,[]),a.eb(1024,f.j,function(){return[[{path:"",component:o},{path:"bucket-list/:bucketName",component:o}]]},[])])})},"zF/N":function(l,n,u){"use strict";u.d(n,"a",function(){return a});var a=function(){}}}]);