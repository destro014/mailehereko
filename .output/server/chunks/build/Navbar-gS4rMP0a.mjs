import { _ as __nuxt_component_0$1 } from './nuxt-link-DFBuEUJs.mjs';
import { computed, ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-Bz1m2FM2.mjs';
import { u as useUsersStore } from './users-u1Jv2-Pp.mjs';

const _sfc_main$1 = {
  name: "Logo"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))}><svg width="1000px" height="1000px" viewBox="0 0 1000 1000"><path class="color-secondary" fill="#1EA5FC" d="M231.4,394.07L669.5,119.2C752.42,67.18,860,126.99,860,225.13v549.74c0,98.13-107.58,157.95-190.5,105.93
		L231.4,605.93C153.41,556.99,153.41,443.01,231.4,394.07z"></path><path class="color-primary" fill="#5A4AF4" d="M768.6,394.07L330.5,119.2C247.58,67.18,140,126.99,140,225.13v549.74c0,98.13,107.58,157.95,190.5,105.93
		l438.1-274.87C846.59,556.99,846.59,443.01,768.6,394.07z"></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const usersStore = useUsersStore();
    const isLoggedIn = computed(() => usersStore.isLoggedIn);
    computed(() => usersStore.authUser);
    const menuOpened = ref(false);
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Logo = __nuxt_component_0;
      const _component_Icon = _sfc_main$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-blur" }, _attrs))}><div class="navbar container"><div class="brand">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { name: "index" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ active: menuOpened.value }, "menu-wrapper"])}"><div class="menu-container"><div class="menu-close menu-item">`);
      _push(ssrRenderComponent(_component_Icon, { name: "close" }, null, _parent));
      _push(`</div><ul class="menu">`);
      if (!isLoggedIn.value) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link",
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
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoggedIn.value) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link",
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
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoggedIn.value) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link has-icon",
          to: { name: "suggest" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Suggest me</span>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "arrow-right" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "Suggest me"),
                createVNode(_component_Icon, { name: "arrow-right" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoggedIn.value) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link cta",
          to: { name: "admin" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Dashboard </span>`);
            } else {
              return [
                createVNode("span", null, "Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoggedIn.value) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link cta",
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
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoggedIn.value) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link cta",
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
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoggedIn.value) {
        _push(`<li><a href="#" class="nav-link has-icon">`);
        _push(ssrRenderComponent(_component_Icon, { name: "logout" }, null, _parent));
        _push(`<span>Logout</span></a></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div><div class="hamburger menu-item">`);
      _push(ssrRenderComponent(_component_Icon, { name: "menu" }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, __nuxt_component_0 as a };
//# sourceMappingURL=Navbar-gS4rMP0a.mjs.map
