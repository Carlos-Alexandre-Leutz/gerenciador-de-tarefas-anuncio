(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f37c8b6c"],{"399d":function(e,t,a){},"4ce2":function(e,t,a){"use strict";a("399d")},"9f41":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c={class:"d-flex flex-column col-12 m-auto"},i={class:"col-2"},l=Object(n["h"])("Adicionar "),r={class:"card shadow"},s=Object(n["i"])("div",{class:"card-header"},"Tarefas",-1),o={class:"card-body"},b=Object(n["i"])("div",{class:"\r\n                    d-flex\r\n                    flex-center\r\n                    justify-content-center\r\n                    align-items-center\r\n                  "}," Ações ",-1),u=Object(n["i"])("div",{class:"\r\n                    d-flex\r\n                    flex-center\r\n                    justify-content-center\r\n                    align-items-center\r\n                  "},[Object(n["i"])("button",{"data-edit":"2",class:"btn btn-sm btn-primary",title:"Visualizar"},[Object(n["i"])("i",{"data-edit":"2",class:"fas fa-eye"})]),Object(n["i"])("button",{title:"Editar","data-edit":"1",class:"btn btn-sm btn-warning"},[Object(n["i"])("i",{"data-edit":"1",class:"fas fa-edit"})]),Object(n["i"])("button",{title:"Excluir","data-edit":"0",class:"btn btn-sm btn-danger"},[Object(n["i"])("i",{"data-edit":"0",class:"fas fa-trash-alt"})])],-1),d=Object(n["h"])(" caregando tabela ");function O(e,t,a,O,j,f){var m=Object(n["A"])("router-link"),p=Object(n["A"])("Table");return Object(n["s"])(),Object(n["e"])("div",c,[Object(n["i"])("div",i,[Object(n["i"])(m,{title:"Adicionar nova tarefa ",class:"ml-auto m-1 btn btn-sm btn-primary",to:"/tarefa/novo"},{default:Object(n["I"])((function(){return[l]})),_:1})]),Object(n["i"])("div",r,[s,Object(n["i"])("div",o,[(Object(n["s"])(),Object(n["e"])(n["b"],null,{default:Object(n["I"])((function(){return[Object(n["i"])(p,{class:"table-borderless table-striped",headerColumns:O.hColumns,items:O.items,action:"true",onOnActionClick:O.onEdit},{"table-header-actions":Object(n["I"])((function(){return[b]})),"table-actions":Object(n["I"])((function(){return[u]})),_:1},8,["headerColumns","items","onOnActionClick"])]})),fallback:Object(n["I"])((function(){return[d]})),_:1}))])])])}var j=a("1da1"),f=a("3835"),m=(a("96cf"),a("4fad"),a("e91f")),p=a("6c02"),v=a("3d20"),h=a.n(v),y=a("4f7a"),g={setup:function(){var e=Object(p["e"])(),t=Object(n["x"])(null),a=Object(n["x"])(null),c=Object(n["x"])(null),i=Object(n["x"])([{key:"value",label:"Tarefa",display:"display-table"},{key:"lablAtribuidaPara",label:"Atribuida para",display:"display-table"},{key:"cliente",label:"Cliente"},{key:"deadline",label:"Deadline?",display:"display-table"},{key:"concluida",label:"Finalizada?"}]),l=function(t){if(t&&t.target&&t.target.dataset){if(1==t.target.dataset.edit&&(console.log("Editar",t.item.id),e.push("/tarefa/editar/"+t.item.id)),2==t.target.dataset.edit&&e.push("/tarefa/visualizar/"+t.item.id+"/visualizar"),0==t.target.dataset.edit){console.log("itemSelected",a);var n=t.item.value;h.a.fire({icon:"question",title:"Você não tem permição para excluir",confirmButtonText:"Ok",text:'O taréfa "'.concat(n,'"')})}}else console.log("Objeto Errado")},r=[];return y["a"].get("tarefa").then((function(e){if(e.exists()){for(var a=e.val(),n=0,c=Object.entries(a);n<c.length;n++){var i=Object(f["a"])(c[n],2),l=i[0],s=i[1];console.log(s);var o={id:s.id||l,lablAtribuidaPara:s.lablAtribuidaPara,value:s.value,concluida:s.concluida?"Sim":"Não",deadline:s.deadline,cliente:s.cliente};r.push(o)}r.reverse(),t.value=r}else console.log("No data available")})).catch((function(e){console.error(e)})),Object(n["q"])(Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),{items:t,componentePaginacao:c,hColumns:i,onEdit:l}},components:{Table:m["a"]}};a("4ce2");g.render=O;t["default"]=g},e91f:function(e,t,a){"use strict";var n=a("7a23"),c={class:"table-responsive"},i={class:"table"},l={key:0,id:"tableHeaderActions"};function r(e,t,a,r,s,o){return Object(n["s"])(),Object(n["e"])("div",c,[Object(n["i"])("table",i,[Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.hColumns,(function(e,t){return Object(n["s"])(),Object(n["e"])("th",{scope:"col",key:t,class:e.display},[Object(n["i"])("div",null,Object(n["C"])(e.label),1)],2)})),128)),r.lAction?(Object(n["s"])(),Object(n["e"])("th",l,[Object(n["z"])(e.$slots,"table-header-actions")])):Object(n["f"])("",!0)])]),Object(n["i"])("tbody",null,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.items,(function(t,a){return Object(n["s"])(),Object(n["e"])("tr",{scope:"row",key:a},[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.getColumns(t),(function(e,t){return Object(n["s"])(),Object(n["e"])("td",{key:t,class:r.getClass(t)},Object(n["C"])(e),3)})),128)),r.lAction?(Object(n["s"])(),Object(n["e"])("td",{key:0,id:"tableAction"+a,"data-item":t,onClick:function(e){return r.onActionClick(e,t)}},[Object(n["z"])(e.$slots,"table-actions")],8,["id","data-item","onClick"])):Object(n["f"])("",!0)])})),128))])])])}var s=a("1da1"),o=(a("96cf"),{props:["headerColumns","items","action"],setup:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function a(){var c,i,l,r,s,o,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.emit,i=Object(n["x"])(e.headerColumns),l=Object(n["x"])(!!e.action&&e.action),a.t0=n["x"],a.next=6,e.items;case 6:return a.t1=a.sent,r=(0,a.t0)(a.t1),s=function(e){for(var t=[],a=0;a<i.value.length;a++){var n=i.value[a].key;t.push(e[n])}return t},o=function(t){return e.headerColumns[t].display},b=function(e,t){e.item=t,c("on-action-click",e)},a.abrupt("return",{lAction:l,hColumns:i,lItems:r,getColumns:s,onActionClick:b,getClass:o});case 12:case"end":return a.stop()}}),a)})))()}});o.render=r;t["a"]=o}}]);
//# sourceMappingURL=chunk-f37c8b6c.79de8471.js.map