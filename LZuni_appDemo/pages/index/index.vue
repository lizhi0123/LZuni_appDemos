<template>
	<view class="container">

		<text class="iconfont icon-guanzhu" style="font-size: 100rpx;color: red;"></text>
		
		<uni-list>
			<uni-list-item v-for="(item,index) in newsList" :title="item.title" :note="item.note" @click="itemClick(item.id)" clickable="true"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				newsList: []
			}
		},
		methods: {
			itemClick($goodsId){
				console.log('123itemclick '+$goodsId);
				uni.navigateTo({
									url: '../indexDetail/indexDetail?id='+$goodsId
								});
			},

		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			uni.request({
				url: 'http://127.0.0.1/LZPHPDemos/LZPhpDemo/API/GoodsListAPI.php',
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
	.container {
		padding: 0px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
