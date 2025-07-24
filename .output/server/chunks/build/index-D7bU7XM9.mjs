import { _ as __nuxt_component_0 } from './nuxt-link-0Sl5WKgA.mjs';
import { _ as _sfc_main$1 } from './Input-BGczIgPb.mjs';
import { _ as __nuxt_component_1, a as _sfc_main$2 } from './Card-EP8J5M3A.mjs';
import { ref, watch, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useListsStore } from './lists-DrF_QI2l.mjs';
import { u as useTypeStore, a as useSearchStore } from './search-_02KT1ET.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import 'pinia';
import 'vue-router';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './Icon-Bz1m2FM2.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const listsStore = useListsStore();
    const typeStore = useTypeStore();
    const searchStore = useSearchStore();
    const searchTerm = ref(searchStore.searchTerm);
    watch(searchTerm, (val) => {
      searchStore.setSearchTerm(val);
    });
    const stateSearchTerm = computed(() => searchStore.searchTerm);
    computed(() => typeStore.listTitle);
    computed(() => typeStore.listType);
    const lists = computed(() => listsStore.lists);
    const loading = computed(() => listsStore.loading);
    const filteredList = computed(() => {
      return lists.value.filter((item) => {
        if (item.media_type === "tv") {
          return item.original_name.toLowerCase().includes(stateSearchTerm.value.toLowerCase());
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Input = _sfc_main$1;
      const _component_CardLoader = __nuxt_component_1;
      const _component_Card = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tv-shows-page page container" }, _attrs))}><div class="header"><div class="breadcrumb-container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "index" },
        class: "breadcrumb-link-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mailehereko`);
          } else {
            return [
              createTextVNode("Mailehereko")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1>TV Shows</h1><div class="search-wrapper">`);
      _push(ssrRenderComponent(_component_Input, {
        type: "text",
        name: "search",
        label: "Search movies or tv shows",
        placeholder: "eg. Avenger",
        leftIcon: "search",
        value: searchTerm.value
      }, null, _parent));
      _push(`</div><p>${ssrInterpolate(filteredList.value.length)} items</p></div>`);
      if (loading.value) {
        _push(`<div class="loader-container list-grid"><!--[-->`);
        ssrRenderList(8, (index) => {
          _push(ssrRenderComponent(_component_CardLoader, {
            hasAction: false,
            key: index
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="lists-container list-grid"><!--[-->`);
      ssrRenderList(filteredList.value, (item) => {
        _push(ssrRenderComponent(_component_Card, {
          hasAction: false,
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tvshows/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D7bU7XM9.mjs.map
