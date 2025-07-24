import { _ as __nuxt_component_0 } from './nuxt-link-0Sl5WKgA.mjs';
import { _ as _sfc_main$2 } from './Input-BGczIgPb.mjs';
import { ref, watch, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { u as useTypeStore, a as useSearchStore } from './search-_02KT1ET.mjs';
import { _ as __nuxt_component_1, a as _sfc_main$3 } from './Card-EP8J5M3A.mjs';
import { u as useListsStore } from './lists-DrF_QI2l.mjs';
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

const label1Text = "All";
const label2Text = "Movies";
const label3Text = "TV Shows";
const value1 = "all";
const value2 = "movie";
const value3 = "tv";
const _sfc_main$1 = {
  __name: "SegmentedControl",
  __ssrInlineRender: true,
  setup(__props) {
    const typeStore = useTypeStore();
    const listType = computed({
      get: () => typeStore.listType,
      set: (value) => typeStore.setListType(value)
    });
    ref(null);
    ref(null);
    ref(null);
    const indicatorWidth = ref(null);
    ref(null);
    ref(null);
    ref(null);
    const leftValue = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "segmented-control" }, _attrs))}><div class="active-indicator" style="${ssrRenderStyle({
        width: indicatorWidth.value + "rem",
        left: leftValue.value + "rem"
      })}"></div><div class="segmented-group"><input type="radio" name="List Type"${ssrRenderAttr("id", value1)} class="segmented-input"${ssrRenderAttr("value", value1)}${ssrIncludeBooleanAttr(ssrLooseEqual(listType.value, value1)) ? " checked" : ""}><label${ssrRenderAttr("for", value1)} class="segmented-label">${ssrInterpolate(label1Text)}</label></div><div class="segmented-group"><input type="radio" name="List Type"${ssrRenderAttr("id", value2)} class="segmented-input"${ssrRenderAttr("value", value2)}${ssrIncludeBooleanAttr(ssrLooseEqual(listType.value, value2)) ? " checked" : ""}><label${ssrRenderAttr("for", value2)} class="segmented-label">${ssrInterpolate(label2Text)}</label></div><div class="segmented-group"><input type="radio" name="List Type"${ssrRenderAttr("id", value3)} class="segmented-input"${ssrRenderAttr("value", value3)}${ssrIncludeBooleanAttr(ssrLooseEqual(listType.value, value3)) ? " checked" : ""}><label${ssrRenderAttr("for", value3)} class="segmented-label">${ssrInterpolate(label3Text)}</label></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/SegmentedControl.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
    const listTitle = computed(() => typeStore.listTitle);
    const listType = computed(() => typeStore.listType);
    const lists = computed(() => listsStore.lists);
    const loading = computed(() => listsStore.loading);
    const filteredList = computed(() => {
      let mediaType = listType.value === "all" ? "" : listType.value;
      return lists.value.filter((item) => {
        if (item.media_type === "movie") {
          return item.original_title.toLowerCase().includes(stateSearchTerm.value.toLowerCase()) && item.media_type.includes(mediaType);
        } else {
          return item.original_name.toLowerCase().includes(stateSearchTerm.value.toLowerCase()) && item.media_type.includes(mediaType);
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Input = _sfc_main$2;
      const _component_SegmentedControl = _sfc_main$1;
      const _component_CardLoader = __nuxt_component_1;
      const _component_Card = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "index page container" }, _attrs))}><div class="header"><h1>MaileHereko</h1><p> List of movies and TV Shows, I, <a href="https://pramodpoudel.com.np" class="external-links" target="_blank" aria-label="Know more about pramod poudel">Pramod Poudel</a> have watched till date. Explore what I have watched and also feel free to make a `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "suggest" },
        class: "external-links"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` suggestion. `);
          } else {
            return [
              createTextVNode(" suggestion. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u{1F609} </p><div class="search-wrapper">`);
      _push(ssrRenderComponent(_component_Input, {
        type: "text",
        name: "search",
        label: "Search movies or tv shows",
        placeholder: "eg. Avenger",
        leftIcon: "search",
        modelValue: searchTerm.value,
        "onUpdate:modelValue": ($event) => searchTerm.value = $event
      }, null, _parent));
      _push(`</div><div class="segmented-control-wrapper">`);
      _push(ssrRenderComponent(_component_SegmentedControl, null, null, _parent));
      _push(`</div><div class="category-title"><h3>${ssrInterpolate(listTitle.value)} <span>(${ssrInterpolate(filteredList.value.length)})</span></h3></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BHrdR4Gm.mjs.map
