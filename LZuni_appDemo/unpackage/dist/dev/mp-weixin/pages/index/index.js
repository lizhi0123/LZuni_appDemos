"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
      news: ["news1", "news2"]
    };
  },
  methods: {},
  onLoad() {
    common_vendor.index.request({
      url: "",
      method: "GET",
      data: {},
      success: (res) => {
      },
      fail: () => {
      },
      complete: () => {
      }
    });
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: "71c912ab-1-" + i0 + ",71c912ab-0",
        b: common_vendor.p({
          title: item,
          note: "note note 111"
        })
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/RainSets/Desktop/lizhi/Code/LZuni_appDemos/LZuni_appDemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);