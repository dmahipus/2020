parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nGBO":[function(require,module,exports) {
var define;
var e;!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof e&&e.amd?e(r):(t=t||self).barba=r()}(this,function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,r){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&i(o,r.prototype),o}).apply(null,arguments)}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,o(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)})(e)}function u(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,h="2.9.7";!function(e){e[e.off=0]="off",e[e.error=1]="error",e[e.warning=2]="warning",e[e.info=3]="info",e[e.debug=4]="debug"}(c||(c={}));var f=c.off,l=function(){function e(e){this.t=e}e.getLevel=function(){return f},e.setLevel=function(e){return f=c[e]};var t=e.prototype;return t.error=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.error,c.error,t)},t.warn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.warn,c.warning,t)},t.info=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.info,c.info,t)},t.debug=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.i(console.log,c.debug,t)},t.i=function(t,r,n){r<=e.getLevel()&&t.apply(console,["["+this.t+"] "].concat(n))},e}(),p=S,v=P,d=b,m=x,g=A,y="/",w=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function b(e,t){for(var r,n=[],o=0,i=0,s="",a=t&&t.delimiter||y,u=t&&t.whitelist||void 0,c=!1;null!==(r=w.exec(e));){var h=r[0],f=r[1],l=r.index;if(s+=e.slice(i,l),i=l+h.length,f)s+=f[1],c=!0;else{var p="",v=r[2],d=r[3],m=r[4],g=r[5];if(!c&&s.length){var b=s.length-1,P=s[b];(!u||u.indexOf(P)>-1)&&(p=P,s=s.slice(0,b))}s&&(n.push(s),s="",c=!1);var x=d||m,j=p||a;n.push({name:v||o++,prefix:p,delimiter:j,optional:"?"===g||"*"===g,repeat:"+"===g||"*"===g,pattern:x?k(x):"[^"+E(j===a?j:j+a)+"]+?"})}}return(s||i<e.length)&&n.push(s+e.substr(i)),n}function P(e,t){return function(r,n){var o=e.exec(r);if(!o)return!1;for(var i=o[0],s=o.index,a={},u=n&&n.decode||decodeURIComponent,c=1;c<o.length;c++)if(void 0!==o[c]){var h=t[c-1];a[h.name]=h.repeat?o[c].split(h.delimiter).map(function(e){return u(e,h)}):u(o[c],h)}return{path:i,index:s,params:a}}}function x(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(r[n]=new RegExp("^(?:"+e[n].pattern+")$",j(t)));return function(t,n){for(var o="",i=n&&n.encode||encodeURIComponent,s=!n||!1!==n.validate,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var c,h=t?t[u.name]:void 0;if(Array.isArray(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(c=i(h[f],u),s&&!r[a].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===f?u.prefix:u.delimiter)+c}}else if("string"!=typeof h&&"number"!=typeof h&&"boolean"!=typeof h){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"))}else{if(c=i(String(h),u),s&&!r[a].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function E(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function k(e){return e.replace(/([=!:$/()])/g,"\\$1")}function j(e){return e&&e.sensitive?"":"i"}function A(e,t,r){for(var n=(r=r||{}).strict,o=!1!==r.start,i=!1!==r.end,s=r.delimiter||y,a=[].concat(r.endsWith||[]).map(E).concat("$").join("|"),u=o?"^":"",c=0;c<e.length;c++){var h=e[c];if("string"==typeof h)u+=E(h);else{var f=h.repeat?"(?:"+h.pattern+")(?:"+E(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),u+=h.optional?h.prefix?"(?:"+E(h.prefix)+"("+f+"))?":"("+f+")?":E(h.prefix)+"("+f+")"}}if(i)n||(u+="(?:"+E(s)+")?"),u+="$"===a?"$":"(?="+a+")";else{var l=e[e.length-1],p="string"==typeof l?l[l.length-1]===s:void 0===l;n||(u+="(?:"+E(s)+"(?="+a+"))?"),p||(u+="(?="+E(s)+"|"+a+")")}return new RegExp(u,j(r))}function S(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(S(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",j(r))}(e,t,r):function(e,t,r){return A(b(e,r),t,r)}(e,t,r)}p.match=function(e,t){var r=[];return P(S(e,r,t),r)},p.regexpToFunction=v,p.parse=d,p.compile=function(e,t){return x(b(e,t),t)},p.tokensToFunction=m,p.tokensToRegExp=g;var R={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},O=new(function(){function e(){this.o=R,this.u=new DOMParser}var t=e.prototype;return t.toString=function(e){return e.outerHTML},t.toDocument=function(e){return this.u.parseFromString(e,"text/html")},t.toElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t},t.getHtml=function(e){return void 0===e&&(e=document),this.toString(e.documentElement)},t.getWrapper=function(e){return void 0===e&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},t.getContainer=function(e){return void 0===e&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},t.removeContainer=function(e){document.body.contains(e)&&e.parentNode.removeChild(e)},t.addContainer=function(e,t){var r=this.getContainer();r?this.s(e,r):t.appendChild(e)},t.getNamespace=function(e){void 0===e&&(e=document);var t=e.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return t?t.getAttribute(this.o.prefix+"-"+this.o.namespace):null},t.getHref=function(e){if(e.tagName&&"a"===e.tagName.toLowerCase()){if("string"==typeof e.href)return e.href;var t=e.getAttribute("href")||e.getAttribute("xlink:href");if(t)return this.resolveUrl(t.baseVal||t)}return null},t.resolveUrl=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.length;if(0===n)throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(o.href=arguments[0],1===n)return o.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(o,i.firstChild);for(var s,a=document.createElement("a"),u=1;u<n;u++)a.href=arguments[u],o.href=s=a.href;return i.removeChild(o),s},t.s=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},e}()),L=new(function(){function e(){this.h=[],this.v=-1}var n=e.prototype;return n.init=function(e,t){this.l="barba";var r={ns:t,scroll:{x:window.scrollX,y:window.scrollY},url:e};this.h.push(r),this.v=0;var n={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(n,"",e)},n.change=function(e,t,r){if(r&&r.state){var n=r.state,o=n.index;t=this.m(this.v-o),this.replace(n.states),this.v=o}else this.add(e,t);return t},n.add=function(e,t){var r=this.size,n=this.p(t),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:e};this.h.push(o),this.v=r;var i={from:this.l,index:r,states:[].concat(this.h)};switch(n){case"push":window.history&&window.history.pushState(i,"",e);break;case"replace":window.history&&window.history.replaceState(i,"",e)}},n.update=function(e,t){var n=t||this.v,o=r({},this.get(n),{},e);this.set(n,o)},n.remove=function(e){e?this.h.splice(e,1):this.h.pop(),this.v--},n.clear=function(){this.h=[],this.v=-1},n.replace=function(e){this.h=e},n.get=function(e){return this.h[e]},n.set=function(e,t){return this.h[e]=t},n.p=function(e){var t="push",r=e,n=R.prefix+"-"+R.history;return r.hasAttribute&&r.hasAttribute(n)&&(t=r.getAttribute(n)),t},n.m=function(e){return Math.abs(e)>1?e>0?"forward":"back":0===e?"popstate":e>0?"back":"forward"},t(e,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),e}()),T=function(e,t){try{var r=function(){if(!t.next.html)return Promise.resolve(e).then(function(e){var r=t.next;if(e){var n=O.toElement(e);r.namespace=O.getNamespace(n),r.container=O.getContainer(n),r.html=e,L.update({ns:r.namespace});var o=O.toDocument(e);document.title=o.title}})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},q=p,_={__proto__:null,update:T,nextTick:function(){return new Promise(function(e){window.requestAnimationFrame(e)})},pathToRegexp:q},H=function(){return window.location.origin},M=function(e){return void 0===e&&(e=window.location.href),C(e).port},C=function(e){var t,r=e.match(/:\d+/);if(null===r)/^http/.test(e)&&(t=80),/^https/.test(e)&&(t=443);else{var n=r[0].substring(1);t=parseInt(n,10)}var o,i=e.replace(H(),""),s={},a=i.indexOf("#");a>=0&&(o=i.slice(a+1),i=i.slice(0,a));var u=i.indexOf("?");return u>=0&&(s=N(i.slice(u+1)),i=i.slice(0,u)),{hash:o,path:i,port:t,query:s}},N=function(e){return e.split("&").reduce(function(e,t){var r=t.split("=");return e[r[0]]=r[1],e},{})},B=function(e){return void 0===e&&(e=window.location.href),e.replace(/(\/#.*|\/|#.*)$/,"")},I={__proto__:null,getHref:function(){return window.location.href},getOrigin:H,getPort:M,getPath:function(e){return void 0===e&&(e=window.location.href),C(e).path},parse:C,parseQuery:N,clean:B};function D(e,t,r){return void 0===t&&(t=2e3),new Promise(function(n,o){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(200===i.status)n(i.responseText);else if(i.status){var t={status:i.status,statusText:i.statusText};r(e,t),o(t)}},i.ontimeout=function(){var n=new Error("Timeout error ["+t+"]");r(e,n),o(n)},i.onerror=function(){var t=new Error("Fetch error");r(e,t),o(t)},i.open("GET",e),i.timeout=t,i.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),i.setRequestHeader("x-barba","yes"),i.send()})}var U=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then};function $(e,t){return void 0===t&&(t={}),function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=!1;return new Promise(function(r,o){t.async=function(){return i=!0,function(e,t){e?o(e):r(t)}};var s=e.apply(t,n);i||(U(s)?s.then(r,o):r(s))})}}var F=new(function(e){function t(){var t;return(t=e.call(this)||this).logger=new l("@barba/core"),t.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],t.registered=new Map,t.init(),t}n(t,e);var r=t.prototype;return r.init=function(){var e=this;this.registered.clear(),this.all.forEach(function(t){e[t]||(e[t]=function(r,n){e.registered.has(t)||e.registered.set(t,new Set),e.registered.get(t).add({ctx:n||{},fn:r})})})},r.do=function(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if(this.registered.has(e)){var i=Promise.resolve();return this.registered.get(e).forEach(function(e){i=i.then(function(){return $(e.fn,e.ctx).apply(void 0,n)})}),i.catch(function(r){t.logger.debug("Hook error ["+e+"]"),t.logger.error(r)})}return Promise.resolve()},r.clear=function(){var e=this;this.all.forEach(function(t){delete e[t]}),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var e=[];this.registered.forEach(function(t,r){return e.push(r)}),this.logger.info("Registered hooks: "+e.join(","))},t}(function(){})),W=function(){function e(e){if(this.P=[],"boolean"==typeof e)this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(e){return q(e)})}}return e.prototype.checkHref=function(e){if("boolean"==typeof this.g)return this.g;var t=C(e).path;return this.P.some(function(e){return null!==e.exec(t)})},e}(),K=function(e){function t(t){var r;return(r=e.call(this,t)||this).k=new Map,r}n(t,e);var o=t.prototype;return o.set=function(e,t,r){return this.k.set(e,{action:r,request:t}),{action:r,request:t}},o.get=function(e){return this.k.get(e)},o.getRequest=function(e){return this.k.get(e).request},o.getAction=function(e){return this.k.get(e).action},o.has=function(e){return!this.checkHref(e)&&this.k.has(e)},o.delete=function(e){return this.k.delete(e)},o.update=function(e,t){var n=r({},this.k.get(e),{},t);return this.k.set(e,n),n},t}(W),X=function(){return!window.history.pushState},z=function(e){return!e.el||!e.href},Y=function(e){var t=e.event;return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey},G=function(e){var t=e.el;return t.hasAttribute("target")&&"_blank"===t.target},Q=function(e){var t=e.el;return void 0!==t.protocol&&window.location.protocol!==t.protocol||void 0!==t.hostname&&window.location.hostname!==t.hostname},V=function(e){var t=e.el;return void 0!==t.port&&M()!==M(t.href)},J=function(e){var t=e.el;return t.getAttribute&&"string"==typeof t.getAttribute("download")},Z=function(e){return e.el.hasAttribute(R.prefix+"-"+R.prevent)},ee=function(e){return Boolean(e.el.closest("["+R.prefix+"-"+R.prevent+'="all"]'))},te=function(e){var t=e.href;return B(t)===B()&&M(t)===M()},re=function(e){function t(t){var r;return(r=e.call(this,t)||this).suite=[],r.tests=new Map,r.init(),r}n(t,e);var r=t.prototype;return r.init=function(){this.add("pushState",X),this.add("exists",z),this.add("newTab",Y),this.add("blank",G),this.add("corsDomain",Q),this.add("corsPort",V),this.add("download",J),this.add("preventSelf",Z),this.add("preventAll",ee),this.add("sameUrl",te,!1)},r.add=function(e,t,r){void 0===r&&(r=!0),this.tests.set(e,t),r&&this.suite.push(e)},r.run=function(e,t,r,n){return this.tests.get(e)({el:t,event:r,href:n})},r.checkLink=function(e,t,r){var n=this;return this.suite.some(function(o){return n.run(o,e,t,r)})},t}(W),ne=function(e){function t(r,n){var o;void 0===n&&(n="Barba error");for(var i=arguments.length,s=new Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=arguments[a];return(o=e.call.apply(e,[this].concat(s))||this).error=r,o.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o),t),o.name="BarbaError",o}return n(t,e),t}(a(Error)),oe=function(){function e(e){void 0===e&&(e=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],e&&(this.all=this.all.concat(e)),this.update()}var t=e.prototype;return t.add=function(e,t){switch(e){case"rule":this.A.splice(t.position||0,0,t.value);break;case"transition":default:this.all.push(t)}this.update()},t.resolve=function(e,t){var r=this;void 0===t&&(t={});var n=t.once?this.once:this.page;n=n.filter(t.self?function(e){return e.name&&"self"===e.name}:function(e){return!e.name||"self"!==e.name});var o=new Map,i=n.find(function(n){var i=!0,s={};return!(!t.self||"self"!==n.name)||(r.A.reverse().forEach(function(t){i&&(i=r.R(n,t,e,s),n.from&&n.to&&(i=r.R(n,t,e,s,"from")&&r.R(n,t,e,s,"to")),n.from&&!n.to&&(i=r.R(n,t,e,s,"from")),!n.from&&n.to&&(i=r.R(n,t,e,s,"to")))}),o.set(n,s),i)}),s=o.get(i),a=[];if(a.push(t.once?"once":"page"),t.self&&a.push("self"),s){var u,c=[i];Object.keys(s).length>0&&c.push(s),(u=this.logger).info.apply(u,["Transition found ["+a.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+a.join(",")+"]");return i},t.update=function(){var e=this;this.all=this.all.map(function(t){return e.T(t)}).sort(function(e,t){return e.priority-t.priority}).reverse().map(function(e){return delete e.priority,e}),this.page=this.all.filter(function(e){return void 0!==e.leave||void 0!==e.enter}),this.once=this.all.filter(function(e){return void 0!==e.once})},t.R=function(e,t,r,n,o){var i=!0,s=!1,a=e,u=t.name,c=u,h=u,f=u,l=o?a[o]:a,p="to"===o?r.next:r.current;if(o?l&&l[u]:l[u]){switch(t.type){case"strings":default:var v=Array.isArray(l[c])?l[c]:[l[c]];p[c]&&-1!==v.indexOf(p[c])&&(s=!0),-1===v.indexOf(p[c])&&(i=!1);break;case"object":var d=Array.isArray(l[h])?l[h]:[l[h]];p[h]?(p[h].name&&-1!==d.indexOf(p[h].name)&&(s=!0),-1===d.indexOf(p[h].name)&&(i=!1)):i=!1;break;case"function":l[f](r)?s=!0:i=!1}s&&(o?(n[o]=n[o]||{},n[o][u]=a[o][u]):n[u]=a[u])}return i},t.O=function(e,t,r){var n=0;return(e[t]||e.from&&e.from[t]||e.to&&e.to[t])&&(n+=Math.pow(10,r),e.from&&e.from[t]&&(n+=1),e.to&&e.to[t]&&(n+=2)),n},t.T=function(e){var t=this;e.priority=0;var r=0;return this.A.forEach(function(n,o){r+=t.O(e,n.name,o+1)}),e.priority=r,e},e}(),ie=function(){function e(e){void 0===e&&(e=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new oe(e)}var r=e.prototype;return r.get=function(e,t){return this.store.resolve(e,t)},r.doOnce=function(e){var t=e.data,r=e.transition;try{var n=function(){o.S=!1},o=this,i=r||{};o.S=!0;var s=u(function(){return Promise.resolve(o.j("beforeOnce",t,i)).then(function(){return Promise.resolve(o.once(t,i)).then(function(){return Promise.resolve(o.j("afterOnce",t,i)).then(function(){})})})},function(e){o.S=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(e)});return Promise.resolve(s&&s.then?s.then(n):n())}catch(e){return Promise.reject(e)}},r.doPage=function(e){var t=e.data,r=e.transition,n=e.page,o=e.wrapper;try{var i=function(e){if(s)return e;a.S=!1},s=!1,a=this,c=r||{},h=!0===c.sync||!1;a.S=!0;var f=u(function(){function e(){return Promise.resolve(a.j("before",t,c)).then(function(){var e=!1;function r(r){return e?r:Promise.resolve(a.remove(t)).then(function(){return Promise.resolve(a.j("after",t,c)).then(function(){})})}var i=function(){if(h)return u(function(){return Promise.resolve(a.add(t,o)).then(function(){return Promise.resolve(a.j("beforeLeave",t,c)).then(function(){return Promise.resolve(a.j("beforeEnter",t,c)).then(function(){return Promise.resolve(Promise.all([a.leave(t,c),a.enter(t,c)])).then(function(){return Promise.resolve(a.j("afterLeave",t,c)).then(function(){return Promise.resolve(a.j("afterEnter",t,c)).then(function(){})})})})})})},function(e){if(a.M(e))throw new ne(e,"Transition error [sync]")});var r=function(r){return e?r:u(function(){var e=function(){if(!1!==i)return Promise.resolve(a.add(t,o)).then(function(){return Promise.resolve(a.j("beforeEnter",t,c)).then(function(){return Promise.resolve(a.enter(t,c,i)).then(function(){return Promise.resolve(a.j("afterEnter",t,c)).then(function(){})})})})}();if(e&&e.then)return e.then(function(){})},function(e){if(a.M(e))throw new ne(e,"Transition error [before/after/enter]")})},i=!1,s=u(function(){return Promise.resolve(a.j("beforeLeave",t,c)).then(function(){return Promise.resolve(Promise.all([a.leave(t,c),T(n,t)]).then(function(e){return e[0]})).then(function(e){return i=e,Promise.resolve(a.j("afterLeave",t,c)).then(function(){})})})},function(e){if(a.M(e))throw new ne(e,"Transition error [before/after/leave]")});return s&&s.then?s.then(r):r(s)}();return i&&i.then?i.then(r):r(i)})}var r=function(){if(h)return Promise.resolve(T(n,t)).then(function(){})}();return r&&r.then?r.then(e):e()},function(e){if(a.S=!1,e.name&&"BarbaError"===e.name)throw a.logger.debug(e.label),a.logger.error(e.error),e;throw a.logger.debug("Transition error [page]"),a.logger.error(e),e});return Promise.resolve(f&&f.then?f.then(i):i(f))}catch(e){return Promise.reject(e)}},r.once=function(e,t){try{return Promise.resolve(F.do("once",e,t)).then(function(){return t.once?$(t.once,t)(e):Promise.resolve()})}catch(e){return Promise.reject(e)}},r.leave=function(e,t){try{return Promise.resolve(F.do("leave",e,t)).then(function(){return t.leave?$(t.leave,t)(e):Promise.resolve()})}catch(e){return Promise.reject(e)}},r.enter=function(e,t,r){try{return Promise.resolve(F.do("enter",e,t)).then(function(){return t.enter?$(t.enter,t)(e,r):Promise.resolve()})}catch(e){return Promise.reject(e)}},r.add=function(e,t){try{return O.addContainer(e.next.container,t),F.do("nextAdded",e),Promise.resolve()}catch(e){return Promise.reject(e)}},r.remove=function(e){try{return O.removeContainer(e.current.container),F.do("currentRemoved",e),Promise.resolve()}catch(e){return Promise.reject(e)}},r.M=function(e){return e.message?!/Timeout error|Fetch error/.test(e.message):!e.status},r.j=function(e,t,r){try{return Promise.resolve(F.do(e,t,r)).then(function(){return r[e]?$(r[e],r)(t):Promise.resolve()})}catch(e){return Promise.reject(e)}},t(e,[{key:"isRunning",get:function(){return this.S},set:function(e){this.S=e}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(e){return"self"===e.name})}},{key:"shouldWait",get:function(){return this.store.all.some(function(e){return e.to&&!e.to.route||e.sync})}}]),e}(),se=function(){function e(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==e.length&&(e.forEach(function(e){t.byNamespace.set(e.namespace,e)}),this.names.forEach(function(e){F[e](t.L(e))}))}return e.prototype.L=function(e){var t=this;return function(r){var n=e.match(/enter/i)?r.next:r.current,o=t.byNamespace.get(n.namespace);return o&&o[e]?$(o[e],o)(r):Promise.resolve()}},e}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var ae={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function e(){this.version=h,this.schemaPage=ae,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=F,this.dom=O,this.helpers=_,this.history=L,this.request=D,this.url=I}var n=e.prototype;return n.use=function(e,t){var r=this.plugins;r.indexOf(e)>-1?this.logger.warn("Plugin ["+e.name+"] already installed."):"function"==typeof e.install?(e.install(this,t),r.push(e)):this.logger.warn("Plugin ["+e.name+'] has no "install" method.')},n.init=function(e){var t=void 0===e?{}:e,n=t.transitions,o=void 0===n?[]:n,i=t.views,s=void 0===i?[]:i,a=t.schema,u=void 0===a?R:a,c=t.requestError,h=t.timeout,f=void 0===h?2e3:h,p=t.cacheIgnore,v=void 0!==p&&p,d=t.prefetchIgnore,m=void 0!==d&&d,g=t.preventRunning,y=void 0!==g&&g,w=t.prevent,b=void 0===w?null:w,P=t.debug,x=t.logLevel;if(l.setLevel(!0===(void 0!==P&&P)?"debug":void 0===x?"off":x),this.logger.info(this.version),Object.keys(u).forEach(function(e){R[e]&&(R[e]=u[e])}),this.$=c,this.timeout=f,this.cacheIgnore=v,this.prefetchIgnore=m,this.preventRunning=y,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new K(v),this.prevent=new re(m),this.transitions=new ie(o),this.views=new se(s),null!==b){if("function"!=typeof b)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",b)}this.history.init(E.url.href,E.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(e){return e.init()});var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},n.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},n.force=function(e){window.location.assign(e)},n.go=function(e,t,r){var n;if(void 0===t&&(t="barba"),this.transitions.isRunning)this.force(e);else if(!(n="popstate"===t?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(e):this.prevent.run("sameUrl",null,null,e))||this.transitions.hasSelf)return t=this.history.change(e,t,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(e,t,n)},n.once=function(e){try{var t=this;return Promise.resolve(t.hooks.do("beforeEnter",e)).then(function(){function r(){return Promise.resolve(t.hooks.do("afterEnter",e)).then(function(){})}var n=function(){if(t.transitions.hasOnce){var r=t.transitions.get(e,{once:!0});return Promise.resolve(t.transitions.doOnce({transition:r,data:e})).then(function(){})}}();return n&&n.then?n.then(r):r()})}catch(e){return Promise.reject(e)}},n.page=function(e,t,n){try{var o=function(){var e=i.data;return Promise.resolve(i.hooks.do("page",e)).then(function(){var t=u(function(){var t=i.transitions.get(e,{once:!1,self:n});return Promise.resolve(i.transitions.doPage({data:e,page:s,transition:t,wrapper:i._})).then(function(){i.q()})},function(){0===l.getLevel()&&i.force(e.current.url.href)});if(t&&t.then)return t.then(function(){})})},i=this;i.data.next.url=r({href:e},i.url.parse(e)),i.data.trigger=t;var s=i.cache.has(e)?i.cache.update(e,{action:"click"}).request:i.cache.set(e,i.request(e,i.timeout,i.onRequestError.bind(i,t)),"click").request,a=function(){if(i.transitions.shouldWait)return Promise.resolve(T(s,i.data)).then(function(){})}();return Promise.resolve(a&&a.then?a.then(o):o())}catch(e){return Promise.reject(e)}},n.onRequestError=function(e){this.transitions.isRunning=!1;for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r[0],i=r[1],s=this.cache.getAction(o);return this.cache.delete(o),!(this.$&&!1===this.$(e,s,o,i)||("click"===s&&this.force(o),1))},n.prefetch=function(e){var t=this;this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(e){t.logger.error(e)}),"prefetch")},n.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},n.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},n.B=function(e){var t=this,r=this.I(e);if(r){var n=this.dom.getHref(r);this.prevent.checkHref(n)||this.cache.has(n)||this.cache.set(n,this.request(n,this.timeout,this.onRequestError.bind(this,r)).catch(function(e){t.logger.error(e)}),"enter")}},n.U=function(e){var t=this.I(e);if(t)return this.transitions.isRunning&&this.preventRunning?(e.preventDefault(),void e.stopPropagation()):void this.go(this.dom.getHref(t),t,e)},n.D=function(e){this.go(this.url.getHref(),"popstate",e)},n.I=function(e){for(var t=e.target;t&&!this.dom.getHref(t);)t=t.parentNode;if(t&&!this.prevent.checkLink(t,e,this.dom.getHref(t)))return t},n.q=function(){var e=this.url.getHref(),t={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:e},this.url.parse(e))};this.C={current:t,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},t(e,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),e}())});
},{}],"MNPa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loader=void 0;var e=function(){console.log("loading...")};exports.loader=e;
},{}],"BQvw":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"function"==typeof t&&t.amd?t(n):"object"==typeof module&&module.exports?module.exports=n():e.EvEmitter=n()}("undefined"!=typeof window?window:this,function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var i=this._onceEvents&&this._onceEvents[t],s=0;s<n.length;s++){var o=n[s];i&&i[o]&&(this.off(t,o),delete i[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t});
},{}],"lc7f":[function(require,module,exports) {
var define;
var t;!function(e,i){"use strict";"function"==typeof t&&t.amd?t(["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){"use strict";var i=t.jQuery,o=t.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var s=Array.prototype.slice;function n(t,e,h){if(!(this instanceof n))return new n(t,e,h);var a,m=t;("string"==typeof t&&(m=document.querySelectorAll(t)),m)?(this.elements=(a=m,Array.isArray(a)?a:"object"==typeof a&&"number"==typeof a.length?s.call(a):[a]),this.options=r({},this.options),"function"==typeof e?h=e:r(this.options,e),h&&this.on("always",h),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(m||t))}n.prototype=Object.create(e.prototype),n.prototype.options={},n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},n.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),o=0;o<i.length;o++){var r=i[o];this.addImage(r)}if("string"==typeof this.options.background){var s=t.querySelectorAll(this.options.background);for(o=0;o<s.length;o++){var n=s[o];this.addElementBackgroundImages(n)}}}};var h={1:!0,9:!0,11:!0};function a(t){this.img=t}function m(t,e){this.url=t,this.element=e,this.img=new Image}return n.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,o=i.exec(e.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,t),o=i.exec(e.backgroundImage)}},n.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},n.prototype.addBackground=function(t,e){var i=new m(t,e);this.images.push(i)},n.prototype.check=function(){var t=this;function e(e,i,o){setTimeout(function(){t.progress(e,i,o)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},n.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},a.prototype=Object.create(e.prototype),a.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},a.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},a.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},m.prototype=Object.create(a.prototype),m.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},m.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},m.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((i=e).fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n});
},{"ev-emitter":"BQvw"}],"QN18":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../node_modules/imagesloaded/imagesloaded"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var r={lerp:function(t,e,n){return(1-n)*t+n*e},norm:function(t,e,n){return(t-e)/(n-e)}},a={height:window.innerHeight,width:window.innerWidth},s=function(){function e(){n(this,e),this.bindMethods(),this.data={ease:.1,current:0,last:0,rounded:0},this.dom={el:document.querySelector("[data-scroll]"),content:document.querySelector("[data-scroll-content]"),item:document.querySelectorAll("[data-scroll-item]"),sm:document.querySelectorAll("[data-scroll-sm]")},this.rAF=null,this.init()}return o(e,[{key:"bindMethods",value:function(){var t=this;["scroll","run","resize"].forEach(function(e){return t[e]=t[e].bind(t)})}},{key:"setStyles",value:function(){Object.assign(this.dom.el.style,{position:"fixed",top:0,left:0,right:0,height:"100%",width:"100%",padding:"0 5%",overflow:"hidden"})}},{key:"setHeight",value:function(){document.body.style.height="".concat(this.dom.content.getBoundingClientRect().height,"px")}},{key:"resize",value:function(){this.setHeight(),this.scroll()}},{key:"preload",value:function(){var e=this;(0,t.default)(this.dom.content,function(t){e.setHeight()})}},{key:"scroll",value:function(){this.data.current=window.scrollY}},{key:"run",value:function(){var t=this;this.data.last+=(this.data.current-this.data.last)*this.data.ease,this.data.rounded=Math.round(100*this.data.last)/100;var e=2.5*+((this.data.current-this.data.rounded)/a.width);this.dom.content.style.transform="translate3d(0, -".concat(this.data.rounded,"px, 0) skewY(").concat(e,"deg)"),this.dom.item.forEach(function(e){e.style.transform="translate3D(0, -".concat(.05*t.data.rounded,"px, 0)\n                              rotate(-").concat(.0025*t.data.rounded,"deg)")}),this.dom.sm.forEach(function(e){e.style.transform="translate3D(0, -".concat(.0025*t.data.rounded,"px, 0)")}),this.requestAnimationFrame()}},{key:"on",value:function(){this.setStyles(),this.setHeight(),this.addEvents(),this.requestAnimationFrame()}},{key:"off",value:function(){this.cancelAnimationFrame(),this.removeEvents()}},{key:"requestAnimationFrame",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){this.rAF=requestAnimationFrame(this.run)})},{key:"cancelAnimationFrame",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){cancelAnimationFrame(this.rAF)})},{key:"destroy",value:function(){document.body.style.height="",this.data=null,this.removeEvents(),this.cancelAnimationFrame()}},{key:"resize",value:function(){this.setHeight(),this.data.rounded=this.data.last=this.data.current}},{key:"addEvents",value:function(){window.addEventListener("resize",this.resize,{passive:!0}),window.addEventListener("scroll",this.scroll,{passive:!0})}},{key:"removeEvents",value:function(){window.removeEventListener("resize",this.resize,{passive:!0}),window.removeEventListener("scroll",this.scroll,{passive:!0})}},{key:"init",value:function(){this.preload(),this.on()}}]),e}();exports.default=s;
},{"../../node_modules/imagesloaded/imagesloaded":"lc7f"}],"KIzB":[function(require,module,exports) {
"use strict";var e=n(require("@barba/core")),r=require("../scripts/loading"),t=n(require("../scripts/scroll"));function n(e){return e&&e.__esModule?e:{default:e}}function u(){document.querySelector(".year").innerHTML="&COPY; ".concat((new Date).getFullYear())}var a=function(){new t.default,(0,r.loader)(),u(),u()};a();
},{"@barba/core":"nGBO","../scripts/loading":"MNPa","../scripts/scroll":"QN18"}]},{},["KIzB"], null)