"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "",
      goods: {},
      goodsid: ""
    };
  },
  methods: {
    itemClick: function(e) {
      console.log("cliced");
    }
  },
  onLoad: function(e) {
    console.log(e);
    this.goodsid = e.id;
    common_vendor.index.showLoading({
      title: "\u52A0\u8F7D\u4E2D...",
      mask: false
    });
    common_vendor.index.request({
      url: "http://127.0.0.1/LZPHPDemos/LZPhpDemo/API/GoodsListAPI.php",
      method: "GET",
      data: { "id": this.goodsid },
      success: (res) => {
        this.goods = res.data.data[0];
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
    a: common_vendor.t($data.goods.id),
    b: common_vendor.t($data.goods.title),
    c: $data.goods.note
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/RainSets/Desktop/lizhi/Code/LZuni_appDemos/LZuni_appDemo/pages/indexDetail/indexDetail.vue"]]);
wx.createPage(MiniProgramPage);
