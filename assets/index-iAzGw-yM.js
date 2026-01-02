(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oa={exports:{}},gl={},aa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Cc=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),zc=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),_c=Symbol.for("react.memo"),Rc=Symbol.for("react.lazy"),Gs=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var ua={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ca=Object.assign,da={};function yn(e,t,n){this.props=e,this.context=t,this.refs=da,this.updater=n||ua}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fa(){}fa.prototype=yn.prototype;function Zi(e,t,n){this.props=e,this.context=t,this.refs=da,this.updater=n||ua}var es=Zi.prototype=new fa;es.constructor=Zi;ca(es,yn.prototype);es.isPureReactComponent=!0;var Ys=Array.isArray,pa=Object.prototype.hasOwnProperty,ts={current:null},ma={key:!0,ref:!0,__self:!0,__source:!0};function ha(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)pa.call(t,r)&&!ma.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:sr,type:e,key:i,ref:o,props:l,_owner:ts.current}}function Dc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ns(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Oc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Js=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oc(""+e.key):t.toString(36)}function Mr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case Cc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Rl(o,0):r,Ys(l)?(n="",e!=null&&(n=e.replace(Js,"$&/")+"/"),Mr(l,t,n,"",function(f){return f})):l!=null&&(ns(l)&&(l=Dc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Js,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ys(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Rl(i,a);o+=Mr(i,t,n,u,l)}else if(u=Lc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Rl(i,a++),o+=Mr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,t,n){if(e==null)return e;var r=[],l=0;return Mr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Uc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},_r={transition:null},Ac={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:_r,ReactCurrentOwner:ts};function ga(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!ns(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=yn;L.Fragment=Pc;L.Profiler=Tc;L.PureComponent=Zi;L.StrictMode=bc;L.Suspense=Mc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;L.act=ga;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ca({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ts.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)pa.call(t,u)&&!ma.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:sr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ec,_context:e},e.Consumer=e};L.createElement=ha;L.createFactory=function(e){var t=ha.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Ic,render:e}};L.isValidElement=ns;L.lazy=function(e){return{$$typeof:Rc,_payload:{_status:-1,_result:e},_init:Uc}};L.memo=function(e,t){return{$$typeof:_c,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};L.unstable_act=ga;L.useCallback=function(e,t){return me.current.useCallback(e,t)};L.useContext=function(e){return me.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return me.current.useDeferredValue(e)};L.useEffect=function(e,t){return me.current.useEffect(e,t)};L.useId=function(){return me.current.useId()};L.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return me.current.useMemo(e,t)};L.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};L.useRef=function(e){return me.current.useRef(e)};L.useState=function(e){return me.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return me.current.useTransition()};L.version="18.3.1";aa.exports=L;var I=aa.exports;const Fc=Nc(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=I,Wc=Symbol.for("react.element"),$c=Symbol.for("react.fragment"),Vc=Object.prototype.hasOwnProperty,Hc=Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qc={key:!0,ref:!0,__self:!0,__source:!0};function xa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Vc.call(t,r)&&!Qc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Wc,type:e,key:i,ref:o,props:l,_owner:Hc.current}}gl.Fragment=$c;gl.jsx=xa;gl.jsxs=xa;oa.exports=gl;var s=oa.exports,si={},va={exports:{}},Ce={},ya={exports:{}},ka={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var R=E.length;E.push(_);e:for(;0<R;){var G=R-1>>>1,te=E[G];if(0<l(te,_))E[G]=_,E[R]=te,R=G;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],R=E.pop();if(R!==_){E[0]=R;e:for(var G=0,te=E.length,pr=te>>>1;G<pr;){var Pt=2*(G+1)-1,_l=E[Pt],bt=Pt+1,mr=E[bt];if(0>l(_l,R))bt<te&&0>l(mr,_l)?(E[G]=mr,E[bt]=R,G=bt):(E[G]=_l,E[Pt]=R,G=Pt);else if(bt<te&&0>l(mr,R))E[G]=mr,E[bt]=R,G=bt;else break e}}return _}function l(E,_){var R=E.sortIndex-_.sortIndex;return R!==0?R:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],f=[],m=1,g=null,h=3,k=!1,w=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var _=n(f);_!==null;){if(_.callback===null)r(f);else if(_.startTime<=E)r(f),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(f)}}function y(E){if(x=!1,p(E),!w)if(n(u)!==null)w=!0,Ct(C);else{var _=n(f);_!==null&&Ml(y,_.startTime-E)}}function C(E,_){w=!1,x&&(x=!1,c(v),v=-1),k=!0;var R=h;try{for(p(_),g=n(u);g!==null&&(!(g.expirationTime>_)||E&&!B());){var G=g.callback;if(typeof G=="function"){g.callback=null,h=g.priorityLevel;var te=G(g.expirationTime<=_);_=e.unstable_now(),typeof te=="function"?g.callback=te:g===n(u)&&r(u),p(_)}else r(u);g=n(u)}if(g!==null)var pr=!0;else{var Pt=n(f);Pt!==null&&Ml(y,Pt.startTime-_),pr=!1}return pr}finally{g=null,h=R,k=!1}}var P=!1,T=null,v=-1,S=5,z=-1;function B(){return!(e.unstable_now()-z<S)}function de(){if(T!==null){var E=e.unstable_now();z=E;var _=!0;try{_=T(!0,E)}finally{_?M():(P=!1,T=null)}}else P=!1}var M;if(typeof d=="function")M=function(){d(de)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,A=D.port2;D.port1.onmessage=de,M=function(){A.postMessage(null)}}else M=function(){N(de,0)};function Ct(E){T=E,P||(P=!0,M())}function Ml(E,_){v=N(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Ct(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var R=h;h=_;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return _()}finally{h=R}},e.unstable_scheduleCallback=function(E,_,R){var G=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,E){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,E={id:m++,callback:_,priorityLevel:E,startTime:R,expirationTime:te,sortIndex:-1},R>G?(E.sortIndex=R,t(f,E),n(u)===null&&E===n(f)&&(x?(c(v),v=-1):x=!0,Ml(y,R-G))):(E.sortIndex=te,t(u,E),w||k||(w=!0,Ct(C))),E},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(E){var _=h;return function(){var R=h;h=_;try{return E.apply(this,arguments)}finally{h=R}}}})(ka);ya.exports=ka;var Kc=ya.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=I,Ne=Kc;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wa=new Set,$n={};function Ft(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for($n[e]=t,e=0;e<t.length;e++)wa.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zs={},eo={};function Gc(e){return oi.call(eo,e)?!0:oi.call(Zs,e)?!1:qc.test(e)?eo[e]=!0:(Zs[e]=!0,!1)}function Yc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jc(e,t,n,r){if(t===null||typeof t>"u"||Yc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var rs=/[\-:]([a-z])/g;function ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rs,ls);se[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rs,ls);se[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rs,ls);se[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function is(e,t,n,r){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jc(t,n,l,r)&&(n=null),r||l===null?Gc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),Sa=Symbol.for("react.provider"),ja=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Na=Symbol.for("react.offscreen"),to=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=to&&e[to]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ll;function zn(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Dl=!1;function Ol(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function Zc(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case $t:return"Portal";case ai:return"Profiler";case ss:return"StrictMode";case ui:return"Suspense";case ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ja:return(e.displayName||"Context")+".Consumer";case Sa:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:di(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return di(e(t))}catch{}}return null}function ed(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return di(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ca(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function td(e){var t=Ca(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=td(e))}function Pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ca(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function no(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ba(e,t){t=t.checked,t!=null&&is(e,"checked",t,!1)}function pi(e,t){ba(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&mi(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ro(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mi(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(In(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Ta(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function io(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ea(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ea(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,za=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){nd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ia(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ia(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var rd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,nn=null,rn=null;function so(e){if(e=ur(e)){if(typeof ki!="function")throw Error(j(280));var t=e.stateNode;t&&(t=wl(t),ki(e.stateNode,e.type,t))}}function _a(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Ra(){if(nn){var e=nn,t=rn;if(rn=nn=null,so(e),t)for(e=0;e<t.length;e++)so(t[e])}}function La(e,t){return e(t)}function Da(){}var Ul=!1;function Oa(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return La(e,t,n)}finally{Ul=!1,(nn!==null||rn!==null)&&(Da(),Ra())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var wi=!1;if(Je)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{wi=!1}function ld(e,t,n,r,l,i,o,a,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Ln=!1,Hr=null,Qr=!1,Si=null,id={onError:function(e){Ln=!0,Hr=e}};function sd(e,t,n,r,l,i,o,a,u){Ln=!1,Hr=null,ld.apply(id,arguments)}function od(e,t,n,r,l,i,o,a,u){if(sd.apply(this,arguments),Ln){if(Ln){var f=Hr;Ln=!1,Hr=null}else throw Error(j(198));Qr||(Qr=!0,Si=f)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ua(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oo(e){if(Bt(e)!==e)throw Error(j(188))}function ad(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return oo(l),e;if(i===r)return oo(l),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Aa(e){return e=ad(e),e!==null?Fa(e):null}function Fa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fa(e);if(t!==null)return t;e=e.sibling}return null}var Ba=Ne.unstable_scheduleCallback,ao=Ne.unstable_cancelCallback,ud=Ne.unstable_shouldYield,cd=Ne.unstable_requestPaint,Y=Ne.unstable_now,dd=Ne.unstable_getCurrentPriorityLevel,cs=Ne.unstable_ImmediatePriority,Wa=Ne.unstable_UserBlockingPriority,Kr=Ne.unstable_NormalPriority,fd=Ne.unstable_LowPriority,$a=Ne.unstable_IdlePriority,xl=null,He=null;function pd(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:gd,md=Math.log,hd=Math.LN2;function gd(e){return e>>>=0,e===0?32:31-(md(e)/hd|0)|0}var yr=64,kr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Mn(a):(i&=o,i!==0&&(r=Mn(i)))}else o=n&~l,o!==0?r=Mn(o):i!==0&&(r=Mn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function xd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=xd(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Va(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Ha(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qa,fs,Ka,Xa,qa,Ni=!1,wr=[],dt=null,ft=null,pt=null,Qn=new Map,Kn=new Map,ot=[],kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uo(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Nn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ur(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wd(e,t,n,r,l){switch(t){case"focusin":return dt=Nn(dt,e,t,n,r,l),!0;case"dragenter":return ft=Nn(ft,e,t,n,r,l),!0;case"mouseover":return pt=Nn(pt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Qn.set(i,Nn(Qn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Kn.set(i,Nn(Kn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ga(e){var t=zt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ua(n),t!==null){e.blockedOn=t,qa(e.priority,function(){Ka(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=ur(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function co(e,t,n){Rr(e)&&n.delete(t)}function Sd(){Ni=!1,dt!==null&&Rr(dt)&&(dt=null),ft!==null&&Rr(ft)&&(ft=null),pt!==null&&Rr(pt)&&(pt=null),Qn.forEach(co),Kn.forEach(co)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Sd)))}function Xn(e){function t(l){return Cn(l,e)}if(0<wr.length){Cn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Cn(dt,e),ft!==null&&Cn(ft,e),pt!==null&&Cn(pt,e),Qn.forEach(t),Kn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Ga(n),n.blockedOn===null&&ot.shift()}var ln=rt.ReactCurrentBatchConfig,qr=!0;function jd(e,t,n,r){var l=F,i=ln.transition;ln.transition=null;try{F=1,ps(e,t,n,r)}finally{F=l,ln.transition=i}}function Nd(e,t,n,r){var l=F,i=ln.transition;ln.transition=null;try{F=4,ps(e,t,n,r)}finally{F=l,ln.transition=i}}function ps(e,t,n,r){if(qr){var l=Ci(e,t,n,r);if(l===null)ql(e,t,r,Gr,n),uo(e,r);else if(wd(l,e,t,n,r))r.stopPropagation();else if(uo(e,r),t&4&&-1<kd.indexOf(e)){for(;l!==null;){var i=ur(l);if(i!==null&&Qa(i),i=Ci(e,t,n,r),i===null&&ql(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ql(e,t,r,null,n)}}var Gr=null;function Ci(e,t,n,r){if(Gr=null,e=us(r),e=zt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ua(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Ya(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dd()){case cs:return 1;case Wa:return 4;case Kr:case fd:return 16;case $a:return 536870912;default:return 16}default:return 16}}var ut=null,ms=null,Lr=null;function Ja(){if(Lr)return Lr;var e,t=ms,n=t.length,r,l="value"in ut?ut.value:ut.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function fo(){return!1}function Pe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:fo,this.isPropagationStopped=fo,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hs=Pe(kn),ar=X({},kn,{view:0,detail:0}),Cd=Pe(ar),Fl,Bl,Pn,vl=X({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Fl=e.screenX-Pn.screenX,Bl=e.screenY-Pn.screenY):Bl=Fl=0,Pn=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),po=Pe(vl),Pd=X({},vl,{dataTransfer:0}),bd=Pe(Pd),Td=X({},ar,{relatedTarget:0}),Wl=Pe(Td),Ed=X({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),zd=Pe(Ed),Id=X({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Md=Pe(Id),_d=X({},kn,{data:0}),mo=Pe(_d),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dd[e])?!!t[e]:!1}function gs(){return Od}var Ud=X({},ar,{key:function(e){if(e.key){var t=Rd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ad=Pe(Ud),Fd=X({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ho=Pe(Fd),Bd=X({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),Wd=Pe(Bd),$d=X({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=Pe($d),Hd=X({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qd=Pe(Hd),Kd=[9,13,27,32],xs=Je&&"CompositionEvent"in window,Dn=null;Je&&"documentMode"in document&&(Dn=document.documentMode);var Xd=Je&&"TextEvent"in window&&!Dn,Za=Je&&(!xs||Dn&&8<Dn&&11>=Dn),go=" ",xo=!1;function eu(e,t){switch(e){case"keyup":return Kd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function qd(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(xo=!0,go);case"textInput":return e=t.data,e===go&&xo?null:e;default:return null}}function Gd(e,t){if(Ht)return e==="compositionend"||!xs&&eu(e,t)?(e=Ja(),Lr=ms=ut=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Za&&t.locale!=="ko"?null:t.data;default:return null}}var Yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yd[e.type]:t==="textarea"}function nu(e,t,n,r){_a(r),t=Yr(t,"onChange"),0<t.length&&(n=new hs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,qn=null;function Jd(e){pu(e,0)}function yl(e){var t=Xt(e);if(Pa(t))return e}function Zd(e,t){if(e==="change")return t}var ru=!1;if(Je){var $l;if(Je){var Vl="oninput"in document;if(!Vl){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),Vl=typeof yo.oninput=="function"}$l=Vl}else $l=!1;ru=$l&&(!document.documentMode||9<document.documentMode)}function ko(){On&&(On.detachEvent("onpropertychange",lu),qn=On=null)}function lu(e){if(e.propertyName==="value"&&yl(qn)){var t=[];nu(t,qn,e,us(e)),Oa(Jd,t)}}function ef(e,t,n){e==="focusin"?(ko(),On=t,qn=n,On.attachEvent("onpropertychange",lu)):e==="focusout"&&ko()}function tf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(qn)}function nf(e,t){if(e==="click")return yl(t)}function rf(e,t){if(e==="input"||e==="change")return yl(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:lf;function Gn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oi.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function wo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function So(e,t){var n=wo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wo(n)}}function iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function su(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sf(e){var t=su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&iu(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=So(n,i);var o=So(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=Je&&"documentMode"in document&&11>=document.documentMode,Qt=null,Pi=null,Un=null,bi=!1;function jo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bi||Qt==null||Qt!==Vr(r)||(r=Qt,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Gn(Un,r)||(Un=r,r=Yr(Pi,"onSelect"),0<r.length&&(t=new hs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Hl={},ou={};Je&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function kl(e){if(Hl[e])return Hl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Hl[e]=t[n];return e}var au=kl("animationend"),uu=kl("animationiteration"),cu=kl("animationstart"),du=kl("transitionend"),fu=new Map,No="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){fu.set(e,t),Ft(t,[e])}for(var Ql=0;Ql<No.length;Ql++){var Kl=No[Ql],af=Kl.toLowerCase(),uf=Kl[0].toUpperCase()+Kl.slice(1);St(af,"on"+uf)}St(au,"onAnimationEnd");St(uu,"onAnimationIteration");St(cu,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(du,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Co(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,od(r,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,f=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;Co(l,a,f),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,f=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;Co(l,a,f),i=u}}}if(Qr)throw e=Si,Qr=!1,Si=null,e}function $(e,t){var n=t[Mi];n===void 0&&(n=t[Mi]=new Set);var r=e+"__bubble";n.has(r)||(mu(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),mu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[Nr]){e[Nr]=!0,wa.forEach(function(n){n!=="selectionchange"&&(cf.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Xl("selectionchange",!1,t))}}function mu(e,t,n,r){switch(Ya(t)){case 1:var l=jd;break;case 4:l=Nd;break;default:l=ps}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=zt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Oa(function(){var f=i,m=us(n),g=[];e:{var h=fu.get(e);if(h!==void 0){var k=hs,w=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":k=Ad;break;case"focusin":w="focus",k=Wl;break;case"focusout":w="blur",k=Wl;break;case"beforeblur":case"afterblur":k=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Wd;break;case au:case uu:case cu:k=zd;break;case du:k=Vd;break;case"scroll":k=Cd;break;case"wheel":k=Qd;break;case"copy":case"cut":case"paste":k=Md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ho}var x=(t&4)!==0,N=!x&&e==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var d=f,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,c!==null&&(y=Hn(d,c),y!=null&&x.push(Jn(d,y,p)))),N)break;d=d.return}0<x.length&&(h=new k(h,w,null,n,m),g.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==yi&&(w=n.relatedTarget||n.fromElement)&&(zt(w)||w[Ze]))break e;if((k||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=f,w=w?zt(w):null,w!==null&&(N=Bt(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=f),k!==w)){if(x=po,y="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=ho,y="onPointerLeave",c="onPointerEnter",d="pointer"),N=k==null?h:Xt(k),p=w==null?h:Xt(w),h=new x(y,d+"leave",k,n,m),h.target=N,h.relatedTarget=p,y=null,zt(m)===f&&(x=new x(c,d+"enter",w,n,m),x.target=p,x.relatedTarget=N,y=x),N=y,k&&w)t:{for(x=k,c=w,d=0,p=x;p;p=Wt(p))d++;for(p=0,y=c;y;y=Wt(y))p++;for(;0<d-p;)x=Wt(x),d--;for(;0<p-d;)c=Wt(c),p--;for(;d--;){if(x===c||c!==null&&x===c.alternate)break t;x=Wt(x),c=Wt(c)}x=null}else x=null;k!==null&&Po(g,h,k,x,!1),w!==null&&N!==null&&Po(g,N,w,x,!0)}}e:{if(h=f?Xt(f):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var C=Zd;else if(vo(h))if(ru)C=rf;else{C=tf;var P=ef}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=nf);if(C&&(C=C(e,f))){nu(g,C,n,m);break e}P&&P(e,h,f),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&mi(h,"number",h.value)}switch(P=f?Xt(f):window,e){case"focusin":(vo(P)||P.contentEditable==="true")&&(Qt=P,Pi=f,Un=null);break;case"focusout":Un=Pi=Qt=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,jo(g,n,m);break;case"selectionchange":if(of)break;case"keydown":case"keyup":jo(g,n,m)}var T;if(xs)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ht?eu(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Za&&n.locale!=="ko"&&(Ht||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ht&&(T=Ja()):(ut=m,ms="value"in ut?ut.value:ut.textContent,Ht=!0)),P=Yr(f,v),0<P.length&&(v=new mo(v,e,null,n,m),g.push({event:v,listeners:P}),T?v.data=T:(T=tu(n),T!==null&&(v.data=T)))),(T=Xd?qd(e,n):Gd(e,n))&&(f=Yr(f,"onBeforeInput"),0<f.length&&(m=new mo("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:f}),m.data=T))}pu(g,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Hn(e,n),i!=null&&r.unshift(Jn(e,i,l)),i=Hn(e,t),i!=null&&r.push(Jn(e,i,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Po(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,f=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&f!==null&&(a=f,l?(u=Hn(n,i),u!=null&&o.unshift(Jn(n,u,a))):l||(u=Hn(n,i),u!=null&&o.push(Jn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var df=/\r\n?/g,ff=/\u0000|\uFFFD/g;function bo(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(ff,"")}function Cr(e,t,n){if(t=bo(t),bo(e)!==t&&n)throw Error(j(425))}function Jr(){}var Ti=null,Ei=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ii=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,To=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof To<"u"?function(e){return To.resolve(null).then(e).catch(hf)}:Ii;function hf(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+wn,Zn="__reactProps$"+wn,Ze="__reactContainer$"+wn,Mi="__reactEvents$"+wn,gf="__reactListeners$"+wn,xf="__reactHandles$"+wn;function zt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eo(e);e!==null;){if(n=e[Ve])return n;e=Eo(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function wl(e){return e[Zn]||null}var _i=[],qt=-1;function jt(e){return{current:e}}function V(e){0>qt||(e.current=_i[qt],_i[qt]=null,qt--)}function W(e,t){qt++,_i[qt]=e.current,e.current=t}var kt={},ce=jt(kt),ve=jt(!1),Lt=kt;function un(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function Zr(){V(ve),V(ce)}function zo(e,t,n){if(ce.current!==kt)throw Error(j(168));W(ce,t),W(ve,n)}function hu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,ed(e)||"Unknown",l));return X({},n,r)}function el(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Lt=ce.current,W(ce,e),W(ve,ve.current),!0}function Io(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=hu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,V(ve),V(ce),W(ce,e)):V(ve),W(ve,n)}var Xe=null,Sl=!1,Yl=!1;function gu(e){Xe===null?Xe=[e]:Xe.push(e)}function vf(e){Sl=!0,gu(e)}function Nt(){if(!Yl&&Xe!==null){Yl=!0;var e=0,t=F;try{var n=Xe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Sl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),Ba(cs,Nt),l}finally{F=t,Yl=!1}}return null}var Gt=[],Yt=0,tl=null,nl=0,be=[],Te=0,Dt=null,qe=1,Ge="";function Tt(e,t){Gt[Yt++]=nl,Gt[Yt++]=tl,tl=e,nl=t}function xu(e,t,n){be[Te++]=qe,be[Te++]=Ge,be[Te++]=Dt,Dt=e;var r=qe;e=Ge;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,qe=1<<32-Ue(t)+l|n<<l|r,Ge=i+e}else qe=1<<i|n<<l|r,Ge=e}function ys(e){e.return!==null&&(Tt(e,1),xu(e,1,0))}function ks(e){for(;e===tl;)tl=Gt[--Yt],Gt[Yt]=null,nl=Gt[--Yt],Gt[Yt]=null;for(;e===Dt;)Dt=be[--Te],be[Te]=null,Ge=be[--Te],be[Te]=null,qe=be[--Te],be[Te]=null}var je=null,Se=null,H=!1,Oe=null;function vu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Se=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:qe,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Se=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Li(e){if(H){var t=Se;if(t){var n=t;if(!Mo(e,t)){if(Ri(e))throw Error(j(418));t=mt(n.nextSibling);var r=je;t&&Mo(e,t)?vu(r,n):(e.flags=e.flags&-4097|2,H=!1,je=e)}}else{if(Ri(e))throw Error(j(418));e.flags=e.flags&-4097|2,H=!1,je=e}}}function _o(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Pr(e){if(e!==je)return!1;if(!H)return _o(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=Se)){if(Ri(e))throw yu(),Error(j(418));for(;t;)vu(e,t),t=mt(t.nextSibling)}if(_o(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=je?mt(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=Se;e;)e=mt(e.nextSibling)}function cn(){Se=je=null,H=!1}function ws(e){Oe===null?Oe=[e]:Oe.push(e)}var yf=rt.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ro(e){var t=e._init;return t(e._payload)}function ku(e){function t(c,d){if(e){var p=c.deletions;p===null?(c.deletions=[d],c.flags|=16):p.push(d)}}function n(c,d){if(!e)return null;for(;d!==null;)t(c,d),d=d.sibling;return null}function r(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function l(c,d){return c=vt(c,d),c.index=0,c.sibling=null,c}function i(c,d,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<d?(c.flags|=2,d):p):(c.flags|=2,d)):(c.flags|=1048576,d)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,d,p,y){return d===null||d.tag!==6?(d=li(p,c.mode,y),d.return=c,d):(d=l(d,p),d.return=c,d)}function u(c,d,p,y){var C=p.type;return C===Vt?m(c,d,p.props.children,y,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Ro(C)===d.type)?(y=l(d,p.props),y.ref=bn(c,d,p),y.return=c,y):(y=$r(p.type,p.key,p.props,null,c.mode,y),y.ref=bn(c,d,p),y.return=c,y)}function f(c,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ii(p,c.mode,y),d.return=c,d):(d=l(d,p.children||[]),d.return=c,d)}function m(c,d,p,y,C){return d===null||d.tag!==7?(d=Rt(p,c.mode,y,C),d.return=c,d):(d=l(d,p),d.return=c,d)}function g(c,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=li(""+d,c.mode,p),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return p=$r(d.type,d.key,d.props,null,c.mode,p),p.ref=bn(c,null,d),p.return=c,p;case $t:return d=ii(d,c.mode,p),d.return=c,d;case it:var y=d._init;return g(c,y(d._payload),p)}if(In(d)||Sn(d))return d=Rt(d,c.mode,p,null),d.return=c,d;br(c,d)}return null}function h(c,d,p,y){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(c,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return p.key===C?u(c,d,p,y):null;case $t:return p.key===C?f(c,d,p,y):null;case it:return C=p._init,h(c,d,C(p._payload),y)}if(In(p)||Sn(p))return C!==null?null:m(c,d,p,y,null);br(c,p)}return null}function k(c,d,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(p)||null,a(d,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gr:return c=c.get(y.key===null?p:y.key)||null,u(d,c,y,C);case $t:return c=c.get(y.key===null?p:y.key)||null,f(d,c,y,C);case it:var P=y._init;return k(c,d,p,P(y._payload),C)}if(In(y)||Sn(y))return c=c.get(p)||null,m(d,c,y,C,null);br(d,y)}return null}function w(c,d,p,y){for(var C=null,P=null,T=d,v=d=0,S=null;T!==null&&v<p.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var z=h(c,T,p[v],y);if(z===null){T===null&&(T=S);break}e&&T&&z.alternate===null&&t(c,T),d=i(z,d,v),P===null?C=z:P.sibling=z,P=z,T=S}if(v===p.length)return n(c,T),H&&Tt(c,v),C;if(T===null){for(;v<p.length;v++)T=g(c,p[v],y),T!==null&&(d=i(T,d,v),P===null?C=T:P.sibling=T,P=T);return H&&Tt(c,v),C}for(T=r(c,T);v<p.length;v++)S=k(T,c,v,p[v],y),S!==null&&(e&&S.alternate!==null&&T.delete(S.key===null?v:S.key),d=i(S,d,v),P===null?C=S:P.sibling=S,P=S);return e&&T.forEach(function(B){return t(c,B)}),H&&Tt(c,v),C}function x(c,d,p,y){var C=Sn(p);if(typeof C!="function")throw Error(j(150));if(p=C.call(p),p==null)throw Error(j(151));for(var P=C=null,T=d,v=d=0,S=null,z=p.next();T!==null&&!z.done;v++,z=p.next()){T.index>v?(S=T,T=null):S=T.sibling;var B=h(c,T,z.value,y);if(B===null){T===null&&(T=S);break}e&&T&&B.alternate===null&&t(c,T),d=i(B,d,v),P===null?C=B:P.sibling=B,P=B,T=S}if(z.done)return n(c,T),H&&Tt(c,v),C;if(T===null){for(;!z.done;v++,z=p.next())z=g(c,z.value,y),z!==null&&(d=i(z,d,v),P===null?C=z:P.sibling=z,P=z);return H&&Tt(c,v),C}for(T=r(c,T);!z.done;v++,z=p.next())z=k(T,c,v,z.value,y),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?v:z.key),d=i(z,d,v),P===null?C=z:P.sibling=z,P=z);return e&&T.forEach(function(de){return t(c,de)}),H&&Tt(c,v),C}function N(c,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:e:{for(var C=p.key,P=d;P!==null;){if(P.key===C){if(C=p.type,C===Vt){if(P.tag===7){n(c,P.sibling),d=l(P,p.props.children),d.return=c,c=d;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Ro(C)===P.type){n(c,P.sibling),d=l(P,p.props),d.ref=bn(c,P,p),d.return=c,c=d;break e}n(c,P);break}else t(c,P);P=P.sibling}p.type===Vt?(d=Rt(p.props.children,c.mode,y,p.key),d.return=c,c=d):(y=$r(p.type,p.key,p.props,null,c.mode,y),y.ref=bn(c,d,p),y.return=c,c=y)}return o(c);case $t:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(c,d.sibling),d=l(d,p.children||[]),d.return=c,c=d;break e}else{n(c,d);break}else t(c,d);d=d.sibling}d=ii(p,c.mode,y),d.return=c,c=d}return o(c);case it:return P=p._init,N(c,d,P(p._payload),y)}if(In(p))return w(c,d,p,y);if(Sn(p))return x(c,d,p,y);br(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(c,d.sibling),d=l(d,p),d.return=c,c=d):(n(c,d),d=li(p,c.mode,y),d.return=c,c=d),o(c)):n(c,d)}return N}var dn=ku(!0),wu=ku(!1),rl=jt(null),ll=null,Jt=null,Ss=null;function js(){Ss=Jt=ll=null}function Ns(e){var t=rl.current;V(rl),e._currentValue=t}function Di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ll=e,Ss=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(Ss!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(ll===null)throw Error(j(308));Jt=e,ll.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var It=null;function Cs(e){It===null?It=[e]:It.push(e)}function Su(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Cs(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,Cs(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var l=e.updateQueue;st=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=f:a.next=f,m.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,m=f=u=null,a=i;do{var h=a.lane,k=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(h=t,k=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){g=w.call(k,g,h);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(k,g,h):w,h==null)break e;g=X({},g,h);break e;case 2:st=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(f=m=k,u=g):m=m.next=k,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(u=g),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ut|=o,e.lanes=o,e.memoizedState=g}}function Do(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var cr={},Qe=jt(cr),er=jt(cr),tr=jt(cr);function Mt(e){if(e===cr)throw Error(j(174));return e}function bs(e,t){switch(W(tr,t),W(er,e),W(Qe,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}V(Qe),W(Qe,t)}function fn(){V(Qe),V(er),V(tr)}function Nu(e){Mt(tr.current);var t=Mt(Qe.current),n=gi(t,e.type);t!==n&&(W(er,e),W(Qe,n))}function Ts(e){er.current===e&&(V(Qe),V(er))}var Q=jt(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Es(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ur=rt.ReactCurrentDispatcher,Zl=rt.ReactCurrentBatchConfig,Ot=0,K=null,Z=null,ne=null,ol=!1,An=!1,nr=0,kf=0;function oe(){throw Error(j(321))}function zs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Is(e,t,n,r,l,i){if(Ot=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?Nf:Cf,e=n(r,l),An){i=0;do{if(An=!1,nr=0,25<=i)throw Error(j(301));i+=1,ne=Z=null,t.updateQueue=null,Ur.current=Pf,e=n(r,l)}while(An)}if(Ur.current=al,t=Z!==null&&Z.next!==null,Ot=0,ne=Z=K=null,ol=!1,t)throw Error(j(300));return e}function Ms(){var e=nr!==0;return nr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?K.memoizedState=ne=e:ne=ne.next=e,ne}function Me(){if(Z===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?K.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(j(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?K.memoizedState=ne=e:ne=ne.next=e}return ne}function rr(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=Me(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,f=i;do{var m=f.lane;if((Ot&m)===m)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var g={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(a=u=g,o=r):u=u.next=g,K.lanes|=m,Ut|=m}f=f.next}while(f!==null&&f!==i);u===null?o=r:u.next=a,Be(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,K.lanes|=i,Ut|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=Me(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Be(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Cu(){}function Pu(e,t){var n=K,r=Me(),l=t(),i=!Be(r.memoizedState,l);if(i&&(r.memoizedState=l,xe=!0),r=r.queue,_s(Eu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,lr(9,Tu.bind(null,n,r,l,t),void 0,null),re===null)throw Error(j(349));Ot&30||bu(n,t,l)}return l}function bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tu(e,t,n,r){t.value=n,t.getSnapshot=r,zu(t)&&Iu(e)}function Eu(e,t,n){return n(function(){zu(t)&&Iu(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Iu(e){var t=et(e,1);t!==null&&Ae(t,e,1,-1)}function Oo(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=jf.bind(null,K,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mu(){return Me().memoizedState}function Ar(e,t,n,r){var l=$e();K.flags|=e,l.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var l=Me();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&zs(r,o.deps)){l.memoizedState=lr(t,n,i,r);return}}K.flags|=e,l.memoizedState=lr(1|t,n,i,r)}function Uo(e,t){return Ar(8390656,8,e,t)}function _s(e,t){return jl(2048,8,e,t)}function _u(e,t){return jl(4,2,e,t)}function Ru(e,t){return jl(4,4,e,t)}function Lu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Du(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,Lu.bind(null,t,e),n)}function Rs(){}function Ou(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Au(e,t,n){return Ot&21?(Be(n,t)||(n=Va(),K.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function wf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{F=n,Zl.transition=r}}function Fu(){return Me().memoizedState}function Sf(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))Wu(t,n);else if(n=Su(e,t,n,r),n!==null){var l=pe();Ae(n,e,r,l),$u(n,t,r)}}function jf(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Wu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Be(a,o)){var u=t.interleaved;u===null?(l.next=l,Cs(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Su(e,t,l,r),n!==null&&(l=pe(),Ae(n,e,r,l),$u(n,t,r))}}function Bu(e){var t=e.alternate;return e===K||t!==null&&t===K}function Wu(e,t){An=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var al={readContext:Ie,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Nf={readContext:Ie,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Uo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,Lu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:Oo,useDebugValue:Rs,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Oo(!1),t=e[0];return e=wf.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=$e();if(H){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),re===null)throw Error(j(349));Ot&30||bu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Uo(Eu.bind(null,r,i,e),[e]),r.flags|=2048,lr(9,Tu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$e(),t=re.identifierPrefix;if(H){var n=Ge,r=qe;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cf={readContext:Ie,useCallback:Ou,useContext:Ie,useEffect:_s,useImperativeHandle:Du,useInsertionEffect:_u,useLayoutEffect:Ru,useMemo:Uu,useReducer:ei,useRef:Mu,useState:function(){return ei(rr)},useDebugValue:Rs,useDeferredValue:function(e){var t=Me();return Au(t,Z.memoizedState,e)},useTransition:function(){var e=ei(rr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Pu,useId:Fu,unstable_isNewReconciler:!1},Pf={readContext:Ie,useCallback:Ou,useContext:Ie,useEffect:_s,useImperativeHandle:Du,useInsertionEffect:_u,useLayoutEffect:Ru,useMemo:Uu,useReducer:ti,useRef:Mu,useState:function(){return ti(rr)},useDebugValue:Rs,useDeferredValue:function(e){var t=Me();return Z===null?t.memoizedState=e:Au(t,Z.memoizedState,e)},useTransition:function(){var e=ti(rr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Pu,useId:Fu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=xt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=ht(e,i,l),t!==null&&(Ae(t,e,l,r),Or(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=xt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ht(e,i,l),t!==null&&(Ae(t,e,l,r),Or(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=xt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=ht(e,l,r),t!==null&&(Ae(t,e,r,n),Or(t,e,r))}};function Ao(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(l,i):!0}function Vu(e,t,n){var r=!1,l=kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(l=ye(t)?Lt:ce.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nl.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ps(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ie(i):(i=ye(t)?Lt:ce.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Nl.enqueueReplaceState(l,l.state,null),il(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Zc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function Hu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cl||(cl=!0,qi=r),Ai(e,t)},n}function Qu(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ai(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Bf.bind(null,e,t,n),t.then(e,e))}function Wo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $o(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Tf=rt.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?wu(t,null,n,r):dn(t,e.child,n,r)}function Vo(e,t,n,r,l){n=n.render;var i=t.ref;return sn(t,l),r=Is(e,t,n,r,i,l),n=Ms(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(H&&n&&ys(t),t.flags|=1,fe(e,t,r,l),t.child)}function Ho(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ku(e,t,i,r,l)):(e=$r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(o,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ku(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,tt(e,t,l)}return Fi(e,t,n,r,l)}function Xu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(en,we),we|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(en,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(en,we),we|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(en,we),we|=r;return fe(e,t,l,n),t.child}function qu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fi(e,t,n,r,l){var i=ye(n)?Lt:ce.current;return i=un(t,i),sn(t,l),n=Is(e,t,n,r,i,l),r=Ms(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(H&&r&&ys(t),t.flags|=1,fe(e,t,n,l),t.child)}function Qo(e,t,n,r,l){if(ye(n)){var i=!0;el(t)}else i=!1;if(sn(t,l),t.stateNode===null)Fr(e,t),Vu(t,n,r),Ui(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ie(f):(f=ye(n)?Lt:ce.current,f=un(t,f));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==f)&&Fo(t,o,r,f),st=!1;var h=t.memoizedState;o.state=h,il(t,r,o,l),u=t.memoizedState,a!==r||h!==u||ve.current||st?(typeof m=="function"&&(Oi(t,n,m,r),u=t.memoizedState),(a=st||Ao(t,n,a,r,h,u,f))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ju(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Le(t.type,a),o.props=f,g=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ie(u):(u=ye(n)?Lt:ce.current,u=un(t,u));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||h!==u)&&Fo(t,o,r,u),st=!1,h=t.memoizedState,o.state=h,il(t,r,o,l);var w=t.memoizedState;a!==g||h!==w||ve.current||st?(typeof k=="function"&&(Oi(t,n,k,r),w=t.memoizedState),(f=st||Ao(t,n,f,r,h,w,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bi(e,t,n,r,i,l)}function Bi(e,t,n,r,l,i){qu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Io(t,n,!1),tt(e,t,i);r=t.stateNode,Tf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):fe(e,t,a,i),t.memoizedState=r.state,l&&Io(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?zo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zo(e,t.context,!1),bs(e,t.containerInfo)}function Ko(e,t,n,r,l){return cn(),ws(l),t.flags|=256,fe(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yu(e,t,n){var r=t.pendingProps,l=Q.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(Q,l&1),e===null)return Li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=bl(o,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$i(n),t.memoizedState=Wi,e):Ls(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Ef(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=vt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=vt(a,i):(i=Rt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?$i(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return i=e.child,e=i.sibling,r=vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ls(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&ws(r),dn(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ef(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(j(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=bl({mode:"visible",children:r.children},l,0,null),i=Rt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=$i(o),t.memoizedState=Wi,i);if(!(t.mode&1))return Tr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=ni(i,r,void 0),Tr(e,t,o,r)}if(a=(o&e.childLanes)!==0,xe||a){if(r=re,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,et(e,l),Ae(r,e,l,-1))}return Bs(),r=ni(Error(j(421))),Tr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Wf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Se=mt(l.nextSibling),je=t,H=!0,Oe=null,e!==null&&(be[Te++]=qe,be[Te++]=Ge,be[Te++]=Dt,qe=e.id,Ge=e.overflow,Dt=t),t=Ls(t,r.children),t.flags|=4096,t)}function Xo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Di(e.return,t,n)}function ri(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ju(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xo(e,n,t);else if(e.tag===19)Xo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ri(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ri(t,!0,n,null,i);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zf(e,t,n){switch(t.tag){case 3:Gu(t),cn();break;case 5:Nu(t);break;case 1:ye(t.type)&&el(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;W(rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Yu(e,t,n):(W(Q,Q.current&1),e=tt(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ju(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Xu(e,t,n)}return tt(e,t,n)}var Zu,Vi,ec,tc;Zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};ec=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Mt(Qe.current);var i=null;switch(n){case"input":l=fi(e,l),r=fi(e,r),i=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":l=hi(e,l),r=hi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}xi(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($n.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==a&&(u!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&($n.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&$("scroll",e),i||a===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function If(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&Zr(),ae(t),null;case 3:return r=t.stateNode,fn(),V(ve),V(ce),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Ji(Oe),Oe=null))),Vi(e,t),ae(t),null;case 5:Ts(t);var l=Mt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)ec(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ae(t),null}if(e=Mt(Qe.current),Pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ve]=t,r[Zn]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<_n.length;l++)$(_n[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":no(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":lo(r,i),$("invalid",r)}xi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),l=["children",""+a]):$n.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":xr(r),ro(r,i,!0);break;case"textarea":xr(r),io(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Jr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ea(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ve]=t,e[Zn]=r,Zu(e,t,!1,!1),t.stateNode=e;e:{switch(o=vi(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<_n.length;l++)$(_n[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":no(e,r),l=fi(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),$("invalid",e);break;case"textarea":lo(e,r),l=hi(e,r),$("invalid",e);break;default:l=r}xi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Ma(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&za(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vn(e,u):typeof u=="number"&&Vn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($n.hasOwnProperty(i)?u!=null&&i==="onScroll"&&$("scroll",e):u!=null&&is(e,i,u,o))}switch(n){case"input":xr(e),ro(e,r,!1);break;case"textarea":xr(e),io(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Mt(tr.current),Mt(Qe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ae(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&t.mode&1&&!(t.flags&128))yu(),cn(),t.flags|=98560,i=!1;else if(i=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Ve]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Oe!==null&&(Ji(Oe),Oe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):Bs())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return fn(),Vi(e,t),e===null&&Yn(t.stateNode.containerInfo),ae(t),null;case 10:return Ns(t.type._context),ae(t),null;case 17:return ye(t.type)&&Zr(),ae(t),null;case 19:if(V(Q),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Tn(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=sl(e),o!==null){for(t.flags|=128,Tn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>mn&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304)}else{if(!r)if(e=sl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!H)return ae(t),null}else 2*Y()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Mf(e,t){switch(ks(t),t.tag){case 1:return ye(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),V(ve),V(ce),Es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ts(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return fn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var Er=!1,ue=!1,_f=typeof WeakSet=="function"?WeakSet:Set,b=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){q(e,t,r)}}var qo=!1;function Rf(e,t){if(Ti=qr,e=su(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,f=0,m=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(a=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++f===l&&(a=o),h===i&&++m===r&&(u=o),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},qr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,N=w.memoizedState,c=t.stateNode,d=c.getSnapshotBeforeUpdate(t.elementType===t.type?x:Le(t.type,x),N);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return w=qo,qo=!1,w}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Hi(t,n,i)}l=l.next}while(l!==r)}}function Cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Zn],delete t[Mi],delete t[gf],delete t[xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rc(e){return e.tag===5||e.tag===3||e.tag===4}function Go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}var le=null,De=!1;function lt(e,t,n){for(n=n.child;n!==null;)lc(e,t,n),n=n.sibling}function lc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:ue||Zt(n,t);case 6:var r=le,l=De;le=null,lt(e,t,n),le=r,De=l,le!==null&&(De?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(De?(e=le,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Xn(e)):Gl(le,n.stateNode));break;case 4:r=le,l=De,le=n.stateNode.containerInfo,De=!0,lt(e,t,n),le=r,De=l;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hi(n,t,o),l=l.next}while(l!==r)}lt(e,t,n);break;case 1:if(!ue&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,lt(e,t,n),ue=r):lt(e,t,n);break;default:lt(e,t,n)}}function Yo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _f),t.forEach(function(r){var l=$f.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,De=!1;break e;case 3:le=a.stateNode.containerInfo,De=!0;break e;case 4:le=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(le===null)throw Error(j(160));lc(i,o,l),le=null,De=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){q(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ic(t,e),t=t.sibling}function ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),We(e),r&4){try{Fn(3,e,e.return),Cl(3,e)}catch(x){q(e,e.return,x)}try{Fn(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:_e(t,e),We(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(_e(t,e),We(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var l=e.stateNode;try{Vn(l,"")}catch(x){q(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ba(l,i),vi(a,o);var f=vi(a,i);for(o=0;o<u.length;o+=2){var m=u[o],g=u[o+1];m==="style"?Ma(l,g):m==="dangerouslySetInnerHTML"?za(l,g):m==="children"?Vn(l,g):is(l,m,g,f)}switch(a){case"input":pi(l,i);break;case"textarea":Ta(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?tn(l,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Zn]=i}catch(x){q(e,e.return,x)}}break;case 6:if(_e(t,e),We(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){q(e,e.return,x)}}break;case 3:if(_e(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:_e(t,e),We(e);break;case 13:_e(t,e),We(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Us=Y())),r&4&&Yo(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(f=ue)||m,_e(t,e),ue=f):_e(t,e),We(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(b=e,m=e.child;m!==null;){for(g=b=m;b!==null;){switch(h=b,k=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:Zt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:Zt(h,h.return);break;case 22:if(h.memoizedState!==null){Zo(g);continue}}k!==null?(k.return=h,b=k):Zo(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ia("display",o))}catch(x){q(e,e.return,x)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(x){q(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:_e(t,e),We(e),r&4&&Yo(e);break;case 21:break;default:_e(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vn(l,""),r.flags&=-33);var i=Go(e);Xi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Go(e);Ki(e,a,o);break;default:throw Error(j(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lf(e,t,n){b=e,sc(e)}function sc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Er;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ue;a=Er;var f=ue;if(Er=o,(ue=u)&&!f)for(b=l;b!==null;)o=b,u=o.child,o.tag===22&&o.memoizedState!==null?ea(l):u!==null?(u.return=o,b=u):ea(l);for(;i!==null;)b=i,sc(i),i=i.sibling;b=l,Er=a,ue=f}Jo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,b=i):Jo(e)}}function Jo(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Do(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Do(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Xn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ue||t.flags&512&&Qi(t)}catch(h){q(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Zo(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function ea(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var i=t.return;try{Qi(t)}catch(u){q(t,i,u)}break;case 5:var o=t.return;try{Qi(t)}catch(u){q(t,o,u)}}}catch(u){q(t,t.return,u)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var Df=Math.ceil,ul=rt.ReactCurrentDispatcher,Ds=rt.ReactCurrentOwner,ze=rt.ReactCurrentBatchConfig,U=0,re=null,J=null,ie=0,we=0,en=jt(0),ee=0,ir=null,Ut=0,Pl=0,Os=0,Bn=null,ge=null,Us=0,mn=1/0,Ke=null,cl=!1,qi=null,gt=null,zr=!1,ct=null,dl=0,Wn=0,Gi=null,Br=-1,Wr=0;function pe(){return U&6?Y():Br!==-1?Br:Br=Y()}function xt(e){return e.mode&1?U&2&&ie!==0?ie&-ie:yf.transition!==null?(Wr===0&&(Wr=Va()),Wr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ya(e.type)),e):1}function Ae(e,t,n,r){if(50<Wn)throw Wn=0,Gi=null,Error(j(185));or(e,n,r),(!(U&2)||e!==re)&&(e===re&&(!(U&2)&&(Pl|=n),ee===4&&at(e,ie)),ke(e,r),n===1&&U===0&&!(t.mode&1)&&(mn=Y()+500,Sl&&Nt()))}function ke(e,t){var n=e.callbackNode;vd(e,t);var r=Xr(e,e===re?ie:0);if(r===0)n!==null&&ao(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ao(n),t===1)e.tag===0?vf(ta.bind(null,e)):gu(ta.bind(null,e)),mf(function(){!(U&6)&&Nt()}),n=null;else{switch(Ha(r)){case 1:n=cs;break;case 4:n=Wa;break;case 16:n=Kr;break;case 536870912:n=$a;break;default:n=Kr}n=mc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Br=-1,Wr=0,U&6)throw Error(j(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Xr(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var l=U;U|=2;var i=uc();(re!==e||ie!==t)&&(Ke=null,mn=Y()+500,_t(e,t));do try{Af();break}catch(a){ac(e,a)}while(!0);js(),ul.current=i,U=l,J!==null?t=0:(re=null,ie=0,t=ee)}if(t!==0){if(t===2&&(l=ji(e),l!==0&&(r=l,t=Yi(e,l))),t===1)throw n=ir,_t(e,0),at(e,r),ke(e,Y()),n;if(t===6)at(e,r);else{if(l=e.current.alternate,!(r&30)&&!Of(l)&&(t=fl(e,r),t===2&&(i=ji(e),i!==0&&(r=i,t=Yi(e,i))),t===1))throw n=ir,_t(e,0),at(e,r),ke(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Et(e,ge,Ke);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Us+500-Y(),10<t)){if(Xr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ii(Et.bind(null,e,ge,Ke),t);break}Et(e,ge,Ke);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Df(r/1960))-r,10<r){e.timeoutHandle=Ii(Et.bind(null,e,ge,Ke),r);break}Et(e,ge,Ke);break;case 5:Et(e,ge,Ke);break;default:throw Error(j(329))}}}return ke(e,Y()),e.callbackNode===n?oc.bind(null,e):null}function Yi(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=fl(e,t),e!==2&&(t=ge,ge=n,t!==null&&Ji(t)),e}function Ji(e){ge===null?ge=e:ge.push.apply(ge,e)}function Of(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Os,t&=~Pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function ta(e){if(U&6)throw Error(j(327));on();var t=Xr(e,0);if(!(t&1))return ke(e,Y()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=ji(e);r!==0&&(t=r,n=Yi(e,r))}if(n===1)throw n=ir,_t(e,0),at(e,t),ke(e,Y()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ge,Ke),ke(e,Y()),null}function As(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(mn=Y()+500,Sl&&Nt())}}function At(e){ct!==null&&ct.tag===0&&!(U&6)&&on();var t=U;U|=1;var n=ze.transition,r=F;try{if(ze.transition=null,F=1,e)return e()}finally{F=r,ze.transition=n,U=t,!(U&6)&&Nt()}}function Fs(){we=en.current,V(en)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pf(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:fn(),V(ve),V(ce),Es();break;case 5:Ts(r);break;case 4:fn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:Ns(r.type._context);break;case 22:case 23:Fs()}n=n.return}if(re=e,J=e=vt(e.current,null),ie=we=t,ee=0,ir=null,Os=Pl=Ut=0,ge=Bn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}It=null}return e}function ac(e,t){do{var n=J;try{if(js(),Ur.current=al,ol){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Ot=0,ne=Z=K=null,An=!1,nr=0,Ds.current=null,n===null||n.return===null){ee=1,ir=t,J=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=ie,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,m=a,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Wo(o);if(k!==null){k.flags&=-257,$o(k,o,a,i,t),k.mode&1&&Bo(i,f,t),t=k,u=f;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){Bo(i,f,t),Bs();break e}u=Error(j(426))}}else if(H&&a.mode&1){var N=Wo(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),$o(N,o,a,i,t),ws(pn(u,a));break e}}i=u=pn(u,a),ee!==4&&(ee=2),Bn===null?Bn=[i]:Bn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Hu(i,u,t);Lo(i,c);break e;case 1:a=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gt===null||!gt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Qu(i,a,t);Lo(i,y);break e}}i=i.return}while(i!==null)}dc(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function uc(){var e=ul.current;return ul.current=al,e===null?al:e}function Bs(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Ut&268435455)&&!(Pl&268435455)||at(re,ie)}function fl(e,t){var n=U;U|=2;var r=uc();(re!==e||ie!==t)&&(Ke=null,_t(e,t));do try{Uf();break}catch(l){ac(e,l)}while(!0);if(js(),U=n,ul.current=r,J!==null)throw Error(j(261));return re=null,ie=0,ee}function Uf(){for(;J!==null;)cc(J)}function Af(){for(;J!==null&&!ud();)cc(J)}function cc(e){var t=pc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?dc(e):J=t,Ds.current=null}function dc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(n=If(n,t,we),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ee===0&&(ee=5)}function Et(e,t,n){var r=F,l=ze.transition;try{ze.transition=null,F=1,Ff(e,t,n,r)}finally{ze.transition=l,F=r}return null}function Ff(e,t,n,r){do on();while(ct!==null);if(U&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yd(e,i),e===re&&(J=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,mc(Kr,function(){return on(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var o=F;F=1;var a=U;U|=4,Ds.current=null,Rf(e,n),ic(n,e),sf(Ei),qr=!!Ti,Ei=Ti=null,e.current=n,Lf(n),cd(),U=a,F=o,ze.transition=i}else e.current=n;if(zr&&(zr=!1,ct=e,dl=l),i=e.pendingLanes,i===0&&(gt=null),pd(n.stateNode),ke(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(cl)throw cl=!1,e=qi,qi=null,e;return dl&1&&e.tag!==0&&on(),i=e.pendingLanes,i&1?e===Gi?Wn++:(Wn=0,Gi=e):Wn=0,Nt(),null}function on(){if(ct!==null){var e=Ha(dl),t=ze.transition,n=F;try{if(ze.transition=null,F=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,dl=0,U&6)throw Error(j(331));var l=U;for(U|=4,b=e.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var f=a[u];for(b=f;b!==null;){var m=b;switch(m.tag){case 0:case 11:case 15:Fn(8,m,i)}var g=m.child;if(g!==null)g.return=m,b=g;else for(;b!==null;){m=b;var h=m.sibling,k=m.return;if(nc(m),m===f){b=null;break}if(h!==null){h.return=k,b=h;break}b=k}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,b=c;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){o=b;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,b=p;else e:for(o=d;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cl(9,a)}}catch(C){q(a,a.return,C)}if(a===o){b=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,b=y;break e}b=a.return}}if(U=l,Nt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{F=n,ze.transition=t}}return!1}function na(e,t,n){t=pn(n,t),t=Hu(e,t,1),e=ht(e,t,1),t=pe(),e!==null&&(or(e,1,t),ke(e,t))}function q(e,t,n){if(e.tag===3)na(e,e,n);else for(;t!==null;){if(t.tag===3){na(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=pn(n,e),e=Qu(t,e,1),t=ht(t,e,1),e=pe(),t!==null&&(or(t,1,e),ke(t,e));break}}t=t.return}}function Bf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>Y()-Us?_t(e,0):Os|=n),ke(e,t)}function fc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=pe();e=et(e,t),e!==null&&(or(e,t,n),ke(e,n))}function Wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fc(e,n)}function $f(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),fc(e,n)}var pc;pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,zf(e,t,n);xe=!!(e.flags&131072)}else xe=!1,H&&t.flags&1048576&&xu(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var l=un(t,ce.current);sn(t,n),l=Is(null,t,r,e,l,n);var i=Ms();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(i=!0,el(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ps(t),l.updater=Nl,t.stateNode=l,l._reactInternals=t,Ui(t,r,e,n),t=Bi(null,t,r,!0,i,n)):(t.tag=0,H&&i&&ys(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Hf(r),e=Le(r,e),l){case 0:t=Fi(null,t,r,e,n);break e;case 1:t=Qo(null,t,r,e,n);break e;case 11:t=Vo(null,t,r,e,n);break e;case 14:t=Ho(null,t,r,Le(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Fi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Qo(e,t,r,l,n);case 3:e:{if(Gu(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ju(e,t),il(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pn(Error(j(423)),t),t=Ko(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(j(424)),t),t=Ko(e,t,r,n,l);break e}else for(Se=mt(t.stateNode.containerInfo.firstChild),je=t,H=!0,Oe=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=tt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Nu(t),e===null&&Li(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,zi(r,l)?o=null:i!==null&&zi(r,i)&&(t.flags|=32),qu(e,t),fe(e,t,o,n),t.child;case 6:return e===null&&Li(t),null;case 13:return Yu(e,t,n);case 4:return bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Vo(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,W(rl,r._currentValue),r._currentValue=o,i!==null)if(Be(i.value,o)){if(i.children===l.children&&!ve.current){t=tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?u.next=u:(u.next=m.next,m.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Di(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Di(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,sn(t,n),l=Ie(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ho(e,t,r,l,n);case 15:return Ku(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Fr(e,t),t.tag=1,ye(r)?(e=!0,el(t)):e=!1,sn(t,n),Vu(t,r,l),Ui(t,r,l,n),Bi(null,t,r,!0,e,n);case 19:return Ju(e,t,n);case 22:return Xu(e,t,n)}throw Error(j(156,t.tag))};function mc(e,t){return Ba(e,t)}function Vf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Vf(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===as)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Rt(n.children,l,i,t);case ss:o=8,l|=8;break;case ai:return e=Ee(12,n,t,l|2),e.elementType=ai,e.lanes=i,e;case ui:return e=Ee(13,n,t,l),e.elementType=ui,e.lanes=i,e;case ci:return e=Ee(19,n,t,l),e.elementType=ci,e.lanes=i,e;case Na:return bl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sa:o=10;break e;case ja:o=9;break e;case os:o=11;break e;case as:o=14;break e;case it:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function bl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Na,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ii(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $s(e,t,n,r,l,i,o,a,u){return e=new Qf(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(i),e}function Kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hc(e){if(!e)return kt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ye(n))return hu(e,n,t)}return t}function gc(e,t,n,r,l,i,o,a,u){return e=$s(n,r,!0,e,l,i,o,a,u),e.context=hc(null),n=e.current,r=pe(),l=xt(n),i=Ye(r,l),i.callback=t??null,ht(n,i,l),e.current.lanes=l,or(e,l,r),ke(e,r),e}function Tl(e,t,n,r){var l=t.current,i=pe(),o=xt(l);return n=hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(l,t,o),e!==null&&(Ae(e,l,o,i),Or(e,l,o)),o}function pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ra(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vs(e,t){ra(e,t),(e=e.alternate)&&ra(e,t)}function Xf(){return null}var xc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}El.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Tl(e,t,null,null)};El.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){Tl(null,e,null,null)}),t[Ze]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Ga(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function la(){}function qf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=pl(o);i.call(f)}}var o=gc(t,r,e,0,null,!1,!1,"",la);return e._reactRootContainer=o,e[Ze]=o.current,Yn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=pl(u);a.call(f)}}var u=$s(e,0,!1,null,null,!1,!1,"",la);return e._reactRootContainer=u,e[Ze]=u.current,Yn(e.nodeType===8?e.parentNode:e),At(function(){Tl(t,u,n,r)}),u}function Il(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=pl(o);a.call(u)}}Tl(t,o,e,l)}else o=qf(n,t,e,l,r);return pl(o)}Qa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(ds(t,n|1),ke(t,Y()),!(U&6)&&(mn=Y()+500,Nt()))}break;case 13:At(function(){var r=et(e,1);if(r!==null){var l=pe();Ae(r,e,1,l)}}),Vs(e,1)}};fs=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=pe();Ae(t,e,134217728,n)}Vs(e,134217728)}};Ka=function(e){if(e.tag===13){var t=xt(e),n=et(e,t);if(n!==null){var r=pe();Ae(n,e,t,r)}Vs(e,t)}};Xa=function(){return F};qa=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ki=function(e,t,n){switch(t){case"input":if(pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=wl(r);if(!l)throw Error(j(90));Pa(r),pi(r,l)}}}break;case"textarea":Ta(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};La=As;Da=At;var Gf={usingClientEntryPoint:!1,Events:[ur,Xt,wl,_a,Ra,As]},En={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yf={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Aa(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||Xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{xl=Ir.inject(Yf),He=Ir}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(j(200));return Kf(e,t,null,n)};Ce.createRoot=function(e,t){if(!Qs(e))throw Error(j(299));var n=!1,r="",l=xc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=$s(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Hs(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Aa(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return At(e)};Ce.hydrate=function(e,t,n){if(!zl(t))throw Error(j(200));return Il(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=xc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=gc(t,null,e,1,n??null,l,!1,i,o),e[Ze]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};Ce.render=function(e,t,n){if(!zl(t))throw Error(j(200));return Il(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!zl(e))throw Error(j(40));return e._reactRootContainer?(At(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ce.unstable_batchedUpdates=As;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Il(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc)}catch(e){console.error(e)}}vc(),va.exports=Ce;var Jf=va.exports,ia=Jf;si.createRoot=ia.createRoot,si.hydrateRoot=ia.hydrateRoot;const Re=[{id:1,title:"مقدمه و نرم‌افزارهای سیستمی",icon:"BookOpen",description:"آشنایی با انواع نرم‌افزار، سیستم عامل و منابع سیستم",duration:"25 دقیقه",content:`
<h2>تقسیم‌بندی برنامه‌ها</h2>
<p>برنامه‌ها به دو دسته کلی تقسیم می‌شوند:</p>
<ul>
<li><strong>Applications (نرم‌افزارهای کاربردی):</strong> برنامه‌هایی که کاربر مستقیماً با آنها کار می‌کند مانند Word، Browser و...</li>
<li><strong>System Software (نرم‌افزارهای سیستمی):</strong> نرم‌افزارهایی که اجازه می‌دهند از منابع سیستم بهره بیشتری ببریم</li>
</ul>

<h3>انواع نرم‌افزارهای سیستمی</h3>

<h4>1. Editors (ویرایشگرها)</h4>
<p>نرم‌افزارهایی برای تغییرات در فایل‌ها. مثال: Notepad، VS Code، Vim</p>

<h4>2. Compilers (کامپایلرها)</h4>
<p>کامپایلرها وظیفه تبدیل کد سطح بالا به کد ماشین را دارند. مراحل کامپایل:</p>

<div class="example-box">
<h4>مراحل کامپایل:</h4>
<ol>
<li><strong>Tokenizer/Scanner:</strong> تشخیص توکن‌ها (کلمات رزرو شده) و متغیرها</li>
<li><strong>Parsing:</strong> بررسی صحت گرامری جملات (مثل بررسی ساختار if-else). در صورت خطا: Syntax Error</li>
<li><strong>Intermediate Code Generation:</strong> تولید کد میانی از درخت پارس</li>
<li><strong>Optimization:</strong> بهینه‌سازی از نظر سرعت و حافظه (اختیاری)</li>
<li><strong>Binary Code Generation:</strong> تولید کد باینری نهایی</li>
</ol>
</div>

<div class="important-box">
<strong>نکته مهم:</strong> برای قابل حمل بودن (Portable) کد، تبدیل به باینری بر عهده سیستم عامل مقصد خواهد بود. برنامه‌های native فقط روی همان سیستم عامل کار می‌کنند.
</div>

<h4>3. DBMS (سیستم‌های مدیریت پایگاه داده)</h4>
<p>برنامه‌هایی که مدیریت داده‌ها را انجام می‌دهند و از ناسازگاری داده‌ها جلوگیری می‌کنند.</p>
<ul>
<li><strong>اطلاعات ثابت:</strong> مانند نام و نام خانوادگی</li>
<li><strong>اطلاعات متغیر:</strong> مانند دروس انتخاب شده هر ترم</li>
</ul>

<h4>4. Operating System (سیستم عامل)</h4>
<div class="important-box">
<strong>تعریف:</strong> سیستم عامل نرم‌افزاری سیستمی است که وظیفه مدیریت منابع را برعهده دارد.
</div>

<h3>انواع منابع (Resources)</h3>
<table>
<tr><th>منابع سخت‌افزاری</th><th>منابع نرم‌افزاری</th></tr>
<tr><td>Hard Drive</td><td>Interrupt Service</td></tr>
<tr><td>CPU</td><td>API</td></tr>
<tr><td>Main Memory</td><td>POSIX</td></tr>
<tr><td>I/O Devices</td><td>Traps, Critical Sections</td></tr>
</table>

<h3>BIOS چیست؟</h3>
<p>BIOS مجموعه‌ای از توابع است که ارتباط با دستگاه‌های I/O را فراهم می‌کند. مثلاً خواندن کاراکتر از کیبورد و نمایش آن روی مانیتور.</p>

<h2>چهار لایه مدیریت منابع (PMDI Management)</h2>
<p>تمامی سیستم عامل‌ها این چهار لایه را برای مدیریت منابع دارند:</p>

<ol>
<li><strong>Process Management (مدیریت فرآیندها):</strong> مدیریت اجرای همزمان برنامه‌ها</li>
<li><strong>Memory Management (مدیریت حافظه):</strong> تخصیص و مدیریت حافظه اصلی</li>
<li><strong>Device Management (مدیریت دستگاه‌ها):</strong> مدیریت دستگاه‌های ورودی و خروجی</li>
<li><strong>Information Management (مدیریت اطلاعات):</strong> مدیریت فایل‌ها و دسترسی‌ها</li>
</ol>

<h3>مدیریت فرآیندها (Process Management)</h3>
<p>سیستم عامل Multi-Process می‌تواند چندین برنامه را به صورت همزمان مدیریت کند. روش کار:</p>
<ul>
<li>صفی از برنامه‌ها (Ready Queue) وجود دارد</li>
<li>سیستم عامل از سر صف یک برنامه انتخاب می‌کند</li>
<li>یک بازه زمانی (Time Slice یا Quantum) مثلاً 200 میلی‌ثانیه به آن اختصاص می‌دهد</li>
<li>برنامه اجرا می‌شود و در صورت عدم اتمام، به انتهای صف برمی‌گردد</li>
</ul>

<div class="important-box">
<strong>Time Sharing:</strong> این عملیات به علت کوتاه بودن، از دید کاربر به صورت اجرای همزمان دیده می‌شود.
</div>

<h3>مدیریت حافظه (Memory Management)</h3>
<p>هر برنامه قبل از اجرا باید در حافظه بارگذاری شود. در صورتی که برنامه‌ها بزرگتر از فضای فیزیکی باشند، عملیات Swap انجام می‌شود.</p>

<h3>مدیریت دستگاه‌ها (Device Management)</h3>
<p>سیستم عامل سرویس‌دهی به درخواست‌های I/O را مدیریت می‌کند. مفاهیم مهم:</p>
<ul>
<li><strong>Track (شیار):</strong> دوایری روی سطح دیسک مغناطیسی</li>
<li><strong>Seek Time (زمان پیگرد):</strong> زمان حرکت هد از موقعیت فعلی به محل داده مورد نظر</li>
</ul>

<h3>مدیریت اطلاعات (Information Management)</h3>
<p>مدیریت داده‌ها در قالب فایل شامل:</p>
<ul>
<li>Extension، زمان ایجاد، آخرین ویرایش</li>
<li>مالک فایل و مسیر ذخیره‌سازی</li>
<li>مدیریت کاربران و دسترسی‌ها</li>
</ul>

<h4>تفاوت Protection و Security</h4>
<table>
<tr><th>Protection (حفاظت)</th><th>Security (امنیت)</th></tr>
<tr><td>اگر کاربر اجازه دسترسی ندارد، به هیچ صورت نتواند دسترسی یابد</td><td>اگر به فایل دسترسی دارد، محتوا رمزگذاری شده باشد</td></tr>
</table>
    `},{id:2,title:"تکامل عملیات I/O",icon:"HardDrive",description:"روش‌های Polling، Interrupt و DMA",duration:"30 دقیقه",content:`
<h2>تکامل عملیات I/O</h2>
<p>سه روش اصلی برای انجام عملیات I/O وجود دارد:</p>

<h3>1. روش Polling (نظرسنجی)</h3>
<p>اولین روش برای عملیات I/O که هنوز در برخی میکروکنترلرها استفاده می‌شود.</p>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>CPU فرمان I/O را صادر می‌کند</li>
<li>تا اتمام کار I/O، CPU دستگاه را poll می‌کند (بررسی مداوم)</li>
<li>در این مدت CPU کار دیگری انجام نمی‌دهد</li>
<li>پس از اتمام، داده‌ها به حافظه اصلی منتقل می‌شوند</li>
</ol>
</div>

<div class="important-box">
<strong>مشکل اصلی:</strong> چون عملیات I/O بسیار زمان‌بر است، CPU در این مدت بیکار می‌ماند و استفاده مناسبی از آن نمی‌شود.
</div>

<h3>2. روش I/O مبتنی بر وقفه (Interrupt-Based I/O)</h3>
<p>این روش نسبت به Polling بهینه‌تر است و از بافر استفاده می‌کند.</p>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>داده‌ها از دیسک خوانده شده و به بافر منتقل می‌شوند</li>
<li>بعد از پر شدن بافر، سیگنال وقفه به CPU ارسال می‌شود</li>
<li>CPU کار فعلی را متوقف کرده و سیگنال تأیید برمی‌گرداند</li>
<li>اطلاعات بافر به حافظه اصلی منتقل می‌شود</li>
</ol>
</div>

<div class="formula-box">
برای 100KB داده با بافر 10KB → 10 بار وقفه در کار CPU
</div>

<div class="important-box">
<strong>مشکل:</strong> CPU هنوز در مراتبی درگیر عملیات I/O می‌شود. حالت ایده‌آل این است که CPU فقط در پایان عملیات I/O درگیر شود.
</div>

<h3>3. روش DMA (Direct Memory Access)</h3>
<p>کنترلری به نام DMA Controller کمک می‌کند ارتباط بدون پردازنده برقرار شود.</p>

<div class="example-box">
<h4>اجزای DMA Controller:</h4>
<ul>
<li><strong>Buffer:</strong> ذخیره موقت داده‌ها</li>
<li><strong>Counter Register:</strong> شمارش بایت‌های باقیمانده</li>
<li><strong>Address Register:</strong> آدرس دستگاه فیزیکی</li>
<li><strong>Data Register:</strong> آدرس حافظه مقصد</li>
<li><strong>Logic Control:</strong> کنترل منطقی عملیات</li>
</ul>
</div>

<h4>سیگنال‌های ارتباطی DMA با CPU:</h4>
<ul>
<li>DMA Request</li>
<li>Acknowledge Request</li>
<li>Interrupt</li>
<li>R/W (خواندن/نوشتن)</li>
<li>Clock</li>
</ul>

<div class="example-box">
<h4>مثال کد C برای درک DMA:</h4>
<pre><code>char buffer[150];
File *fp;
fp = fopen("C:\\myfile.txt","t");
buffer = fread(fp, 150);
printf("%s\\n", buffer);</code></pre>

<h4>چهار مورد مهم در این برنامه:</h4>
<ol>
<li><strong>آدرس حافظه مقصد:</strong> آدرس buffer در حافظه</li>
<li><strong>آدرس دستگاه فیزیکی:</strong> C:\\myfile.txt مشخص می‌کند منظور هارد درایو است</li>
<li><strong>نوع عمل:</strong> fread یعنی فقط خواندن</li>
<li><strong>تعداد بایت:</strong> 150 بایت برای Counter</li>
</ol>
</div>

<h4>نحوه کار DMA:</h4>
<ol>
<li>پارامترها در رجیسترهای DMA ذخیره می‌شوند</li>
<li>نوع عمل با پالس R/W مشخص می‌شود</li>
<li>داده‌ها خوانده شده و در Buffer قرار می‌گیرند</li>
<li>وقتی Buffer پر شد، DMA درخواست High Impedance به CPU می‌دهد</li>
<li>کنترل BUS به DMA داده می‌شود</li>
<li>داده‌ها به حافظه منتقل می‌شوند</li>
<li>کنترل BUS به CPU برمی‌گردد</li>
</ol>

<div class="important-box">
<strong>BUS Cycle Stealing:</strong> عمل گرفتن کنترل BUS از CPU را "ربودن چرخه گذرگاه" می‌نامند.
</div>

<h4>پایان عملیات I/O:</h4>
<p>DMA از روی Counter می‌فهمد عملیات به اتمام رسیده (با صفر شدن Counter). سپس سیگنال وقفه به CPU ارسال می‌کند.</p>

<h3>چرخه دستورالعمل</h3>
<ol>
<li><strong>Fetch Opcode:</strong> واکشی دستورالعمل از حافظه</li>
<li><strong>Decode:</strong> تشخیص نوع دستور، تعداد آدرس‌ها، محاسبه طول دستور</li>
<li><strong>Fetch Operand:</strong> واکشی عملوندها (اگر دارد)</li>
<li><strong>Operand Decode:</strong> کدگشایی عملوندها</li>
<li><strong>Execution:</strong> اجرای دستورالعمل</li>
<li><strong>Saving Result:</strong> ذخیره نتایج</li>
</ol>

<div class="important-box">
<strong>نکته مهم:</strong> اجرای دستورالعمل atomic (تجزیه‌ناپذیر) است. وقفه‌ها فقط در پایان چرخه دستورالعمل پذیرفته می‌شوند.
</div>

<p>در مراحل 1، 3 و 6 CPU به BUS نیاز دارد. در مراحل 2، 4 و 5 می‌تواند کنترل BUS را واگذار کند.</p>

<h3>I/O Channel</h3>
<p>برای رفع محدودیت تعداد دستگاه‌های متصل به DMA، از Channel استفاده می‌شود. یک Channel می‌تواند به چندین DMA Controller و چندین I/O متصل شود.</p>

<p>در سوپرکامپیوترها، یک I/O Processor جداگانه برای مدیریت عملیات I/O وجود دارد.</p>
    `},{id:3,title:"انواع وقفه‌ها و مکانیزم پردازش",icon:"Zap",description:"وقفه‌های برنامه‌ای، I/O، Timeout و سخت‌افزاری",duration:"20 دقیقه",content:`
<h2>انواع وقفه‌ها</h2>
<p>وقفه‌ها سیگنال‌هایی هستند که از یک جزء سخت‌افزاری به CPU ارسال شده و CPU به ازای پذیرش آنها کار خود را متوقف کرده و روتینی را اجرا می‌کند.</p>

<h3>1. وقفه‌های برنامه‌ای (Program Interrupt)</h3>
<p>توسط ALU پردازنده تولید شده و به Control Unit ارسال می‌شوند.</p>

<div class="example-box">
<h4>شرایط تولید:</h4>
<ul>
<li>تقسیم بر صفر</li>
<li>سرریز محاسباتی (Overflow)</li>
<li>JUMP به قسمتی از حافظه که دسترسی به آن نداریم</li>
</ul>
<p><strong>سرویس روتین:</strong> دستور Abort شدن برنامه</p>
</div>

<h3>2. اتمام عملیات I/O (I/O Completion)</h3>
<p>توسط DMA یا Channel صادر می‌شود. وقتی برنامه I/O به اتمام رسید، این وقفه به CPU ارسال می‌شود.</p>
<p><strong>سرویس روتین:</strong> سیستم عامل تشخیص می‌دهد بعد از توقف چه اتفاقی باید بیفتد.</p>

<h3>3. زمان‌سنج (Timeout)</h3>
<p>مرتبط با RTC (Real Time Clock):</p>

<div class="example-box">
<h4>نحوه عملکرد RTC:</h4>
<ul>
<li>هسته آن یک نوسان‌ساز (کریستال کوارتز) است</li>
<li>نوسانات قابل شمارش هستند</li>
<li>مثلاً 50 تا Timer Tick یک ثانیه را اندازه‌گیری می‌کند</li>
<li>می‌توان زمانی را set کرد که در Counter Reg ذخیره شده و با هر پالس کم می‌شود</li>
<li>با صفر شدن، سیگنال وقفه ارسال می‌شود</li>
</ul>
</div>

<div class="example-box">
<h4>کاربرد:</h4>
<p>نمایش همزمان 4 دوربین: هر 100 میلی‌ثانیه تصویر یک دوربین نمایش داده می‌شود. چون زمان کوتاه است، از نظر ما همزمان به نظر می‌رسد.</p>
</div>

<h3>4. نقص سخت‌افزار (Hardware Failure)</h3>
<ul>
<li>کاهش سطح ولتاژ منبع تغذیه</li>
<li>افزایش دما به حد خطرناک</li>
</ul>

<h2>مکانیزم پردازش وقفه‌ها</h2>

<h3>بخش سخت‌افزاری:</h3>
<ol>
<li>دستگاه وقفه‌دهنده سیگنال وقفه را به پردازنده ارسال می‌کند</li>
<li>پردازنده اجرای دستورالعمل جاری را به پایان می‌رساند</li>
<li>در پایان دستورالعمل، اگر امکان پذیرش وقفه بود، وصول آن اعلام می‌شود</li>
<li>محتوای Program Counter و PSW در بالای Stack ذخیره می‌شود</li>
<li>آدرس اولین دستورالعمل روال خدماتی وقفه در PC بارگذاری می‌شود</li>
</ol>

<h3>بخش نرم‌افزاری:</h3>
<ol>
<li><strong>ذخیره Context:</strong> از تمامی رجیسترها یک کپی در حافظه تهیه می‌شود</li>
<li><strong>اجرای روتین خدماتی:</strong> روتین مربوط به وقفه اجرا می‌شود</li>
<li><strong>بازیابی Context:</strong> متن برنامه متوقف شده از حافظه به CPU منتقل می‌شود</li>
<li><strong>بارگذاری PC و PSW:</strong> از بالای پشته بارگذاری می‌شوند</li>
</ol>

<div class="important-box">
<strong>PSW (Program Status Word):</strong> شامل فلگ‌ها و اطلاعات وضعیت پردازنده است.
</div>
    `},{id:4,title:"مدیریت فرآیند",icon:"Layers",description:"Process، Job، PCB و چرخه حیات فرآیند",duration:"35 دقیقه",content:`
<h2>مسیر تبدیل برنامه به فرآیند</h2>

<div class="formula-box">
Program → Compile → Object → Link → exe → Submit → Job → Job Scheduler → Active Job → Loader → Process
</div>

<h3>مشخصات Job</h3>
<ul>
<li><strong>Job ID:</strong> شماره منحصر به فرد برای برنامه</li>
<li><strong>Job Type:</strong> Batch / Online / Real Time</li>
</ul>

<div class="example-box">
<h4>انواع Job:</h4>
<table>
<tr><th>نوع</th><th>توضیح</th><th>مثال</th></tr>
<tr><td>Batch</td><td>زمان اجرا اهمیت ندارد</td><td>پرداخت دستمزد کارمندان</td></tr>
<tr><td>Online</td><td>می‌تواند با وقفه کوتاه منتظر بماند</td><td>عملیات کارت به کارت</td></tr>
<tr><td>Real Time</td><td>باید بلافاصله پاسخ بگیرد</td><td>packetهای دریافتی در router</td></tr>
</table>
</div>

<h3>SPOOL Table</h3>
<p>جدولی که Job ها در آن ثبت می‌شوند:</p>
<ul>
<li><strong>Input:</strong> Jobهای با وضعیت Hold</li>
<li><strong>Output:</strong> Jobهای Active شده</li>
</ul>

<h3>Job Scheduler</h3>
<p>یک System Process که به صورت دوره‌ای اجرا می‌شود و Jobهای hold شده را با توجه به شرایط به حالت Active می‌آورد.</p>

<h3>Loader</h3>
<p>Jobهای Active شده را در حافظه بارگذاری می‌کند. پس از این، برنامه Process نام می‌گیرد.</p>

<h2>ساختار برنامه در حافظه (Core Image)</h2>
<ul>
<li><strong>Code:</strong> ساختار و کدهای برنامه و توابع فراخوانی شده</li>
<li><strong>Data:</strong> داده‌ها، متغیرها و انواع آنها</li>
<li><strong>Stack:</strong> صف حافظه برای تخصیص به call function</li>
<li><strong>Heap:</strong> تخصیص پویای حافظه (Dynamic Memory Allocation)</li>
</ul>

<h2>Process Control Block (PCB)</h2>
<p>جدولی در حافظه که به ازای هر برنامه یک سطر دارد:</p>

<h3>ستون‌های PCB:</h3>

<h4>1. Process ID</h4>
<p>شناسه منحصر به فرد فرآیند</p>

<h4>2. Status (وضعیت)</h4>
<table>
<tr><th>وضعیت</th><th>توضیح</th></tr>
<tr><td>Ready</td><td>حافظه در اختیار دارد و منتظر CPU است</td></tr>
<tr><td>Running</td><td>CPU در اختیار است و دستورات اجرا می‌شوند</td></tr>
<tr><td>Blocked</td><td>با I/O در تماس است، CPU ندارد</td></tr>
<tr><td>Terminated</td><td>اجرا خاتمه یافته (halt)</td></tr>
<tr><td>Suspended</td><td>بن‌بست موقت برای برنامه</td></tr>
</table>

<h4>3. Priority (اولویت)</h4>
<p>اولویت درخواست پردازنده که می‌تواند از اول وارد شده یا محاسبه شود:</p>
<div class="formula-box">
PR = Average I/O Time / Average CPU Time
</div>
<p>فرآیندی که بیشتر از I/O استفاده کند، اولویت بالاتری دارد.</p>

<h4>4. کپی رجیسترها</h4>
<ul>
<li>Copy of PC (Program Counter)</li>
<li>Copy of PSW</li>
<li>Copy of General Purpose Registers</li>
</ul>

<h4>5. اطلاعات دیگر</h4>
<ul>
<li>Accounting Information</li>
<li>Memory Management Info</li>
<li>I/O Management Info</li>
</ul>

<div class="important-box">
<strong>تعریف فرآیند:</strong> فرآیند برنامه‌ای است که منابع مورد نیاز در اختیار آن قرار داده و اطلاعات کنترلی برای آن ایجاد شده و آماده اجرا است.
<br><br>
<strong>Address Space of Process = Core Image + Process Table</strong>
</div>

<h2>Dispatcher (CPU Scheduler)</h2>
<p>برنامه سیستمی که مسئول تخصیص CPU به فرآیندها است:</p>

<ol>
<li>فرآیندها در Ready Queue قرار می‌گیرند</li>
<li>Dispatcher یکی از برنامه‌ها را انتخاب می‌کند</li>
<li>Time Slice روی RTC تنظیم می‌شود</li>
<li>وضعیت به Running تغییر می‌کند</li>
<li>Context در CPU کپی شده و برنامه اجرا می‌شود</li>
<li>با اتمام Time Slice، وقفه Timeout ارسال می‌شود</li>
<li>روتین خدماتی Timeout همان Dispatcher است</li>
</ol>

<h3>Context Switching</h3>
<p>جایگزینی Context برنامه‌ها که طبیعتاً زمان‌بر است.</p>

<h3>وضعیت Blocked</h3>
<p>اگر فرآیند درخواست I/O داشته باشد:</p>
<ol>
<li>به حالت Blocked می‌رود</li>
<li>Dispatcher به فرآیند بعدی می‌رود</li>
<li>با اتمام I/O، وقفه I/O Completion ارسال می‌شود</li>
<li>وضعیت از Blocked به Ready برمی‌گردد</li>
<li>فرآیند به انتهای Ready Queue اضافه می‌شود</li>
</ol>
    `},{id:5,title:"الگوریتم‌های زمان‌بندی CPU",icon:"Clock",description:"FIFO، Round Robin، SJF، SRTF، HRN و...",duration:"45 دقیقه",content:`
<h2>انواع زمان‌بندی</h2>

<h3>1. انحصاری (Preemptive)</h3>
<p>CPU تا اتمام برنامه در اختیار آن می‌ماند. مناسب Batch Processing.</p>

<h3>2. غیرانحصاری (Non-Preemptive)</h3>
<p>Context Switching دارد. مناسب Online و Real Time.</p>

<h2>اهداف طراحی زمان‌بندی</h2>
<ol>
<li><strong>منصف بودن:</strong> اگر اولویت‌ها یکسان باشد، به فرآیندی که زودتر آمده زودتر سرویس داده شود</li>
<li><strong>کمینه کردن Response Time و بیشینه کردن Throughput</strong></li>
<li><strong>کمینه کردن Overhead:</strong> کاهش زمان‌های تلف شده مثل Context Switching</li>
<li><strong>ترازمندی:</strong> اگر چند پردازنده داشتیم، همه درگیر باشند</li>
<li><strong>اعمال اولویت:</strong> به فرآیندهای I/O-bound زودتر سرویس داده شود</li>
<li><strong>جلوگیری از Starvation:</strong> با مکانیزم AGING</li>
<li><strong>ارجحیت به فرآیندهای دارای منابع کلیدی</strong></li>
</ol>

<div class="formula-box">
Response Time = Wait Time + Service Time
<br><br>
Throughput = تعداد فرآیندهایی که در واحد زمان به اتمام می‌رسند
</div>

<h2>الگوریتم‌های زمان‌بندی</h2>

<h3>1. FIFO (First In First Out)</h3>
<ul>
<li>نوع: Preemptive</li>
<li>معیار انتخاب: ترتیب ورود</li>
<li>مناسب: Batch Processing</li>
<li>مزیت: پیاده‌سازی ساده</li>
</ul>

<h3>2. Round Robin</h3>
<ul>
<li>نوع: Non-Preemptive</li>
<li>معیار انتخاب: ترتیب ورود + Time Slice ثابت</li>
<li>نحوه کار: هر فرآیند یک Quantum دریافت می‌کند و اگر تمام نشد به انتهای صف می‌رود</li>
</ul>

<div class="important-box">
<strong>مشکل:</strong> اگر فرآیند قبل از اتمام Quantum درخواست I/O کند، بقیه زمان هدر می‌رود.
<br>
<strong>راه‌حل:</strong> با درخواست I/O، Dispatcher نیز اجرا شود یا اندازه Quantum متغیر باشد.
</div>

<h3>3. Scheduling with Dynamic Quantum's</h3>
<ul>
<li>مثل Round Robin با Time Slice متغیر</li>
<li>بر اساس رفتار گذشته فرآیند، میانگین زمان استفاده محاسبه می‌شود</li>
<li>مزیت: افزایش نسبی کارایی</li>
<li>عیب: بر اساس حدس و تخمین است</li>
</ul>

<h3>4. SJF (Shortest Job First)</h3>
<ul>
<li>نوع: Preemptive</li>
<li>معیار: زمان CPU کمتر → اولویت بالاتر</li>
<li>کاربر زمان مورد نیاز را اعلام می‌کند</li>
</ul>

<div class="formula-box">
P = 1/S
<br>
P: اولویت (عدد کوچکتر بهتر)
<br>
S: زمان استفاده از CPU
</div>

<h3>5. SRTF (Shortest Remaining Time First)</h3>
<ul>
<li>نوع: Non-Preemptive</li>
<li>تفاوت با SJF: زمان توسط سیستم عامل تخمین زده می‌شود</li>
<li>از Exponential Average استفاده می‌کند</li>
</ul>

<div class="formula-box">
τ(n+1) = α·τ(n) + (1-α)·X(n)
<br><br>
X(n): میزان استفاده فرآیند در لحظه n
<br>
τ(n): میانگین استفاده تا لحظه n
<br>
0 ≤ α ≤ 1
</div>

<div class="important-box">
تأثیر CPU Burstهای جدیدتر بیشتر است (نزدیک‌تر به حال).
</div>

<h3>6. Feedback (بازخورد)</h3>
<ul>
<li>صف‌هایی با اولویت‌های مختلف</li>
<li>فرآیندها ابتدا در صف با اولویت بالا قرار می‌گیرند</li>
<li>پس از چند Quantum، بر اساس رفتار به صف مناسب منتقل می‌شوند</li>
<li>صف‌های با اولویت بالاتر Time Slice کوتاه‌تر دارند</li>
</ul>

<h3>7. HRN (Highest Response Ratio Next)</h3>
<ul>
<li>مبتنی بر اولویت با مکانیزم Aging</li>
<li>می‌تواند Preemptive یا Non-Preemptive باشد</li>
</ul>

<div class="formula-box">
RR = (W + S) / S
<br><br>
W: زمان انتظار
<br>
S: زمان سرویس
</div>

<div class="important-box">
با در نظر گرفتن W، هرچه فرآیندی بیشتر منتظر بماند، اولویتش بیشتر می‌شود.
</div>

<h3>8. Lottery Scheduling (شانسی)</h3>
<ul>
<li>به هر فرآیند یک عدد تصادفی (بلیط) داده می‌شود</li>
<li>Dispatcher عدد تصادفی تولید می‌کند و اگر match شد، CPU اختصاص می‌یابد</li>
<li>فرآیند می‌تواند چندین بلیط داشته باشد</li>
<li>مزیت: مشکل گرسنگی بوجود نمی‌آید</li>
</ul>

<h3>9. Guaranteed Scheduling (تضمین شده)</h3>
<ul>
<li>سهم مساوی از CPU به هر فرآیند</li>
<li>فرآیندی که کمتر از سهم استفاده کرده، اولویت بالاتر</li>
</ul>

<div class="formula-box">
سهمیه = وقت پردازنده / تعداد فرآیندها
<br><br>
اولویت = میزان استفاده / سهمیه
<br>
(عدد کوچکتر = اولویت بالاتر)
</div>

<h3>10. Fair Share Scheduling (سهم عادلانه)</h3>
<ul>
<li>اولویت‌دهی گروهی به فرآیندها</li>
<li>ایده از UNIX</li>
<li>به رفتار گروه نیز توجه دارد</li>
</ul>

<div class="formula-box">
P(j,t) = CPU(j,t)/2 + GCPU(k,t)/(4·W(k)) + Base(j)
</div>

<h2>معیارهای مقایسه</h2>
<table>
<tr><th>معیار</th><th>توضیح</th><th>هدف</th></tr>
<tr><td>متوسط زمان پاسخ</td><td>R = زمان اتمام - زمان ورود</td><td>کمتر بهتر</td></tr>
<tr><td>متوسط زمان انتظار</td><td>W = زمان پاسخ - زمان CPU</td><td>کمتر بهتر</td></tr>
<tr><td>گذردهی (T)</td><td>تعداد فرآیند / زمان کل</td><td>بیشتر بهتر</td></tr>
<tr><td>کارایی CPU</td><td>(زمان کل - زمان بیکاری) / زمان کل × 100</td><td>بیشتر بهتر</td></tr>
</table>
    `},{id:6,title:"زمان‌بندی فرآیندهای بلادرنگ",icon:"Timer",description:"Rate-Monotonic، EDF و LDF",duration:"20 دقیقه",content:`
<h2>فرآیندهای بلادرنگ (Real-Time)</h2>
<p>فرآیندهایی که باید بلافاصله به آنها رسیدگی شود.</p>

<h3>انواع فرآیندهای بلادرنگ:</h3>

<h4>1. غیرمتناوب (Aperiodic)</h4>
<p>به صورت غیرمتناوب به سیستم اعلان می‌شوند. مثال: اعلان حریق یا دزدی</p>

<h4>2. متناوب (Periodic) - Event/رخداد</h4>
<p>به صورت متناوب و مشخص با rate معین می‌آیند. مثال: فریم‌ها در سوییچ یا packet در روتر</p>

<h3>شرایط امکان زمان‌بندی</h3>
<div class="formula-box">
Σ(C(i)/P(i)) ≤ 1
<br><br>
C: زمان پردازنده (CPU Time)
<br>
P: دوره تناوب (Period)
</div>

<div class="important-box">
اگر این نسبت بزرگتر از 1 شود، نمی‌توان در درازمدت به رخدادها رسیدگی کرد و برخی drop می‌شوند.
</div>

<h2>روش‌های زمان‌بندی بلادرنگ</h2>

<h3>1. Rate-Monotonic (RMS - نرخ یکنواخت)</h3>
<div class="important-box">
<strong>قانون:</strong> Event با فرکانس بالاتر (Period کوتاه‌تر) اولویت بالاتری دارد.
</div>

<div class="example-box">
<h4>مثال:</h4>
<p>E1: P=100ms, C=40ms → f=10Hz</p>
<p>E2: P=50ms, C=15ms → f=20Hz</p>
<p>E2 اولویت بالاتری دارد چون فرکانس بیشتری دارد.</p>
</div>

<h3>2. Earliest Deadline First (EDF - کمترین مهلت)</h3>
<div class="important-box">
<strong>قانون:</strong> به Event که deadline کوتاه‌تری دارد زودتر رسیدگی می‌شود.
<br><br>
<strong>Deadline:</strong> فاصله بین درخواست یک Event تا آمدن Event بعدی
</div>

<h3>3. Least Deadline First (LDF - کمترین لختی)</h3>
<p>در سیستم عامل IOS سوییچ‌ها استفاده می‌شود.</p>

<div class="formula-box">
L = D - C
<br><br>
L: لختی (Laxity)
<br>
D: مهلت (Deadline)
<br>
C: زمان پردازش
</div>

<div class="important-box">
به رخدادهایی که لختی کمتری دارند زودتر سرویس‌دهی می‌شود.
</div>

<div class="example-box">
<h4>مثال محاسبه:</h4>
<table>
<tr><th>رخداد</th><th>C</th><th>P</th><th>Check</th></tr>
<tr><td>E1</td><td>40ms</td><td>100ms</td><td>40/100 = 0.4</td></tr>
<tr><td>E2</td><td>25ms</td><td>50ms</td><td>25/50 = 0.5</td></tr>
<tr><td>E3</td><td>10ms</td><td>50ms</td><td>10/50 = 0.2</td></tr>
</table>
<p>جمع = 0.4 + 0.5 + 0.2 = 1.1 > 1 ← نمی‌توان زمان‌بندی کرد!</p>
</div>
    `},{id:7,title:"نخ‌ها (Threads)",icon:"GitBranch",description:"KLT، ULT و مزایای Multi-Thread",duration:"20 دقیقه",content:`
<h2>Thread یا Light Weight Process</h2>
<p>الگوریتم‌ها می‌توانند به دو شکل باشند:</p>
<ul>
<li><strong>سریال:</strong> مراحل به ترتیب اجرا می‌شوند</li>
<li><strong>موازی:</strong> بخش‌هایی می‌توانند همزمان اجرا شوند</li>
</ul>

<div class="example-box">
<h4>مثال الگوریتم موازی:</h4>
<ul>
<li><strong>ضرب ماتریس:</strong> ضرب هر سطر در هر ستون مستقل است</li>
<li><strong>Merge Sort:</strong> تقسیم به n بخش و مرتب‌سازی مستقل</li>
</ul>
</div>

<h3>کتابخانه‌های Thread</h3>
<table>
<tr><th>سیستم عامل</th><th>کتابخانه</th></tr>
<tr><td>Windows</td><td>Win32 API</td></tr>
<tr><td>UNIX</td><td>POSIX</td></tr>
<tr><td>Java</td><td>JAVA THREAD</td></tr>
</table>

<p>تابع Thread Create دارای 5 ورودی است از جمله خط شروع و آدرس داده‌ها.</p>

<h2>مزایای سیستم عامل Multi-Thread</h2>

<h4>1. اجرای مستقل بخش‌ها</h4>
<p>بخش‌های مستقل برنامه به صورت مستقل اجرا شده و به هر Thread منابع جداگانه اختصاص می‌یابد.</p>

<h4>2. Block شدن جزئی</h4>
<p>اگر یکی از Threadها درخواست I/O کند، فقط آن Thread بلاک می‌شود و بقیه کار می‌کنند.</p>

<h4>3. کاهش Context Switching</h4>
<p>حجم اطلاعات در یک Thread از یک Process کمتر است. مثلاً local variable و stack خصوصی است ولی در کلیات نیاز به Context Switching کامل نیست.</p>

<h2>انواع Thread</h2>

<h3>KLT (Kernel Level Thread)</h3>
<ul>
<li>مربوط به خود سیستم عامل</li>
<li>سیستم عامل آنها را می‌شناسد و مدیریت می‌کند</li>
<li>مزایای کامل Multi-Threading</li>
</ul>

<h3>ULT (User Level Thread)</h3>
<ul>
<li>سیستم عامل آنها را نمی‌شناسد</li>
<li>توسط ابزار برنامه‌نویسی شبیه‌سازی می‌شود</li>
<li>نسبت به حالت عادی سریع‌تر است</li>
<li>مزایای کامل را ندارد</li>
</ul>

<h2>مقایسه سیستم عامل‌ها</h2>
<table>
<tr><th>سیستم عامل</th><th>Process</th><th>Thread</th><th>نوع</th></tr>
<tr><td>UNIX</td><td>1</td><td>1</td><td>Single Thread</td></tr>
<tr><td>OS/2, Solaris, Windows</td><td>1</td><td>n</td><td>Multi Thread</td></tr>
<tr><td>Clouds/Emerald</td><td>m</td><td>1</td><td>Thread Immigration</td></tr>
<tr><td>TRIX</td><td>m</td><td>n</td><td>Hybrid</td></tr>
</table>

<h3>Thread Immigration</h3>
<p>حالت مهاجرت Thread: کدی که به صورت مشترک مورد استفاده چند فرآیند است، یک بار load شده و به صورت مشترک استفاده می‌شود.</p>
    `},{id:8,title:"همگام‌سازی فرآیندها",icon:"Lock",description:"Critical Section، الگوریتم‌های Dekker، Peterson و Lamport",duration:"40 دقیقه",content:`
<h2>مسئله همگام‌سازی</h2>
<p>اگر چند فرآیند بخواهند در یک ناحیه مشترک (حافظه، دیسک و...) عملیات انجام دهند:</p>
<ul>
<li><strong>Preemptive:</strong> مشکلی پیش نمی‌آید</li>
<li><strong>Non-Preemptive:</strong> ممکن است در عمل درج مشکل پیش آید</li>
</ul>

<div class="example-box">
<h4>مثال مشکل:</h4>
<pre><code>MOV AX, top    ; خواندن top
INC            ; افزایش
MOV top, AX    ; ذخیره</code></pre>
<p>اگر Time Slice قبل از آپدیت top تمام شود، فرآیند بعدی در همان خانه می‌نویسد!</p>
</div>

<h3>ناحیه بحرانی (Critical Section)</h3>
<p>بخشی از کد که در همه جا تکرار می‌شود و احتمال بروز خطا و ناسازگاری در آن بالاست.</p>

<h2>قوانین همگام‌سازی</h2>

<h3>1. انحصار متقابل (Mutual Exclusion)</h3>
<p>اگر فرآیندی در حال اجرای ناحیه بحرانی بود، آن قسمت به صورت انحصاری اجرا شود:</p>
<ul>
<li>یا CPU تا پایان به آن اختصاص یابد</li>
<li>یا فرآیند دیگر نتواند به ناحیه بحرانی وارد شود</li>
</ul>

<h3>2. پیشرفت (Progress)</h3>
<p>اگر هیچ فرآیندی در ناحیه بحرانی نبود، چیزی مانع ورود نشود.</p>

<h3>3. انتظار محدود (Bounded Waiting)</h3>
<p>تعداد فرآیندهای همگام باید محدود باشد تا مشکل گرسنگی پیش نیاید.</p>

<h2>روش‌های نرم‌افزاری</h2>

<h3>الگوریتم Dekker (نسخه 1)</h3>
<pre><code>int P# = 1;
void P1(){
  while(true){
    ...
    while(P# == 2);  // Busy Waiting
    C.S.
    P# = 2;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مشکلات:</strong>
<ul>
<li>Busy Waiting بالا</li>
<li>عدم رعایت Progress در برخی موارد</li>
</ul>
</div>

<h3>الگوریتم Dekker (نسخه 2 - با Flag)</h3>
<pre><code>unsigned char flag1 = false;
unsigned char flag2 = false;
void P1(){
  while(true){
    ...
    while(flag2);
    flag1 = true;
    C.S.
    flag1 = false;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مشکل:</strong> ممکن است هر دو همزمان وارد ناحیه بحرانی شوند (اگر کوانتوم بین خط 7 و 8 تمام شود).
</div>

<h3>الگوریتم Dekker (نسخه 3)</h3>
<pre><code>void P1(){
  while(true){
    ...
    flag1 = true;
    while(flag2);
    C.S.
    flag1 = false;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مشکل:</strong> امکان Deadlock اگر Time Slice بین خط 6 و 7 تمام شود.
</div>

<h3>الگوریتم Peterson</h3>
<pre><code>int TURN;
unsigned char flag1 = false;
unsigned char flag2 = false;

void P1(){
  while(true){
    ...
    flag1 = true;
    TURN = 2;
    while(flag2 && TURN == 2);
    C.S.
    flag1 = false;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>مزیت:</strong> Deadlock بوجود نمی‌آید حتی اگر Time Slice بین خطوط مختلف تمام شود، چون TURN تغییر می‌کند.
</div>

<h3>الگوریتم Lamport (Bakery)</h3>
<pre><code>#define N 10;
unsigned char flag[N];
int number[N];

void P(int i){
  int j;
  while(true){
    ...
    for(j=0; j<N; j++)
      while(flag[j]);    // منتظر نوبت‌گیری بقیه
    flag[i] = true;
    number[i] = getmax(number[], N-1)+1;  // نوبت گرفتن
    flag[i] = false;
    for(j=0; j<N; j++)
      while(number[j] != 0 && number[j] < number[i]);
    C.S.
    number[i] = 0;
    ...
  }
}</code></pre>

<div class="important-box">
<strong>در تمام روش‌های نرم‌افزاری Busy Waiting داریم!</strong>
</div>
    `},{id:9,title:"روش‌های سخت‌افزاری همگام‌سازی",icon:"Cpu",description:"Test & Set و SWAP",duration:"15 دقیقه",content:`
<h2>روش‌های سخت‌افزاری</h2>
<p>دستورالعمل‌های خاص در Protected Mode پردازنده</p>

<h3>1. Test & Set (TS)</h3>
<div class="formula-box">
TS a, b
<br>
a ← b
<br>
b ← 1
</div>

<pre><code>unsigned char ACTIVE = false;

void P1(){
  unsigned char key;
  while(true){
    ...
    key = true;
    while(key)
      TS(key, ACTIVE);  // key=ACTIVE, ACTIVE=1
    C.S.
    ACTIVE = false;
    ...
  }
}</code></pre>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>در اولین اجرا key=true، وارد حلقه می‌شود</li>
<li>key مقدار ACTIVE (false) را می‌گیرد</li>
<li>شرط برقرار نیست، وارد C.S. می‌شود</li>
<li>اگر کوانتوم وسط C.S. تمام شود، ACTIVE=1 است</li>
<li>P2 در حلقه می‌ماند تا کوانتوم تمام شود</li>
</ol>
</div>

<h3>2. SWAP (Exchange)</h3>
<div class="formula-box">
EXX a, b
<br>
a ↔ b
</div>

<pre><code>unsigned char lock = false;

void P1(){
  unsigned char key = false;
  while(true){
    ...
    key = true;
    while(key)
      EXX(key, lock);  // swap key and lock
    C.S.
    EXX(key, lock);
    ...
  }
}</code></pre>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>در ابتدا lock=false, key=true</li>
<li>بعد از EXX: lock=true, key=false</li>
<li>شرط برقرار نیست، وارد C.S. می‌شود</li>
<li>اگر کوانتوم تمام شود، lock=true است</li>
<li>P2 اجازه ورود ندارد</li>
</ol>
</div>

<div class="important-box">
<strong>مزیت:</strong> Busy Waiting وجود دارد اما زمان‌های کوتاه‌تری صرف می‌شود.
<br><br>
<strong>در روش‌های بهتر:</strong> به جای Busy Waiting، CPU از فرآیند گرفته می‌شود تا بتواند به ناحیه بحرانی وارد شود.
</div>
    `},{id:10,title:"متغیرهای راهنما (Semaphore)",icon:"Gauge",description:"ساختار، عملیات Wait و Signal",duration:"30 دقیقه",content:`
<h2>Semaphore Variables</h2>
<p>نوعی تایپ در پردازنده با ساختار و عملیات مشخص</p>

<h3>ساختار Semaphore</h3>
<pre><code>typedef struct {
  int value;
  process *queue;
} Semaphore;

Semaphore S;</code></pre>

<h3>عملیات Wait</h3>
<pre><code>void wait(Semaphore S){
  --S.value;
  if(S.value < 0){
    insert the process into S.queue;
    block the process;
  }
}</code></pre>

<h3>عملیات Signal</h3>
<pre><code>void signal(Semaphore S){
  ++S.value;
  if(S.value <= 0){
    delete a process from S.queue;
    wakeup the process;
  }
}</code></pre>

<h2>استفاده برای انحصار متقابل</h2>
<pre><code>Semaphore mutex = 1;

void P1(){
  while(true){
    ...
    wait(mutex);
    C.S.
    signal(mutex);
    ...
  }
}</code></pre>

<div class="example-box">
<h4>نحوه کار:</h4>
<ol>
<li>در ابتدا صف خالی و mutex=1</li>
<li>P1 اجرا: wait اجرا شده، mutex=0، شرط برقرار نیست → وارد C.S.</li>
<li>اگر کوانتوم تمام شود و P2 اجرا شود:</li>
<li>wait اجرا: mutex=-1, شرط برقرار → P2 به صف اضافه و Block</li>
<li>وقتی P1 برگردد: signal اجرا → mutex=0 → P2 از صف خارج و wakeup</li>
</ol>
</div>

<div class="important-box">
<strong>مزیت اصلی:</strong> فرآیندی که شرایط ورود را ندارد، به جای Busy Waiting به حالت Block می‌رود!
</div>

<h2>مثال: Producer-Consumer با بافر محدود</h2>
<pre><code>#define Buff_Size = 100;
Semaphore mutex = 1;
Semaphore full = 0;       // تعداد خانه‌های پر
Semaphore empty = Buff_Size;  // تعداد خانه‌های خالی

void producer(){
  while(true){
    ...
    produce();
    wait(empty);    // صبر تا جای خالی باشد
    wait(mutex);    // ورود انحصاری
    insert();
    signal(mutex);
    signal(full);   // یک خانه پر شد
    ...
  }
}

void consumer(){
  while(true){
    ...
    wait(full);     // صبر تا داده باشد
    wait(mutex);
    delete();
    signal(mutex);
    signal(empty);  // یک خانه خالی شد
    consumer();
    ...
  }
}</code></pre>

<div class="important-box">
<strong>در بافر نامحدود:</strong> empty لازم نیست و خطوط مربوط به آن حذف می‌شوند.
</div>

<h2>مثال: Jurassic Park</h2>
<p>پارک با n ماشین تک‌نفره و m مسافر:</p>

<pre><code>#define m 20;
#define n 15;
Semaphore mutex = 1;
Semaphore passenger = m;
Semaphore cars = n;

void catch_off(){  // پیاده شدن
  while(true){
    ...
    wait(mutex);
    catch_off();
    signal(mutex);
    signal(cars);   // ماشین آزاد شد
    ...
  }
}

void catch_on(){   // سوار شدن
  while(true){
    ...
    wait(passenger);  // مسافر هست؟
    wait(cars);       // ماشین هست؟
    wait(mutex);
    catch_on();
    signal(mutex);
    ...
  }
}

void passenger_entrance(){
  while(true)
    signal(passenger);  // مسافر وارد شد
}</code></pre>
    `},{id:11,title:"انتقال پیام (Message Passing)",icon:"MessageSquare",description:"Blocking، Non-Blocking و Addressing",duration:"25 دقیقه",content:`
<h2>Message Passing</h2>
<p>قابلیتی که فرآیندها بتوانند بر اساس یک استاندارد پیام رد و بدل کنند.</p>

<h3>دستورات اصلی</h3>
<div class="formula-box">
Send(Destination Add, Message)
<br>
Receive(Destination Add, Message)
</div>

<h2>انواع Send و Receive</h2>

<h3>Blocking Send</h3>
<p>فرآیند منتظر پاسخ می‌ماند و تا دریافت پاسخ در حالت Block است.</p>

<h3>Blocking Receive</h3>
<p>اگر پیامی نباشد، فرآیند Block می‌شود تا پیامی برسد.</p>

<h3>Non-Blocking Send</h3>
<p>پیام ارسال شده و فرآیند منتظر پاسخ نمی‌ماند.</p>

<h3>Non-Blocking Receive</h3>
<p>اگر پیام بود پردازش می‌شود، اگر نبود به فرآیند بعدی می‌رود.</p>

<h2>ترکیب‌های متداول</h2>

<h4>a. Blocking Send - Blocking Receive</h4>
<p>برای فرستنده پاسخ الزامی و گیرنده باید به پیام‌ها رسیدگی کند.</p>

<h4>b. Non-Blocking Send - Blocking Receive</h4>
<p>مثال: Browser (Non-Blocking Send) و Web Server مثل Apache (Blocking Receive)</p>

<h4>c. Non-Blocking Send - Non-Blocking Receive</h4>
<p>فرستنده منتظر نیست، گیرنده هم فقط پیام‌های موجود را پردازش می‌کند.</p>

<h2>Addressing</h2>

<h3>Direct (مستقیم)</h3>
<div class="formula-box">
Host_id : Process_id
</div>
<p>مشکل: با restart شدن سیستم، Process ID تغییر می‌کند.</p>

<h3>In-Direct (غیرمستقیم)</h3>
<p>استفاده از Port:</p>
<ul>
<li>Port یک آدرس منطقی در لایه 4 است</li>
<li>مقدار: 0 تا 65535</li>
<li>Port Map Table: مشخص می‌کند هر Port به کدام آدرس حافظه متصل است</li>
</ul>

<table>
<tr><th>سرویس</th><th>Port</th></tr>
<tr><td>HTTP</td><td>80</td></tr>
<tr><td>HTTPS</td><td>443</td></tr>
<tr><td>FTP</td><td>20, 21</td></tr>
<tr><td>SSH</td><td>22</td></tr>
<tr><td>Telnet</td><td>23</td></tr>
<tr><td>SMTP</td><td>25</td></tr>
<tr><td>POP3</td><td>110</td></tr>
</table>

<h2>Message Format</h2>
<ul>
<li><strong>Header:</strong> نوع پیام (Request, Reply, Acknowledge, Confirm, Test to Active, Null)</li>
<li>اولویت، طول پیام، آدرس مقصد، توالی ترتیب</li>
<li><strong>Body:</strong> محتوای پیام</li>
</ul>

<h2>Queuing Discipline</h2>
<p>نحوه تحویل پیام‌ها معمولاً FIFO است.</p>

<h2>استفاده برای انحصار متقابل</h2>
<pre><code>mailbox mutex;

void main(){
  createmailbox(mutex);
  send(mutex, Null);  // Token
}

void P1(){
  message msg;
  while(true){
    ...
    receive(mutex, msg);  // گرفتن Token
    C.S.
    send(mutex, msg);     // برگرداندن Token
    ...
  }
}</code></pre>
    `},{id:12,title:"بن‌بست (Deadlock)",icon:"AlertTriangle",description:"شرایط وقوع، جلوگیری، اجتناب و تشخیص",duration:"40 دقیقه",content:`
<h2>بن‌بست (Deadlock)</h2>
<p>وقتی فرآیندها منابعی را درخواست می‌کنند که به هیچ وجه به آنها داده نشود (زمان انتظار بی‌نهایت).</p>

<div class="example-box">
<h4>سناریو:</h4>
<ul>
<li>R1 در اختیار P1</li>
<li>R2 در اختیار P2</li>
<li>P1 درخواست R2 → Block (بدون آزاد کردن R1)</li>
<li>P2 درخواست R1 → Block (بدون آزاد کردن R2)</li>
<li>هر دو برای همیشه منتظر می‌مانند!</li>
</ul>
</div>

<h2>شرایط وقوع Deadlock</h2>

<h3>1. Mutual Exclusion (انحصار متقابل)</h3>
<p>Resource به صورت انحصاری در اختیار فرآیند قرار گیرد.</p>

<h3>2. Preemption (زمان‌بندی انحصاری)</h3>
<p>روش زمان‌بندی Preemptive باشد.</p>

<h3>3. Hold & Wait (نگه‌داشتن و درخواست)</h3>
<p>فرآیند Resource را نگه دارد و در حالت Wait برود.</p>

<h3>4. Circular Wait (انتظار چرخشی)</h3>
<p>فرآیندها منابعی که در اختیار یکدیگر است را درخواست کنند.</p>

<h2>روش‌های مقابله با Deadlock</h2>

<h3>1. Deadlock Prevention (جلوگیری)</h3>
<p>نقض شرایط وقوع:</p>

<h4>نقض شرط 1:</h4>
<p>مستقیم امکان‌پذیر نیست. استفاده از الگوریتم‌های بدون بن‌بست (Peterson به جای Dekker)</p>

<h4>نقض شرط 2:</h4>
<p>استفاده از روش‌های Non-Preemptive</p>

<h4>نقض شرط 3:</h4>
<p>در ابتدا همه منابع مورد نیاز اختصاص یابد. مشکل: استفاده نابهینه از منابع</p>

<h4>نقض شرط 4:</h4>
<p>به منابع شماره ترتیبی داده شود. فقط می‌توان منبع با شماره بزرگتر از منابع در اختیار را درخواست کرد.</p>

<div class="important-box">
<strong>مشکل Prevention:</strong> هزینه بالا
</div>

<h3>2. Deadlock Avoidance (اجتناب)</h3>
<p>برنامه‌ها منابع مورد نیاز را اعلام می‌کنند ولی از اول اختصاص نمی‌یابد.</p>

<h4>ماتریس‌های System State:</h4>
<ul>
<li><strong>Resources:</strong> منابع موجود (R1, R2, ..., Rm)</li>
<li><strong>Available:</strong> منابع در دسترس (V1, V2, ..., Vm)</li>
<li><strong>Allocated:</strong> منابع تخصیص‌یافته به فرآیندها (Aij)</li>
<li><strong>Claim:</strong> نیازهای اعلام‌شده فرآیندها (Cij)</li>
</ul>

<h4>الگوریتم بانکداران (Banker's Algorithm)</h4>

<h5>Process Initiation Denial:</h5>
<div class="formula-box">
R(i) = V(i) + Σ A(k,i)  [منابع = در دسترس + تخصیص‌یافته]
<br>
A(k,i) ≤ C(k,i)  [درخواست ≤ اعلام‌شده]
<br>
C(k,i) ≤ R(i)  [اعلام‌شده ≤ کل منابع]
<br>
R(i) ≥ C(n+1,i) + Σ C(k,i)  [برای ایجاد فرآیند جدید]
</div>

<h5>Resource Allocation Denial - Safety Test:</h5>
<p><strong>وضعیت امن (Safe):</strong> همه فرآیندها بعد از مدتی معین خاتمه یابند.</p>

<div class="formula-box">
V(i) ≥ C(k,i) - A(k,i) ∀i,k
</div>

<p>اگر برای همه فرآیندها این شرط برقرار بود → Safe</p>
<p>اگر حداقل یکی برقرار نبود → ممکن است Unsafe باشد (بررسی با آزاد شدن منابع)</p>

<h3>3. Deadlock Detection/Recovery (تشخیص)</h3>
<p>هیچ محدودیتی اعمال نمی‌شود، فقط شناسایی و رفع می‌شود.</p>

<h4>روش 1 - ماتریس Request:</h4>
<div class="formula-box">
V(i) ≥ Q(i,k) - A(i,k) ∀i,k
</div>
<p>اگر حداقل دو فرآیند این شرط را نداشته باشند → Deadlock</p>

<h4>روش 2 - گراف جهت‌دار:</h4>
<ul>
<li>گره‌ها: Process و Resource</li>
<li>فلش از Process به Resource: درخواست</li>
<li>فلش از Resource به Process: تخصیص</li>
</ul>

<div class="important-box">
<strong>تشخیص:</strong> اگر مسیر بسته (چرخه) وجود داشته باشد و Resourceای به فرآیند خارج از مسیر که Block نشده اختصاص نداشته باشد → Deadlock
</div>
    `}],sa=[{lessonId:1,question:"کدام گزینه جزو نرم‌افزارهای سیستمی نیست؟",options:["Compiler","DBMS","Word Processor","Operating System"],correctIndex:2,explanation:"Word Processor یک نرم‌افزار کاربردی (Application) است نه سیستمی."},{lessonId:1,question:"تعریف صحیح سیستم عامل کدام است؟",options:["نرم‌افزاری برای اجرای برنامه‌ها","نرم‌افزاری سیستمی که وظیفه مدیریت منابع را برعهده دارد","نرم‌افزاری برای ذخیره فایل‌ها","نرم‌افزاری برای ارتباط با اینترنت"],correctIndex:1,explanation:"سیستم عامل نرم‌افزاری سیستمی است که وظیفه مدیریت منابع (سخت‌افزاری و نرم‌افزاری) را برعهده دارد."},{lessonId:1,question:"PMDI مخفف چیست؟",options:["Process Memory Device Information","Process Memory Device Input","چهار لایه مدیریت: Process, Memory, Device, Information","Primary Memory Data Interface"],correctIndex:2,explanation:"PMDI به چهار لایه مدیریت منابع اشاره دارد: Process Management, Memory Management, Device Management, Information Management"},{lessonId:1,question:"تفاوت Protection و Security در چیست؟",options:["هر دو یکی هستند","Protection مربوط به رمزگذاری و Security مربوط به دسترسی است","Protection مربوط به جلوگیری از دسترسی و Security مربوط به رمزگذاری است","Protection فقط برای فایل‌ها و Security برای شبکه است"],correctIndex:2,explanation:"Protection: جلوگیری از دسترسی غیرمجاز. Security: رمزگذاری محتوا حتی در صورت دسترسی."},{lessonId:2,question:"در روش Polling، مشکل اصلی چیست؟",options:["مصرف زیاد حافظه","CPU در طول عملیات I/O بیکار می‌ماند","نیاز به سخت‌افزار خاص","عدم پشتیبانی از چندین دستگاه"],correctIndex:1,explanation:"در Polling، CPU به صورت مداوم وضعیت I/O را بررسی می‌کند و در این مدت کار دیگری انجام نمی‌دهد."},{lessonId:2,question:"BUS Cycle Stealing به چه معناست؟",options:["دزدیدن داده از BUS","گرفتن کنترل BUS از CPU توسط DMA","از کار افتادن BUS","تقسیم BUS بین چند دستگاه"],correctIndex:1,explanation:"BUS Cycle Stealing یا ربودن چرخه گذرگاه، عمل گرفتن کنترل BUS از CPU توسط DMA Controller است."},{lessonId:2,question:"DMA چه زمانی وقفه به CPU می‌فرستد؟",options:["هر بار که بافر پر شود","فقط در پایان عملیات I/O","هر ثانیه یکبار","هرگز"],correctIndex:1,explanation:"DMA فقط در پایان عملیات I/O (با صفر شدن Counter) وقفه به CPU می‌فرستد."},{lessonId:3,question:"وقفه Program Interrupt توسط چه چیزی تولید می‌شود؟",options:["DMA","ALU پردازنده","RTC","I/O Device"],correctIndex:1,explanation:"وقفه‌های برنامه‌ای توسط ALU پردازنده تولید شده و به Control Unit ارسال می‌شوند."},{lessonId:3,question:"PSW مخفف چیست؟",options:["Process Status Word","Program Status Word","Processor Status Word","Primary Status Word"],correctIndex:1,explanation:"PSW یا Program Status Word شامل فلگ‌ها و اطلاعات وضعیت پردازنده است."},{lessonId:4,question:"کدام وضعیت نشان می‌دهد که فرآیند منتظر CPU است؟",options:["Running","Ready","Blocked","Terminated"],correctIndex:1,explanation:"Ready یعنی برنامه حافظه در اختیار دارد و آماده اجرا است و منتظر دریافت CPU است."},{lessonId:4,question:"Context Switching چیست؟",options:["تغییر سیستم عامل","جایگزینی Context برنامه‌ها","تغییر حافظه","تغییر CPU"],correctIndex:1,explanation:"Context Switching به جایگزینی Context (وضعیت رجیسترها و...) برنامه‌ها گفته می‌شود."},{lessonId:4,question:"Time Slice یا Quantum چیست؟",options:["زمان کل اجرای برنامه","بازه زمانی اختصاص‌یافته از CPU به فرآیند","زمان انتظار در صف","زمان I/O"],correctIndex:1,explanation:"Time Slice یا Quantum بازه زمانی است که از CPU به یک فرآیند اختصاص داده می‌شود."},{lessonId:5,question:"در کدام الگوریتم، CPU تا اتمام برنامه در اختیار آن می‌ماند؟",options:["Round Robin","FIFO","SRTF","Feedback"],correctIndex:1,explanation:"FIFO یک روش Preemptive است که CPU تا اتمام برنامه در اختیار آن می‌ماند."},{lessonId:5,question:"در الگوریتم SJF، اولویت بر چه اساسی تعیین می‌شود؟",options:["ترتیب ورود","زمان CPU کمتر → اولویت بالاتر","زمان CPU بیشتر → اولویت بالاتر","تصادفی"],correctIndex:1,explanation:"در SJF، هرچه زمان استفاده از CPU کمتر باشد، اولویت بالاتر است (P = 1/S)."},{lessonId:5,question:"مکانیزم AGING برای چه استفاده می‌شود؟",options:["افزایش سرعت","جلوگیری از Starvation","کاهش مصرف حافظه","بهبود I/O"],correctIndex:1,explanation:"AGING برای جلوگیری از گرسنگی (Starvation) استفاده می‌شود. فرآیندهایی که بیشتر منتظر مانده‌اند، اولویت بیشتری می‌گیرند."},{lessonId:5,question:"فرمول Response Time چیست؟",options:["Response Time = Service Time","Response Time = Wait Time - Service Time","Response Time = Wait Time + Service Time","Response Time = Wait Time × Service Time"],correctIndex:2,explanation:"Response Time = Wait Time + Service Time"},{lessonId:6,question:"در الگوریتم Rate-Monotonic، اولویت بر چه اساسی است؟",options:["زمان پردازش بیشتر → اولویت بالاتر","دوره تناوب کوتاه‌تر (فرکانس بالاتر) → اولویت بالاتر","دوره تناوب بلندتر → اولویت بالاتر","تصادفی"],correctIndex:1,explanation:"در RMS، Event با فرکانس بالاتر (Period کوتاه‌تر) اولویت بالاتری دارد."},{lessonId:6,question:"شرط امکان زمان‌بندی رخدادهای بلادرنگ چیست؟",options:["Σ(C/P) > 1","Σ(C/P) ≤ 1","Σ(C/P) = 0","Σ(P/C) ≤ 1"],correctIndex:1,explanation:"اگر Σ(C/P) ≤ 1 باشد، می‌توان رخدادها را زمان‌بندی کرد."},{lessonId:7,question:"تفاوت KLT و ULT در چیست؟",options:["KLT سریع‌تر است","KLT توسط سیستم عامل مدیریت می‌شود، ULT توسط برنامه کاربر","ULT توسط سیستم عامل مدیریت می‌شود، KLT توسط برنامه کاربر","هیچ تفاوتی ندارند"],correctIndex:1,explanation:"KLT (Kernel Level Thread) توسط سیستم عامل مدیریت می‌شود و مزایای کامل دارد. ULT (User Level Thread) توسط برنامه شبیه‌سازی می‌شود."},{lessonId:7,question:"کدام مورد از مزایای Multi-Threading نیست؟",options:["کاهش Context Switching","Block شدن جزئی","افزایش مصرف حافظه","اجرای موازی"],correctIndex:2,explanation:"Multi-Threading باعث کاهش Context Switching، امکان Block شدن جزئی و اجرای موازی می‌شود. افزایش مصرف حافظه مزیت نیست."},{lessonId:8,question:"کدام مورد از قوانین همگام‌سازی نیست؟",options:["Mutual Exclusion","Progress","Bounded Waiting","Maximum Throughput"],correctIndex:3,explanation:"سه قانون همگام‌سازی: Mutual Exclusion، Progress، Bounded Waiting"},{lessonId:8,question:"مشکل اصلی الگوریتم Dekker چیست؟",options:["عدم پشتیبانی از چند فرآیند","Busy Waiting بالا","نیاز به سخت‌افزار خاص","عدم رعایت Mutual Exclusion"],correctIndex:1,explanation:"در تمام روش‌های نرم‌افزاری (از جمله Dekker) مشکل Busy Waiting وجود دارد."},{lessonId:8,question:"الگوریتم Peterson نسبت به Dekker چه مزیتی دارد؟",options:["سریع‌تر است","Deadlock بوجود نمی‌آید","نیاز به حافظه کمتری دارد","Busy Waiting ندارد"],correctIndex:1,explanation:"در الگوریتم Peterson با استفاده از متغیر TURN، حتی اگر Time Slice بین خطوط مختلف تمام شود، Deadlock بوجود نمی‌آید."},{lessonId:9,question:"دستور TS(a,b) چه عملی انجام می‌دهد؟",options:["a و b را جمع می‌کند","a ← b و b ← 1","a ↔ b","a ← b + 1"],correctIndex:1,explanation:"TS (Test & Set): a ← b و b ← 1"},{lessonId:9,question:"مزیت روش‌های سخت‌افزاری نسبت به نرم‌افزاری چیست؟",options:["Busy Waiting ندارند","زمان Busy Waiting کوتاه‌تر است","نیاز به CPU ندارند","پیاده‌سازی ساده‌تری دارند"],correctIndex:1,explanation:"در روش‌های سخت‌افزاری هنوز Busy Waiting وجود دارد اما زمان‌های کوتاه‌تری صرف می‌شود."},{lessonId:10,question:"مزیت اصلی Semaphore نسبت به روش‌های قبلی چیست؟",options:["سرعت بیشتر","به جای Busy Waiting، فرآیند Block می‌شود","نیاز به سخت‌افزار خاص ندارد","پیاده‌سازی ساده‌تر"],correctIndex:1,explanation:"در Semaphore، فرآیندی که شرایط ورود را ندارد به جای Busy Waiting به حالت Block می‌رود و CPU آزاد می‌شود."},{lessonId:10,question:"در مسئله Producer-Consumer، Semaphore full چه چیزی را نشان می‌دهد؟",options:["تعداد خانه‌های خالی","تعداد خانه‌های پر","تعداد تولیدکننده‌ها","تعداد مصرف‌کننده‌ها"],correctIndex:1,explanation:"full تعداد خانه‌های پر بافر را نشان می‌دهد. مصرف‌کننده wait(full) می‌کند تا داده‌ای برای مصرف وجود داشته باشد."},{lessonId:11,question:"در Blocking Send چه اتفاقی می‌افتد؟",options:["پیام ارسال شده و فرآیند ادامه می‌یابد","پیام ارسال شده و فرآیند منتظر پاسخ می‌ماند","پیام در صف قرار می‌گیرد","پیام حذف می‌شود"],correctIndex:1,explanation:"در Blocking Send، فرآیند منتظر پاسخ می‌ماند و تا دریافت پاسخ در حالت Block است."},{lessonId:11,question:"Port در شبکه چه کاربردی دارد؟",options:["آدرس‌دهی فیزیکی","مشخص کردن اینکه بسته به کدام فرآیند برسد","رمزگذاری داده‌ها","فشرده‌سازی داده‌ها"],correctIndex:1,explanation:"Port یک آدرس منطقی است که مشخص می‌کند بسته‌ها به کدام فرآیند در سیستم عامل مقصد تحویل داده شوند."},{lessonId:12,question:"کدام مورد از شرایط وقوع Deadlock نیست؟",options:["Mutual Exclusion","Hold & Wait","Circular Wait","Time Sharing"],correctIndex:3,explanation:"چهار شرط وقوع Deadlock: Mutual Exclusion، Preemption، Hold & Wait، Circular Wait"},{lessonId:12,question:"در الگوریتم بانکداران، وضعیت Safe به چه معناست؟",options:["هیچ فرآیندی در صف نیست","همه فرآیندها بعد از مدتی معین خاتمه می‌یابند","همه منابع آزاد هستند","هیچ درخواستی وجود ندارد"],correctIndex:1,explanation:"وضعیت Safe وضعیتی است که همه فرآیندها بعد از مدتی معین خاتمه یابند (هیچ Resource در حالت Wait نماند)."},{lessonId:12,question:"در روش Deadlock Prevention، برای نقض شرط Hold & Wait چه می‌کنیم؟",options:["از روش Non-Preemptive استفاده می‌کنیم","در ابتدا همه منابع مورد نیاز را اختصاص می‌دهیم","به منابع شماره ترتیبی می‌دهیم","از الگوریتم‌های بدون بن‌بست استفاده می‌کنیم"],correctIndex:1,explanation:"برای نقض Hold & Wait، در ابتدای ایجاد فرآیند همه منابع مورد نیاز اختصاص می‌یابد تا فرآیند درخواست جدیدی نداشته باشد."}],Zf=[{front:"تعریف سیستم عامل",back:"نرم‌افزاری سیستمی که وظیفه مدیریت منابع (سخت‌افزاری و نرم‌افزاری) را برعهده دارد"},{front:"PMDI",back:"چهار لایه مدیریت منابع: Process, Memory, Device, Information Management"},{front:"Time Slice / Quantum",back:"بازه زمانی که از CPU به یک فرآیند اختصاص داده می‌شود"},{front:"Context Switching",back:"جایگزینی Context (وضعیت رجیسترها و...) برنامه‌ها"},{front:"PCB",back:"Process Control Block - جدولی در حافظه که اطلاعات کنترلی هر فرآیند را نگه می‌دارد"},{front:"Ready Queue",back:"صفی که فرآیندهای آماده اجرا در آن منتظر گرفتن CPU هستند"},{front:"وضعیت Ready",back:"برنامه حافظه در اختیار دارد و منتظر دریافت CPU است"},{front:"وضعیت Running",back:"CPU در اختیار برنامه است و دستورات اجرا می‌شوند"},{front:"وضعیت Blocked",back:"برنامه با I/O در تماس است و CPU ندارد"},{front:"وضعیت Suspended",back:"بن‌بست موقت برای برنامه ایجاد شده"},{front:"Polling",back:"CPU به صورت مداوم وضعیت I/O را بررسی می‌کند - ناکارآمد"},{front:"Interrupt-Based I/O",back:"با پر شدن بافر، وقفه به CPU ارسال می‌شود"},{front:"DMA",back:"Direct Memory Access - انتقال داده بدون درگیر کردن CPU"},{front:"BUS Cycle Stealing",back:"گرفتن کنترل BUS از CPU توسط DMA"},{front:"Program Interrupt",back:"توسط ALU تولید می‌شود (تقسیم بر صفر، سرریز)"},{front:"I/O Completion",back:"توسط DMA صادر می‌شود وقتی عملیات I/O تمام شد"},{front:"Timeout",back:"توسط RTC صادر می‌شود وقتی Time Slice تمام شد"},{front:"Hardware Failure",back:"مشکلات سخت‌افزاری (ولتاژ پایین، دمای بالا)"},{front:"FIFO",back:"اولین فرآیند وارد شده، اول سرویس می‌گیرد - Preemptive"},{front:"Round Robin",back:"مثل FIFO با Time Slice ثابت - Non-Preemptive"},{front:"SJF",back:"کوتاه‌ترین Job اول - بر اساس زمان CPU اعلام شده"},{front:"SRTF",back:"کوتاه‌ترین زمان باقیمانده اول - زمان توسط OS تخمین زده می‌شود"},{front:"HRN",back:"بیشترین نسبت پاسخ - RR = (W+S)/S - دارای Aging"},{front:"Feedback",back:"صف‌های با اولویت مختلف - فرآیندها بین صف‌ها جابجا می‌شوند"},{front:"Lottery",back:"زمان‌بندی شانسی با بلیط - بدون Starvation"},{front:"Response Time",back:"Wait Time + Service Time"},{front:"Throughput",back:"تعداد فرآیندهایی که در واحد زمان به اتمام می‌رسند"},{front:"Starvation",back:"گرسنگی - انتظار طولانی مدت فرآیند برای گرفتن منابع"},{front:"AGING",back:"مکانیزمی که اولویت فرآیندهای منتظر را افزایش می‌دهد"},{front:"Rate-Monotonic",back:"فرکانس بالاتر (Period کوتاه‌تر) → اولویت بالاتر"},{front:"EDF",back:"Earliest Deadline First - کمترین مهلت اول"},{front:"LDF",back:"Least Deadline First - کمترین لختی اول - L = D - C"},{front:"شرط زمان‌بندی بلادرنگ",back:"Σ(C/P) ≤ 1"},{front:"KLT",back:"Kernel Level Thread - توسط سیستم عامل مدیریت می‌شود"},{front:"ULT",back:"User Level Thread - توسط برنامه کاربر شبیه‌سازی می‌شود"},{front:"Thread Immigration",back:"کد مشترک یک بار load شده و به صورت مشترک استفاده می‌شود"},{front:"Critical Section",back:"بخشی از کد که احتمال بروز خطا و ناسازگاری در آن بالاست"},{front:"Mutual Exclusion",back:"اگر فرآیندی در ناحیه بحرانی بود، دیگری نتواند وارد شود"},{front:"Progress",back:"اگر کسی در ناحیه بحرانی نبود، چیزی مانع ورود نشود"},{front:"Bounded Waiting",back:"تعداد فرآیندهای همگام باید محدود باشد"},{front:"Busy Waiting",back:"فرآیند در حلقه می‌ماند و وقت CPU را هدر می‌دهد"},{front:"Test & Set",back:"TS(a,b): a ← b, b ← 1"},{front:"SWAP/Exchange",back:"EXX(a,b): a ↔ b"},{front:"Semaphore",back:"متغیر راهنما با عملیات Wait و Signal"},{front:"wait(S)",back:"--S.value; if < 0 then block"},{front:"signal(S)",back:"++S.value; if ≤ 0 then wakeup"},{front:"Blocking Send",back:"فرآیند منتظر پاسخ می‌ماند"},{front:"Blocking Receive",back:"فرآیند منتظر پیام می‌ماند"},{front:"Port",back:"آدرس منطقی برای مشخص کردن فرآیند مقصد (0-65535)"},{front:"Deadlock",back:"وضعیتی که فرآیندها برای همیشه منتظر منابع می‌مانند"},{front:"شرایط Deadlock",back:"Mutual Exclusion, Preemption, Hold & Wait, Circular Wait"},{front:"Safe State",back:"وضعیتی که همه فرآیندها بعد از مدتی معین خاتمه می‌یابند"},{front:"Banker's Algorithm",back:"الگوریتم اجتناب از بن‌بست با بررسی Safety قبل از تخصیص"}];/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ep={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),O=(e,t)=>{const n=I.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:u,...f},m)=>I.createElement("svg",{ref:m,...ep,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${tp(e)}`,a].join(" "),...f},[...t.map(([g,h])=>I.createElement(g,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=O("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=O("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=O("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=O("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=O("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=O("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=O("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=O("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=O("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=O("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=O("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=O("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=O("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=O("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=O("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=O("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=O("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=O("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=O("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=O("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=O("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=O("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=O("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=O("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=O("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=O("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=O("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=O("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=O("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=O("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=O("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),xp={BookOpen:hn,HardDrive:up,Zap:jc,Layers:vn,Clock:xn,Timer:hp,GitBranch:kc,Lock:wc,Cpu:Xs,Gauge:ap,MessageSquare:dp,AlertTriangle:yc};function vp({currentView:e,setCurrentView:t,lessons:n,progress:r,onSelectLesson:l}){const[i,o]=I.useState(!0),[a,u]=I.useState(!1),f=[{id:"dashboard",label:"داشبورد",icon:nt},{id:"lessons",label:"درس‌ها",icon:hn,expandable:!0},{id:"algorithms",label:"شبیه‌سازی الگوریتم",icon:dr},{id:"quiz",label:"آزمون تمرینی",icon:Ks},{id:"flashcards",label:"فلش‌کارت",icon:vn},{id:"exam",label:"شبیه‌ساز امتحان",icon:ml}],m=r.completedLessons.length,g=n.length,h=Math.round(m/g*100);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"lg:hidden fixed top-4 right-4 z-50 bg-blue-600 p-2 rounded-lg",onClick:()=>u(!a),children:a?s.jsx(gp,{size:24}):s.jsx(cp,{size:24})}),s.jsxs("aside",{className:`
        fixed right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-l border-gray-800
        transform transition-transform duration-300 z-40
        ${a?"translate-x-0":"translate-x-full lg:translate-x-0"}
      `,children:[s.jsxs("div",{className:"p-6 border-b border-gray-800",children:[s.jsxs("h1",{className:"text-xl font-bold text-white flex items-center gap-2",children:[s.jsx(ml,{className:"text-blue-500"}),"سیستم عامل"]}),s.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"آموزش جامع"})]}),s.jsxs("div",{className:"p-4 border-b border-gray-800",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[s.jsx("span",{className:"text-gray-400",children:"پیشرفت کلی"}),s.jsxs("span",{className:"text-blue-400",children:[h,"%"]})]}),s.jsx("div",{className:"h-2 bg-gray-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full progress-animate",style:{width:`${h}%`}})}),s.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:[m," از ",g," درس تکمیل شده"]})]}),s.jsx("nav",{className:"p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]",children:f.map(k=>k.expandable?s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>o(!i),className:`
                      w-full flex items-center justify-between p-3 rounded-lg transition-colors
                      ${e==="lesson"?"bg-blue-500/20 text-blue-400":"text-gray-300 hover:bg-gray-800"}
                    `,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(k.icon,{size:20}),s.jsx("span",{children:k.label})]}),i?s.jsx(rp,{size:16}):s.jsx(wt,{size:16})]}),i&&s.jsx("div",{className:"mt-1 mr-4 space-y-1",children:n.map(w=>{const x=r.completedLessons.includes(w.id);return xp[w.icon],s.jsxs("button",{onClick:()=>{l(w),u(!1)},className:`
                              w-full flex items-center gap-2 p-2 pr-3 rounded-lg text-sm transition-colors
                              ${x?"text-emerald-400":"text-gray-400"}
                              hover:bg-gray-800
                            `,children:[x?s.jsx(Fe,{size:16,className:"text-emerald-500 flex-shrink-0"}):s.jsx(lp,{size:16,className:"text-gray-600 flex-shrink-0"}),s.jsx("span",{className:"truncate text-right",children:w.title})]},w.id)})})]},k.id):s.jsxs("button",{onClick:()=>{t(k.id),u(!1)},className:`
                  w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                  ${e===k.id?"bg-blue-500/20 text-blue-400":"text-gray-300 hover:bg-gray-800"}
                `,children:[s.jsx(k.icon,{size:20}),s.jsx("span",{children:k.label})]},k.id))}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-900/95",children:s.jsxs("div",{className:"text-center text-xs text-gray-500",children:[s.jsx("p",{children:"امتحان: ۶ روز دیگر"}),s.jsx("p",{className:"mt-1",children:"موفق باشید! 💪"})]})})]}),a&&s.jsx("div",{className:"lg:hidden fixed inset-0 bg-black/50 z-30",onClick:()=>u(!1)})]})}function yp({lesson:e,onComplete:t,onBack:n,onNext:r,onPrev:l,isCompleted:i,hasNext:o,hasPrev:a}){return I.useEffect(()=>{window.scrollTo(0,0)},[e==null?void 0:e.id]),e?s.jsxs("div",{className:"animate-fade-in max-w-4xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[s.jsx(nt,{size:20}),s.jsx("span",{children:"بازگشت به داشبورد"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[a&&s.jsxs("button",{onClick:l,className:"flex items-center gap-1 text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-gray-800",children:[s.jsx(gn,{size:18}),s.jsx("span",{children:"قبلی"})]}),o&&s.jsxs("button",{onClick:r,className:"flex items-center gap-1 text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-gray-800",children:[s.jsx("span",{children:"بعدی"}),s.jsx(wt,{size:18})]})]})]}),s.jsx("div",{className:"bg-gradient-to-l from-blue-600/20 to-purple-600/20 rounded-2xl p-6 mb-8 border border-blue-500/20",children:s.jsx("div",{className:"flex items-start justify-between",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-sm mb-2",children:[s.jsx(hn,{size:16}),s.jsx("span",{children:"درس"})]}),s.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mb-2",children:e.title}),s.jsx("p",{className:"text-gray-400",children:e.description}),s.jsxs("div",{className:"flex items-center gap-4 mt-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-gray-500 text-sm",children:[s.jsx(xn,{size:16}),s.jsx("span",{children:e.duration})]}),i&&s.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 text-sm",children:[s.jsx(Fe,{size:16}),s.jsx("span",{children:"تکمیل شده"})]})]})]})})}),s.jsx("div",{className:"bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800 mb-8",children:s.jsx("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:e.content}})}),s.jsxs("div",{className:"flex items-center justify-between bg-gray-900/50 rounded-xl p-4 border border-gray-800",children:[s.jsx("div",{className:"flex items-center gap-3",children:i?s.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 px-4 py-3",children:[s.jsx(Fe,{size:20}),s.jsx("span",{children:"این درس را مطالعه کردید"})]}):s.jsxs("button",{onClick:t,className:"flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors font-medium",children:[s.jsx(Fe,{size:20}),"علامت‌گذاری به عنوان تکمیل شده"]})}),s.jsxs("div",{className:"flex items-center gap-2",children:[a&&s.jsxs("button",{onClick:l,className:"flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors",children:[s.jsx(gn,{size:18}),s.jsx("span",{className:"hidden md:inline",children:"درس قبلی"})]}),o&&s.jsxs("button",{onClick:r,className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors",children:[s.jsx("span",{className:"hidden md:inline",children:"درس بعدی"}),s.jsx(wt,{size:18})]})]})]})]}):s.jsx("div",{className:"flex items-center justify-center h-96",children:s.jsxs("div",{className:"text-center",children:[s.jsx(hn,{className:"mx-auto text-gray-600 mb-4",size:48}),s.jsx("p",{className:"text-gray-400",children:"لطفاً یک درس را انتخاب کنید"})]})})}function kp({questions:e,lessons:t,onSaveScore:n,onBack:r}){const[l,i]=I.useState("all"),[o,a]=I.useState(0),[u,f]=I.useState(null),[m,g]=I.useState(!1),[h,k]=I.useState({}),[w,x]=I.useState(!1),N=I.useMemo(()=>l==="all"?e:e.filter(v=>v.lessonId===parseInt(l)),[e,l]),c=N[o],d=v=>{m||f(v)},p=()=>{u!==null&&(g(!0),k(v=>({...v,[c.id]:u})))},y=()=>{if(o<N.length-1)a(v=>v+1),f(null),g(!1);else{const v=Object.entries(h).filter(([z,B])=>{const de=e.find(M=>M.id===parseInt(z));return de&&de.correctAnswer===B}).length,S=c.correctAnswer===u?v+1:v;l!=="all"&&n(l,S,N.length),x(!0)}},C=()=>{a(0),f(null),g(!1),k({}),x(!1)},P=v=>{i(v),a(0),f(null),g(!1),k({}),x(!1)},T=()=>{let v=0;return Object.entries(h).forEach(([S,z])=>{const B=N.find(de=>de.id===parseInt(S));B&&B.correctAnswer===z&&v++}),m&&c.correctAnswer===u&&v++,v};if(w){const v=T(),S=Math.round(v/N.length*100);return s.jsx("div",{className:"animate-fade-in max-w-2xl mx-auto",children:s.jsxs("div",{className:"bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20 text-center",children:[s.jsx(hl,{className:"mx-auto text-amber-400 mb-4",size:64}),s.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"آزمون تمام شد!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"نتیجه شما:"}),s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 mb-6",children:[s.jsxs("div",{className:`text-5xl font-bold mb-2 ${S>=80?"text-emerald-400":S>=60?"text-amber-400":"text-red-400"}`,children:[S,"%"]}),s.jsxs("p",{className:"text-gray-400",children:[v," پاسخ صحیح از ",N.length," سوال"]})]}),s.jsxs("div",{className:"text-right mb-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-white mb-3",children:"تحلیل نتیجه:"}),s.jsx("p",{className:"text-gray-400",children:S>=80?"عالی! شما مفاهیم را به خوبی یاد گرفته‌اید. به همین روند ادامه دهید.":S>=60?"خوب است! اما هنوز جای پیشرفت دارید. درس‌ها را دوباره مرور کنید.":"نیاز به مطالعه بیشتر دارید. پیشنهاد می‌کنیم درس‌ها را با دقت بیشتری بخوانید."})]}),s.jsxs("div",{className:"flex gap-3 justify-center",children:[s.jsxs("button",{onClick:C,className:"flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors",children:[s.jsx(fr,{size:20}),"تلاش مجدد"]}),s.jsxs("button",{onClick:r,className:"flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors",children:[s.jsx(nt,{size:20}),"بازگشت"]})]})]})})}return c?s.jsxs("div",{className:"animate-fade-in max-w-3xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("button",{onClick:r,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[s.jsx(nt,{size:20}),s.jsx("span",{children:"بازگشت"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(op,{size:18,className:"text-gray-400"}),s.jsxs("select",{value:l,onChange:v=>P(v.target.value),className:"bg-gray-800 text-white rounded-lg px-3 py-2 text-sm border border-gray-700 focus:border-blue-500 outline-none",children:[s.jsx("option",{value:"all",children:"همه درس‌ها"}),t.map(v=>s.jsx("option",{value:v.id,children:v.title},v.id))]})]})]}),s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-800",children:[s.jsxs("div",{className:"flex items-center justify-between text-sm mb-2",children:[s.jsx("span",{className:"text-gray-400",children:"پیشرفت آزمون"}),s.jsxs("span",{className:"text-blue-400",children:[o+1," از ",N.length]})]}),s.jsx("div",{className:"h-2 bg-gray-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-l from-purple-500 to-pink-500 rounded-full transition-all duration-300",style:{width:`${(o+1)/N.length*100}%`}})})]}),s.jsxs("div",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-6",children:[s.jsxs("div",{className:"flex items-center gap-2 text-purple-400 text-sm mb-4",children:[s.jsx(mp,{size:16}),s.jsxs("span",{children:["سوال ",o+1]})]}),s.jsx("h2",{className:"text-xl font-bold text-white mb-6 leading-relaxed",children:c.question}),s.jsx("div",{className:"space-y-3",children:c.options.map((v,S)=>{let z="bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500";return m?S===c.correctAnswer?z="quiz-correct border-emerald-500":S===u&&S!==c.correctAnswer&&(z="quiz-incorrect border-red-500"):u===S&&(z="bg-purple-500/20 border-purple-500 text-purple-300"),s.jsx("button",{onClick:()=>d(S),disabled:m,className:`
                  w-full text-right p-4 rounded-xl border-2 transition-all quiz-option
                  ${z}
                `,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold",children:["الف","ب","ج","د"][S]}),s.jsx("span",{className:"flex-1",children:v}),m&&S===c.correctAnswer&&s.jsx(Fe,{className:"text-emerald-500",size:20}),m&&S===u&&S!==c.correctAnswer&&s.jsx(qs,{className:"text-red-500",size:20})]})},S)})}),m&&c.explanation&&s.jsxs("div",{className:"mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30",children:[s.jsx("h4",{className:"text-blue-400 font-semibold mb-2",children:"توضیح:"}),s.jsx("p",{className:"text-gray-300 leading-relaxed",children:c.explanation})]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-gray-500 text-sm",children:[Object.keys(h).length+(m?1:0)," سوال پاسخ داده شده"]}),s.jsx("div",{className:"flex gap-3",children:m?s.jsx("button",{onClick:y,className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium",children:o<N.length-1?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"سوال بعدی"}),s.jsx(wt,{size:18})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"مشاهده نتیجه"}),s.jsx(hl,{size:18})]})}):s.jsx("button",{onClick:p,disabled:u===null,className:`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium
                ${u===null?"bg-gray-700 text-gray-500 cursor-not-allowed":"bg-purple-500 hover:bg-purple-600 text-white"}
              `,children:"تایید پاسخ"})})]})]}):s.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto text-center",children:[s.jsx(Ks,{className:"mx-auto text-gray-600 mb-4",size:48}),s.jsx("p",{className:"text-gray-400",children:"سوالی برای این درس موجود نیست"}),s.jsx("button",{onClick:r,className:"mt-4 text-blue-400 hover:text-blue-300",children:"بازگشت به داشبورد"})]})}function wp({flashcards:e,onReview:t,onBack:n}){const[r,l]=I.useState(0),[i,o]=I.useState(!1),[a,u]=I.useState(new Set),[f,m]=I.useState(new Set),[g,h]=I.useState([...e]),[k,w]=I.useState(!1),x=I.useMemo(()=>k?g.filter(v=>f.has(v.id)):g,[g,k,f]),N=x[r],c=()=>{o(!i),i||t()},d=()=>{r<x.length-1&&(l(v=>v+1),o(!1))},p=()=>{r>0&&(l(v=>v-1),o(!1))},y=()=>{N&&(u(v=>new Set([...v,N.id])),m(v=>{const S=new Set(v);return S.delete(N.id),S}),d())},C=()=>{N&&(m(v=>new Set([...v,N.id])),u(v=>{const S=new Set(v);return S.delete(N.id),S}),d())},P=()=>{const v=[...e].sort(()=>Math.random()-.5);h(v),l(0),o(!1)},T=()=>{h([...e]),l(0),o(!1),u(new Set),m(new Set),w(!1)};return x.length===0?s.jsx("div",{className:"animate-fade-in max-w-2xl mx-auto text-center",children:s.jsxs("div",{className:"bg-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30",children:[s.jsx(Fe,{className:"mx-auto text-emerald-400 mb-4",size:64}),s.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"آفرین!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:k?"همه کارت‌های نامشخص را مرور کردید!":"فلش‌کارتی موجود نیست"}),s.jsxs("div",{className:"flex gap-3 justify-center",children:[s.jsxs("button",{onClick:T,className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors",children:[s.jsx(fr,{size:20}),"شروع مجدد"]}),s.jsxs("button",{onClick:n,className:"flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors",children:[s.jsx(nt,{size:20}),"بازگشت"]})]})]})}):s.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[s.jsx(nt,{size:20}),s.jsx("span",{children:"بازگشت"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>w(!k),className:`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${k?"bg-amber-500/20 text-amber-400":"bg-gray-800 text-gray-400"}`,children:[k?s.jsx(sp,{size:16}):s.jsx(ip,{size:16}),s.jsx("span",{children:"نامشخص‌ها"})]}),s.jsxs("button",{onClick:P,className:"flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg transition-colors text-sm",children:[s.jsx(pp,{size:16}),s.jsx("span",{children:"بر زدن"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-3 border border-gray-800 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-blue-400",children:x.length}),s.jsx("div",{className:"text-gray-500 text-xs",children:"کل کارت‌ها"})]}),s.jsxs("div",{className:"bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:a.size}),s.jsx("div",{className:"text-gray-500 text-xs",children:"یاد گرفته"})]}),s.jsxs("div",{className:"bg-amber-500/10 rounded-xl p-3 border border-amber-500/30 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-amber-400",children:f.size}),s.jsx("div",{className:"text-gray-500 text-xs",children:"نیاز به مرور"})]})]}),s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-800",children:[s.jsxs("div",{className:"flex items-center justify-between text-sm mb-2",children:[s.jsx("span",{className:"text-gray-400",children:"پیشرفت"}),s.jsxs("span",{className:"text-blue-400",children:[r+1," از ",x.length]})]}),s.jsx("div",{className:"h-2 bg-gray-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-l from-blue-500 to-cyan-500 rounded-full transition-all duration-300",style:{width:`${(r+1)/x.length*100}%`}})})]}),s.jsx("div",{onClick:c,className:"relative h-80 cursor-pointer perspective-1000 mb-6",children:s.jsxs("div",{className:`
            absolute inset-0 transition-transform duration-500 transform-style-3d
            ${i?"rotate-y-180":""}
          `,style:{transformStyle:"preserve-3d",transform:i?"rotateY(180deg)":"rotateY(0deg)"},children:[s.jsxs("div",{className:"absolute inset-0 backface-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 flex flex-col items-center justify-center",style:{backfaceVisibility:"hidden"},children:[s.jsx(vn,{className:"text-blue-400 mb-4",size:32}),s.jsx("p",{className:"text-xl text-center text-white font-medium leading-relaxed",children:N==null?void 0:N.front}),s.jsx("p",{className:"text-gray-500 text-sm mt-6",children:"برای دیدن پاسخ کلیک کنید"})]}),s.jsxs("div",{className:"absolute inset-0 backface-hidden bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl p-8 border border-emerald-500/30 flex flex-col items-center justify-center",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[s.jsx(Fe,{className:"text-emerald-400 mb-4",size:32}),s.jsx("p",{className:"text-xl text-center text-white font-medium leading-relaxed",children:N==null?void 0:N.back})]})]})}),s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("button",{onClick:p,disabled:r===0,className:`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${r===0?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-gray-800 hover:bg-gray-700 text-white"}
          `,children:[s.jsx(gn,{size:18}),"قبلی"]}),s.jsx("div",{className:"flex gap-2",children:x.slice(Math.max(0,r-2),Math.min(x.length,r+3)).map((v,S)=>{const z=Math.max(0,r-2)+S;return s.jsx("button",{onClick:()=>{l(z),o(!1)},className:`
                  w-3 h-3 rounded-full transition-colors
                  ${z===r?"bg-blue-500":"bg-gray-700 hover:bg-gray-600"}
                `},z)})}),s.jsxs("button",{onClick:d,disabled:r===x.length-1,className:`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${r===x.length-1?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-gray-800 hover:bg-gray-700 text-white"}
          `,children:["بعدی",s.jsx(wt,{size:18})]})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsxs("button",{onClick:C,className:"flex-1 flex items-center justify-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 px-4 py-3 rounded-xl transition-colors",children:[s.jsx(qs,{size:20}),"نیاز به مرور دارم"]}),s.jsxs("button",{onClick:y,className:"flex-1 flex items-center justify-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-4 py-3 rounded-xl transition-colors",children:[s.jsx(Fe,{size:20}),"یاد گرفتم"]})]})]})}function Sp({progress:e,lessons:t,onStartLesson:n,onStartQuiz:r,onStartFlashcards:l,onStartExam:i,onStartAlgorithms:o}){const a=e.completedLessons.length,u=t.length,f=Math.round(a/u*100),m=t.find(x=>!e.completedLessons.includes(x.id)),g=Object.values(e.quizScores),h=g.length>0?Math.round(g.reduce((x,N)=>x+N.score/N.total*100,0)/g.length):0,k=[{label:"درس‌های تکمیل شده",value:`${a}/${u}`,icon:Fe,color:"text-emerald-400",bg:"bg-emerald-500/10"},{label:"میانگین نمره آزمون",value:`${h}%`,icon:hl,color:"text-amber-400",bg:"bg-amber-500/10"},{label:"فلش‌کارت مرور شده",value:e.flashcardsReviewed,icon:vn,color:"text-blue-400",bg:"bg-blue-500/10"},{label:"روز تا امتحان",value:"۶",icon:np,color:"text-red-400",bg:"bg-red-500/10"}],w=[{title:"شبیه‌سازی الگوریتم",description:"مشاهده تعاملی الگوریتم‌های زمان‌بندی و همگام‌سازی",icon:Xs,color:"from-emerald-500 to-teal-500",action:o},{title:"آزمون تمرینی",description:"تست دانش خود با سوالات چند گزینه‌ای",icon:Ks,color:"from-purple-500 to-pink-500",action:r},{title:"فلش‌کارت",description:"مرور سریع مفاهیم کلیدی",icon:vn,color:"from-blue-500 to-cyan-500",action:l},{title:"شبیه‌ساز امتحان",description:"آزمون با زمان محدود مانند امتحان واقعی",icon:ml,color:"from-amber-500 to-orange-500",action:i}];return s.jsxs("div",{className:"animate-fade-in",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"داشبورد مطالعه"}),s.jsx("p",{className:"text-gray-400",children:"سیستم عامل - آمادگی برای امتحان"})]}),s.jsxs("div",{className:"bg-gradient-to-l from-blue-600/20 to-emerald-600/20 rounded-2xl p-6 mb-8 border border-blue-500/20",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"پیشرفت کلی"}),s.jsx("p",{className:"text-gray-400 text-sm",children:a===u?"تبریک! همه درس‌ها را تکمیل کردید!":`${u-a} درس باقی مانده`})]}),s.jsxs("div",{className:"text-4xl font-bold text-blue-400",children:[f,"%"]})]}),s.jsx("div",{className:"h-3 bg-gray-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full progress-animate",style:{width:`${f}%`}})})]}),s.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:k.map((x,N)=>s.jsxs("div",{className:`${x.bg} rounded-xl p-4 border border-gray-800`,children:[s.jsx(x.icon,{className:`${x.color} mb-2`,size:24}),s.jsx("div",{className:`text-2xl font-bold ${x.color}`,children:x.value}),s.jsx("div",{className:"text-gray-400 text-sm",children:x.label})]},N))}),m&&s.jsxs("div",{className:"bg-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-800 card-hover",children:[s.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 mb-4",children:[s.jsx(jc,{size:20}),s.jsx("span",{className:"text-sm font-medium",children:"درس بعدی پیشنهادی"})]}),s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:m.title}),s.jsx("p",{className:"text-gray-400 mb-4",children:m.description}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-gray-500 text-sm",children:[s.jsx(xn,{size:16}),s.jsx("span",{children:m.duration})]}),s.jsxs("button",{onClick:()=>n(m),className:"flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors",children:[s.jsx(dr,{size:18}),"شروع مطالعه"]})]})]}),s.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"دسترسی سریع"}),s.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:w.map((x,N)=>s.jsxs("button",{onClick:x.action,className:"bg-gray-900/50 rounded-xl p-5 border border-gray-800 card-hover text-right group",children:[s.jsx("div",{className:`w-12 h-12 rounded-lg bg-gradient-to-br ${x.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`,children:s.jsx(x.icon,{size:24,className:"text-white"})}),s.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:x.title}),s.jsx("p",{className:"text-gray-400 text-sm",children:x.description})]},N))}),s.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"همه درس‌ها"}),s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(x=>{const N=e.completedLessons.includes(x.id);return s.jsxs("button",{onClick:()=>n(x),className:`
                bg-gray-900/50 rounded-xl p-4 border text-right card-hover
                ${N?"border-emerald-500/30":"border-gray-800"}
              `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsx("div",{className:`
                  w-10 h-10 rounded-lg flex items-center justify-center
                  ${N?"bg-emerald-500/20":"bg-blue-500/20"}
                `,children:s.jsx(hn,{size:20,className:N?"text-emerald-400":"text-blue-400"})}),N&&s.jsx(Fe,{className:"text-emerald-500",size:20})]}),s.jsx("h3",{className:`font-bold mb-1 ${N?"text-emerald-400":"text-white"}`,children:x.title}),s.jsx("p",{className:"text-gray-500 text-sm line-clamp-2",children:x.description}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-500 text-xs mt-3",children:[s.jsx(xn,{size:14}),s.jsx("span",{children:x.duration})]})]},x.id)})})]})}function jp({questions:e,onBack:t}){const[n,r]=I.useState(!1),[l,i]=I.useState(!1),[o,a]=I.useState(0),[u,f]=I.useState({}),[m,g]=I.useState(0),[h,k]=I.useState([]),[w,x]=I.useState({questionCount:20,timePerQuestion:90});I.useEffect(()=>{if(!n||l||m<=0)return;const v=setInterval(()=>{g(S=>S<=1?(i(!0),0):S-1)},1e3);return()=>clearInterval(v)},[n,l,m]);const N=()=>{const S=[...e].sort(()=>Math.random()-.5).slice(0,Math.min(w.questionCount,e.length));k(S),g(S.length*w.timePerQuestion),f({}),a(0),r(!0),i(!1)},c=v=>{const S=Math.floor(v/60),z=v%60;return`${S.toString().padStart(2,"0")}:${z.toString().padStart(2,"0")}`},d=(v,S)=>{f(z=>({...z,[v]:S}))},p=()=>{i(!0)},y=()=>{let v=0;return h.forEach(S=>{u[S.id]===S.correctAnswer&&v++}),{correct:v,total:h.length,percentage:Math.round(v/h.length*100),unanswered:h.length-Object.keys(u).length}};if(!n)return s.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[s.jsx("div",{className:"flex items-center justify-between mb-6",children:s.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[s.jsx(nt,{size:20}),s.jsx("span",{children:"بازگشت"})]})}),s.jsxs("div",{className:"bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-2xl p-8 border border-amber-500/20 text-center",children:[s.jsx(ml,{className:"mx-auto text-amber-400 mb-4",size:64}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"شبیه‌ساز امتحان"}),s.jsx("p",{className:"text-gray-400 mb-8",children:"خود را برای امتحان واقعی آماده کنید"}),s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 mb-6 text-right",children:[s.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"تنظیمات امتحان"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-gray-400 text-sm mb-2",children:"تعداد سوالات"}),s.jsxs("select",{value:w.questionCount,onChange:v=>x(S=>({...S,questionCount:parseInt(v.target.value)})),className:"w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-amber-500 outline-none",children:[s.jsx("option",{value:10,children:"۱۰ سوال"}),s.jsx("option",{value:15,children:"۱۵ سوال"}),s.jsx("option",{value:20,children:"۲۰ سوال"}),s.jsx("option",{value:30,children:"۳۰ سوال"}),s.jsxs("option",{value:e.length,children:["همه (",e.length," سوال)"]})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-gray-400 text-sm mb-2",children:"زمان هر سوال"}),s.jsxs("select",{value:w.timePerQuestion,onChange:v=>x(S=>({...S,timePerQuestion:parseInt(v.target.value)})),className:"w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-amber-500 outline-none",children:[s.jsx("option",{value:60,children:"۱ دقیقه"}),s.jsx("option",{value:90,children:"۱.۵ دقیقه"}),s.jsx("option",{value:120,children:"۲ دقیقه"}),s.jsx("option",{value:180,children:"۳ دقیقه"})]})]})]}),s.jsxs("div",{className:"mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30",children:[s.jsxs("div",{className:"flex items-center gap-2 text-amber-400 mb-2",children:[s.jsx(xn,{size:18}),s.jsx("span",{className:"font-medium",children:"زمان کل امتحان:"})]}),s.jsxs("p",{className:"text-white text-lg",children:[Math.floor(Math.min(w.questionCount,e.length)*w.timePerQuestion/60)," دقیقه"]})]})]}),s.jsx("div",{className:"bg-gray-900/50 rounded-xl p-4 mb-6 text-right",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx(yc,{className:"text-amber-400 flex-shrink-0 mt-1",size:20}),s.jsxs("div",{className:"text-gray-400 text-sm",children:[s.jsx("p",{className:"mb-2",children:"• سوالات به صورت تصادفی انتخاب می‌شوند"}),s.jsx("p",{className:"mb-2",children:"• پس از اتمام زمان، امتحان به پایان می‌رسد"}),s.jsx("p",{children:"• می‌توانید بین سوالات جابجا شوید"})]})]})}),s.jsxs("button",{onClick:N,className:"flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl transition-colors font-medium text-lg mx-auto",children:[s.jsx(dr,{size:24}),"شروع امتحان"]})]})]});if(l){const v=y();return s.jsxs("div",{className:"animate-fade-in max-w-3xl mx-auto",children:[s.jsxs("div",{className:"bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20 text-center mb-8",children:[s.jsx(hl,{className:"mx-auto text-amber-400 mb-4",size:64}),s.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"امتحان به پایان رسید!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"نتیجه شما:"}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-4",children:[s.jsxs("div",{className:`text-4xl font-bold mb-1 ${v.percentage>=80?"text-emerald-400":v.percentage>=60?"text-amber-400":"text-red-400"}`,children:[v.percentage,"%"]}),s.jsx("div",{className:"text-gray-500 text-sm",children:"نمره نهایی"})]}),s.jsxs("div",{className:"bg-emerald-500/10 rounded-xl p-4",children:[s.jsx("div",{className:"text-4xl font-bold text-emerald-400 mb-1",children:v.correct}),s.jsx("div",{className:"text-gray-500 text-sm",children:"پاسخ صحیح"})]}),s.jsxs("div",{className:"bg-red-500/10 rounded-xl p-4",children:[s.jsx("div",{className:"text-4xl font-bold text-red-400 mb-1",children:v.total-v.correct}),s.jsx("div",{className:"text-gray-500 text-sm",children:"پاسخ غلط"})]})]}),v.unanswered>0&&s.jsxs("div",{className:"bg-amber-500/10 rounded-lg p-3 mb-6 text-amber-400 text-sm",children:[v.unanswered," سوال بدون پاسخ ماند"]}),s.jsxs("div",{className:"flex gap-3 justify-center",children:[s.jsxs("button",{onClick:N,className:"flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors",children:[s.jsx(fr,{size:20}),"امتحان جدید"]}),s.jsxs("button",{onClick:t,className:"flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors",children:[s.jsx(nt,{size:20}),"بازگشت"]})]})]}),s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"بررسی پاسخ‌ها"}),s.jsx("div",{className:"space-y-4",children:h.map((S,z)=>{const B=u[S.id],de=B===S.correctAnswer;return s.jsxs("div",{className:`bg-gray-900/50 rounded-xl p-4 border ${B===void 0?"border-gray-700":de?"border-emerald-500/30":"border-red-500/30"}`,children:[s.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[s.jsxs("span",{className:"text-gray-500 font-medium",children:[z+1,"."]}),s.jsx("p",{className:"text-white flex-1",children:S.question}),B!==void 0&&(de?s.jsx(Fe,{className:"text-emerald-500 flex-shrink-0",size:20}):s.jsx(qs,{className:"text-red-500 flex-shrink-0",size:20}))]}),s.jsx("div",{className:"mr-6 space-y-2",children:S.options.map((M,D)=>s.jsxs("div",{className:`text-sm p-2 rounded ${D===S.correctAnswer?"bg-emerald-500/20 text-emerald-400":D===B&&D!==S.correctAnswer?"bg-red-500/20 text-red-400":"text-gray-500"}`,children:[["الف","ب","ج","د"][D],") ",M]},D))}),S.explanation&&s.jsxs("div",{className:"mt-3 mr-6 p-3 bg-blue-500/10 rounded-lg text-sm",children:[s.jsx("span",{className:"text-blue-400 font-medium",children:"توضیح: "}),s.jsx("span",{className:"text-gray-300",children:S.explanation})]})]},S.id)})})]})}const C=h[o],P=m<60,T=Object.keys(u).length;return s.jsxs("div",{className:"animate-fade-in max-w-3xl mx-auto",children:[s.jsx("div",{className:`fixed top-0 left-0 right-0 z-50 ${P?"bg-red-900/95":"bg-gray-900/95"} backdrop-blur-sm border-b border-gray-800 p-4 mr-64`,children:s.jsxs("div",{className:"max-w-3xl mx-auto flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("div",{className:`flex items-center gap-2 ${P?"text-red-400":"text-blue-400"}`,children:[s.jsx(xn,{size:20,className:P?"animate-pulse":""}),s.jsx("span",{className:"text-xl font-mono font-bold",children:c(m)})]}),s.jsxs("div",{className:"text-gray-400 text-sm",children:[T,"/",h.length," پاسخ داده شده"]})]}),s.jsxs("button",{onClick:p,className:"flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm",children:[s.jsx(fp,{size:18}),"پایان امتحان"]})]})}),s.jsx("div",{className:"mt-20 mb-6",children:s.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:h.map((v,S)=>{const z=u[v.id]!==void 0,B=S===o;return s.jsx("button",{onClick:()=>a(S),className:`
                  w-10 h-10 rounded-lg font-medium text-sm transition-all
                  ${B?"bg-blue-500 text-white scale-110":z?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-gray-800 text-gray-400 hover:bg-gray-700"}
                `,children:S+1},v.id)})})}),s.jsxs("div",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-6",children:[s.jsxs("div",{className:"text-blue-400 text-sm mb-3",children:["سوال ",o+1," از ",h.length]}),s.jsx("h2",{className:"text-xl font-bold text-white mb-6 leading-relaxed",children:C.question}),s.jsx("div",{className:"space-y-3",children:C.options.map((v,S)=>{const z=u[C.id]===S;return s.jsx("button",{onClick:()=>d(C.id,S),className:`
                  w-full text-right p-4 rounded-xl border-2 transition-all
                  ${z?"bg-blue-500/20 border-blue-500 text-blue-300":"bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600"}
                `,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${z?"bg-blue-500 text-white":"bg-gray-700"}`,children:["الف","ب","ج","د"][S]}),s.jsx("span",{className:"flex-1",children:v})]})},S)})})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("button",{onClick:()=>a(v=>Math.max(0,v-1)),disabled:o===0,className:`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${o===0?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-gray-800 hover:bg-gray-700 text-white"}
          `,children:[s.jsx(gn,{size:18}),"قبلی"]}),s.jsxs("button",{onClick:()=>a(v=>Math.min(h.length-1,v+1)),disabled:o===h.length-1,className:`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${o===h.length-1?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-gray-800 hover:bg-gray-700 text-white"}
          `,children:["بعدی",s.jsx(wt,{size:18})]})]})]})}function Np(){const[e,t]=I.useState("fifo"),[n,r]=I.useState([{id:"P1",arrivalTime:0,burstTime:5,color:"bg-blue-500"},{id:"P2",arrivalTime:1,burstTime:3,color:"bg-emerald-500"},{id:"P3",arrivalTime:2,burstTime:4,color:"bg-amber-500"},{id:"P4",arrivalTime:3,burstTime:2,color:"bg-purple-500"}]),[l,i]=I.useState(2),[o,a]=I.useState([]),[u,f]=I.useState(0),[m,g]=I.useState(!1),[h,k]=I.useState({}),w=()=>{let x=[],N=n.map(y=>({...y,remainingTime:y.burstTime,startTime:-1,endTime:-1})),c=0;switch(e){case"fifo":N.sort((M,D)=>M.arrivalTime-D.arrivalTime),N.forEach(M=>{c<M.arrivalTime&&(c=M.arrivalTime),M.startTime=c;for(let D=0;D<M.burstTime;D++)x.push({time:c+D,process:M.id,color:M.color});c+=M.burstTime,M.endTime=c});break;case"sjf":let y=0;const C=N.length;for(;y<C;){let M=N.filter(A=>A.arrivalTime<=c&&A.remainingTime>0);if(M.length===0){x.push({time:c,process:"idle",color:"bg-gray-600"}),c++;continue}M.sort((A,Ct)=>A.burstTime-Ct.burstTime);let D=M[0];D.startTime===-1&&(D.startTime=c);for(let A=0;A<D.burstTime;A++)x.push({time:c+A,process:D.id,color:D.color});c+=D.burstTime,D.endTime=c,D.remainingTime=0,y++}break;case"srtf":let P=0;const T=N.length;for(;P<T;){let M=N.filter(A=>A.arrivalTime<=c&&A.remainingTime>0);if(M.length===0){x.push({time:c,process:"idle",color:"bg-gray-600"}),c++;continue}M.sort((A,Ct)=>A.remainingTime-Ct.remainingTime);let D=M[0];D.startTime===-1&&(D.startTime=c),x.push({time:c,process:D.id,color:D.color}),D.remainingTime--,c++,D.remainingTime===0&&(D.endTime=c,P++)}break;case"rr":let v=[],S=0,z=N.map(M=>({...M})),B=0;const de=z.length;for(;B<de;){if(z.forEach(A=>{A.arrivalTime===S&&!v.includes(A)&&A.remainingTime>0&&v.push(A)}),v.length===0){x.push({time:S,process:"idle",color:"bg-gray-600"}),S++;continue}let M=v.shift();M.startTime===-1&&(M.startTime=S);let D=Math.min(l,M.remainingTime);for(let A=0;A<D;A++)x.push({time:S+A,process:M.id,color:M.color});S+=D,M.remainingTime-=D,z.forEach(A=>{A.arrivalTime>S-D&&A.arrivalTime<=S&&!v.includes(A)&&A.remainingTime>0&&A!==M&&v.push(A)}),M.remainingTime>0?v.push(M):(M.endTime=S,B++)}break}let d=0,p=0;N.forEach(y=>{const C=y.endTime-y.arrivalTime,P=C-y.burstTime;d+=P,p+=C}),k({avgWaitTime:(d/N.length).toFixed(2),avgTurnaroundTime:(p/N.length).toFixed(2)}),a(x),f(0)};return I.useEffect(()=>{w()},[e,n,l]),I.useEffect(()=>{if(m&&u<o.length-1){const x=setTimeout(()=>{f(N=>N+1)},500);return()=>clearTimeout(x)}else u>=o.length-1&&g(!1)},[m,u,o.length]),s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-gray-800",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"شبیه‌ساز الگوریتم‌های زمان‌بندی CPU"}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:[{id:"fifo",label:"FIFO"},{id:"sjf",label:"SJF"},{id:"srtf",label:"SRTF"},{id:"rr",label:"Round Robin"}].map(x=>s.jsx("button",{onClick:()=>t(x.id),className:`px-4 py-2 rounded-lg transition-colors ${e===x.id?"bg-blue-500 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"}`,children:x.label},x.id))}),e==="rr"&&s.jsxs("div",{className:"mb-6",children:[s.jsxs("label",{className:"text-gray-400 text-sm mb-2 block",children:["Time Quantum: ",l]}),s.jsx("input",{type:"range",min:"1",max:"5",value:l,onChange:x=>i(parseInt(x.target.value)),className:"w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"})]}),s.jsx("div",{className:"mb-6 overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-gray-400",children:[s.jsx("th",{className:"p-2 text-right",children:"فرآیند"}),s.jsx("th",{className:"p-2 text-center",children:"زمان ورود"}),s.jsx("th",{className:"p-2 text-center",children:"زمان پردازش"})]})}),s.jsx("tbody",{children:n.map(x=>s.jsxs("tr",{className:"border-t border-gray-800",children:[s.jsxs("td",{className:"p-2",children:[s.jsx("span",{className:`inline-block w-3 h-3 rounded-full ${x.color} ml-2`}),x.id]}),s.jsx("td",{className:"p-2 text-center text-gray-300",children:x.arrivalTime}),s.jsx("td",{className:"p-2 text-center text-gray-300",children:x.burstTime})]},x.id))})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-gray-400 text-sm mb-2",children:"نمودار زمان‌بندی (Gantt Chart):"}),s.jsx("div",{className:"flex overflow-x-auto pb-2",children:o.map((x,N)=>s.jsx("div",{className:`
                min-w-[40px] h-12 flex items-center justify-center text-xs font-bold text-white
                border-l border-gray-700 first:border-l-0 transition-opacity
                ${x.color}
                ${N<=u?"opacity-100":"opacity-30"}
              `,children:x.process},N))}),s.jsxs("div",{className:"flex overflow-x-auto",children:[o.map((x,N)=>s.jsx("div",{className:"min-w-[40px] text-center text-xs text-gray-500",children:x.time},N)),o.length>0&&s.jsx("div",{className:"min-w-[40px] text-center text-xs text-gray-500",children:o[o.length-1].time+1})]})]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[s.jsx("button",{onClick:()=>f(Math.max(0,u-1)),className:"p-2 bg-gray-800 rounded-lg hover:bg-gray-700",children:s.jsx(gn,{size:20})}),s.jsx("button",{onClick:()=>g(!m),className:"p-2 bg-blue-500 rounded-lg hover:bg-blue-600",children:m?s.jsx(Sc,{size:20}):s.jsx(dr,{size:20})}),s.jsx("button",{onClick:()=>f(Math.min(o.length-1,u+1)),className:"p-2 bg-gray-800 rounded-lg hover:bg-gray-700",children:s.jsx(wt,{size:20})}),s.jsx("button",{onClick:()=>{f(0),g(!1)},className:"p-2 bg-gray-800 rounded-lg hover:bg-gray-700",children:s.jsx(fr,{size:20})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-blue-400",children:h.avgWaitTime}),s.jsx("div",{className:"text-gray-500 text-sm",children:"میانگین زمان انتظار"})]}),s.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:h.avgTurnaroundTime}),s.jsx("div",{className:"text-gray-500 text-sm",children:"میانگین زمان گردش"})]})]})]})}function Cp(){const[e,t]=I.useState(0),[n,r]=I.useState(!1),l=[{p0:"flag[0] = true",p1:"-",flag:[!0,!1],turn:0,inCS:[!1,!1],desc:"P0 علاقه خود را اعلام می‌کند"},{p0:"turn = 1",p1:"-",flag:[!0,!1],turn:1,inCS:[!1,!1],desc:"P0 حق تقدم را به P1 می‌دهد"},{p0:"while (flag[1] && turn==1)?",p1:"-",flag:[!0,!1],turn:1,inCS:[!1,!1],desc:"P0 بررسی می‌کند: شرط برقرار نیست پس وارد می‌شود"},{p0:"در ناحیه بحرانی",p1:"flag[1] = true",flag:[!0,!0],turn:1,inCS:[!0,!1],desc:"P0 در CS، P1 علاقه اعلام می‌کند"},{p0:"در ناحیه بحرانی",p1:"turn = 0",flag:[!0,!0],turn:0,inCS:[!0,!1],desc:"P1 حق تقدم را به P0 می‌دهد"},{p0:"در ناحیه بحرانی",p1:"while (flag[0] && turn==0)?",flag:[!0,!0],turn:0,inCS:[!0,!1],desc:"P1 بررسی می‌کند: شرط برقرار است پس منتظر می‌ماند"},{p0:"flag[0] = false",p1:"منتظر...",flag:[!1,!0],turn:0,inCS:[!1,!1],desc:"P0 از CS خارج می‌شود"},{p0:"-",p1:"وارد ناحیه بحرانی",flag:[!1,!0],turn:0,inCS:[!1,!0],desc:"P1 اکنون می‌تواند وارد CS شود"}];I.useEffect(()=>{if(n&&e<l.length-1){const o=setTimeout(()=>t(a=>a+1),1500);return()=>clearTimeout(o)}else e>=l.length-1&&r(!1)},[n,e]);const i=l[e];return s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-gray-800",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"شبیه‌ساز الگوریتم Peterson"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[s.jsxs("div",{className:`p-4 rounded-lg border-2 ${i.inCS[0]?"border-emerald-500 bg-emerald-500/10":"border-gray-700 bg-gray-800/50"}`,children:[s.jsx("h4",{className:"text-blue-400 font-bold mb-2",children:"Process 0"}),s.jsx("p",{className:"text-gray-300 text-sm",children:i.p0})]}),s.jsxs("div",{className:`p-4 rounded-lg border-2 ${i.inCS[1]?"border-emerald-500 bg-emerald-500/10":"border-gray-700 bg-gray-800/50"}`,children:[s.jsx("h4",{className:"text-purple-400 font-bold mb-2",children:"Process 1"}),s.jsx("p",{className:"text-gray-300 text-sm",children:i.p1})]})]}),s.jsxs("div",{className:"flex justify-center gap-8 mb-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"flag[0]"}),s.jsx("div",{className:`text-xl font-bold ${i.flag[0]?"text-emerald-400":"text-red-400"}`,children:i.flag[0]?"true":"false"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"flag[1]"}),s.jsx("div",{className:`text-xl font-bold ${i.flag[1]?"text-emerald-400":"text-red-400"}`,children:i.flag[1]?"true":"false"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"turn"}),s.jsx("div",{className:"text-xl font-bold text-amber-400",children:i.turn})]})]}),s.jsx("div",{className:"bg-blue-500/10 rounded-lg p-4 mb-6 text-center",children:s.jsx("p",{className:"text-blue-300",children:i.desc})}),s.jsxs("div",{className:"flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>t(Math.max(0,e-1)),className:"p-2 bg-gray-800 rounded-lg hover:bg-gray-700",children:s.jsx(gn,{size:20})}),s.jsx("button",{onClick:()=>r(!n),className:"p-2 bg-blue-500 rounded-lg hover:bg-blue-600",children:n?s.jsx(Sc,{size:20}):s.jsx(dr,{size:20})}),s.jsx("button",{onClick:()=>t(Math.min(l.length-1,e+1)),className:"p-2 bg-gray-800 rounded-lg hover:bg-gray-700",children:s.jsx(wt,{size:20})}),s.jsx("button",{onClick:()=>{t(0),r(!1)},className:"p-2 bg-gray-800 rounded-lg hover:bg-gray-700",children:s.jsx(fr,{size:20})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mb-1",children:[s.jsxs("span",{children:["مرحله ",e+1]}),s.jsxs("span",{children:[l.length," مرحله"]})]}),s.jsx("div",{className:"h-2 bg-gray-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-blue-500 transition-all duration-300",style:{width:`${(e+1)/l.length*100}%`}})})]})]})}function Pp(){const[e,t]=I.useState([3,3,2]),[n,r]=I.useState([[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]]),[l,i]=I.useState([[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]]),[o,a]=I.useState(null),u=()=>{const f=n.length,m=e.length,g=n.map((c,d)=>c.map((p,y)=>p-l[d][y])),h=[...e],k=new Array(f).fill(!1),w=[];let x=!0;for(;x&&w.length<f;){x=!1;for(let c=0;c<f;c++)if(!k[c]){let d=!0;for(let p=0;p<m;p++)if(g[c][p]>h[p]){d=!1;break}if(d){for(let p=0;p<m;p++)h[p]+=l[c][p];k[c]=!0,w.push(c),x=!0}}}const N=w.length===f;a({isSafe:N,sequence:w,need:g})};return I.useEffect(()=>{u()},[e,n,l]),s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-gray-800",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"شبیه‌ساز الگوریتم بانکدار"}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-gray-400 text-sm mb-2",children:"ماتریس تخصیص (Allocation)"}),s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-gray-500",children:[s.jsx("th",{className:"p-2",children:"فرآیند"}),s.jsx("th",{className:"p-2",children:"A"}),s.jsx("th",{className:"p-2",children:"B"}),s.jsx("th",{className:"p-2",children:"C"})]})}),s.jsx("tbody",{children:l.map((f,m)=>s.jsxs("tr",{className:"border-t border-gray-800",children:[s.jsxs("td",{className:"p-2 text-gray-300",children:["P",m]}),f.map((g,h)=>s.jsx("td",{className:"p-2 text-center text-blue-400",children:g},h))]},m))})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-gray-400 text-sm mb-2",children:"ماتریس حداکثر (Maximum)"}),s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-gray-500",children:[s.jsx("th",{className:"p-2",children:"فرآیند"}),s.jsx("th",{className:"p-2",children:"A"}),s.jsx("th",{className:"p-2",children:"B"}),s.jsx("th",{className:"p-2",children:"C"})]})}),s.jsx("tbody",{children:n.map((f,m)=>s.jsxs("tr",{className:"border-t border-gray-800",children:[s.jsxs("td",{className:"p-2 text-gray-300",children:["P",m]}),f.map((g,h)=>s.jsx("td",{className:"p-2 text-center text-purple-400",children:g},h))]},m))})]})]})]}),o&&s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-gray-400 text-sm mb-2",children:"ماتریس نیاز (Need = Max - Allocation)"}),s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-gray-500",children:[s.jsx("th",{className:"p-2",children:"فرآیند"}),s.jsx("th",{className:"p-2",children:"A"}),s.jsx("th",{className:"p-2",children:"B"}),s.jsx("th",{className:"p-2",children:"C"})]})}),s.jsx("tbody",{children:o.need.map((f,m)=>s.jsxs("tr",{className:"border-t border-gray-800",children:[s.jsxs("td",{className:"p-2 text-gray-300",children:["P",m]}),f.map((g,h)=>s.jsx("td",{className:"p-2 text-center text-amber-400",children:g},h))]},m))})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-gray-400 text-sm mb-2",children:"منابع در دسترس (Available)"}),s.jsx("div",{className:"flex gap-4 justify-center",children:["A","B","C"].map((f,m)=>s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-gray-500 text-xs mb-1",children:f}),s.jsx("div",{className:"text-xl font-bold text-emerald-400",children:e[m]})]},f))})]}),o&&s.jsx("div",{className:`rounded-lg p-4 text-center ${o.isSafe?"bg-emerald-500/10 border border-emerald-500/30":"bg-red-500/10 border border-red-500/30"}`,children:o.isSafe?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"text-emerald-400 font-bold mb-2",children:"سیستم در حالت امن است"}),s.jsxs("p",{className:"text-gray-300",children:["توالی امن: ",o.sequence.map(f=>`P${f}`).join(" → ")]})]}):s.jsx("p",{className:"text-red-400 font-bold",children:"سیستم در حالت ناامن است - امکان بن‌بست وجود دارد"})})]})}function bp(){const[e,t]=I.useState("new"),n={new:{label:"جدید",color:"bg-gray-500",next:["ready"]},ready:{label:"آماده",color:"bg-blue-500",next:["running"]},running:{label:"در حال اجرا",color:"bg-emerald-500",next:["ready","blocked","terminated"]},blocked:{label:"مسدود",color:"bg-amber-500",next:["ready"]},terminated:{label:"خاتمه",color:"bg-red-500",next:[]}},r={"new→ready":"Admit","ready→running":"Dispatch","running→ready":"Timeout","running→blocked":"I/O Request","blocked→ready":"I/O Complete","running→terminated":"Exit"};return s.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-6 border border-gray-800",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-6",children:"نمودار حالات فرآیند"}),s.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:Object.entries(n).map(([l,i])=>s.jsx("button",{onClick:()=>t(l),className:`
              w-24 h-24 rounded-full flex items-center justify-center text-white font-bold
              transition-all transform
              ${i.color}
              ${e===l?"scale-110 ring-4 ring-white/30":"opacity-70 hover:opacity-100"}
            `,children:i.label},l))}),s.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4 mb-4",children:[s.jsx("p",{className:"text-gray-400 text-sm mb-2",children:"حالت فعلی:"}),s.jsx("p",{className:`text-xl font-bold ${n[e].color.replace("bg-","text-")}`,children:n[e].label})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"text-gray-400 text-sm",children:"انتقال‌های ممکن:"}),n[e].next.length>0?n[e].next.map(l=>s.jsxs("button",{onClick:()=>t(l),className:"w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-right transition-colors",children:[s.jsxs("span",{className:"text-gray-400",children:[r[`${e}→${l}`],":"]}),s.jsx("span",{className:"text-white mr-2",children:n[l].label})]},l)):s.jsx("p",{className:"text-gray-500",children:"این حالت نهایی است"})]})]})}function Tp({onBack:e}){const[t,n]=I.useState("scheduling"),r=[{id:"scheduling",label:"زمان‌بندی CPU",icon:Xs},{id:"peterson",label:"الگوریتم Peterson",icon:kc},{id:"banker",label:"الگوریتم بانکدار",icon:wc},{id:"states",label:"حالات فرآیند",icon:vn}],l=()=>{switch(t){case"scheduling":return s.jsx(Np,{});case"peterson":return s.jsx(Cp,{});case"banker":return s.jsx(Pp,{});case"states":return s.jsx(bp,{});default:return null}};return s.jsxs("div",{className:"animate-fade-in max-w-4xl mx-auto",children:[s.jsx("div",{className:"flex items-center justify-between mb-6",children:s.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[s.jsx(nt,{size:20}),s.jsx("span",{children:"بازگشت به داشبورد"})]})}),s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"شبیه‌سازی الگوریتم‌ها"}),s.jsx("p",{className:"text-gray-400",children:"الگوریتم‌های کلیدی سیستم عامل را به صورت تعاملی یاد بگیرید"})]}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:r.map(i=>s.jsxs("button",{onClick:()=>n(i.id),className:`
              flex items-center gap-2 px-4 py-3 rounded-lg transition-colors
              ${t===i.id?"bg-blue-500 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"}
            `,children:[s.jsx(i.icon,{size:18}),s.jsx("span",{children:i.label})]},i.id))}),l(),s.jsxs("div",{className:"mt-8 bg-blue-500/10 rounded-xl p-4 border border-blue-500/30",children:[s.jsx("h3",{className:"text-blue-400 font-semibold mb-2",children:"راهنما"}),s.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[s.jsx("li",{children:"• از دکمه‌های کنترل برای اجرای گام به گام استفاده کنید"}),s.jsx("li",{children:"• می‌توانید پارامترها را تغییر دهید و نتایج مختلف را مشاهده کنید"}),s.jsx("li",{children:"• این شبیه‌سازی‌ها دقیقاً مطابق با مفاهیم درس هستند"})]})]})]})}function Ep(){const[e,t]=I.useState("dashboard"),[n,r]=I.useState(null),[l,i]=I.useState(()=>{const m=localStorage.getItem("os-study-progress");return m?JSON.parse(m):{completedLessons:[],quizScores:{},flashcardsReviewed:0,totalStudyTime:0,lastStudyDate:null}});I.useEffect(()=>{localStorage.setItem("os-study-progress",JSON.stringify(l))},[l]);const o=m=>{l.completedLessons.includes(m)||i(g=>({...g,completedLessons:[...g.completedLessons,m],lastStudyDate:new Date().toISOString()}))},a=(m,g,h)=>{i(k=>({...k,quizScores:{...k.quizScores,[m]:{score:g,total:h,date:new Date().toISOString()}}}))},u=()=>{i(m=>({...m,flashcardsReviewed:m.flashcardsReviewed+1}))},f=()=>{switch(e){case"dashboard":return s.jsx(Sp,{progress:l,lessons:Re,onStartLesson:m=>{r(m),t("lesson")},onStartQuiz:()=>t("quiz"),onStartFlashcards:()=>t("flashcards"),onStartExam:()=>t("exam"),onStartAlgorithms:()=>t("algorithms")});case"lesson":return s.jsx(yp,{lesson:n,onComplete:()=>o(n.id),onBack:()=>t("dashboard"),onNext:()=>{const m=Re.findIndex(g=>g.id===n.id);m<Re.length-1&&r(Re[m+1])},onPrev:()=>{const m=Re.findIndex(g=>g.id===n.id);m>0&&r(Re[m-1])},isCompleted:l.completedLessons.includes(n==null?void 0:n.id),hasNext:Re.findIndex(m=>m.id===(n==null?void 0:n.id))<Re.length-1,hasPrev:Re.findIndex(m=>m.id===(n==null?void 0:n.id))>0});case"quiz":return s.jsx(kp,{questions:sa,lessons:Re,onSaveScore:a,onBack:()=>t("dashboard")});case"flashcards":return s.jsx(wp,{flashcards:Zf,onReview:u,onBack:()=>t("dashboard")});case"exam":return s.jsx(jp,{questions:sa,onBack:()=>t("dashboard")});case"algorithms":return s.jsx(Tp,{onBack:()=>t("dashboard")});default:return null}};return s.jsxs("div",{className:"min-h-screen flex",children:[s.jsx(vp,{currentView:e,setCurrentView:t,lessons:Re,progress:l,onSelectLesson:m=>{r(m),t("lesson")}}),s.jsx("main",{className:"flex-1 mr-64 p-6 overflow-auto",children:f()})]})}si.createRoot(document.getElementById("root")).render(s.jsx(Fc.StrictMode,{children:s.jsx(Ep,{})}));
