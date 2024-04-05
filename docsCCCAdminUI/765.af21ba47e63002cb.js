"use strict";(self.webpackChunkCCCAdminUI=self.webpackChunkCCCAdminUI||[]).push([[765],{4765:(D,v,i)=>{i.r(v),i.d(v,{AuthenticationModule:()=>q});var l=i(2480),u=i(4755),A=i(430),c=i(6012),p=i(8097),x=i(1292),g=i(1728),a=i(9401),w=i(792),T=i(5664),b=i(1246),t=i(2223),y=i(7505),Z=i(3474),U=i(9663),F=i(3648),d=i(9114);function S(n,m){if(1&n&&(t.TgZ(0,"div",19),t._uU(1),t.qZA()),2&n){const r=t.oxw().$implicit;t.xp6(1),t.hij(" ",r.message," ")}}function C(n,m){if(1&n&&(t.ynx(0),t.YNc(1,S,2,1,"div",18),t.BQk()),2&n){const r=m.$implicit,e=t.oxw();let o;t.xp6(1),t.Q6J("ngIf",(null==(o=e.loginForm.get("email"))?null:o.hasError(r.type))&&((null==(o=e.loginForm.get("email"))?null:o.dirty)||(null==(o=e.loginForm.get("email"))?null:o.touched)))}}function L(n,m){if(1&n&&(t.TgZ(0,"div",19),t._uU(1),t.qZA()),2&n){const r=t.oxw().$implicit;t.xp6(1),t.hij(" ",r.message," ")}}function I(n,m){if(1&n&&(t.ynx(0),t.YNc(1,L,2,1,"div",18),t.BQk()),2&n){const r=m.$implicit,e=t.oxw();let o;t.xp6(1),t.Q6J("ngIf",(null==(o=e.loginForm.get("password"))?null:o.hasError(r.type))&&((null==(o=e.loginForm.get("password"))?null:o.dirty)||(null==(o=e.loginForm.get("password"))?null:o.touched)))}}const k=function(){return[""]},J=function(){return["/"]},Q=function(){return["/dashboard"]},Y=function(){return["/"]},M=function(){return["/authentication/login"]},j=[{path:"",children:[{path:"login",component:(()=>{class n{constructor(r,e,o,s,f,$){this.formValidation=r,this.store=e,this.router=o,this.dataStore=s,this.userLoginUseCase=f,this.alert=$,this.errorMessage="",this.validationMessages=b.K,this.loginForm=this.formValidation.Login(),this.loginForm.patchValue({email:"raphael@gmail.com",password:"Password123"}),this.dataStore.items$.subscribe({next:h=>{console.log(h)}}),this.dataStore.item$(1).subscribe({next:h=>{console.log(h)}})}login(r){let o=this;this.userLoginUseCase.execute({email:r.email,password:r.password}).subscribe({next(s){o.store.add({dataId:4,dataName:"authToken",value:s}),o.alert.success("login successful"),o.loginForm.reset(),o.router.navigate(["app/dashboard"])},error(s){o.alert.error("login failed"),console.log(s)}})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(y.I),t.Y36(Z.Z),t.Y36(l.F0),t.Y36(Z.Z),t.Y36(U.$),t.Y36(F._W))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:28,vars:7,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light-primary"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/ccc/ccclogo.png","alt","logo",1,"align-middle","m-2","logo"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","email"],[1,"validation-errors","text-yellow-600"],[4,"ngFor","ngForOf"],["matInput","","type","password","formControlName","password"],[1,"d-flex","align-items-center","m-b-12"],[1,"text-primary","f-w-600","text-decoration-none","m-l-auto","f-s-14",3,"routerLink"],["type","submit","mat-flat-button","","color","primary",1,"w-100",3,"click"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),t._UZ(7,"img",7),t.qZA()(),t.TgZ(8,"form",8),t.NdJ("ngSubmit",function(){return o.login(o.loginForm.value)}),t.TgZ(9,"div")(10,"mat-label",9),t._uU(11,"email"),t.qZA(),t.TgZ(12,"mat-form-field",10),t._UZ(13,"input",11),t.qZA(),t.TgZ(14,"div",12),t.YNc(15,C,2,1,"ng-container",13),t.qZA()(),t.TgZ(16,"div")(17,"mat-label",9),t._uU(18,"Password"),t.qZA(),t.TgZ(19,"mat-form-field",10),t._UZ(20,"input",14),t.qZA(),t.TgZ(21,"div",12),t.YNc(22,I,2,1,"ng-container",13),t.qZA()(),t.TgZ(23,"div",15)(24,"a",16),t._uU(25,"Forgot Password ?"),t.qZA()(),t.TgZ(26,"a",17),t.NdJ("click",function(){return o.login(o.loginForm.value)}),t._uU(27," Sign In "),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("routerLink",t.DdM(5,k)),t.xp6(2),t.Q6J("formGroup",o.loginForm),t.xp6(7),t.Q6J("ngForOf",o.validationMessages.email),t.xp6(7),t.Q6J("ngForOf",o.validationMessages.password),t.xp6(2),t.Q6J("routerLink",t.DdM(6,J)))},dependencies:[u.sg,u.O5,l.rH,c.a8,c.dn,p.Nt,d.KE,d.hX,g.zs,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],encapsulation:2})}return n})()},{path:"register",component:(()=>{class n{constructor(r){this.router=r,this.form=new a.cw({uname:new a.NI("",[a.kI.required,a.kI.minLength(6)]),email:new a.NI("",[a.kI.required]),password:new a.NI("",[a.kI.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboard"])}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:40,vars:6,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light-primary"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/dark-logo.svg","alt","logo",1,"align-middle","m-2"],[1,"row","m-t-24","custom-row"],[1,"col-12","col-sm-6"],["mat-stroked-button","",1,"w-100"],[1,"d-flex","align-items-center"],["src","/assets/images/svgs/google-icon.svg","alt","google","width","16",1,"m-r-8"],["mat-stroked-button","",1,"w-100","d-flex","align-items-center"],["src","/assets/images/svgs/facebook-icon.svg","alt","facebook","width","40",1,"m-r-4"],[1,"or-border","m-t-30"],[1,"m-t-30"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","email"],["matInput","","type","password"],["mat-flat-button","","color","primary",1,"w-100",3,"routerLink"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),t._UZ(7,"img",7),t.qZA()(),t.TgZ(8,"div",8)(9,"div",9)(10,"button",10)(11,"div",11),t._UZ(12,"img",12),t._uU(13," Sign in with Google "),t.qZA()()(),t.TgZ(14,"div",9)(15,"button",13)(16,"div",11),t._UZ(17,"img",14),t._uU(18," Sign in with FB "),t.qZA()()()(),t.TgZ(19,"div",15),t._uU(20,"or sign up with"),t.qZA(),t.TgZ(21,"form",16)(22,"mat-label",17),t._uU(23,"Name"),t.qZA(),t.TgZ(24,"mat-form-field",18),t._UZ(25,"input",19),t.qZA(),t.TgZ(26,"mat-label",17),t._uU(27,"Email Adddress"),t.qZA(),t.TgZ(28,"mat-form-field",18),t._UZ(29,"input",20),t.qZA(),t.TgZ(30,"mat-label",17),t._uU(31,"Password"),t.qZA(),t.TgZ(32,"mat-form-field",18),t._UZ(33,"input",21),t.qZA(),t.TgZ(34,"a",22),t._uU(35," Sign Up "),t.qZA()(),t.TgZ(36,"span",23),t._uU(37,"Already have an Account? "),t.TgZ(38,"a",24),t._uU(39," Sign In"),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("routerLink",t.DdM(3,Q)),t.xp6(28),t.Q6J("routerLink",t.DdM(4,Y)),t.xp6(4),t.Q6J("routerLink",t.DdM(5,M)))},dependencies:[l.rH,c.a8,c.dn,p.Nt,d.KE,d.hX,g.zs,g.lW,a._Y,a.JL,a.F],encapsulation:2})}return n})()}]}];let q=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.ez,l.Bz.forChild(j),A.Ps,c.QW,p.c,x.p9,g.ot,a.u5,a.UX,w.e.pick(T)]})}return n})()}}]);