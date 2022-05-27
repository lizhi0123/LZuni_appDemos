"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
      newsList: []
    };
  },
  methods: {
    itemClick() {
      console.log("cliced");
    }
  },
  onLoad() {
    common_vendor.index.showLoading({
      title: "\u52A0\u8F7D\u4E2D...",
      mask: false
    });
    common_vendor.index.request({
      url: "http://127.0.0.1/LZPHPDemos/LZPhpDemo/API/GoodsListAPI.php",
      method: "GET",
      data: {},
      success: (res) => {
        this.newsList = res.data.data;
        common_vendor.index.hideLoading();
      },
      fail: () => {
        common_vendor.index.hideLoading();
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
    a: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: "71c912ab-1-" + i0 + ",71c912ab-0",
        b: common_vendor.p({
          title: item.title,
          note: "note note 111",
          link: true,
          showArrow: "false"
        })
      };
    }),
    b: common_vendor.o(($event) => $options.itemClick())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/RainSets/Desktop/lizhi/Code/LZuni_appDemos/LZuni_appDemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
