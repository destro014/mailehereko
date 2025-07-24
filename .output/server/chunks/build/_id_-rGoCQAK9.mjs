import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './DetailsWrapper-DChvmfoI.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { n as navigateTo, u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3-BsEhVzO7.mjs';
import { u as useAsyncData } from './asyncData-COZS_CTN.mjs';
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
import 'pinia';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'perfect-debounce';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const config = useRuntimeConfig();
    const { data: item, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("movie-details", async () => {
      const res = await $fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}`,
        {
          params: {
            api_key: config.public.TMDB_API_KEY
          }
        }
      );
      return res;
    })), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      navigateTo("/404");
    }
    useHead(() => {
      if (!item.value) return {};
      return {
        title: item.value.original_title + " - ",
        meta: [
          { hid: "title", name: "title", content: item.value.original_title },
          { hid: "description", name: "description", content: item.value.overview },
          {
            hid: "keywords",
            name: "keywords",
            content: "mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel"
          },
          {
            hid: "og:title",
            property: "og:title",
            content: item.value.original_title
          },
          {
            hid: "og:description",
            property: "og:description",
            content: item.value.overview
          },
          {
            hid: "og:image",
            property: "og:image",
            content: "https://image.tmdb.org/t/p/w1280" + item.value.backdrop_path
          },
          {
            hid: "og:url",
            property: "og:url",
            content: `https://mailehereko.pramodpoudel.com.np/movie/${route.params.id}`
          },
          { hid: "og:locale", property: "og:locale", content: "en_EN" },
          {
            hid: "og:site_name",
            property: "og:site_name",
            content: item.value.original_title
          },
          { hid: "og:type", property: "og:type", content: "website" },
          { hid: "twitter:site", name: "twitter:site", content: "@destro014" },
          {
            hid: "twitter:card",
            property: "twitter:card",
            content: "summary_large_image"
          },
          {
            hid: "twitter:url",
            property: "twitter:url",
            content: "https://twitter.com/destro014"
          },
          {
            hid: "twitter:title",
            property: "twitter:title",
            content: item.value.original_title
          },
          {
            hid: "twitter:description",
            property: "twitter:description",
            content: item.value.overview
          },
          {
            hid: "twitter:image",
            property: "twitter:image",
            content: "https://image.tmdb.org/t/p/w1280" + item.value.backdrop_path
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DetailsHeader = __nuxt_component_0;
      const _component_DetailsWrapper = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "movie-details-page page container" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_DetailsHeader, {
        details: unref(item),
        type: "movie"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DetailsWrapper, {
        details: unref(item),
        type: "movie"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movie/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-rGoCQAK9.mjs.map
