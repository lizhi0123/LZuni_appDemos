<template>
	<view class="container">

		<text class="iconfont icon-guanzhu" style="font-size: 100rpx;color: red;"></text>

		<block v-for="(item,index) in newsList">

			<common-list :item="item" :index="index"></common-list>

		</block>
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue"
	
	export default {
		components:{
			commonList
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				newsList: []
			}
		},
		methods: {
			itemClick($goodsId) {
				console.log('123itemclick ' + $goodsId);
				uni.navigateTo({
					url: '../indexDetail/indexDetail?id=' + $goodsId
				});
			},

		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			uni.request({
				url: 'http://192.168.0.13/LZPHPDemos/LZPhpDemo/API/GoodsListAPI.php',//127.0.0.1
				// url: 'http://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.newsList = res.data.data;
					uni.hideLoading();
				},
				fail: () => {
					uni.hideLoading();
				},
				complete: () => {}
			});
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}

	.container {
		padding: 0px;
		font-size: 14px;
		line-height: 24px;
		background-color: #F5F5F5;
		/*浅灰 */
	}
</style>
