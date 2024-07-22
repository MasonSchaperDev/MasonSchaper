/* Copyright 2021, SiteSpect, Inc. All Rights Reserved. */
(function(y,e){var E=y.document;var T="onpagehide"in y?"pagehide":"unload";var b=y.SS||{};y.SS=b;var _=y.encodeURIComponent;b.Cookie=function(){var r="\v";function f(e,t,n,r,a,i,o){var f;if(!n||n.toString().substr(0,1)!==";"){if(!i){i="/"}if(!a){a=y.location.hostname.match(/^[\d.]+|(?:\.[\da-z\-]+)*[\da-z\-]+\.[\da-z\-]+$/i)[0]}if(a.substr(0,1)!=="."){a="."+a}r=!r?"":";secure";if(o){var s=o.toLowerCase();if(s==="lax"){o=";SameSite=Lax"}else if(s==="strict"){o=";SameSite=Strict"}else if(s==="none"&&r){o=";SameSite=None"}else{o=""}}if(n!=null){n=parseInt(n,10);if(isNaN(n)){n=0}n=";expires="+new Date(+new Date+n).toUTCString()}f=";path="+i+";domain="+a+n+o+r}else{f=n}return _(e)+"="+_(t)+f}function a(e,t){e=" "+e+"=";t=" "+t+";";var n=t.indexOf(e);if(n>=0){n+=e.length;return decodeURIComponent(t.substring(n,t.indexOf(";",n)))}return""}function i(e){return e.split(r)}function s(e){return e.join(r)}function e(e,t){if(!e){return}var n=a(e,E.cookie);if(!n){return""}if(t){t=t.substr(0,1).toLowerCase()}switch(t){case"s":return n;case"a":return i(n);default:return n.match(r)?i(n):n}}function t(e,t,n,r,a,i,o){if(!e||/^(?:expires|max-age|path|domain|secure|HttpOnly)$/i.test(e)){return}if(typeof t==="object"){t=s(t)}E.cookie=f(e,t,n,r,a,i,o)}return{get:e,set:t}}();b.JSEvents=function(){function i(e,t,n){if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,n)}}function e(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,n)}}function t(e){if(!e){e=y.event}var t=e.target||e.srcElement||E;if(t.nodeType===3){t=t.parentNode}return t}function n(e){var n=false,t=false,r,a;r=function(){if(!n){if(!E.body){return setTimeout(r,1)}n=true;e()}};if(E.addEventListener){a=function(){E.removeEventListener("DOMContentLoaded",a,false);r()};E.addEventListener("DOMContentLoaded",a,false)}else if(E.attachEvent){a=function(){if(E.readyState==="complete"){E.detachEvent("onreadystatechange",a);r()}};E.attachEvent("onreadystatechange",a);try{t=y.frameElement===null}catch(e){}if(E.documentElement.doScroll&&t){(function t(){if(n){return}try{E.documentElement.doScroll("left")}catch(e){setTimeout(t,1);return}r()})()}}i(y,"load",r)}return{on:i,off:e,trgt:t,ready:n}}();b.TimerFactory=function(){function e(){var t=-1,e=-1;function n(e){t=(e||new Date).getTime();return t>0}function r(){e=(new Date).getTime();return e>0}function a(){t=-1;e=-1}function i(){if(t<=0){throw"Failure to Start Timer"}if(e<=0){throw"Failure to Stop Timer"}if(t>e){throw"Failure to Reset Timer"}return(e-t)/1e3}return{start:n,stop:r,reset:a,diff:i}}function t(){return new e}return{get:t}}();if(!b.ssGetObjPath){var i;b.ssGetObjPath=function(){var e="/__ssobj/";if(typeof __ssaltpath!=="undefined"){return __ssaltpath}if(i){return i}var t=E.getElementsByTagName("script");var n=E.currentScript||t[t.length-1];if(n.getAttribute("ssobj")){i=n.getAttribute("ssobj");return i}var r=n.src;var a=r;if(a.match(/\/__ssobj\//)){i=e;return e}else{a=a.replace(/[^\/]*$/,"");if(a!=r){i=a;return a}}return e};b.ssGetObjPath()}if(!b.ssGetTrackPath){var r;b.ssGetTrackPath=function(){var e="track";if(typeof __ssalttrackpath!=="undefined"){return __ssalttrackpath}if(r){return r}var t=E.getElementsByTagName("script");var n=E.currentScript||t[t.length-1];if(n.getAttribute("sstrack")){r=n.getAttribute("sstrack");return r}return e};b.ssGetTrackPath()}b.EventTrack=function(){var f=y.location.host,s=y.location.protocol,u=b.ssGetObjPath()+b.ssGetTrackPath(),c=Math.floor(Math.random()*99999999),t=[],i=[],o=false;y.addEventListener(T,function(){o=true;for(var e=0;e<i.length;e++){g(i[e])}});function l(e){t.push(e)}function r(e){e+="-3";var t=E.createElement("img");t.src=e;t.id="SS.IMG"+c;t.style.width="0px";t.style.height="0px";E.body.appendChild(t);l(t)}function d(e,t){var n=(new Date).getTime()+c,r=[],a;if(typeof e==="object"){for(a=0;a<e.length;a++){e[a]="event"+a+"="+_(e[a])}e=e.join("&")}else{e="event="+_(e)}if(t&&typeof t==="object"){for(a in t){if(t.hasOwnProperty(a)){r[r.length]="value_"+_(a)+"="+_(t[a])}}t=r.join("&")}else{t="value="+_(t!==null?t:"")}var i=u+"?"+e+"&"+t+"&x="+n;var o=s!==y.location.protocol;if(p()||o){i="//"+f+i;if(o){i=s+i}}return i}function e(e){var t=e.match(/^(?:(https?:)?\/\/)?([^\/]+)/);if(!t){return}var n=t[1];var r=t[2];f=r;s=n||s}function a(e,t){var n=e+"-b";e+="-1";var r;if(y.navigator&&navigator.sendBeacon&&(o||y.event&&(y.event.type==="unload"||y.event.type==="pagehide"))){try{r=navigator.sendBeacon(n)}catch(e){r=false}}if(r){return true}var a;try{a=y.ActiveXObject?new y.ActiveXObject("Microsoft.XMLHTTP"):new y.XMLHttpRequest;a.open("GET",e,!t)}catch(e){return false}try{a.setRequestHeader("X-Requested-With","XMLHttpRequest");a.setRequestHeader("Accept","*/*")}catch(e){}try{a.send(null)}catch(e){if(e.number&65535!==1223){return false}}if(t){v(a,this)}else{a.onreadystatechange=function(){v(a,this)}}l(a);return true}function v(e,t){if(e.responseText&&e.readyState==4&&e.status==200&&ss_dom_var&&ss_dom_var.eventTrackCallback){ss_dom_var.eventTrackCallback(e.responseText)}h(e,t,0)}function h(t,n,e){if(typeof y.__ssmMetricResponseReadyChange==="undefined"&&e<10){setTimeout(function(){h(t,n,e+1)},1e3)}else{if(typeof y.__ssmMetricResponseReadyChange!=="undefined"){y.__ssmMetricResponseReadyChange.forEach(function(e){e(t,n)})}}}function m(e){e+="-2";var t=new Image;t.src=e;l(t)}function p(){return f!==y.location.host}function n(e,t,n){var r=d(e,t);var a={url:r,sync:n,ran:0};i.push(a);if(p()||o){g(a)}else{setTimeout(function(){if(!o){g(a)}},200)}return true}function g(e){if(++e.ran>1){return}var t=e.url;var n=e.sync;if(p()||!a(t,n)){if(s==="https:"){r(t)}else{m(t)}}}n.beaconPatched=true;return{metric:n,rp:n,rpAsync:function(e,t){n(e,t,false)},rpSync:function(e,t){n(e,t,true)},r:t,setDomain:e}}();b.PageTimer=function(){var a=b.JSEvents,i,o;function f(t,n){var r=false;return function(){if(o&&!r){r=true;if(i.stop()){try{var e=i.diff();if(e<=1795){b.EventTrack.rp(t,e,n)}}catch(e){}}}}}function e(e,t,n){i=b.TimerFactory.get();o=i.start(n);if(o){var r=false;if(e==="ready"){a.ready(f(t,false));r=true}else if(e==="load"){a.on(y,"load",f(t,false));r=true}else if(e==="dwell"){a.on(y,T,f(t,true));r=true}else if(e==="abandon"){unloadEvent=f(t,true);a.on(y,T,unloadEvent);a.on(y,"load",function(){a.off(y,T,unloadEvent)});r=true}return r}else{return false}}return{time:e}}();b.Debug=function(){var n=100;var r=300;var a=false;var i=false;var o=0;function e(e){if(typeof e!=="undefined"){if(typeof e.max_errors!=="undefined"){n=e.max_errors}if(typeof e.timeout!=="undefined"){r=e.timeout}if(typeof e.debug!=="undefined"){a=e.debug}}y.addEventListener("error",t,false)}function t(e){if(!i){var t=e.filename;if(t.match(/scripterror/i)){t="externaljsfile"}b.EventTrack.rp("js-error",{path:e.filename,line:e.lineno,error:e.message});o++;if(n&&o>=n){if(a){setTimeout(function(){console.info("Disabling error tracking")})}i=true;setTimeout(function(){if(a){console.info("Enabling error tracking")}i=false;o=0},r*1e3)}}}return{trackJSErrors:e}}();b.Util=function(){function r(e,t){if(Element.prototype.matches){return e.matches(t)}var n=(e.document||e.ownerDocument).querySelectorAll(t),r=n.length;while(--r>=0&&n.item(r)!==e){}return r>-1}function e(e,t){if(Element.prototype.closest){return e.closest(t)}var n=e;do{if(r(n,t))return n;n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1);return null}return{elementClosest:e,elementMatches:r}}();b.Require=b.Require||function(e){if(typeof e==="function"){if(y.SS&&b.EventTrack){e()}}}})(this);
/* Copyright 2017, SiteSpect, Inc. All Rights Reserved. */
var ss_dom_var=function(){"use strict";var p=1e3;var h=1e3;var e;var s=[];var _=null;var r=[];var t={};var m;var g;var i;var n;var b=false;var y=false;var S=false;var a=[];var o={};var u=[];var w=[];var A;var C={};var E={childList:true,attributes:true,characterData:true,subtree:true};var O="data-ss-variation-applied";var c="(?#i)";var f=function(t){var e=window.SS||{};e.getAsmtData=function(){return t};if(!e.ssGetObjPath){var a;e.ssGetObjPath=function(){var t="/__ssobj/";if(typeof __ssaltpath!=="undefined"){return __ssaltpath}if(a){return a}var e=document.getElementsByTagName("script");var r=document.currentScript||e[e.length-1];if(r.getAttribute("ssobj")){a=r.getAttribute("ssobj");return a}var n=r.src;var i=n;if(i.match(/\/__ssobj\//)){a=t;return t}else{i=i.replace(/[^\/]*$/,"");if(i!=n){a=i;return i}}return t}}if(!e.ssGetTrackPath){var n;e.ssGetTrackPath=function(){var t="track";if(typeof __ssalttrackpath!=="undefined"){return __ssalttrackpath}if(n){return n}var e=document.getElementsByTagName("script");var r=document.currentScript||e[e.length-1];if(r.getAttribute("sstrack")){n=r.getAttribute("sstrack");return n}return t}}e.ssGetObjPath();e.ssGetTrackPath();window.SS=e};f();function d(t){if(!t||SS.latestAsmtResponse===t){return}var e;try{e=JSON.parse(t)}catch(t){console.error(t.message);return}if(e.countedCampaigns){SS.latestAsmtResponse=t;var r=e.countedCampaigns.split(";");for(var n=0;n<r.length;n++){var i=r[n].split(":")[0];C[parseInt(i)]=true}}}function l(t){if(!t){return}var e=Object.keys(C);var r;try{r=JSON.parse(t)}catch(t){console.error(t.message);return}if(r){if(!Object.hasOwn(r,"countedCampaigns")){return}else if(r.countedCampaigns!=""){var n=r.countedCampaigns.split(";");if(n.length>e.length){I(t);return}else{for(var i=0;i<n.length;i++){var a=n[i].split(":")[0];if(!C[a]){I(t);return}}}}}}var v=function(){try{A=new MutationObserver(t)}catch(t){}function t(t){t.forEach(function(t){var e=n(t.target);if(!y&&document.body.contains(e)){var r=i(e);if(r){r.forEach(function(t){s(e,t)})}}});e()}function n(t){var e;var r=t;while(r){if(r.nodeType===Node.ELEMENT_NODE){e=e||r;if(r.getAttribute(O)||w.indexOf(t)>-1){return r}}r=r.parentNode}return e}function e(){w.forEach(function(t,e){if(!document.querySelector("["+O+'="'+e+'"]')){delete w[e];delete u[e]}})}function c(t,e){t.innerHTML=e}function f(e,r){Object.keys(r).forEach(function(t){e.style[t]=r[t]})}function d(e,r){Object.keys(r).forEach(function(t){e.setAttribute(t,r[t])})}function l(t,e,r,n){if(typeof n==="string"){n=parseInt(n)}var i=null;var a="data-ss-v"+r+"-apply-once-restriction";if(n){i=t.getAttribute(a)}if(i===null){try{e.apply(t)}catch(t){return false}if(n){t.setAttribute(a,true)}}}function r(t){if(!t.selector){return 0}if(!m(t)){return 0}var e=document.querySelectorAll(t.selector);var r=0;var n;for(n=0;n<e.length;n++){if(b&&typeof __ssedit!=="undefined"&&__ssedit.isVEContent(e[n])){continue}r+=a(e[n],t)}return r}function i(t){var e=t.getAttribute(O);if(e===null){e=w.indexOf(t);if(e===-1){e=w.length;w[e]=t;if(A&&!y){A.observe(t,E)}}t.setAttribute(O,e)}var r=u[e];if(!r){r=u[e]=[]}return r}function a(t,e){var r=i(t);if(r.indexOf(e)===-1){r.push(e);return s(t,e)}return 0}function s(e,t){if(!m(t)){return}var r;var n=(new Date).getTime();var i=0;if(S){return}while(i<t.applied.length&&t.applied[i]+h<n){i++}t.applied.push(n);if(i){t.applied.splice(0,i)}if(t.applied.length>=p){console.warn("Possible infinite loop detected, aborting");return 0}if(b){r=e.ss_revert||e.cloneNode(true)}if(t.html){c(e,t.html)}if(t.css){f(e,t.css)}if(t.attributes){d(e,t.attributes)}if(t.custom){l(e,t.custom,t.id,t.csf_apply_once)}if(!t.counted&&t.trigger_counted&&!C[t.campaign_id]){t.counted=true;C[t.campaign_id]=true;g({handler:I,payload:C,target_domain:_})}v(t.id,1);if(e.hasAttribute("data-sspvid")){var a=document.querySelector(t.selector);if(t.custom&&!a&&t.attributes&&t.attributes["data-sspvid"]){a=document.querySelector('[data-sspvid="'+t.attributes["data-sspvid"]+'"]')}if(a){if(t.custom){var s=["data-sspvid","data-ss-sole-change","data-sspv-control","data-ss-fe-edit-type","data-ss-display-name","data-ss-orig-order","data-ssmid","data-ss-metric-name"];s.forEach(function(t){if(e.hasAttribute(t)){a.setAttribute(t,e.getAttribute(t))}});var o=Array.prototype.slice.call(e.attributes).filter(function(t){return t.name.match(/^data-ss-(?:control-)?reference-node-/)});o.forEach(function(t){a.setAttribute(t.name,t.value)})}if(b){if(r){a.ss_revert=r}if(typeof __ssedit!=="undefined"){__ssedit.outlineEdited(a)}}if(!a.hasAttribute(O)&&e.hasAttribute(O)){a.setAttribute(O,e.getAttribute(O));var u=w.indexOf(e);if(u>-1){w[u]=a}if(A&&!y){A.observe(a,E)}}}}else if(e.hasAttribute("data-ssmid")&&b){if(typeof __ssedit!=="undefined"){__ssedit.outlineEdited(e)}}if(A){A.takeRecords()}return 1}function v(t,e){o[t]=o[t]||0;o[t]+=e;var r="#ssp_history_panel .ss_csf_applied_"+t;var n=document.querySelectorAll(r);for(var i=0;i<n.length;i++){if(o[t]){n[i].style.display="block"}else{n[i].style.display="none"}}}return r}();function T(t){if(!(t instanceof Array)){t=s}var e=t.map(v).reduce(function(t,e){return t+e},0);return e}function k(t){return!!(t&&t.match(/\(\?#[^)]+_ss-invert\)/))}function N(t){return t.replace(/\(\?#[^)]*\)/g,"")}function M(t){var e=t.indexOf(c)!==-1?"i":"";var r=N(t);return new RegExp(r,e)}function R(t){return typeof t!=="undefined"&&t!==null}m=function(){function a(t){try{return t.script_criterion()}catch(t){return false}}function s(t){var e=!!document.location.hash.match(M(t.hash_criterion));if(k(t.hash_criterion)){e=!e}return e}function o(t){var e=document.location.hash.indexOf("?")+1,r=[""];if(e){r=document.location.hash.substring(e).split("&")}return n(t.hashquery_name_criterion,t.hashquery_value_criterion,r)}function u(t){var e=!!document.location.pathname.match(M(t.path_criterion));if(k(t.path_criterion)){e=!e}return e}function c(t){var e=document.location.search.substring(1).split("&");return n(t.query_name_criterion,t.query_value_criterion,e)}function n(t,e,r){var n=k(t);var i=!n;var a=k(e);var s=!a;var o=n||a;var u=n&&a;var c=M(t);var f=M(e);var d;var l;var v;var p=r.forEach(function(t){var e=t.split("=");var r=e.shift();var n=e.join("=");var i=r.match(c);var a=n.match(f);d=d||i;l=l||a;v=v||i&&a});if(i&&s){return v}else if(n&&s){return l&&!d}else if(i&&a){return!v}else{return!d&&!l}}return function(t){var e,r,n={Path:u,Hash:s,Query:c,HashQuery:o,Custom:a};var i=false;for(e=0;e<t.criteria.length;e++){r=t.criteria[e];if(R(r.GroupNumber)&&i&&R(r.Pre)&&R(t.criteria[r.Pre])&&r.GroupNumber===t.criteria[r.Pre].GroupNumber){continue}i=n[r.Type]&&n[r.Type](r);if(!i){if(!(R(r.GroupNumber)&&R(r.Next)&&R(t.criteria[r.Next])&&r.GroupNumber===t.criteria[r.Next].GroupNumber)){return false}}}return true}}();g=j({target:SS.ssGetObjPath()+"asmt_update"});i=j({target:SS.ssGetObjPath()+"api",alterRequest:function(t){t.setRequestHeader("X-SiteSpect-CSM-Url",window.location.href)}});function j(t){t=t||{};var n=t.target;var i=t.alterRequest;var e;var r=100;var a;var s;var o;function u(){d();var t=JSON.stringify(a),e=new XMLHttpRequest;if(o){o=o.replace(/\/$/,"")}var r=o?o+n:n;e.open("POST",r);if(i){i(e)}e.setRequestHeader("Content-Type","application/json;charset=UTF-8");e.withCredentials=true;e.addEventListener("load",c,false);e.send(t)}function c(t){var e;try{e=JSON.parse(t.target.response);if(typeof s==="function"){s(e,this)}q(e,0)}catch(t){}}function f(t){if(t&&e){d()}else if(e){return}e=setTimeout(u,r)}function d(){clearTimeout(e);e=null}return function(t){s=t.handler;a=t.payload;o=t.target_domain;if(!e){f()}}}function q(e,t){if(typeof window.__sscCSFCountStatusChange==="undefined"&&t<5){setTimeout(function(){q(e,t+1)},1e3)}else{if(typeof window.__sscCSFCountStatusChange!=="undefined"){window.__sscCSFCountStatusChange.forEach(function(t){t(e)})}}}function P(t){setTimeout(function(){y=!!t.is_ve_edit_mode},5e3)}function G(){window.SSpauseCSF=0;if(e&&!s.length){s=e.variations||s;t=e.timestamps||t;P(e);b=!!e.is_ve_edit_mode;_=e.current_domain;s.forEach(function(t){t.applied=t.applied||[]});a.forEach(function(t){t(s)})}}function x(){if(window.SSpauseCSF){setTimeout(x)}else{G()}}function V(t){if(typeof e==="undefined"&&typeof t!=="undefined"&&!s.length){e=t;x()}}function L(t){r=t?t.metrics||r:r}function H(t){a.push(t);t(s)}function D(t){return o[t]||0}function F(t){n=t}function I(t){d(t);if(typeof n!=="function"){n=f}n(t)}V(window.__ss_variations);L(window.__ss_variations);document.addEventListener("ready",function(){if(!s.length){V(window.__ss_variations)}if(!r.length){L(window.__ss_variations)}},false);function J(){if(b){S=true}}function U(){if(b){S=false}}function B(t){var r=t.identifying_attr_key;var n=t.identifying_attr_val;var i=t.identifying_script_content_regex;var a=t.new_selector;if(!b){return}Object.keys(s).forEach(function(t){var e=s[t];if(r&&e.attributes&&e.attributes[r]&&e.attributes[r]===n||i&&e.custom&&e.custom.toString().match(i)){e.selector=a}})}function Q(r){var t=true;if(s.length&&!y){var n=r.getAttribute("data-sspvid");if(n){t=s.some(function(t){if(t.attributes&&t.attributes["data-sspvid"]===n){var e=r.getAttribute("data-ss-fe-edit-type")==="frontend_order";return!t.custom||e}})}}return t}function W(t){var e=[];var r={visits:[{AsmtCounted:[],Data:{}}]};t.forEach(function(t){r.visits[0].Data[t.id]={Hits:1};if(t.trigger_counting){t.vg_ids.forEach(function(t){if(e.indexOf(t)<=-1){e.push(t)}})}});if(e.length>0){r.visits[0].AsmtCounted=e}return r}function X(){var e=[];var n=false;r.forEach(function(t){if(m(t)){e.push(t);if(t.trigger_counting&&t.tc_ids&&t.tc_ids instanceof Array){t.tc_ids.forEach(function(t){if(!C[t]){C[t]=true;n=true}})}}});if(e.length>0){i({handler:function(t,e){if(n){g({handler:I,target_domain:_})}function r(e,t){if(typeof window.__ssmCSMetricResponseReadyChange==="undefined"&&t<5){setTimeout(function(){r(e,t+1)},1e3)}else{if(typeof window.__ssmCSMetricResponseReadyChange!=="undefined"){window.__ssmCSMetricResponseReadyChange.forEach(function(t){t(e.getResponseHeader("SiteSpect-Metrics-Info"))})}}}r(e,0)},payload:W(e),target_domain:_})}}return{applyVariations:T,applySingleVariation:v,setVariations:V,setMetrics:L,registerVariationWatcher:H,checkVariationApplied:D,setAsmtCallback:F,delegateAsmtCallback:I,eventTrackCallback:l,pauseVariations:J,unpauseVariations:U,updateVariationSelector:B,isSafeToEdit:Q,evaluateMetrics:X,runVariations:G}}();(function(){"use strict";function e(e){var t={childList:true,attributes:true,subtree:true};var r;var n;var i;var a=e.callback;var s=document.querySelector("html");if(s){if(window.MutationObserver){n=new MutationObserver(c);r=s;i=n.observe.bind(n,r,t);i()}else{o(s)}}function o(t){t.addEventListener("DOMSubtreeModified",f,false)}function u(t){t.removeEventListener("DOMSubtreeModified",f,false)}function c(){if(n){n.disconnect()}var t=document.querySelectorAll(e.selector);if(t.length>0){a()}if(i){i()}}function f(){u(s);c();o(s)}}ss_dom_var.registerVariationWatcher(function(t){t.forEach(function(t){e({selector:t.selector,callback:ss_dom_var.applySingleVariation.bind(ss_dom_var,t)})})});var t=null;setInterval(function(){if(t===null||t!==window.location.href){t=window.location.href;ss_dom_var.evaluateMetrics()}},500)})();
/* Copyright 2016, SiteSpect, Inc. All Rights Reserved. */
if(!window.SS){window.SS={}}SS.SPA=function(){"use strict";var n=1;var i=document.querySelectorAll.bind(document);function t(t){var o={childList:true,attributes:true};var c;var u;var f="ss-modified-"+n++;var s=e.bind(null,t.dynamicContainer,f);var d;var l=t.callback||t.callbackFunction;if(i(t.staticContainer).length>0){if(window.MutationObserver){if(t.watchSubtree){o.subtree=true}u=new MutationObserver(S);c=i(t.staticContainer)[0];d=u.observe.bind(u,c,o);d()}else{a(i(t.staticContainer),v)}if(t.runCallbackNow){l()}}function v(n){n.addEventListener("DOMSubtreeModified",w,false)}function b(n){n.removeEventListener("DOMSubtreeModified",w,false)}function S(){if(u){u.disconnect()}var n=s(true);if(n.length>0){a(n,r.bind(null,f));l()}if(d){d()}}function w(){a(i(t.staticContainer),b);S();a(i(t.staticContainer),v)}}function e(n,t,e){var a=[n];if(e){a.push(":not(."+t+")")}return i(a.join(""))}function a(n,i){[].forEach.call(n,i)}function r(n,i){if(i.className.indexOf(n)===-1){i.className+=" "+n}}return{dynamicModify:t}}();