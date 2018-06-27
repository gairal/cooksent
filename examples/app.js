!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cooksent=e():t.cooksent=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.hasLocalStorage=t.hasLocalStorage();this.opts=o({},{key:"COOKSENT"},e)}return i(t,[{key:"empty",value:function(){this.hasLocalStorage&&localStorage.removeItem(this.key)}},{key:"key",get:function(){return this.opts.key}},{key:"hasOptIn",get:function(){return!!this.hasLocalStorage&&"1"===localStorage.getItem(this.key)},set:function(t){this.hasLocalStorage&&localStorage.setItem(this.key,t?1:0)}}],[{key:"hasLocalStorage",value:function(){try{return localStorage.setItem("test","test"),localStorage.getItem("test"),localStorage.removeItem("test"),!0}catch(t){return!1}}}]),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(t){return t&&t.__esModule?t:{default:t}}(n(0));var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.opts=o({},t.defaultOpts,e),this.storage=new r.default({key:this.opts.storageKey})}return i(t,[{key:"hide",value:function(){this.$section&&(this.$section.style.display="none")}},{key:"show",value:function(){this.$section&&(this.$section.style.display="block")}},{key:"injectView",value:function(){this.$section=document.createElement("section"),this.$section.className="cooksent "+this.selector;var t=document.createElement("div");t.className="cooksent__title",t.innerText=this.title;var e=document.createElement("div");e.className="cooksent__description",e.innerText=this.description,this.$btn=document.createElement("button"),this.$btn.className="cooksent__btn "+this.btnSelector,this.$btn.type="button",this.$btn.innerText=this.btnLabel;var n=document.createElement("div");n.className="cooksent__btn-div",n.appendChild(this.$btn);var o=document.createElement("div");o.className="cooksent__body",o.appendChild(e),o.appendChild(n),this.$section.appendChild(t),this.$section.appendChild(o),document.body.appendChild(this.$section)}},{key:"consent",value:function(){this.storage.hasOptIn=!0,this.hide(),this.onConsent()}},{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.storage.hasOptIn&&!e||(this.injectView(),this.$btn.addEventListener("click",function(){return t.consent()}),this.storage.hasOptIn?this.hide():this.show()),this}},{key:"title",get:function(){return this.opts.title}},{key:"btnSelector",get:function(){return this.opts.btnSelector}},{key:"selector",get:function(){return this.opts.selector}},{key:"description",get:function(){return this.opts.description}},{key:"btnLabel",get:function(){return this.opts.btnLabel}},{key:"onConsent",get:function(){return this.opts.onConsent}}],[{key:"factory",value:function(e){return new t(e).init()}},{key:"defaultOpts",get:function(){return{selector:"js-cooksent",btnSelector:"js-cooksent__btn",title:"Cookie Consent",description:"By continuing your navigation without changing your cookie settings, you accept the use of cookies to analyse and measure audience, attendance, navigation and redirection from external websites.",btnLabel:"ok",onConsent:function(){},storageKey:"COOKSENT"}}}]),t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$html=document.querySelector(".js-test__"+e),this.onClick=n}return o(t,[{key:"onClick",value:function(){}},{key:"init",value:function(){this.$html.addEventListener("click",this.onClick)}}],[{key:"factory",value:function(e,n){return new t(e,n).init()}}]),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=s(n(1)),r=s(n(2));function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cooksent1=(new i.default).init(!0),this.cooksent2=new i.default({selector:".js-cooksent2",btnSelector:"js-cooksent__btn2",title:"Custom title",description:"Custom description",btnLabel:"Oki",storageKey:"COOKSENT2"}).init(!0),this.init()}return o(t,[{key:"init",value:function(){var t=this;r.default.factory("simple",function(){t.cooksent1.storage.empty(),t.cooksent1.show()}),r.default.factory("opts",function(){t.cooksent2.storage.empty(),t.cooksent2.show()})}}],[{key:"factory",value:function(){return new t}}]),t}();e.default=a},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}}(n(3));!function(t,e){"loading"===t.readyState?t.addEventListener("DOMContentLoaded",e):e()}(document,function(){o.default.factory()})}])});