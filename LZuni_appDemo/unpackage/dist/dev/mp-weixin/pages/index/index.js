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
    itemClick($goodsId) {
      console.log("123itemclick " + $goodsId);
      common_vendor.index.navigateTo({
        url: "../indexDetail/indexDetail?id=" + $goodsId
      });
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.newsList, (item, index, i0) => {
      return {};
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/RainSets/Desktop/lizhi/Code/LZuni_appDemos/LZuni_appDemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
