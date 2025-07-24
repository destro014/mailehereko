const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SsFzt0yi.js","./C6iS8T98.js","./CZAQ49--.js","./CzHr444D.js","./CPl9FaFZ.js","./DHESSB6d.js","./9iHRzJNC.js","./igGxqPE7.js","./d7Mx7uUK.js","./CLH1rN3a.js","./DSYkEeE-.js","./ClSuT0jU.js","./Cy6Kki5g.js","./B1A8tJts.js","./BlkvMd3l.js","./bxoo_MPa.js","./Ms57SnnH.js","./BZafJiMA.js","./DJo8hYym.js","./C6GCM0NO.js","./B5RZEctj.js","./BUl3W44A.js","./DlWClgLe.js","./CyPhkSED.js","./DU0KjE6E.js","./DIZCvyTB.js","./D4qGkaiA.js","./error.ZCwXXpR-.css","./7vezOjF_.js","./error-404.C6EWxgLN.css","./CPCAxQKI.js","./error-500.B1ULVJsU.css"])))=>i.map(i=>d[i]);
var wv=Object.defineProperty;var Tv=(t,e,n)=>e in t?wv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Kn=(t,e,n)=>Tv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Ts=[],fn=()=>{},Iv=()=>!1,ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ku=t=>t.startsWith("onUpdate:"),rt=Object.assign,Ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Av=Object.prototype.hasOwnProperty,Ce=(t,e)=>Av.call(t,e),ce=Array.isArray,Is=t=>ei(t)==="[object Map]",Og=t=>ei(t)==="[object Set]",Nf=t=>ei(t)==="[object Date]",bv=t=>ei(t)==="[object RegExp]",he=t=>typeof t=="function",Fe=t=>typeof t=="string",mn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Nu=t=>(ke(t)||he(t))&&he(t.then)&&he(t.catch),Ng=Object.prototype.toString,ei=t=>Ng.call(t),Rv=t=>ei(t).slice(8,-1),Dg=t=>ei(t)==="[object Object]",Du=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,As=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sv=/-(\w)/g,Wt=Qa(t=>t.replace(Sv,(e,n)=>n?n.toUpperCase():"")),Cv=/\B([A-Z])/g,Zr=Qa(t=>t.replace(Cv,"-$1").toLowerCase()),Ja=Qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hc=Qa(t=>t?`on${Ja(t)}`:""),lr=(t,e)=>!Object.is(t,e),bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Al=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mg=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Df;const Ya=()=>Df||(Df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xa(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Dv(r):Xa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||ke(t))return t}const kv=/;(?![^(]*\))/g,Ov=/:([^]+)/,Nv=/\/\*[^]*?\*\//g;function Dv(t){const e={};return t.replace(Nv,"").split(kv).forEach(n=>{if(n){const r=n.split(Ov);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Za(t){let e="";if(Fe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Za(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Mv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Fe(e)&&(t.class=Za(e)),n&&(t.style=Xa(n)),t}const xv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vv=Pu(xv);function xg(t){return!!t||t===""}function Lv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ea(t[r],e[r]);return n}function Ea(t,e){if(t===e)return!0;let n=Nf(t),r=Nf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?Lv(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ea(t[o],e[o]))return!1}}return String(t)===String(e)}const Vg=t=>!!(t&&t.__v_isRef===!0),Fv=t=>Fe(t)?t:t==null?"":ce(t)||ke(t)&&(t.toString===Ng||!he(t.toString))?Vg(t)?Fv(t.value):JSON.stringify(t,Lg,2):String(t),Lg=(t,e)=>Vg(e)?Lg(t,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$c(r,i)+" =>"]=s,n),{})}:Og(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$c(n))}:mn(e)?$c(e):ke(e)&&!ce(e)&&!Dg(e)?String(e):e,$c=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Fg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Mu(t){return new Fg(t)}function xu(){return _t}function Uv(t,e=!1){_t&&_t.cleanups.push(t)}let Me;const qc=new WeakSet;class Ug{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qc.has(this)&&(qc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mf(this),Hg(this);const e=Me,n=Yt;Me=this,Yt=!0;try{return this.fn()}finally{$g(this),Me=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fu(e);this.deps=this.depsTail=void 0,Mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Bg=0,Di,Mi;function jg(t,e=!1){if(t.flags|=8,e){t.next=Mi,Mi=t;return}t.next=Di,Di=t}function Vu(){Bg++}function Lu(){if(--Bg>0)return;if(Mi){let e=Mi;for(Mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Di;){let e=Di;for(Di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Hg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $g(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Fu(r),Bv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qi)||(t.globalVersion=Qi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!bl(t))))return;t.flags|=2;const e=t.dep,n=Me,r=Yt;Me=t,Yt=!0;try{Hg(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Yt=r,$g(t),t.flags&=-3}}function Fu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Fu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const Wg=[];function On(){Wg.push(Yt),Yt=!1}function Nn(){const t=Wg.pop();Yt=t===void 0?!0:t}function Mf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Qi=0;class jv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!Yt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new jv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Kg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Qi++,this.notify(e)}notify(e){Vu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Lu()}}}function Kg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Kg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const va=new WeakMap,Fr=Symbol(""),Rl=Symbol(""),Ji=Symbol("");function Et(t,e,n){if(Yt&&Me){let r=va.get(t);r||va.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Uu),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=va.get(t);if(!o){Qi++;return}const c=l=>{l&&l.trigger()};if(Vu(),e==="clear")o.forEach(c);else{const l=ce(t),h=l&&Du(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,g)=>{(g==="length"||g===Ji||!mn(g)&&g>=u)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Ji)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Fr)),Is(t)&&c(o.get(Rl)));break;case"delete":l||(c(o.get(Fr)),Is(t)&&c(o.get(Rl)));break;case"set":Is(t)&&c(o.get(Fr));break}}Lu()}function Hv(t,e){const n=va.get(t);return n&&n.get(e)}function us(t){const e=Te(t);return e===t?e:(Et(e,"iterate",Ji),qt(t)?e:e.map(ut))}function ec(t){return Et(t=Te(t),"iterate",Ji),t}const $v={__proto__:null,[Symbol.iterator](){return Wc(this,Symbol.iterator,ut)},concat(...t){return us(this).concat(...t.map(e=>ce(e)?us(e):e))},entries(){return Wc(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return Tn(this,"find",t,e,ut,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Kc(this,"includes",t)},indexOf(...t){return Kc(this,"indexOf",t)},join(t){return us(this).join(t)},lastIndexOf(...t){return Kc(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return Ti(this,"pop")},push(...t){return Ti(this,"push",t)},reduce(t,...e){return xf(this,"reduce",t,e)},reduceRight(t,...e){return xf(this,"reduceRight",t,e)},shift(){return Ti(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return Ti(this,"splice",t)},toReversed(){return us(this).toReversed()},toSorted(t){return us(this).toSorted(t)},toSpliced(...t){return us(this).toSpliced(...t)},unshift(...t){return Ti(this,"unshift",t)},values(){return Wc(this,"values",ut)}};function Wc(t,e,n){const r=ec(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const qv=Array.prototype;function Tn(t,e,n,r,s,i){const o=ec(t),c=o!==t&&!qt(t),l=o[e];if(l!==qv[e]){const d=l.apply(t,i);return c?ut(d):d}let h=n;o!==t&&(c?h=function(d,g){return n.call(this,ut(d),g,t)}:n.length>2&&(h=function(d,g){return n.call(this,d,g,t)}));const u=l.call(o,h,r);return c&&s?s(u):u}function xf(t,e,n,r){const s=ec(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ut(c),l,t)}),s[e](i,...r)}function Kc(t,e,n){const r=Te(t);Et(r,"iterate",Ji);const s=r[e](...n);return(s===-1||s===!1)&&Hu(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function Ti(t,e,n=[]){On(),Vu();const r=Te(t)[e].apply(t,n);return Lu(),Nn(),r}const Wv=Pu("__proto__,__v_isRef,__isVue"),zg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function Kv(t){mn(t)||(t=String(t));const e=Te(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Gg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?nw:Xg:i?Yg:Jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=$v[n]))return l;if(n==="hasOwnProperty")return Kv}const c=Reflect.get(e,n,Le(e)?e:r);return(mn(n)?zg.has(n):Wv(n))||(s||Et(e,"get",n),i)?c:Le(c)?o&&Du(n)?c:c.value:ke(c)?s?Zg(c):Fn(c):c}}class Qg extends Gg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Dn(i);if(!qt(r)&&!Dn(r)&&(i=Te(i),r=Te(r)),!ce(e)&&Le(i)&&!Le(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Du(n)?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,r,Le(e)?e:s);return e===Te(s)&&(o?lr(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!zg.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ce(e)?"length":Fr),Reflect.ownKeys(e)}}class zv extends Gg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gv=new Qg,Qv=new zv,Jv=new Qg(!0);const Sl=t=>t,$o=t=>Reflect.getPrototypeOf(t);function Yv(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=Is(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),u=n?Sl:e?wa:ut;return!e&&Et(i,"iterate",l?Rl:Fr),{next(){const{value:d,done:g}=h.next();return g?{value:d,done:g}:{value:c?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function qo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xv(t,e){const n={get(s){const i=this.__v_raw,o=Te(i),c=Te(s);t||(lr(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=$o(o),h=e?Sl:t?wa:ut;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Te(s),"iterate",Fr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Te(i),c=Te(s);return t||(lr(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Te(c),h=e?Sl:t?wa:ut;return!t&&Et(l,"iterate",Fr),c.forEach((u,d)=>s.call(i,h(u),h(d),o))}};return rt(n,t?{add:qo("add"),set:qo("set"),delete:qo("delete"),clear:qo("clear")}:{add(s){!e&&!qt(s)&&!Dn(s)&&(s=Te(s));const i=Te(this);return $o(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!Dn(i)&&(i=Te(i));const o=Te(this),{has:c,get:l}=$o(o);let h=c.call(o,s);h||(s=Te(s),h=c.call(o,s));const u=l.call(o,s);return o.set(s,i),h?lr(i,u)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Te(this),{has:o,get:c}=$o(i);let l=o.call(i,s);l||(s=Te(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Rn(i,"delete",s,void 0),h},clear(){const s=Te(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yv(s,t,e)}),n}function Bu(t,e){const n=Xv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Zv={get:Bu(!1,!1)},ew={get:Bu(!1,!0)},tw={get:Bu(!0,!1)};const Jg=new WeakMap,Yg=new WeakMap,Xg=new WeakMap,nw=new WeakMap;function rw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sw(t){return t.__v_skip||!Object.isExtensible(t)?0:rw(Rv(t))}function Fn(t){return Dn(t)?t:ju(t,!1,Gv,Zv,Jg)}function hn(t){return ju(t,!1,Jv,ew,Yg)}function Zg(t){return ju(t,!0,Qv,tw,Xg)}function ju(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=sw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function kn(t){return Dn(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function Hu(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function $u(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Al(t,"__v_skip",!0),t}const ut=t=>ke(t)?Fn(t):t,wa=t=>ke(t)?Zg(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function Xt(t){return em(t,!1)}function Fs(t){return em(t,!0)}function em(t,e){return Le(t)?t:new iw(t,e)}class iw{constructor(e,n){this.dep=new Uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Dn(e);e=r?e:Te(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function Ve(t){return Le(t)?t.value:t}function ow(t){return he(t)?t():Ve(t)}const aw={get:(t,e,n)=>e==="__v_raw"?t:Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tm(t){return kn(t)?t:new Proxy(t,aw)}function cw(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=rm(t,n);return e}class lw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hv(Te(this._object),this._key)}}class uw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function nm(t,e,n){return Le(t)?t:he(t)?new uw(t):ke(t)&&arguments.length>1?rm(t,e,n):Xt(t)}function rm(t,e,n){const r=t[e];return Le(r)?r:new lw(t,e,n)}class hw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return jg(this,!0),!0}get value(){const e=this.dep.track();return qg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fw(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new hw(r,s,n)}const Wo={},Ta=new WeakMap;let Mr;function dw(t,e=!1,n=Mr){if(n){let r=Ta.get(n);r||Ta.set(n,r=[]),r.push(t)}}function pw(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=k=>s?k:qt(k)||s===!1||s===0?Sn(k,1):Sn(k);let u,d,g,m,I=!1,R=!1;if(Le(t)?(d=()=>t.value,I=qt(t)):kn(t)?(d=()=>h(t),I=!0):ce(t)?(R=!0,I=t.some(k=>kn(k)||qt(k)),d=()=>t.map(k=>{if(Le(k))return k.value;if(kn(k))return h(k);if(he(k))return l?l(k,2):k()})):he(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){On();try{g()}finally{Nn()}}const k=Mr;Mr=u;try{return l?l(t,3,[m]):t(m)}finally{Mr=k}}:d=fn,e&&s){const k=d,M=s===!0?1/0:s;d=()=>Sn(k(),M)}const N=xu(),D=()=>{u.stop(),N&&N.active&&Ou(N.effects,u)};if(i&&e){const k=e;e=(...M)=>{k(...M),D()}}let O=R?new Array(t.length).fill(Wo):Wo;const A=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const M=u.run();if(s||I||(R?M.some((F,w)=>lr(F,O[w])):lr(M,O))){g&&g();const F=Mr;Mr=u;try{const w=[M,O===Wo?void 0:R&&O[0]===Wo?[]:O,m];O=M,l?l(e,3,w):e(...w)}finally{Mr=F}}}else u.run()};return c&&c(A),u=new Ug(d),u.scheduler=o?()=>o(A,!1):A,m=k=>dw(k,!1,u),g=u.onStop=()=>{const k=Ta.get(u);if(k){if(l)l(k,4);else for(const M of k)M();Ta.delete(u)}},e?r?A(!0):O=u.run():o?o(A.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Sn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Le(t))Sn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Og(t)||Is(t))t.forEach(r=>{Sn(r,e,n)});else if(Dg(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(t,e,n,r){try{return r?t(...r):t()}catch(s){ti(s,e,n)}}function Zt(t,e,n,r){if(he(t)){const s=fo(t,e,n,r);return s&&Nu(s)&&s.catch(i=>{ti(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zt(t[i],e,n,r));return s}}function ti(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,h)===!1)return}c=c.parent}if(i){On(),fo(i,null,10,[t,l,h]),Nn();return}}gw(t,n,s,r,o)}function gw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let sn=-1;const Rs=[];let Jn=null,ds=0;const sm=Promise.resolve();let Ia=null;function Kr(t){const e=Ia||sm;return t?e.then(this?t.bind(this):t):e}function mw(t){let e=sn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function qu(t){if(!(t.flags&1)){const e=Yi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Yi(n)?Rt.push(t):Rt.splice(mw(e),0,t),t.flags|=1,im()}}function im(){Ia||(Ia=sm.then(om))}function Cl(t){ce(t)?Rs.push(...t):Jn&&t.id===-1?Jn.splice(ds+1,0,t):t.flags&1||(Rs.push(t),t.flags|=1),im()}function Vf(t,e,n=sn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Aa(t){if(Rs.length){const e=[...new Set(Rs)].sort((n,r)=>Yi(n)-Yi(r));if(Rs.length=0,Jn){Jn.push(...e);return}for(Jn=e,ds=0;ds<Jn.length;ds++){const n=Jn[ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,ds=0}}const Yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function om(t){try{for(sn=0;sn<Rt.length;sn++){const e=Rt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<Rt.length;sn++){const e=Rt[sn];e&&(e.flags&=-2)}sn=-1,Rt.length=0,Aa(),Ia=null,(Rt.length||Rs.length)&&om()}}let Lt=null,am=null;function ba(t){const e=Lt;return Lt=t,am=t&&t.type.__scopeId||null,e}function Wu(t,e=Lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Gf(-1);const i=ba(e);let o;try{o=t(...s)}finally{ba(i),r._d&&Gf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kN(t,e){if(Lt===null)return t;const n=ic(Lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function on(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(On(),Zt(l,n,8,[t.el,c,t,e]),Nn())}}const _w=Symbol("_vte"),cm=t=>t.__isTeleport,Yn=Symbol("_leaveCb"),Ko=Symbol("_enterCb");function yw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zu(()=>{t.isMounted=!0}),go(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],lm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},um=t=>{const e=t.subTree;return e.component?um(e.component):e},Ew={name:"BaseTransition",props:lm,setup(t,{slots:e}){const n=es(),r=yw();return()=>{const s=e.default&&dm(e.default(),!0);if(!s||!s.length)return;const i=hm(s),o=Te(t),{mode:c}=o;if(r.isLeaving)return zc(i);const l=Lf(i);if(!l)return zc(i);let h=Pl(l,o,r,n,d=>h=d);l.type!==Ye&&Us(l,h);let u=n.subTree&&Lf(n.subTree);if(u&&u.type!==Ye&&!Gt(l,u)&&um(n).type!==Ye){let d=Pl(u,o,r,n);if(Us(u,d),c==="out-in"&&l.type!==Ye)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},zc(i);c==="in-out"&&l.type!==Ye?d.delayLeave=(g,m,I)=>{const R=fm(r,u);R[String(u.key)]=u,g[Yn]=()=>{m(),g[Yn]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{I(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function hm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ye){e=n;break}}return e}const vw=Ew;function fm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:I,onLeaveCancelled:R,onBeforeAppear:N,onAppear:D,onAfterAppear:O,onAppearCancelled:A}=e,k=String(t.key),M=fm(n,t),F=(_,v)=>{_&&Zt(_,r,9,v)},w=(_,v)=>{const C=v[1];F(_,v),ce(_)?_.every(S=>S.length<=1)&&C():_.length<=1&&C()},y={mode:o,persisted:c,beforeEnter(_){let v=l;if(!n.isMounted)if(i)v=N||l;else return;_[Yn]&&_[Yn](!0);const C=M[k];C&&Gt(t,C)&&C.el[Yn]&&C.el[Yn](),F(v,[_])},enter(_){let v=h,C=u,S=d;if(!n.isMounted)if(i)v=D||h,C=O||u,S=A||d;else return;let T=!1;const de=_[Ko]=me=>{T||(T=!0,me?F(S,[_]):F(C,[_]),y.delayedLeave&&y.delayedLeave(),_[Ko]=void 0)};v?w(v,[_,de]):de()},leave(_,v){const C=String(t.key);if(_[Ko]&&_[Ko](!0),n.isUnmounting)return v();F(g,[_]);let S=!1;const T=_[Yn]=de=>{S||(S=!0,v(),de?F(R,[_]):F(I,[_]),_[Yn]=void 0,M[C]===t&&delete M[C])};M[C]=t,m?w(m,[_,T]):T()},clone(_){const v=Pl(_,e,n,r,s);return s&&s(v),v}};return y}function zc(t){if(po(t))return t=Mn(t),t.children=null,t}function Lf(t){if(!po(t))return cm(t.type)&&t.children?hm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function Us(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Us(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Mt?(o.patchFlag&128&&s++,r=r.concat(dm(o.children,e,c))):(e||o.type!==Ye)&&r.push(c!=null?Mn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ar(t,e){return he(t)?rt({name:t.name},e,{setup:t}):t}function Ku(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ss(t,e,n,r,s=!1){if(ce(t)){t.forEach((I,R)=>Ss(I,e&&(ce(e)?e[R]:e),n,r,s));return}if(Ur(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ss(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ic(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,u=c.refs===Ne?c.refs={}:c.refs,d=c.setupState,g=Te(d),m=d===Ne?()=>!1:I=>Ce(g,I);if(h!=null&&h!==l&&(Fe(h)?(u[h]=null,m(h)&&(d[h]=null)):Le(h)&&(h.value=null)),he(l))fo(l,c,12,[o,u]);else{const I=Fe(l),R=Le(l);if(I||R){const N=()=>{if(t.f){const D=I?m(l)?d[l]:u[l]:l.value;s?ce(D)&&Ou(D,i):ce(D)?D.includes(i)||D.push(i):I?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else I?(u[l]=o,m(l)&&(d[l]=o)):R&&(l.value=o,t.k&&(u[t.k]=o))};o?(N.id=-1,at(N,n)):N()}}}let Ff=!1;const hs=()=>{Ff||(console.error("Hydration completed but contains mismatches."),Ff=!0)},ww=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Tw=t=>t.namespaceURI.includes("MathML"),zo=t=>{if(t.nodeType===1){if(ww(t))return"svg";if(Tw(t))return"mathml"}},Es=t=>t.nodeType===8;function Iw(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:h}}=t,u=(A,k)=>{if(!k.hasChildNodes()){n(null,A,k),Aa(),k._vnode=A;return}d(k.firstChild,A,null,null,null),Aa(),k._vnode=A},d=(A,k,M,F,w,y=!1)=>{y=y||!!k.dynamicChildren;const _=Es(A)&&A.data==="[",v=()=>R(A,k,M,F,w,_),{type:C,ref:S,shapeFlag:T,patchFlag:de}=k;let me=A.nodeType;k.el=A,de===-2&&(y=!1,k.dynamicChildren=null);let X=null;switch(C){case Hr:me!==3?k.children===""?(l(k.el=s(""),o(A),A),X=A):X=v():(A.data!==k.children&&(hs(),A.data=k.children),X=i(A));break;case Ye:O(A)?(X=i(A),D(k.el=A.content.firstChild,A,M)):me!==8||_?X=v():X=i(A);break;case Vi:if(_&&(A=i(A),me=A.nodeType),me===1||me===3){X=A;const re=!k.children.length;for(let te=0;te<k.staticCount;te++)re&&(k.children+=X.nodeType===1?X.outerHTML:X.data),te===k.staticCount-1&&(k.anchor=X),X=i(X);return _?i(X):X}else v();break;case Mt:_?X=I(A,k,M,F,w,y):X=v();break;default:if(T&1)(me!==1||k.type.toLowerCase()!==A.tagName.toLowerCase())&&!O(A)?X=v():X=g(A,k,M,F,w,y);else if(T&6){k.slotScopeIds=w;const re=o(A);if(_?X=N(A):Es(A)&&A.data==="teleport start"?X=N(A,A.data,"teleport end"):X=i(A),e(k,re,null,M,F,zo(re),y),Ur(k)&&!k.type.__asyncResolved){let te;_?(te=qe(Mt),te.anchor=X?X.previousSibling:re.lastChild):te=A.nodeType===3?zm(""):qe("div"),te.el=A,k.component.subTree=te}}else T&64?me!==8?X=v():X=k.type.hydrate(A,k,M,F,w,y,t,m):T&128&&(X=k.type.hydrate(A,k,M,F,zo(o(A)),w,y,t,d))}return S!=null&&Ss(S,null,F,k),X},g=(A,k,M,F,w,y)=>{y=y||!!k.dynamicChildren;const{type:_,props:v,patchFlag:C,shapeFlag:S,dirs:T,transition:de}=k,me=_==="input"||_==="option";if(me||C!==-1){T&&on(k,null,M,"created");let X=!1;if(O(A)){X=xm(null,de)&&M&&M.vnode.props&&M.vnode.props.appear;const te=A.content.firstChild;if(X){const De=te.getAttribute("class");De&&(te.$cls=De),de.beforeEnter(te)}D(te,A,M),k.el=A=te}if(S&16&&!(v&&(v.innerHTML||v.textContent))){let te=m(A.firstChild,k,A,M,F,w,y);for(;te;){Go(A,1)||hs();const De=te;te=te.nextSibling,c(De)}}else if(S&8){let te=k.children;te[0]===`
`&&(A.tagName==="PRE"||A.tagName==="TEXTAREA")&&(te=te.slice(1)),A.textContent!==te&&(Go(A,0)||hs(),A.textContent=k.children)}if(v){if(me||!y||C&48){const te=A.tagName.includes("-");for(const De in v)(me&&(De.endsWith("value")||De==="indeterminate")||ho(De)&&!As(De)||De[0]==="."||te)&&r(A,De,null,v[De],void 0,M)}else if(v.onClick)r(A,"onClick",null,v.onClick,void 0,M);else if(C&4&&kn(v.style))for(const te in v.style)v.style[te]}let re;(re=v&&v.onVnodeBeforeMount)&&Pt(re,M,k),T&&on(k,null,M,"beforeMount"),((re=v&&v.onVnodeMounted)||T||X)&&jm(()=>{re&&Pt(re,M,k),X&&de.enter(A),T&&on(k,null,M,"mounted")},F)}return A.nextSibling},m=(A,k,M,F,w,y,_)=>{_=_||!!k.dynamicChildren;const v=k.children,C=v.length;for(let S=0;S<C;S++){const T=_?v[S]:v[S]=xt(v[S]),de=T.type===Hr;A?(de&&!_&&S+1<C&&xt(v[S+1]).type===Hr&&(l(s(A.data.slice(T.children.length)),M,i(A)),A.data=T.children),A=d(A,T,F,w,y,_)):de&&!T.children?l(T.el=s(""),M):(Go(M,1)||hs(),n(null,T,M,null,F,w,zo(M),y))}return A},I=(A,k,M,F,w,y)=>{const{slotScopeIds:_}=k;_&&(w=w?w.concat(_):_);const v=o(A),C=m(i(A),k,v,M,F,w,y);return C&&Es(C)&&C.data==="]"?i(k.anchor=C):(hs(),l(k.anchor=h("]"),v,C),C)},R=(A,k,M,F,w,y)=>{if(Go(A.parentElement,1)||hs(),k.el=null,y){const C=N(A);for(;;){const S=i(A);if(S&&S!==C)c(S);else break}}const _=i(A),v=o(A);return c(A),n(null,k,v,_,M,F,zo(v),w),M&&(M.vnode.el=k.el,sc(M,k.el)),_},N=(A,k="[",M="]")=>{let F=0;for(;A;)if(A=i(A),A&&Es(A)&&(A.data===k&&F++,A.data===M)){if(F===0)return i(A);F--}return A},D=(A,k,M)=>{const F=k.parentNode;F&&F.replaceChild(A,k);let w=M;for(;w;)w.vnode.el===k&&(w.vnode.el=w.subTree.el=A),w=w.parent},O=A=>A.nodeType===1&&A.tagName==="TEMPLATE";return[u,d]}const Uf="data-allow-mismatch",Aw={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Go(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Uf);)t=t.parentElement;const n=t&&t.getAttribute(Uf);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(Aw[e])}}Ya().requestIdleCallback;Ya().cancelIdleCallback;function bw(t,e){if(Es(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Es(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Ur=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function vs(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:c=!0,onError:l}=t;let h=null,u,d=0;const g=()=>(d++,h=null,m()),m=()=>{let I;return h||(I=h=e().catch(R=>{if(R=R instanceof Error?R:new Error(String(R)),l)return new Promise((N,D)=>{l(R,()=>N(g()),()=>D(R),d+1)});throw R}).then(R=>I!==h&&h?h:(R&&(R.__esModule||R[Symbol.toStringTag]==="Module")&&(R=R.default),u=R,R)))};return Ar({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(I,R,N){let D=!1;(R.bu||(R.bu=[])).push(()=>D=!0);const O=()=>{D||N()},A=i?()=>{const k=i(O,M=>bw(I,M));k&&(R.bum||(R.bum=[])).push(k)}:O;u?A():m().then(()=>!R.isUnmounted&&A())},get __asyncResolved(){return u},setup(){const I=ht;if(Ku(I),u)return()=>Gc(u,I);const R=A=>{h=null,ti(A,I,13,!r)};if(c&&I.suspense||Hs)return m().then(A=>()=>Gc(A,I)).catch(A=>(R(A),()=>r?qe(r,{error:A}):null));const N=Xt(!1),D=Xt(),O=Xt(!!s);return s&&setTimeout(()=>{O.value=!1},s),o!=null&&setTimeout(()=>{if(!N.value&&!D.value){const A=new Error(`Async component timed out after ${o}ms.`);R(A),D.value=A}},o),m().then(()=>{N.value=!0,I.parent&&po(I.parent.vnode)&&I.parent.update()}).catch(A=>{R(A),D.value=A}),()=>{if(N.value&&u)return Gc(u,I);if(D.value&&r)return qe(r,{error:D.value});if(n&&!O.value)return qe(n)}}})}function Gc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=qe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const po=t=>t.type.__isKeepAlive,Rw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=es(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:h,um:u,o:{createElement:d}}}=r,g=d("div");r.activate=(O,A,k,M,F)=>{const w=O.component;h(O,A,k,0,c),l(w.vnode,O,A,k,w,c,M,O.slotScopeIds,F),at(()=>{w.isDeactivated=!1,w.a&&bs(w.a);const y=O.props&&O.props.onVnodeMounted;y&&Pt(y,w.parent,O)},c)},r.deactivate=O=>{const A=O.component;Sa(A.m),Sa(A.a),h(O,g,null,1,c),at(()=>{A.da&&bs(A.da);const k=O.props&&O.props.onVnodeUnmounted;k&&Pt(k,A.parent,O),A.isDeactivated=!0},c)};function m(O){Qc(O),u(O,n,c,!0)}function I(O){s.forEach((A,k)=>{const M=Fl(A.type);M&&!O(M)&&R(k)})}function R(O){const A=s.get(O);A&&(!o||!Gt(A,o))?m(A):o&&Qc(o),s.delete(O),i.delete(O)}jr(()=>[t.include,t.exclude],([O,A])=>{O&&I(k=>Ri(O,k)),A&&I(k=>!Ri(A,k))},{flush:"post",deep:!0});let N=null;const D=()=>{N!=null&&(Ca(n.subTree.type)?at(()=>{s.set(N,Qo(n.subTree))},n.subTree.suspense):s.set(N,Qo(n.subTree)))};return zu(D),_m(D),go(()=>{s.forEach(O=>{const{subTree:A,suspense:k}=n,M=Qo(A);if(O.type===M.type&&O.key===M.key){Qc(M);const F=M.component.da;F&&at(F,k);return}m(O)})}),()=>{if(N=null,!e.default)return o=null;const O=e.default(),A=O[0];if(O.length>1)return o=null,O;if(!js(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return o=null,A;let k=Qo(A);if(k.type===Ye)return o=null,k;const M=k.type,F=Fl(Ur(k)?k.type.__asyncResolved||{}:M),{include:w,exclude:y,max:_}=t;if(w&&(!F||!Ri(w,F))||y&&F&&Ri(y,F))return k.shapeFlag&=-257,o=k,A;const v=k.key==null?M:k.key,C=s.get(v);return k.el&&(k=Mn(k),A.shapeFlag&128&&(A.ssContent=k)),N=v,C?(k.el=C.el,k.component=C.component,k.transition&&Us(k,k.transition),k.shapeFlag|=512,i.delete(v),i.add(v)):(i.add(v),_&&i.size>parseInt(_,10)&&R(i.values().next().value)),k.shapeFlag|=256,o=k,Ca(A.type)?A:k}}},Sw=Rw;function Ri(t,e){return ce(t)?t.some(n=>Ri(n,e)):Fe(t)?t.split(",").includes(e):bv(t)?(t.lastIndex=0,t.test(e)):!1}function pm(t,e){mm(t,"a",e)}function gm(t,e){mm(t,"da",e)}function mm(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(tc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)po(s.parent.vnode)&&Cw(r,e,n,s),s=s.parent}}function Cw(t,e,n,r){const s=tc(e,t,r,!0);ym(()=>{Ou(r[e],s)},n)}function Qc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Qo(t){return t.shapeFlag&128?t.ssContent:t}function tc(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{On();const c=zr(n),l=Zt(e,n,t,o);return c(),Nn(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=ht)=>{(!Hs||t==="sp")&&tc(t,(...r)=>e(...r),n)},Pw=Un("bm"),zu=Un("m"),kw=Un("bu"),_m=Un("u"),go=Un("bum"),ym=Un("um"),Ow=Un("sp"),Nw=Un("rtg"),Dw=Un("rtc");function Em(t,e=ht){tc("ec",t,e)}const vm="components";function ON(t,e){return Tm(vm,t,!0,e)||t}const wm=Symbol.for("v-ndc");function Mw(t){return Fe(t)?Tm(vm,t,!1)||t:t||wm}function Tm(t,e,n=!0,r=!1){const s=Lt||ht;if(s){const i=s.type;{const c=Fl(i,!1);if(c&&(c===e||c===Wt(e)||c===Ja(Wt(e))))return i}const o=Bf(s[t]||i[t],e)||Bf(s.appContext[t],e);return!o&&r?i:o}}function Bf(t,e){return t&&(t[e]||t[Wt(e)]||t[Ja(Wt(e))])}function NN(t,e,n,r){let s;const i=n,o=ce(t);if(o||Fe(t)){const c=o&&kn(t);let l=!1,h=!1;c&&(l=!qt(t),h=Dn(t),t=ec(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?h?wa(ut(t[u])):ut(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const u=c[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const kl=t=>t?Qm(t)?ic(t):kl(t.parent):null,xi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kl(t.parent),$root:t=>kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Am(t),$forceUpdate:t=>t.f||(t.f=()=>{qu(t.update)}),$nextTick:t=>t.n||(t.n=Kr.bind(t.proxy)),$watch:t=>tT.bind(t)}),Jc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),xw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jc(r,e))return o[e]=1,r[e];if(s!==Ne&&Ce(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ce(h,e))return o[e]=3,i[e];if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];Ol&&(o[e]=0)}}const u=xi[e];let d,g;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jc(s,e)?(s[e]=n,!0):r!==Ne&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ne&&Ce(t,o)||Jc(e,o)||(c=i[0])&&Ce(c,o)||Ce(r,o)||Ce(xi,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jf(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function DN(t){const e=es();let n=t();return Vl(),Nu(n)&&(n=n.catch(r=>{throw zr(e),r})),[n,()=>zr(e)]}let Ol=!0;function Vw(t){const e=Am(t),n=t.proxy,r=t.ctx;Ol=!1,e.beforeCreate&&Hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:u,beforeMount:d,mounted:g,beforeUpdate:m,updated:I,activated:R,deactivated:N,beforeDestroy:D,beforeUnmount:O,destroyed:A,unmounted:k,render:M,renderTracked:F,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:v,inheritAttrs:C,components:S,directives:T,filters:de}=e;if(h&&Lw(h,r,null),o)for(const re in o){const te=o[re];he(te)&&(r[re]=te.bind(n))}if(s){const re=s.call(n,n);ke(re)&&(t.data=Fn(re))}if(Ol=!0,i)for(const re in i){const te=i[re],De=he(te)?te.bind(n,n):he(te.get)?te.get.bind(n,n):fn,Kt=!he(te)&&he(te.set)?te.set.bind(n):fn,Ut=Vt({get:De,set:Kt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Ue=>Ut.value=Ue})}if(c)for(const re in c)Im(c[re],r,n,re);if(l){const re=he(l)?l.call(n):l;Reflect.ownKeys(re).forEach(te=>{ur(te,re[te])})}u&&Hf(u,t,"c");function X(re,te){ce(te)?te.forEach(De=>re(De.bind(n))):te&&re(te.bind(n))}if(X(Pw,d),X(zu,g),X(kw,m),X(_m,I),X(pm,R),X(gm,N),X(Em,y),X(Dw,F),X(Nw,w),X(go,O),X(ym,k),X(Ow,_),ce(v))if(v.length){const re=t.exposed||(t.exposed={});v.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:De=>n[te]=De,enumerable:!0})})}else t.exposed||(t.exposed={});M&&t.render===fn&&(t.render=M),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T),_&&Ku(t)}function Lw(t,e,n=fn){ce(t)&&(t=Nl(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=nt(s.from||r,s.default,!0):i=nt(s.from||r):i=nt(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hf(t,e,n){Zt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Im(t,e,n,r){let s=r.includes(".")?Fm(n,r):()=>n[r];if(Fe(t)){const i=e[t];he(i)&&jr(s,i)}else if(he(t))jr(s,t.bind(n));else if(ke(t))if(ce(t))t.forEach(i=>Im(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&jr(s,i,t)}}function Am(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ra(l,h,o,!0)),Ra(l,e,o)),ke(e)&&i.set(e,l),l}function Ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ra(t,i,n,!0),s&&s.forEach(o=>Ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Fw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Fw={data:$f,props:qf,emits:qf,methods:Si,computed:Si,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Si,directives:Si,watch:Bw,provide:$f,inject:Uw};function $f(t,e){return e?t?function(){return rt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Uw(t,e){return Si(Nl(t),Nl(e))}function Nl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?rt(Object.create(null),t,e):e}function qf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:rt(Object.create(null),jf(t),jf(e??{})):e}function Bw(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function bm(){return{app:null,config:{isNativeTag:Iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jw=0;function Hw(t,e){return function(r,s=null){he(r)||(r=rt({},r)),s!=null&&!ke(s)&&(s=null);const i=bm(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:jw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:AT,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&he(u.install)?(o.add(u),u.install(h,...d)):he(u)&&(o.add(u),u(h,...d))),h},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),h},component(u,d){return d?(i.components[u]=d,h):i.components[u]},directive(u,d){return d?(i.directives[u]=d,h):i.directives[u]},mount(u,d,g){if(!l){const m=h._ceVNode||qe(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(m,u):t(m,u,g),l=!0,h._container=u,u.__vue_app__=h,ic(m.component)}},onUnmount(u){c.push(u)},unmount(){l&&(Zt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,d){return i.provides[u]=d,h},runWithContext(u){const d=Br;Br=h;try{return u()}finally{Br=d}}};return h}}let Br=null;function ur(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function nt(t,e,n=!1){const r=es();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function nc(){return!!(es()||Br)}const Rm={},Sm=()=>Object.create(Rm),Cm=t=>Object.getPrototypeOf(t)===Rm;function $w(t,e,n,r=!1){const s={},i=Sm();t.propsDefaults=Object.create(null),Pm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Te(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(rc(t.emitsOptions,g))continue;const m=e[g];if(l)if(Ce(i,g))m!==i[g]&&(i[g]=m,h=!0);else{const I=Wt(g);s[I]=Dl(l,c,I,m,t,!1)}else m!==i[g]&&(i[g]=m,h=!0)}}}else{Pm(t,e,s,i)&&(h=!0);let u;for(const d in c)(!e||!Ce(e,d)&&((u=Zr(d))===d||!Ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Dl(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],h=!0)}h&&Rn(t.attrs,"set","")}function Pm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(As(l))continue;const h=e[l];let u;s&&Ce(s,u=Wt(l))?!i||!i.includes(u)?n[u]=h:(c||(c={}))[u]=h:rc(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Te(n),h=c||Ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Dl(s,l,d,h[d],t,!Ce(h,d))}}return o}function Dl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const u=zr(s);r=h[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Zr(n))&&(r=!0))}return r}const Ww=new WeakMap;function km(t,e,n=!1){const r=n?Ww:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const u=d=>{l=!0;const[g,m]=km(d,e,!0);rt(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ke(t)&&r.set(t,Ts),Ts;if(ce(i))for(let u=0;u<i.length;u++){const d=Wt(i[u]);Wf(d)&&(o[d]=Ne)}else if(i)for(const u in i){const d=Wt(u);if(Wf(d)){const g=i[u],m=o[d]=ce(g)||he(g)?{type:g}:rt({},g),I=m.type;let R=!1,N=!0;if(ce(I))for(let D=0;D<I.length;++D){const O=I[D],A=he(O)&&O.name;if(A==="Boolean"){R=!0;break}else A==="String"&&(N=!1)}else R=he(I)&&I.name==="Boolean";m[0]=R,m[1]=N,(R||Ce(m,"default"))&&c.push(d)}}const h=[o,c];return ke(t)&&r.set(t,h),h}function Wf(t){return t[0]!=="$"&&!As(t)}const Gu=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Qu=t=>ce(t)?t.map(xt):[xt(t)],Kw=(t,e,n)=>{if(e._n)return e;const r=Wu((...s)=>Qu(e(...s)),n);return r._c=!1,r},Om=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gu(s))continue;const i=t[s];if(he(i))e[s]=Kw(s,i,r);else if(i!=null){const o=Qu(i);e[s]=()=>o}}},Nm=(t,e)=>{const n=Qu(e);t.slots.default=()=>n},Dm=(t,e,n)=>{for(const r in e)(n||!Gu(r))&&(t[r]=e[r])},zw=(t,e,n)=>{const r=t.slots=Sm();if(t.vnode.shapeFlag&32){const s=e.__;s&&Al(r,"__",s,!0);const i=e._;i?(Dm(r,e,n),n&&Al(r,"_",i,!0)):Om(e,r)}else e&&Nm(t,e)},Gw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Dm(s,e,n):(i=!e.$stable,Om(e,s)),o=e}else e&&(Nm(t,e),o={default:1});if(i)for(const c in s)!Gu(c)&&o[c]==null&&delete s[c]},at=jm;function Qw(t){return Mm(t)}function Jw(t){return Mm(t,Iw)}function Mm(t,e){const n=Ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:u,parentNode:d,nextSibling:g,setScopeId:m=fn,insertStaticContent:I}=t,R=(b,P,V,H=null,U=null,$=null,Q=void 0,K=null,W=!!P.dynamicChildren)=>{if(b===P)return;b&&!Gt(b,P)&&(H=B(b),Ue(b,U,$,!0),b=null),P.patchFlag===-2&&(W=!1,P.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:J}=P;switch(q){case Hr:N(b,P,V,H);break;case Ye:D(b,P,V,H);break;case Vi:b==null&&O(P,V,H,Q);break;case Mt:S(b,P,V,H,U,$,Q,K,W);break;default:J&1?M(b,P,V,H,U,$,Q,K,W):J&6?T(b,P,V,H,U,$,Q,K,W):(J&64||J&128)&&q.process(b,P,V,H,U,$,Q,K,W,ne)}oe!=null&&U?Ss(oe,b&&b.ref,$,P||b,!P):oe==null&&b&&b.ref!=null&&Ss(b.ref,null,$,b,!0)},N=(b,P,V,H)=>{if(b==null)r(P.el=c(P.children),V,H);else{const U=P.el=b.el;P.children!==b.children&&h(U,P.children)}},D=(b,P,V,H)=>{b==null?r(P.el=l(P.children||""),V,H):P.el=b.el},O=(b,P,V,H)=>{[b.el,b.anchor]=I(b.children,P,V,H,b.el,b.anchor)},A=({el:b,anchor:P},V,H)=>{let U;for(;b&&b!==P;)U=g(b),r(b,V,H),b=U;r(P,V,H)},k=({el:b,anchor:P})=>{let V;for(;b&&b!==P;)V=g(b),s(b),b=V;s(P)},M=(b,P,V,H,U,$,Q,K,W)=>{P.type==="svg"?Q="svg":P.type==="math"&&(Q="mathml"),b==null?F(P,V,H,U,$,Q,K,W):_(b,P,U,$,Q,K,W)},F=(b,P,V,H,U,$,Q,K)=>{let W,q;const{props:oe,shapeFlag:J,transition:ie,dirs:se}=b;if(W=b.el=o(b.type,$,oe&&oe.is,oe),J&8?u(W,b.children):J&16&&y(b.children,W,null,H,U,Yc(b,$),Q,K),se&&on(b,null,H,"created"),w(W,b,b.scopeId,Q,H),oe){for(const Re in oe)Re!=="value"&&!As(Re)&&i(W,Re,null,oe[Re],$,H);"value"in oe&&i(W,"value",null,oe.value,$),(q=oe.onVnodeBeforeMount)&&Pt(q,H,b)}se&&on(b,null,H,"beforeMount");const le=xm(U,ie);le&&ie.beforeEnter(W),r(W,P,V),((q=oe&&oe.onVnodeMounted)||le||se)&&at(()=>{q&&Pt(q,H,b),le&&ie.enter(W),se&&on(b,null,H,"mounted")},U)},w=(b,P,V,H,U)=>{if(V&&m(b,V),H)for(let $=0;$<H.length;$++)m(b,H[$]);if(U){let $=U.subTree;if(P===$||Ca($.type)&&($.ssContent===P||$.ssFallback===P)){const Q=U.vnode;w(b,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(b,P,V,H,U,$,Q,K,W=0)=>{for(let q=W;q<b.length;q++){const oe=b[q]=K?Xn(b[q]):xt(b[q]);R(null,oe,P,V,H,U,$,Q,K)}},_=(b,P,V,H,U,$,Q)=>{const K=P.el=b.el;let{patchFlag:W,dynamicChildren:q,dirs:oe}=P;W|=b.patchFlag&16;const J=b.props||Ne,ie=P.props||Ne;let se;if(V&&kr(V,!1),(se=ie.onVnodeBeforeUpdate)&&Pt(se,V,P,b),oe&&on(P,b,V,"beforeUpdate"),V&&kr(V,!0),(J.innerHTML&&ie.innerHTML==null||J.textContent&&ie.textContent==null)&&u(K,""),q?v(b.dynamicChildren,q,K,V,H,Yc(P,U),$):Q||te(b,P,K,null,V,H,Yc(P,U),$,!1),W>0){if(W&16)C(K,J,ie,V,U);else if(W&2&&J.class!==ie.class&&i(K,"class",null,ie.class,U),W&4&&i(K,"style",J.style,ie.style,U),W&8){const le=P.dynamicProps;for(let Re=0;Re<le.length;Re++){const Ae=le[Re],st=J[Ae],et=ie[Ae];(et!==st||Ae==="value")&&i(K,Ae,st,et,U,V)}}W&1&&b.children!==P.children&&u(K,P.children)}else!Q&&q==null&&C(K,J,ie,V,U);((se=ie.onVnodeUpdated)||oe)&&at(()=>{se&&Pt(se,V,P,b),oe&&on(P,b,V,"updated")},H)},v=(b,P,V,H,U,$,Q)=>{for(let K=0;K<P.length;K++){const W=b[K],q=P[K],oe=W.el&&(W.type===Mt||!Gt(W,q)||W.shapeFlag&198)?d(W.el):V;R(W,q,oe,null,H,U,$,Q,!0)}},C=(b,P,V,H,U)=>{if(P!==V){if(P!==Ne)for(const $ in P)!As($)&&!($ in V)&&i(b,$,P[$],null,U,H);for(const $ in V){if(As($))continue;const Q=V[$],K=P[$];Q!==K&&$!=="value"&&i(b,$,K,Q,U,H)}"value"in V&&i(b,"value",P.value,V.value,U)}},S=(b,P,V,H,U,$,Q,K,W)=>{const q=P.el=b?b.el:c(""),oe=P.anchor=b?b.anchor:c("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:se}=P;se&&(K=K?K.concat(se):se),b==null?(r(q,V,H),r(oe,V,H),y(P.children||[],V,oe,U,$,Q,K,W)):J>0&&J&64&&ie&&b.dynamicChildren?(v(b.dynamicChildren,ie,V,U,$,Q,K),(P.key!=null||U&&P===U.subTree)&&Vm(b,P,!0)):te(b,P,V,oe,U,$,Q,K,W)},T=(b,P,V,H,U,$,Q,K,W)=>{P.slotScopeIds=K,b==null?P.shapeFlag&512?U.ctx.activate(P,V,H,Q,W):de(P,V,H,U,$,Q,W):me(b,P,W)},de=(b,P,V,H,U,$,Q)=>{const K=b.component=yT(b,H,U);if(po(b)&&(K.ctx.renderer=ne),ET(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,X,Q),!b.el){const W=K.subTree=qe(Ye);D(null,W,P,V),b.placeholder=W.el}}else X(K,b,P,V,U,$,Q)},me=(b,P,V)=>{const H=P.component=b.component;if(aT(b,P,V))if(H.asyncDep&&!H.asyncResolved){re(H,P,V);return}else H.next=P,H.update();else P.el=b.el,H.vnode=P},X=(b,P,V,H,U,$,Q)=>{const K=()=>{if(b.isMounted){let{next:J,bu:ie,u:se,parent:le,vnode:Re}=b;{const dt=Lm(b);if(dt){J&&(J.el=Re.el,re(b,J,Q)),dt.asyncDep.then(()=>{b.isUnmounted||K()});return}}let Ae=J,st;kr(b,!1),J?(J.el=Re.el,re(b,J,Q)):J=Re,ie&&bs(ie),(st=J.props&&J.props.onVnodeBeforeUpdate)&&Pt(st,le,J,Re),kr(b,!0);const et=Xc(b),it=b.subTree;b.subTree=et,R(it,et,d(it.el),B(it),b,U,$),J.el=et.el,Ae===null&&sc(b,et.el),se&&at(se,U),(st=J.props&&J.props.onVnodeUpdated)&&at(()=>Pt(st,le,J,Re),U)}else{let J;const{el:ie,props:se}=P,{bm:le,m:Re,parent:Ae,root:st,type:et}=b,it=Ur(P);if(kr(b,!1),le&&bs(le),!it&&(J=se&&se.onVnodeBeforeMount)&&Pt(J,Ae,P),kr(b,!0),ie&&Pe){const dt=()=>{b.subTree=Xc(b),Pe(ie,b.subTree,b,U,null)};it&&et.__asyncHydrate?et.__asyncHydrate(ie,b,dt):dt()}else{st.ce&&st.ce._def.shadowRoot!==!1&&st.ce._injectChildStyle(et);const dt=b.subTree=Xc(b);R(null,dt,V,H,b,U,$),P.el=dt.el}if(Re&&at(Re,U),!it&&(J=se&&se.onVnodeMounted)){const dt=P;at(()=>Pt(J,Ae,dt),U)}(P.shapeFlag&256||Ae&&Ur(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&b.a&&at(b.a,U),b.isMounted=!0,P=V=H=null}};b.scope.on();const W=b.effect=new Ug(K);b.scope.off();const q=b.update=W.run.bind(W),oe=b.job=W.runIfDirty.bind(W);oe.i=b,oe.id=b.uid,W.scheduler=()=>qu(oe),kr(b,!0),q()},re=(b,P,V)=>{P.component=b;const H=b.vnode.props;b.vnode=P,b.next=null,qw(b,P.props,H,V),Gw(b,P.children,V),On(),Vf(b),Nn()},te=(b,P,V,H,U,$,Q,K,W=!1)=>{const q=b&&b.children,oe=b?b.shapeFlag:0,J=P.children,{patchFlag:ie,shapeFlag:se}=P;if(ie>0){if(ie&128){Kt(q,J,V,H,U,$,Q,K,W);return}else if(ie&256){De(q,J,V,H,U,$,Q,K,W);return}}se&8?(oe&16&&Ct(q,U,$),J!==q&&u(V,J)):oe&16?se&16?Kt(q,J,V,H,U,$,Q,K,W):Ct(q,U,$,!0):(oe&8&&u(V,""),se&16&&y(J,V,H,U,$,Q,K,W))},De=(b,P,V,H,U,$,Q,K,W)=>{b=b||Ts,P=P||Ts;const q=b.length,oe=P.length,J=Math.min(q,oe);let ie;for(ie=0;ie<J;ie++){const se=P[ie]=W?Xn(P[ie]):xt(P[ie]);R(b[ie],se,V,null,U,$,Q,K,W)}q>oe?Ct(b,U,$,!0,!1,J):y(P,V,H,U,$,Q,K,W,J)},Kt=(b,P,V,H,U,$,Q,K,W)=>{let q=0;const oe=P.length;let J=b.length-1,ie=oe-1;for(;q<=J&&q<=ie;){const se=b[q],le=P[q]=W?Xn(P[q]):xt(P[q]);if(Gt(se,le))R(se,le,V,null,U,$,Q,K,W);else break;q++}for(;q<=J&&q<=ie;){const se=b[J],le=P[ie]=W?Xn(P[ie]):xt(P[ie]);if(Gt(se,le))R(se,le,V,null,U,$,Q,K,W);else break;J--,ie--}if(q>J){if(q<=ie){const se=ie+1,le=se<oe?P[se].el:H;for(;q<=ie;)R(null,P[q]=W?Xn(P[q]):xt(P[q]),V,le,U,$,Q,K,W),q++}}else if(q>ie)for(;q<=J;)Ue(b[q],U,$,!0),q++;else{const se=q,le=q,Re=new Map;for(q=le;q<=ie;q++){const It=P[q]=W?Xn(P[q]):xt(P[q]);It.key!=null&&Re.set(It.key,q)}let Ae,st=0;const et=ie-le+1;let it=!1,dt=0;const Hn=new Array(et);for(q=0;q<et;q++)Hn[q]=0;for(q=se;q<=J;q++){const It=b[q];if(st>=et){Ue(It,U,$,!0);continue}let Bt;if(It.key!=null)Bt=Re.get(It.key);else for(Ae=le;Ae<=ie;Ae++)if(Hn[Ae-le]===0&&Gt(It,P[Ae])){Bt=Ae;break}Bt===void 0?Ue(It,U,$,!0):(Hn[Bt-le]=q+1,Bt>=dt?dt=Bt:it=!0,R(It,P[Bt],V,null,U,$,Q,K,W),st++)}const ss=it?Yw(Hn):Ts;for(Ae=ss.length-1,q=et-1;q>=0;q--){const It=le+q,Bt=P[It],is=P[It+1],li=It+1<oe?is.el||is.placeholder:H;Hn[q]===0?R(null,Bt,V,li,U,$,Q,K,W):it&&(Ae<0||q!==ss[Ae]?Ut(Bt,V,li,2):Ae--)}}},Ut=(b,P,V,H,U=null)=>{const{el:$,type:Q,transition:K,children:W,shapeFlag:q}=b;if(q&6){Ut(b.component.subTree,P,V,H);return}if(q&128){b.suspense.move(P,V,H);return}if(q&64){Q.move(b,P,V,ne);return}if(Q===Mt){r($,P,V);for(let J=0;J<W.length;J++)Ut(W[J],P,V,H);r(b.anchor,P,V);return}if(Q===Vi){A(b,P,V);return}if(H!==2&&q&1&&K)if(H===0)K.beforeEnter($),r($,P,V),at(()=>K.enter($),U);else{const{leave:J,delayLeave:ie,afterLeave:se}=K,le=()=>{b.ctx.isUnmounted?s($):r($,P,V)},Re=()=>{J($,()=>{le(),se&&se()})};ie?ie($,le,Re):Re()}else r($,P,V)},Ue=(b,P,V,H=!1,U=!1)=>{const{type:$,props:Q,ref:K,children:W,dynamicChildren:q,shapeFlag:oe,patchFlag:J,dirs:ie,cacheIndex:se}=b;if(J===-2&&(U=!1),K!=null&&(On(),Ss(K,null,V,b,!0),Nn()),se!=null&&(P.renderCache[se]=void 0),oe&256){P.ctx.deactivate(b);return}const le=oe&1&&ie,Re=!Ur(b);let Ae;if(Re&&(Ae=Q&&Q.onVnodeBeforeUnmount)&&Pt(Ae,P,b),oe&6)nn(b.component,V,H);else{if(oe&128){b.suspense.unmount(V,H);return}le&&on(b,null,P,"beforeUnmount"),oe&64?b.type.remove(b,P,V,ne,H):q&&!q.hasOnce&&($!==Mt||J>0&&J&64)?Ct(q,P,V,!1,!0):($===Mt&&J&384||!U&&oe&16)&&Ct(W,P,V),H&&Be(b)}(Re&&(Ae=Q&&Q.onVnodeUnmounted)||le)&&at(()=>{Ae&&Pt(Ae,P,b),le&&on(b,null,P,"unmounted")},V)},Be=b=>{const{type:P,el:V,anchor:H,transition:U}=b;if(P===Mt){jn(V,H);return}if(P===Vi){k(b);return}const $=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,W=()=>Q(V,$);K?K(b.el,$,W):W()}else $()},jn=(b,P)=>{let V;for(;b!==P;)V=g(b),s(b),b=V;s(P)},nn=(b,P,V)=>{const{bum:H,scope:U,job:$,subTree:Q,um:K,m:W,a:q,parent:oe,slots:{__:J}}=b;Sa(W),Sa(q),H&&bs(H),oe&&ce(J)&&J.forEach(ie=>{oe.renderCache[ie]=void 0}),U.stop(),$&&($.flags|=8,Ue(Q,b,P,V)),K&&at(K,P),at(()=>{b.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ct=(b,P,V,H=!1,U=!1,$=0)=>{for(let Q=$;Q<b.length;Q++)Ue(b[Q],P,V,H,U)},B=b=>{if(b.shapeFlag&6)return B(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const P=g(b.anchor||b.el),V=P&&P[_w];return V?g(V):P};let Z=!1;const Y=(b,P,V)=>{b==null?P._vnode&&Ue(P._vnode,null,null,!0):R(P._vnode||null,b,P,null,null,null,V),P._vnode=b,Z||(Z=!0,Vf(),Aa(),Z=!1)},ne={p:R,um:Ue,m:Ut,r:Be,mt:de,mc:y,pc:te,pbc:v,n:B,o:t};let ye,Pe;return e&&([ye,Pe]=e(ne)),{render:Y,hydrate:ye,createApp:Hw(Y,ye)}}function Yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Vm(o,c)),c.type===Hr&&(c.el=o.el),c.type===Ye&&!c.el&&(c.el=o.el)}}function Yw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Lm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lm(e)}function Sa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xw=Symbol.for("v-scx"),Zw=()=>nt(Xw);function eT(t,e){return Ju(t,null,e)}function jr(t,e,n){return Ju(t,e,n)}function Ju(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=rt({},n),l=e&&r||!e&&i!=="post";let h;if(Hs){if(i==="sync"){const m=Zw();h=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=fn,m.resume=fn,m.pause=fn,m}}const u=ht;c.call=(m,I,R)=>Zt(m,u,I,R);let d=!1;i==="post"?c.scheduler=m=>{at(m,u&&u.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(m,I)=>{I?m():qu(m)}),c.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=pw(t,e,c);return Hs&&(h?h.push(g):l&&g()),g}function tT(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Fm(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=zr(this),c=Ju(s,i.bind(r),n);return o(),c}function Fm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const nT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${Zr(e)}Modifiers`];function rT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&nT(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Fe(u)?u.trim():u)),o.number&&(s=n.map(Pv)));let c,l=r[c=Hc(e)]||r[c=Hc(Wt(e))];!l&&i&&(l=r[c=Hc(Zr(e))]),l&&Zt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Zt(h,t,6,s)}}function Um(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const u=Um(h,e,!0);u&&(c=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):rt(o,i),ke(t)&&r.set(t,o),o)}function rc(t,e){return!t||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Zr(e))||Ce(t,e))}function Xc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:u,props:d,data:g,setupState:m,ctx:I,inheritAttrs:R}=t,N=ba(t);let D,O;try{if(n.shapeFlag&4){const k=s||r,M=k;D=xt(h.call(M,k,u,d,m,g,I)),O=c}else{const k=e;D=xt(k.length>1?k(d,{attrs:c,slots:o,emit:l}):k(d,null)),O=e.props?c:iT(c)}}catch(k){Li.length=0,ti(k,t,1),D=qe(Ye)}let A=D;if(O&&R!==!1){const k=Object.keys(O),{shapeFlag:M}=A;k.length&&M&7&&(i&&k.some(ku)&&(O=oT(O,i)),A=Mn(A,O,!1,!0))}return n.dirs&&(A=Mn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Us(A,n.transition),D=A,ba(N),D}function sT(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(js(s)){if(s.type!==Ye||s.children==="v-if"){if(n)return;n=s}}else return}return n}const iT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ho(n))&&((e||(e={}))[n]=t[n]);return e},oT=(t,e)=>{const n={};for(const r in t)(!ku(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Kf(r,o,h):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==r[g]&&!rc(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Kf(r,o,h):!0:!!o;return!1}function Kf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rc(n,i))return!0}return!1}function sc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ca=t=>t.__isSuspense;let Ml=0;const cT={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,h){if(t==null)lT(e,n,r,s,i,o,c,l,h);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}uT(t,e,n,r,s,o,c,l,h)}},hydrate:hT,normalize:fT},Yu=cT;function Xi(t,e){const n=t.props&&t.props[e];he(n)&&n()}function lT(t,e,n,r,s,i,o,c,l){const{p:h,o:{createElement:u}}=l,d=u("div"),g=t.suspense=Bm(t,s,r,e,d,n,i,o,c,l);h(null,g.pendingBranch=t.ssContent,d,null,r,g,i,o),g.deps>0?(Xi(t,"onPending"),Xi(t,"onFallback"),h(null,t.ssFallback,e,n,r,null,i,o),Cs(g,t.ssFallback)):g.resolve(!1,!0)}function uT(t,e,n,r,s,i,o,c,{p:l,um:h,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,m=e.ssFallback,{activeBranch:I,pendingBranch:R,isInFallback:N,isHydrating:D}=d;if(R)d.pendingBranch=g,Gt(g,R)?(l(R,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():N&&(D||(l(I,m,n,r,s,null,i,o,c),Cs(d,m)))):(d.pendingId=Ml++,D?(d.isHydrating=!1,d.activeBranch=R):h(R,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),N?(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():(l(I,m,n,r,s,null,i,o,c),Cs(d,m))):I&&Gt(g,I)?(l(I,g,n,r,s,d,i,o,c),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0&&d.resolve()));else if(I&&Gt(g,I))l(I,g,n,r,s,d,i,o,c),Cs(d,g);else if(Xi(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=Ml++,l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0)d.resolve();else{const{timeout:O,pendingId:A}=d;O>0?setTimeout(()=>{d.pendingId===A&&d.fallback(m)},O):O===0&&d.fallback(m)}}function Bm(t,e,n,r,s,i,o,c,l,h,u=!1){const{p:d,m:g,um:m,n:I,o:{parentNode:R,remove:N}}=h;let D;const O=dT(t);O&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const A=t.props?Mg(t.props.timeout):void 0,k=i,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Ml++,timeout:typeof A=="number"?A:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(F=!1,w=!1){const{vnode:y,activeBranch:_,pendingBranch:v,pendingId:C,effects:S,parentComponent:T,container:de}=M;let me=!1;M.isHydrating?M.isHydrating=!1:F||(me=_&&v.transition&&v.transition.mode==="out-in",me&&(_.transition.afterLeave=()=>{C===M.pendingId&&(g(v,de,i===k?I(_):i,0),Cl(S))}),_&&(R(_.el)===de&&(i=I(_)),m(_,T,M,!0)),me||g(v,de,i,0)),Cs(M,v),M.pendingBranch=null,M.isInFallback=!1;let X=M.parent,re=!1;for(;X;){if(X.pendingBranch){X.effects.push(...S),re=!0;break}X=X.parent}!re&&!me&&Cl(S),M.effects=[],O&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),Xi(y,"onResolve")},fallback(F){if(!M.pendingBranch)return;const{vnode:w,activeBranch:y,parentComponent:_,container:v,namespace:C}=M;Xi(w,"onFallback");const S=I(y),T=()=>{M.isInFallback&&(d(null,F,v,S,_,null,C,c,l),Cs(M,F))},de=F.transition&&F.transition.mode==="out-in";de&&(y.transition.afterLeave=T),M.isInFallback=!0,m(y,_,null,!0),de||T()},move(F,w,y){M.activeBranch&&g(M.activeBranch,F,w,y),M.container=F},next(){return M.activeBranch&&I(M.activeBranch)},registerDep(F,w,y){const _=!!M.pendingBranch;_&&M.deps++;const v=F.vnode.el;F.asyncDep.catch(C=>{ti(C,F,0)}).then(C=>{if(F.isUnmounted||M.isUnmounted||M.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:S}=F;Ll(F,C),v&&(S.el=v);const T=!v&&F.subTree.el;w(F,S,R(v||F.subTree.el),v?null:I(F.subTree),M,o,y),T&&N(T),sc(F,S.el),_&&--M.deps===0&&M.resolve()})},unmount(F,w){M.isUnmounted=!0,M.activeBranch&&m(M.activeBranch,n,F,w),M.pendingBranch&&m(M.pendingBranch,n,F,w)}};return M}function hT(t,e,n,r,s,i,o,c,l){const h=e.suspense=Bm(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),u=l(t,h.pendingBranch=e.ssContent,n,h,i,o);return h.deps===0&&h.resolve(!1,!0),u}function fT(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=zf(r?n.default:n),t.ssFallback=r?zf(n.fallback):qe(Ye)}function zf(t){let e;if(he(t)){const n=Bs&&t._c;n&&(t._d=!1,cn()),t=t(),n&&(t._d=!0,e=Ot,Hm())}return ce(t)&&(t=sT(t)),t=xt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function jm(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Cl(t)}function Cs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,sc(r,s))}function dT(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Mt=Symbol.for("v-fgt"),Hr=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Vi=Symbol.for("v-stc"),Li=[];let Ot=null;function cn(t=!1){Li.push(Ot=t?null:[])}function Hm(){Li.pop(),Ot=Li[Li.length-1]||null}let Bs=1;function Gf(t,e=!1){Bs+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function $m(t){return t.dynamicChildren=Bs>0?Ot||Ts:null,Hm(),Bs>0&&Ot&&Ot.push(t),t}function pT(t,e,n,r,s,i){return $m(Wm(t,e,n,r,s,i,!0))}function tr(t,e,n,r,s){return $m(qe(t,e,n,r,s,!0))}function js(t){return t?t.__v_isVNode===!0:!1}function Gt(t,e){return t.type===e.type&&t.key===e.key}const qm=({key:t})=>t??null,oa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Le(t)||he(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function Wm(t,e=null,n=null,r=0,s=null,i=t===Mt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qm(e),ref:e&&oa(e),scopeId:am,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return c?(Xu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Bs>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const qe=gT;function gT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wm)&&(t=Ye),js(t)){const c=Mn(t,e,!0);return n&&Xu(c,n),Bs>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(IT(t)&&(t=t.__vccOpts),e){e=Km(e);let{class:c,style:l}=e;c&&!Fe(c)&&(e.class=Za(c)),ke(l)&&(Hu(l)&&!ce(l)&&(l=rt({},l)),e.style=Xa(l))}const o=Fe(t)?1:Ca(t)?128:cm(t)?64:ke(t)?4:he(t)?2:0;return Wm(t,e,n,r,s,o,i,!0)}function Km(t){return t?Hu(t)||Cm(t)?rt({},t):t:null}function Mn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Gm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&qm(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(oa(e)):[i,oa(e)]:oa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Us(u,l.clone(u)),u}function zm(t=" ",e=0){return qe(Hr,null,t,e)}function MN(t,e){const n=qe(Vi,null,t);return n.staticCount=e,n}function xN(t="",e=!1){return e?(cn(),tr(Ye,null,t)):qe(Ye,null,t)}function xt(t){return t==null||typeof t=="boolean"?qe(Ye):ce(t)?qe(Mt,null,t.slice()):js(t)?Xn(t):qe(Hr,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function Xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cm(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),r&64?(n=16,e=[zm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Za([e.class,r.class]));else if(s==="style")e.style=Xa([e.style,r.style]);else if(ho(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){Zt(t,e,7,[n,r])}const mT=bm();let _T=0;function yT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mT,i={uid:_T++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(r,s),emitsOptions:Um(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rT.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const es=()=>ht||Lt;let Pa,xl;{const t=Ya(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Pa=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),xl=e("__VUE_SSR_SETTERS__",n=>Hs=n)}const zr=t=>{const e=ht;return Pa(t),t.scope.on(),()=>{t.scope.off(),Pa(e)}},Vl=()=>{ht&&ht.scope.off(),Pa(null)};function Qm(t){return t.vnode.shapeFlag&4}let Hs=!1;function ET(t,e=!1,n=!1){e&&xl(e);const{props:r,children:s}=t.vnode,i=Qm(t);$w(t,r,i,e),zw(t,s,n||e);const o=i?vT(t,e):void 0;return e&&xl(!1),o}function vT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xw);const{setup:r}=n;if(r){On();const s=t.setupContext=r.length>1?TT(t):null,i=zr(t),o=fo(r,t,0,[t.props,s]),c=Nu(o);if(Nn(),i(),(c||t.sp)&&!Ur(t)&&Ku(t),c){if(o.then(Vl,Vl),e)return o.then(l=>{Ll(t,l)}).catch(l=>{ti(l,t,0)});t.asyncDep=o}else Ll(t,o)}else Jm(t)}function Ll(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=tm(e)),Jm(t)}function Jm(t,e,n){const r=t.type;t.render||(t.render=r.render||fn);{const s=zr(t);On();try{Vw(t)}finally{Nn(),s()}}}const wT={get(t,e){return Et(t,"get",""),t[e]}};function TT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wT),slots:t.slots,emit:t.emit,expose:e}}function ic(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tm($u(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xi)return xi[n](t)},has(e,n){return n in e||n in xi}})):t.proxy}function Fl(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function IT(t){return he(t)&&"__vccOpts"in t}const Vt=(t,e)=>fw(t,e,Hs);function wt(t,e,n){const r=arguments.length;return r===2?ke(e)&&!ce(e)?js(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&js(n)&&(n=[n]),qe(t,e,n))}const AT="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ul;const Qf=typeof window<"u"&&window.trustedTypes;if(Qf)try{Ul=Qf.createPolicy("vue",{createHTML:t=>t})}catch{}const Ym=Ul?t=>Ul.createHTML(t):t=>t,bT="http://www.w3.org/2000/svg",RT="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Jf=bn&&bn.createElement("template"),ST={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS(bT,t):e==="mathml"?bn.createElementNS(RT,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Jf.innerHTML=Ym(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Jf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",Ii="animation",Zi=Symbol("_vtc"),Xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},CT=rt({},lm,Xm),PT=t=>(t.displayName="Transition",t.props=CT,t),kT=PT((t,{slots:e})=>wt(vw,OT(t),e)),Or=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yf=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function OT(t){const e={};for(const S in t)S in Xm||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,I=NT(s),R=I&&I[0],N=I&&I[1],{onBeforeEnter:D,onEnter:O,onEnterCancelled:A,onLeave:k,onLeaveCancelled:M,onBeforeAppear:F=D,onAppear:w=O,onAppearCancelled:y=A}=e,_=(S,T,de,me)=>{S._enterCancelled=me,Nr(S,T?u:c),Nr(S,T?h:o),de&&de()},v=(S,T)=>{S._isLeaving=!1,Nr(S,d),Nr(S,m),Nr(S,g),T&&T()},C=S=>(T,de)=>{const me=S?w:O,X=()=>_(T,S,de);Or(me,[T,X]),Xf(()=>{Nr(T,S?l:i),In(T,S?u:c),Yf(me)||Zf(T,r,R,X)})};return rt(e,{onBeforeEnter(S){Or(D,[S]),In(S,i),In(S,o)},onBeforeAppear(S){Or(F,[S]),In(S,l),In(S,h)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const de=()=>v(S,T);In(S,d),S._enterCancelled?(In(S,g),nd()):(nd(),In(S,g)),Xf(()=>{S._isLeaving&&(Nr(S,d),In(S,m),Yf(k)||Zf(S,r,N,de))}),Or(k,[S,de])},onEnterCancelled(S){_(S,!1,void 0,!0),Or(A,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),Or(y,[S])},onLeaveCancelled(S){v(S),Or(M,[S])}})}function NT(t){if(t==null)return null;if(ke(t))return[Zc(t.enter),Zc(t.leave)];{const e=Zc(t);return[e,e]}}function Zc(t){return Mg(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Zi]||(t[Zi]=new Set)).add(e)}function Nr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Zi];n&&(n.delete(e),n.size||(t[Zi]=void 0))}function Xf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let DT=0;function Zf(t,e,n,r){const s=t._endId=++DT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=MT(t,e);if(!o)return r();const h=o+"end";let u=0;const d=()=>{t.removeEventListener(h,g),i()},g=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),t.addEventListener(h,g)}function MT(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${zn}Delay`),i=r(`${zn}Duration`),o=ed(s,i),c=r(`${Ii}Delay`),l=r(`${Ii}Duration`),h=ed(c,l);let u=null,d=0,g=0;e===zn?o>0&&(u=zn,d=o,g=i.length):e===Ii?h>0&&(u=Ii,d=h,g=l.length):(d=Math.max(o,h),u=d>0?o>h?zn:Ii:null,g=u?u===zn?i.length:l.length:0);const m=u===zn&&/\b(transform|all)(,|$)/.test(r(`${zn}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:m}}function ed(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>td(n)+td(t[r])))}function td(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nd(){return document.body.offsetHeight}function xT(t,e,n){const r=t[Zi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rd=Symbol("_vod"),VT=Symbol("_vsh"),LT=Symbol(""),FT=/(^|;)\s*display\s*:/;function UT(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&aa(r,c,"")}else for(const o in e)n[o]==null&&aa(r,o,"");for(const o in n)o==="display"&&(i=!0),aa(r,o,n[o])}else if(s){if(e!==n){const o=r[LT];o&&(n+=";"+o),r.cssText=n,i=FT.test(n)}}else e&&t.removeAttribute("style");rd in t&&(t[rd]=i?r.display:"",t[VT]&&(r.display="none"))}const sd=/\s*!important$/;function aa(t,e,n){if(ce(n))n.forEach(r=>aa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BT(t,e);sd.test(n)?t.setProperty(Zr(r),n.replace(sd,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],el={};function BT(t,e){const n=el[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return el[e]=r;r=Ja(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return el[e]=i}return e}const od="http://www.w3.org/1999/xlink";function ad(t,e,n,r,s,i=Vv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||i&&!xg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function cd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ym(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Zm(t,e,n,r){t.addEventListener(e,n,r)}function jT(t,e,n,r){t.removeEventListener(e,n,r)}const ld=Symbol("_vei");function HT(t,e,n,r,s=null){const i=t[ld]||(t[ld]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=$T(e);if(r){const h=i[e]=KT(r,s);Zm(t,c,h,l)}else o&&(jT(t,c,o,l),i[e]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;function $T(t){let e;if(ud.test(t)){e={};let r;for(;r=t.match(ud);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zr(t.slice(2)),e]}let tl=0;const qT=Promise.resolve(),WT=()=>tl||(qT.then(()=>tl=0),tl=Date.now());function KT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zt(zT(r,n.value),e,5,[r])};return n.value=t,n.attached=WT(),n}function zT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,GT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?xT(t,r,o):e==="style"?UT(t,n,r):ho(e)?ku(e)||HT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):QT(t,e,r,o))?(cd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(r))?cd(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ad(t,e,r,o))};function QT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&hd(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hd(e)&&Fe(n)?!1:e in t}const fd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>bs(e,n):e},nl=Symbol("_assign"),VN={created(t,{value:e},n){t.checked=Ea(e,n.props.value),t[nl]=fd(n),Zm(t,"change",()=>{t[nl](JT(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[nl]=fd(r),e!==n&&(t.checked=Ea(e,r.props.value))}};function JT(t){return"_value"in t?t._value:t.value}const YT=["ctrl","shift","alt","meta"],XT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>YT.some(n=>t[`${n}Key`]&&!e.includes(n))},LN=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=XT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},e_=rt({patchProp:GT},ST);let Fi,dd=!1;function ZT(){return Fi||(Fi=Qw(e_))}function eI(){return Fi=dd?Fi:Jw(e_),dd=!0,Fi}const tI=(...t)=>{const e=ZT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=n_(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,t_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},nI=(...t)=>{const e=eI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=n_(r);if(s)return n(s,!0,t_(s))},e};function t_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function n_(t){return Fe(t)?document.querySelector(t):t}const rI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,sI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,iI=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function oI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){aI(t);return}return e}function aI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ka(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!iI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(rI.test(t)||sI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,oI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const cI=/#/g,lI=/&/g,uI=/\//g,hI=/=/g,Zu=/\+/g,fI=/%5e/gi,dI=/%60/gi,pI=/%7c/gi,gI=/%20/gi;function mI(t){return encodeURI(""+t).replace(pI,"|")}function Bl(t){return mI(typeof t=="string"?t:JSON.stringify(t)).replace(Zu,"%2B").replace(gI,"+").replace(cI,"%23").replace(lI,"%26").replace(dI,"`").replace(fI,"^").replace(uI,"%2F")}function rl(t){return Bl(t).replace(hI,"%3D")}function Oa(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function _I(t){return Oa(t.replace(Zu," "))}function yI(t){return Oa(t.replace(Zu," "))}function r_(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=_I(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=yI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function EI(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${rl(t)}=${Bl(n)}`).join("&"):`${rl(t)}=${Bl(e)}`:rl(t)}function vI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>EI(e,t[e])).filter(Boolean).join("&")}const wI=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,TI=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,II=/^([/\\]\s*){2,}[^/\\]/,AI=/^[\s\0]*(blob|data|javascript|vbscript):$/i,bI=/\/$|\/\?|\/#/,RI=/^\.?\//;function ts(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?wI.test(t):TI.test(t)||(e.acceptRelative?II.test(t):!1)}function SI(t){return!!t&&AI.test(t)}function jl(t="",e){return e?bI.test(t):t.endsWith("/")}function eo(t="",e){if(!e)return(jl(t)?t.slice(0,-1):t)||"/";if(!jl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function CI(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(jl(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function PI(t,e){if(i_(e)||ts(t))return t;const n=eo(e);return t.startsWith(n)?t:eh(n,t)}function pd(t,e){if(i_(e))return t;const n=eo(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function s_(t,e){const n=c_(t),r={...r_(n.search),...e};return n.search=vI(r),NI(n)}function i_(t){return!t||t==="/"}function kI(t){return t&&t!=="/"}function eh(t,...e){let n=t||"";for(const r of e.filter(s=>kI(s)))if(n){const s=r.replace(RI,"");n=CI(n)+s}else n=r;return n}function o_(...t){var o,c,l,h;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[d,g]of u.split(e).entries())if(!(!g||g===".")){if(g===".."){if(r.length===1&&ts(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+g;continue}r.push(g),s++}}let i=r.join("/");return s>=0?(c=n[0])!=null&&c.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(h=n[n.length-1])!=null&&h.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function OI(t,e){return Oa(eo(t))===Oa(eo(e))}const a_=Symbol.for("ufo:protocolRelative");function c_(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!ts(t,{acceptRelative:!0}))return gd(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",c=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(c=c.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:h,hash:u}=gd(c);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:h,hash:u,[a_]:!r}}function gd(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function NI(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[a_]?(t.protocol||"")+"//":"")+s+i+e+n+r}class DI extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function MI(t){var l,h,u,d,g;const e=((l=t.error)==null?void 0:l.message)||((h=t.error)==null?void 0:h.toString())||"",n=((u=t.request)==null?void 0:u.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,c=new DI(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(c,m,{get(){return t[m]}});for(const[m,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(c,m,{get(){return t.response&&t.response[I]}});return c}const xI=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function md(t="GET"){return xI.has(t.toUpperCase())}function VI(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const LI=new Set(["image/svg","application/xml","application/xhtml","application/html"]),FI=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function UI(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return FI.test(e)?"json":LI.has(e)||e.startsWith("text/")?"text":"blob"}function BI(t,e,n,r){const s=jI((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function jI(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Jo(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const HI=new Set([408,409,425,429,500,502,503,504]),$I=new Set([101,204,205,304]);function l_(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(c){const l=c.error&&c.error.name==="AbortError"&&!c.options.timeout||!1;if(c.options.retry!==!1&&!l){let u;typeof c.options.retry=="number"?u=c.options.retry:u=md(c.options.method)?0:1;const d=c.response&&c.response.status||500;if(u>0&&(Array.isArray(c.options.retryStatusCodes)?c.options.retryStatusCodes.includes(d):HI.has(d))){const g=typeof c.options.retryDelay=="function"?c.options.retryDelay(c):c.options.retryDelay||0;return g>0&&await new Promise(m=>setTimeout(m,g)),i(c.request,{...c.options,retry:u-1})}}const h=MI(c);throw Error.captureStackTrace&&Error.captureStackTrace(h,i),h}const i=async function(l,h={}){const u={request:l,options:BI(l,h,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await Jo(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=PI(u.request,u.options.baseURL)),u.options.query&&(u.request=s_(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&md(u.options.method)&&(VI(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let d;if(!u.options.signal&&u.options.timeout){const m=new r;d=setTimeout(()=>{const I=new Error("[TimeoutError]: The operation was aborted due to timeout");I.name="TimeoutError",I.code=23,m.abort(I)},u.options.timeout),u.options.signal=m.signal}try{u.response=await e(u.request,u.options)}catch(m){return u.error=m,u.options.onRequestError&&await Jo(u,u.options.onRequestError),await s(u)}finally{d&&clearTimeout(d)}if((u.response.body||u.response._bodyInit)&&!$I.has(u.response.status)&&u.options.method!=="HEAD"){const m=(u.options.parseResponse?"json":u.options.responseType)||UI(u.response.headers.get("content-type")||"");switch(m){case"json":{const I=await u.response.text(),R=u.options.parseResponse||ka;u.response._data=R(I);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[m]()}}return u.options.onResponse&&await Jo(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await Jo(u,u.options.onResponseError),await s(u)):u.response},o=async function(l,h){return(await i(l,h))._data};return o.raw=i,o.native=(...c)=>e(...c),o.create=(c={},l={})=>l_({...t,...l,defaults:{...t.defaults,...l.defaults,...c}}),o}const Na=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),qI=Na.fetch?(...t)=>Na.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),WI=Na.Headers,KI=Na.AbortController,zI=l_({fetch:qI,Headers:WI,AbortController:KI}),GI=zI,QI=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},th=()=>QI().app,JI=()=>th().baseURL,YI=()=>th().buildAssetsDir,nh=(...t)=>o_(u_(),YI(),...t),u_=(...t)=>{const e=th(),n=e.cdnURL||e.baseURL;return t.length?o_(n,...t):n};globalThis.__buildAssetsURL=nh,globalThis.__publicAssetsURL=u_;globalThis.$fetch||(globalThis.$fetch=GI.create({baseURL:JI()}));"global"in globalThis||(globalThis.global=globalThis);function Hl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Hl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const XI={run:t=>t()},ZI=()=>XI,h_=typeof console.createTask<"u"?console.createTask:ZI;function eA(t,e){const n=e.shift(),r=h_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function tA(t,e){const n=e.shift(),r=h_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function sl(t,e){for(const n of[...t])n(e)}class nA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Hl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Hl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(eA,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(tA,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&sl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&sl(this._after,s)}):(this._after&&s&&sl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function f_(){return new nA}function rA(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,c)=>{c||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,c)=>{r(o),e=o;try{return s?s.run(o,c):c()}finally{n||(e=void 0)}},async callAsync(o,c){e=o;const l=()=>{e=o},h=()=>e===o?l:void 0;$l.add(h);try{const u=s?s.run(o,c):c();return n||(e=void 0),await u}finally{$l.delete(h)}}}}function sA(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=rA({...t,...r})),e[n]}}}const Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},_d="__unctx__",iA=Da[_d]||(Da[_d]=sA()),oA=(t,e={})=>iA.get(t,e),yd="__unctx_async_handlers__",$l=Da[yd]||(Da[yd]=new Set);function Ps(t){const e=[];for(const s of $l){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const aA=!1,Ed=!1,cA=!1,FN={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},UN={value:null,errorValue:null,deep:!0},lA=null,BN={},uA="#__nuxt",d_="nuxt-app",vd=36e5,hA="vite:preloadError";function p_(t=d_){return oA(t,{asyncContext:!1})}const fA="__nuxt_plugin";function dA(t){var s;let e=0;const n={_id:t.id||d_||"nuxt-app",_scope:Mu(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.7"},get vue(){return n.vueApp.version}},payload:hn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:hn({}),state:Fn({}),once:new Set,_errors:hn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!xu()?n._scope.run(()=>wd(n,i)):wd(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:hn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=f_(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const c="$"+i;Yo(n,c,o),Yo(n.vueApp.config.globalProperties,c,o)},Yo(n.vueApp,"$nuxt",n),Yo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(hA,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Je);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function pA(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function gA(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function mA(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function c(l){var u;const h=((u=l.dependsOn)==null?void 0:u.filter(d=>e.some(g=>g._name===d)&&!n.has(d)))??[];if(h.length>0)r.push([new Set(h),l]);else{const d=gA(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([g,m])=>{g.has(l._name)&&(g.delete(l._name),g.size===0&&(o++,await c(m)))})))});l.parallel?s.push(d.catch(g=>i.push(g))):await d}}for(const l of e)pA(t,l);for(const l of e)await c(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Nt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[fA]:!0,_name:e})}const _A=Nt;function wd(t,e,n){const r=()=>e();return p_(t._id).set(t),t.vueApp.runWithContext(r)}function yA(t){var n;let e;return nc()&&(e=(n=es())==null?void 0:n.appContext.app.$nuxt),e||(e=p_(t).tryUse()),e||null}function Je(t){const e=yA(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function mo(t){return Je().$config}function Yo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function EA(t,e){return{ctx:{table:t},matchAll:n=>m_(n,t)}}function g_(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,g_(s)])):new Map(Object.entries(t[n]));return e}function vA(t){return EA(g_(t))}function m_(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Td(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Td(e.dynamic))if(t.startsWith(i+"/")){const c="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...m_(c,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Td(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function il(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function ql(t,e,n=".",r){if(!il(e))return ql(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:il(o)&&il(s[i])?s[i]=ql(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function wA(t){return(...e)=>e.reduce((n,r)=>ql(n,r,"",t),{})}const __=wA();function TA(t,e){try{return e in t}catch{return!1}}class Wl extends Error{constructor(n,r={}){super(n,r);Kn(this,"statusCode",500);Kn(this,"fatal",!1);Kn(this,"unhandled",!1);Kn(this,"statusMessage");Kn(this,"data");Kn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Kl(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=y_(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Kn(Wl,"__h3_error__",!0);function IA(t){if(typeof t=="string")return new Wl(t);if(AA(t))return t;const e=new Wl(t.message??t.statusMessage??"",{cause:t.cause||t});if(TA(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Kl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Kl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;y_(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function AA(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const bA=/[^\u0009\u0020-\u007E]/g;function y_(t=""){return t.replace(bA,"")}function Kl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const E_=Symbol("layout-meta"),Gr=Symbol("route"),Ft=()=>{var t;return(t=Je())==null?void 0:t.$router},oc=()=>nc()?nt(Gr,Je()._route):Je()._route;function jN(t){return t}const RA=()=>{try{if(Je()._processingMiddleware)return!0}catch{return!1}return!1},HN=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?SA(t):Ft().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:h={}}=e.open,u=Object.entries(h).filter(([d,g])=>g!==void 0).map(([d,g])=>`${d.toLowerCase()}=${g}`).join(", ");return open(n,l,u),Promise.resolve()}const r=ts(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&SI(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=RA();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:h,hash:u}=c_(t);return{path:l,...h&&{query:r_(h)},...u&&{hash:u},replace:!0}}return{...t,replace:!0}}return t}const o=Ft(),c=Je();return s?(c._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?c.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function SA(t){return s_(t.path||"",t.query||{})+(t.hash||"")}const v_="__nuxt_error",ac=()=>nm(Je().payload,"error"),xr=t=>{const e=$r(t);try{const n=Je(),r=ac();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},CA=async(t={})=>{const e=Je(),n=ac();e.callHook("app:error:cleared",t),t.redirect&&await Ft().replace(t.redirect),n.value=lA},w_=t=>!!t&&typeof t=="object"&&v_ in t,$r=t=>{const e=IA(t);return Object.defineProperty(e,v_,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let T_;const _o=t=>T_=t,I_=Symbol();function zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ui;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ui||(Ui={}));function PA(){const t=Mu(!0),e=t.run(()=>Xt({}));let n=[],r=[];const s=$u({install(i){_o(s),s._a=i,i.provide(I_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const A_=()=>{};function Id(t,e,n,r=A_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&xu()&&Uv(s),s}function fs(t,...e){t.slice().forEach(n=>{n(...e)})}const kA=t=>t(),Ad=Symbol(),ol=Symbol();function Gl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];zl(s)&&zl(r)&&t.hasOwnProperty(n)&&!Le(r)&&!kn(r)?t[n]=Gl(s,r):t[n]=r}return t}const OA=Symbol();function NA(t){return!zl(t)||!Object.prototype.hasOwnProperty.call(t,OA)}const{assign:Qn}=Object;function DA(t){return!!(Le(t)&&t.effect)}function MA(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const u=cw(n.state.value[t]);return Qn(u,i,Object.keys(o||{}).reduce((d,g)=>(d[g]=$u(Vt(()=>{_o(n);const m=n._s.get(t);return o[g].call(m,m)})),d),{}))}return l=b_(t,h,e,n,r,!0),l}function b_(t,e,n={},r,s,i){let o;const c=Qn({actions:{}},n),l={deep:!0};let h,u,d=[],g=[],m;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),Xt({});let R;function N(y){let _;h=u=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Ui.patchFunction,storeId:t,events:m}):(Gl(r.state.value[t],y),_={type:Ui.patchObject,payload:y,storeId:t,events:m});const v=R=Symbol();Kr().then(()=>{R===v&&(h=!0)}),u=!0,fs(d,_,r.state.value[t])}const D=i?function(){const{state:_}=n,v=_?_():{};this.$patch(C=>{Qn(C,v)})}:A_;function O(){o.stop(),d=[],g=[],r._s.delete(t)}const A=(y,_="")=>{if(Ad in y)return y[ol]=_,y;const v=function(){_o(r);const C=Array.from(arguments),S=[],T=[];function de(re){S.push(re)}function me(re){T.push(re)}fs(g,{args:C,name:v[ol],store:M,after:de,onError:me});let X;try{X=y.apply(this&&this.$id===t?this:M,C)}catch(re){throw fs(T,re),re}return X instanceof Promise?X.then(re=>(fs(S,re),re)).catch(re=>(fs(T,re),Promise.reject(re))):(fs(S,X),X)};return v[Ad]=!0,v[ol]=_,v},k={_p:r,$id:t,$onAction:Id.bind(null,g),$patch:N,$reset:D,$subscribe(y,_={}){const v=Id(d,y,_.detached,()=>C()),C=o.run(()=>jr(()=>r.state.value[t],S=>{(_.flush==="sync"?u:h)&&y({storeId:t,type:Ui.direct,events:m},S)},Qn({},l,_)));return v},$dispose:O},M=Fn(k);r._s.set(t,M);const w=(r._a&&r._a.runWithContext||kA)(()=>r._e.run(()=>(o=Mu()).run(()=>e({action:A}))));for(const y in w){const _=w[y];if(Le(_)&&!DA(_)||kn(_))i||(I&&NA(_)&&(Le(_)?_.value=I[y]:Gl(_,I[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const v=A(_,y);w[y]=v,c.actions[y]=_}}return Qn(M,w),Qn(Te(M),w),Object.defineProperty(M,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Qn(_,y)})}}),r._p.forEach(y=>{Qn(M,o.run(()=>y({store:M,app:r._a,pinia:r,options:c})))}),I&&i&&n.hydrate&&n.hydrate(M.$state,I),h=!0,u=!0,M}/*! #__NO_SIDE_EFFECTS__ */function $N(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=nc();return o=o||(l?nt(I_,null):null),o&&_o(o),o=T_,o._s.has(t)||(s?b_(t,e,r,o):MA(t,r,o)),o._s.get(t)}return i.$id=t,i}function bd(t){const e=VA(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const xA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function VA(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=xA.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const LA=-1,FA=-2,UA=-3,BA=-4,jA=-5,HA=-6;function $A(t,e){return qA(JSON.parse(t),e)}function qA(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===LA)return;if(i===UA)return NaN;if(i===BA)return 1/0;if(i===jA)return-1/0;if(i===HA)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const c=n[i];if(!c||typeof c!="object")r[i]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const l=c[0],h=e==null?void 0:e[l];if(h)return r[i]=h(s(c[1]));switch(l){case"Date":r[i]=new Date(c[1]);break;case"Set":const u=new Set;r[i]=u;for(let m=1;m<c.length;m+=1)u.add(s(c[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<c.length;m+=2)d.set(s(c[m]),s(c[m+1]));break;case"RegExp":r[i]=new RegExp(c[1],c[2]);break;case"Object":r[i]=Object(c[1]);break;case"BigInt":r[i]=BigInt(c[1]);break;case"null":const g=Object.create(null);r[i]=g;for(let m=1;m<c.length;m+=2)g[c[m]]=s(c[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],I=c[1],R=bd(I),N=new m(R);r[i]=N;break}case"ArrayBuffer":{const m=c[1],I=bd(m);r[i]=I;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(c.length);r[i]=l;for(let h=0;h<c.length;h+=1){const u=c[h];u!==FA&&(l[h]=s(u))}}else{const l={};r[i]=l;for(const h in c){const u=c[h];l[h]=s(u)}}return r[i]}return s(0)}const WA=new Set(["link","style","script","noscript"]),KA=new Set(["title","titleTemplate","script","style","noscript"]),Rd=new Set(["base","meta","link","style","script","noscript"]),zA=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),GA=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),QA=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),JA=new Set(["templateParams","htmlAttrs","bodyAttrs"]),YA=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const XA=["name","property","http-equiv"],ZA=new Set(["viewport","description","keywords","robots"]);function R_(t){const e=t.split(":");return e.length?YA.has(e[1]):!1}function Ql(t){const{props:e,tag:n}=t;if(GA.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of XA)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=ZA.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(KA.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Sd(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Ma(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Ma(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Ma(s[o],e,o);return i}return s}function eb(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...c]=i.split(":").map(l=>l.trim());o&&c.length&&n.set(o,c.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function S_(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=eb(n,r);return}if(QA.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function tb(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=S_({tag:t,props:{}},n);return r.key&&WA.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function nb(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Ma(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(tb(s,o))}),r.flat()}const Jl=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Cd={base:-10,title:10},rb={critical:-8,high:-1,low:2},Pd={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},sb=/@import/,Ai=t=>t===""||t===!0;function ib(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=rb[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Pd;if(e.tag in Cd)n=Cd[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Pd.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Ai(e.props.async)?n=s.script.async:e.props.src&&!Ai(e.props.defer)&&!Ai(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:Ai(e.props.defer)&&e.props.src&&!Ai(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&sb.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function kd(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function ob(t={}){var c;const e=f_();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:l=>kd(o,l),push(l,h){const u={...h||{}};delete u.head;const d=u._index??o._entryCount++,g={_i:d,input:l,options:u},m={_poll(I=!1){o.dirty=!0,!I&&i.add(d),e.callHook("entries:updated",o)},dispose(){r.delete(d)&&o.invalidate()},patch(I){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(g.input=I,r.set(d,g),m._poll())}};return m.patch(l),m},async resolveTags(){var m;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.size;){const I=i.values().next().value;i.delete(I);const R=r.get(I);if(R){const N={tags:nb(R.input,t.propResolvers||[]).map(D=>Object.assign(D,R.options)),entry:R};await e.callHook("entries:normalize",N),R._tags=N.tags.map((D,O)=>(D._w=ib(o,D),D._p=(R._i<<10)+O,D._d=Ql(D),D))}}let h=!1;l.entries.flatMap(I=>(I._tags||[]).map(R=>({...R,props:{...R.props}}))).sort(Jl).reduce((I,R)=>{const N=String(R._d||R._p);if(!I.has(N))return I.set(N,R);const D=I.get(N);if(((R==null?void 0:R.tagDuplicateStrategy)||(JA.has(R.tag)?"merge":null)||(R.key&&R.key===D.key?"merge":null))==="merge"){const A={...D.props};Object.entries(R.props).forEach(([k,M])=>A[k]=k==="style"?new Map([...D.props.style||new Map,...M]):k==="class"?new Set([...D.props.class||new Set,...M]):M),I.set(N,{...R,props:A})}else R._p>>10===D._p>>10&&R.tag==="meta"&&R_(N)?(I.set(N,Object.assign([...Array.isArray(D)?D:[D],R],R)),h=!0):(R._w===D._w?R._p>D._p:(R==null?void 0:R._w)<(D==null?void 0:D._w))&&I.set(N,R);return I},l.tagMap);const u=l.tagMap.get("title"),d=l.tagMap.get("titleTemplate");if(o._title=u==null?void 0:u.textContent,d){const I=d==null?void 0:d.textContent;if(o._titleTemplate=I,I){let R=typeof I=="function"?I(u==null?void 0:u.textContent):I;typeof R=="string"&&!o.plugins.has("template-params")&&(R=R.replace("%s",(u==null?void 0:u.textContent)||"")),u?R===null?l.tagMap.delete("title"):l.tagMap.set("title",{...u,textContent:R}):(d.tag="title",d.textContent=R)}}l.tags=Array.from(l.tagMap.values()),h&&(l.tags=l.tags.flat().sort(Jl)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const g=[];for(const I of l.tags){const{innerHTML:R,tag:N,props:D}=I;if(zA.has(N)&&!(Object.keys(D).length===0&&!I.innerHTML&&!I.textContent)&&!(N==="meta"&&!D.content&&!D["http-equiv"]&&!D.charset)){if(N==="script"&&R){if((m=D.type)!=null&&m.endsWith("json")){const O=typeof R=="string"?R:JSON.stringify(R);I.innerHTML=O.replace(/</g,"\\u003C")}else typeof R=="string"&&(I.innerHTML=R.replace(new RegExp(`</${N}`,"g"),`<\\/${N}`));I._d=Ql(I)}g.push(I)}}return g},invalidate(){for(const l of r.values())i.add(l._i);o.dirty=!0,e.callHook("entries:updated",o)}};return((t==null?void 0:t.plugins)||[]).forEach(l=>kd(o,l)),o.hooks.callHook("init",o),(c=t.init)==null||c.forEach(l=>l&&o.push(l)),o}const Zn="%separator",ab=new RegExp(`${Zn}(?:\\s*${Zn})*`,"g");function cb(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function Xo(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Zn);return t=t.replace(/%\w+(?:\.\w+)?/g,c=>{if(c===Zn||!i.includes(c))return c;const l=cb(e,c.slice(1),r);return l!==void 0?l:c}).trim(),o&&(t.endsWith(Zn)&&(t=t.slice(0,-Zn.length)),t.startsWith(Zn)&&(t=t.slice(Zn.length)),t=t.replace(ab,n||"").trim()),t}const Od=t=>t.includes(":key")?t:t.split(":").join(":key:"),lb={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Od(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Od(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Jl))}}},ub={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Yl(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Yl(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await Yl(t[r]);return n}return t}const hb={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Yl(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},fb={meta:"content",link:"href",htmlAttrs:"lang"},db=["innerHTML","textContent"],pb=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=Xo(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const c=fb[o.tag];if(c&&typeof o.props[c]=="string")o.props[c]=Xo(o.props[c],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of db)typeof o[l]=="string"&&(o[l]=Xo(o[l],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=Xo(n.textContent,t._templateParams,t._separator))}}}),gb=(t,e)=>Le(e)?ow(e):e,C_="usehead";function mb(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(C_,t)}}.install}function _b(){if(nc()){const t=nt(C_);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function qN(t,e={}){const n=e.head||_b();return n.ssr?n.push(t||{},e):yb(n,t,e)}function yb(t,e,n={}){const r=Xt(!1);let s;return eT(()=>{const o=r.value?{}:Ma(e,gb);s?s.patch(o):s=t.push(o,n)}),es()&&(go(()=>{s.dispose()}),gm(()=>{r.value=!0}),pm(()=>{r.value=!1})),s}const Eb="modulepreload",vb=function(t,e){return new URL(t,e).href},Nd={},ct=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=vb(u,r),u in Nd)return;Nd[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!r)for(let R=c.length-1;R>=0;R--){const N=c[R];if(N.href===u&&(!d||N.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const I=document.createElement("link");if(I.rel=d?"stylesheet":Eb,d||(I.as="script"),I.crossOrigin="",I.href=u,h&&I.setAttribute("nonce",h),document.head.appendChild(I),d)return new Promise((R,N)=>{I.addEventListener("load",R),I.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};let ca,la;function wb(){return ca=$fetch(nh(`builds/meta/${mo().app.buildId}.json`),{responseType:"json"}),ca.then(t=>{la=vA(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ca}function cc(){return ca||wb()}async function rh(t){const e=typeof t=="string"?t:t.path;if(await cc(),!la)return console.error("[nuxt] Error creating app manifest matcher.",la),{};try{return __({},...la.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Dd(t,e={}){if(!await k_(t))return null;const r=await Ib(t,e);return await P_(r)||null}const Tb="_payload.json";async function Ib(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||ts(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=mo(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await k_(t)?i:r.app.baseURL;return eh(o,n.pathname,Tb+(s?`?${s}`:""))}async function P_(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(O_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function k_(t=oc().path){const e=Je();return t=eo(t),(await cc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await rh({path:t});return!!r.prerender&&!r.redirect})}let Dr=null;async function Ab(){var r;if(Dr)return Dr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await O_(t.textContent||""),n=t.dataset.src?await P_(t.dataset.src):void 0;return Dr={...e,...n,...window.__NUXT__},(r=Dr.config)!=null&&r.public&&(Dr.config.public=Fn(Dr.config.public)),Dr}async function O_(t){return await $A(t,Je()._payloadRevivers)}function N_(t,e){Je()._payloadRevivers[t]=e}const bb=_A(()=>{N_("skipHydrate",t=>{})}),Rb=[["NuxtError",t=>$r(t)],["EmptyShallowRef",t=>Fs(t==="_"?void 0:t==="0n"?BigInt(0):ka(t))],["EmptyRef",t=>Xt(t==="_"?void 0:t==="0n"?BigInt(0):ka(t))],["ShallowRef",t=>Fs(t)],["ShallowReactive",t=>hn(t)],["Ref",t=>Xt(t)],["Reactive",t=>Fn(t)]],Sb=Nt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of Rb)N_(r,s);Object.assign(t.payload,([e,n]=Ps(()=>t.runWithContext(Ab)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function sh(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var m;const i=new Map,o=new Promise(I=>{t.resolveTags().then(R=>{I(R.map(N=>{const D=i.get(N._d)||0,O={tag:N,id:(D?`${N._d}:${D}`:N._d)||Sd(N),shouldRender:!0};return N._d&&R_(N._d)&&i.set(N._d,D+1),O}))})});let c=t._dom;if(!c){c={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const I of["body","head"]){const R=(m=n[I])==null?void 0:m.children;for(const N of R){const D=N.tagName.toLowerCase();if(!Rd.has(D))continue;const O=S_({tag:D,props:{}},{innerHTML:N.innerHTML,...N.getAttributeNames().reduce((A,k)=>(A[k]=N.getAttribute(k),A),{})||{}});if(O.key=N.getAttribute("data-hid")||void 0,O._d=Ql(O)||Sd(O),c.elMap.has(O._d)){let A=1,k=O._d;for(;c.elMap.has(k);)k=`${O._d}:${A++}`;c.elMap.set(k,N)}else c.elMap.set(O._d,N)}}}c.pendingSideEffects={...c.sideEffects},c.sideEffects={};function l(I,R,N){const D=`${I}:${R}`;c.sideEffects[D]=N,delete c.pendingSideEffects[D]}function h({id:I,$el:R,tag:N}){const D=N.tag.endsWith("Attrs");c.elMap.set(I,R),D||(N.textContent&&N.textContent!==R.textContent&&(R.textContent=N.textContent),N.innerHTML&&N.innerHTML!==R.innerHTML&&(R.innerHTML=N.innerHTML),l(I,"el",()=>{R==null||R.remove(),c.elMap.delete(I)}));for(const O in N.props){if(!Object.prototype.hasOwnProperty.call(N.props,O))continue;const A=N.props[O];if(O.startsWith("on")&&typeof A=="function"){const M=R==null?void 0:R.dataset;if(M&&M[`${O}fired`]){const F=O.slice(0,-5);A.call(R,new Event(F.substring(2)))}R.getAttribute(`data-${O}`)!==""&&((N.tag==="bodyAttrs"?n.defaultView:R).addEventListener(O.substring(2),A.bind(R)),R.setAttribute(`data-${O}`,""));continue}const k=`attr:${O}`;if(O==="class"){if(!A)continue;for(const M of A)D&&l(I,`${k}:${M}`,()=>R.classList.remove(M)),!R.classList.contains(M)&&R.classList.add(M)}else if(O==="style"){if(!A)continue;for(const[M,F]of A)l(I,`${k}:${M}`,()=>{R.style.removeProperty(M)}),R.style.setProperty(M,F)}else A!==!1&&A!==null&&(R.getAttribute(O)!==A&&R.setAttribute(O,A===!0?"":String(A)),D&&l(I,k,()=>R.removeAttribute(O)))}}const u=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},g=await o;for(const I of g){const{tag:R,shouldRender:N,id:D}=I;if(N){if(R.tag==="title"){n.title=R.textContent,l("title","",()=>n.title=c.title);continue}I.$el=I.$el||c.elMap.get(D),I.$el?h(I):Rd.has(R.tag)&&u.push(I)}}for(const I of u){const R=I.tag.tagPosition||"head";I.$el=n.createElement(I.tag.tag),h(I),d[R]=d[R]||n.createDocumentFragment(),d[R].appendChild(I.$el)}for(const I of g)await t.hooks.callHook("dom:renderTag",I,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const I in c.pendingSideEffects)c.pendingSideEffects[I]();t._dom=c,await t.hooks.callHook("dom:rendered",{renders:g}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function Cb(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||sh;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return ob({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function Pb(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function kb(t={}){const e=Cb({domOptions:{render:Pb(()=>sh(e),n=>setTimeout(n,0))},...t});return e.install=mb(e),e}const Ob={disableDefaults:!0,disableCapoSorting:!1,plugins:[ub,hb,pb,lb]},Nb=Nt({name:"nuxt:head",enforce:"pre",setup(t){const e=kb(Ob);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await sh(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof document<"u";function D_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Db(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&D_(t.default)}const Se=Object.assign;function al(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Bi=()=>{},en=Array.isArray,M_=/#/g,Mb=/&/g,xb=/\//g,Vb=/=/g,Lb=/\?/g,x_=/\+/g,Fb=/%5B/g,Ub=/%5D/g,V_=/%5E/g,Bb=/%60/g,L_=/%7B/g,jb=/%7C/g,F_=/%7D/g,Hb=/%20/g;function ih(t){return encodeURI(""+t).replace(jb,"|").replace(Fb,"[").replace(Ub,"]")}function $b(t){return ih(t).replace(L_,"{").replace(F_,"}").replace(V_,"^")}function Xl(t){return ih(t).replace(x_,"%2B").replace(Hb,"+").replace(M_,"%23").replace(Mb,"%26").replace(Bb,"`").replace(L_,"{").replace(F_,"}").replace(V_,"^")}function qb(t){return Xl(t).replace(Vb,"%3D")}function Wb(t){return ih(t).replace(M_,"%23").replace(Lb,"%3F")}function Kb(t){return t==null?"":Wb(t).replace(xb,"%2F")}function to(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zb=/\/$/,Gb=t=>t.replace(zb,"");function cl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Xb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:to(o)}}function Qb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$s(e.matched[r],n.matched[s])&&U_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function U_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yb(t[n],e[n]))return!1;return!0}function Yb(t,e){return en(t)?xd(t,e):en(e)?xd(e,t):t===e}function xd(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Xb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(t){t.pop="pop",t.push="push"})(no||(no={}));var ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ji||(ji={}));function Zb(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gb(t)}const eR=/^[^#]+#/;function tR(t,e){return t.replace(eR,"#")+e}function nR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const lc=()=>({left:window.scrollX,top:window.scrollY});function rR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=nR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vd(t,e){return(history.state?history.state.position-e:-1)+t}const Zl=new Map;function sR(t,e){Zl.set(t,e)}function iR(t){const e=Zl.get(t);return Zl.delete(t),e}let oR=()=>location.protocol+"//"+location.host;function B_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Md(l,"")}return Md(n,t)+r+s}function aR(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=B_(t,location),I=n.value,R=e.value;let N=0;if(g){if(n.value=m,e.value=g,o&&o===I){o=null;return}N=R?g.position-R.position:0}else r(m);s.forEach(D=>{D(n.value,I,{delta:N,type:no.pop,direction:N?N>0?ji.forward:ji.back:ji.unknown})})};function l(){o=n.value}function h(g){s.push(g);const m=()=>{const I=s.indexOf(g);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:lc()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:h,destroy:d}}function Ld(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?lc():null}}function cR(t){const{history:e,location:n}=window,r={value:B_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,u){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:oR()+t+l;try{e[u?"replaceState":"pushState"](h,"",g),s.value=h}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function o(l,h){const u=Se({},e.state,Ld(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,u,!0),r.value=l}function c(l,h){const u=Se({},s.value,e.state,{forward:l,scroll:lc()});i(u.current,u,!0);const d=Se({},Ld(r.value,l,null),{position:u.position+1},h);i(l,d,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function lR(t){t=Zb(t);const e=cR(t),n=aR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:tR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uR(t){return typeof t=="string"||t&&typeof t=="object"}function j_(t){return typeof t=="string"||typeof t=="symbol"}const H_=Symbol("");var Fd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fd||(Fd={}));function qs(t,e){return Se(new Error,{type:t,[H_]:!0},e)}function An(t,e){return t instanceof Error&&H_ in t&&(e==null||!!(t.type&e))}const Ud="[^/]+?",hR={sensitive:!1,strict:!1,start:!0,end:!0},fR=/[.+*?^${}()[\]/\\]/g;function dR(t,e){const n=Se({},hR,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const u=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let d=0;d<h.length;d++){const g=h[d];let m=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace(fR,"\\$&"),m+=40;else if(g.type===1){const{value:I,repeatable:R,optional:N,regexp:D}=g;i.push({name:I,repeatable:R,optional:N});const O=D||Ud;if(O!==Ud){m+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${I}" (${O}): `+k.message)}}let A=R?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(A=N&&h.length<2?`(?:/${A})`:"/"+A),N&&(A+="?"),s+=A,m+=20,N&&(m+=-8),R&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const u=h.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",I=i[g-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function l(h){let u="",d=!1;for(const g of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of g)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:R,optional:N}=m,D=I in h?h[I]:"";if(en(D)&&!R)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const O=en(D)?D.join("/"):D;if(!O)if(N)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function pR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=pR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bd(r))return 1;if(Bd(s))return-1}return s.length-r.length}function Bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gR={type:0,value:""},mR=/[a-zA-Z0-9_]/;function _R(t){if(!t)return[[]];if(t==="/")return[[gR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${h}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",u="";function d(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&d(),o()):l===":"?(d(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:mR.test(l)?g():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),d(),o(),s}function yR(t,e,n){const r=dR(_R(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ER(t,e){const n=[],r=new Map;e=qd({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,m){const I=!m,R=Hd(d);R.aliasOf=m&&m.record;const N=qd(e,d),D=[R];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of k)D.push(Hd(Se({},R,{components:m?m.record.components:R.components,path:M,aliasOf:m?m.record:R})))}let O,A;for(const k of D){const{path:M}=k;if(g&&M[0]!=="/"){const F=g.record.path,w=F[F.length-1]==="/"?"":"/";k.path=g.record.path+(M&&w+M)}if(O=yR(k,g,N),m?m.alias.push(O):(A=A||O,A!==O&&A.alias.push(O),I&&d.name&&!$d(O)&&o(d.name)),q_(O)&&l(O),R.children){const F=R.children;for(let w=0;w<F.length;w++)i(F[w],O,m&&m.children[w])}m=m||O}return A?()=>{o(A)}:Bi}function o(d){if(j_(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=TR(d,n);n.splice(g,0,d),d.record.name&&!$d(d)&&r.set(d.record.name,d)}function h(d,g){let m,I={},R,N;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw qs(1,{location:d});N=m.record.name,I=Se(jd(g.params,m.keys.filter(A=>!A.optional).concat(m.parent?m.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&jd(d.params,m.keys.map(A=>A.name))),R=m.stringify(I)}else if(d.path!=null)R=d.path,m=n.find(A=>A.re.test(R)),m&&(I=m.parse(R),N=m.record.name);else{if(m=g.name?r.get(g.name):n.find(A=>A.re.test(g.path)),!m)throw qs(1,{location:d,currentLocation:g});N=m.record.name,I=Se({},g.params,d.params),R=m.stringify(I)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:N,path:R,params:I,matched:D,meta:wR(D)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function jd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:vR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function vR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wR(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function qd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function TR(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$_(t,e[i])<0?r=i:n=i+1}const s=IR(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function IR(t){let e=t;for(;e=e.parent;)if(q_(e)&&$_(t,e)===0)return e}function q_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function AR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(x_," "),o=i.indexOf("="),c=to(o<0?i:i.slice(0,o)),l=o<0?null:to(i.slice(o+1));if(c in e){let h=e[c];en(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Wd(t){let e="";for(let n in t){const r=t[n];if(n=qb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&Xl(i)):[r&&Xl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const RR=Symbol(""),Kd=Symbol(""),uc=Symbol(""),oh=Symbol(""),eu=Symbol("");function bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(qs(4,{from:n,to:e})):g instanceof Error?l(g):uR(g)?l(qs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},u=i(()=>t.call(r&&r.instances[s],e,n,h));let d=Promise.resolve(u);t.length<3&&(d=d.then(h)),d.catch(g=>l(g))})}function ll(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(D_(l)){const u=(l.__vccOpts||l)[e];u&&i.push(er(u,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=Db(u)?u.default:u;o.mods[c]=u,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&er(m,n,r,o,c,s)()}))}}return i}function zd(t){const e=nt(uc),n=nt(oh),r=Vt(()=>{const l=Ve(t.to);return e.resolve(l)}),s=Vt(()=>{const{matched:l}=r.value,{length:h}=l,u=l[h-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex($s.bind(null,u));if(g>-1)return g;const m=Gd(l[h-2]);return h>1&&Gd(u)===m&&d[d.length-1].path!==m?d.findIndex($s.bind(null,l[h-2])):g}),i=Vt(()=>s.value>-1&&OR(n.params,r.value.params)),o=Vt(()=>s.value>-1&&s.value===n.matched.length-1&&U_(n.params,r.value.params));function c(l={}){if(kR(l)){const h=e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(Bi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function SR(t){return t.length===1?t[0]:t}const CR=Ar({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zd,setup(t,{slots:e}){const n=Fn(zd(t)),{options:r}=nt(uc),s=Vt(()=>({[Qd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&SR(e.default(n));return t.custom?i:wt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),PR=CR;function kR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Gd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qd=(t,e,n)=>t??e??n,NR=Ar({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nt(eu),s=Vt(()=>t.route||r.value),i=nt(Kd,0),o=Vt(()=>{let h=Ve(i);const{matched:u}=s.value;let d;for(;(d=u[h])&&!d.components;)h++;return h}),c=Vt(()=>s.value.matched[o.value]);ur(Kd,Vt(()=>o.value+1)),ur(RR,c),ur(eu,s);const l=Xt();return jr(()=>[l.value,c.value,t.name],([h,u,d],[g,m,I])=>{u&&(u.instances[d]=h,m&&m!==u&&h&&h===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),h&&u&&(!m||!$s(u,m)||!g)&&(u.enterCallbacks[d]||[]).forEach(R=>R(h))},{flush:"post"}),()=>{const h=s.value,u=t.name,d=c.value,g=d&&d.components[u];if(!g)return Jd(n.default,{Component:g,route:h});const m=d.props[u],I=m?m===!0?h.params:typeof m=="function"?m(h):m:null,N=wt(g,Se({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Jd(n.default,{Component:N,route:h})||N}}});function Jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const W_=NR;function DR(t){const e=ER(t.routes,t),n=t.parseQuery||AR,r=t.stringifyQuery||Wd,s=t.history,i=bi(),o=bi(),c=bi(),l=Fs(Ht);let h=Ht;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=al.bind(null,B=>""+B),d=al.bind(null,Kb),g=al.bind(null,to);function m(B,Z){let Y,ne;return j_(B)?(Y=e.getRecordMatcher(B),ne=Z):ne=B,e.addRoute(ne,Y)}function I(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function R(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function D(B,Z){if(Z=Se({},Z||l.value),typeof B=="string"){const P=cl(n,B,Z.path),V=e.resolve({path:P.path},Z),H=s.createHref(P.fullPath);return Se(P,V,{params:g(V.params),hash:to(P.hash),redirectedFrom:void 0,href:H})}let Y;if(B.path!=null)Y=Se({},B,{path:cl(n,B.path,Z.path).path});else{const P=Se({},B.params);for(const V in P)P[V]==null&&delete P[V];Y=Se({},B,{params:d(P)}),Z.params=d(Z.params)}const ne=e.resolve(Y,Z),ye=B.hash||"";ne.params=u(g(ne.params));const Pe=Qb(r,Se({},B,{hash:$b(ye),path:ne.path})),b=s.createHref(Pe);return Se({fullPath:Pe,hash:ye,query:r===Wd?bR(B.query):B.query||{}},ne,{redirectedFrom:void 0,href:b})}function O(B){return typeof B=="string"?cl(n,B,l.value.path):Se({},B)}function A(B,Z){if(h!==B)return qs(8,{from:Z,to:B})}function k(B){return w(B)}function M(B){return k(Se(O(B),{replace:!0}))}function F(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ne=typeof Y=="function"?Y(B):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=O(ne):{path:ne},ne.params={}),Se({query:B.query,hash:B.hash,params:ne.path!=null?{}:B.params},ne)}}function w(B,Z){const Y=h=D(B),ne=l.value,ye=B.state,Pe=B.force,b=B.replace===!0,P=F(Y);if(P)return w(Se(O(P),{state:typeof P=="object"?Se({},ye,P.state):ye,force:Pe,replace:b}),Z||Y);const V=Y;V.redirectedFrom=Z;let H;return!Pe&&Jb(r,ne,Y)&&(H=qs(16,{to:V,from:ne}),Ut(ne,ne,!0,!1)),(H?Promise.resolve(H):v(V,ne)).catch(U=>An(U)?An(U,2)?U:Kt(U):te(U,V,ne)).then(U=>{if(U){if(An(U,2))return w(Se({replace:b},O(U.to),{state:typeof U.to=="object"?Se({},ye,U.to.state):ye,force:Pe}),Z||V)}else U=S(V,ne,!0,b,ye);return C(V,ne,U),U})}function y(B,Z){const Y=A(B,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(B){const Z=jn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function v(B,Z){let Y;const[ne,ye,Pe]=MR(B,Z);Y=ll(ne.reverse(),"beforeRouteLeave",B,Z);for(const P of ne)P.leaveGuards.forEach(V=>{Y.push(er(V,B,Z))});const b=y.bind(null,B,Z);return Y.push(b),Ct(Y).then(()=>{Y=[];for(const P of i.list())Y.push(er(P,B,Z));return Y.push(b),Ct(Y)}).then(()=>{Y=ll(ye,"beforeRouteUpdate",B,Z);for(const P of ye)P.updateGuards.forEach(V=>{Y.push(er(V,B,Z))});return Y.push(b),Ct(Y)}).then(()=>{Y=[];for(const P of Pe)if(P.beforeEnter)if(en(P.beforeEnter))for(const V of P.beforeEnter)Y.push(er(V,B,Z));else Y.push(er(P.beforeEnter,B,Z));return Y.push(b),Ct(Y)}).then(()=>(B.matched.forEach(P=>P.enterCallbacks={}),Y=ll(Pe,"beforeRouteEnter",B,Z,_),Y.push(b),Ct(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(er(P,B,Z));return Y.push(b),Ct(Y)}).catch(P=>An(P,8)?P:Promise.reject(P))}function C(B,Z,Y){c.list().forEach(ne=>_(()=>ne(B,Z,Y)))}function S(B,Z,Y,ne,ye){const Pe=A(B,Z);if(Pe)return Pe;const b=Z===Ht,P=ps?history.state:{};Y&&(ne||b?s.replace(B.fullPath,Se({scroll:b&&P&&P.scroll},ye)):s.push(B.fullPath,ye)),l.value=B,Ut(B,Z,Y,b),Kt()}let T;function de(){T||(T=s.listen((B,Z,Y)=>{if(!nn.listening)return;const ne=D(B),ye=F(ne);if(ye){w(Se(ye,{replace:!0,force:!0}),ne).catch(Bi);return}h=ne;const Pe=l.value;ps&&sR(Vd(Pe.fullPath,Y.delta),lc()),v(ne,Pe).catch(b=>An(b,12)?b:An(b,2)?(w(Se(O(b.to),{force:!0}),ne).then(P=>{An(P,20)&&!Y.delta&&Y.type===no.pop&&s.go(-1,!1)}).catch(Bi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),te(b,ne,Pe))).then(b=>{b=b||S(ne,Pe,!1),b&&(Y.delta&&!An(b,8)?s.go(-Y.delta,!1):Y.type===no.pop&&An(b,20)&&s.go(-1,!1)),C(ne,Pe,b)}).catch(Bi)}))}let me=bi(),X=bi(),re;function te(B,Z,Y){Kt(B);const ne=X.list();return ne.length?ne.forEach(ye=>ye(B,Z,Y)):console.error(B),Promise.reject(B)}function De(){return re&&l.value!==Ht?Promise.resolve():new Promise((B,Z)=>{me.add([B,Z])})}function Kt(B){return re||(re=!B,de(),me.list().forEach(([Z,Y])=>B?Y(B):Z()),me.reset()),B}function Ut(B,Z,Y,ne){const{scrollBehavior:ye}=t;if(!ps||!ye)return Promise.resolve();const Pe=!Y&&iR(Vd(B.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return Kr().then(()=>ye(B,Z,Pe)).then(b=>b&&rR(b)).catch(b=>te(b,B,Z))}const Ue=B=>s.go(B);let Be;const jn=new Set,nn={currentRoute:l,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:R,resolve:D,options:t,push:k,replace:M,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:X.add,isReady:De,install(B){const Z=this;B.component("RouterLink",PR),B.component("RouterView",W_),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),ps&&!Be&&l.value===Ht&&(Be=!0,k(s.location).catch(ye=>{}));const Y={};for(const ye in Ht)Object.defineProperty(Y,ye,{get:()=>l.value[ye],enumerable:!0});B.provide(uc,Z),B.provide(oh,hn(Y)),B.provide(eu,l);const ne=B.unmount;jn.add(B),B.unmount=function(){jn.delete(B),jn.size<1&&(h=Ht,T&&T(),T=null,l.value=Ht,Be=!1,re=!1),ne()}}};function Ct(B){return B.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return nn}function MR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>$s(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>$s(h,l))||s.push(l))}return[n,r,s]}function WN(){return nt(uc)}function K_(t){return nt(oh)}const xR=/(:\w+)\([^)]+\)/g,VR=/(:\w+)[?+*]/g,LR=/:\w+/g,FR=(t,e)=>e.path.replace(xR,"$1").replace(VR,"$1").replace(LR,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),tu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&FR(t.route,n));return typeof r=="function"?r(t.route):r},UR=(t,e)=>({default:()=>t?wt(Sw,t===!0?{}:t,e):e});function ah(t){return Array.isArray(t)?t:[t]}const ul=[{name:"index",path:"/",component:()=>ct(()=>import("./SsFzt0yi.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)},{name:"tv-id",path:"/tv/:id()",component:()=>ct(()=>import("./igGxqPE7.js"),__vite__mapDeps([7,8,1,3,9,10]),import.meta.url)},{name:"admin-add",path:"/admin/add",meta:{middleware:"auth"},component:()=>ct(()=>import("./ClSuT0jU.js"),__vite__mapDeps([11,2,3,12,5,1,6,10]),import.meta.url)},{name:"movie-id",path:"/movie/:id()",component:()=>ct(()=>import("./B1A8tJts.js"),__vite__mapDeps([13,8,1,3,9,10]),import.meta.url)},{name:"admin",path:"/admin",meta:{middleware:"auth"},component:()=>ct(()=>import("./BlkvMd3l.js"),__vite__mapDeps([14,1,6,15]),import.meta.url)},{name:"login",path:"/login",component:()=>ct(()=>import("./Ms57SnnH.js"),__vite__mapDeps([16,2,3,12,17]),import.meta.url)},{name:"movies",path:"/movies",component:()=>ct(()=>import("./DJo8hYym.js"),__vite__mapDeps([18,1,2,3,5,6,4]),import.meta.url)},{name:"suggest",path:"/suggest",component:()=>ct(()=>import("./C6GCM0NO.js"),__vite__mapDeps([19,2,3,12,5,1,6]),import.meta.url)},{name:"tvshows",path:"/tvshows",component:()=>ct(()=>import("./B5RZEctj.js"),__vite__mapDeps([20,1,2,3,5,6,4]),import.meta.url)},{name:"admin-suggestions",path:"/admin/suggestions",meta:{middleware:"auth"},component:()=>ct(()=>import("./BUl3W44A.js"),__vite__mapDeps([21,5,3,1,6,15]),import.meta.url)}],z_=(t,e)=>({default:()=>{var n;return t?wt(kT,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),BR=/(:\w+)\([^)]+\)/g,jR=/(:\w+)[?+*]/g,HR=/:\w+/g;function Yd(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(BR,"$1").replace(jR,"$1").replace(HR,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function $R(t,e){return t===e||e===Ht?!1:Yd(t)!==Yd(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const qR={scrollBehavior(t,e,n){var c;const r=Je(),s=((c=Ft().options)==null?void 0:c.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:G_(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(l=>{if(e===Ht){l(Xd(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>l(Xd(t,e,n,s)))})})}};function G_(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Xd(t,e,n,r){if(n)return n;const s=$R(t,e);return t.hash?{el:t.hash,top:G_(t.hash),behavior:s?r:"instant"}:{left:0,top:0,behavior:s?r:"instant"}}const WR={hashMode:!1,scrollBehaviorType:"auto"},rn={...WR,...qR},KR=async(t,e)=>{var o;let n,r;if(!((o=t.meta)!=null&&o.validate))return;const s=([n,r]=Ps(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=$r({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},zR=async t=>{let e,n;const r=([e,n]=Ps(()=>rh({path:t.path})),e=await e,n(),e);if(r.redirect)return ts(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},GR=[KR,zR],Hi={auth:()=>ct(()=>import("./DlWClgLe.js"),__vite__mapDeps([22,17]),import.meta.url)};function QR(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const h=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(h);return u[0]!=="/"&&(u="/"+u),pd(u,"")}const c=pd(r,t),l=!n||OI(c,n)?c:n;return l+(l.includes("?")?"":s)+i}const JR=Nt({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=mo().app.baseURL;const s=((N=rn.history)==null?void 0:N.call(rn,r))??lR(r),i=rn.routes?([e,n]=Ps(()=>rn.routes(ul)),e=await e,n(),e??ul):ul;let o;const c=DR({...rn,scrollBehavior:(D,O,A)=>{if(O===Ht){o=A;return}if(rn.scrollBehavior){if(c.options.scrollBehavior=rn.scrollBehavior,"scrollRestoration"in window.history){const k=c.beforeEach(()=>{k(),window.history.scrollRestoration="manual"})}return rn.scrollBehavior(D,Ht,o||A)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(c);const l=Fs(c.currentRoute.value);c.afterEach((D,O)=>{l.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const h=QR(r,window.location,t.payload.path),u=Fs(c.currentRoute.value),d=()=>{u.value=c.currentRoute.value};t.hook("page:finish",d),c.afterEach((D,O)=>{var A,k,M,F;((k=(A=D.matched[0])==null?void 0:A.components)==null?void 0:k.default)===((F=(M=O.matched[0])==null?void 0:M.components)==null?void 0:F.default)&&d()});const g={};for(const D in u.value)Object.defineProperty(g,D,{get:()=>u.value[D],enumerable:!0});t._route=hn(g),t._middleware||(t._middleware={global:[],named:{}});const m=ac();c.afterEach(async(D,O,A)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(CA),A&&await t.callHook("page:loading:end")});try{[e,n]=Ps(()=>c.isReady()),await e,n()}catch(D){[e,n]=Ps(()=>t.runWithContext(()=>xr(D))),await e,n()}const I=h!==c.currentRoute.value.fullPath?c.resolve(h):c.currentRoute.value;d();const R=t.payload.state._layout;return c.beforeEach(async(D,O)=>{var A;await t.callHook("page:loading:start"),D.meta=Fn(D.meta),t.isHydrating&&R&&!Dn(D.meta.layout)&&(D.meta.layout=R),t._processingMiddleware=!0;{const k=new Set([...GR,...t._middleware.global]);for(const M of D.matched){const F=M.meta.middleware;if(F)for(const w of ah(F))k.add(w)}{const M=await t.runWithContext(()=>rh({path:D.path}));if(M.appMiddleware)for(const F in M.appMiddleware)M.appMiddleware[F]?k.add(F):k.delete(F)}for(const M of k){const F=typeof M=="string"?t._middleware.named[M]||await((A=Hi[M])==null?void 0:A.call(Hi).then(w=>w.default||w)):M;if(!F)throw new Error(`Unknown route middleware: '${M}'.`);try{const w=await t.runWithContext(()=>F(D,O));if(!t.payload.serverRendered&&t.isHydrating&&(w===!1||w instanceof Error)){const y=w||$r({statusCode:404,statusMessage:`Page Not Found: ${h}`});return await t.runWithContext(()=>xr(y)),!1}if(w===!0)continue;if(w===!1)return w;if(w)return w_(w)&&w.fatal&&await t.runWithContext(()=>xr(w)),w}catch(w){const y=$r(w);return y.fatal&&await t.runWithContext(()=>xr(y)),y}}}}),c.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),c.afterEach(async(D,O)=>{D.matched.length===0&&await t.runWithContext(()=>xr($r({statusCode:404,fatal:!1,statusMessage:`Page not found: ${D.fullPath}`,data:{path:D.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await c.replace({...I,force:!0}),c.options.scrollBehavior=rn.scrollBehavior}catch(D){await t.runWithContext(()=>xr(D))}}),{provide:{router:c}}}}),Zd=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),KN=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),ch=t=>{const e=Je();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Zd(()=>t())}):Zd(()=>t())},YR="$s";function XR(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=YR+n,i=Je(),o=nm(i.payload.state,s);if(o.value===void 0&&r){const c=r();if(Le(c))return i.payload.state[s]=c,c;o.value=c}return o}function ZR(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function eS(t,e=Ft()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises||(e._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>eS(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var c;return(c=o.components)==null?void 0:c.default}).filter(o=>typeof o=="function");for(const o of i){const c=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(c)));s.push(c)}await Promise.all(s)}function tS(t={}){const e=t.path||window.location.pathname;let n={};try{n=ka(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Je().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const nS=Nt({name:"nuxt-site-config:init",enforce:"pre",async setup(t){const e=XR("site-config");let n={};return n=e.value||window.__NUXT_SITE_CONFIG__,{provide:{nuxtSiteConfig:n}}}}),rS=Nt({name:"nuxt:payload",setup(t){const e=new Set;Ft().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await Dd(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),ch(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await Dd(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(cc,1e3)})}}),sS=Nt(()=>{const t=Ft();ch(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),iS=Nt(t=>{let e;async function n(){const r=await cc();e&&clearTimeout(e),e=setTimeout(n,vd);try{const s=await $fetch(nh("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}ch(()=>{e=setTimeout(n,vd)})}),oS=Nt({name:"nuxt:chunk-reload",setup(t){const e=Ft(),n=mo(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=eh(n.app.baseURL,i.fullPath);tS({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),aS=Nt({name:"pinia",setup(t){const e=PA();return t.vueApp.use(e),_o(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),cS=Nt({name:"nuxt:global-components"}),or={default:vs(()=>ct(()=>import("./CyPhkSED.js"),__vite__mapDeps([23,24,1,3,17,6]),import.meta.url).then(t=>t.default||t)),"error-layout":vs(()=>ct(()=>import("./DIZCvyTB.js"),__vite__mapDeps([25,24,1,3,17]),import.meta.url).then(t=>t.default||t)),error:vs(()=>ct(()=>import("./D4qGkaiA.js"),__vite__mapDeps([26,1,27]),import.meta.url).then(t=>t.default||t)),fullpage:vs(()=>ct(()=>import("./CxKgaC6v.js"),[],import.meta.url).then(t=>t.default||t))},lS=Nt({name:"nuxt:prefetch",setup(t){const e=Ft();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof or[r]=="function"&&await or[r]()})}),t.hooks.hook("link:prefetch",n=>{if(ts(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=ah(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Hi[o]=="function"&&Hi[o]();typeof s=="string"&&s in or&&ZR(or[s])})}}),uS=Nt(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-auth-sw.js")}),hS=()=>{};var ep={};/**
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
 */const Q_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},J_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,m=h&63;l||(m=64,o||(g=64)),r.push(n[u],n[d],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||d==null)throw new dS;const g=i<<2|c>>4;if(r.push(g),h!==64){const m=c<<4&240|h>>2;if(r.push(m),d!==64){const I=h<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pS=function(t){const e=Q_(t);return J_.encodeByteArray(e,!0)},xa=function(t){return pS(t).replace(/\./g,"")},Y_=function(t){try{return J_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mS=()=>gS().__FIREBASE_DEFAULTS__,_S=()=>{if(typeof process>"u"||typeof ep>"u")return;const t=ep.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y_(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return hS()||mS()||_S()||yS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X_=t=>{var e,n;return(n=(e=hc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ES=t=>{const e=X_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Z_=()=>{var t;return(t=hc())==null?void 0:t.config},ey=t=>{var e;return(e=hc())==null?void 0:e[`_${t}`]};/**
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
 */class vS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ni(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ty(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[xa(JSON.stringify(n)),xa(JSON.stringify(o)),""].join(".")}const $i={};function TS(){const t={prod:[],emulator:[]};for(const e of Object.keys($i))$i[e]?t.emulator.push(e):t.prod.push(e);return t}function IS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tp=!1;function ny(t,e){if(typeof window>"u"||typeof document>"u"||!ni(window.location.host)||$i[t]===e||$i[t]||tp)return;$i[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=TS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{tp=!0,o()},g}function u(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=IS(r),m=n("text"),I=document.getElementById(m)||document.createElement("span"),R=n("learnmore"),N=document.getElementById(R)||document.createElement("a"),D=n("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;c(A),u(N,R);const k=h();l(O,D),A.append(O,I,N,k),document.body.appendChild(A)}i?(I.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function bS(){var e;const t=(e=hc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PS(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kS(){return!bS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OS(){try{return typeof indexedDB=="object"}catch{return!1}}function NS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const DS="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DS,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MS(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,c,r)}}function MS(t,e){return t.replace(xS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xS=/\{\$([^}]+)}/g;function VS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(np(i)&&np(o)){if(!Qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
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
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LS(t,e){const n=new FS(t,e);return n.subscribe.bind(n)}class FS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");US(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function US(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
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
 */function En(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class BS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HS(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jS(t){return t===Vr?void 0:t}function HS(t){return t.instantiationMode==="EAGER"}/**
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
 */class $S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const qS={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},WS=_e.INFO,KS={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},zS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lh{constructor(e){this.name=e,this._logLevel=WS,this._logHandler=zS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const GS=(t,e)=>e.some(n=>t instanceof n);let rp,sp;function QS(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JS(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ry=new WeakMap,nu=new WeakMap,sy=new WeakMap,fl=new WeakMap,uh=new WeakMap;function YS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ry.set(n,t)}).catch(()=>{}),uh.set(e,t),e}function XS(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZS(t){ru=t(ru)}function e0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return sy.set(r,e.sort?e.sort():[e]),hr(r)}:JS().includes(t)?function(...e){return t.apply(dl(this),e),hr(ry.get(this))}:function(...e){return hr(t.apply(dl(this),e))}}function t0(t){return typeof t=="function"?e0(t):(t instanceof IDBTransaction&&XS(t),GS(t,QS())?new Proxy(t,ru):t)}function hr(t){if(t instanceof IDBRequest)return YS(t);if(fl.has(t))return fl.get(t);const e=t0(t);return e!==t&&(fl.set(t,e),uh.set(e,t)),e}const dl=t=>uh.get(t);function n0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const r0=["get","getKey","getAll","getAllKeys","count"],s0=["put","add","delete","clear"],pl=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=s0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||r0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return pl.set(e,i),i}ZS(t=>({...t,get:(e,n,r)=>ip(e,n)||t.get(e,n,r),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
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
 */class i0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const su="@firebase/app",op="0.14.0";/**
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
 */const xn=new lh("@firebase/app"),a0="@firebase/app-compat",c0="@firebase/analytics-compat",l0="@firebase/analytics",u0="@firebase/app-check-compat",h0="@firebase/app-check",f0="@firebase/auth",d0="@firebase/auth-compat",p0="@firebase/database",g0="@firebase/data-connect",m0="@firebase/database-compat",_0="@firebase/functions",y0="@firebase/functions-compat",E0="@firebase/installations",v0="@firebase/installations-compat",w0="@firebase/messaging",T0="@firebase/messaging-compat",I0="@firebase/performance",A0="@firebase/performance-compat",b0="@firebase/remote-config",R0="@firebase/remote-config-compat",S0="@firebase/storage",C0="@firebase/storage-compat",P0="@firebase/firestore",k0="@firebase/ai",O0="@firebase/firestore-compat",N0="firebase",D0="12.0.0";/**
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
 */const iu="[DEFAULT]",M0={[su]:"fire-core",[a0]:"fire-core-compat",[l0]:"fire-analytics",[c0]:"fire-analytics-compat",[h0]:"fire-app-check",[u0]:"fire-app-check-compat",[f0]:"fire-auth",[d0]:"fire-auth-compat",[p0]:"fire-rtdb",[g0]:"fire-data-connect",[m0]:"fire-rtdb-compat",[_0]:"fire-fn",[y0]:"fire-fn-compat",[E0]:"fire-iid",[v0]:"fire-iid-compat",[w0]:"fire-fcm",[T0]:"fire-fcm-compat",[I0]:"fire-perf",[A0]:"fire-perf-compat",[b0]:"fire-rc",[R0]:"fire-rc-compat",[S0]:"fire-gcs",[C0]:"fire-gcs-compat",[P0]:"fire-fst",[O0]:"fire-fst-compat",[k0]:"fire-vertex","fire-js":"fire-js",[N0]:"fire-js-all"};/**
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
 */const ro=new Map,x0=new Map,ou=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ws(t){const e=t.name;if(ou.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of ro.values())ap(n,t);for(const n of x0.values())ap(n,t);return!0}function hh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const V0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new yo("app","Firebase",V0);/**
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
 */class L0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const ri=D0;function iy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:iu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=Z_()),!n)throw fr.create("no-options");const i=ro.get(s);if(i){if(Qr(n,i.options)&&Qr(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new $S(s);for(const l of ou.values())o.addComponent(l);const c=new L0(n,r,o);return ro.set(s,c),c}function oy(t=iu){const e=ro.get(t);if(!e&&t===iu&&Z_())return iy();if(!e)throw fr.create("no-app",{appName:t});return e}function F0(){return Array.from(ro.values())}function dr(t,e,n){let r=M0[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}Ws(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const U0="firebase-heartbeat-database",B0=1,so="firebase-heartbeat-store";let gl=null;function ay(){return gl||(gl=n0(U0,B0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),gl}async function j0(t){try{const n=(await ay()).transaction(so),r=await n.objectStore(so).get(cy(t));return await n.done,r}catch(e){if(e instanceof Bn)xn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function cp(t,e){try{const r=(await ay()).transaction(so,"readwrite");await r.objectStore(so).put(e,cy(t)),await r.done}catch(n){if(n instanceof Bn)xn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const H0=1024,$0=30;class q0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$0){const o=z0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lp(),{heartbeatsToSend:r,unsentEntries:s}=W0(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function lp(){return new Date().toISOString().substring(0,10)}function W0(t,e=H0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),up(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class K0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OS()?NS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await j0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function up(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}function z0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function G0(t){Ws(new Jr("platform-logger",e=>new i0(e),"PRIVATE")),Ws(new Jr("heartbeat",e=>new q0(e),"PRIVATE")),dr(su,op,t),dr(su,op,"esm2020"),dr("fire-js","")}G0("");var Q0="firebase",J0="12.0.0";/**
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
 */dr(Q0,J0,"app");var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,ly;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(v,C,S){for(var T=Array(arguments.length-2),de=2;de<arguments.length;de++)T[de-2]=arguments[de];return y.prototype[C].apply(v,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var v=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)v[C]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(C=0;16>C;++C)v[C]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],C=w.g[2];var S=w.g[3],T=y+(S^_&(C^S))+v[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+v[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+v[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(S^_&(C^S))+v[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(C^y&(_^C))+v[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=C+(_^S&(y^_))+v[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(y^C&(S^y))+v[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=y+(C^S&(_^C))+v[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+v[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+v[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(C^S&(_^C))+v[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(y^_))+v[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=C+(y^_&(S^y))+v[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(C^S))+v[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=y+(_^C^S)+v[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+v[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+v[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(_^C^S)+v[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^C)+v[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=C+(S^y^_)+v[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^y)+v[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=y+(C^(_|~S))+v[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+v[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+v[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=y+(C^(_|~S))+v[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~C))+v[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=C+(y^(S|~_))+v[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~y))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,v=this.B,C=this.h,S=0;S<y;){if(C==0)for(;S<=_;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(v[C++]=w.charCodeAt(S++),C==this.blockSize){s(this,v),C=0;break}}else for(;S<y;)if(v[C++]=w[S++],C==this.blockSize){s(this,v),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var v=0;32>v;v+=8)w[_++]=this.g[y]>>>v&255;return w};function i(w,y){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],v=!0,C=w.length-1;0<=C;C--){var S=w[C]|0;v&&S==y||(_[C]=S,v=!1)}this.g=_}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return d;if(0>w)return N(h(-w));for(var y=[],_=1,v=0;w>=_;v++)y[v]=w/_|0,_*=4294967296;return new o(y,0)}function u(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return N(u(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),v=d,C=0;C<w.length;C+=8){var S=Math.min(8,w.length-C),T=parseInt(w.substring(C,C+S),y);8>S?(S=h(Math.pow(y,S)),v=v.j(S).add(h(T))):(v=v.j(_),v=v.add(h(T)))}return v}var d=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var v=this.i(_);w+=(0<=v?v:4294967296+v)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(R(this))return"-"+N(this).toString(w);for(var y=h(Math.pow(w,6)),_=this,v="";;){var C=k(_,y).g;_=D(_,C.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=C,I(_))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=D(this,w),R(w)?-1:I(w)?0:1};function N(w){for(var y=w.g.length,_=[],v=0;v<y;v++)_[v]=~w.g[v];return new o(_,~w.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0,C=0;C<=y;C++){var S=v+(this.i(C)&65535)+(w.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);v=T>>>16,S&=65535,T&=65535,_[C]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function D(w,y){return w.add(N(y))}t.j=function(w){if(I(this)||I(w))return d;if(R(this))return R(w)?N(this).j(N(w)):N(N(this).j(w));if(R(w))return N(this.j(N(w)));if(0>this.l(m)&&0>w.l(m))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],v=0;v<2*y;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var C=0;C<w.g.length;C++){var S=this.i(v)>>>16,T=this.i(v)&65535,de=w.i(C)>>>16,me=w.i(C)&65535;_[2*v+2*C]+=T*me,O(_,2*v+2*C),_[2*v+2*C+1]+=S*me,O(_,2*v+2*C+1),_[2*v+2*C+1]+=T*de,O(_,2*v+2*C+1),_[2*v+2*C+2]+=S*de,O(_,2*v+2*C+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new o(_,0)};function O(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function A(w,y){this.g=w,this.h=y}function k(w,y){if(I(y))throw Error("division by zero");if(I(w))return new A(d,d);if(R(w))return y=k(N(w),y),new A(N(y.g),N(y.h));if(R(y))return y=k(w,N(y)),new A(N(y.g),y.h);if(30<w.g.length){if(R(w)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,v=y;0>=v.l(w);)_=M(_),v=M(v);var C=F(_,1),S=F(v,1);for(v=F(v,2),_=F(_,2);!I(v);){var T=S.add(v);0>=T.l(w)&&(C=C.add(_),S=T),v=F(v,1),_=F(_,1)}return y=D(w,C.j(y)),new A(C,y)}for(C=d;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=h(_),T=S.j(y);R(T)||0<T.l(w);)_-=v,S=h(_),T=S.j(y);I(S)&&(S=g),C=C.add(S),w=D(w,T)}return new A(C,w)}t.A=function(w){return k(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)&w.i(v);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)|w.i(v);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)^w.i(v);return new o(_,this.h^w.h)};function M(w){for(var y=w.g.length+1,_=[],v=0;v<y;v++)_[v]=w.i(v)<<1|w.i(v-1)>>>31;return new o(_,w.h)}function F(w,y){var _=y>>5;y%=32;for(var v=w.g.length-_,C=[],S=0;S<v;S++)C[S]=0<y?w.i(S+_)>>>y|w.i(S+_+1)<<32-y:w.i(S+_);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ly=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,pr=o}).apply(typeof hp<"u"?hp:typeof self<"u"?self:typeof window<"u"?window:{});var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uy,ki,hy,ua,au,fy,dy,py;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zo=="object"&&Zo];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var E=0;E<a.length-1;E++){var x=a[E];if(!(x in p))break e;p=p[x]}a=a[a.length-1],E=p[a],f=f(E),f!=E&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,E=!1,x={next:function(){if(!E&&p<a.length){var L=p++;return{value:f(L,a[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function h(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function u(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,E),a.apply(f,x)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:d,g.apply(null,arguments)}function m(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var E=p.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function I(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(E,x,L){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return f.prototype[x].apply(E,G)}}function R(a){const f=a.length;if(0<f){const p=Array(f);for(let E=0;E<f;E++)p[E]=a[E];return p}return[]}function N(a,f){for(let p=1;p<arguments.length;p++){const E=arguments[p];if(l(E)){const x=a.length||0,L=E.length||0;a.length=x+L;for(let G=0;G<L;G++)a[x+G]=E[G]}else a.push(E)}}class D{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var M=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(a,f,p){for(const E in a)f.call(p,a[E],E,a)}function w(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,f){let p,E;for(let x=1;x<arguments.length;x++){E=arguments[x];for(p in E)a[p]=E[p];for(let L=0;L<_.length;L++)p=_[L],Object.prototype.hasOwnProperty.call(E,p)&&(a[p]=E[p])}}function C(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=De;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class de{constructor(){this.h=this.g=null}add(f,p){const E=me.get();E.set(f,p),this.h?this.h.next=E:this.g=E,this.h=E}}var me=new D(()=>new X,a=>a.reset());class X{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let re,te=!1,De=new de,Kt=()=>{const a=c.Promise.resolve(void 0);re=()=>{a.then(Ut)}};var Ut=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){S(p)}var f=me;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}te=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var jn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,f),c.removeEventListener("test",p,f)}catch{}return a}();function nn(a,f){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(M){e:{try{k(f.nodeName);var x=!0;break e}catch{}x=!1}x||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}I(nn,Be);var Ct={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,f,p,E,x){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!E,this.ha=x,this.key=++Z,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,f,p,E,x){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var G=b(a,f,E,x);return-1<G?(f=a[G],p||(f.fa=!1)):(f=new Y(f,this.src,L,!!E,x),f.fa=p,a.push(f)),f};function Pe(a,f){var p=f.type;if(p in a.g){var E=a.g[p],x=Array.prototype.indexOf.call(E,f,void 0),L;(L=0<=x)&&Array.prototype.splice.call(E,x,1),L&&(ne(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function b(a,f,p,E){for(var x=0;x<a.length;++x){var L=a[x];if(!L.da&&L.listener==f&&L.capture==!!p&&L.ha==E)return x}return-1}var P="closure_lm_"+(1e6*Math.random()|0),V={};function H(a,f,p,E,x){if(Array.isArray(f)){for(var L=0;L<f.length;L++)H(a,f[L],p,E,x);return null}return p=ie(p),a&&a[B]?a.K(f,p,h(E)?!!E.capture:!1,x):U(a,f,p,!1,E,x)}function U(a,f,p,E,x,L){if(!f)throw Error("Invalid event type");var G=h(x)?!!x.capture:!!x,Oe=oe(a);if(Oe||(a[P]=Oe=new ye(a)),p=Oe.add(f,p,E,G,L),p.proxy)return p;if(E=$(),p.proxy=E,E.src=a,E.listener=p,a.addEventListener)jn||(x=G),x===void 0&&(x=!1),a.addEventListener(f.toString(),E,x);else if(a.attachEvent)a.attachEvent(W(f.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $(){function a(p){return f.call(a.src,a.listener,p)}const f=q;return a}function Q(a,f,p,E,x){if(Array.isArray(f))for(var L=0;L<f.length;L++)Q(a,f[L],p,E,x);else E=h(E)?!!E.capture:!!E,p=ie(p),a&&a[B]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],p=b(L,p,E,x),-1<p&&(ne(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=oe(a))&&(f=a.g[f.toString()],a=-1,f&&(a=b(f,p,E,x)),(p=-1<a?f[a]:null)&&K(p))}function K(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[B])Pe(f.i,a);else{var p=a.type,E=a.proxy;f.removeEventListener?f.removeEventListener(p,E,a.capture):f.detachEvent?f.detachEvent(W(p),E):f.addListener&&f.removeListener&&f.removeListener(E),(p=oe(f))?(Pe(p,a),p.h==0&&(p.src=null,f[P]=null)):ne(a)}}}function W(a){return a in V?V[a]:V[a]="on"+a}function q(a,f){if(a.da)a=!0;else{f=new nn(f,this);var p=a.listener,E=a.ha||a.src;a.fa&&K(a),a=p.call(E,f)}return a}function oe(a){return a=a[P],a instanceof ye?a:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[J]||(a[J]=function(f){return a.handleEvent(f)}),a[J])}function se(){Ue.call(this),this.i=new ye(this),this.M=this,this.F=null}I(se,Ue),se.prototype[B]=!0,se.prototype.removeEventListener=function(a,f,p,E){Q(this,a,f,p,E)};function le(a,f){var p,E=a.F;if(E)for(p=[];E;E=E.F)p.push(E);if(a=a.M,E=f.type||f,typeof f=="string")f=new Be(f,a);else if(f instanceof Be)f.target=f.target||a;else{var x=f;f=new Be(E,a),v(f,x)}if(x=!0,p)for(var L=p.length-1;0<=L;L--){var G=f.g=p[L];x=Re(G,E,!0,f)&&x}if(G=f.g=a,x=Re(G,E,!0,f)&&x,x=Re(G,E,!1,f)&&x,p)for(L=0;L<p.length;L++)G=f.g=p[L],x=Re(G,E,!1,f)&&x}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],E=0;E<p.length;E++)ne(p[E]);delete a.g[f],a.h--}}this.F=null},se.prototype.K=function(a,f,p,E){return this.i.add(String(a),f,!1,p,E)},se.prototype.L=function(a,f,p,E){return this.i.add(String(a),f,!0,p,E)};function Re(a,f,p,E){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var x=!0,L=0;L<f.length;++L){var G=f[L];if(G&&!G.da&&G.capture==p){var Oe=G.listener,ot=G.ha||G.src;G.fa&&Pe(a.i,G),x=Oe.call(ot,E)!==!1&&x}}return x&&!E.defaultPrevented}function Ae(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(a,f||0)}function st(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class et extends Ue{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(a){Ue.call(this),this.h=a,this.g={}}I(it,Ue);var dt=[];function Hn(a){F(a.g,function(f,p){this.g.hasOwnProperty(p)&&K(f)},a),a.g={}}it.prototype.N=function(){it.aa.N.call(this),Hn(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ss=c.JSON.stringify,It=c.JSON.parse,Bt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function is(){}is.prototype.h=null;function li(a){return a.h||(a.h=a.i())}function jh(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){Be.call(this,"d")}I(Cc,Be);function Pc(){Be.call(this,"c")}I(Pc,Be);var Rr={},Hh=null;function Co(){return Hh=Hh||new se}Rr.La="serverreachability";function $h(a){Be.call(this,Rr.La,a)}I($h,Be);function hi(a){const f=Co();le(f,new $h(f))}Rr.STAT_EVENT="statevent";function qh(a,f){Be.call(this,Rr.STAT_EVENT,a),this.stat=f}I(qh,Be);function At(a){const f=Co();le(f,new qh(f,a))}Rr.Ma="timingevent";function Wh(a,f){Be.call(this,Rr.Ma,a),this.size=f}I(Wh,Be);function fi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},f)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function XE(a,f,p,E,x,L){a.info(function(){if(a.g)if(L)for(var G="",Oe=L.split("&"),ot=0;ot<Oe.length;ot++){var be=Oe[ot].split("=");if(1<be.length){var pt=be[0];be=be[1];var gt=pt.split("_");G=2<=gt.length&&gt[1]=="type"?G+(pt+"="+be+"&"):G+(pt+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+E+") [attempt "+x+"]: "+f+`
`+p+`
`+G})}function ZE(a,f,p,E,x,L,G){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+x+"]: "+f+`
`+p+`
`+L+" "+G})}function os(a,f,p,E){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+tv(a,p)+(E?" "+E:"")})}function ev(a,f){a.info(function(){return"TIMEOUT: "+f})}di.prototype.info=function(){};function tv(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var E=p[a];if(!(2>E.length)){var x=E[1];if(Array.isArray(x)&&!(1>x.length)){var L=x[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<x.length;G++)x[G]=""}}}}return ss(p)}catch{return f}}var Po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kc;function ko(){}I(ko,is),ko.prototype.g=function(){return new XMLHttpRequest},ko.prototype.i=function(){return{}},kc=new ko;function $n(a,f,p,E){this.j=a,this.i=f,this.l=p,this.R=E||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zh}function zh(){this.i=null,this.g="",this.h=!1}var Gh={},Oc={};function Nc(a,f,p){a.L=1,a.v=Mo(vn(f)),a.m=p,a.P=!0,Qh(a,null)}function Qh(a,f){a.F=Date.now(),Oo(a),a.A=vn(a.v);var p=a.A,E=a.R;Array.isArray(E)||(E=[String(E)]),uf(p.i,"t",E),a.C=0,p=a.j.J,a.h=new zh,a.g=Cf(a.j,p?f:null,!a.m),0<a.O&&(a.M=new et(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,E=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(dt[0]=x.toString()),x=dt);for(var L=0;L<x.length;L++){var G=H(p,x[L],E||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),hi(),XE(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const f=this.M;f&&wn(a)==3?f.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const gt=wn(this.g);var f=this.g.Ba();const ls=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||_f(this.g)))){this.J||gt!=4||f==7||(f==8||0>=ls?hi(3):hi(2)),Dc(this);var p=this.g.Z();this.X=p;t:if(Jh(this)){var E=_f(this.g);a="";var x=E.length,L=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),pi(this);var G="";break t}this.h.i=new c.TextDecoder}for(f=0;f<x;f++)this.h.h=!0,a+=this.h.i.decode(E[f],{stream:!(L&&f==x-1)});E.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,ZE(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ot=this.g;if((Oe=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Oe)){var be=Oe;break t}}be=null}if(p=be)os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mc(this,p);else{this.o=!1,this.s=3,At(12),Sr(this),pi(this);break e}}if(this.P){p=!0;let zt;for(;!this.J&&this.C<G.length;)if(zt=nv(this,G),zt==Oc){gt==4&&(this.s=4,At(14),p=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Gh){this.s=4,At(15),os(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else os(this.i,this.l,zt,null),Mc(this,zt);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||G.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)os(this.i,this.l,G,"[Invalid Chunked Response]"),Sr(this),pi(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Bc(pt),pt.M=!0,At(11))}}else os(this.i,this.l,G,null),Mc(this,G);gt==4&&Sr(this),this.o&&!this.J&&(gt==4?Af(this.j,this):(this.o=!1,Oo(this)))}else Ev(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Sr(this),pi(this)}}}catch{}finally{}};function Jh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function nv(a,f){var p=a.C,E=f.indexOf(`
`,p);return E==-1?Oc:(p=Number(f.substring(p,E)),isNaN(p)?Gh:(E+=1,E+p>f.length?Oc:(f=f.slice(E,E+p),a.C=E+p,f)))}$n.prototype.cancel=function(){this.J=!0,Sr(this)};function Oo(a){a.S=Date.now()+a.I,Yh(a,a.I)}function Yh(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(g(a.ba,a),f)}function Dc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ev(this.i,this.A),this.L!=2&&(hi(),At(17)),Sr(this),this.s=2,pi(this)):Yh(this,this.S-a)};function pi(a){a.j.G==0||a.J||Af(a.j,a)}function Sr(a){Dc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Hn(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Mc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||xc(p.h,a))){if(!a.K&&xc(p.h,a)&&p.G==3){try{var E=p.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var x=E;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Bo(p),Fo(p);else break e;Uc(p),At(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=fi(g(p.Za,p),6e3));if(1>=ef(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Pr(p,11)}else if((a.K||p.g==a)&&Bo(p),!O(f))for(x=p.Da.g.parse(f),f=0;f<x.length;f++){let be=x[f];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const pt=be[3];pt!=null&&(p.la=pt,p.j.info("VER="+p.la));const gt=be[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const ls=be[5];ls!=null&&typeof ls=="number"&&0<ls&&(E=1.5*ls,p.L=E,p.j.info("backChannelRequestTimeoutMs_="+E)),E=p;const zt=a.g;if(zt){const Ho=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var L=E.h;L.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Vc(L,L.h),L.h=null))}if(E.D){const jc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;jc&&(E.ya=jc,xe(E.I,E.D,jc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),E=p;var G=a;if(E.qa=Sf(E,E.J?E.ia:null,E.W),G.K){tf(E.h,G);var Oe=G,ot=E.L;ot&&(Oe.I=ot),Oe.B&&(Dc(Oe),Oo(Oe)),E.g=G}else Tf(E);0<p.i.length&&Uo(p)}else be[0]!="stop"&&be[0]!="close"||Pr(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Pr(p,7):Fc(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}hi(4)}catch{}}var rv=class{constructor(a,f){this.g=a,this.map=f}};function Xh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ef(a){return a.h?1:a.g?a.g.size:0}function xc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Vc(a,f){a.g?a.g.add(f):a.h=f}function tf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Xh.prototype.cancel=function(){if(this.i=nf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return R(a.i)}function sv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var f=[],p=a.length,E=0;E<p;E++)f.push(a[E]);return f}f=[],p=0;for(E in a)f[p++]=a[E];return f}function iv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const E in a)f[p++]=E;return f}}}function rf(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=iv(a),E=sv(a),x=E.length,L=0;L<x;L++)f.call(void 0,E[L],p&&p[L],a)}var sf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ov(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var E=a[p].indexOf("="),x=null;if(0<=E){var L=a[p].substring(0,E);x=a[p].substring(E+1)}else L=a[p];f(L,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,No(this,a.j),this.o=a.o,this.g=a.g,Do(this,a.s),this.l=a.l;var f=a.i,p=new _i;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),of(this,p),this.m=a.m}else a&&(f=String(a).match(sf))?(this.h=!1,No(this,f[1]||"",!0),this.o=gi(f[2]||""),this.g=gi(f[3]||"",!0),Do(this,f[4]),this.l=gi(f[5]||"",!0),of(this,f[6]||"",!0),this.m=gi(f[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Cr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(mi(f,af,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(mi(f,af,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(mi(p,p.charAt(0)=="/"?lv:cv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",mi(p,hv)),a.join("")};function vn(a){return new Cr(a)}function No(a,f,p){a.j=p?gi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Do(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function of(a,f,p){f instanceof _i?(a.i=f,fv(a.i,a.h)):(p||(f=mi(f,uv)),a.i=new _i(f,a.h))}function xe(a,f,p){a.i.set(f,p)}function Mo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,av),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function av(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var af=/[#\/\?@]/g,cv=/[#\?:]/g,lv=/[#\?]/g,uv=/[#\?@]/g,hv=/#/g;function _i(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&ov(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=_i.prototype,t.add=function(a,f){qn(this),this.i=null,a=as(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function cf(a,f){qn(a),f=as(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function lf(a,f){return qn(a),f=as(a,f),a.g.has(f)}t.forEach=function(a,f){qn(this),this.g.forEach(function(p,E){p.forEach(function(x){a.call(f,x,E,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let E=0;E<f.length;E++){const x=a[E];for(let L=0;L<x.length;L++)p.push(f[E])}return p},t.V=function(a){qn(this);let f=[];if(typeof a=="string")lf(this,a)&&(f=f.concat(this.g.get(as(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return qn(this),this.i=null,a=as(this,a),lf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function uf(a,f,p){cf(a,f),0<p.length&&(a.i=null,a.g.set(as(a,f),R(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var E=f[p];const L=encodeURIComponent(String(E)),G=this.V(E);for(E=0;E<G.length;E++){var x=L;G[E]!==""&&(x+="="+encodeURIComponent(String(G[E]))),a.push(x)}}return this.i=a.join("&")};function as(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function fv(a,f){f&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(p,E){var x=E.toLowerCase();E!=x&&(cf(this,E),uf(this,x,p))},a)),a.j=f}function dv(a,f){const p=new di;if(c.Image){const E=new Image;E.onload=m(Wn,p,"TestLoadImage: loaded",!0,f,E),E.onerror=m(Wn,p,"TestLoadImage: error",!1,f,E),E.onabort=m(Wn,p,"TestLoadImage: abort",!1,f,E),E.ontimeout=m(Wn,p,"TestLoadImage: timeout",!1,f,E),c.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else f(!1)}function pv(a,f){const p=new di,E=new AbortController,x=setTimeout(()=>{E.abort(),Wn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:E.signal}).then(L=>{clearTimeout(x),L.ok?Wn(p,"TestPingServer: ok",!0,f):Wn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(x),Wn(p,"TestPingServer: error",!1,f)})}function Wn(a,f,p,E,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),E(p)}catch{}}function gv(){this.g=new Bt}function mv(a,f,p){const E=p||"";try{rf(a,function(x,L){let G=x;h(x)&&(G=ss(x)),f.push(E+L+"="+encodeURIComponent(G))})}catch(x){throw f.push(E+"type="+encodeURIComponent("_badmap")),x}}function xo(a){this.l=a.Ub||null,this.j=a.eb||!1}I(xo,is),xo.prototype.g=function(){return new Vo(this.l,this.j)},xo.prototype.i=function(a){return function(){return a}}({});function Vo(a,f){se.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Vo,se),t=Vo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?yi(this):Ei(this),this.readyState==3&&hf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ei(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ff(a){let f="";return F(a,function(p,E){f+=E,f+=":",f+=p,f+=`\r
`}),f}function Lc(a,f,p){e:{for(E in p){var E=!1;break e}E=!0}E||(p=ff(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):xe(a,f,p))}function $e(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I($e,se);var _v=/^https?$/i,yv=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kc.g(),this.v=this.o?li(this.o):li(kc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){df(this,L);return}if(a=p||"",p=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var x in E)p.set(x,E[x]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())p.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),x=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(yv,f,void 0))||E||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of p)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){df(this,L)}};function df(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,pf(a),Lo(a)}function pf(a){a.A||(a.A=!0,le(a,"complete"),le(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,le(this,"complete"),le(this,"abort"),Lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gf(this):this.bb())},t.bb=function(){gf(this)};function gf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)Ae(a.Ea,0,a);else if(le(a,"readystatechange"),wn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var E;if(E=G===0){var x=String(a.D).match(sf)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),E=!_v.test(x?x.toLowerCase():"")}p=E}if(p)le(a,"complete"),le(a,"success");else{a.m=6;try{var L=2<wn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",pf(a)}}finally{Lo(a)}}}}function Lo(a,f){if(a.g){mf(a);const p=a.g,E=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||le(a,"ready");try{p.onreadystatechange=E}catch{}}}function mf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),It(f)}};function _f(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ev(a){const f={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(O(a[E]))continue;var p=C(a[E]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=f[x]||[];f[x]=L,L.push(p)}w(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function yf(a){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,a),this.cb=vi("retryDelaySeedMs",1e4,a),this.Wa=vi("forwardChannelMaxRetries",2,a),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xh(a&&a.concurrentRequestLimit),this.Da=new gv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yf.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,E){At(0),this.W=a,this.H=f||{},p&&E!==void 0&&(this.H.OSID=p,this.H.OAID=E),this.F=this.X,this.I=Sf(this,null,this.W),Uo(this)};function Fc(a){if(Ef(a),a.G==3){var f=a.U++,p=vn(a.I);if(xe(p,"SID",a.K),xe(p,"RID",f),xe(p,"TYPE","terminate"),wi(a,p),f=new $n(a,a.j,f),f.L=2,f.v=Mo(vn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=f.v,p=!0),p||(f.g=Cf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Oo(f)}Rf(a)}function Fo(a){a.g&&(Bc(a),a.g.cancel(),a.g=null)}function Ef(a){Fo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Uo(a){if(!Zh(a.h)&&!a.s){a.s=!0;var f=a.Ga;re||Kt(),te||(re(),te=!0),De.add(f,a),a.B=0}}function vv(a,f){return ef(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(g(a.Ga,a,f),bf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new $n(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),v(L,this.S)):L=this.S),this.m!==null||this.O||(x.H=L,L=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var E=this.i[p];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=wf(this,x,f),p=vn(this.I),xe(p,"RID",a),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),wi(this,p),L&&(this.O?f="headers="+encodeURIComponent(String(ff(L)))+"&"+f:this.m&&Lc(p,this.m,L)),Vc(this.h,x),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",f),xe(p,"SID","null"),x.T=!0,Nc(x,p,null)):Nc(x,p,f),this.G=2}}else this.G==3&&(a?vf(this,a):this.i.length==0||Zh(this.h)||vf(this))};function vf(a,f){var p;f?p=f.l:p=a.U++;const E=vn(a.I);xe(E,"SID",a.K),xe(E,"RID",p),xe(E,"AID",a.T),wi(a,E),a.m&&a.o&&Lc(E,a.m,a.o),p=new $n(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=wf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,p),Nc(p,E,f)}function wi(a,f){a.H&&F(a.H,function(p,E){xe(f,E,p)}),a.l&&rf({},function(p,E){xe(f,E,p)})}function wf(a,f,p){p=Math.min(a.i.length,p);var E=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let L=-1;for(;;){const G=["count="+p];L==-1?0<p?(L=x[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Oe=!0;for(let ot=0;ot<p;ot++){let be=x[ot].g;const pt=x[ot].map;if(be-=L,0>be)L=Math.max(0,x[ot].g-100),Oe=!1;else try{mv(pt,G,"req"+be+"_")}catch{E&&E(pt)}}if(Oe){E=G.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,E}function Tf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;re||Kt(),te||(re(),te=!0),De.add(f,a),a.v=0}}function Uc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(g(a.Fa,a),bf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,If(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Fo(this),If(this))};function Bc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function If(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=vn(a.qa);xe(f,"RID","rpc"),xe(f,"SID",a.K),xe(f,"AID",a.T),xe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(f,"TO",a.ja),xe(f,"TYPE","xmlhttp"),wi(a,f),a.m&&a.o&&Lc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Mo(vn(f)),p.m=null,p.P=!0,Qh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Fo(this),Uc(this),At(19))};function Bo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Af(a,f){var p=null;if(a.g==f){Bo(a),Bc(a),a.g=null;var E=2}else if(xc(a.h,f))p=f.D,tf(a.h,f),E=1;else return;if(a.G!=0){if(f.o)if(E==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var x=a.B;E=Co(),le(E,new Wh(E,p)),Uo(a)}else Tf(a);else if(x=f.s,x==3||x==0&&0<f.X||!(E==1&&vv(a,f)||E==2&&Uc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),x){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function bf(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function Pr(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),E=a.Xa;const x=!E;E=new Cr(E||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||No(E,"https"),Mo(E),x?dv(E.toString(),p):pv(E.toString(),p)}else At(2);a.G=0,a.l&&a.l.sa(f),Rf(a),Ef(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Rf(a){if(a.G=0,a.ka=[],a.l){const f=nf(a.h);(f.length!=0||a.i.length!=0)&&(N(a.ka,f),N(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Sf(a,f,p){var E=p instanceof Cr?vn(p):new Cr(p);if(E.g!="")f&&(E.g=f+"."+E.g),Do(E,E.s);else{var x=c.location;E=x.protocol,f=f?f+"."+x.hostname:x.hostname,x=+x.port;var L=new Cr(null);E&&No(L,E),f&&(L.g=f),x&&Do(L,x),p&&(L.l=p),E=L}return p=a.D,f=a.ya,p&&f&&xe(E,p,f),xe(E,"VER",a.la),wi(a,E),E}function Cf(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new $e(new xo({eb:p})):new $e(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pf(){}t=Pf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function jo(){}jo.prototype.g=function(a,f){return new Dt(a,f)};function Dt(a,f){se.call(this),this.g=new yf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!O(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new cs(this)}I(Dt,se),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Fc(this.g)},Dt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ss(a),a=p);f.i.push(new rv(f.Ya++,a)),f.G==3&&Uo(f)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Fc(this.g),delete this.g,Dt.aa.N.call(this)};function kf(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}I(kf,Cc);function Of(){Pc.call(this),this.status=1}I(Of,Pc);function cs(a){this.g=a}I(cs,Pf),cs.prototype.ua=function(){le(this.g,"a")},cs.prototype.ta=function(a){le(this.g,new kf(a))},cs.prototype.sa=function(a){le(this.g,new Of)},cs.prototype.ra=function(){le(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,py=function(){return new jo},dy=function(){return Co()},fy=Rr,au={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Po.NO_ERROR=0,Po.TIMEOUT=8,Po.HTTP_ERROR=6,ua=Po,Kh.COMPLETE="complete",hy=Kh,jh.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",se.prototype.listen=se.prototype.K,ki=jh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,uy=$e}).apply(typeof Zo<"u"?Zo:typeof self<"u"?self:typeof window<"u"?window:{});const fp="@firebase/firestore",dp="4.9.0";/**
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
 */let si="12.0.0";/**
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
 */const Yr=new lh("@firebase/firestore");function gs(){return Yr.logLevel}function ee(t,...e){if(Yr.logLevel<=_e.DEBUG){const n=e.map(fh);Yr.debug(`Firestore (${si}): ${t}`,...n)}}function Vn(t,...e){if(Yr.logLevel<=_e.ERROR){const n=e.map(fh);Yr.error(`Firestore (${si}): ${t}`,...n)}}function Ks(t,...e){if(Yr.logLevel<=_e.WARN){const n=e.map(fh);Yr.warn(`Firestore (${si}): ${t}`,...n)}}function fh(t){if(typeof t=="string")return t;try{/**
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
 */function ge(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,gy(t,r,n)}function gy(t,e,n){let r=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function He(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||gy(e,s,r)}function we(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class my{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class X0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Z0{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new my(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class eC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new eC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new pp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _y{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function cu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ml(s)===ml(i)?Ee(s,i):ml(s)?1:-1}return Ee(t.length,e.length)}const sC=55296,iC=57343;function ml(t){const e=t.charCodeAt(0);return e>=sC&&e<=iC}function zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const gp="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ge(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):cu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class je extends an{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const oC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends an{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return oC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gp}static keyField(){return new St([gp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ae(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ae(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(je.fromString(e))}static fromName(e){return new fe(je.fromString(e).popFirst(5))}static empty(){return new fe(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new je(e.slice()))}}/**
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
 */function aC(t,e,n){if(!n)throw new ae(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cC(t,e,n,r){if(e===!0&&r===!0)throw new ae(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mp(t){if(fe.isDocumentKey(t))throw new ae(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function uC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function lu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uC(t);throw new ae(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function vo(t,e){if(!lC(t))throw new ae(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ae(z.INVALID_ARGUMENT,n);return!0}/**
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
 */const _p=-62135596800,yp=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yp);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_p)throw new ae(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yp}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vo(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_p;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:Qe("string",Ge._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */const io=-1;function hC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new yr(s,fe.empty(),e)}function fC(t){return new yr(t.readTime,t.key,io)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(pe.min(),fe.empty(),io)}static max(){return new yr(pe.max(),fe.empty(),io)}}function dC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const pC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fc(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==pC)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(u=>{o[h]=u,++c,c===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function mC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}dc.ce=-1;/**
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
 */const _C=-1;function pc(t){return t==null}function uu(t){return t===0&&1/t==-1/0}/**
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
 */const yy="";function yC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ep(e)),e=EC(t.get(n),e);return Ep(e)}function EC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case yy:n+="";break;default:n+=i}}return n}function Ep(t){return t+yy+""}/**
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
 */function vp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ea(this.root,e,this.comparator,!0)}}class ea{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wp(this.data.getIterator())}getIteratorFrom(e){return new wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ar{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new ar([])}unionWith(e){let n=new Ze(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ar(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ey extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ey("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const wC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=wC.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */const vy="server_timestamp",wy="__type__",Ty="__previous_value__",Iy="__local_write_time__";function dh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[wy])==null?void 0:r.stringValue)===vy}function gc(t){const e=t.mapValue.fields[Ty];return dh(e)?gc(e):e}function oo(t){const e=Er(t.mapValue.fields[Iy].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class TC{constructor(e,n,r,s,i,o,c,l,h,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=u}}const Va="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||Va}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===Va}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const IC="__type__",AC="__max__",ta={mapValue:{}},bC="__vector__",hu="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dh(t)?4:SC(t)?9007199254740991:RC(t)?10:11:ge(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),c=Er(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?uu(o)===uu(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vp(o)!==vp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!_n(o[l],c[l])))return!1;return!0}(t,e);default:return ge(52216,{left:t})}}function co(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Tp(t.timestampValue,e.timestampValue);case 4:return Tp(oo(t),oo(e));case 5:return cu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=vr(i),l=vr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const u=Ee(c[h],l[h]);if(u!==0)return u}return Ee(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ee(We(i.latitude),We(o.latitude));return c!==0?c:Ee(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ip(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,m,I,R;const c=i.fields||{},l=o.fields||{},h=(g=c[hu])==null?void 0:g.arrayValue,u=(m=l[hu])==null?void 0:m.arrayValue,d=Ee(((I=h==null?void 0:h.values)==null?void 0:I.length)||0,((R=u==null?void 0:u.values)==null?void 0:R.length)||0);return d!==0?d:Ip(h,u)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ta.mapValue&&o===ta.mapValue)return 0;if(i===ta.mapValue)return 1;if(o===ta.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},u=Object.keys(h);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const g=cu(l[d],u[d]);if(g!==0)return g;const m=Gs(c[l[d]],h[u[d]]);if(m!==0)return m}return Ee(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ge(23264,{he:n})}}function Tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Er(t),r=Er(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function Ip(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gs(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Qs(t){return fu(t)}function fu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fu(n.fields[o])}`;return s+"}"}(t.mapValue):ge(61005,{value:t})}function ha(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(t);return e?16+ha(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ha(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return wo(r.fields,(i,o)=>{s+=i.length+ha(o)}),s}(t.mapValue);default:throw ge(13486,{value:t})}}function du(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function Ap(t){return!!t&&"nullValue"in t}function bp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _l(t){return!!t&&"mapValue"in t}function RC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[IC])==null?void 0:r.stringValue)===bC}function qi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return wo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return{...t}}function SC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===AC}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=St.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=qi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_l(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wo(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ln(qi(this.value))}}/**
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
 */class La{constructor(e,n){this.position=e,this.inclusive=n}}function Rp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function CC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ay{}class Xe extends Ay{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kC(e,n,r):n==="array-contains"?new DC(e,r):n==="in"?new MC(e,r):n==="not-in"?new xC(e,r):n==="array-contains-any"?new VC(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OC(e,r):new NC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Ay{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return by(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function by(t){return t.op==="and"}function Ry(t){return PC(t)&&by(t)}function PC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function pu(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(Ry(t))return t.filters.map(e=>pu(e)).join(",");{const e=t.filters.map(n=>pu(n)).join(",");return`${t.op}(${e})`}}function Sy(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Sy(o,s.filters[c]),!0):!1}(t,e):void ge(19439)}function Cy(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cy).join(" ,")+"}"}(t):"Filter"}class kC extends Xe{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class OC extends Xe{constructor(e,n){super(e,"in",n),this.keys=Py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NC extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Py(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class DC extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&co(n.arrayValue,this.value)}}class MC extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class xC extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!co(this.value.arrayValue,n)}}class VC extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
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
 */class LC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Cp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LC(t,e,n,r,s,i,o)}function gh(t){const e=we(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Te=n}return e.Te}function mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sp(t.startAt,e.startAt)&&Sp(t.endAt,e.endAt)}function gu(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function FC(t,e,n,r,s,i,o,c){return new mc(t,e,n,r,s,i,o,c)}function ky(t){return new mc(t)}function Pp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UC(t){return t.collectionGroup!==null}function Wi(t){const e=we(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(St.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Fa(i,r))}),n.has(St.keyField().canonicalString())||e.Ie.push(new Fa(St.keyField(),r))}return e.Ie}function dn(t){const e=we(t);return e.Ee||(e.Ee=BC(e,Wi(t))),e.Ee}function BC(t,e){if(t.limitType==="F")return Cp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fa(s.field,i)});const n=t.endAt?new La(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new La(t.startAt.position,t.startAt.inclusive):null;return Cp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mu(t,e,n){return new mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _c(t,e){return mh(dn(t),dn(e))&&t.limitType===e.limitType}function Oy(t){return`${gh(dn(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cy(s)).join(", ")}]`),pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Rp(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Wi(r),s)||r.endAt&&!function(o,c,l){const h=Rp(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Wi(r),s))}(t,e)}function jC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ny(t){return(e,n)=>{let r=!1;for(const s of Wi(t)){const i=HC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HC(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Gs(l,h):ge(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:t.dir})}}/**
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
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wo(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vC(this.inner)}size(){return this.innerSize}}/**
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
 */const $C=new Ke(fe.comparator);function Tr(){return $C}const Dy=new Ke(fe.comparator);function Oi(...t){let e=Dy;for(const n of t)e=e.insert(n.key,n);return e}function qC(t){let e=Dy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return Ki()}function My(){return Ki()}function Ki(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const WC=new Ze(fe.comparator);function Ie(...t){let e=WC;for(const n of t)e=e.add(n);return e}const KC=new Ze(Ee);function zC(){return KC}/**
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
 */function GC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uu(e)?"-0":e}}function QC(t){return{integerValue:""+t}}/**
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
 */class Ec{constructor(){this._=void 0}}function JC(t,e,n){return t instanceof _u?function(s,i){const o={fields:{[wy]:{stringValue:vy},[Iy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&dh(i)&&(i=gc(i)),i&&(o.fields[Ty]=i),{mapValue:o}}(n,e):t instanceof Ua?xy(t,e):t instanceof Ba?Vy(t,e):function(s,i){const o=XC(s,i),c=kp(o)+kp(s.Ae);return du(o)&&du(s.Ae)?QC(c):GC(s.serializer,c)}(t,e)}function YC(t,e,n){return t instanceof Ua?xy(t,e):t instanceof Ba?Vy(t,e):n}function XC(t,e){return t instanceof yu?function(r){return du(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _u extends Ec{}class Ua extends Ec{constructor(e){super(),this.elements=e}}function xy(t,e){const n=Ly(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ba extends Ec{constructor(e){super(),this.elements=e}}function Vy(t,e){let n=Ly(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class yu extends Ec{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function kp(t){return We(t.integerValue||t.doubleValue)}function Ly(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ua&&s instanceof Ua||r instanceof Ba&&s instanceof Ba?zs(r.elements,s.elements,_n):r instanceof yu&&s instanceof yu?_n(r.Ae,s.Ae):r instanceof _u&&s instanceof _u}(t.transform,e.transform)}class Wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wr}static exists(e){return new Wr(void 0,e)}static updateTime(e){return new Wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _h{}function Fy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tP(t.key,Wr.none()):new yh(t.key,t.data,Wr.none());{const n=t.data,r=ln.empty();let s=new Ze(St.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vc(t.key,r,new ar(s.toArray()),Wr.none())}}function eP(t,e,n){t instanceof yh?function(s,i,o){const c=s.value.clone(),l=Np(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof vc?function(s,i,o){if(!fa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Np(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Uy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof yh?function(i,o,c,l){if(!fa(i.precondition,o))return c;const h=i.value.clone(),u=Dp(i.fieldTransforms,l,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof vc?function(i,o,c,l){if(!fa(i.precondition,o))return c;const h=Dp(i.fieldTransforms,l,o),u=o.data;return u.setAll(Uy(i)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return fa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Op(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,(i,o)=>ZC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yh extends _h{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vc extends _h{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Np(t,e,n){const r=new Map;He(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,YC(o,c,n[s]))}return r}function Dp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,JC(i,o,e))}return r}class tP extends _h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=My();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Fy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>Op(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>Op(n,r))}}/**
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
 */class rP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ve;function By(t){if(t===void 0)return Vn("GRPC error has no .code"),z.UNKNOWN;switch(t){case ze.OK:return z.OK;case ze.CANCELLED:return z.CANCELLED;case ze.UNKNOWN:return z.UNKNOWN;case ze.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ze.INTERNAL:return z.INTERNAL;case ze.UNAVAILABLE:return z.UNAVAILABLE;case ze.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ze.NOT_FOUND:return z.NOT_FOUND;case ze.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ze.ABORTED:return z.ABORTED;case ze.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ze.DATA_LOSS:return z.DATA_LOSS;default:return ge(39323,{code:t})}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iP(){return new TextEncoder}/**
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
 */const oP=new pr([4294967295,4294967295],0);function Mp(t){const e=iP().encode(t),n=new ly;return n.update(e),new Uint8Array(n.digest())}function xp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class Eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ni(`Invalid padding: ${n}`);if(r<0)throw new Ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ni(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(oP)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Mp(e),[r,s]=xp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Eh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Mp(e),[r,s]=xp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,To.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(pe.min(),s,new Ke(Ee),Tr(),Ie())}}class To{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new To(r,n,Ie(),Ie(),Ie())}}/**
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
 */class da{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class jy{constructor(e,n){this.targetId=e,this.Ce=n}}class Hy{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vp{constructor(){this.ve=0,this.Fe=Lp(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge(38017,{changeType:i})}}),new To(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Lp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class aP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tr(),this.Je=na(),this.He=na(),this.Ye=new Ke(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(gu(i))if(r===0){const o=new fe(i.path);this.et(n,o,vt.newNoDocument(o,pe.min()))}else He(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=vr(r).toUint8Array()}catch(l){if(l instanceof Ey)return Ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Eh(o,s,i)}catch(l){return Ks(l instanceof Ni?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&gu(c.target)){const l=new fe(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ie();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new wc(e,n,this.Ye,this.je,r);return this.je=Tr(),this.Je=na(),this.He=na(),this.Ye=new Ke(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Vp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ze(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vp),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function na(){return new Ke(fe.comparator)}function Lp(){return new Ke(fe.comparator)}const cP={asc:"ASCENDING",desc:"DESCENDING"},lP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uP={and:"AND",or:"OR"};class hP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Eu(t,e){return t.useProto3Json||pc(e)?e:{value:e}}function fP(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ks(t){return He(!!t,49232),pe.fromTimestamp(function(n){const r=Er(n);return new Ge(r.seconds,r.nanos)}(t))}function pP(t,e){return vu(t,e).canonicalString()}function vu(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $y(t){const e=je.fromString(t);return He(Gy(e),10190,{key:e.toString()}),e}function yl(t,e){const n=$y(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(Wy(n))}function qy(t,e){return pP(t.databaseId,e)}function gP(t){const e=$y(t);return e.length===4?je.emptyPath():Wy(e)}function Fp(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wy(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function mP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ge(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,u){return h.useProto3Json?(He(u===void 0||typeof u=="string",58123),ft.fromBase64String(u||"")):(He(u===void 0||u instanceof Buffer||u instanceof Uint8Array,16193),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const u=h.code===void 0?z.UNKNOWN:By(h.code);return new ae(u,h.message||"")}(o);n=new Hy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yl(t,r.document.name),i=ks(r.document.updateTime),o=r.document.createTime?ks(r.document.createTime):pe.min(),c=new ln({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),h=r.targetIds||[],u=r.removedTargetIds||[];n=new da(h,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yl(t,r.document),i=r.readTime?ks(r.readTime):pe.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new da([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yl(t,r.document),i=r.removedTargetIds||[];n=new da([],i,s,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sP(s,i),c=r.targetId;n=new jy(c,o)}}return n}function _P(t,e){return{documents:[qy(t,e.path)]}}function yP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qy(t,s);const i=function(h){if(h.length!==0)return zy(yn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(u=>function(g){return{field:_s(g.field),direction:wP(g.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Eu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function EP(t){let e=gP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1,65062);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(d){const g=Ky(d);return g instanceof yn&&Ry(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(I){return new Fa(ys(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,pc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,m=d.values||[];return new La(m,g)}(n.startAt));let h=null;return n.endAt&&(h=function(d){const g=!d.before,m=d.values||[];return new La(m,g)}(n.endAt)),FC(e,s,o,i,c,"F",l,h)}function vP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ky(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ys(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ys(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>Ky(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(n.compositeFilter.op))}(t):ge(30097,{filter:t})}function wP(t){return cP[t]}function TP(t){return lP[t]}function IP(t){return uP[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ys(t){return St.fromServerFormat(t.fieldPath)}function zy(t){return t instanceof Xe?function(n){if(n.op==="=="){if(bp(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(Ap(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bp(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(Ap(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:TP(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>zy(s));return r.length===1?r[0]:{compositeFilter:{op:IP(n.op),filters:r}}}(t):ge(54877,{filter:t})}function Gy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class AP{constructor(e){this.yt=e}}function bP(t){const e=EP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mu(e,e.limit,"L"):e}/**
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
 */class RP{constructor(){this.Cn=new SP}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(yr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class SP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(je.comparator)).toArray()}}/**
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
 */const Up={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qy=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(Qy,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
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
 */class Js{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Js(0)}static cr(){return new Js(-1)}}/**
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
 */const Bp="LruGarbageCollector",CP=1048576;function jp([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class PP{constructor(e){this.Ir=e,this.buffer=new Ze(jp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Bp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ii(n)?ee(Bp,"Ignoring IndexedDB error during garbage collection: ",n):await fc(n)}await this.Vr(3e5)})}}class OP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(dc.ce);const r=new PP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Up)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Up):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(h=Date.now(),gs()<=_e.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(h-l)+`ms
Total Duration: ${h-u}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function NP(t,e){return new OP(t,e)}/**
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
 */class DP{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zi(r.mutation,s,ar.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Tr();const o=Ki(),c=function(){return Ki()}();return n.forEach((l,h)=>{const u=r.get(h.key);s.has(h.key)&&(u===void 0||u.mutation instanceof vc)?i=i.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),zi(u.mutation,h,u.mutation.getFieldMask(),Ge.now())):o.set(h.key,ar.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>c.set(h,new MP(u,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Ki();let s=new Ke((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let u=r.get(l)||ar.empty();u=c.applyToLocalView(h,u),r.set(l,u);const d=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,u=l.value,d=My();u.forEach(g=>{if(!i.has(g)){const m=Fy(n.get(g),r.get(g));m!==null&&d.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Lr());let c=io,l=i;return o.next(h=>j.forEach(h,(u,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(u)?j.resolve():this.remoteDocumentCache.getEntry(e,u).next(g=>{l=l.insert(u,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ie())).next(u=>({batchId:c,changes:qC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,l=>{const h=function(d,g){return new mc(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(u=>{u.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,vt.newInvalidDocument(u)))});let c=Oi();return o.forEach((l,h)=>{const u=i.get(l);u!==void 0&&zi(u.mutation,h,ar.empty(),Ge.now()),yc(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class VP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ks(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:bP(s.bundledQuery),readTime:ks(s.readTime)}}(n)),j.resolve()}}/**
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
 */class LP{constructor(){this.overlays=new Ke(fe.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new fe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let u=i.get(h.largestBatchId);u===null&&(u=Lr(),i=i.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const c=Lr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,u)=>c.set(h,u)),!(c.size()>=s)););return j.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rP(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class FP{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class vh{constructor(){this.Qr=new Ze(tt.$r),this.Ur=new Ze(tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new tt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new je([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new je([])),r=new tt(n,e),s=new tt(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
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
 */class UP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(tt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?_C:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Ee);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new tt(new fe(i),0);let c=new Ze(Ee);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),j.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new tt(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BP{constructor(e){this.ri=e,this.docs=function(){return new Ke(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,c=new fe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:u}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dC(fC(u),r)<=0||(s.has(u.key)||yc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jP(this)}getSize(e){return j.resolve(this.size)}}class jP extends DP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class HP{constructor(e){this.persistence=e,this.si=new ns(n=>gh(n),mh),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new vh,this.targetCount=0,this.ai=Js.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class Jy{constructor(e,n){this.ui={},this.overlays={},this.ci=new dc(0),this.li=!1,this.li=!0,this.hi=new FP,this.referenceDelegate=e(this),this.Pi=new HP(this),this.indexManager=new RP,this.remoteDocumentCache=function(s){return new BP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new AP(n),this.Ii=new VP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new UP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new $P(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class $P extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.Ri=new vh,this.Vi=null}static mi(e){return new wh(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ja{constructor(e,n){this.persistence=e,this.pi=new ns(r=>yC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=NP(this,n)}static mi(e,n){return new ja(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ha(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Th{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Th(e,n.fromCache,r,s)}}/**
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
 */class qP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return kS()?8:mC(Tt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new qP;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(gs()<=_e.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(gs()<=_e.DEBUG&&ee("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(gs()<=_e.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):j.resolve())}ys(e,n){if(Pp(n))return j.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=mu(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,mu(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Pp(n)||s.isEqual(pe.min())?j.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(gs()<=_e.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.vs(e,o,n,hC(s,io)).next(c=>c))})}Ds(e,n){let r=new Ze(Ny(e));return n.forEach((s,i)=>{yc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return gs()<=_e.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ms(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ih="LocalStore",KP=3e8;class zP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ke(Ee),this.xs=new ns(i=>gh(i),mh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function GP(t,e,n,r){return new zP(t,e,n,r)}async function Yy(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const h of s){o.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}for(const h of i){c.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function Xy(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function QP(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((u,d)=>{const g=s.get(d);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,u.addedDocuments,d)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(ft.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(d,m),function(R,N,D){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=KP?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,m,u)&&c.push(n.Pi.updateTargetData(i,m))});let l=Tr(),h=Ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),c.push(JP(i,o,e.documentUpdates).next(u=>{l=u.ks,h=u.qs})),!r.isEqual(pe.min())){const u=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(u)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function JP(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tr();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(Ih,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function YP(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function wu(t,e,n){const r=we(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ii(o))throw o;ee(Ih,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Hp(t,e,n){const r=we(t);let s=pe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,u){const d=we(l),g=d.xs.get(u);return g!==void 0?j.resolve(d.Ms.get(g)):d.Pi.getTargetData(h,u)}(r,o,dn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ie())).next(c=>(XP(r,jC(e),c),{documents:c,Qs:i})))}function XP(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class $p{constructor(){this.activeTargetIds=zC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZP{constructor(){this.Mo=new $p,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $p,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e1{Oo(e){}shutdown(){}}/**
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
 */let ra=null;function Tu(){return ra===null?ra=function(){return 268435456+Math.round(2147483648*Math.random())}():ra++,"0x"+ra.toString(16)}/**
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
 */const El="RestConnection",t1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class n1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Va?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Tu(),c=this.zo(e,n.toUriEncodedString());ee(El,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),u=ni(h);return this.Jo(e,c,l,r,u).then(d=>(ee(El,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Ks(El,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=t1[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class r1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const mt="WebChannelConnection";class s1 extends n1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Tu();return new Promise((c,l)=>{const h=new uy;h.setWithCredentials(!0),h.listenOnce(hy.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ua.NO_ERROR:const d=h.getResponseJson();ee(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case ua.TIMEOUT:ee(mt,`RPC '${e}' ${o} timed out`),l(new ae(z.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const g=h.getStatus();if(ee(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let m=h.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(O)>=0?O:z.UNKNOWN}(I.status);l(new ae(R,I.message))}else l(new ae(z.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new ae(z.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{ee(mt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(s);ee(mt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",u,r,15)})}T_(e,n,r){const s=Tu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=py(),c=dy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);this.I_(d);let g=!1,m=!1;const I=new r1({Yo:N=>{m?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Zo:()=>d.close()}),R=(N,D,O)=>{N.listen(D,A=>{try{O(A)}catch(k){setTimeout(()=>{throw k},0)}})};return R(d,ki.EventType.OPEN,()=>{m||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),I.o_())}),R(d,ki.EventType.CLOSE,()=>{m||(m=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),I.a_(),this.E_(d))}),R(d,ki.EventType.ERROR,N=>{m||(m=!0,Ks(mt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),I.a_(new ae(z.UNAVAILABLE,"The operation could not be completed")))}),R(d,ki.EventType.MESSAGE,N=>{var D;if(!m){const O=N.data[0];He(!!O,16349);const A=O,k=(A==null?void 0:A.error)||((D=A[0])==null?void 0:D.error);if(k){ee(mt,`RPC '${e}' stream ${s} received error:`,k);const M=k.status;let F=function(_){const v=ze[_];if(v!==void 0)return By(v)}(M),w=k.message;F===void 0&&(F=z.INTERNAL,w="Unknown error status: "+M+" with message "+k.message),m=!0,I.a_(new ae(F,w)),d.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,O),I.u_(O)}}),R(c,fy.STAT_EVENT,N=>{N.stat===au.PROXY?ee(mt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===au.NOPROXY&&ee(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.__()},0),I}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function vl(){return typeof document<"u"?document:null}/**
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
 */function Zy(t){return new hP(t,!0)}/**
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
 */class eE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Kp="PersistentStream";class i1{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new eE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new ae(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(Kp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(Kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o1 extends i1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=mP(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?ks(o.readTime):pe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Fp(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=gu(l)?{documents:_P(i,l)}:{query:yP(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=dP(i,o.resumeToken);const h=Eu(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){c.readTime=fP(i,o.snapshotVersion.toTimestamp());const h=Eu(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=vP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Fp(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class a1{}class c1 extends a1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ae(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,vu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(z.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,vu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(z.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class l1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ys="RemoteStore";class u1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ao(this)&&(ee(Ys,"Restarting streams for network reachability change."),await async function(l){const h=we(l);h.Ea.add(4),await Io(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Tc(h)}(this))})}),this.Ra=new l1(r,s)}}async function Tc(t){if(Ao(t))for(const e of t.da)await e(!0)}async function Io(t){for(const e of t.da)await e(!1)}function tE(t,e){const n=we(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Sh(n)?Rh(n):oi(n).O_()&&bh(n,e))}function Ah(t,e){const n=we(t),r=oi(n);n.Ia.delete(e),r.O_()&&nE(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ao(n)&&n.Ra.set("Unknown"))}function bh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oi(t).Y_(e)}function nE(t,e){t.Va.Ue(e),oi(t).Z_(e)}function Rh(t){t.Va=new aP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oi(t).start(),t.Ra.ua()}function Sh(t){return Ao(t)&&!oi(t).x_()&&t.Ia.size>0}function Ao(t){return we(t).Ea.size===0}function rE(t){t.Va=void 0}async function h1(t){t.Ra.set("Online")}async function f1(t){t.Ia.forEach((e,n)=>{bh(t,e)})}async function d1(t,e){rE(t),Sh(t)?(t.Ra.ha(e),Rh(t)):t.Ra.set("Unknown")}async function p1(t,e,n){if(t.Ra.set("Online"),e instanceof Hy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){ee(Ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zp(t,r)}else if(e instanceof da?t.Va.Ze(e):e instanceof jy?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await Xy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.Ia.get(h);u&&i.Ia.set(h,u.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const u=i.Ia.get(l);if(!u)return;i.Ia.set(l,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),nE(i,l);const d=new cr(u.target,l,h,u.sequenceNumber);bh(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(Ys,"Failed to raise snapshot:",r),await zp(t,r)}}async function zp(t,e,n){if(!ii(e))throw e;t.Ea.add(1),await Io(t),t.Ra.set("Offline"),n||(n=()=>Xy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Ys,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Tc(t)})}async function Gp(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ee(Ys,"RemoteStore received new credentials");const r=Ao(n);n.Ea.add(3),await Io(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Tc(n)}async function g1(t,e){const n=we(t);e?(n.Ea.delete(2),await Tc(n)):e||(n.Ea.add(2),await Io(n),n.Ra.set("Unknown"))}function oi(t){return t.ma||(t.ma=function(n,r,s){const i=we(n);return i.sa(),new o1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:h1.bind(null,t),t_:f1.bind(null,t),r_:d1.bind(null,t),H_:p1.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Sh(t)?Rh(t):t.Ra.set("Unknown")):(await t.ma.stop(),rE(t))})),t.ma}/**
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
 */class Ch{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ch(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sE(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),ii(t))return new ae(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Os{static emptySet(e){return new Os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Oi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qp{constructor(){this.ga=new Ke(fe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Xs(e,n,Os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class m1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _1{constructor(){this.queries=Jp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=Jp(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new ae(z.ABORTED,"Firestore shutting down"))}}function Jp(){return new ns(t=>Oy(t),_c)}async function y1(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new m1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=sE(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ph(n)}async function E1(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function v1(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Ph(n)}function w1(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ph(t){t.Ca.forEach(e=>{e.next()})}var Iu,Yp;(Yp=Iu||(Iu={})).Ma="default",Yp.Cache="cache";class T1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Iu.Cache}}/**
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
 */class iE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class I1{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Ny(e),this.tu=new Os(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Qp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const g=s.get(u),m=yc(this.query,d)?d:null,I=!!g&&this.mutatedKeys.has(g.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;g&&m?g.data.isEqual(m.data)?I!==R&&(r.track({type:3,doc:m}),N=!0):this.su(g,m)||(r.track({type:2,doc:m}),N=!0,(l&&this.eu(m,l)>0||h&&this.eu(m,h)<0)&&(c=!0)):!g&&m?(r.track({type:0,doc:m}),N=!0):g&&!m&&(r.track({type:1,doc:g}),N=!0,(l||h)&&(c=!0)),N&&(m?(o=o.add(m),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((u,d)=>function(m,I){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:N})}};return R(m)-R(I)}(u.type,d.type)||this.eu(u.doc,d.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Xs(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new oE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new iE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const kh="SyncEngine";class A1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b1{constructor(e){this.key=e,this.hu=!1}}class R1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ns(c=>Oy(c),_c),this.Iu=new Map,this.Eu=new Set,this.du=new Ke(fe.comparator),this.Au=new Map,this.Ru=new vh,this.Vu={},this.mu=new Map,this.fu=Js.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function S1(t,e,n=!0){const r=hE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await aE(r,e,n,!0),s}async function C1(t,e){const n=hE(t);await aE(n,e,!0,!1)}async function aE(t,e,n,r){const s=await YP(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await P1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&tE(t.remoteStore,s),c}async function P1(t,e,n,r,s){t.pu=(d,g,m)=>async function(R,N,D,O){let A=N.view.ru(D);A.Cs&&(A=await Hp(R.localStore,N.query,!1).then(({documents:w})=>N.view.ru(w,A)));const k=O&&O.targetChanges.get(N.targetId),M=O&&O.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(A,R.isPrimaryClient,k,M);return Zp(R,N.targetId,F.au),F.snapshot}(t,d,g,m);const i=await Hp(t.localStore,e,!0),o=new I1(e,i.Qs),c=o.ru(i.documents),l=To.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Zp(t,n,h.au);const u=new A1(e,n,o);return t.Tu.set(e,u),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function k1(t,e,n){const r=we(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!_c(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ah(r.remoteStore,s.targetId),Au(r,s.targetId)}).catch(fc)):(Au(r,s.targetId),await wu(r.localStore,s.targetId,!0))}async function O1(t,e){const n=we(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ah(n.remoteStore,r.targetId))}async function cE(t,e){const n=we(t);try{const r=await QP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?He(o.hu,14607):s.removedDocuments.size>0&&(He(o.hu,42227),o.hu=!1))}),await uE(n,r,e)}catch(r){await fc(r)}}function Xp(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=we(o);l.onlineState=c;let h=!1;l.queries.forEach((u,d)=>{for(const g of d.Sa)g.va(c)&&(h=!0)}),h&&Ph(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N1(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ke(fe.comparator);o=o.insert(i,vt.newNoDocument(i,pe.min()));const c=Ie().add(i),l=new wc(pe.min(),new Map,new Ke(Ee),o,c);await cE(r,l),r.du=r.du.remove(i),r.Au.delete(e),Oh(r)}else await wu(r.localStore,e,!1).then(()=>Au(r,e,n)).catch(fc)}function Au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||lE(t,r)})}function lE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ah(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Oh(t))}function Zp(t,e,n){for(const r of n)r instanceof iE?(t.Ru.addReference(r.key,e),D1(t,r)):r instanceof oE?(ee(kh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||lE(t,r.key)):ge(19791,{wu:r})}function D1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(kh,"New document in limbo: "+n),t.Eu.add(r),Oh(t))}function Oh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new fe(je.fromString(e)),r=t.fu.next();t.Au.set(r,new b1(n)),t.du=t.du.insert(n,r),tE(t.remoteStore,new cr(dn(ky(n.path)),r,"TargetPurposeLimboResolution",dc.ce))}}async function uE(t,e,n){const r=we(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var u;if((h||n)&&r.isPrimaryClient){const d=h?!h.fromCache:(u=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:u.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Th.As(l.targetId,h);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const u=we(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(h,g=>j.forEach(g.Es,m=>u.persistence.referenceDelegate.addReference(d,g.targetId,m)).next(()=>j.forEach(g.ds,m=>u.persistence.referenceDelegate.removeReference(d,g.targetId,m)))))}catch(d){if(!ii(d))throw d;ee(Ih,"Failed to update sequence numbers: "+d)}for(const d of h){const g=d.targetId;if(!d.fromCache){const m=u.Ms.get(g),I=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(I);u.Ms=u.Ms.insert(g,R)}}}(r.localStore,i))}async function M1(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ee(kh,"User change. New user:",e.toKey());const r=await Yy(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new ae(z.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uE(n,r.Ls)}}function x1(t,e){const n=we(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function hE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N1.bind(null,e),e.Pu.H_=v1.bind(null,e.eventManager),e.Pu.yu=w1.bind(null,e.eventManager),e}class Ha{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zy(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return GP(this.persistence,new WP,e.initialUser,this.serializer)}Cu(e){return new Jy(wh.mi,this.serializer)}Du(e){return new ZP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ha.provider={build:()=>new Ha};class V1 extends Ha{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof ja,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new Jy(r=>ja.mi(r,n),this.serializer)}}class bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=M1.bind(null,this.syncEngine),await g1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _1}()}createDatastore(e){const n=Zy(e.databaseInfo.databaseId),r=function(i){return new s1(i)}(e.databaseInfo);return function(i,o,c,l){return new c1(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new u1(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Xp(this.syncEngine,n,0),function(){return Wp.v()?new Wp:new e1}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,u){const d=new R1(s,i,o,c,l,h);return u&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);ee(Ys,"RemoteStore shutting down."),i.Ea.add(5),await Io(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}bu.provider={build:()=>new bu};/**
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
 */class L1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ir="FirestoreClient";class F1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=_y.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function eg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await U1(t);ee(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gp(e.remoteStore,s)),t._onlineComponents=e}async function U1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Ir,"Using user provided OfflineComponentProvider");try{await wl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await wl(t,new Ha)}}else ee(Ir,"Using default OfflineComponentProvider"),await wl(t,new V1(void 0));return t._offlineComponents}async function B1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Ir,"Using user provided OnlineComponentProvider"),await eg(t,t._uninitializedComponentsProvider._online)):(ee(Ir,"Using default OnlineComponentProvider"),await eg(t,new bu))),t._onlineComponents}async function j1(t){const e=await B1(t),n=e.eventManager;return n.onListen=S1.bind(null,e.syncEngine),n.onUnlisten=k1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=O1.bind(null,e.syncEngine),n}function H1(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const u=new L1({next:g=>{u.Nu(),o.enqueueAndForget(()=>E1(i,d)),g.fromCache&&l.source==="server"?h.reject(new ae(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),d=new T1(c,u,{includeMetadataChanges:!0,qa:!0});return y1(i,d)}(await j1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dE="firestore.googleapis.com",ng=!0;class rg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dE,this.ssl=ng}else this.host=e.host,this.ssl=e.ssl??ng;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CP)throw new ae(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ae(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ae(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ae(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Y0;switch(r.type){case"firstParty":return new tC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),tg.delete(n),r.terminate())}(this),Promise.resolve()}}function $1(t,e,n,r={}){var h;t=lu(t,Nh);const s=ni(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(ty(`https://${c}`),ny("Firestore",!0)),i.host!==dE&&i.host!==c&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Qr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=yt.MOCK_USER;else{u=wS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ae(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(g)}t._authCredentials=new X0(new my(u,d))}}/**
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
 */class Ic{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ic(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(vo(n,$t._jsonSchema))return new $t(e,r||null,new fe(je.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:Qe("string",$t._jsonSchemaVersion),referencePath:Qe("string")};class Ns extends Ic{constructor(e,n,r){super(e,n,ky(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new fe(e))}withConverter(e){return new Ns(this.firestore,e,this._path)}}function GN(t,e,...n){if(t=En(t),aC("collection","path",e),t instanceof Nh){const r=je.fromString(e,...n);return mp(r),new Ns(t,null,r)}{if(!(t instanceof $t||t instanceof Ns))throw new ae(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return mp(r),new Ns(t.firestore,null,r)}}/**
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
 */const sg="AsyncQueue";class ig{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new eE(this,"async_queue_retry"),this._c=()=>{const r=vl();r&&ee(sg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=vl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new qr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ii(e))throw e;ee(sg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",og(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ch.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ge(47125,{Pc:og(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function og(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pE extends Nh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ig,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ig(e),this._firestoreClient=void 0,await e}}}function q1(t,e){const n=typeof t=="object"?t:oy(),r=typeof t=="string"?t:Va,s=hh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ES("firestore");i&&$1(s,...i)}return s}function W1(t){if(t._terminated)throw new ae(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||K1(t),t._firestoreClient}function K1(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,u){return new TC(c,l,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,fE(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new F1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(ft.fromBase64String(e))}catch(n){throw new ae(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new un(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vo(e,un._jsonSchema))return un.fromBase64String(e.bytes)}}un._jsonSchemaVersion="firestore/bytes/1.0",un._jsonSchema={type:Qe("string",un._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class gE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gr._jsonSchemaVersion}}static fromJSON(e){if(vo(e,gr._jsonSchema))return new gr(e.latitude,e.longitude)}}gr._jsonSchemaVersion="firestore/geoPoint/1.0",gr._jsonSchema={type:Qe("string",gr._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class mr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vo(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mr(e.vectorValues);throw new ae(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:Qe("string",mr._jsonSchemaVersion),vectorValues:Qe("object")};const z1=new RegExp("[~\\*/\\[\\]]");function G1(t,e,n){if(e.search(z1)>=0)throw ag(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new gE(...e.split("."))._internalPath}catch{throw ag(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ag(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let o="";return new ae(z.INVALID_ARGUMENT,i+t+o)}/**
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
 */class mE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_E("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q1 extends mE{data(){return super.data()}}function _E(t,e){return typeof e=="string"?G1(t,e):e instanceof gE?e._internalPath:e._delegate._internalPath}/**
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
 */function J1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y1{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wo(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[hu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>We(o.doubleValue));return new mr(n)}convertGeoPoint(e){return new gr(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);He(Gy(r),9688,{name:e});const s=new ao(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ds extends mE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_E("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ds._jsonSchema={type:Qe("string",Ds._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class pa extends Ds{data(e={}){return super.data(e)}}class Ms{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new sa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pa(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new pa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new sa(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new pa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new sa(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,u=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),u=o.indexOf(c.doc.key)),{type:X1(c.type),doc:l,oldIndex:h,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_y.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function X1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:t})}}Ms._jsonSchemaVersion="firestore/querySnapshot/1.0",Ms._jsonSchema={type:Qe("string",Ms._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Z1 extends Y1{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function QN(t){t=lu(t,Ic);const e=lu(t.firestore,pE),n=W1(e),r=new Z1(e);return J1(t._query),H1(n,t._query).then(s=>new Ms(e,r,t,s))}(function(e,n=!0){(function(s){si=s})(ri),Ws(new Jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new pE(new Z0(r.getProvider("auth-internal")),new nC(o,r.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ae(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(h.options.projectId,u)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dr(fp,dp,e),dr(fp,dp,"esm2020")})();function yE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ek=yE,EE=new yo("auth","Firebase",yE());/**
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
 */const $a=new lh("@firebase/auth");function tk(t,...e){$a.logLevel<=_e.WARN&&$a.warn(`Auth (${ri}): ${t}`,...e)}function ga(t,...e){$a.logLevel<=_e.ERROR&&$a.error(`Auth (${ri}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw Dh(t,...e)}function pn(t,...e){return Dh(t,...e)}function vE(t,e,n){const r={...ek(),[e]:n};return new yo("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return vE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EE.create(t,...e)}function ue(t,e,...n){if(!t)throw Dh(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ga(e),new Error(e)}function Ln(t,e){t||Cn(e)}/**
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
 */function Ru(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function nk(){return cg()==="http:"||cg()==="https:"}function cg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nk()||SS()||"connection"in navigator)?navigator.onLine:!0}function sk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=AS()||CS()}get(){return rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mh(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ik={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ok=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ak=new bo(3e4,6e4);function rs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function br(t,e,n,r,s={}){return TE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Eo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return RS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ni(t.emulatorConfig.host)&&(h.credentials="include"),wE.fetch()(await IE(t,t.config.apiHost,n,c),h)})}async function TE(t,e,n){t._canInitEmulator=!1;const r={...ik,...e};try{const s=new lk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ia(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vE(t,u,h);tn(t,u)}}catch(s){if(s instanceof Bn)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function Ac(t,e,n,r,s={}){const i=await br(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function IE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mh(t.config,s):`${t.config.apiScheme}://${s}`;return ok.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ck(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),ak.get())})}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function lg(t){return t!==void 0&&t.enterprise!==void 0}class uk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ck(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hk(t,e){return br(t,"GET","/v2/recaptchaConfig",rs(t,e))}/**
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
 */async function fk(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function qa(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dk(t,e=!1){const n=En(t),r=await n.getIdToken(e),s=xh(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gi(Tl(s.auth_time)),issuedAtTime:Gi(Tl(s.iat)),expirationTime:Gi(Tl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Tl(t){return Number(t)*1e3}function xh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=Y_(n);return s?JSON.parse(s):(ga("Failed to decode base64 JWT payload"),null)}catch(s){return ga("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ug(t){const e=xh(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&pk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wa(t){var d;const e=t.auth,n=await t.getIdToken(),r=await lo(t,qa(e,{idToken:n}));ue(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?AE(s.providerUserInfo):[],o=_k(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function mk(t){const e=En(t);await Wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _k(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function AE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function yk(t,e){const n=await TE(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await IE(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ni(t.emulatorConfig.host)&&(l.credentials="include"),wE.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ek(t,e){return br(t,"POST","/v2/accounts:revokeToken",rs(t,e))}/**
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
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function Gn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new gk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Su(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dk(this,e)}reload(){return mk(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await lo(this,fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:m,providerData:I,stsTokenManager:R}=n;ue(d&&R,e,"internal-error");const N=xs.fromJSON(this.name,R);ue(typeof d=="string",e,"internal-error"),Gn(r,e.name),Gn(s,e.name),ue(typeof g=="boolean",e,"internal-error"),ue(typeof m=="boolean",e,"internal-error"),Gn(i,e.name),Gn(o,e.name),Gn(c,e.name),Gn(l,e.name),Gn(h,e.name),Gn(u,e.name);const D=new Jt({uid:d,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:u});return I&&Array.isArray(I)&&(D.providerData=I.map(O=>({...O}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?AE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new xs;c.updateFromIdToken(r);const l=new Jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */class bE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bE.type="NONE";const fg=bE;/**
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
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ma(this.userKey,s.apiKey,i),this.fullPersistenceKey=ma("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await qa(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Pn(fg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(fg);const o=ma(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const u=await h._get(o);if(u){let d;if(typeof u=="string"){const g=await qa(e,{idToken:u}).catch(()=>{});if(!g)break;d=await Jt._fromGetAccountInfoResponse(e,g,u)}else d=Jt._fromJSON(e,u);h!==i&&(c=d),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Vs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vs(i,e,r))}}/**
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
 */function dg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OE(e))return"Blackberry";if(NE(e))return"Webos";if(SE(e))return"Safari";if((e.includes("chrome/")||CE(e))&&!e.includes("edge/"))return"Chrome";if(kE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RE(t=Tt()){return/firefox\//i.test(t)}function SE(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CE(t=Tt()){return/crios\//i.test(t)}function PE(t=Tt()){return/iemobile/i.test(t)}function kE(t=Tt()){return/android/i.test(t)}function OE(t=Tt()){return/blackberry/i.test(t)}function NE(t=Tt()){return/webos/i.test(t)}function Vh(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vk(t=Tt()){var e;return Vh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function wk(){return PS()&&document.documentMode===10}function DE(t=Tt()){return Vh(t)||kE(t)||NE(t)||OE(t)||/windows phone/i.test(t)||PE(t)}/**
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
 */function ME(t,e=[]){let n;switch(t){case"Browser":n=dg(Tt());break;case"Worker":n=`${dg(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
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
 */class Tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ik(t,e={}){return br(t,"GET","/v2/passwordPolicy",rs(t,e))}/**
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
 */const Ak=6;class bk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ak,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Rk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new Tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qa(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(_r(this));const n=e?En(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ik(this),n=new bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ek(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ME(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&tk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ai(t){return En(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=LS(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sk(t){bc=t}function xE(t){return bc.loadJS(t)}function Ck(){return bc.recaptchaEnterpriseScript}function Pk(){return bc.gapiScript}function kk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ok{constructor(){this.enterprise=new Nk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Nk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Dk="recaptcha-enterprise",VE="NO_RECAPTCHA";class Mk{constructor(e){this.type=Dk,this.auth=ai(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{hk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new uk(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;lg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(VE)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ok().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&lg(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ck();l.length!==0&&(l+=c),xE(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function gg(t,e,n,r=!1,s=!1){const i=new Mk(t);let o;if(s)o=VE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mg(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await gg(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function xk(t,e){const n=hh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qr(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function Vk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lk(t,e,n){const r=ai(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=LE(e),{host:o,port:c}=Fk(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Qr(h,r.config.emulator)&&Qr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ni(o)?(ty(`${i}//${o}${l}`),ny("Auth",!0)):Uk()}function LE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fk(t){const e=LE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_g(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_g(o)}}}function _g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Uk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function Bk(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jk(t,e){return Ac(t,"POST","/v1/accounts:signInWithPassword",rs(t,e))}/**
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
 */async function Hk(t,e){return Ac(t,"POST","/v1/accounts:signInWithEmailLink",rs(t,e))}async function $k(t,e){return Ac(t,"POST","/v1/accounts:signInWithEmailLink",rs(t,e))}/**
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
 */class uo extends Lh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mg(e,n,"signInWithPassword",jk);case"emailLink":return Hk(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mg(e,r,"signUpPassword",Bk);case"emailLink":return $k(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return Ac(t,"POST","/v1/accounts:signInWithIdp",rs(t,e))}/**
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
 */const qk="http://localhost";class Xr extends Lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:qk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
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
 */function Wk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kk(t){const e=Ci(Pi(t)).link,n=e?Ci(Pi(e)).deep_link_id:null,r=Ci(Pi(t)).deep_link_id;return(r?Ci(Pi(r)).link:null)||r||n||e||t}class Fh{constructor(e){const n=Ci(Pi(e)),r=n.apiKey??null,s=n.oobCode??null,i=Wk(n.mode??null);ue(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Kk(e);try{return new Fh(n)}catch{return null}}}/**
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
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fh.parseLink(n);return ue(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class FE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ro extends FE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends Ro{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class sr extends Ro{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class ir extends Ro{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=yg(r);return new Zs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yg(r);return new Zs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ka extends Bn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ka(e,n,r,s)}}function UE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(t,i,e,r):i})}async function zk(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zs._forOperation(t,"link",r)}/**
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
 */async function Gk(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await lo(t,UE(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=xh(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),Zs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
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
 */async function BE(t,e,n=!1){if(Qt(t.app))return Promise.reject(_r(t));const r="signIn",s=await UE(t,r,e),i=await Zs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Qk(t,e){return BE(ai(t),e)}/**
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
 */async function Jk(t){const e=ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function JN(t,e,n){return Qt(t.app)?Promise.reject(_r(t)):Qk(En(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jk(t),r})}function Yk(t,e,n,r){return En(t).onIdTokenChanged(e,n,r)}function Xk(t,e,n){return En(t).beforeAuthStateChanged(e,n)}function YN(t,e,n,r){return En(t).onAuthStateChanged(e,n,r)}function XN(t){return En(t).signOut()}const za="__sak";/**
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
 */class jE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(za,"1"),this.storage.removeItem(za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zk=1e3,eO=10;class HE extends jE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=DE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const tO=HE;/**
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
 */class $E extends jE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$E.type="SESSION";const qE=$E;/**
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
 */function nO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await nO(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
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
 */function Uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Uh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function sO(t){gn().location.href=t}/**
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
 */function WE(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function iO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function aO(){return WE()?self:null}/**
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
 */const KE="firebaseLocalStorageDb",cO=1,Ga="firebaseLocalStorage",zE="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sc(t,e){return t.transaction([Ga],e?"readwrite":"readonly").objectStore(Ga)}function lO(){const t=indexedDB.deleteDatabase(KE);return new So(t).toPromise()}function Cu(){const t=indexedDB.open(KE,cO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ga,{keyPath:zE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ga)?e(r):(r.close(),await lO(),e(await Cu()))})})}async function Eg(t,e,n){const r=Sc(t,!0).put({[zE]:e,value:n});return new So(r).toPromise()}async function uO(t,e){const n=Sc(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function vg(t,e){const n=Sc(t,!0).delete(e);return new So(n).toPromise()}const hO=800,fO=3;class GE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(aO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await iO(),!this.activeServiceWorker)return;this.sender=new rO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cu();return await Eg(e,za,"1"),await vg(e,za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sc(s,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GE.type="LOCAL";const dO=GE;new bo(3e4,6e4);/**
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
 */function pO(t,e){return e?Pn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bh extends Lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gO(t){return BE(t.auth,new Bh(t),t.bypassAuthState)}function mO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Gk(n,new Bh(t),t.bypassAuthState)}async function _O(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),zk(n,new Bh(t),t.bypassAuthState)}/**
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
 */class QE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gO;case"linkViaPopup":case"linkViaRedirect":return _O;case"reauthViaPopup":case"reauthViaRedirect":return mO;default:tn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yO=new bo(2e3,1e4);class ws extends QE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yO.get())};e()}}ws.currentPopupAction=null;/**
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
 */const EO="pendingRedirect",_a=new Map;class vO extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await wO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wO(t,e){const n=AO(e),r=IO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function TO(t,e){_a.set(t._key(),e)}function IO(t){return Pn(t._redirectPersistence)}function AO(t){return ma(EO,t.config.apiKey,t.name)}async function bO(t,e,n=!1){if(Qt(t.app))return Promise.reject(_r(t));const r=ai(t),s=pO(r,e),o=await new vO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const RO=600*1e3;class SO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RO&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JE(t);default:return!1}}/**
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
 */async function PO(t,e={}){return br(t,"GET","/v1/projects",e)}/**
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
 */const kO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OO=/^https?/;async function NO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PO(t);for(const n of e)try{if(DO(n))return}catch{}tn(t,"unauthorized-domain")}function DO(t){const e=Ru(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OO.test(n))return!1;if(kO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MO=new bo(3e4,6e4);function Tg(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xO(t){return new Promise((e,n)=>{var s,i,o;function r(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),n(pn(t,"network-request-failed"))},timeout:MO.get()})}if((i=(s=gn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const c=kk("iframefcb");return gn()[c]=()=>{gapi.load?r():n(pn(t,"network-request-failed"))},xE(`${Pk()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ya=null,e})}let ya=null;function VO(t){return ya=ya||xO(t),ya}/**
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
 */const LO=new bo(5e3,15e3),FO="__/auth/iframe",UO="emulator/auth/iframe",BO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mh(e,UO):`https://${t.config.authDomain}/${FO}`,r={apiKey:e.apiKey,appName:t.name,v:ri},s=jO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Eo(r).slice(1)}`}async function $O(t){const e=await VO(t),n=gn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:HO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),c=gn().setTimeout(()=>{i(o)},LO.get());function l(){gn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const qO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WO=500,KO=600,zO="_blank",GO="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QO(t,e,n,r=WO,s=KO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...qO,width:r.toString(),height:s.toString(),top:i,left:o},h=Tt().toLowerCase();n&&(c=CE(h)?zO:n),RE(h)&&(e=e||GO,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[m,I])=>`${g}${m}=${I},`,"");if(vk(h)&&c!=="_self")return JO(e||"",c),new Ig(null);const d=window.open(e||"",c,u);ue(d,t,"popup-blocked");try{d.focus()}catch{}return new Ig(d)}function JO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YO="__/auth/handler",XO="emulator/auth/handler",ZO=encodeURIComponent("fac");async function Ag(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:s};if(e instanceof FE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Ro){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await t._getAppCheckToken(),h=l?`#${ZO}=${encodeURIComponent(l)}`:"";return`${eN(t)}?${Eo(c).slice(1)}${h}`}function eN({config:t}){return t.emulator?Mh(t,XO):`https://${t.authDomain}/${YO}`}/**
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
 */const Il="webStorageSupport";class tN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qE,this._completeRedirectFn=bO,this._overrideRedirectResult=TO}async _openPopup(e,n,r,s){var o;Ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ag(e,n,r,Ru(),s);return QO(e,i,Uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ag(e,n,r,Ru(),s);return sO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $O(e),r=new SO(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Il];i!==void 0&&n(!!i),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return DE()||SE()||Vh()}}const nN=tN;var bg="@firebase/auth",Rg="1.11.0";/**
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
 */class rN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iN(t){Ws(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ME(t)},h=new Rk(r,s,i,l);return Vk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ws(new Jr("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(r=>new rN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(bg,Rg,sN(t)),dr(bg,Rg,"esm2020")}/**
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
 */const oN=300,aN=ey("authIdTokenMaxAge")||oN;let Sg=null;const cN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aN)return;const s=n==null?void 0:n.token;Sg!==s&&(Sg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lN(t=oy()){const e=hh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xk(t,{popupRedirectResolver:nN,persistence:[dO,tO,qE]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=cN(i.toString());Xk(n,o,()=>o(n.currentUser)),Yk(n,c=>o(c))}}const s=X_("auth");return s&&Lk(n,`http://${s}`),n}function uN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Sk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iN("Browser");const hN=Nt(t=>{const e=mo(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,databaseURL:"<replace this>",projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID};let r;const s=F0();s.length?r=s[0]:r=iy(n);const i=q1(r),o=lN(r);t.provide("db",i),t.provide("auth",o)}),fN=[bb,Sb,Nb,JR,nS,rS,sS,iS,oS,aS,cS,lS,uS,hN],YE=(t="RouteProvider")=>Ar({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return ur(Gr,hn(s)),()=>e.vnode?wt(e.vnode,{ref:e.vnodeRef}):e.vnode}}),dN=YE(),Cg=new WeakMap,pN=Ar({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Je(),i=Xt(),o=nt(Gr,null);let c;r({pageRef:i});const l=nt(E_,null);let h;const u=s.deferHydration();if(s.isHydrating){const g=s.hooks.hookOnce("app:error",u);Ft().beforeEach(g)}t.pageKey&&jr(()=>t.pageKey,(g,m)=>{g!==m&&s.callHook("page:loading:start")});let d=!1;{const g=Ft().beforeResolve(()=>{d=!1});go(()=>{g()})}return()=>wt(W_,{name:t.name,route:t.route,...e},{default:g=>{const m=mN(o,g.route,g.Component),I=o&&o.matched.length===g.route.matched.length;if(!g.Component){if(h&&!I)return h;u();return}if(h&&l&&!l.isCurrent(g.route))return h;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return I?h:null;const R=tu(g,t.pageKey),N=_N(o,g.route,g.Component);!s.isHydrating&&c===R&&!N&&Kr(()=>{d=!0,s.callHook("page:loading:end")}),c=R;const D=!!(t.transition??g.route.meta.pageTransition??Ed),O=D&&gN([t.transition,g.route.meta.pageTransition,Ed,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",g.Component)}}]),A=t.keepalive??g.route.meta.keepalive??cA;return h=z_(D&&O,UR(A,wt(Yu,{suspensible:!0,onPending:()=>{D&&(s._runningTransition=!0),s.callHook("page:start",g.Component)},onResolve:()=>{Kr(()=>s.callHook("page:finish",g.Component).then(()=>{if(!d&&!N)return d=!0,s.callHook("page:loading:end")}).finally(u))}},{default:()=>{const k={key:R||void 0,vnode:n.default?yN(n.default,g):g.Component,route:g.route,renderKey:R||void 0,trackRootNodes:D,vnodeRef:i};if(!A)return wt(dN,k);const M=g.Component.type,F=M;let w=Cg.get(F);return w||(w=YE(M.name||M.__name),Cg.set(F,w)),wt(w,k)}}))).default(),h}})}});function gN(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?ah(n.onAfterLeave):void 0}));return __(...e)}function mN(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,c,l;return((o=s.components)==null?void 0:o.default)!==((l=(c=t.matched[i])==null?void 0:c.components)==null?void 0:l.default)})||n&&tu({route:e,Component:n})!==tu({route:t,Component:n})}function _N(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function yN(t,e){const n=t(e);return n.length===1?wt(n[0]):wt(Mt,void 0,n)}const EN=Ar({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>wt(or[t.name],t.layoutProps,e.slots)}}),vN={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},wN=Ar({name:"NuxtLayout",inheritAttrs:!1,props:vN,setup(t,e){const n=Je(),r=nt(Gr),i=!r||r===oc()?K_():r,o=Vt(()=>{let u=Ve(t.name)??(i==null?void 0:i.meta.layout)??"default";return u&&!(u in or)&&t.fallback&&(u=Ve(t.fallback)),u}),c=Fs();e.expose({layoutRef:c});const l=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",l);Ft().beforeEach(u)}let h;return()=>{const u=o.value&&o.value in or,d=(i==null?void 0:i.meta.layoutTransition)??aA,g=h;return h=o.value,z_(u&&d,{default:()=>wt(Yu,{suspensible:!0,onResolve:()=>{Kr(l)}},{default:()=>wt(TN,{layoutProps:Gm(e.attrs,{ref:c}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==g&&m===o.value,hasTransition:!!d},e.slots)})}).default()}}}),TN=Ar({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&ur(E_,{isCurrent:i=>n===(i.meta.layout??"default")});const r=nt(Gr);if(r&&r===oc()){const i=K_(),o={};for(const c in i){const l=c;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}ur(Gr,hn(o))}return()=>{var i,o;return!n||typeof n=="string"&&!(n in or)?(o=(i=e.slots).default)==null?void 0:o.call(i):wt(EN,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),IN=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},AN={};function bN(t,e){const n=pN,r=wN;return cn(),tr(r,null,{default:Wu(()=>[qe(n)]),_:1})}const RN=IN(AN,[["render",bN]]),SN={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),c=void 0,u=s?vs(()=>ct(()=>import("./7vezOjF_.js"),__vite__mapDeps([28,1,9,29]),import.meta.url)):vs(()=>ct(()=>import("./CPCAxQKI.js"),__vite__mapDeps([30,9,31]),import.meta.url));return(d,g)=>(cn(),tr(Ve(u),Mv(Km({statusCode:Ve(r),statusMessage:Ve(i),description:Ve(o),stack:Ve(c)})),null,16))}},CN={key:0},Pg={__name:"nuxt-root",setup(t){const e=()=>null,n=Je(),r=n.deferHydration();if(n.isHydrating){const h=n.hooks.hookOnce("app:error",r);Ft().beforeEach(h)}const s=!1;ur(Gr,oc()),n.hooks.callHookWith(h=>h.map(u=>u()),"vue:setup");const i=ac(),o=!1,c=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Em((h,u,d)=>{if(n.hooks.callHook("vue:error",h,u,d).catch(g=>console.error("[nuxt] Error in `vue:error` hook",g)),c.test(navigator.userAgent))return n.hooks.callHook("app:error",h),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,h),!1;if(w_(h)&&(h.fatal||h.unhandled))return n.runWithContext(()=>xr(h)),!1});const l=!1;return(h,u)=>(cn(),tr(Yu,{onResolve:Ve(r)},{default:Wu(()=>[Ve(o)?(cn(),pT("div",CN)):Ve(i)?(cn(),tr(Ve(SN),{key:1,error:Ve(i)},null,8,["error"])):Ve(l)?(cn(),tr(Ve(e),{key:2,context:Ve(l)},null,8,["context"])):Ve(s)?(cn(),tr(Mw(Ve(s)),{key:3})):(cn(),tr(Ve(RN),{key:4}))]),_:1},8,["onResolve"]))}};let kg;{let t;kg=async function(){var o,c;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((c=document.getElementById("__NUXT_DATA__"))==null?void 0:c.dataset.ssr)==="true")?nI(Pg):tI(Pg),s=dA({vueApp:r});async function i(l){var h;await s.callHook("app:error",l),(h=s.payload).error||(h.error=$r(l))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await mA(s,fN)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(uA),await s.hooks.callHook("app:mounted",r),await Kr()}catch(l){i(l)}return r},t=kg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{ON as $,Dg as A,LN as B,qN as C,yA as D,nc as E,Mt as F,nt as G,C_ as H,Je as I,UN as J,es as K,Pw as L,ym as M,Uv as N,Fs as O,nm as P,Kr as Q,$r as R,xu as S,MN as T,$N as U,Za as V,QN as W,GN as X,jN as Y,pN as Z,IN as _,Wm as a,YN as a0,XN as a1,JN as a2,Ar as a3,Ft as a4,ch as a5,Zd as a6,go as a7,KN as a8,wt as a9,r_ as aa,SA as ab,eS as ac,ts as ad,eh as ae,CI as af,eo as ag,FN as ah,qe as b,pT as c,zm as d,Vt as e,zu as f,kN as g,jr as h,xN as i,NN as j,tr as k,DN as l,HN as m,Xa as n,cn as o,K_ as p,WN as q,Xt as r,mo as s,Fv as t,Ve as u,VN as v,Wu as w,ow as x,Fn as y,BN as z};
