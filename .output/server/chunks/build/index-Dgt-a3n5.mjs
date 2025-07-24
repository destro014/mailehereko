import { _ as _sfc_main$3 } from './Input-BGczIgPb.mjs';
import { _ as __nuxt_component_1 } from './Button-BDUzcIEO.mjs';
import { a as _sfc_main$4, _ as __nuxt_component_1$1 } from './Card-D-06xRdd.mjs';
import { _ as _sfc_main$5 } from './Icon-Bz1m2FM2.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$2 = {
  name: "SuggestionCompletePopup",
  data() {
    return {
      popupOpen: true
    };
  },
  methods: {
    closePopup() {
      this.$emit("closed", true);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = _sfc_main$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup" }, _attrs))}><div class="popup-wrapper"><div class="popup-close">`);
  _push(ssrRenderComponent(_component_Icon, { name: "close" }, null, _parent));
  _push(`</div><div class="icon-container"><svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M99.3 40.4578C99.3 41.2078 99.3 41.9578 99.25 42.6578C91.6 39.8078 82.6 41.5578 76.6 46.9578C72.55 43.3078 67.3 41.2578 61.7 41.2578C49.4 41.2578 39.4 51.308 39.4 63.708C39.4 77.858 46.5 88.208 53.3 94.908C52.75 94.858 52.3 94.758 51.9 94.608C38.95 90.158 10 71.758 10 40.4578C10 26.6578 21.0999 15.5078 34.7999 15.5078C42.95 15.5078 50.15 19.4078 54.65 25.4578C59.2 19.4078 66.4 15.5078 74.5 15.5078C88.2 15.5078 99.3 26.6578 99.3 40.4578Z" fill="url(#paint0_linear_780:2105)"></path><path d="M89.9995 47.9492C84.6495 47.9492 79.7995 50.5495 76.7995 54.5495C73.7995 50.5495 68.9995 47.9492 63.5995 47.9492C54.4995 47.9492 47.0996 55.3495 47.0996 64.5495C47.0996 68.0995 47.6496 71.349 48.6496 74.349C53.3495 89.199 67.7995 98.0495 74.9495 100.5C75.9495 100.849 77.5995 100.849 78.6495 100.5C85.7995 98.0495 100.25 89.199 104.95 74.349C105.95 71.299 106.5 68.0495 106.5 64.5495C106.5 55.3495 99.0995 47.9492 89.9995 47.9492Z" fill="url(#paint1_linear_780:2105)"></path><defs><linearGradient id="paint0_linear_780:2105" x1="54.65" y1="15.5078" x2="54.65" y2="94.908" gradientUnits="userSpaceOnUse"><stop stop-color="#FF33F7"></stop><stop offset="0.503125" stop-color="#B66DFF"></stop><stop offset="1" stop-color="#7B6EF6"></stop></linearGradient><linearGradient id="paint1_linear_780:2105" x1="76.7996" y1="47.9492" x2="76.7996" y2="100.762" gradientUnits="userSpaceOnUse"><stop stop-color="#FF33F7"></stop><stop offset="0.503125" stop-color="#B66DFF"></stop><stop offset="1" stop-color="#7B6EF6"></stop></linearGradient></defs></svg></div><h4>Thank you for your suggestion</h4><p> Your suggestion has been succesfully added to my watchlist, I will manage sometime to watch your suggestion. \u2764 </p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SuggestionCompletePopup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "SuggestionCompletePopup",
  data() {
    return {
      popupOpen: true,
      suggestion: {
        title: null,
        link: null
      },
      btnState: "initial",
      btnLabel: "Suggest"
    };
  },
  methods: {
    closePopup() {
      this.$emit("closed");
    },
    async suggest() {
      this.btnState = "loading";
      await this.$fire.firestore.collection("manualsuggestions").add(this.suggestion).then((doc) => {
        this.$emit("suggested");
        this.btnState = "initial";
        this.btnLabel = "Suggested";
        this.actionPending = false;
      });
    },
    clickOutside() {
      console.log("click outsie");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = _sfc_main$5;
  const _component_Input = _sfc_main$3;
  const _component_Button = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup manual-suggestion-popup" }, _attrs))}><div class="popup-wrapper"><div class="popup-close">`);
  _push(ssrRenderComponent(_component_Icon, { name: "close" }, null, _parent));
  _push(`</div><h4>Suggest something to watch</h4><form class="login" id="login">`);
  _push(ssrRenderComponent(_component_Input, {
    type: "text",
    name: "title",
    label: "Title",
    placeholder: "eg. Avenger",
    leftIcon: "movie",
    value: $data.suggestion.title,
    required: "required"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Input, {
    type: "text",
    name: "link",
    label: "Link (if available)",
    placeholder: "https://example.com",
    leftIcon: "link",
    value: $data.suggestion.link
  }, null, _parent));
  _push(`<div class="button-container">`);
  _push(ssrRenderComponent(_component_Button, {
    type: "submit",
    label: $data.btnLabel,
    state: $data.btnState
  }, null, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/ManualSuggestionPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Suggest",
  head() {
    return {
      title: "Suggest - ",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "MaileHereko - Suggest"
        },
        {
          hid: "description",
          name: "description",
          content: "Suggest some TV Shows and movies to watch"
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "MaileHereko - Suggest"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Suggest some TV Shows and movies to watch"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://mailehereko.pramodpoudel.com.np/img/banner-suggest.png"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://mailehereko.pramodpoudel.com.np/suggest"
        },
        { hid: "og:locale", property: "og:locale", content: "en_EN" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "MaileHereko"
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
          content: "MaileHereko - Suggest"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "Suggest some TV Shows and movies to watch"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "https://mailehereko.pramodpoudel.com.np/img/banner-suggest.png"
        }
      ]
    };
  },
  data() {
    return {
      searchTerm: null,
      searchResults: [],
      loading: false,
      moreAvailable: false,
      nothingFound: false,
      noResults: false,
      suggestionCompletePopupActive: false,
      manualSuggestionActive: false,
      pageCount: 1,
      btnState: "initial",
      loadMoreBtnState: "initial",
      btnLabel: "Search",
      loadMoreBtnLabel: "Load More",
      baseUrl: "https://api.themoviedb.org/3/search/multi"
    };
  },
  methods: {
    async search() {
      this.btnState = "loading";
      this.loading = true;
      this.noResults = false;
      this.searchResults = [];
      this.pageCount = 1;
      await this.searchQuery();
    },
    async searchQuery() {
      const result = await this.$axios.$get(
        "https://api.themoviedb.org/3/search/multi",
        {
          params: {
            page: this.pageCount,
            api_key: process.env.TMDB_API_KEY,
            query: this.searchTerm
          }
        }
      );
      this.searchResults.push(
        ...result.results.filter((item) => {
          if (item.media_type != "person") {
            return item;
          }
        })
      );
      if (result.total_results == 0) {
        this.noResults = true;
      } else if (result.page < result.total_pages) {
        this.moreAvailable = true;
      } else {
        this.moreAvailable = false;
        this.nothingFound = true;
      }
      this.loading = false;
      this.btnState = "initial";
    },
    async loadMore() {
      this.pageCount += 1;
      this.loading = true;
      await this.searchQuery();
    },
    manualSuggestionCompleted() {
      this.manualSuggestionActive = false;
      this.suggestionCompletePopupActive = true;
    },
    suggestionPopupClosed() {
      this.suggestionCompletePopupActive = false;
    },
    manualSuggestion() {
      this.manualSuggestionActive = true;
    },
    suggestionCompleted() {
      this.suggestionCompletePopupActive = true;
    },
    manualSuggestionPopupClosed() {
      this.manualSuggestionActive = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Input = _sfc_main$3;
  const _component_Button = __nuxt_component_1;
  const _component_Card = _sfc_main$4;
  const _component_CardLoader = __nuxt_component_1$1;
  const _component_SuggestionCompletePopup = __nuxt_component_4;
  const _component_ManualSuggestionPopup = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "suggest-page page container" }, _attrs))}><div class="header"><h1>Suggest me</h1><p> I will really appericiate it if you take time to suggest me something good to watch. </p><form class="search-wrapper">`);
  _push(ssrRenderComponent(_component_Input, {
    type: "text",
    name: "search",
    label: "Search",
    placeholder: "eg. Avenger",
    leftIcon: "search",
    value: $data.searchTerm,
    required: "required",
    "keep-alive": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_Button, {
    type: "submit",
    label: $data.btnLabel,
    state: $data.btnState
  }, null, _parent));
  _push(`</form></div><div class="lists-container list-grid"><!--[-->`);
  ssrRenderList($data.searchResults, (item) => {
    _push(ssrRenderComponent(_component_Card, {
      hasAction: true,
      action: "thumbs-up",
      actionName: "Suggest this",
      key: item.id,
      item,
      onSuggested: $options.suggestionCompleted
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  if ($data.loading) {
    _push(`<div class="loader-container list-grid"><!--[-->`);
    ssrRenderList(8, (index2) => {
      _push(ssrRenderComponent(_component_CardLoader, { key: index2 }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.moreAvailable) {
    _push(`<div class="button-container load-more-btn">`);
    _push(ssrRenderComponent(_component_Button, {
      label: $data.loadMoreBtnLabel,
      state: $data.loadMoreBtnState,
      onClick: $options.loadMore
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.noResults) {
    _push(`<div class="no-results-container"><h2>Sorry, No results found</h2><p class="large"> There are no movies or TV shows matching your search terms. You can suggest me manually </p>`);
    _push(ssrRenderComponent(_component_Button, {
      class: "cta-btn",
      label: "Suggest Manually",
      onClick: $options.manualSuggestion
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.nothingFound) {
    _push(`<div class="no-results-container"><h3>Looks like you didn&#39;t find something you are looking for.</h3><p class="large">You can make a manual suggestion if you want.</p>`);
    _push(ssrRenderComponent(_component_Button, {
      class: "cta-btn",
      label: "Suggest Manually",
      onClick: $options.manualSuggestion
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.suggestionCompletePopupActive) {
    _push(ssrRenderComponent(_component_SuggestionCompletePopup, { onClosed: $options.suggestionPopupClosed }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.manualSuggestionActive) {
    _push(ssrRenderComponent(_component_ManualSuggestionPopup, {
      onClosed: $options.manualSuggestionPopupClosed,
      onSuggested: $options.manualSuggestionCompleted
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/suggest/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dgt-a3n5.mjs.map
