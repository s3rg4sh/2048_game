parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r,e=document.querySelector(".game-field"),t=document.querySelector(".button"),n=document.querySelector(".game-score"),o=document.querySelector(".message-start"),a=document.querySelector(".message-lose"),s=document.querySelector(".message-win"),c=4,i=0,u=function(r){return r.filter(function(r){return 0!==r})};function f(r,e){return JSON.stringify(r)!==JSON.stringify(e)}function l(r){for(var e=u(r),t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,e.splice(t+1,1),i+=e[t]);for(;e.length<c;)e.push(0);return e}var d=function(){for(var e=0;e<c;e++)for(var t=0;t<c;t++)if(0===r[e][t])return!0;return!1};function v(){for(var t=0;t<c;t++)for(var n=0;n<c;n++)e.rows[t].cells[n].className="",e.rows[t].cells[n].classList.add("field-cell","field-cell--".concat(r[t][n])),e.rows[t].cells[n].textContent=r[t][n]||""}function m(){if(d())for(var e=!1;!e;){var t=Math.floor(Math.random()*c),n=Math.floor(Math.random()*c);0===r[t][n]&&(r[t][n]=2,v(),e=!0)}}var h=function(r){var e=r;return e=e[0].map(function(r,t){return e.map(function(r){return r[t]})})};function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=0;t<c;t++){var n=e[t];n=l(n),e[t]=n}}function L(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=0;t<c;t++){var n=e[t].reverse();n=l(n),e[t]=n.reverse()}}function w(){var e=h(r);L(e),r=h(e)}function y(){var e=h(r);g(e),r=h(e)}var S=function(){for(var e=0;e<r[0].length;e++)for(var t=0;t<r.length;t++)if(2048===r[e][t])return!0},k=function(r){for(var e=0;e<c;e++)for(var t=0;t<c-1;t++)if(r[e][t]===r[e][t+1])return!0;return!1},p=function(r){if(d())return!1;var e=h(r);return!k(e)&&!k(r)};t.addEventListener("click",function(){t.classList.contains("start")?(t.classList.remove("start"),t.classList.add("restart"),t.textContent="Restart",o.classList.add("hidden")):(s.classList.add("hidden"),a.classList.add("hidden")),r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,n.textContent=i,m(),m()}),document.addEventListener("keydown",function(e){if(p(r)&&a.classList.remove("hidden"),S())s.classList.remove("hidden"),v();else{var t=JSON.parse(JSON.stringify(r));switch(e.key){case"ArrowLeft":g();break;case"ArrowRight":L();break;case"ArrowDown":w();break;case"ArrowUp":y()}f(t,r)&&m(),v()}n.textContent=i});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.933bfb6a.js.map