/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>h});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),c=n(417),u=n.n(c),s=new URL(n(603),n.b),d=i()(a()),l=u()(s);d.push([t.id,`:root {\n  --pink: #ddbee1;\n  --purple: #bab9eb;\n  --blue: #92b7f5;\n}\n\n* {\n  margin: none;\n  padding: none;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  background-image: url(${l});\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  color: white;\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nform {\n  height: 5rem;\n  width: 100%;\n  margin: 5rem 0 5rem 0;\n  display: flex;\n  justify-content: center;\n}\n\n#city-input {\n  width: clamp(400px, 50%, 700px);\n  height: auto;\n  padding: 1rem;\n  margin-right: 0rem;\n  font-size: 2rem;\n  font-weight: 600;\n  font-family: inherit;\n  border: 0;\n  border: 2px solid white;\n  border-radius: 0.5rem 0 0 0.5rem;\n  background-color: transparent;\n  color: white;\n}\n\n#city-input::placeholder {\n  color: white;\n}\n\n#city-input:focus {\n  outline: 0;\n}\n\nbutton {\n  background-color: transparent;\n  border: 2px solid white;\n  border-left: 0;\n  border-radius: 0 0.5rem 0.5rem 0;\n  width: auto;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  font-family: inherit;\n  transition: 500ms;\n}\n\nbutton:hover,\nbutton:focus {\n  background-color: rgb(255, 255, 255);\n  color: var(--blue);\n}\n\n.city-data {\n  width: clamp(400px, 50%, 700px);\n  padding: 3rem 5rem 3rem 5rem;\n  border-radius: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.164);\n}\n\n.city-time {\n  font-size: 1.5rem;\n}\n\n.city-name {\n  font-size: 5rem;\n  margin-bottom: 1.5rem;\n}\n\n.city-temperature {\n  font-size: 4rem;\n}\n\n.city-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 2rem;\n}\n\n.weather-icon {\n  height: 7rem;\n}\n\n.american {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem;\n  font-size: 1.5rem;\n}\n\n#american {\n  margin-left: 1rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  accent-color: var(--purple);\n}\n\n.error {\n  font-size: 3rem;\n  white-space: pre-wrap;\n}\n`,""]);const h=d},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var h=n(l),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)e[h].references++,e[h].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var u=r(t,a),s=0;s<o.length;s++){var d=n(o[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=u}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},603:(t,e,n)=>{t.exports=n.p+"0d50d1f2df0956486abf.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),a=n.n(r),o=n(659),i=n.n(o),c=n(56),u=n.n(c),s=n(540),d=n.n(s),l=n(113),h=n.n(l),f=n(208),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const y={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function v(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const b={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:v({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:v({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:v({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:v({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:v({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let s;return s=t.valueCallback?t.valueCallback(u):u,s=n.valueCallback?n.valueCallback(s):s,{value:s,rest:e.slice(i.length)}}}const M={ordinalNumber:(k={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(k.matchPattern);if(!n)return null;const r=n[0],a=t.match(k.parsePattern);if(!a)return null;let o=k.valueCallback?k.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var k;const S={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=p[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:y,formatRelative:(t,e,n,r)=>w[t],localize:b,match:M,options:{weekStartsOn:0,firstWeekContainsDate:1}};let E={};function P(){return E}Math.pow(10,8);const T=6048e5,L=864e5;function C(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function D(t){const e=C(t);return e.setHours(0,0,0,0),e}function O(t){const e=C(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function W(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function j(t){const e=C(t);return function(t,e){const n=D(t),r=D(e),a=+n-O(n),o=+r-O(r);return Math.round((a-o)/L)}(e,function(t){const e=C(t),n=W(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function N(t,e){const n=P(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=C(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function F(t){return N(t,{weekStartsOn:1})}function Y(t){const e=C(t),n=e.getFullYear(),r=W(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=F(r),o=W(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=F(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function q(t){const e=C(t),n=+F(e)-+function(t){const e=Y(t),n=W(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),F(n)}(e);return Math.round(n/T)+1}function A(t,e){const n=C(t),r=n.getFullYear(),a=P(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=W(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const c=N(i,e),u=W(t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const s=N(u,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function H(t,e){const n=C(t),r=+N(n,e)-+function(t,e){const n=P(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=A(t,e),o=W(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),N(o,e)}(n,e);return Math.round(r/T)+1}function z(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const G={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return z("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):z(n+1,2)},d:(t,e)=>z(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>z(t.getHours()%12||12,e.length),H:(t,e)=>z(t.getHours(),e.length),m:(t,e)=>z(t.getMinutes(),e.length),s:(t,e)=>z(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return z(Math.trunc(r*Math.pow(10,n-3)),e.length)}},_={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return G.y(t,e)},Y:function(t,e,n,r){const a=A(t,r),o=a>0?a:1-a;return"YY"===e?z(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):z(o,e.length)},R:function(t,e){return z(Y(t),e.length)},u:function(t,e){return z(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return z(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return z(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return G.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return z(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=H(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):z(a,e.length)},I:function(t,e,n){const r=q(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):z(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,e)},D:function(t,e,n){const r=j(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):z(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return z(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return z(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return z(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return G.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):z(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):z(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,e)},S:function(t,e){return G.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return B(r);case"XXXX":case"XX":return I(r);default:return I(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return B(r);case"xxxx":case"xx":return I(r);default:return I(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(r,":");default:return"GMT"+I(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(r,":");default:return"GMT"+I(r,":")}},t:function(t,e,n){return z(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return z(t.getTime(),e.length)}};function Q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+z(o,2)}function B(t,e){return t%60==0?(t>0?"-":"+")+z(Math.abs(t)/60,2):I(t,e)}function I(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+z(Math.trunc(r/60),2)+e+z(r%60,2)}const X=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},$=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},J={p:$,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return X(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",X(r,e)).replace("{{time}}",$(a,e))}},U=/^D+$/,R=/^Y+$/,V=["D","DD","YY","YYYY"];function K(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=C(t);return!isNaN(Number(n))}const Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;function at(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}var ot={events:{},subscribe:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},unsubscribe:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter((function(t){return t!==e})))},publish:function(t,e){this.events[t]&&this.events[t].forEach((function(t){t(e)}))}},it="33afe6ecd736460e9d454219241904";function ct(t){return ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(t)}function ut(){ut=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new D(r||[]);return a(i,"_invoke",{value:P(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",f="suspendedYield",m="executing",p="completed",g={};function y(){}function w(){}function v(){}var b={};s(b,i,(function(){return this}));var x=Object.getPrototypeOf,M=x&&x(x(O([])));M&&M!==n&&r.call(M,i)&&(b=M);var k=v.prototype=y.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==ct(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function P(e,n,r){var a=h;return function(o,i){if(a===m)throw Error("Generator is already running");if(a===p){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var s=l(e,n,r);if("normal"===s.type){if(a=r.done?p:f,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=p,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=l(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(ct(e)+" is not iterable")}return w.prototype=v,a(k,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:w,configurable:!0}),w.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},S(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(d(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(k),s(k,u,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=O,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function st(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,a)}function dt(t){return lt.apply(this,arguments)}function lt(){var t;return t=ut().mark((function t(e){var n,r,a,o;return ut().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||(n=document.querySelector(".city-name"),e=n.textContent,console.log(e)),t.prev=1,t.next=4,fetch("http://api.weatherapi.com/v1/current.json?key=".concat(it,"&q=").concat(e),{mode:"cors"});case 4:return r=t.sent,t.next=7,r.json();case 7:a=t.sent,o={cityName:a.location.name,localTime:a.location.localtime,tempC:a.current.temp_c,tempF:a.current.temp_f,condition:a.current.condition},ot.publish("getAPIData",o),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),ot.publish("handleError",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})),lt=function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){st(o,r,a,i,c,"next",t)}function c(t){st(o,r,a,i,c,"throw",t)}i(void 0)}))},lt.apply(this,arguments)}var ht={input:document.querySelector("#city-input"),searchBtn:document.querySelector("button.search"),container:document.querySelector(".city-data"),american:!1};function ft(){dt(document.querySelector(".city-name").textContent)}ot.subscribe("getAPIData",(function(t){var e=t.cityName,n=function(t,e,n){const r=P(),a=n?.locale??r.locale??S,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=C(t);if(!K(c))throw new RangeError("Invalid time value");let u=e.match(tt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,J[e])(t,a.formatLong):t})).join("").match(Z).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:at(t)};if(_[e])return{isToken:!0,value:t};if(e.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(u=a.localize.preprocessor(c,u));const s={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return u.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return R.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return U.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),V.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,_[o[0]])(c,o,a.localize,s)})).join("")}(t.localTime,"E, MMMM d, HH:mm"),r=t.condition.text,a=t.condition.icon.replace("//cdn.weatherapi.com/weather/64x64/",""),o=ht.american?"".concat(t.tempF,"&degF"):"".concat(t.tempC,"&degC"),i=new DocumentFragment,c=document.createElement("div");c.classList.add("city-time"),c.textContent="".concat(n," (Last Updated)");var u=document.createElement("div");u.classList.add("city-name"),u.textContent=e;var s=document.createElement("div");s.classList.add("city-temperature"),s.innerHTML=o;var d=document.createElement("div");d.classList.add("city-condition");var l=document.createElement("img");l.classList.add("weather-icon"),l.src="./icons/".concat(a);var h=document.createElement("div");h.classList.add("description"),h.textContent=r,d.appendChild(l),d.appendChild(h);var f=document.createElement("div");f.classList.add("american");var m=document.createElement("label");m.setAttribute("for","american"),m.textContent="American?";var p=document.createElement("input");p.type="checkbox",p.checked=ht.american,p.setAttribute("id","american"),p.addEventListener("change",(function(t){return function(t){var e=t.target.checked;ht.american=e,ft()}(t)})),f.appendChild(m),f.appendChild(p),i.appendChild(c),i.appendChild(u),i.appendChild(s),i.appendChild(d),i.appendChild(f),ot.publish("renderElements",i)})),ot.subscribe("renderElements",(function(t){ht.container.innerHTML="",ht.container.appendChild(t)})),ht.searchBtn.addEventListener("click",(function(t){return function(t){t.preventDefault();var e=ht.input.value;ht.container.innerHTML="",dt(e),e=""}(t)})),ot.subscribe("handleError",(function(t){var e=document.createElement("div");e.classList.add("error"),e.textContent="There was an error 😔\n\nPlease check if your city is spelled correctly!",ht.container.appendChild(e)})),ot.subscribe("handleAmerican",(function(){console.log("run")})),dt("Sapporo"),window.addEventListener("DOMContentLoaded",(function(){setInterval(ft,6e4)}))})()})();