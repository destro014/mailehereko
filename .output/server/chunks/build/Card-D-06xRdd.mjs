import { computed, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-Bz1m2FM2.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DFBuEUJs.mjs';
import { u as useListsStore } from './lists-bCv0e5oG.mjs';

const _sfc_main$1 = {
  name: "CardLoader",
  props: ["hasAction"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-skeleton" }, _attrs))}><div class="rating-skeleton"></div><div class="image-skeleton"></div><div class="info-skeleton"><div class="title-skeleton"></div>`);
  if ($props.hasAction) {
    _push(`<div class="action-skeleton"><div class="icon-skeleton"></div><div class="action-name-skeleton"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loaders/CardLoader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    hasAction: Boolean,
    action: String,
    actionName: String,
    item: Object,
    admin: Boolean
  },
  setup(__props) {
    const listsStore = useListsStore();
    computed(() => listsStore.lists);
    const props = __props;
    const successClass = ref(null);
    const actionPending = ref(false);
    const newAction = ref(props.action);
    const newActionName = ref(props.actionName);
    const routeTo = computed(() => {
      if (props.item && props.item.media_type && props.item.id && (props.item.media_type === "tv" || props.item.media_type === "movie")) {
        return {
          name: props.item.media_type + "-id",
          params: { id: props.item.id }
        };
      }
      if (props.item) {
        console.warn("Invalid route for item:", props.item);
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-wrapper" }, _attrs))}><div class="card-content"><div class="card-rating">`);
      _push(ssrRenderComponent(_component_Icon, { name: "star" }, null, _parent));
      _push(`<p>${ssrInterpolate(__props.item.vote_average)}</p></div>`);
      if (routeTo.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "card-image image",
          to: routeTo.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", "https://image.tmdb.org/t/p/w500" + __props.item.poster_path)}${ssrRenderAttr("alt", __props.item.original_title || __props.item.original_name)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: "https://image.tmdb.org/t/p/w500" + __props.item.poster_path,
                  alt: __props.item.original_title || __props.item.original_name
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card-info">`);
      if (routeTo.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "title",
          to: routeTo.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.item.original_title || __props.item.original_name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.item.original_title || __props.item.original_name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.hasAction) {
        _push(`<button class="${ssrRenderClass([[successClass.value], "btn card-action"])}">`);
        if (actionPending.value) {
          _push(`<span class="loader"><div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{ hidden: actionPending.value }, "btn-icon icon-left"])}">`);
        _push(ssrRenderComponent(_component_Icon, { name: newAction.value }, null, _parent));
        _push(`</div><div class="action-name">${ssrInterpolate(newActionName.value)}</div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_1 as _, _sfc_main as a };
//# sourceMappingURL=Card-D-06xRdd.mjs.map
