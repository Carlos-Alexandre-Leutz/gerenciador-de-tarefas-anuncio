(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42cdd1c6"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}},"4f7a":function(t,e,r){"use strict";var n=r("1da1");r("96cf");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}var u=r("2591"),c=r("6c02"),s=function(){function t(){o(this,t)}return i(t,[{key:"inserir",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(c["e"])(),console.log("url da requiziçao",r),t.prev=2,t.next=5,u["a"].database().ref(r).push(e);case 5:return o=t.sent,t.abrupt("return",o);case 9:if(t.prev=9,t.t0=t["catch"](2),console.error(t.t0),"Permission denied"!=t.t0.message){t.next=16;break}n.push("/login"),t.next=17;break;case 16:return t.abrupt("return","error");case 17:case"end":return t.stop()}}),t,null,[[2,9]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"editar",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(c["e"])(),console.log("url da requiziçao",r),t.prev=2,t.next=5,u["a"].database().ref(r).update(e);case 5:return o=t.sent,t.abrupt("return",o);case 9:if(t.prev=9,t.t0=t["catch"](2),console.error(t.t0),"Permission denied"!=t.t0.message){t.next=16;break}n.push("/login"),t.next=17;break;case 16:return t.abrupt("return","error");case 17:case"end":return t.stop()}}),t,null,[[2,9]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"remover",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(c["e"])(),console.log("url da requiziçao",r),t.prev=2,t.next=5,u["a"].database().ref(r).delete();case 5:return o=t.sent,t.abrupt("return",o);case 9:if(t.prev=9,t.t0=t["catch"](2),console.error(t.t0),"Permission denied"!=t.t0.message){t.next=16;break}n.push("/login"),t.next=17;break;case 16:return t.abrupt("return","error");case 17:case"end":return t.stop()}}),t,null,[[2,9]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(c["e"])(),console.log("url da requiziçao",e),t.prev=2,n=u["a"].database().ref(),t.next=6,n.child(e).get();case 6:return o=t.sent,t.abrupt("return",o);case 10:if(t.prev=10,t.t0=t["catch"](2),console.error(t.t0),"Permission denied"!=t.t0.message){t.next=17;break}r.push("/login"),t.next=18;break;case 17:return t.abrupt("return","error");case 18:case"end":return t.stop()}}),t,null,[[2,10]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),f=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new s,t.abrupt("return",r.get(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new s,t.abrupt("return",n.getId(e,r));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new s,t.abrupt("return",n.inserir(r,e));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new s,t.abrupt("return",n.editar(r,e));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r,n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=new s,t.abrupt("return",o.editarId(e,r,n));case 2:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new s,t.abrupt("return",n.remover(e,r));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),y={add:h,edit:p,remove:d,get:f,getPorId:l,editId:v};e["a"]=y},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=j(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(G([])));x&&x!==r&&n.call(x,a)&&(w=x);var k=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,u){var c=f(t[o],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function j(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return N()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var u=E(i,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function G(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=k.constructor=m,m.constructor=g,g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(k),c(k,u,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-42cdd1c6.e6b38556.js.map