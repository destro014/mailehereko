import { _ as _sfc_main$2, a as __nuxt_component_0 } from './Navbar-gS4rMP0a.mjs';
import { i as __nuxt_component_1, _ as _export_sfc } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useListsStore } from './lists-bCv0e5oG.mjs';
import './nuxt-link-DFBuEUJs.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import './Icon-Bz1m2FM2.mjs';
import './users-u1Jv2-Pp.mjs';
import 'pinia';
import 'firebase/auth';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'firebase/app';
import 'firebase/firestore';

const _sfc_main$1 = {
  name: "Footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer container"><div class="top"><div class="brand">`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`</div><div class="info"><p> A fun and personal project created by <a href="https://pramodpoudel.com.np" class="external-links" target="_blank">Pramod Poudel</a>. Source code available on <a href="https://github.com/destro014/mailehereko" class="external-links" target="_blank">Github</a>. Open for pull request. Clone and use personally. It&#39;s up to you. </p></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useListsStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "default-view" }, _attrs))}><div class="status-bar"></div>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, { "keep-alive": "" }, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DnycrDCE.mjs.map
