// ==UserScript==
// @name         ranobe-rf-fb2-loader
// @namespace    taraflex
// @version      0.0.2
// @description  Юзерскрипт для скачивания книг в формате fb2 c https://ранобэ.рф/
// @author       taraflex.red@gmail.com
// @downloadURL  https://raw.githubusercontent.com/Taraflex/ranobe-rf-fb2-loader/master/build/ranobe-rf-fb2-loader.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/ranobe-rf-fb2-loader/master/build/ranobe-rf-fb2-loader.user.js
// @match        https://xn--80ac9aeh6f.xn--p1ai/*
// ==/UserScript==
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";const r=(t,e,n)=>new Promise((r,i)=>{if(n=Object.assign({concurrency:1/0},n),"function"!=typeof e)throw new TypeError("Mapper function is required");const{concurrency:o}=n;if(!("number"==typeof o&&o>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${o}\` (${typeof o})`);const s=[],a=t[Symbol.iterator]();let c=!1,l=!1,f=0,u=0;const d=()=>{if(c)return;const t=a.next(),n=u;if(u++,t.done)return l=!0,void(0===f&&r(s));f++,Promise.resolve(t.value).then(t=>e(t,n)).then(t=>{s[n]=t,f--,d()},t=>{c=!0,i(t)})};for(let t=0;t<o&&(d(),!l);t++);});t.exports=r,t.exports.default=r},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;function i(t,e){return Array.isArray(t)?function(t,e){for(var n,r="",o="",s=Array.isArray(e),a=0;a<t.length;a++)n=i(t[a]),n&&(s&&e[a]&&(n=c(n)),r=r+o+n,o=" ");return r}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var i in t)i&&t[i]&&r.call(t,i)&&(e=e+n+i,n=" ");return e}(t):t||""}function o(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)r.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function s(t,e,n,r){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(r?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=c(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}e.merge=function t(e,n){if(1===arguments.length){for(var r=e[0],i=1;i<e.length;i++)r=t(r,e[i]);return r}for(var s in n)if("class"===s){var a=e[s]||[];e[s]=(Array.isArray(a)?a:[a]).concat(n[s]||[])}else if("style"===s){var a=o(e[s]);a=a&&";"!==a[a.length-1]?a+";":a;var c=o(n[s]);c=c&&";"!==c[c.length-1]?c+";":c,e[s]=a+c}else e[s]=n[s];return e},e.classes=i,e.style=o,e.attr=s,e.attrs=function(t,e){var n="";for(var a in t)if(r.call(t,a)){var c=t[a];if("class"===a){c=i(c),n=s(a,c,!1,e)+n;continue}"style"===a&&(c=o(c)),n+=s(a,c,!1,e)}return n};var a=/["&<>]/;function c(t){var e=""+t,n=a.exec(e);if(!n)return t;var r,i,o,s="";for(r=n.index,i=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==r&&(s+=e.substring(i,r)),i=r+1,s+=o}return i!==r?s+e.substring(i,r):s}e.escape=c,e.rethrow=function t(e,r,i,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||o))throw e.message+=" on line "+i,e;try{o=o||n(9).readFileSync(r,"utf8")}catch(n){t(e,null,i)}var s=3,a=o.split("\n"),c=Math.max(i-s,0),l=Math.min(a.length,i+s);var s=a.slice(c,l).map(function(t,e){var n=e+c+1;return(n==i?"  > ":"    ")+n+"| "+t}).join("\n");e.path=r;e.message=(r||"Pug")+":"+i+"\n"+s+"\n\n"+e.message;throw e}},function(t,e,n){var r,i,o;i=[],r=function(){"use strict";function e(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){o(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(t){var e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(t,o,s){var a=i.URL||i.webkitURL,c=document.createElement("a");o=o||t.name||"download",c.download=o,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):n(c.href)?e(t,o,s):r(c,c.target="_blank")):(c.href=a.createObjectURL(t),setTimeout(function(){a.revokeObjectURL(c.href)},4e4),setTimeout(function(){r(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,i,o){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),i);else if(n(t))e(t,i,o);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout(function(){r(s)})}}:function(t,n,r,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,r);var s="application/octet-stream"===t.type,a=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&a)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},l.readAsDataURL(t)}else{var f=i.URL||i.webkitURL,u=f.createObjectURL(t);o?o.location=u:location.href=u,o=null,setTimeout(function(){f.revokeObjectURL(u)},4e4)}});i.saveAs=o.saveAs=o,t.exports=o},o="function"==typeof r?r.apply(e,i):r,void 0===o||(t.exports=o)},function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",o="week",s="month",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},u={padStart:f,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),i=e-r<0,o=t.clone().add(n+(i?-1:1),"months");return Number(-(n+(e-r)/(i?r-o:o-r))||0)},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:s,y:a,w:o,d:i,h:r,m:n,s:e,ms:t}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",m={};m[h]=d;var v=function(t){return t instanceof k},p=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||(h=r),r},y=function(t,e,n){if(v(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new k(r)},g=function(t,e){return y(t,{locale:e.$L})},b=u;b.parseLocale=p,b.isDayjs=v,b.wrapper=g;var k=function(){function f(t){this.$L=this.$L||p(t.locale,null,!0)||h,this.parse(t)}var u=f.prototype;return u.parse=function(t){this.$d=function(t){if(null===t)return new Date(NaN);if(b.isUndefined(t))return new Date;if(t instanceof Date)return t;if("string"==typeof t&&!/Z$/i.test(t)){var e=t.match(c);if(e)return new Date(e[1],e[2]-1,e[3]||1,e[4]||0,e[5]||0,e[6]||0,e[7]||0)}return new Date(t)}(t.date),this.init()},u.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},u.$utils=function(){return b},u.isValid=function(){return!("Invalid Date"===this.$d.toString())},u.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},u.isAfter=function(t,e){return y(t)<this.startOf(e)},u.isBefore=function(t,e){return this.endOf(e)<y(t)},u.year=function(){return this.$y},u.month=function(){return this.$M},u.day=function(){return this.$W},u.date=function(){return this.$D},u.hour=function(){return this.$H},u.minute=function(){return this.$m},u.second=function(){return this.$s},u.millisecond=function(){return this.$ms},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(t,c){var l=this,f=!!b.isUndefined(c)||c,u=b.prettyUnit(t),d=function(t,e){var n=g(new Date(l.$y,e,t),l);return f?n:n.endOf(i)},h=function(t,e){return g(l.toDate()[t].apply(l.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},m=this.$W,v=this.$M,p=this.$D;switch(u){case a:return f?d(1,0):d(31,11);case s:return f?d(1,v):d(0,v+1);case o:var y=this.$locale().weekStart||0,k=(m<y?m+7:m)-y;return d(f?p-k:p+(6-k),v);case i:case"date":return h("setHours",0);case r:return h("setMinutes",1);case n:return h("setSeconds",2);case e:return h("setMilliseconds",3);default:return this.clone()}},u.endOf=function(t){return this.startOf(t,!1)},u.$set=function(o,c){var l,f=b.prettyUnit(o),u=(l={},l[i]="setDate",l.date="setDate",l[s]="setMonth",l[a]="setFullYear",l[r]="setHours",l[n]="setMinutes",l[e]="setSeconds",l[t]="setMilliseconds",l)[f],d=f===i?this.$D+(c-this.$W):c;return this.$d[u]&&this.$d[u](d),this.init(),this},u.set=function(t,e){return this.clone().$set(t,e)},u.add=function(t,c){var l,f=this;t=Number(t);var u=b.prettyUnit(c),d=function(e,n){var r=f.set("date",1).set(e,n+t);return r.set("date",Math.min(f.$D,r.daysInMonth()))},h=function(e){var n=new Date(f.$d);return n.setDate(n.getDate()+e*t),g(n,f)};if(u===s)return d(s,this.$M);if(u===a)return d(a,this.$y);if(u===i)return h(1);if(u===o)return h(7);var m=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[u]||1,v=this.valueOf()+t*m;return g(v,this)},u.subtract=function(t,e){return this.add(-1*t,e)},u.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.padZoneStr(this.$d.getTimezoneOffset()),i=this.$locale(),o=i.weekdays,s=i.months,a=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)},c=function(t){return b.padStart(e.$H%12||12,t,"0")},f={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:b.padStart(this.$M+1,2,"0"),MMM:a(i.monthsShort,this.$M,s,3),MMMM:s[this.$M],D:String(this.$D),DD:b.padStart(this.$D,2,"0"),d:String(this.$W),dd:a(i.weekdaysMin,this.$W,o,2),ddd:a(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(this.$H),HH:b.padStart(this.$H,2,"0"),h:c(1),hh:c(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:b.padStart(this.$m,2,"0"),s:String(this.$s),ss:b.padStart(this.$s,2,"0"),SSS:b.padStart(this.$ms,3,"0"),Z:r};return n.replace(l,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):f[t]||r.replace(":","")})},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(t,c,l){var f,u=b.prettyUnit(c),d=y(t),h=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,v=b.monthDiff(this,d);return v=(f={},f[a]=v/12,f[s]=v,f.quarter=v/3,f[o]=(m-h)/6048e5,f[i]=(m-h)/864e5,f[r]=m/36e5,f[n]=m/6e4,f[e]=m/1e3,f)[u]||m,l?v:b.absFloor(v)},u.daysInMonth=function(){return this.endOf(s).$D},u.$locale=function(){return m[this.$L]},u.locale=function(t,e){var n=this.clone();return n.$L=p(t,e,!0),n},u.clone=function(){return g(this.toDate(),this)},u.toDate=function(){return new Date(this.$d)},u.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},u.toJSON=function(){return this.toISOString()},u.toISOString=function(){return this.$d.toISOString()},u.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},u.toString=function(){return this.$d.toUTCString()},f}();return y.prototype=k.prototype,y.extend=function(t,e){return t(e,k,y),y},y.locale=p,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=m[h],y.Ls=m,y}()},function(t,e,n){"use strict";t.exports=function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)}},function(t,e,n){var r=n(1);t.exports=function(t){var e,n="",i=t||{};return function(t,i,o,s,a,c,l,f,u,d,h,m){n=n+'<?xml version="1.0" encoding="utf-8" ?><FictionBook'+r.attr("xmlns",t,!0,!1)+' xmlns:l="http://www.w3.org/1999/xlink"><description><title-info>',function(){var t=f;if("number"==typeof t.length)for(var i=0,o=t.length;i<o;i++){var s=t[i];n=n+"<genre>"+r.escape(null==(e=s)?"":e)+"</genre>"}else for(var i in o=0,t)o++,s=t[i],n=n+"<genre>"+r.escape(null==(e=s)?"":e)+"</genre>"}.call(this),n=n+"<author><nickname>"+r.escape(null==(e=s)?"":e)+"</nickname></author><book-title>"+r.escape(null==(e=m)?"":e)+"</book-title>",i&&(n=n+"<annotation>"+(null==(e=i)?"":e)+"</annotation>"),n+='<coverpage><image l:href="#cover"/></coverpage><lang>ru</lang>',u&&(n=n+"<src-lang>"+r.escape(null==(e=u)?"":e)+"</src-lang>"),n=n+"</title-info><document-info><author><nickname>ранобэ.рф</nickname><home-page>https://xn--80ac9aeh6f.xn--p1ai/"+r.escape(null==(e=c)?"":e)+"/                </home-page></author><program-used>"+r.escape(null==(e=d)?"":e)+"</program-used><date"+r.attr("value",h,!0,!1)+">"+r.escape(null==(e=l)?"":e)+"</date><src-url>https://xn--80ac9aeh6f.xn--p1ai/"+r.escape(null==(e=c)?"":e)+"/</src-url><id>"+r.escape(null==(e=c)?"":e)+"</id><version>1</version></document-info></description><body>"+(null==(e=a)?"":e)+"</body>",function(){var t=o;if("number"==typeof t.length)for(var i=0,s=t.length;i<s;i++){var a=t[i];n=n+"<binary"+(r.attr("id",a.id,!0,!1)+r.attr("content-type",a.mime,!0,!1))+">"+(null==(e=a.data)?"":e)+"</binary>"}else for(var i in s=0,t)s++,a=t[i],n=n+"<binary"+(r.attr("id",a.id,!0,!1)+r.attr("content-type",a.mime,!0,!1))+">"+(null==(e=a.data)?"":e)+"</binary>"}.call(this),n+="</FictionBook>"}.call(this,"NS"in i?i.NS:"undefined"!=typeof NS?NS:void 0,"annotation"in i?i.annotation:"undefined"!=typeof annotation?annotation:void 0,"attaches"in i?i.attaches:"undefined"!=typeof attaches?attaches:void 0,"author"in i?i.author:"undefined"!=typeof author?author:void 0,"body"in i?i.body:"undefined"!=typeof body?body:void 0,"bookAlias"in i?i.bookAlias:"undefined"!=typeof bookAlias?bookAlias:void 0,"fullDate"in i?i.fullDate:"undefined"!=typeof fullDate?fullDate:void 0,"genres"in i?i.genres:"undefined"!=typeof genres?genres:void 0,"lang"in i?i.lang:"undefined"!=typeof lang?lang:void 0,"programName"in i?i.programName:"undefined"!=typeof programName?programName:void 0,"shortDate"in i?i.shortDate:"undefined"!=typeof shortDate?shortDate:void 0,"title"in i?i.title:"undefined"!=typeof title?title:void 0),n}},function(t,e,n){var r=n(1);t.exports=function(t){var e,n="",i=t||{};return function(t,i){n=n+"<!DOCTYPE html><body><header><p>"+r.escape(null==(e=i)?"":e)+"</p></header>",function(){var i=t;if("number"==typeof i.length)for(var o=0,s=i.length;o<s;o++){var a=i[o];a.result.part.content&&(n=n+"<section> <header><p>"+r.escape(null==(e=a.result.part.title)?"":e)+"</p></header>"+(null==(e=a.result.part.content)?"":e)+"</section>")}else for(var o in s=0,i)s++,a=i[o],a.result.part.content&&(n=n+"<section> <header><p>"+r.escape(null==(e=a.result.part.title)?"":e)+"</p></header>"+(null==(e=a.result.part.content)?"":e)+"</section>")}.call(this),n+="</body>"}.call(this,"parts"in i?i.parts:"undefined"!=typeof parts?parts:void 0,"title"in i?i.title:"undefined"!=typeof title?title:void 0),n}},function(t,e,n){"use strict";t.exports=function(t,e){const n=t&&t.match(e);return n&&n.length>0?n[n.length-1]:null}},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e){},function(t,e,n){"use strict";function r(){}function i(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){for(var n in e)t[n]=1;return t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}n.r(e);function u(){return Object.create(null)}function d(t){this.destroy=r,this.fire("destroy"),this.set=r,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function h(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function m(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var i=n[r];if(!i.__calling)try{i.__calling=!0,i.call(this,e)}finally{i.__calling=!1}}}function v(t){t._lock=!0,w(t._beforecreate),w(t._oncreate),w(t._aftercreate),t._lock=!1}function p(){return this._state}function y(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function g(t){this._set(i({},t)),this.root._lock||v(this.root)}function b(t){var e=this._state,n={},r=!1;for(var o in t=i(this._staged,t),this._staged={},t)this._differs(t[o],e[o])&&(n[o]=r=!0);r&&(this._state=i(i({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))}function k(t){i(this._staged,t)}function w(t){for(;t&&t.length;)t.shift()()}function _(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}var $={destroy:d,get:p,fire:m,on:y,set:g,_recompute:r,_set:b,_stage:k,_mount:_,_differs:h},S=(n(8),n(2)),M=n.n(S),D=n(3),x=n.n(D),O=n(4),A=n(5),E=n(6),j=n(7),N=n(0);const L=function(t){const e=function(e){return t[e]},n="(?:"+Object.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}}({"&quot;":'"',"&quote;":'"',"&#x27;":"'","&#39;":"'","&apos;":"'","&#x60;":"`","&nbsp;":" ","&#95;":"_","&#34;":'"'}),T="http://www.gribuser.ru/xml/fictionbook/2.0",H={"Боевик":"det_action","Боевые Искусства":"fantasy_fight","Вампиры":"vampire_book","Виртуальный Мир":"sf","Героическое Фэнтези":"sf_heroic","Детектив":"detective","Дзёсэй":"sf_action","Драма":"dramaturgy","Игра":"sf","История":"sci_history","Комедия":"humor","Меха":"sf","Мистика":"sf_horror","Научная Фантастика":"sf","Приключения":"adventure","Психология":"sci_psychology","Сверхъестественное":"sf_horror","Сёнэн":"sf_action","Спорт":"home_sport","Сэйнэн":"sf_action","сянься":"sf_fantasy","Триллер":"thriller","Ужасы":"sf_horror","Фантастика":"sf","Фэнтези":"sf_fantasy","Школьная Жизнь":"children","Экшн":"sf_action","Этти":"love_erotica",Adult:"home_sex",Josei:"sf_action",Shounen:"sf_action",Xianxia:"sf_fantasy",Xuanhuan:"sf_fantasy"};async function C(t,e){return(await fetch(`https://xn--80ac9aeh6f.xn--p1ai/v1/${t}/get/?`+Object.keys(e).map(t=>`${t}=${e[t]}`).join("&"),{credentials:"include"})).json()}const Y=C.bind(null,"book"),U=C.bind(null,"part");function R(t){return t[t.length-1]}function q(t,e){return{mime:j(t.split(",",1)[0],/data:(.+);base64/)||e,data:t.slice(t.indexOf(",")+1)}}async function B(t){if(/data:(.+);base64/.test(t))return q(t);{const r=await fetch(t);return e=await r.blob(),n=r.headers.get("content-type"),new Promise((t,r)=>{var i=new FileReader;i.onloadend=function(e){try{2==i.readyState?t(q(i.result,n)):r(i.error)}catch(t){r(t)}},i.readAsDataURL(e)})}var e,n}function P(t,e){const n=(new DOMParser).parseFromString(t,e),r=n.querySelector("parsererror");if(r)throw r.textContent;return n}function F(t,e,n){const r=t.createElement(n);for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode.replaceChild(r,e)}function I(t,e){t=t.replace(/>(\s*<br(\s+[^\/<>]+)?\/?>\s*)+/g,">").replace(/(\s*<br(\s+[^\/<>]+)?\/?>\s*)+<\//g,"</").replace(/(\s*<br(\s+[^\/<>]+)?\/?>\s*)+/g,"</p><p>");const n=P(t,"text/html");let r;for(n.querySelectorAll("i,em").forEach(t=>{F(n,t,"emphasis")}),n.querySelectorAll("b").forEach(t=>{F(n,t,"strong")}),n.querySelectorAll("s,strike").forEach(t=>{F(n,t,"strikethrough")}),n.querySelectorAll("div").forEach(t=>{F(n,t,"p")}),n.querySelectorAll("img").forEach(t=>{const r="_"+O();e.push({src:t.src,id:r});const i=n.createElement("image");i.setAttribute("l:href","#"+r),t.parentNode.replaceChild(i,t)}),n.querySelectorAll("body :not(section):not(emphasis):not(code):not(header):not(strong):not(strikethrough):not(p):not(empty-line):not(sub):not(sup):not(image)").forEach(t=>{F(n,t,"code")});(r=n.querySelectorAll("p > p"))&&r.length>0;)r.forEach(t=>{for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)});return n.querySelectorAll("body :not(image)").forEach(t=>{t.attributes.length>0&&Array.from(t.attributes).forEach(e=>t.removeAttribute(e.name))}),L(n.body.innerHTML).replace(/><\/image>/g,"/>").replace(/(\s*<code>\s*<\/code>\s*)+/g," ").replace(/(\s*<p>\s*<\/p>\s*)+/g," ")}var W={async load(){try{this.set({loading:!0,error:null});const t=location.pathname.split("/",2).filter(t=>t)[0],{result:e}=await Y({bookAlias:t}),{book:n,genres:r,parts:i}=e,o=x()(n.publishedAt),s=new Set(r.map(t=>H[t.title]));s.delete(void 0),s.size<1&&s.add("unrecognised");const{mime:a,data:c}=await B(n.image.desktop.image),l=5,f=await N(i.reverse(),async({url:e},n)=>{try{return U({bookAlias:t,partAlias:R(e.split("/").filter(t=>t))})}catch(n){return U({bookAlias:t,partAlias:R(e.split("/").filter(t=>t))})}finally{const{percent:t}=this.get();this.set({percent:Math.max(t,100*(n+1)/i.length|0)})}},{concurrency:l}),u=[],d=I(E({title:n.title,parts:f}),u),h=I(n.description,u),m=P(A({NS:T,genres:Array.from(s),title:n.title,annotation:h,author:n.author,programName:"ranobe-rf-fb2-loader",bookAlias:t,shortDate:o.format("YYYY-MM-DD"),fullDate:o.format("DD.MM.YYYY"),body:d,attaches:[{data:c,mime:a,id:"cover"},...await N(u,async t=>Object.assign(t,await B(t.src)),{concurrency:l})]}),"application/xml");m.querySelectorAll("header").forEach(t=>{const e=m.createElementNS(T,"title");for(;t.firstChild;)e.appendChild(t.firstChild);t.parentNode.replaceChild(e,t)}),M()(new Blob(['<?xml version="1.0" encoding="utf-8" ?>'+m.documentElement.outerHTML],{type:"text/xml;charset=utf-8"}),t+".fb2")}catch(t){console.error(t),alert("Ошибка загрузки. Попробуйте снова.")}finally{this.set({loading:!1,percent:0})}}};function J(t,e){var n,r,i,o,u;return{c(){n=l("div"),r=l("div"),r.innerHTML='<div class="sk-circle1 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle2 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle3 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle4 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle5 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle6 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle7 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle8 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle9 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle10 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle11 sk-child svelte-ffmv3n"></div>\n\t\t\t\t\t\t<div class="sk-circle12 sk-child svelte-ffmv3n"></div>',i=f("\n\t\t"),o=f(e.percent),u=f("%"),r.className="sk-circle svelte-ffmv3n",n.className="rg-loader-bg svelte-ffmv3n"},m(t,e){a(t,n,e),s(n,r),s(n,i),s(n,o),s(n,u)},p(t,e){var n,r;t.percent&&(n=o,r=e.percent,n.data=""+r)},d(t){t&&c(n)}}}function z(t,e){return{c:r,m:r,d:r}}function Z(t){var e,n,r,d,h,m;!function(t,e){t._handlers=u(),t._slots=u(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}(this,t),this._state=i({loading:!1,percent:0,error:null},t.data),this._intro=!0,document.getElementById("svelte-ffmv3n-style")||(e=l("style"),e.id="svelte-ffmv3n-style",e.textContent=".sk-circle.svelte-ffmv3n{margin:auto;top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none}.sk-circle.svelte-ffmv3n{width:100px;height:100px}.sk-circle.svelte-ffmv3n .sk-child.svelte-ffmv3n{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle.svelte-ffmv3n .sk-child.svelte-ffmv3n:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#303745;border-radius:100%;-webkit-animation:svelte-ffmv3n-sk-circleBounceDelay 1.2s infinite ease-in-out both;animation:svelte-ffmv3n-sk-circleBounceDelay 1.2s infinite ease-in-out both}.sk-circle.svelte-ffmv3n .sk-circle2.svelte-ffmv3n{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle.svelte-ffmv3n .sk-circle3.svelte-ffmv3n{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle.svelte-ffmv3n .sk-circle4.svelte-ffmv3n{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle.svelte-ffmv3n .sk-circle5.svelte-ffmv3n{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle.svelte-ffmv3n .sk-circle6.svelte-ffmv3n{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle.svelte-ffmv3n .sk-circle7.svelte-ffmv3n{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle.svelte-ffmv3n .sk-circle8.svelte-ffmv3n{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle.svelte-ffmv3n .sk-circle9.svelte-ffmv3n{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle.svelte-ffmv3n .sk-circle10.svelte-ffmv3n{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle.svelte-ffmv3n .sk-circle11.svelte-ffmv3n{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle.svelte-ffmv3n .sk-circle12.svelte-ffmv3n{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle.svelte-ffmv3n .sk-circle2.svelte-ffmv3n:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle.svelte-ffmv3n .sk-circle3.svelte-ffmv3n:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle.svelte-ffmv3n .sk-circle4.svelte-ffmv3n:before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.sk-circle.svelte-ffmv3n .sk-circle5.svelte-ffmv3n:before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.sk-circle.svelte-ffmv3n .sk-circle6.svelte-ffmv3n:before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.sk-circle.svelte-ffmv3n .sk-circle7.svelte-ffmv3n:before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.sk-circle.svelte-ffmv3n .sk-circle8.svelte-ffmv3n:before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.sk-circle.svelte-ffmv3n .sk-circle9.svelte-ffmv3n:before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.sk-circle.svelte-ffmv3n .sk-circle10.svelte-ffmv3n:before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.sk-circle.svelte-ffmv3n .sk-circle11.svelte-ffmv3n:before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.sk-circle.svelte-ffmv3n .sk-circle12.svelte-ffmv3n:before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes svelte-ffmv3n-sk-circleBounceDelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes svelte-ffmv3n-sk-circleBounceDelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.rg-loader-bg.svelte-ffmv3n{background:rgba(255, 255, 255, 0.8);width:100vw;height:100vh;line-height:100vh;display:block;position:fixed;top:0;left:0;text-align:center;font-size:16px;color:#303745;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}",s(document.head,e)),this._fragment=(n=this._state,h=n.loading&&J(0,n),m=n.error&&z(),{c(){r=l("div"),h&&h.c(),d=f("\n\t"),m&&m.c()},m(t,e){a(t,r,e),h&&h.m(r,null),s(r,d),m&&m.m(r,null)},p(t,e){e.loading?h?h.p(t,e):(h=J(0,e),h.c(),h.m(r,d)):h&&(h.d(1),h=null),e.error?m||(m=z(),m.c(),m.m(r,null)):m&&(m.d(1),m=null)},d(t){t&&c(r),h&&h.d(),m&&m.d()}}),this.root._oncreate.push(()=>{(function(){window.addEventListener("keydown",t=>{if(!t.defaultPrevented&&!t.altKey&&(t.ctrlKey||t.metaKey)&&("s"===t.key||"S"===t.key)){t.preventDefault();const{loading:e}=this.get();return e||this.load(),!1}})}).call(this),this.fire("update",{changed:o({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),v(this))}i(Z.prototype,$),i(Z.prototype,W);var X=Z,K=["interactive","complete"],G=function(t,e){return new Promise(function(n){t&&"function"!=typeof t&&(e=t,t=null),e=e||window.document;var r=function(){return n(void(t&&setTimeout(t)))};-1!==K.indexOf(e.readyState)?r():e.addEventListener("DOMContentLoaded",r)})};G.resume=function(t){return function(e){return G(t).then(function(){return e})}};var V=G;V(()=>{const t=document.createElement("div");t.style.zIndex="16777270",t.style.position="fixed",t.style.top="0",t.style.left="0",document.body.appendChild(t),new X({target:t})})}]);