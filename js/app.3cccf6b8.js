(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-07b6038f":"981f9674","chunk-11b1200a":"17d93d20","chunk-11c2abcb":"1607ec26","chunk-622912d0":"4aed8d3a","chunk-126f160e":"edb7fc9c","chunk-27facaae":"15aa24ad","chunk-2d22d746":"6bfd0836"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-622912d0":1,"chunk-126f160e":1,"chunk-27facaae":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-07b6038f":"31d6cfe0","chunk-11b1200a":"31d6cfe0","chunk-11c2abcb":"31d6cfe0","chunk-622912d0":"fdfb8a34","chunk-126f160e":"8971f386","chunk-27facaae":"f3ef123a","chunk-2d22d746":"31d6cfe0"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],b.parentNode.removeChild(b),a(s)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/gerenciador-de-tarefas-anuncio/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"08c4":function(e,t,a){},"28cc":function(e,t,a){},4590:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t){var a=Object(n["A"])("router-view");return Object(n["s"])(),Object(n["e"])(a)}a("75bb");const o={};o.render=r;var s=o,i=a("9483");Object(i["a"])("".concat("/gerenciador-de-tarefas-anuncio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var c=a("1da1"),l=(a("96cf"),a("6c02")),u=a("2591"),d=(a("d3b7"),a("3ca3"),a("ddb0"),function(){return a.e("chunk-126f160e").then(a.bind(null,"bb51"))}),b={path:"/home",name:"Home",component:d,meta:{requiresAuth:!0}},p=b,f={class:"wrapper"},m={class:"main"},h=Object(n["h"])(" Aguarde.... ");function j(e,t,a,r,o,s){var i=Object(n["A"])("Header");return Object(n["s"])(),Object(n["e"])(n["b"],null,{default:Object(n["I"])((function(){return[Object(n["i"])("div",f,[Object(n["i"])("div",m,[Object(n["i"])(i)])])]})),fallback:Object(n["I"])((function(){return[h]})),_:1})}var O={id:"page-top"},g={id:"wrapper"},v={class:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},y=Object(n["i"])("div",{class:"sidebar-brand-icon rotate-n-15"},[Object(n["i"])("i",{class:"fas fa-laugh-wink"})],-1),w=Object(n["i"])("div",{class:"sidebar-brand-text mx-3"},[Object(n["h"])("MANY "),Object(n["i"])("sup",null,"2")],-1),k=Object(n["i"])("hr",{class:"sidebar-divider my-0"},null,-1),x={class:"nav-item"},A=Object(n["i"])("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),M=Object(n["i"])("span",null,"Dashboard",-1),C=Object(n["i"])("hr",{class:"sidebar-divider"},null,-1),S=Object(n["i"])("div",{class:"sidebar-heading"},"Interface",-1),E={class:"nav-item"},q=Object(n["i"])("i",{class:"fas fa-fw fa-cog"},null,-1),_=Object(n["i"])("span",null,"Usuarios",-1),T=Object(n["g"])('<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar"><div class="bg-white py-2 collapse-inner rounded"><h6 class="collapse-header">Custom Components:</h6><a class="collapse-item" href="buttons.html">Buttons</a><a class="collapse-item" href="cards.html">Cards</a></div></div>',1),I={class:"nav-item"},P=Object(n["i"])("i",{class:"fas fa-fw fa-wrench"},null,-1),U=Object(n["i"])("span",null,"Taréfas",-1),B=Object(n["g"])('<div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar"><div class="bg-white py-2 collapse-inner rounded"><h6 class="collapse-header">Custom Utilities:</h6><a class="collapse-item" href="utilities-color.html">Colors</a><a class="collapse-item" href="utilities-border.html">Borders</a><a class="collapse-item" href="utilities-animation.html">Animations</a><a class="collapse-item" href="utilities-other.html">Other</a></div></div>',1),L={id:"content-wrapper",class:"d-flex flex-column"},R={id:"content"},V={class:"\r\n              navbar navbar-expand navbar-light\r\n              bg-white\r\n              topbar\r\n              mb-4\r\n              static-top\r\n              shadow\r\n            "},N=Object(n["i"])("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3"},[Object(n["i"])("i",{class:"fa fa-bars"})],-1),F={class:"navbar-nav ml-auto"},J=Object(n["i"])("li",{class:"nav-item dropdown no-arrow d-sm-none"},[Object(n["i"])("a",{class:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[Object(n["i"])("i",{class:"fas fa-search fa-fw"})]),Object(n["i"])("div",{class:"\r\n                    dropdown-menu dropdown-menu-right\r\n                    p-3\r\n                    shadow\r\n                    animated--grow-in\r\n                  ","aria-labelledby":"searchDropdown"},[Object(n["i"])("form",{class:"form-inline mr-auto w-100 navbar-search"},[Object(n["i"])("div",{class:"input-group"},[Object(n["i"])("input",{type:"text",class:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),Object(n["i"])("div",{class:"input-group-append"},[Object(n["i"])("button",{class:"btn btn-primary",type:"button"},[Object(n["i"])("i",{class:"fas fa-search fa-sm"})])])])])])],-1),H={class:"nav-item dropdown no-arrow mt-2"},z={class:"mr-2 d-lg-inline text-gray-600 small"},G={class:"container-fluid"},K=Object(n["i"])("footer",{class:"sticky-footer bg-white"},[Object(n["i"])("div",{class:"container my-auto"},[Object(n["i"])("div",{class:"copyright text-center my-auto"},[Object(n["i"])("span",null,"Copyright © Your Website 2020")])])],-1),D=Object(n["i"])("a",{class:"scroll-to-top rounded",href:"#page-top"},[Object(n["i"])("i",{class:"fas fa-angle-up"})],-1),Q=Object(n["i"])("div",{class:"modal fade",id:"logoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[Object(n["i"])("div",{class:"modal-dialog",role:"document"},[Object(n["i"])("div",{class:"modal-content"},[Object(n["i"])("div",{class:"modal-header"},[Object(n["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Ready to Leave?"),Object(n["i"])("button",{class:"close",type:"button","data-dismiss":"modal","aria-label":"Close"},[Object(n["i"])("span",{"aria-hidden":"true"},"×")])]),Object(n["i"])("div",{class:"modal-body"},' Select "Logout" below if you are ready to end your current session. '),Object(n["i"])("div",{class:"modal-footer"},[Object(n["i"])("button",{class:"btn btn-secondary",type:"button","data-dismiss":"modal"}," Cancel "),Object(n["i"])("a",{class:"btn btn-primary",href:"login.html"},"Logout")])])])],-1);function Z(e,t,a,r,o,s){var i=Object(n["A"])("router-link"),c=Object(n["A"])("router-view");return Object(n["s"])(),Object(n["e"])("div",O,[Object(n["i"])("div",g,[Object(n["i"])("ul",v,[Object(n["i"])(i,{class:"sidebar-brand d-flex align-items-center justify-content-center",to:"home"},{default:Object(n["I"])((function(){return[y,w]})),_:1}),k,Object(n["i"])("li",x,[Object(n["i"])(i,{class:"nav-link",to:"/home"},{default:Object(n["I"])((function(){return[A,M]})),_:1})]),C,S,Object(n["i"])("li",E,[Object(n["i"])(i,{class:"nav-link collapsed",to:"/usuarios","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"},{default:Object(n["I"])((function(){return[q,_]})),_:1}),T]),Object(n["i"])("li",I,[Object(n["i"])(i,{class:"nav-link collapsed",to:"/tarefas","data-toggle":"collapse","data-target":"#collapseUtilities","aria-expanded":"true","aria-controls":"collapseUtilities"},{default:Object(n["I"])((function(){return[P,U]})),_:1}),B])]),Object(n["i"])("div",L,[Object(n["i"])("div",R,[Object(n["i"])("nav",V,[N,Object(n["i"])("ul",F,[J,Object(n["i"])("li",H,[Object(n["i"])("span",z,"Olá "+Object(n["C"])(r.userName),1),Object(n["i"])("button",{class:"btn",onClick:t[1]||(t[1]=function(e){return r.resetar()})},"Alterar senha"),Object(n["i"])("button",{class:"btn",onClick:t[2]||(t[2]=function(e){return r.sair()})},"Sair")])])]),Object(n["i"])("div",G,[Object(n["i"])(c)])]),K])]),D,Q])}var W=a("3d20"),Y=a.n(W),X={setup:function(){var e="Usuário",t=u["a"].auth();t&&(e=t.currentUser.email);var a=Object(l["e"])(),n=function(){u["a"].auth().signOut().then((function(){a.push("/login")})).catch((function(e){console.log("erro",e)}))},r=function(){Y.a.fire({icon:"warning",title:"Atenção",text:"Digite o email para redefinição de senha",input:"email",confirmButtonText:"Enviar",showCancelButton:!0,cancelButtonText:"Fechar"}).then((function(e){e.isConfirmed&&u["a"].auth().sendPasswordResetEmail(e.value).then((function(){Y.a.fire({icon:"success",title:"Sucesso",text:'Um e-mail com o link para redefinição de senha foi enviado para: "'.concat(e.value),confirmButtonText:"Fechar"})})).catch((function(e){console.log("erro",e)}))}))};return{sair:n,resetar:r,userName:e}}};X.render=Z;var $=X,ee={components:{Header:$}};ee.render=j;var te=ee,ae=function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))},ne={path:"/about",name:"about",component:ae},re=ne,oe=function(){return Promise.all([a.e("chunk-07b6038f"),a.e("chunk-11b1200a")]).then(a.bind(null,"9f41"))},se=function(){return Promise.all([a.e("chunk-07b6038f"),a.e("chunk-622912d0")]).then(a.bind(null,"0a26"))},ie={path:"tarefa",name:"Tarefa",component:l["a"],children:[{path:"/tarefas",name:"Tarefas",component:oe,meta:{requiresAuth:!0}},{path:"/tarefa/novo",name:"Novo cadastro de tarefa",component:se,meta:{requiresAuth:!0}},{path:"/tarefa/visualizar/:tarefaId/:visualizar",name:"Visualizar cadastro de tarefa",component:se,meta:{requiresAuth:!0}},{path:"/tarefa/editar/:tarefaId",name:"Editar cadastro de tarefa",component:se,meta:{requiresAuth:!0}}]},ce=ie,le=function(){return Promise.all([a.e("chunk-07b6038f"),a.e("chunk-11c2abcb")]).then(a.bind(null,"a9d7"))},ue=function(){return a.e("chunk-27facaae").then(a.bind(null,"2c5d"))},de={path:"usuario",name:"Usuario",component:l["a"],children:[{path:"/usuarios",name:"Usuario",component:le,meta:{requiresAuth:!0}},{path:"/usuario/editar/:usuarioId",name:"Editar cadastro de usuario",component:ue,meta:{requiresAuth:!0}},{path:"/usuario/novo",name:"Novo cadastro de usuario",component:ue,meta:{requiresAuth:!0}},{path:"/usuario/visualizar/:usuarioId/:visualizar",name:"Visualizar cadastro de usuario",component:ue,meta:{requiresAuth:!0}}]},be=de,pe=Object(n["L"])("data-v-c7a0b722");Object(n["v"])("data-v-c7a0b722");var fe={class:"bg-gradient-primary"},me={class:"container"},he={class:"row justify-content-center"},je={class:"col-xl-10 col-lg-12 col-md-9"},Oe={class:"card o-hidden border-0 shadow-lg my-5"},ge={class:"card-body p-0"},ve={class:"row"},ye=Object(n["i"])("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1),we={class:"col-lg-6"},ke={class:"p-5"},xe=Object(n["i"])("div",{class:"text-center"},[Object(n["i"])("h1",{class:"h4 text-gray-900 mb-4"}," Bem-vindo ao many gerenciador de tarefas ")],-1),Ae={class:"form-group"},Me={class:"form-group input-group "},Ce=Object(n["i"])("i",{class:"fas fa-eye"},null,-1),Se=Object(n["i"])("div",{class:"form-group"},null,-1),Ee=Object(n["i"])("button",{type:"submit",class:"btn btn-primary btn-user btn-block"}," Login ",-1),qe=Object(n["i"])("hr",null,null,-1),_e={key:0,class:"alert alert-warning",role:"alert"},Te={class:"text-center"},Ie={key:0,class:"alert alert-danger",role:"alert"},Pe={key:1,class:"alert alert-success",role:"alert"};Object(n["t"])();var Ue=pe((function(e,t,a,r,o,s){return Object(n["s"])(),Object(n["e"])("div",fe,[Object(n["i"])("div",me,[Object(n["i"])("div",he,[Object(n["i"])("div",je,[Object(n["i"])("div",Oe,[Object(n["i"])("div",ge,[Object(n["i"])("div",ve,[ye,Object(n["i"])("div",we,[Object(n["i"])("div",ke,[xe,Object(n["i"])("form",{class:"user",onSubmit:t[4]||(t[4]=Object(n["K"])((function(){return r.loginRequest&&r.loginRequest.apply(r,arguments)}),["prevent"])),id:"login-form"},[Object(n["i"])("div",Ae,[Object(n["J"])(Object(n["i"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.ViewModel.email=e}),id:"email",class:"form-control form-control-user","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",required:""},null,512),[[n["G"],r.ViewModel.email]])]),Object(n["i"])("div",Me,[Object(n["J"])(Object(n["i"])("input",{type:"password",class:"form-control form-control-user",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.ViewModel.password=e}),id:"password",required:""},null,512),[[n["G"],r.ViewModel.password]]),Object(n["i"])("span",{onClick:t[3]||(t[3]=function(){return r.mostrarSenha&&r.mostrarSenha.apply(r,arguments)}),style:{"border-radius":"0px 50% 50% 0px"},class:"input-group-text"},[Ce])]),Se,Ee,qe,r.mensage?(Object(n["s"])(),Object(n["e"])("div",_e,Object(n["C"])(r.mensage),1)):Object(n["f"])("",!0)],32),Object(n["i"])("div",Te,[Object(n["i"])("button",{class:"small btn",onClick:t[5]||(t[5]=function(e){return r.resetar()})}," Esqueci a senha ")])])])])])])])]),""!==o.errorMessage?(Object(n["s"])(),Object(n["e"])("div",Ie,Object(n["C"])(o.errorMessage),1)):Object(n["f"])("",!0),""!==o.successMessage?(Object(n["s"])(),Object(n["e"])("div",Pe,Object(n["C"])(o.successMessage),1)):Object(n["f"])("",!0)])])})),Be={name:"Login",data:function(){return{email:"",password:"",xhrRequest:!1,errorMessage:"",successMessage:"",continuarConectado:!1}},setup:function(){var e=Object(l["e"])(),t=Object(n["x"])(""),a=Object(n["x"])({email:"",password:"",continuarConectado:Object(n["x"])(!1)}),r=function(){t.value="",u["a"].auth().signInWithEmailAndPassword(a.value.email,a.value.password).then((function(){e.push("/home")}),(function(e){console.log("erro",e.message),t.value=e.message}))},o=function(){var e=document.getElementById("password");"password"==e.getAttribute("type")?e.setAttribute("type","text"):e.setAttribute("type","password")},s=function(){Y.a.fire({icon:"warning",title:"Atenção",text:"Digite o email para redefinição de senha",input:"email",confirmButtonText:"Enviar",showCancelButton:!0,cancelButtonText:"Fechar"}).then((function(e){e.isConfirmed&&u["a"].auth().sendPasswordResetEmail(e.value).then((function(){Y.a.fire({icon:"success",title:"Sucesso",text:'Um e-mail com o link para redefinição de senha foi enviado para: "'.concat(e.value),confirmButtonText:"Fechar"})})).catch((function(e){console.log("erro",e)}))}))};return{ViewModel:a,loginRequest:r,resetar:s,mensage:t,mostrarSenha:o}},methods:{}};a("5d3e");Be.render=Ue,Be.__scopeId="data-v-c7a0b722";var Le=Be,Re=a("6d5d"),Ve=function(){return Promise.resolve().then(a.bind(null,"6d5d"))},Ne={path:"login",name:"Login",component:l["a"],children:[{path:"/Signup",name:"Signup",component:Ve}]},Fe=Ne,Je=[{path:"/app",name:"Main",component:te,children:[p,re,ce,be,Fe]},{path:"/",name:"/",component:Le},{path:"/login",name:"Login",component:Le},{path:"/signup",name:"signup",component:Re["default"]}],He=Object(l["b"])({history:Object(l["c"])("/gerenciador-de-tarefas-anuncio/"),routes:Je});He.beforeEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].auth().currentUser;case 2:r=e.sent,o=t.matched.some((function(e){return e.meta.requiresAuth})),o&&!r?n("login"):n();case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}());var ze=He,Ge=a("5502"),Ke=Object(Ge["a"])({state:{},mutations:{},actions:{},modules:{}}),De=a("716b"),Qe=a.n(De),Ze=(a("08c4"),{apiKey:"AIzaSyBUiO8kBAKyIGih5pdvCt2GghHoBZZn0NQ",authDomain:"login-10-15442.firebaseapp.com",projectId:"login-10-15442",storageBucket:"login-10-15442.appspot.com",messagingSenderId:"288116247350",appId:"1:288116247350:web:07af8ebc36c7039427c197"});u["a"].initializeApp(Ze),Object(n["d"])(s).use(Ke).use(ze).use(Qe.a,{precision:4}).mount("#app")},"5d3e":function(e,t,a){"use strict";a("cb97")},"6d5d":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r=Object(n["L"])("data-v-1116961a");Object(n["v"])("data-v-1116961a");var o={class:"bg-gradient-primary"},s={class:"container"},i={class:"row justify-content-center"},c={class:"col-xl-10 col-lg-12 col-md-9"},l={class:"card o-hidden border-0 shadow-lg my-5"},u={class:"card-body p-0"},d={class:"row"},b=Object(n["i"])("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1),p={class:"col-lg-6"},f={class:"p-5"},m=Object(n["i"])("div",{class:"text-center"},[Object(n["i"])("h1",{class:"h4 text-gray-900 mb-4"},"Registre-se"),Object(n["i"])("label",{class:"text-center"},"Many gerenciador de tarefas ")],-1),h={class:"form-group"},j={class:"form-group input-group"},O=Object(n["i"])("i",{class:"fas fa-eye"},null,-1),g={class:"form-group input-group"},v=Object(n["i"])("i",{class:"fas fa-eye"},null,-1),y=Object(n["i"])("div",{class:"form-group"},[Object(n["i"])("input",{type:"checkbox",required:""}),Object(n["i"])("label",{for:""}," Eu li e concordo com os termos de uso")],-1),w={type:"submit",class:"btn btn-primary btn-user btn-block"},k={key:0},x={key:1},A={key:2,class:"spinner-border text-secondary _loader",role:"status"},M=Object(n["i"])("span",{class:"sr-only"},"Loading...",-1),C=Object(n["i"])("hr",null,null,-1),S={key:0,class:"alert alert-danger",role:"alert"},E={key:1,class:"alert alert-success",role:"alert"},q={class:"col-sm-12 text-center form-group mt-5"},_=Object(n["h"])("termos de uso"),T=Object(n["h"])(" Já tem uma conta? "),I=Object(n["h"])("Login"),P=Object(n["i"])("link",{rel:"stylesheet",href:"https://sibforms.com/forms/end-form/build/sib-styles.css"},null,-1),U={id:"sib-form",method:"POST",action:"https://4a2812f0.sibforms.com/serve/MUIEACHjkG8kJfj0JwlzvhorLw8FL1xwhurRS-n3FCAfMjPjsb-btMq7mhrCOqyP4K9SttYUrric0QjPMyPZSlE5FI5CMVyFPyfavte3Q7dHQPkLnxTnZkgEseZdWTUTlTMKzMaGTH_Kb0eU8E3QdlsQUHuibElJwCK0FQ1ZgEXEZiEwS30ZkrseTf0amOgq51Ee-SNQsKEvxR9d"},B={style:{padding:"8px 0"}},L={class:"sib-input sib-form-block"},R={class:"form__entry entry_block"},V={class:"form__label-row"},N={class:"entry__field"},F=Object(n["i"])("label",{class:"entry__error entry__error--primary",style:{"font-size":"16px","text-align":"left","font-family":"'Helvetica', sans-serif",color:"#661d1d","background-color":"#ffeded","border-radius":"3px","border-color":"#ff4949"}},null,-1),J=Object(n["i"])("input",{type:"text",name:"email_address_check",value:"",class:"input--hidden"},null,-1),H=Object(n["i"])("input",{type:"hidden",name:"locale",value:"pt"},null,-1),z=Object(n["i"])("input",{type:"hidden",name:"html_type",value:"simple"},null,-1);Object(n["t"])();var G=r((function(e,t,a,G,K,D){var Q=Object(n["A"])("router-link");return Object(n["s"])(),Object(n["e"])("div",o,[Object(n["i"])("div",s,[Object(n["i"])("div",i,[Object(n["i"])("div",c,[Object(n["i"])("div",l,[Object(n["i"])("div",u,[Object(n["i"])("div",d,[b,Object(n["i"])("div",p,[Object(n["i"])("div",f,[m,Object(n["i"])("form",{class:"user",onSubmit:t[6]||(t[6]=Object(n["K"])((function(){return G.signup&&G.signup.apply(G,arguments)}),["prevent"])),id:"login-form"},[Object(n["i"])("div",h,[Object(n["J"])(Object(n["i"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return G.ViewModel.email=e}),id:"email",class:"form-control form-control-user","aria-describedby":"emailHelp",placeholder:"E-mail",required:""},null,512),[[n["G"],G.ViewModel.email]])]),Object(n["i"])("div",j,[Object(n["J"])(Object(n["i"])("input",{type:"password",class:"form-control form-control-user",placeholder:"Senha","onUpdate:modelValue":t[2]||(t[2]=function(e){return G.ViewModel.password=e}),id:"password",required:""},null,512),[[n["G"],G.ViewModel.password]]),Object(n["i"])("span",{onClick:t[3]||(t[3]=function(){return G.mostrarSenha&&G.mostrarSenha.apply(G,arguments)}),style:{"border-radius":"0px 50% 50% 0px"},class:"input-group-text"},[O])]),Object(n["i"])("div",g,[Object(n["J"])(Object(n["i"])("input",{type:"password",class:"form-control form-control-user",placeholder:"Confirmação de senha","onUpdate:modelValue":t[4]||(t[4]=function(e){return G.ViewModel.passwordConfirmation=e}),id:"ConfirmPassword",required:""},null,512),[[n["G"],G.ViewModel.passwordConfirmation]]),Object(n["i"])("span",{onClick:t[5]||(t[5]=function(){return G.mostrarSenha&&G.mostrarSenha.apply(G,arguments)}),style:{"border-radius":"0px 50% 50% 0px"},class:"input-group-text"},[v])]),y,Object(n["i"])("button",w,[G.xhrRequest?Object(n["f"])("",!0):(Object(n["s"])(),Object(n["e"])("span",k,"Registrar")),G.xhrRequest?(Object(n["s"])(),Object(n["e"])("span",x,"Aguarde...")):Object(n["f"])("",!0),G.xhrRequest?(Object(n["s"])(),Object(n["e"])("div",A,[M])):Object(n["f"])("",!0)]),C],32),""!==G.errorMessage?(Object(n["s"])(),Object(n["e"])("div",S,Object(n["C"])(G.errorMessage),1)):Object(n["f"])("",!0),""!==G.successMessage?(Object(n["s"])(),Object(n["e"])("div",E,Object(n["C"])(G.successMessage),1)):Object(n["f"])("",!0),Object(n["i"])("div",q,[Object(n["i"])("p",null,[Object(n["i"])(Q,{to:"/termosDeUso"},{default:r((function(){return[_]})),_:1})]),Object(n["i"])("p",null,[T,Object(n["i"])(Q,{to:"/login"},{default:r((function(){return[I]})),_:1})])])])])])])])])])]),P,Object(n["i"])("form",U,[Object(n["i"])("div",B,[Object(n["i"])("div",L,[Object(n["i"])("div",R,[Object(n["i"])("div",V,[Object(n["i"])("div",N,[Object(n["J"])(Object(n["i"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return G.ViewModel.email=e}),class:"input d-none",type:"text",id:"EMAIL",name:"EMAIL",autocomplete:"off",placeholder:"EMAIL","data-required":"true",required:""},null,512),[[n["G"],G.ViewModel.email]])])]),F])])]),J,H,z])])})),K=a("2591"),D=a("3d20"),Q=a.n(D),Z=a("6c02"),W={name:"Signup",setup:function(){var e=Object(Z["e"])(),t=Object(n["x"])({email:"",password:"",passwordConfirmation:""}),a=Object(n["x"])(""),r=Object(n["x"])(""),o=Object(n["x"])(!1),s=function(e){console.log(e)},i=function(){t.value.password!=t.value.passwordConfirmation?(a.value="As senhas não conferem",console.log("As senhas não conferem")):t.value.password.length<6?(a.value="A senha deve ter no minimo 6 caracteres",console.log("A senha deve ter no minimo 6 caracteres")):(o.value=!0,K["a"].auth().createUserWithEmailAndPassword(t.value.email,t.value.password).then((function(){o.value=!1;var a=document.getElementById("sib-form");a.submit(),alert("travar"),Q.a.fire({icon:"success",title:"Sucesso",text:'O e-mail "'.concat(t.value.email,'" foi cadastre-se com sucesso'),confirmButtonText:"Entrar"}).then((function(){K["a"].auth().signInWithEmailAndPassword(t.value.email,t.value.password).then((function(t){e.push("/curso/sitedo0"),console.log("resp",t.user.refreshToken),localStorage.setItem(t.user.refreshToken)}),(function(e){console.log("erro",e.message)}))})),console.log("Register Successfully")}),(function(e){Q.a.fire({icon:"warning",title:"Atenção",text:"".concat(e.message),confirmButtonText:"Fechar"}),console.log("erro",e.message)})))},c=function(){var e=document.getElementById("password"),t=document.getElementById("ConfirmPassword");"password"==e.getAttribute("type")?(e.setAttribute("type","text"),t.setAttribute("type","text")):(e.setAttribute("type","password"),t.setAttribute("type","password"))};return{ViewModel:t,signup:i,errorMessage:a,successMessage:r,xhrRequest:o,teste:s,mostrarSenha:c}},methods:{signupRequest:function(){var e=this;e.xhrRequest=!0,e.errorMessage="",e.successMessage="",K["a"].auth().createUserWithEmailAndPassword(e.email,e.password).then((function(){e.successMessage="Register Successfully.",e.xhrRequest=!1}),(function(t){var a=JSON.parse(t.message);e.errorMessage=a.error.message,e.xhrRequest=!1}))}}};a("75c0");W.render=G,W.__scopeId="data-v-1116961a";t["default"]=W},"75bb":function(e,t,a){"use strict";a("28cc")},"75c0":function(e,t,a){"use strict";a("4590")},cb97:function(e,t,a){}});
//# sourceMappingURL=app.3cccf6b8.js.map