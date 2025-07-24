import { computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DFBuEUJs.mjs';
import { u as useListsStore } from './lists-bCv0e5oG.mjs';
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

const _sfc_main$2 = {
  name: "NumberCardLoader"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "number-card-skeleton" }, _attrs))}><div class="number-skeleton"></div><div class="label-skeleton"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loaders/NumberCardLoader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "NumberCard",
  props: ["number", "name"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "number-card" }, _attrs))}><h3 class="number">${ssrInterpolate($props.number)}</h3><p class="name">${ssrInterpolate($props.name)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/NumberCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const listsStore = useListsStore();
    const suggestionsStore = useSuggestionsStore();
    const loading = computed(() => listsStore.loading);
    const lists = computed(() => listsStore.lists);
    const moviesCount = computed(
      () => lists.value.filter((item) => item.media_type.includes("movie")).length
    );
    const tvShowsCount = computed(
      () => lists.value.filter((item) => item.media_type.includes("tv")).length
    );
    const suggestionsCount = computed(() => suggestionsStore.suggestions.length);
    const manualSuggestionsCount = computed(
      () => suggestionsStore.manualSuggestions.length
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NumberCardLoader = __nuxt_component_0;
      const _component_NumberCard = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-page page container" }, _attrs))}><h2>Welcome</h2>`);
      if (loading.value) {
        _push(`<div class="list-grid loader"><!--[-->`);
        ssrRenderList(4, (index) => {
          _push(ssrRenderComponent(_component_NumberCardLoader, { key: index }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="list-grid info-container">`);
        _push(ssrRenderComponent(_component_NumberCard, {
          number: moviesCount.value,
          name: "Movies"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NumberCard, {
          number: tvShowsCount.value,
          name: "TV Shows"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NumberCard, {
          number: suggestionsCount.value,
          name: "Suggestions"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NumberCard, {
          number: manualSuggestionsCount.value,
          name: "Manual Suggestions"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<div class="links-container"><h5>Quick links</h5><div class="links"><div class="suggestion-link-container link-container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "quick-link",
        to: { name: "admin-suggestions" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Suggestions </span>`);
          } else {
            return [
              createVNode("span", null, "Suggestions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="add-link-container link-container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "quick-link",
        to: { name: "admin-add" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Add </span>`);
          } else {
            return [
              createVNode("span", null, "Add ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DpKL8t0X.mjs.map
