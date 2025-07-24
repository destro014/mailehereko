import { _ as _sfc_main$1 } from './Icon-Bz1m2FM2.mjs';
import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: String,
    type: String,
    name: String,
    isPassword: Boolean,
    autocomplete: String,
    label: String,
    placeholder: String,
    required: [String, Boolean],
    leftIcon: String,
    rightIcon: String,
    hasFeedback: Boolean,
    feedback: String,
    state: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const value = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (val) => {
        value.value = val;
      }
    );
    const clickable = ref(false);
    const newRightIcon = ref(props.rightIcon);
    const newType = ref(props.type);
    if (props.isPassword) clickable.value = true;
    function togglePassword() {
      if (newType.value === "password") {
        newType.value = "text";
        newRightIcon.value = "eye-close";
      } else {
        newType.value = "password";
        newRightIcon.value = "eye-open";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-group", __props.state]
      }, _attrs))}><div class="left-icon icon-wrapper">`);
      _push(ssrRenderComponent(_component_Icon, { name: __props.leftIcon }, null, _parent));
      _push(`</div><input${ssrRenderAttr("type", newType.value)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("id", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("autocomplete", __props.autocomplete)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("value", __props.modelValue)}><label${ssrRenderAttr("for", __props.name)}>${ssrInterpolate(__props.label)}</label>`);
      if (__props.rightIcon) {
        _push(`<div class="${ssrRenderClass([{ "cursor-pointer": clickable.value }, "right-icon icon-wrapper"])}">`);
        if (__props.isPassword) {
          _push(ssrRenderComponent(_component_Icon, {
            name: newRightIcon.value,
            onClick: togglePassword
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, { name: newRightIcon.value }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.hasFeedback) {
        _push(`<div class="input-feedback"><p class="small feedback">${ssrInterpolate(__props.feedback)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Input-BGczIgPb.mjs.map
