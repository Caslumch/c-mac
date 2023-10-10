"use strict";(self.webpackChunkcmac_site=self.webpackChunkcmac_site||[]).push([[845],{6471:(M,_,l)=>{l.d(_,{G:()=>e});var i=l(4946),g=l(6814),c=l(9310);const u=function(d){return[d]},T=function(){return["linkSelect"]};function v(d,f){if(1&d&&(i.TgZ(0,"li",14)(1,"a",15),i._uU(2),i.qZA()()),2&d){const m=f.$implicit;i.xp6(1),i.Q6J("routerLink",i.VKq(3,u,"/"+m.routerLink))("routerLinkActive",i.DdM(5,T)),i.xp6(1),i.Oqu(m.option)}}const h=function(){return["/home"]};let e=(()=>{var d;class f{constructor(){this.up="pi-angle-up",this.optionsMenu=[{option:"Sobre",id:1,routerLink:"about"},{option:"Projetos",id:2,routerLink:"projects"},{option:"Contato",id:3,routerLink:"contact"}],this.navbarVisible=!1}ngOnInit(){}toggleNavbar(){this.navbarVisible=!this.navbarVisible,this.navbarVisible||(this.up="pi-angle-down")}handleImageError(){}}return(d=f).\u0275fac=function(Z){return new(Z||d)},d.\u0275cmp=i.Xpm({type:d,selectors:[["app-header"]],decls:15,vars:3,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","navbar-custom"],[1,"container-fluid"],[1,"d-none","d-md-block","col-md-6","d-flex"],["id","reload","href","#",1,"navbar-brand","mr-auto"],["src","./assets/logo-site-c.png","alt","Rita RH",1,"file-img","sidebar-menu-logo",3,"error"],[1,"m-md-0","m-2","row"],[1,"col-12","col-md-2"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"menu-d","pi","pi-bars"],[1,"col-12","col-md-5","d-flex","justify-content-initial","justify-content-md-end","text-md-end","text-center"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","options","d-flex","flex-column","flex-md-row","align-items-center"],["class","opt-navbar nav-item",4,"ngFor","ngForOf"],[1,"ml-3","btn-navbar","mt-4",3,"routerLink"],[1,"opt-navbar","nav-item"],["id","inicio","href","#",1,"optMenu","typeOpt",3,"routerLink","routerLinkActive"]],template:function(Z,C){1&Z&&(i.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"img",4),i.NdJ("error",function(){return C.handleImageError()}),i.qZA()()(),i.TgZ(5,"div",5)(6,"div",6)(7,"button",7),i._UZ(8,"span",8),i.qZA()()(),i.TgZ(9,"div",9)(10,"div",10)(11,"ul",11),i.YNc(12,v,3,6,"li",12),i.qZA(),i.TgZ(13,"div",13),i._uU(14,"Inicio"),i.qZA()()()()()),2&Z&&(i.xp6(12),i.Q6J("ngForOf",C.optionsMenu),i.xp6(1),i.Q6J("routerLink",i.DdM(2,h)))},dependencies:[g.sg,c.rH,c.Od],encapsulation:2}),f})()},7236:(M,_,l)=>{l.d(_,{t:()=>c});var i=l(4946),g=l(9310);let c=(()=>{var u;class T{constructor(){}ngOnInit(){}}return(u=T).\u0275fac=function(h){return new(h||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-autenticacao"]],decls:1,vars:0,template:function(h,e){1&h&&i._UZ(0,"router-outlet")},dependencies:[g.lC],encapsulation:2}),T})()},6845:(M,_,l)=>{l.r(_),l.d(_,{PagesModule:()=>B});var i=l(6814),g=l(9310),c=l(95),u=l(5219),T=l(7236);function v(t,r,a,o,n,s,p){try{var b=t[s](p),A=b.value}catch(z){return void a(z)}b.done?r(A):Promise.resolve(A).then(o,n)}function h(t){return function(){var r=this,a=arguments;return new Promise(function(o,n){var s=t.apply(r,a);function p(A){v(s,o,n,p,b,"next",A)}function b(A){v(s,o,n,p,b,"throw",A)}p(void 0)})}}var e=l(4946),d=l(9862);let f=(()=>{var t;class r{constructor(o){this.http=o,this.sendGridApiUrl="https://api.sendgrid.com/v3/mail/send",this.sendGridApiKey="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",this._baseUrlWatherMap="https://api.openweathermap.org/data/2.5/",this.key="3744c7390deaf333d69741cbcd2df7fd",this.city="S\xe3o Paulo"}enviarEmail(o,n,s){const p=new d.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.sendGridApiKey}`});return this.http.post(this.sendGridApiUrl,{personalizations:[{to:[{email:o}],subject:n}],from:{email:"caslumach@gmail.com"},content:[{type:"text/plain",value:s}]},{headers:p})}getWatherMap(o,n){return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${o}&lon=${n}&appid=${this.key}&lang=pt_br&units=metric\n    `)}}return(t=r).\u0275fac=function(o){return new(o||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var m=l(707),Z=l(9445),C=l(6471);let U=(()=>{var t;class r{constructor(){this.formInputElements=[],this.displayMessage={},this.clearMessage=()=>{this.displayMessage={}}}ngAfterViewInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(o,n){if(1&o&&e.Gf(c.u,5,e.SBq),2&o){let s;e.iGM(s=e.CRH())&&(n.formInputElements=s)}},decls:0,vars:0,template:function(o,n){},encapsulation:2}),r})();var x=l(3714),w=l(7213),q=l(6218);const W=function(){return{width:"90vw",height:"200vw"}},F=function(){return{width:"20vw",height:"50vw"}};let I=(()=>{var t;class r extends U{constructor(o,n){super(),this.fb=o,this.userController=n,this.displayModal=!1,this.ehMobile=!1,this.destinatario="caslumach@gmail.com",this.createForm=()=>{this.form=this.form=this.fb.group({nome:["",[c.kI.required]],email:["",[c.kI.required]],telefone:["",[c.kI.required]],assunto:[""],text:["",[c.kI.required]]})},this.save=()=>{this.userController.enviarEmail(this.destinatario,this.form.value.assunto,`De: ${this.form.value.nome} email: ${this.form.value.email}, telefone: ${this.form.value.telefone},\n    assunto: ${this.form.value.assunto}, texto: ${this.form.value.text}\n    `).subscribe({next:()=>{},error:()=>{}})},this.openModal=()=>this.displayModal=!0,this.closeModal=()=>this.displayModal=!1}ngOnInit(){this.createForm(),this.ehMobile=window.screen.width<992}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(c.QS),e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal-contato"]],features:[e.qOj],decls:27,vars:7,consts:[[1,"custom-dialog"],[3,"visible","visibleChange"],[1,"titleModal","text-center","col-12"],["novalidate","",3,"formGroup"],[1,"row"],[1,"mt-4","col-12","col-md-12"],[1,"field"],["placeholder","Digite seu Nome","type","text","formControlName","nome","pInputText","",1,"w-full"],["placeholder","email","type","text","formControlName","email","pInputText","",1,"w-full"],[1,"mt-4","col-12","col-md-12","form-group"],["placeholder","Digite seu Telefone","formControlName","telefone","type","text","mask","000.000.000-00","pInputText","",1,"w-full"],["placeholder","Assunto","type","text","formControlName","assunto","pInputText","",1,"w-full"],[1,"mt-4","col-12"],["placeholder","Escreva em detalhes o que tem pensado","formControlName","text","rows","5","cols","30","pInputTextarea","",1,"w-full"],[1,"mt-4","col-12","text-center"],[1,"mch-fs-17","iconWhatsapp"],["href"," https://wa.me/5511963034276","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-whatsapp"],[1,"row","d-flex","justify-content-center"],[1,"col-12","col-md-12","mt-4"],["label","Enviar",1,"w-full",3,"disabled","onClick"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"p-dialog",1),e.NdJ("visibleChange",function(p){return n.displayModal=p}),e.TgZ(2,"div",2),e._uU(3,"Mande um email."),e.qZA(),e.TgZ(4,"form",3)(5,"div",4)(6,"div",5)(7,"div",6),e._UZ(8,"input",7),e.qZA()(),e.TgZ(9,"div",5)(10,"div",6),e._UZ(11,"input",8),e.qZA()(),e.TgZ(12,"div",9)(13,"div",6),e._UZ(14,"input",10),e.qZA()(),e.TgZ(15,"div",5)(16,"div",6),e._UZ(17,"input",11),e.qZA()(),e.TgZ(18,"div",12),e._UZ(19,"textarea",13),e.qZA(),e.TgZ(20,"div",14)(21,"p",15),e._uU(22,"Me chame no whatsapp se prefirir "),e.qZA(),e._UZ(23,"a",16),e.qZA()()(),e.TgZ(24,"div",17)(25,"div",18)(26,"p-button",19),e.NdJ("onClick",function(){return n.save()}),e.qZA()()()()()),2&o&&(e.xp6(1),e.Akn(n.ehMobile?e.DdM(5,W):e.DdM(6,F)),e.Q6J("visible",n.displayModal),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(22),e.Q6J("disabled",!n.form.valid))},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,m.zx,x.o,w.V,q.g],encapsulation:2}),r})();const E=["mContato"];let y=(()=>{var t;class r{constructor(){this.simbol="<\\",this.redes=()=>{alert("redes")},this.modalInvlidCpf=()=>{this.mContato.openModal()}}ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],viewQuery:function(o,n){if(1&o&&e.Gf(E,5),2&o){let s;e.iGM(s=e.CRH())&&(n.mContato=s.first)}},decls:20,vars:0,consts:[[1,"row"],[1,"mt-4","col-12"],[1,"insights",2,"position","initial"],[1,"col-12"],[1,"titleInsights","mch-fs-30"],[1,"subTitleInsights","mch-fs-"],[1,"m-0","m-md-3","col-12","col-md-3","d-flex","d-md-block","justify-content-center","justify-content-md-initial"],["icon","pi pi-external-link","label","Fale Comigo","styleClass","p-button-outlined",3,"click"],[1,"row","justify-content-center"],[1,"col-2","col-md-1"],["href","https://github.com/Caslumch","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-github"],["href","https://www.instagram.com/caslumch/?hl=pt-br","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-instagram"],["href","https://www.linkedin.com/in/lucas-machado-16a42422b/","target","_blank",1,"mt-5","mt-md-0","iconSocial","pi","pi-linkedin"],["mContato",""]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"label",4),e._uU(6,"Vamos iniciar algo juntos?"),e.qZA(),e.TgZ(7,"p",5),e._uU(8,"Se voc\xea tem algum projeto em mente, ou apenas quer bater um papo, sinta-se \xe0 vontade para me enviar uma mensagem."),e.qZA()(),e.TgZ(9,"div",6)(10,"p-button",7),e.NdJ("click",function(){return n.modalInvlidCpf()}),e.qZA()()(),e.TgZ(11,"div",8)(12,"div",9),e._UZ(13,"a",10),e.qZA(),e.TgZ(14,"div",9),e._UZ(15,"a",11),e.qZA(),e.TgZ(16,"div",9),e._UZ(17,"a",12),e.qZA()()()()(),e._UZ(18,"app-modal-contato",null,13))},dependencies:[m.zx,I],encapsulation:2}),r})(),P=(()=>{var t;class r{constructor(){this.displayModal=!1,this.dadosWeather=[],this.openModal=()=>this.displayModal=!0,this.closeModal=()=>this.displayModal=!1}ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal-weather"]],inputs:{dadosWeather:"dadosWeather"},decls:21,vars:11,consts:[["styleClass","custom-p-dialog",3,"position","showHeader","visible","draggable","visibleChange"],[1,"row"],[1,"mt-4","mch-fs-17","col-12"],[1,""],[1,"col-6"],[1,"location"],[1,"mch-fs-12","mch-color-grey2"],[1,"iconLocale","pi","pi-map-marker"],[1,"mch-fs-17"],[1,"temp"],[1,"col-6","caixa-menor"],["src","https://openweathermap.org/img/wn/04n.png",1,"icone"],[1,"mch-fs-15"],[1,"col-12","text-center"],[1,"umidade"]],template:function(o,n){1&o&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(p){return n.displayModal=p}),e.TgZ(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Parece que vai chover ai em"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5)(7,"label",6),e._UZ(8,"span",7),e.qZA(),e.TgZ(9,"span",8),e._uU(10),e.qZA()(),e.TgZ(11,"p",9),e._uU(12),e.ALo(13,"number"),e.qZA()(),e.TgZ(14,"div",10),e._UZ(15,"img",11),e.TgZ(16,"label",12),e._uU(17),e.qZA()(),e.TgZ(18,"div",13)(19,"p",14),e._uU(20),e.qZA()()()()),2&o&&(e.Q6J("position","bottomright")("showHeader",!1)("visible",n.displayModal)("draggable",!1),e.xp6(10),e.Oqu(null==n.dadosWeather?null:n.dadosWeather.name),e.xp6(2),e.Oqu(e.xi3(13,8,null==n.dadosWeather?null:n.dadosWeather.main.temp,"1.0-0")+" \xb0C"),e.xp6(5),e.Oqu(null==n.dadosWeather?null:n.dadosWeather.weather[0].description),e.xp6(3),e.Oqu("Umidade: "+(null==n.dadosWeather?null:n.dadosWeather.main.humidity)+"%"))},dependencies:[w.V,i.JJ],encapsulation:2}),r})();const L=["mWeather"];let j=(()=>{var t;class r{constructor(o){var n=this;this.userController=o,this.latitude=0,this.longitude=0,this.simbolStyle="color: #d4ff5b; cursor: pointer",this.simbol="<\\",this.ehMobile=!1,this.dadosTempo=[{id:1,temp:"> 25",Title:"Na sua cidade est\xe1 Ensolarado",img:""},{id:2,temp:"16 - 25",Title:"Na sua cidade est\xe1 Parcialmente ensolarado com poss\xedveis nuvens.",img:""},{id:3,temp:"10 - 15",Title:"Na sua cidade est\xe1 Nublado com possibilidade de chuva leve.",img:""},{id:4,temp:"< 10",Title:"Na sua cidade est\xe1 Nublado com chuva moderada.",img:""},{id:5,temp:"< 10",Title:"Na sua cidade est\xe1 Chuvoso com possibilidade de trovoadas.",img:""},{id:6,temp:"< 0",Title:"Na sua cidade est\xe1 Frio e com possibilidade de neve.",img:""},{id:7,temp:"> 35",Title:"Na sua cidade est\xe1 Muito quente e ensolarado, risco de calor intenso.",img:""},{id:9,temp:"= 0",Title:"Frio com possibilidade de geada",img:""}],this.position="bottomright",this.modalInvlidCpf=()=>{},this.getLocale=h(function*(){if(n.ehMobile=window.screen.width<992,!n.ehMobile)try{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(s=>{n.latitude=s.coords.latitude,n.longitude=s.coords.longitude,n.getWatherMap()}):console.log("Geolocaliza\xe7\xe3o n\xe3o est\xe1 dispon\xedvel no seu navegador.")}catch(s){console.log(s)}}),this.getWatherMap=()=>{this.userController.getWatherMap(this.latitude,this.longitude).subscribe({next:s=>{this.dadosWeather=s,console.log(this.dadosWeather),this.mWeather.openModal()},error:()=>{}})},this.close=()=>{this.mWeather.closeModal()}}ngOnInit(){var o=this;return h(function*(){o.getLocale(),setInterval(o.close,1e4)})()}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(o,n){if(1&o&&e.Gf(L,5),2&o){let s;e.iGM(s=e.CRH())&&(n.mWeather=s.first)}},decls:32,vars:4,consts:[[1,"container-found"],[1,"containerCsite"],[1,"col-12"],[1,"row"],[1,"col-12","col-md-8","mch-color-white","text-hi"],[1,"mch-fs-17","mch-color-grey2"],[1,"pulse"],[1,"col-md-4","col-12"],["icon","pi pi-send","label","Me Acompanhe nas Redes","iconPos","right"],[1,"mt-4","mt-md-0","col-md-0","col-md-2","col-12"],["label","Fotografia","styleClass","p-button-outlined"],[1,"mt-4","row"],[1,"panelElement","mt-4","col-12","col-md-6"],[3,"dadosWeather"],["mWeather",""]],template:function(o,n){1&o&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"label")(7,"span"),e._uU(8),e.qZA(),e._uU(9," Hi, I\u2019m Lucas Machado - Front-end developer."),e.qZA(),e.TgZ(10,"p",5),e._UZ(11,"span",6),e._uU(12," Dando vida \xe0 web com c\xf3digo e design. "),e.qZA()()(),e.TgZ(13,"div",3)(14,"div",7),e._UZ(15,"p-button",8),e.qZA(),e.TgZ(16,"div",9),e._UZ(17,"p-button",10),e.qZA()(),e.TgZ(18,"div",11)(19,"div",12)(20,"p-panel")(21,"p"),e._uU(22," Pedro Machado da Silva "),e.qZA(),e.TgZ(23,"p"),e._uU(24," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "),e.qZA()()(),e.TgZ(25,"div",12)(26,"p-panel")(27,"ul"),e._UZ(28,"li"),e.qZA()()()()(),e._UZ(29,"app-footer"),e.qZA()(),e._UZ(30,"app-modal-weather",13,14)),2&o&&(e.xp6(7),e.Akn(n.simbolStyle),e.xp6(1),e.Oqu(n.simbol),e.xp6(22),e.Q6J("dadosWeather",n.dadosWeather))},dependencies:[m.zx,Z.s,C.G,y,P],encapsulation:2}),r})();var N=l(9464),O=l(8697),k=l(3423),G=l(5359);let D=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-about"]],decls:28,vars:0,consts:[[1,"container-found"],[1,"containerCsite"],[1,"col-12"],[1,"col-12","col-md-12"],[1,"text-hi-title"],[1,"row"],[1,"col-12","col-md-6","mch-color-white","imgProfile"],["src","./assets/profile.jpg","alt","profile",1,"imgProfile"],[1,"mt-4","mt-md-0","col-12","col-md-6","mch-color-white"],[1,"mt-4","col-12","col-md-12","title"],[1,"title"],[1,"col-12","col-md-12","mch-c"],[1,"bline","mch-color-grey2"],["href","http://fegit.com.br/","target","_blank",1,"mch-color-white"],[1,"mch-color-grey2"]],template:function(o,n){1&o&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e._uU(6,"Sobre Mim"),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6),e._UZ(9,"img",7),e.qZA(),e.TgZ(10,"div",8)(11,"p"),e._uU(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "),e.qZA()()(),e.TgZ(13,"div",5)(14,"div",9)(15,"p",10),e._uU(16,"Carreira"),e.qZA()(),e.TgZ(17,"div",11)(18,"h5"),e._uU(19,"Desenvolvedor Fullstack"),e.qZA(),e.TgZ(20,"label",12)(21,"a",13)(22,"span",14),e._uU(23,"FegIt"),e.qZA()(),e._uU(24," \u2022 Barueri, SP "),e.qZA(),e.TgZ(25,"p",14),e._uU(26,"jan 2022 \u2013 set 2023 \u2022 1 ano 7 meses"),e.qZA()()()(),e._UZ(27,"app-footer"),e.qZA()())},dependencies:[C.G,y],encapsulation:2}),r})();const J=function(){return["/home"]};let H=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact"]],decls:13,vars:2,consts:[[1,"container-found"],[1,"containerCsite"],[1,"row","d-flex","justify-content-center"],[1,"col-12","col-md-12","text-center"],[1,"mt-4","text-hi-title","mch-fs-50"],["src","./assets/config.png","alt","man",1,"imgConfig"],[1,"mt-4"],[1,"mt-4","m-4","col-12","col-md-3"],["label","P\xe1gina Inicial",3,"routerLink"]],template:function(o,n){1&o&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"p",4),e._uU(6,"Contato."),e.qZA(),e._UZ(7,"img",5),e.TgZ(8,"p",6),e._uU(9,"Em manuten\xe7\xe3o."),e.qZA()(),e.TgZ(10,"div",7),e._UZ(11,"p-button",8),e.qZA()(),e._UZ(12,"app-footer"),e.qZA()()),2&o&&(e.xp6(11),e.Q6J("routerLink",e.DdM(1,J)))},dependencies:[m.zx,g.rH,C.G,y],encapsulation:2}),r})();const Q=function(){return["/home"]},S=[{path:"",children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:j},{path:"about",component:D},{path:"projects",component:(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-projects"]],decls:13,vars:2,consts:[[1,"container-found"],[1,"containerCsite"],[1,"row","d-flex","justify-content-center"],[1,"col-12","col-md-12","text-center"],[1,"mt-4","text-hi-title","mch-fs-50"],["src","./assets/config.png","alt","man",1,"imgConfig"],[1,"mt-4"],[1,"mt-4","m-4","col-12","col-md-3"],["label","P\xe1gina Inicial",3,"routerLink"]],template:function(o,n){1&o&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"p",4),e._uU(6,"Projetos."),e.qZA(),e._UZ(7,"img",5),e.TgZ(8,"p",6),e._uU(9,"Em manuten\xe7\xe3o."),e.qZA()(),e.TgZ(10,"div",7),e._UZ(11,"p-button",8),e.qZA()(),e._UZ(12,"app-footer"),e.qZA()()),2&o&&(e.xp6(11),e.Q6J("routerLink",e.DdM(1,Q)))},dependencies:[m.zx,g.rH,C.G,y],encapsulation:2}),r})()},{path:"contact",component:H}]},{path:"login",component:T.t,loadChildren:()=>l.e(628).then(l.bind(l,1628)).then(t=>t.AutenticacaoModule)}];let B=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[u.YP,u.ez],imports:[k.kW,m.hJ,Z.Q,G.x,x.j,O.W,i.ez,c.u5,c.UX,g.Bz.forChild(S),N.K]}),r})()}}]);