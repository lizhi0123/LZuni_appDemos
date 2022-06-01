"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: Object,
    index: Number
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.item.title)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/RainSets/Desktop/lizhi/Code/LZuni_appDemos/LZuni_appDemo/components/common/common-list.vue"]]);
wx.createComponent(Component);
