const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dd8v1g4L.js","./CLZ_eMg9.js","./DK1oWndu.js","./vontwHf2.js","./zLPo3Wun.js","./D-OmwQIE.js","./Ck34-2-J.js","./D3ajliiT.js","./DULC-58P.js","./DI-H58jd.js","./bcGQ0m99.js","./S8JqtoMb.js","./DEDu-9P_.js","./wWwZUHQb.js","./a4IVHPHE.js","./DlN39EpY.js","./BozxqUii.js","./y3NjJr3W.js","./WuzrkJwc.js","./SdqCKlqg.js","./mMNAyvlA.js","./DXFiVAiw.js","./Bwk9YjN-.js","./DgMlkYTu.js","./Bm6eBqVA.js","./AermgA2Z.js","./DolzaWCY.js","./error.ZCwXXpR-.css","./DpG5CL2X.js","./error-404.C6EWxgLN.css","./DJPKB58B.js","./error-500.B1ULVJsU.css"])))=>i.map(i=>d[i]);
var Iv=Object.defineProperty;var bv=(t,e,n)=>e in t?Iv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Kn=(t,e,n)=>bv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ws=[],fn=()=>{},Av=()=>!1,lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pu=t=>t.startsWith("onUpdate:"),it=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rv=Object.prototype.hasOwnProperty,Ce=(t,e)=>Rv.call(t,e),ce=Array.isArray,Ts=t=>Zs(t)==="[object Map]",Og=t=>Zs(t)==="[object Set]",Nf=t=>Zs(t)==="[object Date]",Sv=t=>Zs(t)==="[object RegExp]",he=t=>typeof t=="function",Fe=t=>typeof t=="string",mn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Ou=t=>(ke(t)||he(t))&&he(t.then)&&he(t.catch),Ng=Object.prototype.toString,Zs=t=>Ng.call(t),Cv=t=>Zs(t).slice(8,-1),Dg=t=>Zs(t)==="[object Object]",Nu=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Is=Cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pv=/-(\w)/g,Wt=Ga(t=>t.replace(Pv,(e,n)=>n?n.toUpperCase():"")),kv=/\B([A-Z])/g,es=Ga(t=>t.replace(kv,"-$1").toLowerCase()),Qa=Ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bc=Ga(t=>t?`on${Qa(t)}`:""),lr=(t,e)=>!Object.is(t,e),bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Il=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ov=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xg=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Df;const Ja=()=>Df||(Df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Mv(r):Ya(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||ke(t))return t}const Nv=/;(?![^(]*\))/g,Dv=/:([^]+)/,xv=/\/\*[^]*?\*\//g;function Mv(t){const e={};return t.replace(xv,"").split(Nv).forEach(n=>{if(n){const r=n.split(Dv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xa(t){let e="";if(Fe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Xa(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Vv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Fe(e)&&(t.class=Xa(e)),n&&(t.style=Ya(n)),t}const Lv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fv=Cu(Lv);function Mg(t){return!!t||t===""}function Uv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ya(t[r],e[r]);return n}function ya(t,e){if(t===e)return!0;let n=Nf(t),r=Nf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?Uv(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ya(t[o],e[o]))return!1}}return String(t)===String(e)}const Vg=t=>!!(t&&t.__v_isRef===!0),jv=t=>Fe(t)?t:t==null?"":ce(t)||ke(t)&&(t.toString===Ng||!he(t.toString))?Vg(t)?jv(t.value):JSON.stringify(t,Lg,2):String(t),Lg=(t,e)=>Vg(e)?Lg(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Hc(r,i)+" =>"]=s,n),{})}:Og(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hc(n))}:mn(e)?Hc(e):ke(e)&&!ce(e)&&!Dg(e)?String(e):e,Hc=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Fg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Du(t){return new Fg(t)}function xu(){return _t}function Bv(t,e=!1){_t&&_t.cleanups.push(t)}let xe;const $c=new WeakSet;class Ug{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$c.has(this)&&($c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xf(this),Hg(this);const e=xe,n=Yt;xe=this,Yt=!0;try{return this.fn()}finally{$g(this),xe=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lu(e);this.deps=this.depsTail=void 0,xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let jg=0,Oi,Ni;function Bg(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=Oi,Oi=t}function Mu(){jg++}function Vu(){if(--jg>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Oi;){let e=Oi;for(Oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Hg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $g(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Lu(r),Hv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zi)||(t.globalVersion=zi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!bl(t))))return;t.flags|=2;const e=t.dep,n=xe,r=Yt;xe=t,Yt=!0;try{Hg(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,Yt=r,$g(t),t.flags&=-3}}function Lu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Lu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const Wg=[];function On(){Wg.push(Yt),Yt=!1}function Nn(){const t=Wg.pop();Yt=t===void 0?!0:t}function xf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let zi=0;class $v{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!Yt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new $v(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,Kg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,zi++,this.notify(e)}notify(e){Mu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vu()}}}function Kg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Kg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ea=new WeakMap,Ur=Symbol(""),Al=Symbol(""),Gi=Symbol("");function Et(t,e,n){if(Yt&&xe){let r=Ea.get(t);r||Ea.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fu),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Ea.get(t);if(!o){zi++;return}const c=l=>{l&&l.trigger()};if(Mu(),e==="clear")o.forEach(c);else{const l=ce(t),h=l&&Nu(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,g)=>{(g==="length"||g===Gi||!mn(g)&&g>=u)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Gi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Ur)),Ts(t)&&c(o.get(Al)));break;case"delete":l||(c(o.get(Ur)),Ts(t)&&c(o.get(Al)));break;case"set":Ts(t)&&c(o.get(Ur));break}}Vu()}function qv(t,e){const n=Ea.get(t);return n&&n.get(e)}function ls(t){const e=Te(t);return e===t?e:(Et(e,"iterate",Gi),qt(t)?e:e.map(ht))}function Za(t){return Et(t=Te(t),"iterate",Gi),t}const Wv={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,ht)},concat(...t){return ls(this).concat(...t.map(e=>ce(e)?ls(e):e))},entries(){return qc(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return Tn(this,"find",t,e,ht,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return vi(this,"pop")},push(...t){return vi(this,"push",t)},reduce(t,...e){return Mf(this,"reduce",t,e)},reduceRight(t,...e){return Mf(this,"reduceRight",t,e)},shift(){return vi(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return vi(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return vi(this,"unshift",t)},values(){return qc(this,"values",ht)}};function qc(t,e,n){const r=Za(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Kv=Array.prototype;function Tn(t,e,n,r,s,i){const o=Za(t),c=o!==t&&!qt(t),l=o[e];if(l!==Kv[e]){const d=l.apply(t,i);return c?ht(d):d}let h=n;o!==t&&(c?h=function(d,g){return n.call(this,ht(d),g,t)}:n.length>2&&(h=function(d,g){return n.call(this,d,g,t)}));const u=l.call(o,h,r);return c&&s?s(u):u}function Mf(t,e,n,r){const s=Za(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ht(c),l,t)}),s[e](i,...r)}function Wc(t,e,n){const r=Te(t);Et(r,"iterate",Gi);const s=r[e](...n);return(s===-1||s===!1)&&Bu(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function vi(t,e,n=[]){On(),Mu();const r=Te(t)[e].apply(t,n);return Vu(),Nn(),r}const zv=Cu("__proto__,__v_isRef,__isVue"),zg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function Gv(t){mn(t)||(t=String(t));const e=Te(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Gg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sw:Xg:i?Yg:Jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=Wv[n]))return l;if(n==="hasOwnProperty")return Gv}const c=Reflect.get(e,n,Le(e)?e:r);return(mn(n)?zg.has(n):zv(n))||(s||Et(e,"get",n),i)?c:Le(c)?o&&Nu(n)?c:c.value:ke(c)?s?Zg(c):Fn(c):c}}class Qg extends Gg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Dn(i);if(!qt(r)&&!Dn(r)&&(i=Te(i),r=Te(r)),!ce(e)&&Le(i)&&!Le(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Nu(n)?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,r,Le(e)?e:s);return e===Te(s)&&(o?lr(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!zg.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ce(e)?"length":Ur),Reflect.ownKeys(e)}}class Qv extends Gg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jv=new Qg,Yv=new Qv,Xv=new Qg(!0);const Rl=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function Zv(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=Ts(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),u=n?Rl:e?va:ht;return!e&&Et(i,"iterate",l?Al:Ur),{next(){const{value:d,done:g}=h.next();return g?{value:d,done:g}:{value:c?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function $o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ew(t,e){const n={get(s){const i=this.__v_raw,o=Te(i),c=Te(s);t||(lr(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=Ho(o),h=e?Rl:t?va:ht;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Te(s),"iterate",Ur),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Te(i),c=Te(s);return t||(lr(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Te(c),h=e?Rl:t?va:ht;return!t&&Et(l,"iterate",Ur),c.forEach((u,d)=>s.call(i,h(u),h(d),o))}};return it(n,t?{add:$o("add"),set:$o("set"),delete:$o("delete"),clear:$o("clear")}:{add(s){!e&&!qt(s)&&!Dn(s)&&(s=Te(s));const i=Te(this);return Ho(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!Dn(i)&&(i=Te(i));const o=Te(this),{has:c,get:l}=Ho(o);let h=c.call(o,s);h||(s=Te(s),h=c.call(o,s));const u=l.call(o,s);return o.set(s,i),h?lr(i,u)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Te(this),{has:o,get:c}=Ho(i);let l=o.call(i,s);l||(s=Te(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Rn(i,"delete",s,void 0),h},clear(){const s=Te(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zv(s,t,e)}),n}function Uu(t,e){const n=ew(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const tw={get:Uu(!1,!1)},nw={get:Uu(!1,!0)},rw={get:Uu(!0,!1)};const Jg=new WeakMap,Yg=new WeakMap,Xg=new WeakMap,sw=new WeakMap;function iw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ow(t){return t.__v_skip||!Object.isExtensible(t)?0:iw(Cv(t))}function Fn(t){return Dn(t)?t:ju(t,!1,Jv,tw,Jg)}function hn(t){return ju(t,!1,Xv,nw,Yg)}function Zg(t){return ju(t,!0,Yv,rw,Xg)}function ju(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=ow(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function kn(t){return Dn(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function Bu(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Hu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Il(t,"__v_skip",!0),t}const ht=t=>ke(t)?Fn(t):t,va=t=>ke(t)?Zg(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function Xt(t){return em(t,!1)}function Ls(t){return em(t,!0)}function em(t,e){return Le(t)?t:new aw(t,e)}class aw{constructor(e,n){this.dep=new Fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Dn(e);e=r?e:Te(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function Ve(t){return Le(t)?t.value:t}function tm(t){return he(t)?t():Ve(t)}const cw={get:(t,e,n)=>e==="__v_raw"?t:Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function nm(t){return kn(t)?t:new Proxy(t,cw)}function lw(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=sm(t,n);return e}class uw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qv(Te(this._object),this._key)}}class hw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function rm(t,e,n){return Le(t)?t:he(t)?new hw(t):ke(t)&&arguments.length>1?sm(t,e,n):Xt(t)}function sm(t,e,n){const r=t[e];return Le(r)?r:new uw(t,e,n)}class fw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return Bg(this,!0),!0}get value(){const e=this.dep.track();return qg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dw(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new fw(r,s,n)}const qo={},wa=new WeakMap;let Mr;function pw(t,e=!1,n=Mr){if(n){let r=wa.get(n);r||wa.set(n,r=[]),r.push(t)}}function gw(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=k=>s?k:qt(k)||s===!1||s===0?Sn(k,1):Sn(k);let u,d,g,m,I=!1,R=!1;if(Le(t)?(d=()=>t.value,I=qt(t)):kn(t)?(d=()=>h(t),I=!0):ce(t)?(R=!0,I=t.some(k=>kn(k)||qt(k)),d=()=>t.map(k=>{if(Le(k))return k.value;if(kn(k))return h(k);if(he(k))return l?l(k,2):k()})):he(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){On();try{g()}finally{Nn()}}const k=Mr;Mr=u;try{return l?l(t,3,[m]):t(m)}finally{Mr=k}}:d=fn,e&&s){const k=d,x=s===!0?1/0:s;d=()=>Sn(k(),x)}const O=xu(),D=()=>{u.stop(),O&&O.active&&ku(O.effects,u)};if(i&&e){const k=e;e=(...x)=>{k(...x),D()}}let N=R?new Array(t.length).fill(qo):qo;const b=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const x=u.run();if(s||I||(R?x.some((F,w)=>lr(F,N[w])):lr(x,N))){g&&g();const F=Mr;Mr=u;try{const w=[x,N===qo?void 0:R&&N[0]===qo?[]:N,m];N=x,l?l(e,3,w):e(...w)}finally{Mr=F}}}else u.run()};return c&&c(b),u=new Ug(d),u.scheduler=o?()=>o(b,!1):b,m=k=>pw(k,!1,u),g=u.onStop=()=>{const k=wa.get(u);if(k){if(l)l(k,4);else for(const x of k)x();wa.delete(u)}},e?r?b(!0):N=u.run():o?o(b.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Sn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Le(t))Sn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Og(t)||Ts(t))t.forEach(r=>{Sn(r,e,n)});else if(Dg(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uo(t,e,n,r){try{return r?t(...r):t()}catch(s){ei(s,e,n)}}function Zt(t,e,n,r){if(he(t)){const s=uo(t,e,n,r);return s&&Ou(s)&&s.catch(i=>{ei(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zt(t[i],e,n,r));return s}}function ei(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,h)===!1)return}c=c.parent}if(i){On(),uo(i,null,10,[t,l,h]),Nn();return}}mw(t,n,s,r,o)}function mw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let sn=-1;const As=[];let Jn=null,fs=0;const im=Promise.resolve();let Ta=null;function zr(t){const e=Ta||im;return t?e.then(this?t.bind(this):t):e}function _w(t){let e=sn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Qi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $u(t){if(!(t.flags&1)){const e=Qi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Qi(n)?Rt.push(t):Rt.splice(_w(e),0,t),t.flags|=1,om()}}function om(){Ta||(Ta=im.then(am))}function Sl(t){ce(t)?As.push(...t):Jn&&t.id===-1?Jn.splice(fs+1,0,t):t.flags&1||(As.push(t),t.flags|=1),om()}function Vf(t,e,n=sn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ia(t){if(As.length){const e=[...new Set(As)].sort((n,r)=>Qi(n)-Qi(r));if(As.length=0,Jn){Jn.push(...e);return}for(Jn=e,fs=0;fs<Jn.length;fs++){const n=Jn[fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,fs=0}}const Qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function am(t){try{for(sn=0;sn<Rt.length;sn++){const e=Rt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<Rt.length;sn++){const e=Rt[sn];e&&(e.flags&=-2)}sn=-1,Rt.length=0,Ia(),Ta=null,(Rt.length||As.length)&&am()}}let Ct=null,cm=null;function ba(t){const e=Ct;return Ct=t,cm=t&&t.type.__scopeId||null,e}function qu(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Gf(-1);const i=ba(e);let o;try{o=t(...s)}finally{ba(i),r._d&&Gf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xN(t,e){if(Ct===null)return t;const n=sc(Ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function on(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(On(),Zt(l,n,8,[t.el,c,t,e]),Nn())}}const yw=Symbol("_vte"),lm=t=>t.__isTeleport,Yn=Symbol("_leaveCb"),Wo=Symbol("_enterCb");function Ew(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ku(()=>{t.isMounted=!0}),fo(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],um={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},hm=t=>{const e=t.subTree;return e.component?hm(e.component):e},vw={name:"BaseTransition",props:um,setup(t,{slots:e}){const n=po(),r=Ew();return()=>{const s=e.default&&pm(e.default(),!0);if(!s||!s.length)return;const i=fm(s),o=Te(t),{mode:c}=o;if(r.isLeaving)return Kc(i);const l=Lf(i);if(!l)return Kc(i);let h=Cl(l,o,r,n,d=>h=d);l.type!==Ye&&Fs(l,h);let u=n.subTree&&Lf(n.subTree);if(u&&u.type!==Ye&&!Gt(l,u)&&hm(n).type!==Ye){let d=Cl(u,o,r,n);if(Fs(u,d),c==="out-in"&&l.type!==Ye)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Kc(i);c==="in-out"&&l.type!==Ye?d.delayLeave=(g,m,I)=>{const R=dm(r,u);R[String(u.key)]=u,g[Yn]=()=>{m(),g[Yn]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{I(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function fm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ye){e=n;break}}return e}const ww=vw;function dm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Cl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:I,onLeaveCancelled:R,onBeforeAppear:O,onAppear:D,onAfterAppear:N,onAppearCancelled:b}=e,k=String(t.key),x=dm(n,t),F=(_,v)=>{_&&Zt(_,r,9,v)},w=(_,v)=>{const C=v[1];F(_,v),ce(_)?_.every(S=>S.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:c,beforeEnter(_){let v=l;if(!n.isMounted)if(i)v=O||l;else return;_[Yn]&&_[Yn](!0);const C=x[k];C&&Gt(t,C)&&C.el[Yn]&&C.el[Yn](),F(v,[_])},enter(_){let v=h,C=u,S=d;if(!n.isMounted)if(i)v=D||h,C=N||u,S=b||d;else return;let T=!1;const de=_[Wo]=me=>{T||(T=!0,me?F(S,[_]):F(C,[_]),y.delayedLeave&&y.delayedLeave(),_[Wo]=void 0)};v?w(v,[_,de]):de()},leave(_,v){const C=String(t.key);if(_[Wo]&&_[Wo](!0),n.isUnmounting)return v();F(g,[_]);let S=!1;const T=_[Yn]=de=>{S||(S=!0,v(),de?F(R,[_]):F(I,[_]),_[Yn]=void 0,x[C]===t&&delete x[C])};x[C]=t,m?w(m,[_,T]):T()},clone(_){const v=Cl(_,e,n,r,s);return s&&s(v),v}};return y}function Kc(t){if(ho(t))return t=xn(t),t.children=null,t}function Lf(t){if(!ho(t))return lm(t.type)&&t.children?fm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function Fs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Mt?(o.patchFlag&128&&s++,r=r.concat(pm(o.children,e,c))):(e||o.type!==Ye)&&r.push(c!=null?xn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function br(t,e){return he(t)?it({name:t.name},e,{setup:t}):t}function Wu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Rs(t,e,n,r,s=!1){if(ce(t)){t.forEach((I,R)=>Rs(I,e&&(ce(e)?e[R]:e),n,r,s));return}if(jr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Rs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?sc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,u=c.refs===Ne?c.refs={}:c.refs,d=c.setupState,g=Te(d),m=d===Ne?()=>!1:I=>Ce(g,I);if(h!=null&&h!==l&&(Fe(h)?(u[h]=null,m(h)&&(d[h]=null)):Le(h)&&(h.value=null)),he(l))uo(l,c,12,[o,u]);else{const I=Fe(l),R=Le(l);if(I||R){const O=()=>{if(t.f){const D=I?m(l)?d[l]:u[l]:l.value;s?ce(D)&&ku(D,i):ce(D)?D.includes(i)||D.push(i):I?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else I?(u[l]=o,m(l)&&(d[l]=o)):R&&(l.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,lt(O,n)):O()}}}let Ff=!1;const us=()=>{Ff||(console.error("Hydration completed but contains mismatches."),Ff=!0)},Tw=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Iw=t=>t.namespaceURI.includes("MathML"),Ko=t=>{if(t.nodeType===1){if(Tw(t))return"svg";if(Iw(t))return"mathml"}},ys=t=>t.nodeType===8;function bw(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:h}}=t,u=(b,k)=>{if(!k.hasChildNodes()){n(null,b,k),Ia(),k._vnode=b;return}d(k.firstChild,b,null,null,null),Ia(),k._vnode=b},d=(b,k,x,F,w,y=!1)=>{y=y||!!k.dynamicChildren;const _=ys(b)&&b.data==="[",v=()=>R(b,k,x,F,w,_),{type:C,ref:S,shapeFlag:T,patchFlag:de}=k;let me=b.nodeType;k.el=b,de===-2&&(y=!1,k.dynamicChildren=null);let X=null;switch(C){case $r:me!==3?k.children===""?(l(k.el=s(""),o(b),b),X=b):X=v():(b.data!==k.children&&(us(),b.data=k.children),X=i(b));break;case Ye:N(b)?(X=i(b),D(k.el=b.content.firstChild,b,x)):me!==8||_?X=v():X=i(b);break;case xi:if(_&&(b=i(b),me=b.nodeType),me===1||me===3){X=b;const re=!k.children.length;for(let te=0;te<k.staticCount;te++)re&&(k.children+=X.nodeType===1?X.outerHTML:X.data),te===k.staticCount-1&&(k.anchor=X),X=i(X);return _?i(X):X}else v();break;case Mt:_?X=I(b,k,x,F,w,y):X=v();break;default:if(T&1)(me!==1||k.type.toLowerCase()!==b.tagName.toLowerCase())&&!N(b)?X=v():X=g(b,k,x,F,w,y);else if(T&6){k.slotScopeIds=w;const re=o(b);if(_?X=O(b):ys(b)&&b.data==="teleport start"?X=O(b,b.data,"teleport end"):X=i(b),e(k,re,null,x,F,Ko(re),y),jr(k)&&!k.type.__asyncResolved){let te;_?(te=qe(Mt),te.anchor=X?X.previousSibling:re.lastChild):te=b.nodeType===3?Gm(""):qe("div"),te.el=b,k.component.subTree=te}}else T&64?me!==8?X=v():X=k.type.hydrate(b,k,x,F,w,y,t,m):T&128&&(X=k.type.hydrate(b,k,x,F,Ko(o(b)),w,y,t,d))}return S!=null&&Rs(S,null,F,k),X},g=(b,k,x,F,w,y)=>{y=y||!!k.dynamicChildren;const{type:_,props:v,patchFlag:C,shapeFlag:S,dirs:T,transition:de}=k,me=_==="input"||_==="option";if(me||C!==-1){T&&on(k,null,x,"created");let X=!1;if(N(b)){X=Vm(null,de)&&x&&x.vnode.props&&x.vnode.props.appear;const te=b.content.firstChild;if(X){const De=te.getAttribute("class");De&&(te.$cls=De),de.beforeEnter(te)}D(te,b,x),k.el=b=te}if(S&16&&!(v&&(v.innerHTML||v.textContent))){let te=m(b.firstChild,k,b,x,F,w,y);for(;te;){zo(b,1)||us();const De=te;te=te.nextSibling,c(De)}}else if(S&8){let te=k.children;te[0]===`
`&&(b.tagName==="PRE"||b.tagName==="TEXTAREA")&&(te=te.slice(1)),b.textContent!==te&&(zo(b,0)||us(),b.textContent=k.children)}if(v){if(me||!y||C&48){const te=b.tagName.includes("-");for(const De in v)(me&&(De.endsWith("value")||De==="indeterminate")||lo(De)&&!Is(De)||De[0]==="."||te)&&r(b,De,null,v[De],void 0,x)}else if(v.onClick)r(b,"onClick",null,v.onClick,void 0,x);else if(C&4&&kn(v.style))for(const te in v.style)v.style[te]}let re;(re=v&&v.onVnodeBeforeMount)&&kt(re,x,k),T&&on(k,null,x,"beforeMount"),((re=v&&v.onVnodeMounted)||T||X)&&Hm(()=>{re&&kt(re,x,k),X&&de.enter(b),T&&on(k,null,x,"mounted")},F)}return b.nextSibling},m=(b,k,x,F,w,y,_)=>{_=_||!!k.dynamicChildren;const v=k.children,C=v.length;for(let S=0;S<C;S++){const T=_?v[S]:v[S]=Vt(v[S]),de=T.type===$r;b?(de&&!_&&S+1<C&&Vt(v[S+1]).type===$r&&(l(s(b.data.slice(T.children.length)),x,i(b)),b.data=T.children),b=d(b,T,F,w,y,_)):de&&!T.children?l(T.el=s(""),x):(zo(x,1)||us(),n(null,T,x,null,F,w,Ko(x),y))}return b},I=(b,k,x,F,w,y)=>{const{slotScopeIds:_}=k;_&&(w=w?w.concat(_):_);const v=o(b),C=m(i(b),k,v,x,F,w,y);return C&&ys(C)&&C.data==="]"?i(k.anchor=C):(us(),l(k.anchor=h("]"),v,C),C)},R=(b,k,x,F,w,y)=>{if(zo(b.parentElement,1)||us(),k.el=null,y){const C=O(b);for(;;){const S=i(b);if(S&&S!==C)c(S);else break}}const _=i(b),v=o(b);return c(b),n(null,k,v,_,x,F,Ko(v),w),x&&(x.vnode.el=k.el,rc(x,k.el)),_},O=(b,k="[",x="]")=>{let F=0;for(;b;)if(b=i(b),b&&ys(b)&&(b.data===k&&F++,b.data===x)){if(F===0)return i(b);F--}return b},D=(b,k,x)=>{const F=k.parentNode;F&&F.replaceChild(b,k);let w=x;for(;w;)w.vnode.el===k&&(w.vnode.el=w.subTree.el=b),w=w.parent},N=b=>b.nodeType===1&&b.tagName==="TEMPLATE";return[u,d]}const Uf="data-allow-mismatch",Aw={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function zo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Uf);)t=t.parentElement;const n=t&&t.getAttribute(Uf);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(Aw[e])}}Ja().requestIdleCallback;Ja().cancelIdleCallback;function Rw(t,e){if(ys(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ys(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const jr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Es(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:c=!0,onError:l}=t;let h=null,u,d=0;const g=()=>(d++,h=null,m()),m=()=>{let I;return h||(I=h=e().catch(R=>{if(R=R instanceof Error?R:new Error(String(R)),l)return new Promise((O,D)=>{l(R,()=>O(g()),()=>D(R),d+1)});throw R}).then(R=>I!==h&&h?h:(R&&(R.__esModule||R[Symbol.toStringTag]==="Module")&&(R=R.default),u=R,R)))};return br({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(I,R,O){const D=i?()=>{const b=i(()=>{O()},k=>Rw(I,k));b&&(R.bum||(R.bum=[])).push(b),(R.u||(R.u=[])).push(()=>!0)}:O;u?D():m().then(()=>!R.isUnmounted&&D())},get __asyncResolved(){return u},setup(){const I=Xe;if(Wu(I),u)return()=>zc(u,I);const R=b=>{h=null,ei(b,I,13,!r)};if(c&&I.suspense||Bs)return m().then(b=>()=>zc(b,I)).catch(b=>(R(b),()=>r?qe(r,{error:b}):null));const O=Xt(!1),D=Xt(),N=Xt(!!s);return s&&setTimeout(()=>{N.value=!1},s),o!=null&&setTimeout(()=>{if(!O.value&&!D.value){const b=new Error(`Async component timed out after ${o}ms.`);R(b),D.value=b}},o),m().then(()=>{O.value=!0,I.parent&&ho(I.parent.vnode)&&I.parent.update()}).catch(b=>{R(b),D.value=b}),()=>{if(O.value&&u)return zc(u,I);if(D.value&&r)return qe(r,{error:D.value});if(n&&!N.value)return qe(n)}}})}function zc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=qe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ho=t=>t.type.__isKeepAlive,Sw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=po(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:h,um:u,o:{createElement:d}}}=r,g=d("div");r.activate=(N,b,k,x,F)=>{const w=N.component;h(N,b,k,0,c),l(w.vnode,N,b,k,w,c,x,N.slotScopeIds,F),lt(()=>{w.isDeactivated=!1,w.a&&bs(w.a);const y=N.props&&N.props.onVnodeMounted;y&&kt(y,w.parent,N)},c)},r.deactivate=N=>{const b=N.component;Ra(b.m),Ra(b.a),h(N,g,null,1,c),lt(()=>{b.da&&bs(b.da);const k=N.props&&N.props.onVnodeUnmounted;k&&kt(k,b.parent,N),b.isDeactivated=!0},c)};function m(N){Gc(N),u(N,n,c,!0)}function I(N){s.forEach((b,k)=>{const x=Ll(b.type);x&&!N(x)&&R(k)})}function R(N){const b=s.get(N);b&&(!o||!Gt(b,o))?m(b):o&&Gc(o),s.delete(N),i.delete(N)}Hr(()=>[t.include,t.exclude],([N,b])=>{N&&I(k=>bi(N,k)),b&&I(k=>!bi(b,k))},{flush:"post",deep:!0});let O=null;const D=()=>{O!=null&&(Sa(n.subTree.type)?lt(()=>{s.set(O,Go(n.subTree))},n.subTree.suspense):s.set(O,Go(n.subTree)))};return Ku(D),ym(D),fo(()=>{s.forEach(N=>{const{subTree:b,suspense:k}=n,x=Go(b);if(N.type===x.type&&N.key===x.key){Gc(x);const F=x.component.da;F&&lt(F,k);return}m(N)})}),()=>{if(O=null,!e.default)return o=null;const N=e.default(),b=N[0];if(N.length>1)return o=null,N;if(!js(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let k=Go(b);if(k.type===Ye)return o=null,k;const x=k.type,F=Ll(jr(k)?k.type.__asyncResolved||{}:x),{include:w,exclude:y,max:_}=t;if(w&&(!F||!bi(w,F))||y&&F&&bi(y,F))return k.shapeFlag&=-257,o=k,b;const v=k.key==null?x:k.key,C=s.get(v);return k.el&&(k=xn(k),b.shapeFlag&128&&(b.ssContent=k)),O=v,C?(k.el=C.el,k.component=C.component,k.transition&&Fs(k,k.transition),k.shapeFlag|=512,i.delete(v),i.add(v)):(i.add(v),_&&i.size>parseInt(_,10)&&R(i.values().next().value)),k.shapeFlag|=256,o=k,Sa(b.type)?b:k}}},Cw=Sw;function bi(t,e){return ce(t)?t.some(n=>bi(n,e)):Fe(t)?t.split(",").includes(e):Sv(t)?(t.lastIndex=0,t.test(e)):!1}function gm(t,e){_m(t,"a",e)}function mm(t,e){_m(t,"da",e)}function _m(t,e,n=Xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ec(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ho(s.parent.vnode)&&Pw(r,e,n,s),s=s.parent}}function Pw(t,e,n,r){const s=ec(e,t,r,!0);Em(()=>{ku(r[e],s)},n)}function Gc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Go(t){return t.shapeFlag&128?t.ssContent:t}function ec(t,e,n=Xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{On();const c=Gr(n),l=Zt(e,n,t,o);return c(),Nn(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=Xe)=>{(!Bs||t==="sp")&&ec(t,(...r)=>e(...r),n)},kw=Un("bm"),Ku=Un("m"),Ow=Un("bu"),ym=Un("u"),fo=Un("bum"),Em=Un("um"),Nw=Un("sp"),Dw=Un("rtg"),xw=Un("rtc");function vm(t,e=Xe){ec("ec",t,e)}const wm="components";function MN(t,e){return Im(wm,t,!0,e)||t}const Tm=Symbol.for("v-ndc");function Mw(t){return Fe(t)?Im(wm,t,!1)||t:t||Tm}function Im(t,e,n=!0,r=!1){const s=Ct||Xe;if(s){const i=s.type;{const c=Ll(i,!1);if(c&&(c===e||c===Wt(e)||c===Qa(Wt(e))))return i}const o=jf(s[t]||i[t],e)||jf(s.appContext[t],e);return!o&&r?i:o}}function jf(t,e){return t&&(t[e]||t[Wt(e)]||t[Qa(Wt(e))])}function VN(t,e,n,r){let s;const i=n,o=ce(t);if(o||Fe(t)){const c=o&&kn(t);let l=!1,h=!1;c&&(l=!qt(t),h=Dn(t),t=Za(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?h?va(ht(t[u])):ht(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const u=c[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const Pl=t=>t?Jm(t)?sc(t):Pl(t.parent):null,Di=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Am(t),$forceUpdate:t=>t.f||(t.f=()=>{$u(t.update)}),$nextTick:t=>t.n||(t.n=zr.bind(t.proxy)),$watch:t=>nT.bind(t)}),Qc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),Vw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qc(r,e))return o[e]=1,r[e];if(s!==Ne&&Ce(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ce(h,e))return o[e]=3,i[e];if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];kl&&(o[e]=0)}}const u=Di[e];let d,g;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qc(s,e)?(s[e]=n,!0):r!==Ne&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ne&&Ce(t,o)||Qc(e,o)||(c=i[0])&&Ce(c,o)||Ce(r,o)||Ce(Di,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bf(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function LN(t){const e=po();let n=t();return Ml(),Ou(n)&&(n=n.catch(r=>{throw Gr(e),r})),[n,()=>Gr(e)]}let kl=!0;function Lw(t){const e=Am(t),n=t.proxy,r=t.ctx;kl=!1,e.beforeCreate&&Hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:u,beforeMount:d,mounted:g,beforeUpdate:m,updated:I,activated:R,deactivated:O,beforeDestroy:D,beforeUnmount:N,destroyed:b,unmounted:k,render:x,renderTracked:F,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:v,inheritAttrs:C,components:S,directives:T,filters:de}=e;if(h&&Fw(h,r,null),o)for(const re in o){const te=o[re];he(te)&&(r[re]=te.bind(n))}if(s){const re=s.call(n,n);ke(re)&&(t.data=Fn(re))}if(kl=!0,i)for(const re in i){const te=i[re],De=he(te)?te.bind(n,n):he(te.get)?te.get.bind(n,n):fn,Kt=!he(te)&&he(te.set)?te.set.bind(n):fn,Ut=Lt({get:De,set:Kt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Ue=>Ut.value=Ue})}if(c)for(const re in c)bm(c[re],r,n,re);if(l){const re=he(l)?l.call(n):l;Reflect.ownKeys(re).forEach(te=>{ur(te,re[te])})}u&&Hf(u,t,"c");function X(re,te){ce(te)?te.forEach(De=>re(De.bind(n))):te&&re(te.bind(n))}if(X(kw,d),X(Ku,g),X(Ow,m),X(ym,I),X(gm,R),X(mm,O),X(vm,y),X(xw,F),X(Dw,w),X(fo,N),X(Em,k),X(Nw,_),ce(v))if(v.length){const re=t.exposed||(t.exposed={});v.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:De=>n[te]=De})})}else t.exposed||(t.exposed={});x&&t.render===fn&&(t.render=x),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T),_&&Wu(t)}function Fw(t,e,n=fn){ce(t)&&(t=Ol(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=st(s.from||r,s.default,!0):i=st(s.from||r):i=st(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hf(t,e,n){Zt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bm(t,e,n,r){let s=r.includes(".")?Um(n,r):()=>n[r];if(Fe(t)){const i=e[t];he(i)&&Hr(s,i)}else if(he(t))Hr(s,t.bind(n));else if(ke(t))if(ce(t))t.forEach(i=>bm(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&Hr(s,i,t)}}function Am(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Aa(l,h,o,!0)),Aa(l,e,o)),ke(e)&&i.set(e,l),l}function Aa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Aa(t,i,n,!0),s&&s.forEach(o=>Aa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Uw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Uw={data:$f,props:qf,emits:qf,methods:Ai,computed:Ai,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Ai,directives:Ai,watch:Bw,provide:$f,inject:jw};function $f(t,e){return e?t?function(){return it(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function jw(t,e){return Ai(Ol(t),Ol(e))}function Ol(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Ai(t,e){return t?it(Object.create(null),t,e):e}function qf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:it(Object.create(null),Bf(t),Bf(e??{})):e}function Bw(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Rm(){return{app:null,config:{isNativeTag:Av,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hw=0;function $w(t,e){return function(r,s=null){he(r)||(r=it({},r)),s!=null&&!ke(s)&&(s=null);const i=Rm(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Hw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:AT,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&he(u.install)?(o.add(u),u.install(h,...d)):he(u)&&(o.add(u),u(h,...d))),h},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),h},component(u,d){return d?(i.components[u]=d,h):i.components[u]},directive(u,d){return d?(i.directives[u]=d,h):i.directives[u]},mount(u,d,g){if(!l){const m=h._ceVNode||qe(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(m,u):t(m,u,g),l=!0,h._container=u,u.__vue_app__=h,sc(m.component)}},onUnmount(u){c.push(u)},unmount(){l&&(Zt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,d){return i.provides[u]=d,h},runWithContext(u){const d=Br;Br=h;try{return u()}finally{Br=d}}};return h}}let Br=null;function ur(t,e){if(Xe){let n=Xe.provides;const r=Xe.parent&&Xe.parent.provides;r===n&&(n=Xe.provides=Object.create(r)),n[t]=e}}function st(t,e,n=!1){const r=Xe||Ct;if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function tc(){return!!(Xe||Ct||Br)}const Sm={},Cm=()=>Object.create(Sm),Pm=t=>Object.getPrototypeOf(t)===Sm;function qw(t,e,n,r=!1){const s={},i=Cm();t.propsDefaults=Object.create(null),km(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ww(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Te(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(nc(t.emitsOptions,g))continue;const m=e[g];if(l)if(Ce(i,g))m!==i[g]&&(i[g]=m,h=!0);else{const I=Wt(g);s[I]=Nl(l,c,I,m,t,!1)}else m!==i[g]&&(i[g]=m,h=!0)}}}else{km(t,e,s,i)&&(h=!0);let u;for(const d in c)(!e||!Ce(e,d)&&((u=es(d))===d||!Ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Nl(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],h=!0)}h&&Rn(t.attrs,"set","")}function km(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Is(l))continue;const h=e[l];let u;s&&Ce(s,u=Wt(l))?!i||!i.includes(u)?n[u]=h:(c||(c={}))[u]=h:nc(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Te(n),h=c||Ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Nl(s,l,d,h[d],t,!Ce(h,d))}}return o}function Nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const u=Gr(s);r=h[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===es(n))&&(r=!0))}return r}const Kw=new WeakMap;function Om(t,e,n=!1){const r=n?Kw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const u=d=>{l=!0;const[g,m]=Om(d,e,!0);it(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ke(t)&&r.set(t,ws),ws;if(ce(i))for(let u=0;u<i.length;u++){const d=Wt(i[u]);Wf(d)&&(o[d]=Ne)}else if(i)for(const u in i){const d=Wt(u);if(Wf(d)){const g=i[u],m=o[d]=ce(g)||he(g)?{type:g}:it({},g),I=m.type;let R=!1,O=!0;if(ce(I))for(let D=0;D<I.length;++D){const N=I[D],b=he(N)&&N.name;if(b==="Boolean"){R=!0;break}else b==="String"&&(O=!1)}else R=he(I)&&I.name==="Boolean";m[0]=R,m[1]=O,(R||Ce(m,"default"))&&c.push(d)}}const h=[o,c];return ke(t)&&r.set(t,h),h}function Wf(t){return t[0]!=="$"&&!Is(t)}const zu=t=>t[0]==="_"||t==="$stable",Gu=t=>ce(t)?t.map(Vt):[Vt(t)],zw=(t,e,n)=>{if(e._n)return e;const r=qu((...s)=>Gu(e(...s)),n);return r._c=!1,r},Nm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(zu(s))continue;const i=t[s];if(he(i))e[s]=zw(s,i,r);else if(i!=null){const o=Gu(i);e[s]=()=>o}}},Dm=(t,e)=>{const n=Gu(e);t.slots.default=()=>n},xm=(t,e,n)=>{for(const r in e)(n||!zu(r))&&(t[r]=e[r])},Gw=(t,e,n)=>{const r=t.slots=Cm();if(t.vnode.shapeFlag&32){const s=e.__;s&&Il(r,"__",s,!0);const i=e._;i?(xm(r,e,n),n&&Il(r,"_",i,!0)):Nm(e,r)}else e&&Dm(t,e)},Qw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:xm(s,e,n):(i=!e.$stable,Nm(e,s)),o=e}else e&&(Dm(t,e),o={default:1});if(i)for(const c in s)!zu(c)&&o[c]==null&&delete s[c]},lt=Hm;function Jw(t){return Mm(t)}function Yw(t){return Mm(t,bw)}function Mm(t,e){const n=Ja();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:u,parentNode:d,nextSibling:g,setScopeId:m=fn,insertStaticContent:I}=t,R=(A,P,V,H=null,U=null,$=null,Q=void 0,K=null,W=!!P.dynamicChildren)=>{if(A===P)return;A&&!Gt(A,P)&&(H=j(A),Ue(A,U,$,!0),A=null),P.patchFlag===-2&&(W=!1,P.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:J}=P;switch(q){case $r:O(A,P,V,H);break;case Ye:D(A,P,V,H);break;case xi:A==null&&N(P,V,H,Q);break;case Mt:S(A,P,V,H,U,$,Q,K,W);break;default:J&1?x(A,P,V,H,U,$,Q,K,W):J&6?T(A,P,V,H,U,$,Q,K,W):(J&64||J&128)&&q.process(A,P,V,H,U,$,Q,K,W,ne)}oe!=null&&U?Rs(oe,A&&A.ref,$,P||A,!P):oe==null&&A&&A.ref!=null&&Rs(A.ref,null,$,A,!0)},O=(A,P,V,H)=>{if(A==null)r(P.el=c(P.children),V,H);else{const U=P.el=A.el;P.children!==A.children&&h(U,P.children)}},D=(A,P,V,H)=>{A==null?r(P.el=l(P.children||""),V,H):P.el=A.el},N=(A,P,V,H)=>{[A.el,A.anchor]=I(A.children,P,V,H,A.el,A.anchor)},b=({el:A,anchor:P},V,H)=>{let U;for(;A&&A!==P;)U=g(A),r(A,V,H),A=U;r(P,V,H)},k=({el:A,anchor:P})=>{let V;for(;A&&A!==P;)V=g(A),s(A),A=V;s(P)},x=(A,P,V,H,U,$,Q,K,W)=>{P.type==="svg"?Q="svg":P.type==="math"&&(Q="mathml"),A==null?F(P,V,H,U,$,Q,K,W):_(A,P,U,$,Q,K,W)},F=(A,P,V,H,U,$,Q,K)=>{let W,q;const{props:oe,shapeFlag:J,transition:ie,dirs:se}=A;if(W=A.el=o(A.type,$,oe&&oe.is,oe),J&8?u(W,A.children):J&16&&y(A.children,W,null,H,U,Jc(A,$),Q,K),se&&on(A,null,H,"created"),w(W,A,A.scopeId,Q,H),oe){for(const Re in oe)Re!=="value"&&!Is(Re)&&i(W,Re,null,oe[Re],$,H);"value"in oe&&i(W,"value",null,oe.value,$),(q=oe.onVnodeBeforeMount)&&kt(q,H,A)}se&&on(A,null,H,"beforeMount");const le=Vm(U,ie);le&&ie.beforeEnter(W),r(W,P,V),((q=oe&&oe.onVnodeMounted)||le||se)&&lt(()=>{q&&kt(q,H,A),le&&ie.enter(W),se&&on(A,null,H,"mounted")},U)},w=(A,P,V,H,U)=>{if(V&&m(A,V),H)for(let $=0;$<H.length;$++)m(A,H[$]);if(U){let $=U.subTree;if(P===$||Sa($.type)&&($.ssContent===P||$.ssFallback===P)){const Q=U.vnode;w(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(A,P,V,H,U,$,Q,K,W=0)=>{for(let q=W;q<A.length;q++){const oe=A[q]=K?Xn(A[q]):Vt(A[q]);R(null,oe,P,V,H,U,$,Q,K)}},_=(A,P,V,H,U,$,Q)=>{const K=P.el=A.el;let{patchFlag:W,dynamicChildren:q,dirs:oe}=P;W|=A.patchFlag&16;const J=A.props||Ne,ie=P.props||Ne;let se;if(V&&Or(V,!1),(se=ie.onVnodeBeforeUpdate)&&kt(se,V,P,A),oe&&on(P,A,V,"beforeUpdate"),V&&Or(V,!0),(J.innerHTML&&ie.innerHTML==null||J.textContent&&ie.textContent==null)&&u(K,""),q?v(A.dynamicChildren,q,K,V,H,Jc(P,U),$):Q||te(A,P,K,null,V,H,Jc(P,U),$,!1),W>0){if(W&16)C(K,J,ie,V,U);else if(W&2&&J.class!==ie.class&&i(K,"class",null,ie.class,U),W&4&&i(K,"style",J.style,ie.style,U),W&8){const le=P.dynamicProps;for(let Re=0;Re<le.length;Re++){const be=le[Re],ot=J[be],tt=ie[be];(tt!==ot||be==="value")&&i(K,be,ot,tt,U,V)}}W&1&&A.children!==P.children&&u(K,P.children)}else!Q&&q==null&&C(K,J,ie,V,U);((se=ie.onVnodeUpdated)||oe)&&lt(()=>{se&&kt(se,V,P,A),oe&&on(P,A,V,"updated")},H)},v=(A,P,V,H,U,$,Q)=>{for(let K=0;K<P.length;K++){const W=A[K],q=P[K],oe=W.el&&(W.type===Mt||!Gt(W,q)||W.shapeFlag&198)?d(W.el):V;R(W,q,oe,null,H,U,$,Q,!0)}},C=(A,P,V,H,U)=>{if(P!==V){if(P!==Ne)for(const $ in P)!Is($)&&!($ in V)&&i(A,$,P[$],null,U,H);for(const $ in V){if(Is($))continue;const Q=V[$],K=P[$];Q!==K&&$!=="value"&&i(A,$,K,Q,U,H)}"value"in V&&i(A,"value",P.value,V.value,U)}},S=(A,P,V,H,U,$,Q,K,W)=>{const q=P.el=A?A.el:c(""),oe=P.anchor=A?A.anchor:c("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:se}=P;se&&(K=K?K.concat(se):se),A==null?(r(q,V,H),r(oe,V,H),y(P.children||[],V,oe,U,$,Q,K,W)):J>0&&J&64&&ie&&A.dynamicChildren?(v(A.dynamicChildren,ie,V,U,$,Q,K),(P.key!=null||U&&P===U.subTree)&&Lm(A,P,!0)):te(A,P,V,oe,U,$,Q,K,W)},T=(A,P,V,H,U,$,Q,K,W)=>{P.slotScopeIds=K,A==null?P.shapeFlag&512?U.ctx.activate(P,V,H,Q,W):de(P,V,H,U,$,Q,W):me(A,P,W)},de=(A,P,V,H,U,$,Q)=>{const K=A.component=ET(A,H,U);if(ho(A)&&(K.ctx.renderer=ne),vT(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,X,Q),!A.el){const W=K.subTree=qe(Ye);D(null,W,P,V)}}else X(K,A,P,V,U,$,Q)},me=(A,P,V)=>{const H=P.component=A.component;if(cT(A,P,V))if(H.asyncDep&&!H.asyncResolved){re(H,P,V);return}else H.next=P,H.update();else P.el=A.el,H.vnode=P},X=(A,P,V,H,U,$,Q)=>{const K=()=>{if(A.isMounted){let{next:J,bu:ie,u:se,parent:le,vnode:Re}=A;{const dt=Fm(A);if(dt){J&&(J.el=Re.el,re(A,J,Q)),dt.asyncDep.then(()=>{A.isUnmounted||K()});return}}let be=J,ot;Or(A,!1),J?(J.el=Re.el,re(A,J,Q)):J=Re,ie&&bs(ie),(ot=J.props&&J.props.onVnodeBeforeUpdate)&&kt(ot,le,J,Re),Or(A,!0);const tt=Yc(A),at=A.subTree;A.subTree=tt,R(at,tt,d(at.el),j(at),A,U,$),J.el=tt.el,be===null&&rc(A,tt.el),se&&lt(se,U),(ot=J.props&&J.props.onVnodeUpdated)&&lt(()=>kt(ot,le,J,Re),U)}else{let J;const{el:ie,props:se}=P,{bm:le,m:Re,parent:be,root:ot,type:tt}=A,at=jr(P);if(Or(A,!1),le&&bs(le),!at&&(J=se&&se.onVnodeBeforeMount)&&kt(J,be,P),Or(A,!0),ie&&Pe){const dt=()=>{A.subTree=Yc(A),Pe(ie,A.subTree,A,U,null)};at&&tt.__asyncHydrate?tt.__asyncHydrate(ie,A,dt):dt()}else{ot.ce&&ot.ce._def.shadowRoot!==!1&&ot.ce._injectChildStyle(tt);const dt=A.subTree=Yc(A);R(null,dt,V,H,A,U,$),P.el=dt.el}if(Re&&lt(Re,U),!at&&(J=se&&se.onVnodeMounted)){const dt=P;lt(()=>kt(J,be,dt),U)}(P.shapeFlag&256||be&&jr(be.vnode)&&be.vnode.shapeFlag&256)&&A.a&&lt(A.a,U),A.isMounted=!0,P=V=H=null}};A.scope.on();const W=A.effect=new Ug(K);A.scope.off();const q=A.update=W.run.bind(W),oe=A.job=W.runIfDirty.bind(W);oe.i=A,oe.id=A.uid,W.scheduler=()=>$u(oe),Or(A,!0),q()},re=(A,P,V)=>{P.component=A;const H=A.vnode.props;A.vnode=P,A.next=null,Ww(A,P.props,H,V),Qw(A,P.children,V),On(),Vf(A),Nn()},te=(A,P,V,H,U,$,Q,K,W=!1)=>{const q=A&&A.children,oe=A?A.shapeFlag:0,J=P.children,{patchFlag:ie,shapeFlag:se}=P;if(ie>0){if(ie&128){Kt(q,J,V,H,U,$,Q,K,W);return}else if(ie&256){De(q,J,V,H,U,$,Q,K,W);return}}se&8?(oe&16&&Pt(q,U,$),J!==q&&u(V,J)):oe&16?se&16?Kt(q,J,V,H,U,$,Q,K,W):Pt(q,U,$,!0):(oe&8&&u(V,""),se&16&&y(J,V,H,U,$,Q,K,W))},De=(A,P,V,H,U,$,Q,K,W)=>{A=A||ws,P=P||ws;const q=A.length,oe=P.length,J=Math.min(q,oe);let ie;for(ie=0;ie<J;ie++){const se=P[ie]=W?Xn(P[ie]):Vt(P[ie]);R(A[ie],se,V,null,U,$,Q,K,W)}q>oe?Pt(A,U,$,!0,!1,J):y(P,V,H,U,$,Q,K,W,J)},Kt=(A,P,V,H,U,$,Q,K,W)=>{let q=0;const oe=P.length;let J=A.length-1,ie=oe-1;for(;q<=J&&q<=ie;){const se=A[q],le=P[q]=W?Xn(P[q]):Vt(P[q]);if(Gt(se,le))R(se,le,V,null,U,$,Q,K,W);else break;q++}for(;q<=J&&q<=ie;){const se=A[J],le=P[ie]=W?Xn(P[ie]):Vt(P[ie]);if(Gt(se,le))R(se,le,V,null,U,$,Q,K,W);else break;J--,ie--}if(q>J){if(q<=ie){const se=ie+1,le=se<oe?P[se].el:H;for(;q<=ie;)R(null,P[q]=W?Xn(P[q]):Vt(P[q]),V,le,U,$,Q,K,W),q++}}else if(q>ie)for(;q<=J;)Ue(A[q],U,$,!0),q++;else{const se=q,le=q,Re=new Map;for(q=le;q<=ie;q++){const It=P[q]=W?Xn(P[q]):Vt(P[q]);It.key!=null&&Re.set(It.key,q)}let be,ot=0;const tt=ie-le+1;let at=!1,dt=0;const Hn=new Array(tt);for(q=0;q<tt;q++)Hn[q]=0;for(q=se;q<=J;q++){const It=A[q];if(ot>=tt){Ue(It,U,$,!0);continue}let jt;if(It.key!=null)jt=Re.get(It.key);else for(be=le;be<=ie;be++)if(Hn[be-le]===0&&Gt(It,P[be])){jt=be;break}jt===void 0?Ue(It,U,$,!0):(Hn[jt-le]=q+1,jt>=dt?dt=jt:at=!0,R(It,P[jt],V,null,U,$,Q,K,W),ot++)}const rs=at?Xw(Hn):ws;for(be=rs.length-1,q=tt-1;q>=0;q--){const It=le+q,jt=P[It],ss=It+1<oe?P[It+1].el:H;Hn[q]===0?R(null,jt,V,ss,U,$,Q,K,W):at&&(be<0||q!==rs[be]?Ut(jt,V,ss,2):be--)}}},Ut=(A,P,V,H,U=null)=>{const{el:$,type:Q,transition:K,children:W,shapeFlag:q}=A;if(q&6){Ut(A.component.subTree,P,V,H);return}if(q&128){A.suspense.move(P,V,H);return}if(q&64){Q.move(A,P,V,ne);return}if(Q===Mt){r($,P,V);for(let J=0;J<W.length;J++)Ut(W[J],P,V,H);r(A.anchor,P,V);return}if(Q===xi){b(A,P,V);return}if(H!==2&&q&1&&K)if(H===0)K.beforeEnter($),r($,P,V),lt(()=>K.enter($),U);else{const{leave:J,delayLeave:ie,afterLeave:se}=K,le=()=>{A.ctx.isUnmounted?s($):r($,P,V)},Re=()=>{J($,()=>{le(),se&&se()})};ie?ie($,le,Re):Re()}else r($,P,V)},Ue=(A,P,V,H=!1,U=!1)=>{const{type:$,props:Q,ref:K,children:W,dynamicChildren:q,shapeFlag:oe,patchFlag:J,dirs:ie,cacheIndex:se}=A;if(J===-2&&(U=!1),K!=null&&(On(),Rs(K,null,V,A,!0),Nn()),se!=null&&(P.renderCache[se]=void 0),oe&256){P.ctx.deactivate(A);return}const le=oe&1&&ie,Re=!jr(A);let be;if(Re&&(be=Q&&Q.onVnodeBeforeUnmount)&&kt(be,P,A),oe&6)nn(A.component,V,H);else{if(oe&128){A.suspense.unmount(V,H);return}le&&on(A,null,P,"beforeUnmount"),oe&64?A.type.remove(A,P,V,ne,H):q&&!q.hasOnce&&($!==Mt||J>0&&J&64)?Pt(q,P,V,!1,!0):($===Mt&&J&384||!U&&oe&16)&&Pt(W,P,V),H&&je(A)}(Re&&(be=Q&&Q.onVnodeUnmounted)||le)&&lt(()=>{be&&kt(be,P,A),le&&on(A,null,P,"unmounted")},V)},je=A=>{const{type:P,el:V,anchor:H,transition:U}=A;if(P===Mt){Bn(V,H);return}if(P===xi){k(A);return}const $=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,W=()=>Q(V,$);K?K(A.el,$,W):W()}else $()},Bn=(A,P)=>{let V;for(;A!==P;)V=g(A),s(A),A=V;s(P)},nn=(A,P,V)=>{const{bum:H,scope:U,job:$,subTree:Q,um:K,m:W,a:q,parent:oe,slots:{__:J}}=A;Ra(W),Ra(q),H&&bs(H),oe&&ce(J)&&J.forEach(ie=>{oe.renderCache[ie]=void 0}),U.stop(),$&&($.flags|=8,Ue(Q,A,P,V)),K&&lt(K,P),lt(()=>{A.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Pt=(A,P,V,H=!1,U=!1,$=0)=>{for(let Q=$;Q<A.length;Q++)Ue(A[Q],P,V,H,U)},j=A=>{if(A.shapeFlag&6)return j(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const P=g(A.anchor||A.el),V=P&&P[yw];return V?g(V):P};let Z=!1;const Y=(A,P,V)=>{A==null?P._vnode&&Ue(P._vnode,null,null,!0):R(P._vnode||null,A,P,null,null,null,V),P._vnode=A,Z||(Z=!0,Vf(),Ia(),Z=!1)},ne={p:R,um:Ue,m:Ut,r:je,mt:de,mc:y,pc:te,pbc:v,n:j,o:t};let ye,Pe;return e&&([ye,Pe]=e(ne)),{render:Y,hydrate:ye,createApp:$w(Y,ye)}}function Jc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Lm(o,c)),c.type===$r&&(c.el=o.el),c.type===Ye&&!c.el&&(c.el=o.el)}}function Xw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fm(e)}function Ra(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zw=Symbol.for("v-scx"),eT=()=>st(Zw);function tT(t,e){return Qu(t,null,e)}function Hr(t,e,n){return Qu(t,e,n)}function Qu(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=it({},n),l=e&&r||!e&&i!=="post";let h;if(Bs){if(i==="sync"){const m=eT();h=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=fn,m.resume=fn,m.pause=fn,m}}const u=Xe;c.call=(m,I,R)=>Zt(m,u,I,R);let d=!1;i==="post"?c.scheduler=m=>{lt(m,u&&u.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(m,I)=>{I?m():$u(m)}),c.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=gw(t,e,c);return Bs&&(h?h.push(g):l&&g()),g}function nT(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Um(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=Gr(this),c=Qu(s,i.bind(r),n);return o(),c}function Um(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const rT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${es(e)}Modifiers`];function sT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&rT(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Fe(u)?u.trim():u)),o.number&&(s=n.map(Ov)));let c,l=r[c=Bc(e)]||r[c=Bc(Wt(e))];!l&&i&&(l=r[c=Bc(es(e))]),l&&Zt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Zt(h,t,6,s)}}function jm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const u=jm(h,e,!0);u&&(c=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):it(o,i),ke(t)&&r.set(t,o),o)}function nc(t,e){return!t||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,es(e))||Ce(t,e))}function Yc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:u,props:d,data:g,setupState:m,ctx:I,inheritAttrs:R}=t,O=ba(t);let D,N;try{if(n.shapeFlag&4){const k=s||r,x=k;D=Vt(h.call(x,k,u,d,m,g,I)),N=c}else{const k=e;D=Vt(k.length>1?k(d,{attrs:c,slots:o,emit:l}):k(d,null)),N=e.props?c:oT(c)}}catch(k){Mi.length=0,ei(k,t,1),D=qe(Ye)}let b=D;if(N&&R!==!1){const k=Object.keys(N),{shapeFlag:x}=b;k.length&&x&7&&(i&&k.some(Pu)&&(N=aT(N,i)),b=xn(b,N,!1,!0))}return n.dirs&&(b=xn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Fs(b,n.transition),D=b,ba(O),D}function iT(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(js(s)){if(s.type!==Ye||s.children==="v-if"){if(n)return;n=s}}else return}return n}const oT=t=>{let e;for(const n in t)(n==="class"||n==="style"||lo(n))&&((e||(e={}))[n]=t[n]);return e},aT=(t,e)=>{const n={};for(const r in t)(!Pu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Kf(r,o,h):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==r[g]&&!nc(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Kf(r,o,h):!0:!!o;return!1}function Kf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!nc(n,i))return!0}return!1}function rc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sa=t=>t.__isSuspense;let Dl=0;const lT={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,h){if(t==null)uT(e,n,r,s,i,o,c,l,h);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}hT(t,e,n,r,s,o,c,l,h)}},hydrate:fT,normalize:dT},Ju=lT;function Ji(t,e){const n=t.props&&t.props[e];he(n)&&n()}function uT(t,e,n,r,s,i,o,c,l){const{p:h,o:{createElement:u}}=l,d=u("div"),g=t.suspense=Bm(t,s,r,e,d,n,i,o,c,l);h(null,g.pendingBranch=t.ssContent,d,null,r,g,i,o),g.deps>0?(Ji(t,"onPending"),Ji(t,"onFallback"),h(null,t.ssFallback,e,n,r,null,i,o),Ss(g,t.ssFallback)):g.resolve(!1,!0)}function hT(t,e,n,r,s,i,o,c,{p:l,um:h,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,m=e.ssFallback,{activeBranch:I,pendingBranch:R,isInFallback:O,isHydrating:D}=d;if(R)d.pendingBranch=g,Gt(g,R)?(l(R,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():O&&(D||(l(I,m,n,r,s,null,i,o,c),Ss(d,m)))):(d.pendingId=Dl++,D?(d.isHydrating=!1,d.activeBranch=R):h(R,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),O?(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():(l(I,m,n,r,s,null,i,o,c),Ss(d,m))):I&&Gt(g,I)?(l(I,g,n,r,s,d,i,o,c),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0&&d.resolve()));else if(I&&Gt(g,I))l(I,g,n,r,s,d,i,o,c),Ss(d,g);else if(Ji(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=Dl++,l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:b}=d;N>0?setTimeout(()=>{d.pendingId===b&&d.fallback(m)},N):N===0&&d.fallback(m)}}function Bm(t,e,n,r,s,i,o,c,l,h,u=!1){const{p:d,m:g,um:m,n:I,o:{parentNode:R,remove:O}}=h;let D;const N=pT(t);N&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const b=t.props?xg(t.props.timeout):void 0,k=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Dl++,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(F=!1,w=!1){const{vnode:y,activeBranch:_,pendingBranch:v,pendingId:C,effects:S,parentComponent:T,container:de}=x;let me=!1;x.isHydrating?x.isHydrating=!1:F||(me=_&&v.transition&&v.transition.mode==="out-in",me&&(_.transition.afterLeave=()=>{C===x.pendingId&&(g(v,de,i===k?I(_):i,0),Sl(S))}),_&&(R(_.el)===de&&(i=I(_)),m(_,T,x,!0)),me||g(v,de,i,0)),Ss(x,v),x.pendingBranch=null,x.isInFallback=!1;let X=x.parent,re=!1;for(;X;){if(X.pendingBranch){X.effects.push(...S),re=!0;break}X=X.parent}!re&&!me&&Sl(S),x.effects=[],N&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),Ji(y,"onResolve")},fallback(F){if(!x.pendingBranch)return;const{vnode:w,activeBranch:y,parentComponent:_,container:v,namespace:C}=x;Ji(w,"onFallback");const S=I(y),T=()=>{x.isInFallback&&(d(null,F,v,S,_,null,C,c,l),Ss(x,F))},de=F.transition&&F.transition.mode==="out-in";de&&(y.transition.afterLeave=T),x.isInFallback=!0,m(y,_,null,!0),de||T()},move(F,w,y){x.activeBranch&&g(x.activeBranch,F,w,y),x.container=F},next(){return x.activeBranch&&I(x.activeBranch)},registerDep(F,w,y){const _=!!x.pendingBranch;_&&x.deps++;const v=F.vnode.el;F.asyncDep.catch(C=>{ei(C,F,0)}).then(C=>{if(F.isUnmounted||x.isUnmounted||x.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:S}=F;Vl(F,C),v&&(S.el=v);const T=!v&&F.subTree.el;w(F,S,R(v||F.subTree.el),v?null:I(F.subTree),x,o,y),T&&O(T),rc(F,S.el),_&&--x.deps===0&&x.resolve()})},unmount(F,w){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,n,F,w),x.pendingBranch&&m(x.pendingBranch,n,F,w)}};return x}function fT(t,e,n,r,s,i,o,c,l){const h=e.suspense=Bm(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),u=l(t,h.pendingBranch=e.ssContent,n,h,i,o);return h.deps===0&&h.resolve(!1,!0),u}function dT(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=zf(r?n.default:n),t.ssFallback=r?zf(n.fallback):qe(Ye)}function zf(t){let e;if(he(t)){const n=Us&&t._c;n&&(t._d=!1,cn()),t=t(),n&&(t._d=!0,e=Nt,$m())}return ce(t)&&(t=iT(t)),t=Vt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Hm(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Sl(t)}function Ss(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,rc(r,s))}function pT(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Mt=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),xi=Symbol.for("v-stc"),Mi=[];let Nt=null;function cn(t=!1){Mi.push(Nt=t?null:[])}function $m(){Mi.pop(),Nt=Mi[Mi.length-1]||null}let Us=1;function Gf(t,e=!1){Us+=t,t<0&&Nt&&e&&(Nt.hasOnce=!0)}function qm(t){return t.dynamicChildren=Us>0?Nt||ws:null,$m(),Us>0&&Nt&&Nt.push(t),t}function gT(t,e,n,r,s,i){return qm(Km(t,e,n,r,s,i,!0))}function tr(t,e,n,r,s){return qm(qe(t,e,n,r,s,!0))}function js(t){return t?t.__v_isVNode===!0:!1}function Gt(t,e){return t.type===e.type&&t.key===e.key}const Wm=({key:t})=>t??null,ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Le(t)||he(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function Km(t,e=null,n=null,r=0,s=null,i=t===Mt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wm(e),ref:e&&ia(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return c?(Yu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Us>0&&!o&&Nt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Nt.push(l),l}const qe=mT;function mT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tm)&&(t=Ye),js(t)){const c=xn(t,e,!0);return n&&Yu(c,n),Us>0&&!i&&Nt&&(c.shapeFlag&6?Nt[Nt.indexOf(t)]=c:Nt.push(c)),c.patchFlag=-2,c}if(bT(t)&&(t=t.__vccOpts),e){e=zm(e);let{class:c,style:l}=e;c&&!Fe(c)&&(e.class=Xa(c)),ke(l)&&(Bu(l)&&!ce(l)&&(l=it({},l)),e.style=Ya(l))}const o=Fe(t)?1:Sa(t)?128:lm(t)?64:ke(t)?4:he(t)?2:0;return Km(t,e,n,r,s,o,i,!0)}function zm(t){return t?Bu(t)||Pm(t)?it({},t):t:null}function xn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Qm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wm(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(ia(e)):[i,ia(e)]:ia(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Fs(u,l.clone(u)),u}function Gm(t=" ",e=0){return qe($r,null,t,e)}function FN(t,e){const n=qe(xi,null,t);return n.staticCount=e,n}function UN(t="",e=!1){return e?(cn(),tr(Ye,null,t)):qe(Ye,null,t)}function Vt(t){return t==null||typeof t=="boolean"?qe(Ye):ce(t)?qe(Mt,null,t.slice()):js(t)?Xn(t):qe($r,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function Yu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pm(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Gm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xa([e.class,r.class]));else if(s==="style")e.style=Ya([e.style,r.style]);else if(lo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function kt(t,e,n,r=null){Zt(t,e,7,[n,r])}const _T=Rm();let yT=0;function ET(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_T,i={uid:yT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Om(r,s),emitsOptions:jm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sT.bind(null,i),t.ce&&t.ce(i),i}let Xe=null;const po=()=>Xe||Ct;let Ca,xl;{const t=Ja(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ca=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),xl=e("__VUE_SSR_SETTERS__",n=>Bs=n)}const Gr=t=>{const e=Xe;return Ca(t),t.scope.on(),()=>{t.scope.off(),Ca(e)}},Ml=()=>{Xe&&Xe.scope.off(),Ca(null)};function Jm(t){return t.vnode.shapeFlag&4}let Bs=!1;function vT(t,e=!1,n=!1){e&&xl(e);const{props:r,children:s}=t.vnode,i=Jm(t);qw(t,r,i,e),Gw(t,s,n||e);const o=i?wT(t,e):void 0;return e&&xl(!1),o}function wT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vw);const{setup:r}=n;if(r){On();const s=t.setupContext=r.length>1?IT(t):null,i=Gr(t),o=uo(r,t,0,[t.props,s]),c=Ou(o);if(Nn(),i(),(c||t.sp)&&!jr(t)&&Wu(t),c){if(o.then(Ml,Ml),e)return o.then(l=>{Vl(t,l)}).catch(l=>{ei(l,t,0)});t.asyncDep=o}else Vl(t,o)}else Ym(t)}function Vl(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=nm(e)),Ym(t)}function Ym(t,e,n){const r=t.type;t.render||(t.render=r.render||fn);{const s=Gr(t);On();try{Lw(t)}finally{Nn(),s()}}}const TT={get(t,e){return Et(t,"get",""),t[e]}};function IT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TT),slots:t.slots,emit:t.emit,expose:e}}function sc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(nm(Hu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)},has(e,n){return n in e||n in Di}})):t.proxy}function Ll(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function bT(t){return he(t)&&"__vccOpts"in t}const Lt=(t,e)=>dw(t,e,Bs);function wt(t,e,n){const r=arguments.length;return r===2?ke(e)&&!ce(e)?js(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&js(n)&&(n=[n]),qe(t,e,n))}const AT="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const Qf=typeof window<"u"&&window.trustedTypes;if(Qf)try{Fl=Qf.createPolicy("vue",{createHTML:t=>t})}catch{}const Xm=Fl?t=>Fl.createHTML(t):t=>t,RT="http://www.w3.org/2000/svg",ST="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Jf=An&&An.createElement("template"),CT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(RT,t):e==="mathml"?An.createElementNS(ST,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Jf.innerHTML=Xm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Jf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",wi="animation",Yi=Symbol("_vtc"),Zm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},PT=it({},um,Zm),kT=t=>(t.displayName="Transition",t.props=PT,t),OT=kT((t,{slots:e})=>wt(ww,NT(t),e)),Nr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yf=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function NT(t){const e={};for(const S in t)S in Zm||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,I=DT(s),R=I&&I[0],O=I&&I[1],{onBeforeEnter:D,onEnter:N,onEnterCancelled:b,onLeave:k,onLeaveCancelled:x,onBeforeAppear:F=D,onAppear:w=N,onAppearCancelled:y=b}=e,_=(S,T,de,me)=>{S._enterCancelled=me,Dr(S,T?u:c),Dr(S,T?h:o),de&&de()},v=(S,T)=>{S._isLeaving=!1,Dr(S,d),Dr(S,m),Dr(S,g),T&&T()},C=S=>(T,de)=>{const me=S?w:N,X=()=>_(T,S,de);Nr(me,[T,X]),Xf(()=>{Dr(T,S?l:i),In(T,S?u:c),Yf(me)||Zf(T,r,R,X)})};return it(e,{onBeforeEnter(S){Nr(D,[S]),In(S,i),In(S,o)},onBeforeAppear(S){Nr(F,[S]),In(S,l),In(S,h)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const de=()=>v(S,T);In(S,d),S._enterCancelled?(In(S,g),nd()):(nd(),In(S,g)),Xf(()=>{S._isLeaving&&(Dr(S,d),In(S,m),Yf(k)||Zf(S,r,O,de))}),Nr(k,[S,de])},onEnterCancelled(S){_(S,!1,void 0,!0),Nr(b,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),Nr(y,[S])},onLeaveCancelled(S){v(S),Nr(x,[S])}})}function DT(t){if(t==null)return null;if(ke(t))return[Xc(t.enter),Xc(t.leave)];{const e=Xc(t);return[e,e]}}function Xc(t){return xg(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yi]||(t[Yi]=new Set)).add(e)}function Dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Yi];n&&(n.delete(e),n.size||(t[Yi]=void 0))}function Xf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xT=0;function Zf(t,e,n,r){const s=t._endId=++xT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=MT(t,e);if(!o)return r();const h=o+"end";let u=0;const d=()=>{t.removeEventListener(h,g),i()},g=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),t.addEventListener(h,g)}function MT(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${zn}Delay`),i=r(`${zn}Duration`),o=ed(s,i),c=r(`${wi}Delay`),l=r(`${wi}Duration`),h=ed(c,l);let u=null,d=0,g=0;e===zn?o>0&&(u=zn,d=o,g=i.length):e===wi?h>0&&(u=wi,d=h,g=l.length):(d=Math.max(o,h),u=d>0?o>h?zn:wi:null,g=u?u===zn?i.length:l.length:0);const m=u===zn&&/\b(transform|all)(,|$)/.test(r(`${zn}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:m}}function ed(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>td(n)+td(t[r])))}function td(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nd(){return document.body.offsetHeight}function VT(t,e,n){const r=t[Yi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rd=Symbol("_vod"),LT=Symbol("_vsh"),FT=Symbol(""),UT=/(^|;)\s*display\s*:/;function jT(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&oa(r,c,"")}else for(const o in e)n[o]==null&&oa(r,o,"");for(const o in n)o==="display"&&(i=!0),oa(r,o,n[o])}else if(s){if(e!==n){const o=r[FT];o&&(n+=";"+o),r.cssText=n,i=UT.test(n)}}else e&&t.removeAttribute("style");rd in t&&(t[rd]=i?r.display:"",t[LT]&&(r.display="none"))}const sd=/\s*!important$/;function oa(t,e,n){if(ce(n))n.forEach(r=>oa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BT(t,e);sd.test(n)?t.setProperty(es(r),n.replace(sd,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],Zc={};function BT(t,e){const n=Zc[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Zc[e]=r;r=Qa(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return Zc[e]=i}return e}const od="http://www.w3.org/1999/xlink";function ad(t,e,n,r,s,i=Fv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||i&&!Mg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function cd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function e_(t,e,n,r){t.addEventListener(e,n,r)}function HT(t,e,n,r){t.removeEventListener(e,n,r)}const ld=Symbol("_vei");function $T(t,e,n,r,s=null){const i=t[ld]||(t[ld]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=qT(e);if(r){const h=i[e]=zT(r,s);e_(t,c,h,l)}else o&&(HT(t,c,o,l),i[e]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;function qT(t){let e;if(ud.test(t)){e={};let r;for(;r=t.match(ud);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let el=0;const WT=Promise.resolve(),KT=()=>el||(WT.then(()=>el=0),el=Date.now());function zT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zt(GT(r,n.value),e,5,[r])};return n.value=t,n.attached=KT(),n}function GT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,QT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?VT(t,r,o):e==="style"?jT(t,n,r):lo(e)?Pu(e)||$T(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JT(t,e,r,o))?(cd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(r))?cd(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ad(t,e,r,o))};function JT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&hd(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hd(e)&&Fe(n)?!1:e in t}const fd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>bs(e,n):e},tl=Symbol("_assign"),jN={created(t,{value:e},n){t.checked=ya(e,n.props.value),t[tl]=fd(n),e_(t,"change",()=>{t[tl](YT(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[tl]=fd(r),e!==n&&(t.checked=ya(e,r.props.value))}};function YT(t){return"_value"in t?t._value:t.value}const XT=["ctrl","shift","alt","meta"],ZT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XT.some(n=>t[`${n}Key`]&&!e.includes(n))},BN=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=ZT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},t_=it({patchProp:QT},CT);let Vi,dd=!1;function eI(){return Vi||(Vi=Jw(t_))}function tI(){return Vi=dd?Vi:Yw(t_),dd=!0,Vi}const nI=(...t)=>{const e=eI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=r_(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,n_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},rI=(...t)=>{const e=tI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=r_(r);if(s)return n(s,!0,n_(s))},e};function n_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function r_(t){return Fe(t)?document.querySelector(t):t}const sI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,iI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,oI=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function aI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){cI(t);return}return e}function cI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Pa(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!oI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(sI.test(t)||iI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,aI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const lI=/#/g,uI=/&/g,hI=/\//g,fI=/=/g,Xu=/\+/g,dI=/%5e/gi,pI=/%60/gi,gI=/%7c/gi,mI=/%20/gi;function _I(t){return encodeURI(""+t).replace(gI,"|")}function Ul(t){return _I(typeof t=="string"?t:JSON.stringify(t)).replace(Xu,"%2B").replace(mI,"+").replace(lI,"%23").replace(uI,"%26").replace(pI,"`").replace(dI,"^").replace(hI,"%2F")}function nl(t){return Ul(t).replace(fI,"%3D")}function ka(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function yI(t){return ka(t.replace(Xu," "))}function EI(t){return ka(t.replace(Xu," "))}function s_(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=yI(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=EI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function vI(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${nl(t)}=${Ul(n)}`).join("&"):`${nl(t)}=${Ul(e)}`:nl(t)}function wI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>vI(e,t[e])).filter(Boolean).join("&")}const TI=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,i_=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,II=/^([/\\]\s*){2,}[^/\\]/,bI=/^[\s\0]*(blob|data|javascript|vbscript):$/i,AI=/\/$|\/\?|\/#/,RI=/^\.?\//;function Ar(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?TI.test(t):i_.test(t)||(e.acceptRelative?II.test(t):!1)}function SI(t){return!!t&&bI.test(t)}function jl(t="",e){return e?AI.test(t):t.endsWith("/")}function Xi(t="",e){if(!e)return(jl(t)?t.slice(0,-1):t)||"/";if(!jl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function CI(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(jl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function PI(t,e){if(a_(e)||Ar(t))return t;const n=Xi(e);return t.startsWith(n)?t:Zu(n,t)}function pd(t,e){if(a_(e))return t;const n=Xi(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function o_(t,e){const n=u_(t),r={...s_(n.search),...e};return n.search=wI(r),xI(n)}function a_(t){return!t||t==="/"}function kI(t){return t&&t!=="/"}function Zu(t,...e){let n=t||"";for(const r of e.filter(s=>kI(s)))if(n){const s=r.replace(RI,"");n=CI(n)+s}else n=r;return n}function c_(...t){var o,c,l,h;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[d,g]of u.split(e).entries())if(!(!g||g===".")){if(g===".."){if(r.length===1&&Ar(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+g;continue}r.push(g),s++}}let i=r.join("/");return s>=0?(c=n[0])!=null&&c.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(h=n[n.length-1])!=null&&h.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function OI(t){return NI(t,"https://")}function NI(t,e){let n=t.match(i_);return n||(n=t.match(/^\/{2,}/)),n?e+t.slice(n[0].length):e+t}function DI(t,e){return ka(Xi(t))===ka(Xi(e))}const l_=Symbol.for("ufo:protocolRelative");function u_(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!Ar(t,{acceptRelative:!0}))return gd(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",c=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(c=c.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:h,hash:u}=gd(c);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:h,hash:u,[l_]:!r}}function gd(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function xI(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[l_]?(t.protocol||"")+"//":"")+s+i+e+n+r}class MI extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function VI(t){var l,h,u,d,g;const e=((l=t.error)==null?void 0:l.message)||((h=t.error)==null?void 0:h.toString())||"",n=((u=t.request)==null?void 0:u.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,c=new MI(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(c,m,{get(){return t[m]}});for(const[m,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(c,m,{get(){return t.response&&t.response[I]}});return c}const LI=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function md(t="GET"){return LI.has(t.toUpperCase())}function FI(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const UI=new Set(["image/svg","application/xml","application/xhtml","application/html"]),jI=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function BI(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return jI.test(e)?"json":UI.has(e)||e.startsWith("text/")?"text":"blob"}function HI(t,e,n,r){const s=$I((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function $I(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Qo(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const qI=new Set([408,409,425,429,500,502,503,504]),WI=new Set([101,204,205,304]);function h_(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(c){const l=c.error&&c.error.name==="AbortError"&&!c.options.timeout||!1;if(c.options.retry!==!1&&!l){let u;typeof c.options.retry=="number"?u=c.options.retry:u=md(c.options.method)?0:1;const d=c.response&&c.response.status||500;if(u>0&&(Array.isArray(c.options.retryStatusCodes)?c.options.retryStatusCodes.includes(d):qI.has(d))){const g=typeof c.options.retryDelay=="function"?c.options.retryDelay(c):c.options.retryDelay||0;return g>0&&await new Promise(m=>setTimeout(m,g)),i(c.request,{...c.options,retry:u-1})}}const h=VI(c);throw Error.captureStackTrace&&Error.captureStackTrace(h,i),h}const i=async function(l,h={}){const u={request:l,options:HI(l,h,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await Qo(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=PI(u.request,u.options.baseURL)),u.options.query&&(u.request=o_(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&md(u.options.method)&&(FI(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let d;if(!u.options.signal&&u.options.timeout){const m=new r;d=setTimeout(()=>{const I=new Error("[TimeoutError]: The operation was aborted due to timeout");I.name="TimeoutError",I.code=23,m.abort(I)},u.options.timeout),u.options.signal=m.signal}try{u.response=await e(u.request,u.options)}catch(m){return u.error=m,u.options.onRequestError&&await Qo(u,u.options.onRequestError),await s(u)}finally{d&&clearTimeout(d)}if((u.response.body||u.response._bodyInit)&&!WI.has(u.response.status)&&u.options.method!=="HEAD"){const m=(u.options.parseResponse?"json":u.options.responseType)||BI(u.response.headers.get("content-type")||"");switch(m){case"json":{const I=await u.response.text(),R=u.options.parseResponse||Pa;u.response._data=R(I);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[m]()}}return u.options.onResponse&&await Qo(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await Qo(u,u.options.onResponseError),await s(u)):u.response},o=async function(l,h){return(await i(l,h))._data};return o.raw=i,o.native=(...c)=>e(...c),o.create=(c={},l={})=>h_({...t,...l,defaults:{...t.defaults,...l.defaults,...c}}),o}const Oa=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),KI=Oa.fetch?(...t)=>Oa.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),zI=Oa.Headers,GI=Oa.AbortController,QI=h_({fetch:KI,Headers:zI,AbortController:GI}),JI=QI,YI=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},eh=()=>YI().app,XI=()=>eh().baseURL,ZI=()=>eh().buildAssetsDir,th=(...t)=>c_(f_(),ZI(),...t),f_=(...t)=>{const e=eh(),n=e.cdnURL||e.baseURL;return t.length?c_(n,...t):n};globalThis.__buildAssetsURL=th,globalThis.__publicAssetsURL=f_;globalThis.$fetch||(globalThis.$fetch=JI.create({baseURL:XI()}));"global"in globalThis||(globalThis.global=globalThis);function Bl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Bl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const eb={run:t=>t()},tb=()=>eb,d_=typeof console.createTask<"u"?console.createTask:tb;function nb(t,e){const n=e.shift(),r=d_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function rb(t,e){const n=e.shift(),r=d_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function rl(t,e){for(const n of[...t])n(e)}class sb{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Bl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Bl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(nb,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(rb,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&rl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&rl(this._after,s)}):(this._after&&s&&rl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function p_(){return new sb}function ib(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,c)=>{c||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,c)=>{r(o),e=o;try{return s?s.run(o,c):c()}finally{n||(e=void 0)}},async callAsync(o,c){e=o;const l=()=>{e=o},h=()=>e===o?l:void 0;Hl.add(h);try{const u=s?s.run(o,c):c();return n||(e=void 0),await u}finally{Hl.delete(h)}}}}function ob(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=ib({...t,...r})),e[n]}}}const Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},_d="__unctx__",ab=Na[_d]||(Na[_d]=ob()),cb=(t,e={})=>ab.get(t,e),yd="__unctx_async_handlers__",Hl=Na[yd]||(Na[yd]=new Set);function Cs(t){const e=[];for(const s of Hl){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const lb=!1,Ed=!1,ub=!1,HN={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},$N={value:null,errorValue:null,deep:!0},hb=null,qN={},fb="#__nuxt",g_="nuxt-app",vd=36e5,db="vite:preloadError";function m_(t=g_){return cb(t,{asyncContext:!1})}const pb="__nuxt_plugin";function gb(t){var s;let e=0;const n={_id:t.id||g_||"nuxt-app",_scope:Du(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.7"},get vue(){return n.vueApp.version}},payload:hn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:hn({}),state:Fn({}),once:new Set,_errors:hn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!xu()?n._scope.run(()=>wd(n,i)):wd(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:hn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=p_(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const c="$"+i;Jo(n,c,o),Jo(n.vueApp.config.globalProperties,c,o)},Jo(n.vueApp,"$nuxt",n),Jo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(db,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Je);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function mb(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function _b(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function yb(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function c(l){var u;const h=((u=l.dependsOn)==null?void 0:u.filter(d=>e.some(g=>g._name===d)&&!n.has(d)))??[];if(h.length>0)r.push([new Set(h),l]);else{const d=_b(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([g,m])=>{g.has(l._name)&&(g.delete(l._name),g.size===0&&(o++,await c(m)))})))});l.parallel?s.push(d.catch(g=>i.push(g))):await d}}for(const l of e)mb(t,l);for(const l of e)await c(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Dt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[pb]:!0,_name:e})}const Eb=Dt;function wd(t,e,n){const r=()=>e();return m_(t._id).set(t),t.vueApp.runWithContext(r)}function vb(t){var n;let e;return tc()&&(e=(n=po())==null?void 0:n.appContext.app.$nuxt),e||(e=m_(t).tryUse()),e||null}function Je(t){const e=vb(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function go(t){return Je().$config}function Jo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function wb(t,e){return{ctx:{table:t},matchAll:n=>y_(n,t)}}function __(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,__(s)])):new Map(Object.entries(t[n]));return e}function Tb(t){return wb(__(t))}function y_(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Td(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Td(e.dynamic))if(t.startsWith(i+"/")){const c="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...y_(c,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Td(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function sl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function $l(t,e,n=".",r){if(!sl(e))return $l(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:sl(o)&&sl(s[i])?s[i]=$l(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Ib(t){return(...e)=>e.reduce((n,r)=>$l(n,r,"",t),{})}const E_=Ib();function bb(t,e){try{return e in t}catch{return!1}}class ql extends Error{constructor(n,r={}){super(n,r);Kn(this,"statusCode",500);Kn(this,"fatal",!1);Kn(this,"unhandled",!1);Kn(this,"statusMessage");Kn(this,"data");Kn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Wl(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=v_(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Kn(ql,"__h3_error__",!0);function Ab(t){if(typeof t=="string")return new ql(t);if(Rb(t))return t;const e=new ql(t.message??t.statusMessage??"",{cause:t.cause||t});if(bb(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Wl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Wl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;v_(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Rb(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Sb=/[^\u0009\u0020-\u007E]/g;function v_(t=""){return t.replace(Sb,"")}function Wl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const w_=Symbol("layout-meta"),Qr=Symbol("route"),Ft=()=>{var t;return(t=Je())==null?void 0:t.$router},ic=()=>tc()?st(Qr,Je()._route):Je()._route;function WN(t){return t}const Cb=()=>{try{if(Je()._processingMiddleware)return!0}catch{return!1}return!1},KN=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Pb(t):Ft().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:h={}}=e.open,u=Object.entries(h).filter(([d,g])=>g!==void 0).map(([d,g])=>`${d.toLowerCase()}=${g}`).join(", ");return open(n,l,u),Promise.resolve()}const r=Ar(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&SI(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=Cb();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:h,hash:u}=u_(t);return{path:l,...h&&{query:s_(h)},...u&&{hash:u},replace:!0}}return{...t,replace:!0}}return t}const o=Ft(),c=Je();return s?(c._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?c.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Pb(t){return o_(t.path||"",t.query||{})+(t.hash||"")}const T_="__nuxt_error",oc=()=>rm(Je().payload,"error"),Vr=t=>{const e=qr(t);try{const n=Je(),r=oc();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},kb=async(t={})=>{const e=Je(),n=oc();e.callHook("app:error:cleared",t),t.redirect&&await Ft().replace(t.redirect),n.value=hb},I_=t=>!!t&&typeof t=="object"&&T_ in t,qr=t=>{const e=Ab(t);return Object.defineProperty(e,T_,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let b_;const mo=t=>b_=t,A_=Symbol();function Kl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Li;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Li||(Li={}));function Ob(){const t=Du(!0),e=t.run(()=>Xt({}));let n=[],r=[];const s=Hu({install(i){mo(s),s._a=i,i.provide(A_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const R_=()=>{};function Id(t,e,n,r=R_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&xu()&&Bv(s),s}function hs(t,...e){t.slice().forEach(n=>{n(...e)})}const Nb=t=>t(),bd=Symbol(),il=Symbol();function zl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Kl(s)&&Kl(r)&&t.hasOwnProperty(n)&&!Le(r)&&!kn(r)?t[n]=zl(s,r):t[n]=r}return t}const Db=Symbol();function xb(t){return!Kl(t)||!Object.prototype.hasOwnProperty.call(t,Db)}const{assign:Qn}=Object;function Mb(t){return!!(Le(t)&&t.effect)}function Vb(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const u=lw(n.state.value[t]);return Qn(u,i,Object.keys(o||{}).reduce((d,g)=>(d[g]=Hu(Lt(()=>{mo(n);const m=n._s.get(t);return o[g].call(m,m)})),d),{}))}return l=S_(t,h,e,n,r,!0),l}function S_(t,e,n={},r,s,i){let o;const c=Qn({actions:{}},n),l={deep:!0};let h,u,d=[],g=[],m;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),Xt({});let R;function O(y){let _;h=u=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Li.patchFunction,storeId:t,events:m}):(zl(r.state.value[t],y),_={type:Li.patchObject,payload:y,storeId:t,events:m});const v=R=Symbol();zr().then(()=>{R===v&&(h=!0)}),u=!0,hs(d,_,r.state.value[t])}const D=i?function(){const{state:_}=n,v=_?_():{};this.$patch(C=>{Qn(C,v)})}:R_;function N(){o.stop(),d=[],g=[],r._s.delete(t)}const b=(y,_="")=>{if(bd in y)return y[il]=_,y;const v=function(){mo(r);const C=Array.from(arguments),S=[],T=[];function de(re){S.push(re)}function me(re){T.push(re)}hs(g,{args:C,name:v[il],store:x,after:de,onError:me});let X;try{X=y.apply(this&&this.$id===t?this:x,C)}catch(re){throw hs(T,re),re}return X instanceof Promise?X.then(re=>(hs(S,re),re)).catch(re=>(hs(T,re),Promise.reject(re))):(hs(S,X),X)};return v[bd]=!0,v[il]=_,v},k={_p:r,$id:t,$onAction:Id.bind(null,g),$patch:O,$reset:D,$subscribe(y,_={}){const v=Id(d,y,_.detached,()=>C()),C=o.run(()=>Hr(()=>r.state.value[t],S=>{(_.flush==="sync"?u:h)&&y({storeId:t,type:Li.direct,events:m},S)},Qn({},l,_)));return v},$dispose:N},x=Fn(k);r._s.set(t,x);const w=(r._a&&r._a.runWithContext||Nb)(()=>r._e.run(()=>(o=Du()).run(()=>e({action:b}))));for(const y in w){const _=w[y];if(Le(_)&&!Mb(_)||kn(_))i||(I&&xb(_)&&(Le(_)?_.value=I[y]:zl(_,I[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const v=b(_,y);w[y]=v,c.actions[y]=_}}return Qn(x,w),Qn(Te(x),w),Object.defineProperty(x,"$state",{get:()=>r.state.value[t],set:y=>{O(_=>{Qn(_,y)})}}),r._p.forEach(y=>{Qn(x,o.run(()=>y({store:x,app:r._a,pinia:r,options:c})))}),I&&i&&n.hydrate&&n.hydrate(x.$state,I),h=!0,u=!0,x}/*! #__NO_SIDE_EFFECTS__ */function zN(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=tc();return o=o||(l?st(A_,null):null),o&&mo(o),o=b_,o._s.has(t)||(s?S_(t,e,r,o):Vb(t,r,o)),o._s.get(t)}return i.$id=t,i}function Ad(t){const e=Fb(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const Lb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Fb(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=Lb.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Ub=-1,jb=-2,Bb=-3,Hb=-4,$b=-5,qb=-6;function Wb(t,e){return Kb(JSON.parse(t),e)}function Kb(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===Ub)return;if(i===Bb)return NaN;if(i===Hb)return 1/0;if(i===$b)return-1/0;if(i===qb)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const c=n[i];if(!c||typeof c!="object")r[i]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const l=c[0],h=e==null?void 0:e[l];if(h)return r[i]=h(s(c[1]));switch(l){case"Date":r[i]=new Date(c[1]);break;case"Set":const u=new Set;r[i]=u;for(let m=1;m<c.length;m+=1)u.add(s(c[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<c.length;m+=2)d.set(s(c[m]),s(c[m+1]));break;case"RegExp":r[i]=new RegExp(c[1],c[2]);break;case"Object":r[i]=Object(c[1]);break;case"BigInt":r[i]=BigInt(c[1]);break;case"null":const g=Object.create(null);r[i]=g;for(let m=1;m<c.length;m+=2)g[c[m]]=s(c[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],I=c[1],R=Ad(I),O=new m(R);r[i]=O;break}case"ArrayBuffer":{const m=c[1],I=Ad(m);r[i]=I;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(c.length);r[i]=l;for(let h=0;h<c.length;h+=1){const u=c[h];u!==jb&&(l[h]=s(u))}}else{const l={};r[i]=l;for(const h in c){const u=c[h];l[h]=s(u)}}return r[i]}return s(0)}const zb=new Set(["link","style","script","noscript"]),Gb=new Set(["title","titleTemplate","script","style","noscript"]),Rd=new Set(["base","meta","link","style","script","noscript"]),Qb=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Jb=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Yb=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Xb=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Zb=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const eA=["name","property","http-equiv"],tA=new Set(["viewport","description","keywords","robots"]);function C_(t){const e=t.split(":");return e.length?Zb.has(e[1]):!1}function Gl(t){const{props:e,tag:n}=t;if(Jb.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of eA)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=tA.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Gb.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Sd(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Da(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Da(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Da(s[o],e,o);return i}return s}function nA(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...c]=i.split(":").map(l=>l.trim());o&&c.length&&n.set(o,c.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function P_(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=nA(n,r);return}if(Yb.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function rA(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=P_({tag:t,props:{}},n);return r.key&&zb.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function sA(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Da(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(rA(s,o))}),r.flat()}const Ql=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Cd={base:-10,title:10},iA={critical:-8,high:-1,low:2},Pd={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},oA=/@import/,Ti=t=>t===""||t===!0;function aA(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=iA[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Pd;if(e.tag in Cd)n=Cd[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Pd.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Ti(e.props.async)?n=s.script.async:e.props.src&&!Ti(e.props.defer)&&!Ti(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:Ti(e.props.defer)&&e.props.src&&!Ti(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&oA.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function kd(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function cA(t={}){var c;const e=p_();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:l=>kd(o,l),push(l,h){const u={...h||{}};delete u.head;const d=u._index??o._entryCount++,g={_i:d,input:l,options:u},m={_poll(I=!1){o.dirty=!0,!I&&i.add(d),e.callHook("entries:updated",o)},dispose(){r.delete(d)&&o.invalidate()},patch(I){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(g.input=I,r.set(d,g),m._poll())}};return m.patch(l),m},async resolveTags(){var m;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.size;){const I=i.values().next().value;i.delete(I);const R=r.get(I);if(R){const O={tags:sA(R.input,t.propResolvers||[]).map(D=>Object.assign(D,R.options)),entry:R};await e.callHook("entries:normalize",O),R._tags=O.tags.map((D,N)=>(D._w=aA(o,D),D._p=(R._i<<10)+N,D._d=Gl(D),D))}}let h=!1;l.entries.flatMap(I=>(I._tags||[]).map(R=>({...R,props:{...R.props}}))).sort(Ql).reduce((I,R)=>{const O=String(R._d||R._p);if(!I.has(O))return I.set(O,R);const D=I.get(O);if(((R==null?void 0:R.tagDuplicateStrategy)||(Xb.has(R.tag)?"merge":null)||(R.key&&R.key===D.key?"merge":null))==="merge"){const b={...D.props};Object.entries(R.props).forEach(([k,x])=>b[k]=k==="style"?new Map([...D.props.style||new Map,...x]):k==="class"?new Set([...D.props.class||new Set,...x]):x),I.set(O,{...R,props:b})}else R._p>>10===D._p>>10&&R.tag==="meta"&&C_(O)?(I.set(O,Object.assign([...Array.isArray(D)?D:[D],R],R)),h=!0):(R._w===D._w?R._p>D._p:(R==null?void 0:R._w)<(D==null?void 0:D._w))&&I.set(O,R);return I},l.tagMap);const u=l.tagMap.get("title"),d=l.tagMap.get("titleTemplate");if(o._title=u==null?void 0:u.textContent,d){const I=d==null?void 0:d.textContent;if(o._titleTemplate=I,I){let R=typeof I=="function"?I(u==null?void 0:u.textContent):I;typeof R=="string"&&!o.plugins.has("template-params")&&(R=R.replace("%s",(u==null?void 0:u.textContent)||"")),u?R===null?l.tagMap.delete("title"):l.tagMap.set("title",{...u,textContent:R}):(d.tag="title",d.textContent=R)}}l.tags=Array.from(l.tagMap.values()),h&&(l.tags=l.tags.flat().sort(Ql)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const g=[];for(const I of l.tags){const{innerHTML:R,tag:O,props:D}=I;if(Qb.has(O)&&!(Object.keys(D).length===0&&!I.innerHTML&&!I.textContent)&&!(O==="meta"&&!D.content&&!D["http-equiv"]&&!D.charset)){if(O==="script"&&R){if((m=D.type)!=null&&m.endsWith("json")){const N=typeof R=="string"?R:JSON.stringify(R);I.innerHTML=N.replace(/</g,"\\u003C")}else typeof R=="string"&&(I.innerHTML=R.replace(new RegExp(`</${O}`,"g"),`<\\/${O}`));I._d=Gl(I)}g.push(I)}}return g},invalidate(){for(const l of r.values())i.add(l._i);o.dirty=!0,e.callHook("entries:updated",o)}};return((t==null?void 0:t.plugins)||[]).forEach(l=>kd(o,l)),o.hooks.callHook("init",o),(c=t.init)==null||c.forEach(l=>l&&o.push(l)),o}const Zn="%separator",lA=new RegExp(`${Zn}(?:\\s*${Zn})*`,"g");function uA(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function Yo(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Zn);return t=t.replace(/%\w+(?:\.\w+)?/g,c=>{if(c===Zn||!i.includes(c))return c;const l=uA(e,c.slice(1),r);return l!==void 0?l:c}).trim(),o&&(t.endsWith(Zn)&&(t=t.slice(0,-Zn.length)),t.startsWith(Zn)&&(t=t.slice(Zn.length)),t=t.replace(lA,n||"").trim()),t}const Od=t=>t.includes(":key")?t:t.split(":").join(":key:"),hA={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Od(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Od(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Ql))}}},fA={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Jl(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Jl(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await Jl(t[r]);return n}return t}const dA={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Jl(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},pA={meta:"content",link:"href",htmlAttrs:"lang"},gA=["innerHTML","textContent"],mA=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=Yo(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const c=pA[o.tag];if(c&&typeof o.props[c]=="string")o.props[c]=Yo(o.props[c],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of gA)typeof o[l]=="string"&&(o[l]=Yo(o[l],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=Yo(n.textContent,t._templateParams,t._separator))}}}),_A=(t,e)=>Le(e)?tm(e):e,k_="usehead";function yA(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(k_,t)}}.install}function EA(){if(tc()){const t=st(k_);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function GN(t,e={}){const n=e.head||EA();return n.ssr?n.push(t||{},e):vA(n,t,e)}function vA(t,e,n={}){const r=Xt(!1);let s;return tT(()=>{const o=r.value?{}:Da(e,_A);s?s.patch(o):s=t.push(o,n)}),po()&&(fo(()=>{s.dispose()}),mm(()=>{r.value=!0}),gm(()=>{r.value=!1})),s}const wA="modulepreload",TA=function(t,e){return new URL(t,e).href},Nd={},nt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=TA(u,r),u in Nd)return;Nd[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!r)for(let R=c.length-1;R>=0;R--){const O=c[R];if(O.href===u&&(!d||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const I=document.createElement("link");if(I.rel=d?"stylesheet":wA,d||(I.as="script"),I.crossOrigin="",I.href=u,h&&I.setAttribute("nonce",h),document.head.appendChild(I),d)return new Promise((R,O)=>{I.addEventListener("load",R),I.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};let aa,ca;function IA(){return aa=$fetch(th(`builds/meta/${go().app.buildId}.json`),{responseType:"json"}),aa.then(t=>{ca=Tb(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),aa}function ac(){return aa||IA()}async function nh(t){const e=typeof t=="string"?t:t.path;if(await ac(),!ca)return console.error("[nuxt] Error creating app manifest matcher.",ca),{};try{return E_({},...ca.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Dd(t,e={}){if(!await N_(t))return null;const r=await AA(t,e);return await O_(r)||null}const bA="_payload.json";async function AA(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Ar(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=go(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await N_(t)?i:r.app.baseURL;return Zu(o,n.pathname,bA+(s?`?${s}`:""))}async function O_(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(D_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function N_(t=ic().path){const e=Je();return t=Xi(t),(await ac()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await nh({path:t});return!!r.prerender&&!r.redirect})}let xr=null;async function RA(){var r;if(xr)return xr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await D_(t.textContent||""),n=t.dataset.src?await O_(t.dataset.src):void 0;return xr={...e,...n,...window.__NUXT__},(r=xr.config)!=null&&r.public&&(xr.config.public=Fn(xr.config.public)),xr}async function D_(t){return await Wb(t,Je()._payloadRevivers)}function x_(t,e){Je()._payloadRevivers[t]=e}const SA=Eb(()=>{x_("skipHydrate",t=>{})}),CA=[["NuxtError",t=>qr(t)],["EmptyShallowRef",t=>Ls(t==="_"?void 0:t==="0n"?BigInt(0):Pa(t))],["EmptyRef",t=>Xt(t==="_"?void 0:t==="0n"?BigInt(0):Pa(t))],["ShallowRef",t=>Ls(t)],["ShallowReactive",t=>hn(t)],["Ref",t=>Xt(t)],["Reactive",t=>Fn(t)]],PA=Dt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of CA)x_(r,s);Object.assign(t.payload,([e,n]=Cs(()=>t.runWithContext(RA)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function rh(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var m;const i=new Map,o=new Promise(I=>{t.resolveTags().then(R=>{I(R.map(O=>{const D=i.get(O._d)||0,N={tag:O,id:(D?`${O._d}:${D}`:O._d)||Sd(O),shouldRender:!0};return O._d&&C_(O._d)&&i.set(O._d,D+1),N}))})});let c=t._dom;if(!c){c={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const I of["body","head"]){const R=(m=n[I])==null?void 0:m.children;for(const O of R){const D=O.tagName.toLowerCase();if(!Rd.has(D))continue;const N=P_({tag:D,props:{}},{innerHTML:O.innerHTML,...O.getAttributeNames().reduce((b,k)=>(b[k]=O.getAttribute(k),b),{})||{}});if(N.key=O.getAttribute("data-hid")||void 0,N._d=Gl(N)||Sd(N),c.elMap.has(N._d)){let b=1,k=N._d;for(;c.elMap.has(k);)k=`${N._d}:${b++}`;c.elMap.set(k,O)}else c.elMap.set(N._d,O)}}}c.pendingSideEffects={...c.sideEffects},c.sideEffects={};function l(I,R,O){const D=`${I}:${R}`;c.sideEffects[D]=O,delete c.pendingSideEffects[D]}function h({id:I,$el:R,tag:O}){const D=O.tag.endsWith("Attrs");c.elMap.set(I,R),D||(O.textContent&&O.textContent!==R.textContent&&(R.textContent=O.textContent),O.innerHTML&&O.innerHTML!==R.innerHTML&&(R.innerHTML=O.innerHTML),l(I,"el",()=>{R==null||R.remove(),c.elMap.delete(I)}));for(const N in O.props){if(!Object.prototype.hasOwnProperty.call(O.props,N))continue;const b=O.props[N];if(N.startsWith("on")&&typeof b=="function"){const x=R==null?void 0:R.dataset;if(x&&x[`${N}fired`]){const F=N.slice(0,-5);b.call(R,new Event(F.substring(2)))}R.getAttribute(`data-${N}`)!==""&&((O.tag==="bodyAttrs"?n.defaultView:R).addEventListener(N.substring(2),b.bind(R)),R.setAttribute(`data-${N}`,""));continue}const k=`attr:${N}`;if(N==="class"){if(!b)continue;for(const x of b)D&&l(I,`${k}:${x}`,()=>R.classList.remove(x)),!R.classList.contains(x)&&R.classList.add(x)}else if(N==="style"){if(!b)continue;for(const[x,F]of b)l(I,`${k}:${x}`,()=>{R.style.removeProperty(x)}),R.style.setProperty(x,F)}else b!==!1&&b!==null&&(R.getAttribute(N)!==b&&R.setAttribute(N,b===!0?"":String(b)),D&&l(I,k,()=>R.removeAttribute(N)))}}const u=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},g=await o;for(const I of g){const{tag:R,shouldRender:O,id:D}=I;if(O){if(R.tag==="title"){n.title=R.textContent,l("title","",()=>n.title=c.title);continue}I.$el=I.$el||c.elMap.get(D),I.$el?h(I):Rd.has(R.tag)&&u.push(I)}}for(const I of u){const R=I.tag.tagPosition||"head";I.$el=n.createElement(I.tag.tag),h(I),d[R]=d[R]||n.createDocumentFragment(),d[R].appendChild(I.$el)}for(const I of g)await t.hooks.callHook("dom:renderTag",I,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const I in c.pendingSideEffects)c.pendingSideEffects[I]();t._dom=c,await t.hooks.callHook("dom:rendered",{renders:g}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function kA(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||rh;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return cA({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function OA(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function NA(t={}){const e=kA({domOptions:{render:OA(()=>rh(e),n=>setTimeout(n,0))},...t});return e.install=yA(e),e}const DA={disableDefaults:!0,disableCapoSorting:!1,plugins:[fA,dA,mA,hA]},xA=Dt({name:"nuxt:head",enforce:"pre",setup(t){const e=NA(DA);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await rh(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof document<"u";function M_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function MA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&M_(t.default)}const Se=Object.assign;function ol(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Fi=()=>{},en=Array.isArray,V_=/#/g,VA=/&/g,LA=/\//g,FA=/=/g,UA=/\?/g,L_=/\+/g,jA=/%5B/g,BA=/%5D/g,F_=/%5E/g,HA=/%60/g,U_=/%7B/g,$A=/%7C/g,j_=/%7D/g,qA=/%20/g;function sh(t){return encodeURI(""+t).replace($A,"|").replace(jA,"[").replace(BA,"]")}function WA(t){return sh(t).replace(U_,"{").replace(j_,"}").replace(F_,"^")}function Yl(t){return sh(t).replace(L_,"%2B").replace(qA,"+").replace(V_,"%23").replace(VA,"%26").replace(HA,"`").replace(U_,"{").replace(j_,"}").replace(F_,"^")}function KA(t){return Yl(t).replace(FA,"%3D")}function zA(t){return sh(t).replace(V_,"%23").replace(UA,"%3F")}function GA(t){return t==null?"":zA(t).replace(LA,"%2F")}function Zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const QA=/\/$/,JA=t=>t.replace(QA,"");function al(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=eR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Zi(o)}}function YA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hs(e.matched[r],n.matched[s])&&B_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function B_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ZA(t[n],e[n]))return!1;return!0}function ZA(t,e){return en(t)?Md(t,e):en(e)?Md(e,t):t===e}function Md(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var eo;(function(t){t.pop="pop",t.push="push"})(eo||(eo={}));var Ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ui||(Ui={}));function tR(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JA(t)}const nR=/^[^#]+#/;function rR(t,e){return t.replace(nR,"#")+e}function sR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const cc=()=>({left:window.scrollX,top:window.scrollY});function iR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vd(t,e){return(history.state?history.state.position-e:-1)+t}const Xl=new Map;function oR(t,e){Xl.set(t,e)}function aR(t){const e=Xl.get(t);return Xl.delete(t),e}let cR=()=>location.protocol+"//"+location.host;function H_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),xd(l,"")}return xd(n,t)+r+s}function lR(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=H_(t,location),I=n.value,R=e.value;let O=0;if(g){if(n.value=m,e.value=g,o&&o===I){o=null;return}O=R?g.position-R.position:0}else r(m);s.forEach(D=>{D(n.value,I,{delta:O,type:eo.pop,direction:O?O>0?Ui.forward:Ui.back:Ui.unknown})})};function l(){o=n.value}function h(g){s.push(g);const m=()=>{const I=s.indexOf(g);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:cc()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:h,destroy:d}}function Ld(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?cc():null}}function uR(t){const{history:e,location:n}=window,r={value:H_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,u){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:cR()+t+l;try{e[u?"replaceState":"pushState"](h,"",g),s.value=h}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function o(l,h){const u=Se({},e.state,Ld(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,u,!0),r.value=l}function c(l,h){const u=Se({},s.value,e.state,{forward:l,scroll:cc()});i(u.current,u,!0);const d=Se({},Ld(r.value,l,null),{position:u.position+1},h);i(l,d,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function hR(t){t=tR(t);const e=uR(t),n=lR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:rR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fR(t){return typeof t=="string"||t&&typeof t=="object"}function $_(t){return typeof t=="string"||typeof t=="symbol"}const q_=Symbol("");var Fd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fd||(Fd={}));function $s(t,e){return Se(new Error,{type:t,[q_]:!0},e)}function bn(t,e){return t instanceof Error&&q_ in t&&(e==null||!!(t.type&e))}const Ud="[^/]+?",dR={sensitive:!1,strict:!1,start:!0,end:!0},pR=/[.+*?^${}()[\]/\\]/g;function gR(t,e){const n=Se({},dR,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const u=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let d=0;d<h.length;d++){const g=h[d];let m=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace(pR,"\\$&"),m+=40;else if(g.type===1){const{value:I,repeatable:R,optional:O,regexp:D}=g;i.push({name:I,repeatable:R,optional:O});const N=D||Ud;if(N!==Ud){m+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${I}" (${N}): `+k.message)}}let b=R?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(b=O&&h.length<2?`(?:/${b})`:"/"+b),O&&(b+="?"),s+=b,m+=20,O&&(m+=-8),R&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const u=h.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",I=i[g-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function l(h){let u="",d=!1;for(const g of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of g)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:R,optional:O}=m,D=I in h?h[I]:"";if(en(D)&&!R)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const N=en(D)?D.join("/"):D;if(!N)if(O)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function mR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function W_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(jd(r))return 1;if(jd(s))return-1}return s.length-r.length}function jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _R={type:0,value:""},yR=/[a-zA-Z0-9_]/;function ER(t){if(!t)return[[]];if(t==="/")return[[_R]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${h}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",u="";function d(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&d(),o()):l===":"?(d(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:yR.test(l)?g():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),d(),o(),s}function vR(t,e,n){const r=gR(ER(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wR(t,e){const n=[],r=new Map;e=qd({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,m){const I=!m,R=Hd(d);R.aliasOf=m&&m.record;const O=qd(e,d),D=[R];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of k)D.push(Hd(Se({},R,{components:m?m.record.components:R.components,path:x,aliasOf:m?m.record:R})))}let N,b;for(const k of D){const{path:x}=k;if(g&&x[0]!=="/"){const F=g.record.path,w=F[F.length-1]==="/"?"":"/";k.path=g.record.path+(x&&w+x)}if(N=vR(k,g,O),m?m.alias.push(N):(b=b||N,b!==N&&b.alias.push(N),I&&d.name&&!$d(N)&&o(d.name)),K_(N)&&l(N),R.children){const F=R.children;for(let w=0;w<F.length;w++)i(F[w],N,m&&m.children[w])}m=m||N}return b?()=>{o(b)}:Fi}function o(d){if($_(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=bR(d,n);n.splice(g,0,d),d.record.name&&!$d(d)&&r.set(d.record.name,d)}function h(d,g){let m,I={},R,O;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw $s(1,{location:d});O=m.record.name,I=Se(Bd(g.params,m.keys.filter(b=>!b.optional).concat(m.parent?m.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&Bd(d.params,m.keys.map(b=>b.name))),R=m.stringify(I)}else if(d.path!=null)R=d.path,m=n.find(b=>b.re.test(R)),m&&(I=m.parse(R),O=m.record.name);else{if(m=g.name?r.get(g.name):n.find(b=>b.re.test(g.path)),!m)throw $s(1,{location:d,currentLocation:g});O=m.record.name,I=Se({},g.params,d.params),R=m.stringify(I)}const D=[];let N=m;for(;N;)D.unshift(N.record),N=N.parent;return{name:O,path:R,params:I,matched:D,meta:IR(D)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function Bd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:TR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function TR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IR(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function qd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bR(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;W_(t,e[i])<0?r=i:n=i+1}const s=AR(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function AR(t){let e=t;for(;e=e.parent;)if(K_(e)&&W_(t,e)===0)return e}function K_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function RR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(L_," "),o=i.indexOf("="),c=Zi(o<0?i:i.slice(0,o)),l=o<0?null:Zi(i.slice(o+1));if(c in e){let h=e[c];en(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Wd(t){let e="";for(let n in t){const r=t[n];if(n=KA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&Yl(i)):[r&&Yl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function SR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CR=Symbol(""),Kd=Symbol(""),lc=Symbol(""),ih=Symbol(""),Zl=Symbol("");function Ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l($s(4,{from:n,to:e})):g instanceof Error?l(g):fR(g)?l($s(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},u=i(()=>t.call(r&&r.instances[s],e,n,h));let d=Promise.resolve(u);t.length<3&&(d=d.then(h)),d.catch(g=>l(g))})}function cl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(M_(l)){const u=(l.__vccOpts||l)[e];u&&i.push(er(u,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=MA(u)?u.default:u;o.mods[c]=u,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&er(m,n,r,o,c,s)()}))}}return i}function zd(t){const e=st(lc),n=st(ih),r=Lt(()=>{const l=Ve(t.to);return e.resolve(l)}),s=Lt(()=>{const{matched:l}=r.value,{length:h}=l,u=l[h-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(Hs.bind(null,u));if(g>-1)return g;const m=Gd(l[h-2]);return h>1&&Gd(u)===m&&d[d.length-1].path!==m?d.findIndex(Hs.bind(null,l[h-2])):g}),i=Lt(()=>s.value>-1&&DR(n.params,r.value.params)),o=Lt(()=>s.value>-1&&s.value===n.matched.length-1&&B_(n.params,r.value.params));function c(l={}){if(NR(l)){const h=e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(Fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function PR(t){return t.length===1?t[0]:t}const kR=br({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zd,setup(t,{slots:e}){const n=Fn(zd(t)),{options:r}=st(lc),s=Lt(()=>({[Qd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&PR(e.default(n));return t.custom?i:wt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),OR=kR;function NR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Gd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qd=(t,e,n)=>t??e??n,xR=br({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=st(Zl),s=Lt(()=>t.route||r.value),i=st(Kd,0),o=Lt(()=>{let h=Ve(i);const{matched:u}=s.value;let d;for(;(d=u[h])&&!d.components;)h++;return h}),c=Lt(()=>s.value.matched[o.value]);ur(Kd,Lt(()=>o.value+1)),ur(CR,c),ur(Zl,s);const l=Xt();return Hr(()=>[l.value,c.value,t.name],([h,u,d],[g,m,I])=>{u&&(u.instances[d]=h,m&&m!==u&&h&&h===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),h&&u&&(!m||!Hs(u,m)||!g)&&(u.enterCallbacks[d]||[]).forEach(R=>R(h))},{flush:"post"}),()=>{const h=s.value,u=t.name,d=c.value,g=d&&d.components[u];if(!g)return Jd(n.default,{Component:g,route:h});const m=d.props[u],I=m?m===!0?h.params:typeof m=="function"?m(h):m:null,O=wt(g,Se({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Jd(n.default,{Component:O,route:h})||O}}});function Jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z_=xR;function MR(t){const e=wR(t.routes,t),n=t.parseQuery||RR,r=t.stringifyQuery||Wd,s=t.history,i=Ii(),o=Ii(),c=Ii(),l=Ls(Ht);let h=Ht;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ol.bind(null,j=>""+j),d=ol.bind(null,GA),g=ol.bind(null,Zi);function m(j,Z){let Y,ne;return $_(j)?(Y=e.getRecordMatcher(j),ne=Z):ne=j,e.addRoute(ne,Y)}function I(j){const Z=e.getRecordMatcher(j);Z&&e.removeRoute(Z)}function R(){return e.getRoutes().map(j=>j.record)}function O(j){return!!e.getRecordMatcher(j)}function D(j,Z){if(Z=Se({},Z||l.value),typeof j=="string"){const P=al(n,j,Z.path),V=e.resolve({path:P.path},Z),H=s.createHref(P.fullPath);return Se(P,V,{params:g(V.params),hash:Zi(P.hash),redirectedFrom:void 0,href:H})}let Y;if(j.path!=null)Y=Se({},j,{path:al(n,j.path,Z.path).path});else{const P=Se({},j.params);for(const V in P)P[V]==null&&delete P[V];Y=Se({},j,{params:d(P)}),Z.params=d(Z.params)}const ne=e.resolve(Y,Z),ye=j.hash||"";ne.params=u(g(ne.params));const Pe=YA(r,Se({},j,{hash:WA(ye),path:ne.path})),A=s.createHref(Pe);return Se({fullPath:Pe,hash:ye,query:r===Wd?SR(j.query):j.query||{}},ne,{redirectedFrom:void 0,href:A})}function N(j){return typeof j=="string"?al(n,j,l.value.path):Se({},j)}function b(j,Z){if(h!==j)return $s(8,{from:Z,to:j})}function k(j){return w(j)}function x(j){return k(Se(N(j),{replace:!0}))}function F(j){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ne=typeof Y=="function"?Y(j):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=N(ne):{path:ne},ne.params={}),Se({query:j.query,hash:j.hash,params:ne.path!=null?{}:j.params},ne)}}function w(j,Z){const Y=h=D(j),ne=l.value,ye=j.state,Pe=j.force,A=j.replace===!0,P=F(Y);if(P)return w(Se(N(P),{state:typeof P=="object"?Se({},ye,P.state):ye,force:Pe,replace:A}),Z||Y);const V=Y;V.redirectedFrom=Z;let H;return!Pe&&XA(r,ne,Y)&&(H=$s(16,{to:V,from:ne}),Ut(ne,ne,!0,!1)),(H?Promise.resolve(H):v(V,ne)).catch(U=>bn(U)?bn(U,2)?U:Kt(U):te(U,V,ne)).then(U=>{if(U){if(bn(U,2))return w(Se({replace:A},N(U.to),{state:typeof U.to=="object"?Se({},ye,U.to.state):ye,force:Pe}),Z||V)}else U=S(V,ne,!0,A,ye);return C(V,ne,U),U})}function y(j,Z){const Y=b(j,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(j){const Z=Bn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(j):j()}function v(j,Z){let Y;const[ne,ye,Pe]=VR(j,Z);Y=cl(ne.reverse(),"beforeRouteLeave",j,Z);for(const P of ne)P.leaveGuards.forEach(V=>{Y.push(er(V,j,Z))});const A=y.bind(null,j,Z);return Y.push(A),Pt(Y).then(()=>{Y=[];for(const P of i.list())Y.push(er(P,j,Z));return Y.push(A),Pt(Y)}).then(()=>{Y=cl(ye,"beforeRouteUpdate",j,Z);for(const P of ye)P.updateGuards.forEach(V=>{Y.push(er(V,j,Z))});return Y.push(A),Pt(Y)}).then(()=>{Y=[];for(const P of Pe)if(P.beforeEnter)if(en(P.beforeEnter))for(const V of P.beforeEnter)Y.push(er(V,j,Z));else Y.push(er(P.beforeEnter,j,Z));return Y.push(A),Pt(Y)}).then(()=>(j.matched.forEach(P=>P.enterCallbacks={}),Y=cl(Pe,"beforeRouteEnter",j,Z,_),Y.push(A),Pt(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(er(P,j,Z));return Y.push(A),Pt(Y)}).catch(P=>bn(P,8)?P:Promise.reject(P))}function C(j,Z,Y){c.list().forEach(ne=>_(()=>ne(j,Z,Y)))}function S(j,Z,Y,ne,ye){const Pe=b(j,Z);if(Pe)return Pe;const A=Z===Ht,P=ds?history.state:{};Y&&(ne||A?s.replace(j.fullPath,Se({scroll:A&&P&&P.scroll},ye)):s.push(j.fullPath,ye)),l.value=j,Ut(j,Z,Y,A),Kt()}let T;function de(){T||(T=s.listen((j,Z,Y)=>{if(!nn.listening)return;const ne=D(j),ye=F(ne);if(ye){w(Se(ye,{replace:!0,force:!0}),ne).catch(Fi);return}h=ne;const Pe=l.value;ds&&oR(Vd(Pe.fullPath,Y.delta),cc()),v(ne,Pe).catch(A=>bn(A,12)?A:bn(A,2)?(w(Se(N(A.to),{force:!0}),ne).then(P=>{bn(P,20)&&!Y.delta&&Y.type===eo.pop&&s.go(-1,!1)}).catch(Fi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),te(A,ne,Pe))).then(A=>{A=A||S(ne,Pe,!1),A&&(Y.delta&&!bn(A,8)?s.go(-Y.delta,!1):Y.type===eo.pop&&bn(A,20)&&s.go(-1,!1)),C(ne,Pe,A)}).catch(Fi)}))}let me=Ii(),X=Ii(),re;function te(j,Z,Y){Kt(j);const ne=X.list();return ne.length?ne.forEach(ye=>ye(j,Z,Y)):console.error(j),Promise.reject(j)}function De(){return re&&l.value!==Ht?Promise.resolve():new Promise((j,Z)=>{me.add([j,Z])})}function Kt(j){return re||(re=!j,de(),me.list().forEach(([Z,Y])=>j?Y(j):Z()),me.reset()),j}function Ut(j,Z,Y,ne){const{scrollBehavior:ye}=t;if(!ds||!ye)return Promise.resolve();const Pe=!Y&&aR(Vd(j.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return zr().then(()=>ye(j,Z,Pe)).then(A=>A&&iR(A)).catch(A=>te(A,j,Z))}const Ue=j=>s.go(j);let je;const Bn=new Set,nn={currentRoute:l,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:R,resolve:D,options:t,push:k,replace:x,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:X.add,isReady:De,install(j){const Z=this;j.component("RouterLink",OR),j.component("RouterView",z_),j.config.globalProperties.$router=Z,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),ds&&!je&&l.value===Ht&&(je=!0,k(s.location).catch(ye=>{}));const Y={};for(const ye in Ht)Object.defineProperty(Y,ye,{get:()=>l.value[ye],enumerable:!0});j.provide(lc,Z),j.provide(ih,hn(Y)),j.provide(Zl,l);const ne=j.unmount;Bn.add(j),j.unmount=function(){Bn.delete(j),Bn.size<1&&(h=Ht,T&&T(),T=null,l.value=Ht,je=!1,re=!1),ne()}}};function Pt(j){return j.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return nn}function VR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Hs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Hs(h,l))||s.push(l))}return[n,r,s]}function QN(){return st(lc)}function G_(t){return st(ih)}const LR=/(:\w+)\([^)]+\)/g,FR=/(:\w+)[?+*]/g,UR=/:\w+/g,jR=(t,e)=>e.path.replace(LR,"$1").replace(FR,"$1").replace(UR,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),eu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&jR(t.route,n));return typeof r=="function"?r(t.route):r},BR=(t,e)=>({default:()=>t?wt(Cw,t===!0?{}:t,e):e});function oh(t){return Array.isArray(t)?t:[t]}const ll=[{name:"index",path:"/",component:()=>nt(()=>import("./Dd8v1g4L.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)},{name:"tv-id",path:"/tv/:id()",component:()=>nt(()=>import("./D3ajliiT.js"),__vite__mapDeps([7,8,1,3,9,10]),import.meta.url)},{name:"admin-add",path:"/admin/add",meta:{middleware:"auth"},component:()=>nt(()=>import("./S8JqtoMb.js"),__vite__mapDeps([11,2,3,12,5,1,6,10]),import.meta.url)},{name:"movie-id",path:"/movie/:id()",component:()=>nt(()=>import("./wWwZUHQb.js"),__vite__mapDeps([13,8,1,3,9,10]),import.meta.url)},{name:"admin",path:"/admin",meta:{middleware:"auth"},component:()=>nt(()=>import("./a4IVHPHE.js"),__vite__mapDeps([14,1,6,15]),import.meta.url)},{name:"login",path:"/login",component:()=>nt(()=>import("./BozxqUii.js"),__vite__mapDeps([16,2,3,12,17]),import.meta.url)},{name:"movies",path:"/movies",component:()=>nt(()=>import("./WuzrkJwc.js"),__vite__mapDeps([18,1,2,3,5,6,4]),import.meta.url)},{name:"suggest",path:"/suggest",component:()=>nt(()=>import("./SdqCKlqg.js"),__vite__mapDeps([19,2,3,12,5,1,6]),import.meta.url)},{name:"tvshows",path:"/tvshows",component:()=>nt(()=>import("./mMNAyvlA.js"),__vite__mapDeps([20,1,2,3,5,6,4]),import.meta.url)},{name:"admin-suggestions",path:"/admin/suggestions",meta:{middleware:"auth"},component:()=>nt(()=>import("./DXFiVAiw.js"),__vite__mapDeps([21,5,3,1,6,15]),import.meta.url)}],Q_=(t,e)=>({default:()=>{var n;return t?wt(OT,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),HR=/(:\w+)\([^)]+\)/g,$R=/(:\w+)[?+*]/g,qR=/:\w+/g;function Yd(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(HR,"$1").replace($R,"$1").replace(qR,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function WR(t,e){return t===e||e===Ht?!1:Yd(t)!==Yd(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const KR={scrollBehavior(t,e,n){var c;const r=Je(),s=((c=Ft().options)==null?void 0:c.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:J_(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(l=>{if(e===Ht){l(Xd(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>l(Xd(t,e,n,s)))})})}};function J_(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Xd(t,e,n,r){if(n)return n;const s=WR(t,e);return t.hash?{el:t.hash,top:J_(t.hash),behavior:s?r:"instant"}:{left:0,top:0,behavior:s?r:"instant"}}const zR={hashMode:!1,scrollBehaviorType:"auto"},rn={...zR,...KR},GR=async(t,e)=>{var o;let n,r;if(!((o=t.meta)!=null&&o.validate))return;const s=([n,r]=Cs(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=qr({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},QR=async t=>{let e,n;const r=([e,n]=Cs(()=>nh({path:t.path})),e=await e,n(),e);if(r.redirect)return Ar(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},JR=[GR,QR],ji={auth:()=>nt(()=>import("./Bwk9YjN-.js"),__vite__mapDeps([22,17]),import.meta.url),authenticated:()=>nt(()=>import("./l5r1Q4vV.js"),[],import.meta.url)};function YR(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const h=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(h);return u[0]!=="/"&&(u="/"+u),pd(u,"")}const c=pd(r,t),l=!n||DI(c,n)?c:n;return l+(l.includes("?")?"":s)+i}const XR=Dt({name:"nuxt:router",enforce:"pre",async setup(t){var O;let e,n,r=go().app.baseURL;const s=((O=rn.history)==null?void 0:O.call(rn,r))??hR(r),i=rn.routes?([e,n]=Cs(()=>rn.routes(ll)),e=await e,n(),e??ll):ll;let o;const c=MR({...rn,scrollBehavior:(D,N,b)=>{if(N===Ht){o=b;return}if(rn.scrollBehavior){if(c.options.scrollBehavior=rn.scrollBehavior,"scrollRestoration"in window.history){const k=c.beforeEach(()=>{k(),window.history.scrollRestoration="manual"})}return rn.scrollBehavior(D,Ht,o||b)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(c);const l=Ls(c.currentRoute.value);c.afterEach((D,N)=>{l.value=N}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const h=YR(r,window.location,t.payload.path),u=Ls(c.currentRoute.value),d=()=>{u.value=c.currentRoute.value};t.hook("page:finish",d),c.afterEach((D,N)=>{var b,k,x,F;((k=(b=D.matched[0])==null?void 0:b.components)==null?void 0:k.default)===((F=(x=N.matched[0])==null?void 0:x.components)==null?void 0:F.default)&&d()});const g={};for(const D in u.value)Object.defineProperty(g,D,{get:()=>u.value[D],enumerable:!0});t._route=hn(g),t._middleware||(t._middleware={global:[],named:{}});const m=oc();c.afterEach(async(D,N,b)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(kb),b&&await t.callHook("page:loading:end")});try{[e,n]=Cs(()=>c.isReady()),await e,n()}catch(D){[e,n]=Cs(()=>t.runWithContext(()=>Vr(D))),await e,n()}const I=h!==c.currentRoute.value.fullPath?c.resolve(h):c.currentRoute.value;d();const R=t.payload.state._layout;return c.beforeEach(async(D,N)=>{var b;await t.callHook("page:loading:start"),D.meta=Fn(D.meta),t.isHydrating&&R&&!Dn(D.meta.layout)&&(D.meta.layout=R),t._processingMiddleware=!0;{const k=new Set([...JR,...t._middleware.global]);for(const x of D.matched){const F=x.meta.middleware;if(F)for(const w of oh(F))k.add(w)}{const x=await t.runWithContext(()=>nh({path:D.path}));if(x.appMiddleware)for(const F in x.appMiddleware)x.appMiddleware[F]?k.add(F):k.delete(F)}for(const x of k){const F=typeof x=="string"?t._middleware.named[x]||await((b=ji[x])==null?void 0:b.call(ji).then(w=>w.default||w)):x;if(!F)throw new Error(`Unknown route middleware: '${x}'.`);try{const w=await t.runWithContext(()=>F(D,N));if(!t.payload.serverRendered&&t.isHydrating&&(w===!1||w instanceof Error)){const y=w||qr({statusCode:404,statusMessage:`Page Not Found: ${h}`});return await t.runWithContext(()=>Vr(y)),!1}if(w===!0)continue;if(w===!1)return w;if(w)return I_(w)&&w.fatal&&await t.runWithContext(()=>Vr(w)),w}catch(w){const y=qr(w);return y.fatal&&await t.runWithContext(()=>Vr(y)),y}}}}),c.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),c.afterEach(async(D,N)=>{D.matched.length===0&&await t.runWithContext(()=>Vr(qr({statusCode:404,fatal:!1,statusMessage:`Page not found: ${D.fullPath}`,data:{path:D.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await c.replace({...I,force:!0}),c.options.scrollBehavior=rn.scrollBehavior}catch(D){await t.runWithContext(()=>Vr(D))}}),{provide:{router:c}}}}),Zd=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),JN=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),ah=t=>{const e=Je();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Zd(()=>t())}):Zd(()=>t())},ZR="$s";function eS(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=ZR+n,i=Je(),o=rm(i.payload.state,s);if(o.value===void 0&&r){const c=r();if(Le(c))return i.payload.state[s]=c,c;o.value=c}return o}function tS(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function nS(t,e=Ft()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises||(e._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>nS(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var c;return(c=o.components)==null?void 0:c.default}).filter(o=>typeof o=="function");for(const o of i){const c=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(c)));s.push(c)}await Promise.all(s)}function rS(t={}){const e=t.path||window.location.pathname;let n={};try{n=Pa(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Je().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}function sS(t){typeof t.indexable<"u"&&(t.indexable=String(t.indexable)!=="false"),typeof t.trailingSlash<"u"&&!t.trailingSlash&&(t.trailingSlash=String(t.trailingSlash)!=="false"),t.url&&!Ar(String(t.url),{acceptRelative:!0,strict:!1})&&(t.url=OI(String(t.url)));const e=Object.keys(t).sort((r,s)=>r.localeCompare(s)),n={};for(const r of e)n[r]=t[r];return n}function iS(t){const n=[];function r(i){if(!i||typeof i!="object"||Object.keys(i).length===0)return()=>{};i._context;const o={};for(const l in i){const h=i[l];typeof h<"u"&&h!==""&&(o[l]=h)}let c;return Object.keys(o).filter(l=>!l.startsWith("_")).length>0&&(c=n.push(o)),()=>{typeof c<"u"&&n.splice(c-1,1)}}function s(i){var c;const o={};i!=null&&i.debug&&(o._context={}),o._priority={};for(const l in n.sort((h,u)=>(h._priority||0)-(u._priority||0)))for(const h in n[l]){const u=h,d=i!=null&&i.resolveRefs?tm(n[l][h]):n[l][h];!h.startsWith("_")&&typeof d<"u"&&d!==""&&(o[h]=d,typeof n[l]._priority<"u"&&n[l]._priority!==-1&&(o._priority[u]=n[l]._priority),i!=null&&i.debug&&(o._context[u]=((c=n[l]._context)==null?void 0:c[u])||n[l]._context||"anonymous"))}return i!=null&&i.skipNormalize?o:sS(o)}return{stack:n,push:r,get:s}}const oS=Dt({name:"nuxt-site-config:init",enforce:"pre",async setup(t){var r;const e=iS(),n=eS("site-config");{const s=n.value||window.__NUXT_SITE_CONFIG__||{};for(const i in s)i[0]!=="_"&&e.push({[i]:s[i],_priority:((r=s._priority)==null?void 0:r[i])||-1})}return{provide:{nuxtSiteConfig:e}}}}),aS=Dt({name:"nuxt:payload",setup(t){const e=new Set;Ft().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await Dd(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),ah(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await Dd(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(ac,1e3)})}}),cS=Dt(()=>{const t=Ft();ah(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),lS=Dt(t=>{let e;async function n(){const r=await ac();e&&clearTimeout(e),e=setTimeout(n,vd);try{const s=await $fetch(th("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}ah(()=>{e=setTimeout(n,vd)})}),uS=Dt({name:"nuxt:chunk-reload",setup(t){const e=Ft(),n=go(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Zu(n.app.baseURL,i.fullPath);rS({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),hS=Dt({name:"pinia",setup(t){const e=Ob();return t.vueApp.use(e),mo(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),fS=Dt({name:"nuxt:global-components"}),or={default:Es(()=>nt(()=>import("./DgMlkYTu.js"),__vite__mapDeps([23,24,1,3,17,6]),import.meta.url).then(t=>t.default||t)),"error-layout":Es(()=>nt(()=>import("./AermgA2Z.js"),__vite__mapDeps([25,24,1,3,17]),import.meta.url).then(t=>t.default||t)),error:Es(()=>nt(()=>import("./DolzaWCY.js"),__vite__mapDeps([26,1,27]),import.meta.url).then(t=>t.default||t)),fullpage:Es(()=>nt(()=>import("./BPiR1pLr.js"),[],import.meta.url).then(t=>t.default||t))},dS=Dt({name:"nuxt:prefetch",setup(t){const e=Ft();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof or[r]=="function"&&await or[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Ar(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=oh(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof ji[o]=="function"&&ji[o]();typeof s=="string"&&s in or&&tS(or[s])})}}),pS=Dt(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-auth-sw.js")}),gS=()=>{};var ep={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},X_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,m=h&63;l||(m=64,o||(g=64)),r.push(n[u],n[d],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||d==null)throw new _S;const g=i<<2|c>>4;if(r.push(g),h!==64){const m=c<<4&240|h>>2;if(r.push(m),d!==64){const I=h<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yS=function(t){const e=Y_(t);return X_.encodeByteArray(e,!0)},xa=function(t){return yS(t).replace(/\./g,"")},Z_=function(t){try{return X_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=()=>ES().__FIREBASE_DEFAULTS__,wS=()=>{if(typeof process>"u"||typeof ep>"u")return;const t=ep.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Z_(t[1]);return e&&JSON.parse(e)},uc=()=>{try{return gS()||vS()||wS()||TS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ey=t=>{var e,n;return(n=(e=uc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},IS=t=>{const e=ey(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ty=()=>{var t;return(t=uc())==null?void 0:t.config},ny=t=>{var e;return(e=uc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ry(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[xa(JSON.stringify(n)),xa(JSON.stringify(o)),""].join(".")}const Bi={};function RS(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bi))Bi[e]?t.emulator.push(e):t.prod.push(e);return t}function SS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tp=!1;function sy(t,e){if(typeof window>"u"||typeof document>"u"||!ti(window.location.host)||Bi[t]===e||Bi[t]||tp)return;Bi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=RS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{tp=!0,o()},g}function u(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=SS(r),m=n("text"),I=document.getElementById(m)||document.createElement("span"),R=n("learnmore"),O=document.getElementById(R)||document.createElement("a"),D=n("preprendIcon"),N=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const b=g.element;c(b),u(O,R);const k=h();l(N,D),b.append(N,I,O,k),document.body.appendChild(b)}i?(I.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function PS(){var e;const t=(e=uc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DS(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xS(){return!PS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MS(){try{return typeof indexedDB=="object"}catch{return!1}}function VS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LS,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?FS(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new jn(s,c,r)}}function FS(t,e){return t.replace(US,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const US=/\{\$([^}]+)}/g;function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(np(i)&&np(o)){if(!Jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BS(t,e){const n=new HS(t,e);return n.subscribe.bind(n)}class HS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$S(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ul),s.error===void 0&&(s.error=ul),s.complete===void 0&&(s.complete=ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ul(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KS(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WS(t){return t===Lr?void 0:t}function KS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const GS={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},QS=_e.INFO,JS={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},YS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ch{constructor(e){this.name=e,this._logLevel=QS,this._logHandler=YS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const XS=(t,e)=>e.some(n=>t instanceof n);let rp,sp;function ZS(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e0(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,tu=new WeakMap,oy=new WeakMap,hl=new WeakMap,lh=new WeakMap;function t0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iy.set(n,t)}).catch(()=>{}),lh.set(e,t),e}function n0(t){if(tu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tu.set(t,e)}let nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function r0(t){nu=t(nu)}function s0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return oy.set(r,e.sort?e.sort():[e]),hr(r)}:e0().includes(t)?function(...e){return t.apply(fl(this),e),hr(iy.get(this))}:function(...e){return hr(t.apply(fl(this),e))}}function i0(t){return typeof t=="function"?s0(t):(t instanceof IDBTransaction&&n0(t),XS(t,ZS())?new Proxy(t,nu):t)}function hr(t){if(t instanceof IDBRequest)return t0(t);if(hl.has(t))return hl.get(t);const e=i0(t);return e!==t&&(hl.set(t,e),lh.set(e,t)),e}const fl=t=>lh.get(t);function o0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const a0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],dl=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dl.get(e))return dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=c0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||a0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return dl.set(e,i),i}r0(t=>({...t,get:(e,n,r)=>ip(e,n)||t.get(e,n,r),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ru="@firebase/app",op="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new ch("@firebase/app"),h0="@firebase/app-compat",f0="@firebase/analytics-compat",d0="@firebase/analytics",p0="@firebase/app-check-compat",g0="@firebase/app-check",m0="@firebase/auth",_0="@firebase/auth-compat",y0="@firebase/database",E0="@firebase/data-connect",v0="@firebase/database-compat",w0="@firebase/functions",T0="@firebase/functions-compat",I0="@firebase/installations",b0="@firebase/installations-compat",A0="@firebase/messaging",R0="@firebase/messaging-compat",S0="@firebase/performance",C0="@firebase/performance-compat",P0="@firebase/remote-config",k0="@firebase/remote-config-compat",O0="@firebase/storage",N0="@firebase/storage-compat",D0="@firebase/firestore",x0="@firebase/ai",M0="@firebase/firestore-compat",V0="firebase",L0="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="[DEFAULT]",F0={[ru]:"fire-core",[h0]:"fire-core-compat",[d0]:"fire-analytics",[f0]:"fire-analytics-compat",[g0]:"fire-app-check",[p0]:"fire-app-check-compat",[m0]:"fire-auth",[_0]:"fire-auth-compat",[y0]:"fire-rtdb",[E0]:"fire-data-connect",[v0]:"fire-rtdb-compat",[w0]:"fire-fn",[T0]:"fire-fn-compat",[I0]:"fire-iid",[b0]:"fire-iid-compat",[A0]:"fire-fcm",[R0]:"fire-fcm-compat",[S0]:"fire-perf",[C0]:"fire-perf-compat",[P0]:"fire-rc",[k0]:"fire-rc-compat",[O0]:"fire-gcs",[N0]:"fire-gcs-compat",[D0]:"fire-fst",[M0]:"fire-fst-compat",[x0]:"fire-vertex","fire-js":"fire-js",[V0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map,U0=new Map,iu=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(iu.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of to.values())ap(n,t);for(const n of U0.values())ap(n,t);return!0}function uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new _o("app","Firebase",j0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=L0;function ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:su,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=ty()),!n)throw fr.create("no-options");const i=to.get(s);if(i){if(Jr(n,i.options)&&Jr(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new zS(s);for(const l of iu.values())o.addComponent(l);const c=new B0(n,r,o);return to.set(s,c),c}function cy(t=su){const e=to.get(t);if(!e&&t===su&&ty())return ay();if(!e)throw fr.create("no-app",{appName:t});return e}function H0(){return Array.from(to.values())}function dr(t,e,n){let r=F0[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}qs(new Yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firebase-heartbeat-database",q0=1,no="firebase-heartbeat-store";let pl=null;function ly(){return pl||(pl=o0($0,q0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),pl}async function W0(t){try{const n=(await ly()).transaction(no),r=await n.objectStore(no).get(uy(t));return await n.done,r}catch(e){if(e instanceof jn)Mn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function cp(t,e){try{const r=(await ly()).transaction(no,"readwrite");await r.objectStore(no).put(e,uy(t)),await r.done}catch(n){if(n instanceof jn)Mn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function uy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=1024,z0=30;class G0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>z0){const o=Y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lp(),{heartbeatsToSend:r,unsentEntries:s}=Q0(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function lp(){return new Date().toISOString().substring(0,10)}function Q0(t,e=K0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),up(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class J0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MS()?VS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await W0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function up(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}function Y0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){qs(new Yr("platform-logger",e=>new l0(e),"PRIVATE")),qs(new Yr("heartbeat",e=>new G0(e),"PRIVATE")),dr(ru,op,t),dr(ru,op,"esm2020"),dr("fire-js","")}X0("");var Z0="firebase",eC="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(Z0,eC,"app");var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,hy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(v,C,S){for(var T=Array(arguments.length-2),de=2;de<arguments.length;de++)T[de-2]=arguments[de];return y.prototype[C].apply(v,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var v=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)v[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)v[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],C=w.g[2];var S=w.g[3],T=y+(S^_&(C^S))+v[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+v[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+v[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+v[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^S&(_^C))+v[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+v[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+v[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+v[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^S)+v[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+v[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+v[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+v[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~S))+v[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+v[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+v[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+v[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,v=this.B,C=this.h,S=0;S<y;){if(C==0)for(;S<=_;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(v[C++]=w.charCodeAt(S++),C==this.blockSize){s(this,v),C=0;break}}else for(;S<y;)if(v[C++]=w[S++],C==this.blockSize){s(this,v),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var v=0;32>v;v+=8)w[_++]=this.g[y]>>>v&255;return w};function i(w,y){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],v=!0,C=w.length-1;0<=C;C--){var S=w[C]|0;v&&S==y||(_[C]=S,v=!1)}this.g=_}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return d;if(0>w)return O(h(-w));for(var y=[],_=1,v=0;w>=_;v++)y[v]=w/_|0,_*=4294967296;return new o(y,0)}function u(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(u(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),v=d,C=0;C<w.length;C+=8){var S=Math.min(8,w.length-C),T=parseInt(w.substring(C,C+S),y);8>S?(S=h(Math.pow(y,S)),v=v.j(S).add(h(T))):(v=v.j(_),v=v.add(h(T)))}return v}var d=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-O(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var v=this.i(_);w+=(0<=v?v:4294967296+v)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(R(this))return"-"+O(this).toString(w);for(var y=h(Math.pow(w,6)),_=this,v="";;){var C=k(_,y).g;_=D(_,C.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=C,I(_))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=D(this,w),R(w)?-1:I(w)?0:1};function O(w){for(var y=w.g.length,_=[],v=0;v<y;v++)_[v]=~w.g[v];return new o(_,~w.h).add(g)}t.abs=function(){return R(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0,C=0;C<=y;C++){var S=v+(this.i(C)&65535)+(w.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);v=T>>>16,S&=65535,T&=65535,_[C]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function D(w,y){return w.add(O(y))}t.j=function(w){if(I(this)||I(w))return d;if(R(this))return R(w)?O(this).j(O(w)):O(O(this).j(w));if(R(w))return O(this.j(O(w)));if(0>this.l(m)&&0>w.l(m))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],v=0;v<2*y;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var C=0;C<w.g.length;C++){var S=this.i(v)>>>16,T=this.i(v)&65535,de=w.i(C)>>>16,me=w.i(C)&65535;_[2*v+2*C]+=T*me,N(_,2*v+2*C),_[2*v+2*C+1]+=S*me,N(_,2*v+2*C+1),_[2*v+2*C+1]+=T*de,N(_,2*v+2*C+1),_[2*v+2*C+2]+=S*de,N(_,2*v+2*C+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new o(_,0)};function N(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function b(w,y){this.g=w,this.h=y}function k(w,y){if(I(y))throw Error("division by zero");if(I(w))return new b(d,d);if(R(w))return y=k(O(w),y),new b(O(y.g),O(y.h));if(R(y))return y=k(w,O(y)),new b(O(y.g),y.h);if(30<w.g.length){if(R(w)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,v=y;0>=v.l(w);)_=x(_),v=x(v);var C=F(_,1),S=F(v,1);for(v=F(v,2),_=F(_,2);!I(v);){var T=S.add(v);0>=T.l(w)&&(C=C.add(_),S=T),v=F(v,1),_=F(_,1)}return y=D(w,C.j(y)),new b(C,y)}for(C=d;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=h(_),T=S.j(y);R(T)||0<T.l(w);)_-=v,S=h(_),T=S.j(y);I(S)&&(S=g),C=C.add(S),w=D(w,T)}return new b(C,w)}t.A=function(w){return k(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)&w.i(v);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)|w.i(v);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)^w.i(v);return new o(_,this.h^w.h)};function x(w){for(var y=w.g.length+1,_=[],v=0;v<y;v++)_[v]=w.i(v)<<1|w.i(v-1)>>>31;return new o(_,w.h)}function F(w,y){var _=y>>5;y%=32;for(var v=w.g.length-_,C=[],S=0;S<v;S++)C[S]=0<y?w.i(S+_)>>>y|w.i(S+_+1)<<32-y:w.i(S+_);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,pr=o}).apply(typeof hp<"u"?hp:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fy,Ci,dy,la,ou,py,gy,my;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var E=0;E<a.length-1;E++){var M=a[E];if(!(M in p))break e;p=p[M]}a=a[a.length-1],E=p[a],f=f(E),f!=E&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,E=!1,M={next:function(){if(!E&&p<a.length){var L=p++;return{value:f(L,a[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function h(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function u(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:d,g.apply(null,arguments)}function m(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var E=p.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function I(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(E,M,L){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return f.prototype[M].apply(E,G)}}function R(a){const f=a.length;if(0<f){const p=Array(f);for(let E=0;E<f;E++)p[E]=a[E];return p}return[]}function O(a,f){for(let p=1;p<arguments.length;p++){const E=arguments[p];if(l(E)){const M=a.length||0,L=E.length||0;a.length=M+L;for(let G=0;G<L;G++)a[M+G]=E[G]}else a.push(E)}}class D{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(a){return/^[\s\xa0]*$/.test(a)}function b(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var x=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function F(a,f,p){for(const E in a)f.call(p,a[E],E,a)}function w(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,f){let p,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(p in E)a[p]=E[p];for(let L=0;L<_.length;L++)p=_[L],Object.prototype.hasOwnProperty.call(E,p)&&(a[p]=E[p])}}function C(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=De;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class de{constructor(){this.h=this.g=null}add(f,p){const E=me.get();E.set(f,p),this.h?this.h.next=E:this.g=E,this.h=E}}var me=new D(()=>new X,a=>a.reset());class X{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let re,te=!1,De=new de,Kt=()=>{const a=c.Promise.resolve(void 0);re=()=>{a.then(Ut)}};var Ut=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){S(p)}var f=me;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}te=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,f),c.removeEventListener("test",p,f)}catch{}return a}();function nn(a,f){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(x){e:{try{k(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}I(nn,je);var Pt={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,f,p,E,M){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!E,this.ha=M,this.key=++Z,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,f,p,E,M){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var G=A(a,f,E,M);return-1<G?(f=a[G],p||(f.fa=!1)):(f=new Y(f,this.src,L,!!E,M),f.fa=p,a.push(f)),f};function Pe(a,f){var p=f.type;if(p in a.g){var E=a.g[p],M=Array.prototype.indexOf.call(E,f,void 0),L;(L=0<=M)&&Array.prototype.splice.call(E,M,1),L&&(ne(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function A(a,f,p,E){for(var M=0;M<a.length;++M){var L=a[M];if(!L.da&&L.listener==f&&L.capture==!!p&&L.ha==E)return M}return-1}var P="closure_lm_"+(1e6*Math.random()|0),V={};function H(a,f,p,E,M){if(Array.isArray(f)){for(var L=0;L<f.length;L++)H(a,f[L],p,E,M);return null}return p=ie(p),a&&a[j]?a.K(f,p,h(E)?!!E.capture:!1,M):U(a,f,p,!1,E,M)}function U(a,f,p,E,M,L){if(!f)throw Error("Invalid event type");var G=h(M)?!!M.capture:!!M,Oe=oe(a);if(Oe||(a[P]=Oe=new ye(a)),p=Oe.add(f,p,E,G,L),p.proxy)return p;if(E=$(),p.proxy=E,E.src=a,E.listener=p,a.addEventListener)Bn||(M=G),M===void 0&&(M=!1),a.addEventListener(f.toString(),E,M);else if(a.attachEvent)a.attachEvent(W(f.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $(){function a(p){return f.call(a.src,a.listener,p)}const f=q;return a}function Q(a,f,p,E,M){if(Array.isArray(f))for(var L=0;L<f.length;L++)Q(a,f[L],p,E,M);else E=h(E)?!!E.capture:!!E,p=ie(p),a&&a[j]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],p=A(L,p,E,M),-1<p&&(ne(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=oe(a))&&(f=a.g[f.toString()],a=-1,f&&(a=A(f,p,E,M)),(p=-1<a?f[a]:null)&&K(p))}function K(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[j])Pe(f.i,a);else{var p=a.type,E=a.proxy;f.removeEventListener?f.removeEventListener(p,E,a.capture):f.detachEvent?f.detachEvent(W(p),E):f.addListener&&f.removeListener&&f.removeListener(E),(p=oe(f))?(Pe(p,a),p.h==0&&(p.src=null,f[P]=null)):ne(a)}}}function W(a){return a in V?V[a]:V[a]="on"+a}function q(a,f){if(a.da)a=!0;else{f=new nn(f,this);var p=a.listener,E=a.ha||a.src;a.fa&&K(a),a=p.call(E,f)}return a}function oe(a){return a=a[P],a instanceof ye?a:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[J]||(a[J]=function(f){return a.handleEvent(f)}),a[J])}function se(){Ue.call(this),this.i=new ye(this),this.M=this,this.F=null}I(se,Ue),se.prototype[j]=!0,se.prototype.removeEventListener=function(a,f,p,E){Q(this,a,f,p,E)};function le(a,f){var p,E=a.F;if(E)for(p=[];E;E=E.F)p.push(E);if(a=a.M,E=f.type||f,typeof f=="string")f=new je(f,a);else if(f instanceof je)f.target=f.target||a;else{var M=f;f=new je(E,a),v(f,M)}if(M=!0,p)for(var L=p.length-1;0<=L;L--){var G=f.g=p[L];M=Re(G,E,!0,f)&&M}if(G=f.g=a,M=Re(G,E,!0,f)&&M,M=Re(G,E,!1,f)&&M,p)for(L=0;L<p.length;L++)G=f.g=p[L],M=Re(G,E,!1,f)&&M}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],E=0;E<p.length;E++)ne(p[E]);delete a.g[f],a.h--}}this.F=null},se.prototype.K=function(a,f,p,E){return this.i.add(String(a),f,!1,p,E)},se.prototype.L=function(a,f,p,E){return this.i.add(String(a),f,!0,p,E)};function Re(a,f,p,E){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,L=0;L<f.length;++L){var G=f[L];if(G&&!G.da&&G.capture==p){var Oe=G.listener,ct=G.ha||G.src;G.fa&&Pe(a.i,G),M=Oe.call(ct,E)!==!1&&M}}return M&&!E.defaultPrevented}function be(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function ot(a){a.g=be(()=>{a.g=null,a.i&&(a.i=!1,ot(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class tt extends Ue{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){Ue.call(this),this.h=a,this.g={}}I(at,Ue);var dt=[];function Hn(a){F(a.g,function(f,p){this.g.hasOwnProperty(p)&&K(f)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Hn(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rs=c.JSON.stringify,It=c.JSON.parse,jt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ss(){}ss.prototype.h=null;function jh(a){return a.h||(a.h=a.i())}function Bh(){}var ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){je.call(this,"d")}I(Sc,je);function Cc(){je.call(this,"c")}I(Cc,je);var Sr={},Hh=null;function So(){return Hh=Hh||new se}Sr.La="serverreachability";function $h(a){je.call(this,Sr.La,a)}I($h,je);function li(a){const f=So();le(f,new $h(f))}Sr.STAT_EVENT="statevent";function qh(a,f){je.call(this,Sr.STAT_EVENT,a),this.stat=f}I(qh,je);function bt(a){const f=So();le(f,new qh(f,a))}Sr.Ma="timingevent";function Wh(a,f){je.call(this,Sr.Ma,a),this.size=f}I(Wh,je);function ui(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function hi(){this.g=!0}hi.prototype.xa=function(){this.g=!1};function ev(a,f,p,E,M,L){a.info(function(){if(a.g)if(L)for(var G="",Oe=L.split("&"),ct=0;ct<Oe.length;ct++){var Ae=Oe[ct].split("=");if(1<Ae.length){var pt=Ae[0];Ae=Ae[1];var gt=pt.split("_");G=2<=gt.length&&gt[1]=="type"?G+(pt+"="+Ae+"&"):G+(pt+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+p+`
`+G})}function tv(a,f,p,E,M,L,G){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+p+`
`+L+" "+G})}function is(a,f,p,E){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+rv(a,p)+(E?" "+E:"")})}function nv(a,f){a.info(function(){return"TIMEOUT: "+f})}hi.prototype.info=function(){};function rv(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var E=p[a];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<M.length;G++)M[G]=""}}}}return rs(p)}catch{return f}}var Co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function Po(){}I(Po,ss),Po.prototype.g=function(){return new XMLHttpRequest},Po.prototype.i=function(){return{}},Pc=new Po;function $n(a,f,p,E){this.j=a,this.i=f,this.l=p,this.R=E||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zh}function zh(){this.i=null,this.g="",this.h=!1}var Gh={},kc={};function Oc(a,f,p){a.L=1,a.v=Do(vn(f)),a.m=p,a.P=!0,Qh(a,null)}function Qh(a,f){a.F=Date.now(),ko(a),a.A=vn(a.v);var p=a.A,E=a.R;Array.isArray(E)||(E=[String(E)]),uf(p.i,"t",E),a.C=0,p=a.j.J,a.h=new zh,a.g=Cf(a.j,p?f:null,!a.m),0<a.O&&(a.M=new tt(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,E=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(dt[0]=M.toString()),M=dt);for(var L=0;L<M.length;L++){var G=H(p,M[L],E||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),li(),ev(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const f=this.M;f&&wn(a)==3?f.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const gt=wn(this.g);var f=this.g.Ba();const cs=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||_f(this.g)))){this.J||gt!=4||f==7||(f==8||0>=cs?li(3):li(2)),Nc(this);var p=this.g.Z();this.X=p;t:if(Jh(this)){var E=_f(this.g);a="";var M=E.length,L=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),fi(this);var G="";break t}this.h.i=new c.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(E[f],{stream:!(L&&f==M-1)});E.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,tv(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ct=this.g;if((Oe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Oe)){var Ae=Oe;break t}}Ae=null}if(p=Ae)is(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,p);else{this.o=!1,this.s=3,bt(12),Cr(this),fi(this);break e}}if(this.P){p=!0;let zt;for(;!this.J&&this.C<G.length;)if(zt=sv(this,G),zt==kc){gt==4&&(this.s=4,bt(14),p=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Gh){this.s=4,bt(15),is(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else is(this.i,this.l,zt,null),Dc(this,zt);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||G.length!=0||this.h.h||(this.s=1,bt(16),p=!1),this.o=this.o&&p,!p)is(this.i,this.l,G,"[Invalid Chunked Response]"),Cr(this),fi(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Uc(pt),pt.M=!0,bt(11))}}else is(this.i,this.l,G,null),Dc(this,G);gt==4&&Cr(this),this.o&&!this.J&&(gt==4?bf(this.j,this):(this.o=!1,ko(this)))}else wv(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Cr(this),fi(this)}}}catch{}finally{}};function Jh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sv(a,f){var p=a.C,E=f.indexOf(`
`,p);return E==-1?kc:(p=Number(f.substring(p,E)),isNaN(p)?Gh:(E+=1,E+p>f.length?kc:(f=f.slice(E,E+p),a.C=E+p,f)))}$n.prototype.cancel=function(){this.J=!0,Cr(this)};function ko(a){a.S=Date.now()+a.I,Yh(a,a.I)}function Yh(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ui(g(a.ba,a),f)}function Nc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(nv(this.i,this.A),this.L!=2&&(li(),bt(17)),Cr(this),this.s=2,fi(this)):Yh(this,this.S-a)};function fi(a){a.j.G==0||a.J||bf(a.j,a)}function Cr(a){Nc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Hn(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Dc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||xc(p.h,a))){if(!a.K&&xc(p.h,a)&&p.G==3){try{var E=p.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Uo(p),Lo(p);else break e;Fc(p),bt(18)}}else p.za=M[1],0<p.za-p.T&&37500>M[2]&&p.F&&p.v==0&&!p.C&&(p.C=ui(g(p.Za,p),6e3));if(1>=ef(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else kr(p,11)}else if((a.K||p.g==a)&&Uo(p),!N(f))for(M=p.Da.g.parse(f),f=0;f<M.length;f++){let Ae=M[f];if(p.T=Ae[0],Ae=Ae[1],p.G==2)if(Ae[0]=="c"){p.K=Ae[1],p.ia=Ae[2];const pt=Ae[3];pt!=null&&(p.la=pt,p.j.info("VER="+p.la));const gt=Ae[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const cs=Ae[5];cs!=null&&typeof cs=="number"&&0<cs&&(E=1.5*cs,p.L=E,p.j.info("backChannelRequestTimeoutMs_="+E)),E=p;const zt=a.g;if(zt){const Bo=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var L=E.h;L.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Mc(L,L.h),L.h=null))}if(E.D){const jc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;jc&&(E.ya=jc,Me(E.I,E.D,jc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),E=p;var G=a;if(E.qa=Sf(E,E.J?E.ia:null,E.W),G.K){tf(E.h,G);var Oe=G,ct=E.L;ct&&(Oe.I=ct),Oe.B&&(Nc(Oe),ko(Oe)),E.g=G}else Tf(E);0<p.i.length&&Fo(p)}else Ae[0]!="stop"&&Ae[0]!="close"||kr(p,7);else p.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?kr(p,7):Lc(p):Ae[0]!="noop"&&p.l&&p.l.ta(Ae),p.v=0)}}li(4)}catch{}}var iv=class{constructor(a,f){this.g=a,this.map=f}};function Xh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ef(a){return a.h?1:a.g?a.g.size:0}function xc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Mc(a,f){a.g?a.g.add(f):a.h=f}function tf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Xh.prototype.cancel=function(){if(this.i=nf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return R(a.i)}function ov(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],p=a.length,E=0;E<p;E++)f.push(a[E]);return f}f=[],p=0;for(E in a)f[p++]=a[E];return f}function av(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const E in a)f[p++]=E;return f}}}function rf(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=av(a),E=ov(a),M=E.length,L=0;L<M;L++)f.call(void 0,E[L],p&&p[L],a)}var sf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cv(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var E=a[p].indexOf("="),M=null;if(0<=E){var L=a[p].substring(0,E);M=a[p].substring(E+1)}else L=a[p];f(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,Oo(this,a.j),this.o=a.o,this.g=a.g,No(this,a.s),this.l=a.l;var f=a.i,p=new gi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),of(this,p),this.m=a.m}else a&&(f=String(a).match(sf))?(this.h=!1,Oo(this,f[1]||"",!0),this.o=di(f[2]||""),this.g=di(f[3]||"",!0),No(this,f[4]),this.l=di(f[5]||"",!0),of(this,f[6]||"",!0),this.m=di(f[7]||"")):(this.h=!1,this.i=new gi(null,this.h))}Pr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(pi(f,af,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(pi(f,af,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(pi(p,p.charAt(0)=="/"?hv:uv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",pi(p,dv)),a.join("")};function vn(a){return new Pr(a)}function Oo(a,f,p){a.j=p?di(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function No(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function of(a,f,p){f instanceof gi?(a.i=f,pv(a.i,a.h)):(p||(f=pi(f,fv)),a.i=new gi(f,a.h))}function Me(a,f,p){a.i.set(f,p)}function Do(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,lv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var af=/[#\/\?@]/g,uv=/[#\?:]/g,hv=/[#\?]/g,fv=/[#\?@]/g,dv=/#/g;function gi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&cv(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=gi.prototype,t.add=function(a,f){qn(this),this.i=null,a=os(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function cf(a,f){qn(a),f=os(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function lf(a,f){return qn(a),f=os(a,f),a.g.has(f)}t.forEach=function(a,f){qn(this),this.g.forEach(function(p,E){p.forEach(function(M){a.call(f,M,E,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let E=0;E<f.length;E++){const M=a[E];for(let L=0;L<M.length;L++)p.push(f[E])}return p},t.V=function(a){qn(this);let f=[];if(typeof a=="string")lf(this,a)&&(f=f.concat(this.g.get(os(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return qn(this),this.i=null,a=os(this,a),lf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function uf(a,f,p){cf(a,f),0<p.length&&(a.i=null,a.g.set(os(a,f),R(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var E=f[p];const L=encodeURIComponent(String(E)),G=this.V(E);for(E=0;E<G.length;E++){var M=L;G[E]!==""&&(M+="="+encodeURIComponent(String(G[E]))),a.push(M)}}return this.i=a.join("&")};function os(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function pv(a,f){f&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(p,E){var M=E.toLowerCase();E!=M&&(cf(this,E),uf(this,M,p))},a)),a.j=f}function gv(a,f){const p=new hi;if(c.Image){const E=new Image;E.onload=m(Wn,p,"TestLoadImage: loaded",!0,f,E),E.onerror=m(Wn,p,"TestLoadImage: error",!1,f,E),E.onabort=m(Wn,p,"TestLoadImage: abort",!1,f,E),E.ontimeout=m(Wn,p,"TestLoadImage: timeout",!1,f,E),c.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else f(!1)}function mv(a,f){const p=new hi,E=new AbortController,M=setTimeout(()=>{E.abort(),Wn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:E.signal}).then(L=>{clearTimeout(M),L.ok?Wn(p,"TestPingServer: ok",!0,f):Wn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Wn(p,"TestPingServer: error",!1,f)})}function Wn(a,f,p,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(p)}catch{}}function _v(){this.g=new jt}function yv(a,f,p){const E=p||"";try{rf(a,function(M,L){let G=M;h(M)&&(G=rs(M)),f.push(E+L+"="+encodeURIComponent(G))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function xo(a){this.l=a.Ub||null,this.j=a.eb||!1}I(xo,ss),xo.prototype.g=function(){return new Mo(this.l,this.j)},xo.prototype.i=function(a){return function(){return a}}({});function Mo(a,f){se.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Mo,se),t=Mo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?mi(this):_i(this),this.readyState==3&&hf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,mi(this))},t.Qa=function(a){this.g&&(this.response=a,mi(this))},t.ga=function(){this.g&&mi(this)};function mi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_i(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ff(a){let f="";return F(a,function(p,E){f+=E,f+=":",f+=p,f+=`\r
`}),f}function Vc(a,f,p){e:{for(E in p){var E=!1;break e}E=!0}E||(p=ff(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Me(a,f,p))}function $e(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I($e,se);var Ev=/^https?$/i,vv=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?jh(this.o):jh(Pc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){df(this,L);return}if(a=p||"",p=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)p.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())p.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),M=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vv,f,void 0))||E||M||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of p)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){df(this,L)}};function df(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,pf(a),Vo(a)}function pf(a){a.A||(a.A=!0,le(a,"complete"),le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,le(this,"complete"),le(this,"abort"),Vo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vo(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gf(this):this.bb())},t.bb=function(){gf(this)};function gf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)be(a.Ea,0,a);else if(le(a,"readystatechange"),wn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var E;if(E=G===0){var M=String(a.D).match(sf)[1]||null;!M&&c.self&&c.self.location&&(M=c.self.location.protocol.slice(0,-1)),E=!Ev.test(M?M.toLowerCase():"")}p=E}if(p)le(a,"complete"),le(a,"success");else{a.m=6;try{var L=2<wn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",pf(a)}}finally{Vo(a)}}}}function Vo(a,f){if(a.g){mf(a);const p=a.g,E=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||le(a,"ready");try{p.onreadystatechange=E}catch{}}}function mf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),It(f)}};function _f(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wv(a){const f={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(N(a[E]))continue;var p=C(a[E]);const M=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=f[M]||[];f[M]=L,L.push(p)}w(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function yf(a){this.Aa=0,this.i=[],this.j=new hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,a),this.cb=yi("retryDelaySeedMs",1e4,a),this.Wa=yi("forwardChannelMaxRetries",2,a),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xh(a&&a.concurrentRequestLimit),this.Da=new _v,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yf.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,E){bt(0),this.W=a,this.H=f||{},p&&E!==void 0&&(this.H.OSID=p,this.H.OAID=E),this.F=this.X,this.I=Sf(this,null,this.W),Fo(this)};function Lc(a){if(Ef(a),a.G==3){var f=a.U++,p=vn(a.I);if(Me(p,"SID",a.K),Me(p,"RID",f),Me(p,"TYPE","terminate"),Ei(a,p),f=new $n(a,a.j,f),f.L=2,f.v=Do(vn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=f.v,p=!0),p||(f.g=Cf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ko(f)}Rf(a)}function Lo(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function Ef(a){Lo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Fo(a){if(!Zh(a.h)&&!a.s){a.s=!0;var f=a.Ga;re||Kt(),te||(re(),te=!0),De.add(f,a),a.B=0}}function Tv(a,f){return ef(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ui(g(a.Ga,a,f),Af(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new $n(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),v(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var E=this.i[p];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=wf(this,M,f),p=vn(this.I),Me(p,"RID",a),Me(p,"CVER",22),this.D&&Me(p,"X-HTTP-Session-Id",this.D),Ei(this,p),L&&(this.O?f="headers="+encodeURIComponent(String(ff(L)))+"&"+f:this.m&&Vc(p,this.m,L)),Mc(this.h,M),this.Ua&&Me(p,"TYPE","init"),this.P?(Me(p,"$req",f),Me(p,"SID","null"),M.T=!0,Oc(M,p,null)):Oc(M,p,f),this.G=2}}else this.G==3&&(a?vf(this,a):this.i.length==0||Zh(this.h)||vf(this))};function vf(a,f){var p;f?p=f.l:p=a.U++;const E=vn(a.I);Me(E,"SID",a.K),Me(E,"RID",p),Me(E,"AID",a.T),Ei(a,E),a.m&&a.o&&Vc(E,a.m,a.o),p=new $n(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=wf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mc(a.h,p),Oc(p,E,f)}function Ei(a,f){a.H&&F(a.H,function(p,E){Me(f,E,p)}),a.l&&rf({},function(p,E){Me(f,E,p)})}function wf(a,f,p){p=Math.min(a.i.length,p);var E=a.l?g(a.l.Na,a.l,a):null;e:{var M=a.i;let L=-1;for(;;){const G=["count="+p];L==-1?0<p?(L=M[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Oe=!0;for(let ct=0;ct<p;ct++){let Ae=M[ct].g;const pt=M[ct].map;if(Ae-=L,0>Ae)L=Math.max(0,M[ct].g-100),Oe=!1;else try{yv(pt,G,"req"+Ae+"_")}catch{E&&E(pt)}}if(Oe){E=G.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,E}function Tf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;re||Kt(),te||(re(),te=!0),De.add(f,a),a.v=0}}function Fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ui(g(a.Fa,a),Af(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,If(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ui(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Lo(this),If(this))};function Uc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function If(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=vn(a.qa);Me(f,"RID","rpc"),Me(f,"SID",a.K),Me(f,"AID",a.T),Me(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(f,"TO",a.ja),Me(f,"TYPE","xmlhttp"),Ei(a,f),a.m&&a.o&&Vc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Do(vn(f)),p.m=null,p.P=!0,Qh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Lo(this),Fc(this),bt(19))};function Uo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function bf(a,f){var p=null;if(a.g==f){Uo(a),Uc(a),a.g=null;var E=2}else if(xc(a.h,f))p=f.D,tf(a.h,f),E=1;else return;if(a.G!=0){if(f.o)if(E==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;E=So(),le(E,new Wh(E,p)),Fo(a)}else Tf(a);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&Tv(a,f)||E==2&&Fc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),M){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function Af(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function kr(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),E=a.Xa;const M=!E;E=new Pr(E||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oo(E,"https"),Do(E),M?gv(E.toString(),p):mv(E.toString(),p)}else bt(2);a.G=0,a.l&&a.l.sa(f),Rf(a),Ef(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Rf(a){if(a.G=0,a.ka=[],a.l){const f=nf(a.h);(f.length!=0||a.i.length!=0)&&(O(a.ka,f),O(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Sf(a,f,p){var E=p instanceof Pr?vn(p):new Pr(p);if(E.g!="")f&&(E.g=f+"."+E.g),No(E,E.s);else{var M=c.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var L=new Pr(null);E&&Oo(L,E),f&&(L.g=f),M&&No(L,M),p&&(L.l=p),E=L}return p=a.D,f=a.ya,p&&f&&Me(E,p,f),Me(E,"VER",a.la),Ei(a,E),E}function Cf(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new $e(new xo({eb:p})):new $e(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pf(){}t=Pf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function jo(){}jo.prototype.g=function(a,f){return new xt(a,f)};function xt(a,f){se.call(this),this.g=new yf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!N(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new as(this)}I(xt,se),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Lc(this.g)},xt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=rs(a),a=p);f.i.push(new iv(f.Ya++,a)),f.G==3&&Fo(f)},xt.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,xt.aa.N.call(this)};function kf(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}I(kf,Sc);function Of(){Cc.call(this),this.status=1}I(Of,Cc);function as(a){this.g=a}I(as,Pf),as.prototype.ua=function(){le(this.g,"a")},as.prototype.ta=function(a){le(this.g,new kf(a))},as.prototype.sa=function(a){le(this.g,new Of)},as.prototype.ra=function(){le(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,my=function(){return new jo},gy=function(){return So()},py=Sr,ou={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,la=Co,Kh.COMPLETE="complete",dy=Kh,Bh.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",se.prototype.listen=se.prototype.K,Ci=Bh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,fy=$e}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});const fp="@firebase/firestore",dp="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new ch("@firebase/firestore");function ps(){return Xr.logLevel}function ee(t,...e){if(Xr.logLevel<=_e.DEBUG){const n=e.map(hh);Xr.debug(`Firestore (${ri}): ${t}`,...n)}}function Vn(t,...e){if(Xr.logLevel<=_e.ERROR){const n=e.map(hh);Xr.error(`Firestore (${ri}): ${t}`,...n)}}function Ws(t,...e){if(Xr.logLevel<=_e.WARN){const n=e.map(hh);Xr.warn(`Firestore (${ri}): ${t}`,...n)}}function hh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_y(t,r,n)}function _y(t,e,n){let r=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function He(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||_y(e,s,r)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class nC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rC{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new yy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class sC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new sC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new pp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=aC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function au(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return gl(s)===gl(i)?Ee(s,i):gl(s)?1:-1}return Ee(t.length,e.length)}const cC=55296,lC=57343;function gl(t){const e=t.charCodeAt(0);return e>=cC&&e<=lC}function Ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ge(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):au(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class Be extends an{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends an{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gp}static keyField(){return new St([gp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ae(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ae(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Be.fromString(e))}static fromName(e){return new fe(Be.fromString(e).popFirst(5))}static empty(){return new fe(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e,n){if(!n)throw new ae(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new ae(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mp(t){if(fe.isDocumentKey(t))throw new ae(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function pC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function cu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pC(t);throw new ae(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Eo(t,e){if(!dC(t))throw new ae(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ae(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=-62135596800,yp=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yp);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_p)throw new ae(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yp}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Eo(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_p;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:Qe("string",Ge._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ge(0,0))}static max(){return new pe(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=-1;function gC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new yr(s,fe.empty(),e)}function mC(t){return new yr(t.readTime,t.key,ro)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(pe.min(),fe.empty(),ro)}static max(){return new yr(pe.max(),fe.empty(),ro)}}function _C(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==yC)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(u=>{o[h]=u,++c,c===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=-1;function dc(t){return t==null}function lu(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="";function TC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ep(e)),e=IC(t.get(n),e);return Ep(e)}function IC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case vy:n+="";break;default:n+=i}}return n}function Ep(t){return t+vy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wp(this.data.getIterator())}getIteratorFrom(e){return new wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new ar([])}unionWith(e){let n=new et(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ar(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wy("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=AC.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="server_timestamp",Iy="__type__",by="__previous_value__",Ay="__local_write_time__";function fh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Iy])==null?void 0:r.stringValue)===Ty}function pc(t){const e=t.mapValue.fields[by];return fh(e)?pc(e):e}function so(t){const e=Er(t.mapValue.fields[Ay].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,s,i,o,c,l,h,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=u}}const Ma="(default)";class io{constructor(e,n){this.projectId=e,this.database=n||Ma}static empty(){return new io("","")}get isDefaultDatabase(){return this.database===Ma}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="__type__",CC="__max__",ea={mapValue:{}},PC="__vector__",uu="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fh(t)?4:OC(t)?9007199254740991:kC(t)?10:11:ge(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return so(t).isEqual(so(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),c=Er(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?lu(o)===lu(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vp(o)!==vp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!_n(o[l],c[l])))return!1;return!0}(t,e);default:return ge(52216,{left:t})}}function oo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Tp(t.timestampValue,e.timestampValue);case 4:return Tp(so(t),so(e));case 5:return au(t.stringValue,e.stringValue);case 6:return function(i,o){const c=vr(i),l=vr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const u=Ee(c[h],l[h]);if(u!==0)return u}return Ee(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ee(We(i.latitude),We(o.latitude));return c!==0?c:Ee(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ip(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,m,I,R;const c=i.fields||{},l=o.fields||{},h=(g=c[uu])==null?void 0:g.arrayValue,u=(m=l[uu])==null?void 0:m.arrayValue,d=Ee(((I=h==null?void 0:h.values)==null?void 0:I.length)||0,((R=u==null?void 0:u.values)==null?void 0:R.length)||0);return d!==0?d:Ip(h,u)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ea.mapValue&&o===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(o===ea.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},u=Object.keys(h);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const g=au(l[d],u[d]);if(g!==0)return g;const m=zs(c[l[d]],h[u[d]]);if(m!==0)return m}return Ee(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ge(23264,{he:n})}}function Tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Er(t),r=Er(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function Ip(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zs(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Gs(t){return hu(t)}function hu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hu(n.fields[o])}`;return s+"}"}(t.mapValue):ge(61005,{value:t})}function ua(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(t);return e?16+ua(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ua(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return vo(r.fields,(i,o)=>{s+=i.length+ua(o)}),s}(t.mapValue);default:throw ge(13486,{value:t})}}function fu(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function bp(t){return!!t&&"nullValue"in t}function Ap(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function kC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[SC])==null?void 0:r.stringValue)===PC}function Hi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return vo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hi(t.arrayValue.values[n]);return e}return{...t}}function OC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(n)}setAll(e){let n=St.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Hi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ml(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vo(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ln(Hi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,pe.min(),pe.min(),pe.min(),ln.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,pe.min(),pe.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,pe.min(),pe.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function Rp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function NC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{}class Ze extends Ry{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xC(e,n,r):n==="array-contains"?new LC(e,r):n==="in"?new FC(e,r):n==="not-in"?new UC(e,r):n==="array-contains-any"?new jC(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MC(e,r):new VC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Ry{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return Sy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Sy(t){return t.op==="and"}function Cy(t){return DC(t)&&Sy(t)}function DC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function du(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(Cy(t))return t.filters.map(e=>du(e)).join(",");{const e=t.filters.map(n=>du(n)).join(",");return`${t.op}(${e})`}}function Py(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Py(o,s.filters[c]),!0):!1}(t,e):void ge(19439)}function ky(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(ky).join(" ,")+"}"}(t):"Filter"}class xC extends Ze{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class MC extends Ze{constructor(e,n){super(e,"in",n),this.keys=Oy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VC extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Oy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Oy(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class LC extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&oo(n.arrayValue,this.value)}}class FC extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oo(this.value.arrayValue,n)}}class UC extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!oo(this.value.arrayValue,n)}}class jC extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Cp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new BC(t,e,n,r,s,i,o)}function ph(t){const e=we(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>du(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.Te=n}return e.Te}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sp(t.startAt,e.startAt)&&Sp(t.endAt,e.endAt)}function pu(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function HC(t,e,n,r,s,i,o,c){return new gc(t,e,n,r,s,i,o,c)}function Ny(t){return new gc(t)}function Pp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $C(t){return t.collectionGroup!==null}function $i(t){const e=we(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(St.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new La(i,r))}),n.has(St.keyField().canonicalString())||e.Ie.push(new La(St.keyField(),r))}return e.Ie}function dn(t){const e=we(t);return e.Ee||(e.Ee=qC(e,$i(t))),e.Ee}function qC(t,e){if(t.limitType==="F")return Cp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new La(s.field,i)});const n=t.endAt?new Va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Va(t.startAt.position,t.startAt.inclusive):null;return Cp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gu(t,e,n){return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return gh(dn(t),dn(e))&&t.limitType===e.limitType}function Dy(t){return`${ph(dn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ky(s)).join(", ")}]`),dc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Gs(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Rp(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,$i(r),s)||r.endAt&&!function(o,c,l){const h=Rp(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,$i(r),s))}(t,e)}function WC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xy(t){return(e,n)=>{let r=!1;for(const s of $i(t)){const i=KC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KC(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?zs(l,h):ge(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vo(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return bC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new Ke(fe.comparator);function Tr(){return zC}const My=new Ke(fe.comparator);function Pi(...t){let e=My;for(const n of t)e=e.insert(n.key,n);return e}function GC(t){let e=My;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return qi()}function Vy(){return qi()}function qi(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const QC=new et(fe.comparator);function Ie(...t){let e=QC;for(const n of t)e=e.add(n);return e}const JC=new et(Ee);function YC(){return JC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lu(e)?"-0":e}}function ZC(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this._=void 0}}function eP(t,e,n){return t instanceof mu?function(s,i){const o={fields:{[Iy]:{stringValue:Ty},[Ay]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fh(i)&&(i=pc(i)),i&&(o.fields[by]=i),{mapValue:o}}(n,e):t instanceof Fa?Ly(t,e):t instanceof Ua?Fy(t,e):function(s,i){const o=nP(s,i),c=kp(o)+kp(s.Ae);return fu(o)&&fu(s.Ae)?ZC(c):XC(s.serializer,c)}(t,e)}function tP(t,e,n){return t instanceof Fa?Ly(t,e):t instanceof Ua?Fy(t,e):n}function nP(t,e){return t instanceof _u?function(r){return fu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mu extends yc{}class Fa extends yc{constructor(e){super(),this.elements=e}}function Ly(t,e){const n=Uy(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ua extends yc{constructor(e){super(),this.elements=e}}function Fy(t,e){let n=Uy(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class _u extends yc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function kp(t){return We(t.integerValue||t.doubleValue)}function Uy(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fa&&s instanceof Fa||r instanceof Ua&&s instanceof Ua?Ks(r.elements,s.elements,_n):r instanceof _u&&s instanceof _u?_n(r.Ae,s.Ae):r instanceof mu&&s instanceof mu}(t.transform,e.transform)}class Kr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kr}static exists(e){return new Kr(void 0,e)}static updateTime(e){return new Kr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mh{}function jy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iP(t.key,Kr.none()):new _h(t.key,t.data,Kr.none());{const n=t.data,r=ln.empty();let s=new et(St.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ec(t.key,r,new ar(s.toArray()),Kr.none())}}function sP(t,e,n){t instanceof _h?function(s,i,o){const c=s.value.clone(),l=Np(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ec?function(s,i,o){if(!ha(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Np(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(By(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,r){return t instanceof _h?function(i,o,c,l){if(!ha(i.precondition,o))return c;const h=i.value.clone(),u=Dp(i.fieldTransforms,l,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ec?function(i,o,c,l){if(!ha(i.precondition,o))return c;const h=Dp(i.fieldTransforms,l,o),u=o.data;return u.setAll(By(i)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Op(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,(i,o)=>rP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _h extends mh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ec extends mh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function By(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Np(t,e,n){const r=new Map;He(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,tP(o,c,n[s]))}return r}function Dp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eP(i,o,e))}return r}class iP extends mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=jy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>Op(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>Op(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ve;function Hy(t){if(t===void 0)return Vn("GRPC error has no .code"),z.UNKNOWN;switch(t){case ze.OK:return z.OK;case ze.CANCELLED:return z.CANCELLED;case ze.UNKNOWN:return z.UNKNOWN;case ze.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ze.INTERNAL:return z.INTERNAL;case ze.UNAVAILABLE:return z.UNAVAILABLE;case ze.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ze.NOT_FOUND:return z.NOT_FOUND;case ze.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ze.ABORTED:return z.ABORTED;case ze.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ze.DATA_LOSS:return z.DATA_LOSS;default:return ge(39323,{code:t})}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new pr([4294967295,4294967295],0);function xp(t){const e=lP().encode(t),n=new hy;return n.update(e),new Uint8Array(n.digest())}function Mp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class yh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(uP)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xp(e),[r,s]=Mp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=xp(e),[r,s]=Mp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vc(pe.min(),s,new Ke(Ee),Tr(),Ie())}}class wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class $y{constructor(e,n){this.targetId=e,this.Ce=n}}class qy{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vp{constructor(){this.ve=0,this.Fe=Lp(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge(38017,{changeType:i})}}),new wo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Lp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class hP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tr(),this.Je=ta(),this.He=ta(),this.Ye=new Ke(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(pu(i))if(r===0){const o=new fe(i.path);this.et(n,o,vt.newNoDocument(o,pe.min()))}else He(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=vr(r).toUint8Array()}catch(l){if(l instanceof wy)return Ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new yh(o,s,i)}catch(l){return Ws(l instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&pu(c.target)){const l=new fe(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ie();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new vc(e,n,this.Ye,this.je,r);return this.je=Tr(),this.Je=ta(),this.He=ta(),this.Ye=new Ke(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Vp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vp),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ta(){return new Ke(fe.comparator)}function Lp(){return new Ke(fe.comparator)}const fP={asc:"ASCENDING",desc:"DESCENDING"},dP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pP={and:"AND",or:"OR"};class gP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yu(t,e){return t.useProto3Json||dc(e)?e:{value:e}}function mP(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _P(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ps(t){return He(!!t,49232),pe.fromTimestamp(function(n){const r=Er(n);return new Ge(r.seconds,r.nanos)}(t))}function yP(t,e){return Eu(t,e).canonicalString()}function Eu(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Wy(t){const e=Be.fromString(t);return He(Jy(e),10190,{key:e.toString()}),e}function _l(t,e){const n=Wy(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(zy(n))}function Ky(t,e){return yP(t.databaseId,e)}function EP(t){const e=Wy(t);return e.length===4?Be.emptyPath():zy(e)}function Fp(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zy(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ge(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,u){return h.useProto3Json?(He(u===void 0||typeof u=="string",58123),ft.fromBase64String(u||"")):(He(u===void 0||u instanceof Buffer||u instanceof Uint8Array,16193),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const u=h.code===void 0?z.UNKNOWN:Hy(h.code);return new ae(u,h.message||"")}(o);n=new qy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_l(t,r.document.name),i=Ps(r.document.updateTime),o=r.document.createTime?Ps(r.document.createTime):pe.min(),c=new ln({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),h=r.targetIds||[],u=r.removedTargetIds||[];n=new fa(h,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_l(t,r.document),i=r.readTime?Ps(r.readTime):pe.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new fa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_l(t,r.document),i=r.removedTargetIds||[];n=new fa([],i,s,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cP(s,i),c=r.targetId;n=new $y(c,o)}}return n}function wP(t,e){return{documents:[Ky(t,e.path)]}}function TP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ky(t,s);const i=function(h){if(h.length!==0)return Qy(yn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(u=>function(g){return{field:ms(g.field),direction:AP(g.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=yu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function IP(t){let e=EP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1,65062);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(d){const g=Gy(d);return g instanceof yn&&Cy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(I){return new La(_s(I.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,dc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,m=d.values||[];return new Va(m,g)}(n.startAt));let h=null;return n.endAt&&(h=function(d){const g=!d.before,m=d.values||[];return new Va(m,g)}(n.endAt)),HC(e,s,o,i,c,"F",l,h)}function bP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_s(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(_s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>Gy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(n.compositeFilter.op))}(t):ge(30097,{filter:t})}function AP(t){return fP[t]}function RP(t){return dP[t]}function SP(t){return pP[t]}function ms(t){return{fieldPath:t.canonicalString()}}function _s(t){return St.fromServerFormat(t.fieldPath)}function Qy(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Ap(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NAN"}};if(bp(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ap(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NAN"}};if(bp(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(n.field),op:RP(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>Qy(s));return r.length===1?r[0]:{compositeFilter:{op:SP(n.op),filters:r}}}(t):ge(54877,{filter:t})}function Jy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),c=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.yt=e}}function PP(t){const e=IP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.Cn=new OP}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(yr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class OP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yy=41943040;class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(Yy,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qs(0)}static cr(){return new Qs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="LruGarbageCollector",NP=1048576;function Bp([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class DP{constructor(e){this.Ir=e,this.buffer=new et(Bp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(jp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){si(n)?ee(jp,"Ignoring IndexedDB error during garbage collection: ",n):await hc(n)}await this.Vr(3e5)})}}class MP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(fc.ce);const r=new DP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Up)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Up):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(h=Date.now(),ps()<=_e.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(h-l)+`ms
Total Duration: ${h-u}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function VP(t,e){return new MP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Wi(r.mutation,s,ar.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Pi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Tr();const o=qi(),c=function(){return qi()}();return n.forEach((l,h)=>{const u=r.get(h.key);s.has(h.key)&&(u===void 0||u.mutation instanceof Ec)?i=i.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),Wi(u.mutation,h,u.mutation.getFieldMask(),Ge.now())):o.set(h.key,ar.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>c.set(h,new FP(u,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=qi();let s=new Ke((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let u=r.get(l)||ar.empty();u=c.applyToLocalView(h,u),r.set(l,u);const d=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,u=l.value,d=Vy();u.forEach(g=>{if(!i.has(g)){const m=jy(n.get(g),r.get(g));m!==null&&d.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$C(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Fr());let c=ro,l=i;return o.next(h=>B.forEach(h,(u,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(u)?B.resolve():this.remoteDocumentCache.getEntry(e,u).next(g=>{l=l.insert(u,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ie())).next(u=>({batchId:c,changes:GC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Pi();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const h=function(d,g){return new gc(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(u=>{u.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,vt.newInvalidDocument(u)))});let c=Pi();return o.forEach((l,h)=>{const u=i.get(l);u!==void 0&&Wi(u.mutation,h,ar.empty(),Ge.now()),_c(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ps(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:PP(s.bundledQuery),readTime:Ps(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.overlays=new Ke(fe.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new fe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let u=i.get(h.largestBatchId);u===null&&(u=Fr(),i=i.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const c=Fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,u)=>c.set(h,u)),!(c.size()>=s)););return B.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aP(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.Qr=new et(rt.$r),this.Ur=new et(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new Be([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new Be([])),r=new rt(n,e),s=new rt(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(rt.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?wC:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(Ee);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new rt(new fe(i),0);let c=new et(Ee);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),B.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.ri=e,this.docs=function(){return new Ke(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,c=new fe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:u}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_C(mC(u),r)<=0||(s.has(u.key)||_c(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WP(this)}getSize(e){return B.resolve(this.size)}}class WP extends LP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.persistence=e,this.si=new ts(n=>ph(n),gh),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Eh,this.targetCount=0,this.ai=Qs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.ui={},this.overlays={},this.ci=new fc(0),this.li=!1,this.li=!0,this.hi=new HP,this.referenceDelegate=e(this),this.Pi=new KP(this),this.indexManager=new kP,this.remoteDocumentCache=function(s){return new qP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new CP(n),this.Ii=new jP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new $P(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new zP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class zP extends EC{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.Ri=new Eh,this.Vi=null}static mi(e){return new vh(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ja{constructor(e,n){this.persistence=e,this.pi=new ts(r=>TC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VP(this,n)}static mi(e,n){return new ja(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ua(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return xS()?8:vC(Tt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GP;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ps()<=_e.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(ps()<=_e.DEBUG&&ee("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ps()<=_e.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):B.resolve())}ys(e,n){if(Pp(n))return B.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gu(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,gu(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Pp(n)||s.isEqual(pe.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(ps()<=_e.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.vs(e,o,n,gC(s,ro)).next(c=>c))})}Ds(e,n){let r=new et(xy(e));return n.forEach((s,i)=>{_c(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ps()<=_e.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",gs(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="LocalStore",JP=3e8;class YP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ke(Ee),this.xs=new ts(i=>ph(i),gh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function XP(t,e,n,r){return new YP(t,e,n,r)}async function Zy(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const h of s){o.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}for(const h of i){c.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function eE(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function ZP(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((u,d)=>{const g=s.get(d);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,u.addedDocuments,d)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(ft.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(d,m),function(R,O,D){return R.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=JP?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,m,u)&&c.push(n.Pi.updateTargetData(i,m))});let l=Tr(),h=Ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),c.push(e1(i,o,e.documentUpdates).next(u=>{l=u.ks,h=u.qs})),!r.isEqual(pe.min())){const u=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(u)}return B.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function e1(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tr();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(Th,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function t1(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function vu(t,e,n){const r=we(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!si(o))throw o;ee(Th,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Hp(t,e,n){const r=we(t);let s=pe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,u){const d=we(l),g=d.xs.get(u);return g!==void 0?B.resolve(d.Ms.get(g)):d.Pi.getTargetData(h,u)}(r,o,dn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ie())).next(c=>(n1(r,WC(e),c),{documents:c,Qs:i})))}function n1(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class $p{constructor(){this.activeTargetIds=YC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r1{constructor(){this.Mo=new $p,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $p,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="ConnectivityMonitor";class Wp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(qp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(qp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na=null;function wu(){return na===null?na=function(){return 268435456+Math.round(2147483648*Math.random())}():na++,"0x"+na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="RestConnection",i1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class o1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ma?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=wu(),c=this.zo(e,n.toUriEncodedString());ee(yl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),u=ti(h);return this.Jo(e,c,l,r,u).then(d=>(ee(yl,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Ws(yl,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ri}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=i1[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class c1 extends o1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=wu();return new Promise((c,l)=>{const h=new fy;h.setWithCredentials(!0),h.listenOnce(dy.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case la.NO_ERROR:const d=h.getResponseJson();ee(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case la.TIMEOUT:ee(mt,`RPC '${e}' ${o} timed out`),l(new ae(z.DEADLINE_EXCEEDED,"Request time out"));break;case la.HTTP_ERROR:const g=h.getStatus();if(ee(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let m=h.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(D){const N=D.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(N)>=0?N:z.UNKNOWN}(I.status);l(new ae(R,I.message))}else l(new ae(z.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new ae(z.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{ee(mt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(s);ee(mt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",u,r,15)})}T_(e,n,r){const s=wu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=my(),c=gy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);this.I_(d);let g=!1,m=!1;const I=new a1({Yo:O=>{m?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,O),d.send(O))},Zo:()=>d.close()}),R=(O,D,N)=>{O.listen(D,b=>{try{N(b)}catch(k){setTimeout(()=>{throw k},0)}})};return R(d,Ci.EventType.OPEN,()=>{m||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),I.o_())}),R(d,Ci.EventType.CLOSE,()=>{m||(m=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),I.a_(),this.E_(d))}),R(d,Ci.EventType.ERROR,O=>{m||(m=!0,Ws(mt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),I.a_(new ae(z.UNAVAILABLE,"The operation could not be completed")))}),R(d,Ci.EventType.MESSAGE,O=>{var D;if(!m){const N=O.data[0];He(!!N,16349);const b=N,k=(b==null?void 0:b.error)||((D=b[0])==null?void 0:D.error);if(k){ee(mt,`RPC '${e}' stream ${s} received error:`,k);const x=k.status;let F=function(_){const v=ze[_];if(v!==void 0)return Hy(v)}(x),w=k.message;F===void 0&&(F=z.INTERNAL,w="Unknown error status: "+x+" with message "+k.message),m=!0,I.a_(new ae(F,w)),d.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,N),I.u_(N)}}),R(c,py.STAT_EVENT,O=>{O.stat===ou.PROXY?ee(mt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===ou.NOPROXY&&ee(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.__()},0),I}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function El(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){return new gP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="PersistentStream";class l1{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new ae(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(Kp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(Kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u1 extends l1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=vP(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Ps(o.readTime):pe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Fp(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=pu(l)?{documents:wP(i,l)}:{query:TP(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=_P(i,o.resumeToken);const h=yu(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){c.readTime=mP(i,o.snapshotVersion.toTimestamp());const h=yu(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=bP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Fp(this.serializer),n.removeTarget=e,this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{}class f1 extends h1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ae(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Eu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(z.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Eu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(z.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class d1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="RemoteStore";class p1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Io(this)&&(ee(Js,"Restarting streams for network reachability change."),await async function(l){const h=we(l);h.Ea.add(4),await To(h),h.Ra.set("Unknown"),h.Ea.delete(4),await wc(h)}(this))})}),this.Ra=new d1(r,s)}}async function wc(t){if(Io(t))for(const e of t.da)await e(!0)}async function To(t){for(const e of t.da)await e(!1)}function rE(t,e){const n=we(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Rh(n)?Ah(n):ii(n).O_()&&bh(n,e))}function Ih(t,e){const n=we(t),r=ii(n);n.Ia.delete(e),r.O_()&&sE(n,e),n.Ia.size===0&&(r.O_()?r.L_():Io(n)&&n.Ra.set("Unknown"))}function bh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ii(t).Y_(e)}function sE(t,e){t.Va.Ue(e),ii(t).Z_(e)}function Ah(t){t.Va=new hP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ii(t).start(),t.Ra.ua()}function Rh(t){return Io(t)&&!ii(t).x_()&&t.Ia.size>0}function Io(t){return we(t).Ea.size===0}function iE(t){t.Va=void 0}async function g1(t){t.Ra.set("Online")}async function m1(t){t.Ia.forEach((e,n)=>{bh(t,e)})}async function _1(t,e){iE(t),Rh(t)?(t.Ra.ha(e),Ah(t)):t.Ra.set("Unknown")}async function y1(t,e,n){if(t.Ra.set("Online"),e instanceof qy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){ee(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zp(t,r)}else if(e instanceof fa?t.Va.Ze(e):e instanceof $y?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await eE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.Ia.get(h);u&&i.Ia.set(h,u.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const u=i.Ia.get(l);if(!u)return;i.Ia.set(l,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),sE(i,l);const d=new cr(u.target,l,h,u.sequenceNumber);bh(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(Js,"Failed to raise snapshot:",r),await zp(t,r)}}async function zp(t,e,n){if(!si(e))throw e;t.Ea.add(1),await To(t),t.Ra.set("Offline"),n||(n=()=>eE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Js,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await wc(t)})}async function Gp(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ee(Js,"RemoteStore received new credentials");const r=Io(n);n.Ea.add(3),await To(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await wc(n)}async function E1(t,e){const n=we(t);e?(n.Ea.delete(2),await wc(n)):e||(n.Ea.add(2),await To(n),n.Ra.set("Unknown"))}function ii(t){return t.ma||(t.ma=function(n,r,s){const i=we(n);return i.sa(),new u1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:g1.bind(null,t),t_:m1.bind(null,t),r_:_1.bind(null,t),H_:y1.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Rh(t)?Ah(t):t.Ra.set("Unknown")):(await t.ma.stop(),iE(t))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Sh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oE(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),si(t))return new ae(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{static emptySet(e){return new ks(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Pi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.ga=new Ke(fe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ys(e,n,ks.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class w1{constructor(){this.queries=Jp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=Jp(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new ae(z.ABORTED,"Firestore shutting down"))}}function Jp(){return new ts(t=>Dy(t),mc)}async function T1(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new v1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=oE(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ch(n)}async function I1(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function b1(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Ch(n)}function A1(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ch(t){t.Ca.forEach(e=>{e.next()})}var Tu,Yp;(Yp=Tu||(Tu={})).Ma="default",Yp.Cache="cache";class R1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.key=e}}class cE{constructor(e){this.key=e}}class S1{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=xy(e),this.tu=new ks(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Qp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const g=s.get(u),m=_c(this.query,d)?d:null,I=!!g&&this.mutatedKeys.has(g.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;g&&m?g.data.isEqual(m.data)?I!==R&&(r.track({type:3,doc:m}),O=!0):this.su(g,m)||(r.track({type:2,doc:m}),O=!0,(l&&this.eu(m,l)>0||h&&this.eu(m,h)<0)&&(c=!0)):!g&&m?(r.track({type:0,doc:m}),O=!0):g&&!m&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(m?(o=o.add(m),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((u,d)=>function(m,I){const R=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:O})}};return R(m)-R(I)}(u.type,d.type)||this.eu(u.doc,d.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Ys(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new cE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new aE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ys.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ph="SyncEngine";class C1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class P1{constructor(e){this.key=e,this.hu=!1}}class k1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ts(c=>Dy(c),mc),this.Iu=new Map,this.Eu=new Set,this.du=new Ke(fe.comparator),this.Au=new Map,this.Ru=new Eh,this.Vu={},this.mu=new Map,this.fu=Qs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function O1(t,e,n=!0){const r=dE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await lE(r,e,n,!0),s}async function N1(t,e){const n=dE(t);await lE(n,e,!0,!1)}async function lE(t,e,n,r){const s=await t1(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await D1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&rE(t.remoteStore,s),c}async function D1(t,e,n,r,s){t.pu=(d,g,m)=>async function(R,O,D,N){let b=O.view.ru(D);b.Cs&&(b=await Hp(R.localStore,O.query,!1).then(({documents:w})=>O.view.ru(w,b)));const k=N&&N.targetChanges.get(O.targetId),x=N&&N.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(b,R.isPrimaryClient,k,x);return Zp(R,O.targetId,F.au),F.snapshot}(t,d,g,m);const i=await Hp(t.localStore,e,!0),o=new S1(e,i.Qs),c=o.ru(i.documents),l=wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Zp(t,n,h.au);const u=new C1(e,n,o);return t.Tu.set(e,u),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function x1(t,e,n){const r=we(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!mc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ih(r.remoteStore,s.targetId),Iu(r,s.targetId)}).catch(hc)):(Iu(r,s.targetId),await vu(r.localStore,s.targetId,!0))}async function M1(t,e){const n=we(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ih(n.remoteStore,r.targetId))}async function uE(t,e){const n=we(t);try{const r=await ZP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?He(o.hu,14607):s.removedDocuments.size>0&&(He(o.hu,42227),o.hu=!1))}),await fE(n,r,e)}catch(r){await hc(r)}}function Xp(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=we(o);l.onlineState=c;let h=!1;l.queries.forEach((u,d)=>{for(const g of d.Sa)g.va(c)&&(h=!0)}),h&&Ch(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V1(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ke(fe.comparator);o=o.insert(i,vt.newNoDocument(i,pe.min()));const c=Ie().add(i),l=new vc(pe.min(),new Map,new Ke(Ee),o,c);await uE(r,l),r.du=r.du.remove(i),r.Au.delete(e),kh(r)}else await vu(r.localStore,e,!1).then(()=>Iu(r,e,n)).catch(hc)}function Iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||hE(t,r)})}function hE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ih(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),kh(t))}function Zp(t,e,n){for(const r of n)r instanceof aE?(t.Ru.addReference(r.key,e),L1(t,r)):r instanceof cE?(ee(Ph,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||hE(t,r.key)):ge(19791,{wu:r})}function L1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Ph,"New document in limbo: "+n),t.Eu.add(r),kh(t))}function kh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new fe(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new P1(n)),t.du=t.du.insert(n,r),rE(t.remoteStore,new cr(dn(Ny(n.path)),r,"TargetPurposeLimboResolution",fc.ce))}}async function fE(t,e,n){const r=we(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var u;if((h||n)&&r.isPrimaryClient){const d=h?!h.fromCache:(u=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:u.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=wh.As(l.targetId,h);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const u=we(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(h,g=>B.forEach(g.Es,m=>u.persistence.referenceDelegate.addReference(d,g.targetId,m)).next(()=>B.forEach(g.ds,m=>u.persistence.referenceDelegate.removeReference(d,g.targetId,m)))))}catch(d){if(!si(d))throw d;ee(Th,"Failed to update sequence numbers: "+d)}for(const d of h){const g=d.targetId;if(!d.fromCache){const m=u.Ms.get(g),I=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(I);u.Ms=u.Ms.insert(g,R)}}}(r.localStore,i))}async function F1(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ee(Ph,"User change. New user:",e.toKey());const r=await Zy(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new ae(z.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fE(n,r.Ls)}}function U1(t,e){const n=we(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function dE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V1.bind(null,e),e.Pu.H_=b1.bind(null,e.eventManager),e.Pu.yu=A1.bind(null,e.eventManager),e}class Ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tE(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return XP(this.persistence,new QP,e.initialUser,this.serializer)}Cu(e){return new Xy(vh.mi,this.serializer)}Du(e){return new r1}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ba.provider={build:()=>new Ba};class j1 extends Ba{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof ja,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new Xy(r=>ja.mi(r,n),this.serializer)}}class bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F1.bind(null,this.syncEngine),await E1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new w1}()}createDatastore(e){const n=tE(e.databaseInfo.databaseId),r=function(i){return new c1(i)}(e.databaseInfo);return function(i,o,c,l){return new f1(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new p1(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Xp(this.syncEngine,n,0),function(){return Wp.v()?new Wp:new s1}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,u){const d=new k1(s,i,o,c,l,h);return u&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);ee(Js,"RemoteStore shutting down."),i.Ea.add(5),await To(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}bu.provider={build:()=>new bu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class H1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Ey.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function eg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $1(t);ee(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gp(e.remoteStore,s)),t._onlineComponents=e}async function $1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Ir,"Using user provided OfflineComponentProvider");try{await vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await vl(t,new Ba)}}else ee(Ir,"Using default OfflineComponentProvider"),await vl(t,new j1(void 0));return t._offlineComponents}async function q1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Ir,"Using user provided OnlineComponentProvider"),await eg(t,t._uninitializedComponentsProvider._online)):(ee(Ir,"Using default OnlineComponentProvider"),await eg(t,new bu))),t._onlineComponents}async function W1(t){const e=await q1(t),n=e.eventManager;return n.onListen=O1.bind(null,e.syncEngine),n.onUnlisten=x1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=N1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=M1.bind(null,e.syncEngine),n}function K1(t,e,n={}){const r=new Wr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const u=new B1({next:g=>{u.Nu(),o.enqueueAndForget(()=>I1(i,d)),g.fromCache&&l.source==="server"?h.reject(new ae(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),d=new R1(c,u,{includeMetadataChanges:!0,qa:!0});return T1(i,d)}(await W1(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="firestore.googleapis.com",ng=!0;class rg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gE,this.ssl=ng}else this.host=e.host,this.ssl=e.ssl??ng;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NP)throw new ae(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ae(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ae(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ae(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tC;switch(r.type){case"firstParty":return new iC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),tg.delete(n),r.terminate())}(this),Promise.resolve()}}function z1(t,e,n,r={}){var h;t=cu(t,Oh);const s=ti(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(ry(`https://${c}`),sy("Firestore",!0)),i.host!==gE&&i.host!==c&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Jr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=yt.MOCK_USER;else{u=AS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ae(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(g)}t._authCredentials=new nC(new yy(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tc(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Eo(n,$t._jsonSchema))return new $t(e,r||null,new fe(Be.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:Qe("string",$t._jsonSchemaVersion),referencePath:Qe("string")};class Os extends Tc{constructor(e,n,r){super(e,n,Ny(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new fe(e))}withConverter(e){return new Os(this.firestore,e,this._path)}}function XN(t,e,...n){if(t=En(t),hC("collection","path",e),t instanceof Oh){const r=Be.fromString(e,...n);return mp(r),new Os(t,null,r)}{if(!(t instanceof $t||t instanceof Os))throw new ae(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return mp(r),new Os(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="AsyncQueue";class ig{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nE(this,"async_queue_retry"),this._c=()=>{const r=El();r&&ee(sg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=El();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=El();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Wr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!si(e))throw e;ee(sg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",og(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Sh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ge(47125,{Pc:og(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function og(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class mE extends Oh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ig,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ig(e),this._firestoreClient=void 0,await e}}}function G1(t,e){const n=typeof t=="object"?t:cy(),r=typeof t=="string"?t:Ma,s=uh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=IS("firestore");i&&z1(s,...i)}return s}function Q1(t){if(t._terminated)throw new ae(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||J1(t),t._firestoreClient}function J1(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,u){return new RC(c,l,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,pE(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new H1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(ft.fromBase64String(e))}catch(n){throw new ae(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new un(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Eo(e,un._jsonSchema))return un.fromBase64String(e.bytes)}}un._jsonSchemaVersion="firestore/bytes/1.0",un._jsonSchema={type:Qe("string",un._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gr._jsonSchemaVersion}}static fromJSON(e){if(Eo(e,gr._jsonSchema))return new gr(e.latitude,e.longitude)}}gr._jsonSchemaVersion="firestore/geoPoint/1.0",gr._jsonSchema={type:Qe("string",gr._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Eo(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mr(e.vectorValues);throw new ae(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:Qe("string",mr._jsonSchemaVersion),vectorValues:Qe("object")};const Y1=new RegExp("[~\\*/\\[\\]]");function X1(t,e,n){if(e.search(Y1)>=0)throw ag(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new _E(...e.split("."))._internalPath}catch{throw ag(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ag(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let o="";return new ae(z.INVALID_ARGUMENT,i+t+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Z1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(EE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Z1 extends yE{data(){return super.data()}}function EE(t,e){return typeof e=="string"?X1(t,e):e instanceof _E?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tk{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vo(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[uu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>We(o.doubleValue));return new mr(n)}convertGeoPoint(e){return new gr(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(so(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);He(Jy(r),9688,{name:e});const s=new io(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ns extends yE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(EE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ns._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ns._jsonSchema={type:Qe("string",Ns._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class da extends Ns{data(e={}){return super.data(e)}}class Ds{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ra(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new da(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ra(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new da(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ra(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,u=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),u=o.indexOf(c.doc.key)),{type:nk(c.type),doc:l,oldIndex:h,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ds._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ey.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:t})}}Ds._jsonSchemaVersion="firestore/querySnapshot/1.0",Ds._jsonSchema={type:Qe("string",Ds._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class rk extends tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function ZN(t){t=cu(t,Tc);const e=cu(t.firestore,mE),n=Q1(e),r=new rk(e);return ek(t._query),K1(n,t._query).then(s=>new Ds(e,r,t,s))}(function(e,n=!0){(function(s){ri=s})(ni),qs(new Yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new mE(new rC(r.getProvider("auth-internal")),new oC(o,r.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ae(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(h.options.projectId,u)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dr(fp,dp,e),dr(fp,dp,"esm2020")})();function vE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sk=vE,wE=new _o("auth","Firebase",vE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new ch("@firebase/auth");function ik(t,...e){Ha.logLevel<=_e.WARN&&Ha.warn(`Auth (${ni}): ${t}`,...e)}function pa(t,...e){Ha.logLevel<=_e.ERROR&&Ha.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Nh(t,...e)}function pn(t,...e){return Nh(t,...e)}function TE(t,e,n){const r={...sk(),[e]:n};return new _o("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return TE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wE.create(t,...e)}function ue(t,e,...n){if(!t)throw Nh(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function Ln(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ok(){return cg()==="http:"||cg()==="https:"}function cg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ok()||OS()||"connection"in navigator)?navigator.onLine:!0}function ck(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=CS()||NS()}get(){return ak()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hk=new bo(3e4,6e4);function ns(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rr(t,e,n,r,s={}){return bE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=yo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return kS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ti(t.emulatorConfig.host)&&(h.credentials="include"),IE.fetch()(await AE(t,t.config.apiHost,n,c),h)})}async function bE(t,e,n){t._canInitEmulator=!1;const r={...lk,...e};try{const s=new dk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sa(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw TE(t,u,h);tn(t,u)}}catch(s){if(s instanceof jn)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function Ic(t,e,n,r,s={}){const i=await Rr(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function AE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Dh(t.config,s):`${t.config.apiScheme}://${s}`;return uk.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function fk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),hk.get())})}}function sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function lg(t){return t!==void 0&&t.enterprise!==void 0}class pk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gk(t,e){return Rr(t,"GET","/v2/recaptchaConfig",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function $a(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _k(t,e=!1){const n=En(t),r=await n.getIdToken(e),s=xh(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ki(wl(s.auth_time)),issuedAtTime:Ki(wl(s.iat)),expirationTime:Ki(wl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function xh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Z_(n);return s?JSON.parse(s):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ug(t){const e=xh(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&yk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ao(t,$a(e,{idToken:n}));ue(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?RE(s.providerUserInfo):[],o=wk(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ru(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function vk(t){const e=En(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function RE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e){const n=await bE(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await AE(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ti(t.emulatorConfig.host)&&(l.credentials="include"),IE.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ik(t,e){return Rr(t,"POST","/v2/accounts:revokeToken",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Tk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ru(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _k(this,e)}reload(){return vk(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await ao(this,mk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:m,providerData:I,stsTokenManager:R}=n;ue(d&&R,e,"internal-error");const O=xs.fromJSON(this.name,R);ue(typeof d=="string",e,"internal-error"),Gn(r,e.name),Gn(s,e.name),ue(typeof g=="boolean",e,"internal-error"),ue(typeof m=="boolean",e,"internal-error"),Gn(i,e.name),Gn(o,e.name),Gn(c,e.name),Gn(l,e.name),Gn(h,e.name),Gn(u,e.name);const D=new Jt({uid:d,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:h,lastLoginAt:u});return I&&Array.isArray(I)&&(D.providerData=I.map(N=>({...N}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?RE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new xs;c.updateFromIdToken(r);const l=new Jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ru(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function Pn(t){Ln(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}SE.type="NONE";const fg=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $a(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(Pn(fg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(fg);const o=ga(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const u=await h._get(o);if(u){let d;if(typeof u=="string"){const g=await $a(e,{idToken:u}).catch(()=>{});if(!g)break;d=await Jt._fromGetAccountInfoResponse(e,g,u)}else d=Jt._fromJSON(e,u);h!==i&&(c=d),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ms(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ms(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DE(e))return"Blackberry";if(xE(e))return"Webos";if(PE(e))return"Safari";if((e.includes("chrome/")||kE(e))&&!e.includes("edge/"))return"Chrome";if(NE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CE(t=Tt()){return/firefox\//i.test(t)}function PE(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kE(t=Tt()){return/crios\//i.test(t)}function OE(t=Tt()){return/iemobile/i.test(t)}function NE(t=Tt()){return/android/i.test(t)}function DE(t=Tt()){return/blackberry/i.test(t)}function xE(t=Tt()){return/webos/i.test(t)}function Mh(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bk(t=Tt()){var e;return Mh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Ak(){return DS()&&document.documentMode===10}function ME(t=Tt()){return Mh(t)||NE(t)||xE(t)||DE(t)||/windows phone/i.test(t)||OE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e=[]){let n;switch(t){case"Browser":n=dg(Tt());break;case"Worker":n=`${dg(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=6;class Pk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ck,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new Rk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $a(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ck()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(_r(this));const n=e?En(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sk(this),n=new Pk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ik(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ik(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oi(t){return En(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=BS(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ok(t){bc=t}function LE(t){return bc.loadJS(t)}function Nk(){return bc.recaptchaEnterpriseScript}function Dk(){return bc.gapiScript}function xk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Mk{constructor(){this.enterprise=new Vk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Vk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Lk="recaptcha-enterprise",FE="NO_RECAPTCHA";class Fk{constructor(e){this.type=Lk,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{gk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new pk(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;lg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(FE)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Mk().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&lg(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nk();l.length!==0&&(l+=c),LE(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function gg(t,e,n,r=!1,s=!1){const i=new Fk(t);let o;if(s)o=FE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mg(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await gg(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e){const n=uh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Jr(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function jk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bk(t,e,n){const r=oi(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=UE(e),{host:o,port:c}=Hk(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Jr(h,r.config.emulator)&&Jr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ti(o)?(ry(`${i}//${o}${l}`),sy("Auth",!0)):$k()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hk(t){const e=UE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_g(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_g(o)}}}function _g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $k(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function qk(t,e){return Rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Ic(t,"POST","/v1/accounts:signInWithPassword",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){return Ic(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}async function zk(t,e){return Ic(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Vh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mg(e,n,"signInWithPassword",Wk);case"emailLink":return Kk(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mg(e,r,"signUpPassword",qk);case"emailLink":return zk(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return Ic(t,"POST","/v1/accounts:signInWithIdp",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="http://localhost";class Zr extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:Gk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jk(t){const e=Ri(Si(t)).link,n=e?Ri(Si(e)).deep_link_id:null,r=Ri(Si(t)).deep_link_id;return(r?Ri(Si(r)).link:null)||r||n||e||t}class Lh{constructor(e){const n=Ri(Si(e)),r=n.apiKey??null,s=n.oobCode??null,i=Qk(n.mode??null);ue(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Jk(e);try{return new Lh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lh.parseLink(n);return ue(r,"argument-error"),co._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends jE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Ao{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ao{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=yg(r);return new Xs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yg(r);return new Xs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends jn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wa(e,n,r,s)}}function BE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(t,i,e,r):i})}async function Yk(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await ao(t,BE(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=xh(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),Xs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e,n=!1){if(Qt(t.app))return Promise.reject(_r(t));const r="signIn",s=await BE(t,r,e),i=await Xs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Zk(t,e){return HE(oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t){const e=oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function eD(t,e,n){return Qt(t.app)?Promise.reject(_r(t)):Zk(En(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eO(t),r})}function tO(t,e,n,r){return En(t).onIdTokenChanged(e,n,r)}function nO(t,e,n){return En(t).beforeAuthStateChanged(e,n)}function tD(t,e,n,r){return En(t).onAuthStateChanged(e,n,r)}function nD(t){return En(t).signOut()}const Ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=1e3,sO=10;class qE extends $E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ME(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ak()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qE.type="LOCAL";const iO=qE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends $E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WE.type="SESSION";const KE=WE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await oO(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Fh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function cO(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function lO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function hO(){return zE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebaseLocalStorageDb",fO=1,za="firebaseLocalStorage",QE="fbase_key";class Ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function dO(){const t=indexedDB.deleteDatabase(GE);return new Ro(t).toPromise()}function Su(){const t=indexedDB.open(GE,fO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:QE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await dO(),e(await Su()))})})}async function Eg(t,e,n){const r=Rc(t,!0).put({[QE]:e,value:n});return new Ro(r).toPromise()}async function pO(t,e){const n=Rc(t,!1).get(e),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function vg(t,e){const n=Rc(t,!0).delete(e);return new Ro(n).toPromise()}const gO=800,mO=3;class JE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(hO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await lO(),!this.activeServiceWorker)return;this.sender=new aO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await Eg(e,Ka,"1"),await vg(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rc(s,!1).getAll();return new Ro(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JE.type="LOCAL";const _O=JE;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(t,e){return e?Pn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EO(t){return HE(t.auth,new Uh(t),t.bypassAuthState)}function vO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Xk(n,new Uh(t),t.bypassAuthState)}async function wO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Yk(n,new Uh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EO;case"linkViaPopup":case"linkViaRedirect":return wO;case"reauthViaPopup":case"reauthViaRedirect":return vO;default:tn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new bo(2e3,1e4);class vs extends YE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TO.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO="pendingRedirect",ma=new Map;class bO extends YE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await AO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AO(t,e){const n=CO(e),r=SO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RO(t,e){ma.set(t._key(),e)}function SO(t){return Pn(t._redirectPersistence)}function CO(t){return ga(IO,t.config.apiKey,t.name)}async function PO(t,e,n=!1){if(Qt(t.app))return Promise.reject(_r(t));const r=oi(t),s=yO(r,e),o=await new bO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=600*1e3;class OO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kO&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MO=/^https?/;async function VO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DO(t);for(const n of e)try{if(LO(n))return}catch{}tn(t,"unauthorized-domain")}function LO(t){const e=Au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MO.test(n))return!1;if(xO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new bo(3e4,6e4);function Tg(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UO(t){return new Promise((e,n)=>{var s,i,o;function r(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),n(pn(t,"network-request-failed"))},timeout:FO.get()})}if((i=(s=gn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const c=xk("iframefcb");return gn()[c]=()=>{gapi.load?r():n(pn(t,"network-request-failed"))},LE(`${Dk()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw _a=null,e})}let _a=null;function jO(t){return _a=_a||UO(t),_a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=new bo(5e3,15e3),HO="__/auth/iframe",$O="emulator/auth/iframe",qO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dh(e,$O):`https://${t.config.authDomain}/${HO}`,r={apiKey:e.apiKey,appName:t.name,v:ni},s=WO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yo(r).slice(1)}`}async function zO(t){const e=await jO(t),n=gn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:KO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),c=gn().setTimeout(()=>{i(o)},BO.get());function l(){gn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QO=500,JO=600,YO="_blank",XO="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZO(t,e,n,r=QO,s=JO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...GO,width:r.toString(),height:s.toString(),top:i,left:o},h=Tt().toLowerCase();n&&(c=kE(h)?YO:n),CE(h)&&(e=e||XO,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[m,I])=>`${g}${m}=${I},`,"");if(bk(h)&&c!=="_self")return eN(e||"",c),new Ig(null);const d=window.open(e||"",c,u);ue(d,t,"popup-blocked");try{d.focus()}catch{}return new Ig(d)}function eN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="__/auth/handler",nN="emulator/auth/handler",rN=encodeURIComponent("fac");async function bg(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:s};if(e instanceof jE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Ao){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await t._getAppCheckToken(),h=l?`#${rN}=${encodeURIComponent(l)}`:"";return`${sN(t)}?${yo(c).slice(1)}${h}`}function sN({config:t}){return t.emulator?Dh(t,nN):`https://${t.authDomain}/${tN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="webStorageSupport";class iN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KE,this._completeRedirectFn=PO,this._overrideRedirectResult=RO}async _openPopup(e,n,r,s){var o;Ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await bg(e,n,r,Au(),s);return ZO(e,i,Fh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bg(e,n,r,Au(),s);return cO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zO(e),r=new OO(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tl,{type:Tl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Tl];i!==void 0&&n(!!i),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ME()||PE()||Mh()}}const oN=iN;var Ag="@firebase/auth",Rg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lN(t){qs(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VE(t)},h=new kk(r,s,i,l);return jk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qs(new Yr("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new aN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Ag,Rg,cN(t)),dr(Ag,Rg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=300,hN=ny("authIdTokenMaxAge")||uN;let Sg=null;const fN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hN)return;const s=n==null?void 0:n.token;Sg!==s&&(Sg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dN(t=cy()){const e=uh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Uk(t,{popupRedirectResolver:oN,persistence:[_O,iO,KE]}),r=ny("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fN(i.toString());nO(n,o,()=>o(n.currentUser)),tO(n,c=>o(c))}}const s=ey("auth");return s&&Bk(n,`http://${s}`),n}function pN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ok({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lN("Browser");const gN=Dt(t=>{const e=go(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,databaseURL:"<replace this>",projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID};let r;const s=H0();s.length?r=s[0]:r=ay(n);const i=G1(r),o=dN(r);t.provide("db",i),t.provide("auth",o)}),mN=[SA,PA,xA,XR,oS,aS,cS,lS,uS,hS,fS,dS,pS,gN],ZE=(t="RouteProvider")=>br({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return ur(Qr,hn(s)),()=>e.vnode?wt(e.vnode,{ref:e.vnodeRef}):e.vnode}}),_N=ZE(),Cg=new WeakMap,yN=br({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Je(),i=Xt(),o=st(Qr,null);let c;r({pageRef:i});const l=st(w_,null);let h;const u=s.deferHydration();if(s.isHydrating){const g=s.hooks.hookOnce("app:error",u);Ft().beforeEach(g)}t.pageKey&&Hr(()=>t.pageKey,(g,m)=>{g!==m&&s.callHook("page:loading:start")});let d=!1;{const g=Ft().beforeResolve(()=>{d=!1});fo(()=>{g()})}return()=>wt(z_,{name:t.name,route:t.route,...e},{default:g=>{const m=vN(o,g.route,g.Component),I=o&&o.matched.length===g.route.matched.length;if(!g.Component){if(h&&!I)return h;u();return}if(h&&l&&!l.isCurrent(g.route))return h;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return I?h:null;const R=eu(g,t.pageKey),O=wN(o,g.route,g.Component);!s.isHydrating&&c===R&&!O&&zr(()=>{d=!0,s.callHook("page:loading:end")}),c=R;const D=!!(t.transition??g.route.meta.pageTransition??Ed),N=D&&EN([t.transition,g.route.meta.pageTransition,Ed,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",g.Component)}}]),b=t.keepalive??g.route.meta.keepalive??ub;return h=Q_(D&&N,BR(b,wt(Ju,{suspensible:!0,onPending:()=>{D&&(s._runningTransition=!0),s.callHook("page:start",g.Component)},onResolve:()=>{zr(()=>s.callHook("page:finish",g.Component).then(()=>{if(!d&&!O)return d=!0,s.callHook("page:loading:end")}).finally(u))}},{default:()=>{const k={key:R||void 0,vnode:n.default?TN(n.default,g):g.Component,route:g.route,renderKey:R||void 0,trackRootNodes:D,vnodeRef:i};if(!b)return wt(_N,k);const x=g.Component.type,F=x;let w=Cg.get(F);return w||(w=ZE(x.name||x.__name),Cg.set(F,w)),wt(w,k)}}))).default(),h}})}});function EN(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?oh(n.onAfterLeave):void 0}));return E_(...e)}function vN(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,c,l;return((o=s.components)==null?void 0:o.default)!==((l=(c=t.matched[i])==null?void 0:c.components)==null?void 0:l.default)})||n&&eu({route:e,Component:n})!==eu({route:t,Component:n})}function wN(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function TN(t,e){const n=t(e);return n.length===1?wt(n[0]):wt(Mt,void 0,n)}const IN=br({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>wt(or[t.name],t.layoutProps,e.slots)}}),bN={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},AN=br({name:"NuxtLayout",inheritAttrs:!1,props:bN,setup(t,e){const n=Je(),r=st(Qr),i=!r||r===ic()?G_():r,o=Lt(()=>{let u=Ve(t.name)??(i==null?void 0:i.meta.layout)??"default";return u&&!(u in or)&&t.fallback&&(u=Ve(t.fallback)),u}),c=Ls();e.expose({layoutRef:c});const l=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",l);Ft().beforeEach(u)}let h;return()=>{const u=o.value&&o.value in or,d=(i==null?void 0:i.meta.layoutTransition)??lb,g=h;return h=o.value,Q_(u&&d,{default:()=>wt(Ju,{suspensible:!0,onResolve:()=>{zr(l)}},{default:()=>wt(RN,{layoutProps:Qm(e.attrs,{ref:c}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==g&&m===o.value,hasTransition:!!d},e.slots)})}).default()}}}),RN=br({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&ur(w_,{isCurrent:i=>n===(i.meta.layout??"default")});const r=st(Qr);if(r&&r===ic()){const i=G_(),o={};for(const c in i){const l=c;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}ur(Qr,hn(o))}return()=>{var i,o;return!n||typeof n=="string"&&!(n in or)?(o=(i=e.slots).default)==null?void 0:o.call(i):wt(IN,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),SN=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},CN={};function PN(t,e){const n=yN,r=AN;return cn(),tr(r,null,{default:qu(()=>[qe(n)]),_:1})}const kN=SN(CN,[["render",PN]]),ON={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),c=void 0,u=s?Es(()=>nt(()=>import("./DpG5CL2X.js"),__vite__mapDeps([28,1,9,29]),import.meta.url)):Es(()=>nt(()=>import("./DJPKB58B.js"),__vite__mapDeps([30,9,31]),import.meta.url));return(d,g)=>(cn(),tr(Ve(u),Vv(zm({statusCode:Ve(r),statusMessage:Ve(i),description:Ve(o),stack:Ve(c)})),null,16))}},NN={key:0},Pg={__name:"nuxt-root",setup(t){const e=()=>null,n=Je(),r=n.deferHydration();if(n.isHydrating){const h=n.hooks.hookOnce("app:error",r);Ft().beforeEach(h)}const s=!1;ur(Qr,ic()),n.hooks.callHookWith(h=>h.map(u=>u()),"vue:setup");const i=oc(),o=!1,c=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;vm((h,u,d)=>{if(n.hooks.callHook("vue:error",h,u,d).catch(g=>console.error("[nuxt] Error in `vue:error` hook",g)),c.test(navigator.userAgent))return n.hooks.callHook("app:error",h),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,h),!1;if(I_(h)&&(h.fatal||h.unhandled))return n.runWithContext(()=>Vr(h)),!1});const l=!1;return(h,u)=>(cn(),tr(Ju,{onResolve:Ve(r)},{default:qu(()=>[Ve(o)?(cn(),gT("div",NN)):Ve(i)?(cn(),tr(Ve(ON),{key:1,error:Ve(i)},null,8,["error"])):Ve(l)?(cn(),tr(Ve(e),{key:2,context:Ve(l)},null,8,["context"])):Ve(s)?(cn(),tr(Mw(Ve(s)),{key:3})):(cn(),tr(Ve(kN),{key:4}))]),_:1},8,["onResolve"]))}};let kg;{let t;kg=async function(){var o,c;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((c=document.getElementById("__NUXT_DATA__"))==null?void 0:c.dataset.ssr)==="true")?rI(Pg):nI(Pg),s=gb({vueApp:r});async function i(l){var h;await s.callHook("app:error",l),(h=s.payload).error||(h.error=qr(l))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await yb(s,mN)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(fb),await s.hooks.callHook("app:mounted",r),await zr()}catch(l){i(l)}return r},t=kg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{MN as $,Dg as A,BN as B,GN as C,vb as D,tc as E,Mt as F,st as G,k_ as H,Je as I,$N as J,po as K,kw as L,Em as M,Bv as N,Ls as O,rm as P,zr as Q,qr as R,xu as S,FN as T,zN as U,Xa as V,ZN as W,XN as X,WN as Y,yN as Z,SN as _,Km as a,tD as a0,nD as a1,eD as a2,br as a3,Ft as a4,ah as a5,Zd as a6,fo as a7,JN as a8,wt as a9,s_ as aa,Pb as ab,nS as ac,Ar as ad,Zu as ae,CI as af,Xi as ag,HN as ah,qe as b,gT as c,Gm as d,Lt as e,Ku as f,xN as g,Hr as h,UN as i,VN as j,tr as k,LN as l,KN as m,Ya as n,cn as o,G_ as p,QN as q,Xt as r,go as s,jv as t,Ve as u,jN as v,qu as w,tm as x,Fn as y,qN as z};
