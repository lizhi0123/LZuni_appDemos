<template>
	<view class="container">

		<!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<uni-list>
			<uni-list-item v-for="(item,index) in newsList" :title="item.title" note="note note 111" @click="itemClick(item.id)" clickable="true"></uni-list-item>
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
