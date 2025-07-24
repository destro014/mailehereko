import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1, a as _sfc_main$4 } from './Card-D-06xRdd.mjs';
import { u as useSuggestionsStore } from './suggestions-DWkk13IR.mjs';
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
import './Icon-Bz1m2FM2.mjs';
import './nuxt-link-DFBuEUJs.mjs';
import './lists-bCv0e5oG.mjs';

const _sfc_main$3 = {
  name: "TitleLoader"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-loader" }, _attrs))}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loaders/TitleLoader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "SmallCardLoader"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "small-card-skeleton" }, _attrs))}><div class="info-skeleton"><div class="title-skeleton"></div><div class="link-skeleton"></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loaders/SmallCardLoader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "Card",
  props: ["item"],
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-wrapper small-card" }, _attrs))}><div class="card-content"><h6 class="title">${ssrInterpolate($props.item.title)}</h6><a${ssrRenderAttr("href", $props.item.link)} class="link small">${ssrInterpolate($props.item.link)}</a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SmallCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "suggestions",
  __ssrInlineRender: true,
  setup(__props) {
    const suggestionsStore = useSuggestionsStore();
    const suggestions = computed(() => suggestionsStore.suggestions);
    const manualSuggestions = computed(() => suggestionsStore.manualSuggestions);
    const loading = computed(() => suggestionsStore.loading);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleLoader = __nuxt_component_0;
      const _component_CardLoader = __nuxt_component_1;
      const _component_Card = _sfc_main$4;
      const _component_SmallCardLoader = __nuxt_component_3;
      const _component_SmallCard = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "suggestions-page page container" }, _attrs))}><div class="header"><h1>Suggestions</h1></div><div class="normal-suggestion-wrapper suggestion-wrapper">`);
      if (loading.value) {
        _push(`<div class="loader-container">`);
        _push(ssrRenderComponent(_component_TitleLoader, null, null, _parent));
        _push(`<div class="list-grid"><!--[-->`);
        ssrRenderList(4, (index) => {
          _push(ssrRenderComponent(_component_CardLoader, {
            hasAction: true,
            key: index
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && suggestions.value.length > 0) {
        _push(`<div class="data-container"><p class="large section-title">Normal Suggestions</p><div class="lists-container list-grid"><!--[-->`);
        ssrRenderList(suggestions.value, (item) => {
          _push(ssrRenderComponent(_component_Card, {
            hasAction: true,
            action: "plus",
            actionName: "Add this",
            admin: true,
            key: item.id,
            item
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="manual-suggestion-wrapper suggestion-wrapper">`);
      if (loading.value) {
        _push(`<div class="loader-container">`);
        _push(ssrRenderComponent(_component_TitleLoader, null, null, _parent));
        _push(`<div class="list-grid"><!--[-->`);
        ssrRenderList(4, (index) => {
          _push(ssrRenderComponent(_component_SmallCardLoader, { key: index }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && manualSuggestions.value.length > 0) {
        _push(`<div class="data-container"><p class="large section-title">Manual Suggestions</p><div class="lists-container list-grid"><!--[-->`);
        ssrRenderList(manualSuggestions.value, (item) => {
          _push(ssrRenderComponent(_component_SmallCard, {
            key: item.title,
            item
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/suggestions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=suggestions-Bq15c3Z3.mjs.map
