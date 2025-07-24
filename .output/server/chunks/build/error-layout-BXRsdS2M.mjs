import { _ as _sfc_main$1 } from './Navbar-CT_mbYb-.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-0Sl5WKgA.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './Icon-Bz1m2FM2.mjs';
import './users-D6d-_zbj.mjs';
import 'pinia';
import 'firebase/auth';
import 'vue-router';
import 'firebase/app';
import 'firebase/firestore';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = _sfc_main$1;
  const _component_Nuxt = resolveComponent("Nuxt");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const errorLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { errorLayout as default };
//# sourceMappingURL=error-layout-BXRsdS2M.mjs.map
