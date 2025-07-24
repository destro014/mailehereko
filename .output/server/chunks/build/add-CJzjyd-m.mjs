import { _ as _sfc_main$1 } from './Input-BGczIgPb.mjs';
import { _ as __nuxt_component_1 } from './Button-BDUzcIEO.mjs';
import { a as _sfc_main$2, _ as __nuxt_component_1$1 } from './Card-D-06xRdd.mjs';
import { ref, mergeProps, computed, toValue, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { f as fetchDefaults, c as useRequestFetch } from './server.mjs';
import { q as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { u as useAsyncData } from './asyncData-WMAbEiet.mjs';
import './Icon-Bz1m2FM2.mjs';
import './nuxt-link-DFBuEUJs.mjs';
import './lists-bCv0e5oG.mjs';
import 'pinia';
import 'firebase/firestore';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'firebase/app';
import 'firebase/auth';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'perfect-debounce';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const baseUrl = "https://api.themoviedb.org/3/search/multi";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm = ref("");
    const searchResults = ref([]);
    const loading = ref(false);
    const moreAvailable = ref(false);
    const noResults = ref(false);
    const pageCount = ref(1);
    const btnState = ref("initial");
    const loadMoreBtnState = ref("initial");
    const btnLabel = ref("Search");
    const loadMoreBtnLabel = ref("Load More");
    async function searchQuery() {
      const { data: result } = await useFetch(baseUrl, {
        params: {
          page: pageCount.value,
          api_key: process.env.TMDB_API_KEY,
          query: searchTerm.value
        }
      }, "$-Ce1qLOLqW");
      if (result.value) {
        searchResults.value.push(
          ...result.value.results.filter((item) => item.media_type != "person")
        );
        if (result.value.total_results == 0) {
          noResults.value = true;
        }
        if (result.value.page < result.value.total_pages) {
          moreAvailable.value = true;
        } else {
          moreAvailable.value = false;
        }
      }
      loading.value = false;
      btnState.value = "initial";
    }
    async function loadMore() {
      pageCount.value += 1;
      loading.value = true;
      await searchQuery();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = _sfc_main$1;
      const _component_Button = __nuxt_component_1;
      const _component_Card = _sfc_main$2;
      const _component_CardLoader = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "add-page page container" }, _attrs))}><div class="header"><h1>Add new item</h1><form class="search-wrapper">`);
      _push(ssrRenderComponent(_component_Input, {
        type: "text",
        name: "search",
        label: "Search movies or tv shows",
        placeholder: "eg. Avenger",
        leftIcon: "search",
        value: searchTerm.value,
        required: "required",
        "keep-alive": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        label: btnLabel.value,
        state: btnState.value
      }, null, _parent));
      _push(`</form></div><div class="lists-container list-grid"><!--[-->`);
      ssrRenderList(searchResults.value, (item) => {
        _push(ssrRenderComponent(_component_Card, {
          hasAction: true,
          action: "plus",
          actionName: "Add this",
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (loading.value) {
        _push(`<div class="loader-container list-grid"><!--[-->`);
        ssrRenderList(8, (index) => {
          _push(ssrRenderComponent(_component_CardLoader, { key: index }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (moreAvailable.value) {
        _push(`<div class="button-container load-more-btn">`);
        _push(ssrRenderComponent(_component_Button, {
          label: loadMoreBtnLabel.value,
          state: loadMoreBtnState.value,
          onClick: loadMore
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (noResults.value) {
        _push(`<div class="no-results-container"><p class="large"> We couldn&#39;t find the results for your query. Please try again with another search term. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-CJzjyd-m.mjs.map
