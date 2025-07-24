import { _ as __nuxt_component_0$1 } from './nuxt-link-DFBuEUJs.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-Bz1m2FM2.mjs';

const _sfc_main$1 = {
  name: "DetailsHeader",
  props: ["details", "type"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "details-header" }, _attrs))}><div class="banner image"><img${ssrRenderAttr("src", "https://image.tmdb.org/t/p/w1280" + $props.details.backdrop_path)}${ssrRenderAttr("alt", $props.details.original_title || $props.details.original_name)}></div><div class="header-title-container bg-blur"><div class="breadcrumb-container">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { name: "index" },
    class: "breadcrumb-link-item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`MaileHereko`);
      } else {
        return [
          createTextVNode("MaileHereko")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="small breadcrumb-seperator">/</p>`);
  if ($props.type == "tv") {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "breadcrumb-link-item",
      to: { name: "tvshows" }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`TV Shows `);
        } else {
          return [
            createTextVNode("TV Shows ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "movie") {
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "breadcrumb-link-item",
      to: { name: "movies" }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Movies `);
        } else {
          return [
            createTextVNode("Movies ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><h1 class="title">${ssrInterpolate($props.details.original_title || $props.details.original_name)}</h1></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/DetailsHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "DetailsHeader",
  props: ["details", "type"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "details-wrapper" }, _attrs))}><div class="poster image"><img${ssrRenderAttr("src", "https://image.tmdb.org/t/p/w500" + $props.details.poster_path)}${ssrRenderAttr("alt", $props.details.original_title || $props.details.original_name)}></div><div class="details-container"><div class="tagline-container detail"><h2 class="tagline">${ssrInterpolate($props.details.tagline)}</h2></div><div class="description-container detail"><p class="label">${ssrInterpolate($props.details.overview)}</p></div><div class="rating detail">`);
  _push(ssrRenderComponent(_component_Icon, { name: "star" }, null, _parent));
  _push(`<p>${ssrInterpolate($props.details.vote_average)}</p></div><div class="type-status details-row"><div class="type detail"><p class="label">Type</p>`);
  if ($props.type == "movie") {
    _push(`<p class="large">Movie</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "tv") {
    _push(`<p class="large">TV Shows</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.type == "tv") {
    _push(`<div class="status detail"><p class="label">Status</p><p class="large">${ssrInterpolate($props.details.status)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="dates details-row">`);
  if ($props.type == "movie") {
    _push(`<div class="release-date detail"><p class="label">Release date</p><p class="large">${ssrInterpolate($props.details.release_date)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "tv") {
    _push(`<div class="first-air-date detail"><p class="label">First air date</p><p class="large">${ssrInterpolate($props.details.first_air_date)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "tv") {
    _push(`<div class="last-air-date detail"><p class="label">Last air date</p><p class="large">${ssrInterpolate($props.details.last_air_date)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.type == "tv") {
    _push(`<div class="season-episodes details-row"><div class="seasons detail"><p class="label">No. of seasons</p><p class="large">${ssrInterpolate($props.details.number_of_seasons)}</p></div><div class="episodes detail"><p class="label">No. of episodes</p><p class="large">${ssrInterpolate($props.details.number_of_episodes)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="run-time detail">`);
  if ($props.type == "movie") {
    _push(`<p class="label">Run time</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "tv") {
    _push(`<p class="label">Episode run time</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "movie") {
    _push(`<p class="large">${ssrInterpolate($props.details.runtime)} minutes </p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.type == "tv") {
    _push(`<p class="runtime-wrapper"><!--[-->`);
    ssrRenderList($props.details.episode_run_time, (item) => {
      _push(`<span class="run-time large">${ssrInterpolate(item)}</span>`);
    });
    _push(`<!--]--> minutes </p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="genres detail"><p class="label">Genres</p><p class="genre-wrapper"><!--[-->`);
  ssrRenderList($props.details.genres, (item) => {
    _push(`<span class="genre large">${ssrInterpolate(item.name)}</span>`);
  });
  _push(`<!--]--></p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/DetailsWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=DetailsWrapper-DXRUp-sW.mjs.map
