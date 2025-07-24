import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './Input-BGczIgPb.mjs';
import { _ as __nuxt_component_1 } from './Button-BDUzcIEO.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useUsersStore } from './users-u1Jv2-Pp.mjs';
import { a as useRouter } from './server.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './Icon-Bz1m2FM2.mjs';
import 'pinia';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/firestore';

const _imports_0 = "" + buildAssetsURL("login-illustration.DGzBddGq.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useUsersStore();
    useRouter();
    const loginCredentials = ref({
      email: "",
      password: ""
    });
    const feedbacks = ref({
      email: "",
      password: ""
    });
    const state = ref({
      email: "",
      password: ""
    });
    ref(false);
    const formFeedback = ref("");
    const btnLabel = ref("Login");
    const btnState = ref("initial");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = _sfc_main$1;
      const _component_Button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page page container" }, _attrs))}><div class="page-wrapper"><div class="image-container"><img${ssrRenderAttr("src", _imports_0)} alt="3d Man with computer on hand"></div><div class="form-container"><div class="form-wrapper"><h1>Login</h1><form class="login" id="login">`);
      _push(ssrRenderComponent(_component_Input, {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "eg. hello@example.com",
        autocomplete: "username",
        leftIcon: "email",
        state: state.value.email,
        hasFeedback: true,
        feedback: feedbacks.value.email,
        value: loginCredentials.value.email
      }, null, _parent));
      _push(ssrRenderComponent(_component_Input, {
        type: "password",
        name: "password",
        label: "Password",
        isPassword: true,
        autocomplete: "current-password",
        placeholder: "********",
        leftIcon: "password",
        rightIcon: "eye-open",
        state: state.value.password,
        hasFeedback: true,
        feedback: feedbacks.value.password,
        value: loginCredentials.value.password
      }, null, _parent));
      _push(`<div class="button-container">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        label: btnLabel.value,
        state: btnState.value
      }, null, _parent));
      _push(`</div><div class="form-feedback has-error"><p>${ssrInterpolate(formFeedback.value)}</p></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index--iJ7_3Aq.mjs.map
