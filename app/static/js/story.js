/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-insta-stories/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-insta-stories/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

    !function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "react")):undefined}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/index.js",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)).default.createContext({stories:[],defaultInterval:4e3,width:360,height:640});t.default=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=o.default.createContext({numArray:[],currentId:0,count:0,currentStory:{url:""},videoDuration:0,bufferAction:!1,pause:!1})},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(0)),u=i(n(4)),l=i(n(1)),s=function(e){a.useEffect((function(){e.stories.forEach((function(e,t){var n=[],o="object"!==r(e)||!e.url||"image"!==e.type&&e.type?"string"==typeof e?e:null:e.url;o&&(n[t]=new Image,n[t].src=o)}))}),[e.stories]);var t={stories:e.stories.map((function(e){return"string"==typeof e?{url:e}:e})),width:e.width,height:e.height,loader:e.loader,header:e.header,storyStyles:e.storyStyles,loop:e.loop,defaultInterval:e.defaultInterval,isPaused:e.isPaused,currentIndex:e.currentIndex,onStoryStart:e.onStoryStart,onStoryEnd:e.onStoryEnd,onAllStoriesEnd:e.onAllStoriesEnd};return a.default.createElement(l.default.Provider,{value:t},a.default.createElement(u.default,null))};s.defaultProps={width:360,height:640,defaultInterval:4e3},t.default=s},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(0)),u=i(n(1)),l=i(n(2)),s=i(n(5)),c=i(n(12));t.default=function(){var e=r(a.useState(0),2),t=e[0],n=e[1],o=r(a.useState(!0),2),i=o[0],d=o[1],p=r(a.useState(0),2),h=p[0],y=p[1],m=r(a.useState(!0),2),v=m[0],b=m[1],g=r(a.useState(0),2),_=g[0],x=g[1],w=a.useRef(),S=a.useRef(),E=a.useContext(u.default),M=E.width,j=E.height,I=E.defaultInterval,C=E.stories,O=E.loop,P=E.currentIndex,k=E.isPaused,T=E.onStoryStart,A=E.onStoryEnd,D=E.onAllStoriesEnd;a.useEffect((function(){return i||(S.current=requestAnimationFrame(z)),function(){cancelAnimationFrame(S.current)}}),[t,i]),a.useEffect((function(){y(0)}),[t,C]),a.useEffect((function(){"number"==typeof P&&(P>=0&&P<C.length?n(P):console.error("Index out of bounds. Current index was set to value more than the length of stories array.",P))}),[P]),a.useEffect((function(){"boolean"==typeof k&&d(k)}),[k]);var z=function e(){y((function(n){0===n&&R();var r=Z();return n<100?S.current=requestAnimationFrame(e):(L(),t===C.length-1&&V(),J()),n+100/(r/1e3*60)}))},R=function(){T&&T(t,C[t])},L=function(){A&&A(t,C[t])},V=function(){D&&D()},Z=function(){return"video"===C[t].type?_:"number"==typeof C[t].duration?C[t].duration:I},B=function(e,t){d("pause"===e),b(!!t)},J=function(){O?N():q()},N=function(){n((t+1)%C.length),y(0)},q=function(){t<C.length-1&&(n(t+1),y(0))},F=function(e){e.preventDefault(),w.current=setTimeout((function(){B("pause")}),200)},U=function(e,r){e.preventDefault(),w.current&&clearTimeout(w.current),i?B("play"):"next"===r?J():t>0&&(n(t-1),y(0))};return a.default.createElement("div",{style:Object.assign({},f.container,{width:M,height:j})},a.default.createElement(l.default.Provider,{value:{bufferAction:v,videoDuration:_,numArray:C.map((function(e,t){return t})),currentStory:C[t],currentId:t,count:h,pause:i}},a.default.createElement(c.default,null)),a.default.createElement(s.default,{action:B,bufferAction:v,playState:i,story:C[t],getVideoDuration:function(e){x(1e3*e)}}),a.default.createElement("div",{style:f.overlay},a.default.createElement("div",{style:{width:"50%",zIndex:999},onTouchStart:F,onTouchEnd:function(e){return U(e,"previous")},onMouseDown:F,onMouseUp:function(e){return U(e,"previous")}}),a.default.createElement("div",{style:{width:"50%",zIndex:999},onTouchStart:F,onTouchEnd:function(e){return U(e,"next")},onMouseDown:F,onMouseUp:function(e){return U(e,"next")}})))};var f={container:{display:"flex",flexDirection:"column",background:"#111",position:"relative"},overlay:{position:"absolute",height:"inherit",width:"inherit",display:"flex"}}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(0)),l=a(n(6)),s=a(n(7)),c=a(n(8)),f=a(n(1)),d={story:{display:"flex",position:"relative",overflow:"hidden"},storyContent:{width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"}};t.default=function(e){var t=o(u.useState(!1),2),n=t[0],i=t[1],a=o(u.useState(!1),2),p=a[0],h=a[1],y=u.useContext(f.default),m=y.width,v=y.height,b=y.loader,g=y.header,_=y.storyStyles;u.useEffect((function(){h(!1),"object"===r(e.story)&&e.story.content?(i(!0),e.action("play",!0)):(i(!1),e.action("pause",!0),x.current&&x.current.addEventListener("waiting",(function(){e.action("pause",!0)})),x.current&&x.current.addEventListener("playing",(function(){e.action("play",!0)})))}),[e.story]);var x=u.useRef(null);u.useEffect((function(){x.current&&(e.playState?x.current.pause():x.current.play().catch((function(e){return console.log(e)})))}),[e.playState]);var w=function(){try{i(!0),e.action("play",!0)}catch(e){console.log(e)}},S=function(){try{e.getVideoDuration(x.current.duration),x.current&&x.current.play().then((function(){w()})).catch((function(t){e.action("pause"),console.log(t)}))}catch(e){console.log(e)}},E="object"===r(e.story)&&e.story.header;return u.default.createElement("div",{style:Object.assign({},d.story,{width:m,height:v})},function(){var t="object"===r(e.story)&&e.story.content;if(t)return u.default.createElement(t,{action:e.action,isPaused:e.playState});var n="object"===r(e.story)?e.story.url:e.story,o="object"===r(e.story)&&e.story.styles||_||d.storyContent,i="object"===r(e.story)&&"video"===e.story.type?"video":"image";return"image"===i?u.default.createElement("img",{style:o,src:n,onLoad:w}):"video"===i?u.default.createElement("video",{ref:x,style:o,src:n,controls:!1,onLoadedData:S,autoPlay:!0,playsInline:!0}):null}(),E&&u.default.createElement("div",{style:{position:"absolute",left:12,top:20,zIndex:19}},"object"===r(e.story)?g?g(e.story.header):u.default.createElement(l.default,{heading:e.story.header.heading,subheading:e.story.header.subheading,profileImage:e.story.header.profileImage}):null),!n&&u.default.createElement("div",{style:{width:m,height:v,position:"absolute",left:0,top:0,background:"rgba(0, 0, 0, 0.9)",zIndex:9,display:"flex",justifyContent:"center",alignItems:"center",color:"#ccc"}},b||u.default.createElement("div",{className:c.default.spinner})),"object"===r(e.story)&&e.story.seeMore&&u.default.createElement("div",{style:{position:"absolute",margin:"auto",bottom:p?"unset":0,zIndex:9999,width:"100%",height:p?"100%":"auto"}},u.default.createElement(s.default,{action:e.action,toggleMore:function(t){h(t),e.action(t?"pause":"play")},showContent:p,seeMoreContent:e.story.seeMore})))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i={main:{display:"flex",alignItems:"center"},img:{width:40,height:40,borderRadius:40,marginRight:10,filter:"drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",border:"2px solid rgba(255, 255, 255, 0.8)"},text:{display:"flex",flexDirection:"column",filter:"drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))"},heading:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.9)",margin:0,marginBottom:2},subheading:{fontSize:"0.6rem",color:"rgba(255, 255, 255, 0.8)",margin:0}};t.default=function(e){var t=e.profileImage,n=e.heading,r=e.subheading;return o.default.createElement("div",{style:i.main},t&&o.default.createElement("img",{style:i.img,src:t}),o.default.createElement("span",{style:i.text},o.default.createElement("p",{style:i.heading},n),o.default.createElement("p",{style:i.subheading},r)))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function(e){var t=e.seeMoreContent;return e.showContent?o.default.createElement("div",{style:i.seeMoreExpanded},o.default.createElement(t,{close:function(){return e.toggleMore(!1)}})):o.default.createElement("div",{onClick:function(){e.toggleMore(!0)},style:i.seeMore},o.default.createElement("span",{style:i.seeMoreIcon},"⌃"),o.default.createElement("span",{style:i.seeMoreText},"See more"))};var i={seeMore:{height:"10vh",background:"linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"flex-end",bottom:0},seeMoreExpanded:{position:"absolute",top:0,left:0,width:"100%",height:"100%",boxSizing:"border-box",zIndex:99999},seeMoreText:{color:"white",textAlign:"center",letterSpacing:"0.1em",marginBottom:"2.2vh",textTransform:"capitalize",opacity:"1",fontSize:"0.8em",transition:"opacity 300ms ease-in-out"},seeMoreIcon:{color:"white",textAlign:"center",letterSpacing:"0.2em",marginBottom:"0.4vh",opacity:"1",filter:"drop-shadow(0 0 5px black)",textTransform:"capitalize",transition:"opacity 300ms ease-in-out"},seeMoreClose:{position:"absolute",filter:"drop-shadow(0 3px 2px #ccc)",right:"0.5rem",top:"0.5rem",fontSize:"1.5rem",opacity:"0.7",padding:"1rem"}}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(10)(!1)).push([e.i,"._1CK7FHVwhiOnuCiZJwiPq1 {\n\twidth: 40px;\n\theight: 40px;\n\tmargin: 100px auto;\n\tbackground-color: #fff;\n\n\tborder-radius: 100%;\n\t-webkit-animation: _1hEQ2VzIkTiZ-9jZoLI3JC 1s infinite ease-in-out;\n\tanimation: _1hEQ2VzIkTiZ-9jZoLI3JC 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes _1hEQ2VzIkTiZ-9jZoLI3JC {\n\t0% {\n\t\t-webkit-transform: scale(0);\n\t}\n\t100% {\n\t\t-webkit-transform: scale(1);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes _1hEQ2VzIkTiZ-9jZoLI3JC {\n\t0% {\n\t\t-webkit-transform: scale(0);\n\t\ttransform: scale(0);\n\t}\n\t100% {\n\t\t-webkit-transform: scale(1);\n\t\ttransform: scale(1);\n\t\topacity: 0;\n\t}\n}\n",""]),t.locals={spinner:"_1CK7FHVwhiOnuCiZJwiPq1","sk-scaleout":"_1hEQ2VzIkTiZ-9jZoLI3JC"}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var u=e[a];null!=u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="(".concat(u[2],") and (").concat(n,")")),t.push(u))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function u(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],t))}else{for(var u=[];a<r.parts.length;a++)u.push(m(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:u}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,y=0;function m(e,t){var n,r,o;if(t.singleton){var i=y++;n=h||(h=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e,t);return l(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],s=o[a.id];s&&(s.refs--,r.push(s))}e&&l(u(e,t),t);for(var c=0;c<r.length;c++){var f=r[c];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0)),a=o(n(13)),u=o(n(2));t.default=function(){var e=i.useContext(u.default),t=e.numArray,n=e.currentId;return i.default.createElement("div",{style:l.progressArr},t.map((function(e){return i.default.createElement(a.default,{key:e,width:1/t.length,active:e===n?1:e<n?2:0})})))};var l={progressArr:{display:"flex",justifyContent:"center",maxWidth:"100%",flexWrap:"row",position:"absolute",width:"98%",padding:5,paddingTop:7,alignSelf:"center",zIndex:99,filter:"drop-shadow(0 1px 8px #222)"}}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0)),a=o(n(14)),u=o(n(2));t.default=function(e){var t=i.useContext(u.default),n=t.bufferAction,r=t.count,o=t.pause,s=e.width,c=e.active;return i.default.createElement(a.default,{width:s,pause:o,bufferAction:n},i.default.createElement("div",{style:Object.assign({},function(e){switch(e.active){case 2:return{width:"100%"};case 1:return{transform:"scaleX(".concat(r/100,")")};case 0:default:return{width:0}}}({active:c}),l.inner)}))};var l={inner:{background:"#fff",height:"100%",maxWidth:"100%",borderRadius:2,transformOrigin:"center left",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",msBackfaceVisibility:"hidden",backfaceVisibility:"hidden",WebkitPerspective:1e3,MozPerspective:1e3,msPerspective:1e3,perspective:1e3}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=function(e){var t=e.width,n=e.pause,r=e.bufferAction;return{width:"".concat(100*t,"%"),opacity:n&&!r?0:1}},a={progress:{height:2,maxWidth:"100%",background:"#555",margin:2,borderRadius:2,transition:"opacity 400ms ease-in-out"}};t.default=function(e){return o.default.createElement("div",{style:Object.assign({},a.progress,i(e))},e.children)}}])}));


    /***/ }),
    
    /***/ "./src/index.tsx":
    /*!***********************!*\
      !*** ./src/index.tsx ***!
      \***********************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = __webpack_require__(/*! react */ "react");
    const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
    const react_insta_stories_1 = __webpack_require__(/*! react-insta-stories */ "./node_modules/react-insta-stories/dist/index.js");
    // import { Hello } from "./components/Hello";
    class App extends React.Component {
        render() {
            return (React.createElement(react_insta_stories_1.default, { stories: stories, defaultInterval: 2500, width: 433, height: 550 }));
        }
    }
    const stories = [
        {
            url: 'https://picsum.photos/1080/1920',
            seeMore: ({ close }) => (React.createElement("div", { style: { width: '100%', height: '100%' } }, "Hello")),
            header: {
                heading: 'Mohit Karekar',
                subheading: 'Posted 5h ago',
                profileImage: 'https://picsum.photos/1000/1000'
            }
        },
        {
            url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
            header: {
                heading: 'Mohit Karekar',
                subheading: 'Posted 32m ago',
                profileImage: 'https://picsum.photos/1080/1920'
            }
        },
        {
            url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
            header: {
                heading: 'mohitk05/react-insta-stories',
                subheading: 'Posted 32m ago',
                profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
            }
        },
        {
            url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
            type: 'video',
            duration: 1000
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            type: 'video',
            seeMore: ({ close }) => (React.createElement("div", { style: { width: '100%', height: '100%', background: "red" } }, "Hello"))
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            type: 'video'
        },
        'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
    ];
    ReactDOM.render(React.createElement(App, null), document.getElementById("example"));
    
    
    /***/ }),
    
    /***/ "react":
    /*!************************!*\
      !*** external "React" ***!
      \************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = React;
    
    /***/ }),
    
    /***/ "react-dom":
    /*!***************************!*\
      !*** external "ReactDOM" ***!
      \***************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = ReactDOM;
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=main.js.map