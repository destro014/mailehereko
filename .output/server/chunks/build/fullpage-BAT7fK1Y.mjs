import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const _sfc_main = {
  name: "fullpage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nuxt = resolveComponent("Nuxt");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="status-bar container"></div>`);
  _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/fullpage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fullpage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { fullpage as default };
//# sourceMappingURL=fullpage-BAT7fK1Y.mjs.map
