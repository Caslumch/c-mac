"use strict";(self.webpackChunkcmac_site=self.webpackChunkcmac_site||[]).push([[651],{6471:(U,f,a)=>{a.d(f,{G:()=>C});var n=a(4946),v=a(6814),s=a(9310);const p=function(c){return[c]},g=function(){return["linkSelect"]};function t(c,h){if(1&c&&(n.TgZ(0,"li",14)(1,"a",15),n._uU(2),n.qZA()()),2&c){const u=h.$implicit;n.xp6(1),n.Q6J("routerLink",n.VKq(3,p,"/"+u.routerLink))("routerLinkActive",n.DdM(5,g)),n.xp6(1),n.Oqu(u.option)}}const m=function(){return["/home"]};let C=(()=>{var c;class h{constructor(){this.up="pi-angle-up",this.optionsMenu=[{option:"Sobre",id:1,routerLink:"sobre"},{option:"Projetos",id:2,routerLink:"projetos"},{option:"Contato",id:3,routerLink:"contato"}],this.navbarVisible=!1}ngOnInit(){}toggleNavbar(){this.navbarVisible=!this.navbarVisible,this.navbarVisible||(this.up="pi-angle-down")}handleImageError(){}}return(c=h).\u0275fac=function(Z){return new(Z||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-header"]],decls:15,vars:3,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","navbar-custom"],[1,"container-fluid"],[1,"d-none","d-md-block","col-md-6","d-flex"],["id","reload","href","#",1,"navbar-brand","mr-auto"],["src","./assets/logo-site-c.png","alt","Rita RH",1,"file-img","sidebar-menu-logo",3,"error"],[1,"m-md-0","m-2","row"],[1,"col-12","col-md-2"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"menu-d","pi","pi-bars"],[1,"col-12","col-md-5","d-flex","justify-content-initial","justify-content-md-end","text-md-end","text-center"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","options","d-flex","flex-column","flex-md-row","align-items-center"],["class","opt-navbar nav-item",4,"ngFor","ngForOf"],[1,"btn-navbar","mt-4",3,"routerLink"],[1,"opt-navbar","nav-item"],["id","inicio","href","#",1,"optMenu","typeOpt",3,"routerLink","routerLinkActive"]],template:function(Z,b){1&Z&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"img",4),n.NdJ("error",function(){return b.handleImageError()}),n.qZA()()(),n.TgZ(5,"div",5)(6,"div",6)(7,"button",7),n._UZ(8,"span",8),n.qZA()()(),n.TgZ(9,"div",9)(10,"div",10)(11,"ul",11),n.YNc(12,t,3,6,"li",12),n.qZA(),n.TgZ(13,"div",13),n._uU(14,"Inicio"),n.qZA()()()()()),2&Z&&(n.xp6(12),n.Q6J("ngForOf",b.optionsMenu),n.xp6(1),n.Q6J("routerLink",n.DdM(2,m)))},dependencies:[v.sg,s.rH,s.Od],encapsulation:2}),h})()},7236:(U,f,a)=>{a.d(f,{t:()=>s});var n=a(4946),v=a(9310);let s=(()=>{var p;class g{constructor(){}ngOnInit(){}}return(p=g).\u0275fac=function(m){return new(m||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-autenticacao"]],decls:1,vars:0,template:function(m,C){1&m&&n._UZ(0,"router-outlet")},dependencies:[v.lC],encapsulation:2}),g})()},5651:(U,f,a)=>{a.r(f),a.d(f,{PagesModule:()=>k});var n=a(6814),v=a(9310),s=a(95),p=a(5219),g=a(7236),t=a(4946),m=a(707),C=a(9445),c=a(6471);let h=(()=>{var e;class i{constructor(){this.formInputElements=[],this.displayMessage={},this.clearMessage=()=>{this.displayMessage={}}}ngAfterViewInit(){}}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(o,l){if(1&o&&t.Gf(s.u,5,t.SBq),2&o){let d;t.iGM(d=t.CRH())&&(l.formInputElements=d)}},decls:0,vars:0,template:function(o,l){},encapsulation:2}),i})();var u=a(9862);let Z=(()=>{var e;class i{constructor(o){this.http=o,this.sendGridApiUrl="https://api.sendgrid.com/v3/mail/send",this.sendGridApiKey="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"}enviarEmail(o,l,d){const T=new u.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.sendGridApiKey}`});return this.http.post(this.sendGridApiUrl,{personalizations:[{to:[{email:o}],subject:l}],from:{email:"caslumach@gmail.com"},content:[{type:"text/plain",value:d}]},{headers:T})}}return(e=i).\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),i})();var b=a(3714),_=a(7213),y=a(6218);const x=function(){return{width:"90vw",height:"200vw"}},M=function(){return{width:"20vw",height:"50vw"}};let w=(()=>{var e;class i extends h{constructor(o,l){super(),this.fb=o,this.userController=l,this.displayModal=!1,this.ehMobile=!1,this.destinatario="caslumach@gmail.com",this.createForm=()=>{this.form=this.form=this.fb.group({nome:[""],email:[""],telefone:[""],assunto:[""],text:[""]})},this.save=()=>{this.userController.enviarEmail(this.destinatario,this.form.value.assunto,`De: ${this.form.value.nome} email: ${this.form.value.email}, telefone: ${this.form.value.telefone},\n    assunto: ${this.form.value.assunto}, texto: ${this.form.value.text}\n    `).subscribe({next:()=>{},error:()=>{}})},this.openModal=()=>this.displayModal=!0,this.closeModal=()=>this.displayModal=!1}ngOnInit(){this.createForm(),this.ehMobile=window.screen.width<992}}return(e=i).\u0275fac=function(o){return new(o||e)(t.Y36(s.QS),t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal-contato"]],features:[t.qOj],decls:22,vars:6,consts:[[3,"visible","visibleChange"],[1,"titleModal","text-center","col-12"],["novalidate","",3,"formGroup"],[1,"row"],[1,"mt-4","col-12","col-md-12"],[1,"field"],["placeholder","Digite seu Nome","type","text","formControlName","nome","pInputText","",1,"w-full"],["placeholder","email","type","text","formControlName","email","pInputText","",1,"w-full"],[1,"mt-4","col-12","col-md-12","form-group"],["placeholder","Digite seu Telefone","formControlName","telefone","type","text","mask","000.000.000-00","pInputText","",1,"w-full"],["placeholder","Assunto","type","text","formControlName","assunto","pInputText","",1,"w-full"],[1,"mt-4","col-12"],["placeholder","Escreva em detalhes o que tem pensado","formControlName","text","rows","5","cols","30","pInputTextarea","",1,"w-full"],[1,"row","d-flex","justify-content-center"],[1,"col-12","col-md-12","mt-4"],["label","Enviar",1,"w-full",3,"onClick"]],template:function(o,l){1&o&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(T){return l.displayModal=T}),t.TgZ(1,"div",1),t._uU(2,"Mande um email."),t.qZA(),t.TgZ(3,"form",2)(4,"div",3)(5,"div",4)(6,"div",5),t._UZ(7,"input",6),t.qZA()(),t.TgZ(8,"div",4)(9,"div",5),t._UZ(10,"input",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",5),t._UZ(13,"input",9),t.qZA()(),t.TgZ(14,"div",4)(15,"div",5),t._UZ(16,"input",10),t.qZA()(),t.TgZ(17,"div",11),t._UZ(18,"textarea",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"div",14)(21,"p-button",15),t.NdJ("onClick",function(){return l.save()}),t.qZA()()()()),2&o&&(t.Akn(l.ehMobile?t.DdM(4,x):t.DdM(5,M)),t.Q6J("visible",l.displayModal),t.xp6(3),t.Q6J("formGroup",l.form))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,m.zx,b.o,_.V,y.g],encapsulation:2}),i})();const q=["mContato"];let A=(()=>{var e;class i{constructor(){this.simbol="<\\",this.redes=()=>{alert("redes")},this.modalInvlidCpf=()=>{this.mContato.openModal()}}ngOnInit(){}}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],viewQuery:function(o,l){if(1&o&&t.Gf(q,5),2&o){let d;t.iGM(d=t.CRH())&&(l.mContato=d.first)}},decls:20,vars:0,consts:[[1,"row"],[1,"mt-4","col-12"],[1,"insights",2,"position","initial"],[1,"col-12"],[1,"titleInsights","mch-fs-30"],[1,"subTitleInsights","mch-fs-"],[1,"m-0","m-md-3","col-12","col-md-3","d-flex","d-md-block","justify-content-center","justify-content-md-initial"],["icon","pi pi-external-link","label","Fale Comigo","styleClass","p-button-outlined",3,"click"],[1,"row","justify-content-center"],[1,"col-2","col-md-1"],["href","https://github.com/Caslumch","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-github",2,"color","#d3d3d3"],["href","https://www.instagram.com/caslumch/?hl=pt-br","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-instagram",2,"color","#d3d3d3"],["href","https://www.linkedin.com/in/lucas-machado-16a42422b/","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-linkedin",2,"color","#d3d3d3"],["mContato",""]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"label",4),t._uU(6,"Vamos iniciar algo juntos?"),t.qZA(),t.TgZ(7,"p",5),t._uU(8,"Se voc\xea tem algum projeto em mente, ou apenas quer bater um papo, sinta-se \xe0 vontade para me enviar uma mensagem."),t.qZA()(),t.TgZ(9,"div",6)(10,"p-button",7),t.NdJ("click",function(){return l.modalInvlidCpf()}),t.qZA()()(),t.TgZ(11,"div",8)(12,"div",9),t._UZ(13,"a",10),t.qZA(),t.TgZ(14,"div",9),t._UZ(15,"a",11),t.qZA(),t.TgZ(16,"div",9),t._UZ(17,"a",12),t.qZA()()()()(),t._UZ(18,"app-modal-contato",null,13))},dependencies:[m.zx,w],encapsulation:2}),i})(),E=(()=>{var e;class i{constructor(){this.simbolStyle="color: #d4ff5b; cursor: pointer",this.simbol="<\\",this.redes=()=>{alert("redes")}}ngOnInit(){}}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:25,vars:3,consts:[[1,"container-found"],[1,"containerCsite"],[1,"col-12"],[1,"row"],[1,"col-12","col-md-8","mch-color-white","text-hi"],[1,"mch-fs-15","mch-color-grey2"],[1,"col-md-4","col-12"],["label","Me Acompanhe nas Redes"],[1,"mt-4","mt-md-0","col-md-0","col-md-2","col-12"],["label","Projetos","styleClass","p-button-outlined"],[1,"mt-4","row"],[1,"mt-4","col-12","col-md-8"]],template:function(o,l){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"label")(7,"span"),t._uU(8),t.qZA(),t._uU(9," Hi, I\u2019m Lucas Machado - Front-end developer."),t.qZA(),t.TgZ(10,"p",5),t._uU(11,"Dando vida \xe0 web com c\xf3digo e design."),t.qZA()()(),t.TgZ(12,"div",3)(13,"div",6),t._UZ(14,"p-button",7),t.qZA(),t.TgZ(15,"div",8),t._UZ(16,"p-button",9),t.qZA()(),t.TgZ(17,"div",10)(18,"div",11)(19,"p-panel")(20,"p"),t._uU(21," Pedro Machado da Silva "),t.qZA(),t.TgZ(22,"p"),t._uU(23," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "),t.qZA()()()()(),t._UZ(24,"app-footer"),t.qZA()()),2&o&&(t.xp6(7),t.Akn(l.simbolStyle),t.xp6(1),t.Oqu(l.simbol))},dependencies:[m.zx,C.s,c.G,A],encapsulation:2}),i})();var F=a(9464),I=a(8313),j=a(3423),P=a(5359);let L=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about"]],decls:28,vars:0,consts:[[1,"container-found"],[1,"containerCsite"],[1,"col-12"],[1,"col-12","col-md-12"],[1,"text-hi-title","mch-fs-30"],[1,"row"],[1,"col-12","col-md-6","mch-color-white","imgProfile"],["src","./assets/profile.jpg","alt","profile",1,"imgProfile"],[1,"col-12","col-md-6","mch-color-white"],[1,"mt-4","col-12","col-md-12","title"],[1,"title"],[1,"col-12","col-md-12","mch-c"],[1,"bline","mch-color-grey2"],["href","http://fegit.com.br/","target","_blank",1,"mch-color-white"],[1,"mch-color-grey2"]],template:function(o,l){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),t._uU(6,"Sobre Mim"),t.qZA()(),t.TgZ(7,"div",5)(8,"div",6),t._UZ(9,"img",7),t.qZA(),t.TgZ(10,"div",8)(11,"p"),t._uU(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "),t.qZA()()(),t.TgZ(13,"div",5)(14,"div",9)(15,"p",10),t._uU(16,"Carreira"),t.qZA()(),t.TgZ(17,"div",11)(18,"h5"),t._uU(19,"Desenvolvedor Fullstack"),t.qZA(),t.TgZ(20,"label",12)(21,"a",13)(22,"span",14),t._uU(23,"FegIt"),t.qZA()(),t._uU(24," \u2022 Barueri, SP "),t.qZA(),t.TgZ(25,"p",14),t._uU(26,"jan 2022 \u2013 set 2023 \u2022 1 ano 7 meses"),t.qZA()()()(),t._UZ(27,"app-footer"),t.qZA()())},dependencies:[c.G,A],encapsulation:2}),i})();const D=function(){return["/home"]};let O=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact"]],decls:11,vars:2,consts:[[1,"container-found"],[1,"containerCsite"],[1,"row","d-flex","justify-content-center"],[1,"col-12","col-md-12","text-center"],["src","./assets/config.png","alt","man",1,"imgConfig"],[1,"mt-4"],[1,"mt-4","m-4","col-12","col-md-3"],["label","P\xe1gina Inicial",3,"routerLink"]],template:function(o,l){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"p",5),t._uU(7,"Em manuten\xe7\xe3o."),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"p-button",7),t.qZA()(),t._UZ(10,"app-footer"),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("routerLink",t.DdM(1,D)))},dependencies:[m.zx,v.rH,c.G,A],encapsulation:2}),i})();const G=function(){return["/home"]},N=[{path:"",children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:E},{path:"sobre",component:L},{path:"projetos",component:(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-projects"]],decls:11,vars:2,consts:[[1,"container-found"],[1,"containerCsite"],[1,"row","d-flex","justify-content-center"],[1,"col-12","col-md-12","text-center"],["src","./assets/config.png","alt","man",1,"imgConfig"],[1,"mt-4"],[1,"mt-4","m-4","col-12","col-md-3"],["label","P\xe1gina Inicial",3,"routerLink"]],template:function(o,l){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"p",5),t._uU(7,"Em manuten\xe7\xe3o."),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"p-button",7),t.qZA()(),t._UZ(10,"app-footer"),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("routerLink",t.DdM(1,G)))},dependencies:[m.zx,v.rH,c.G,A],encapsulation:2}),i})()},{path:"contato",component:O}]},{path:"login",component:g.t,loadChildren:()=>a.e(628).then(a.bind(a,1628)).then(e=>e.AutenticacaoModule)}];let k=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[p.YP,p.ez],imports:[j.kW,m.hJ,C.Q,P.x,b.j,I.W,n.ez,s.u5,s.UX,v.Bz.forChild(N),F.K]}),i})()}}]);