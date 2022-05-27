<!-- 
<template>
	<view class="content">
		<view class="title">{{title}}...</view>
		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				strings : ''
			}
		},
		onLoad:function(e){
			console.log(e);
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title = res.data.title;
					this.strings = res.data.content;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{padding:10upx 2%; width: 96%; flex-wrap:wrap;}
.title{line-height:2em; font-weight:700; font-size:38upx;}
.art-content{line-height:2em;}
</style> -->



<template>
	<view class="content">
		<text></text>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				href: '',
				newsList: []
			}
		},
		methods: {
			itemClick:function(e){
				console.log("cliced");
			},
	
		},
		onLoad:function(e) {
			console.log(e)
			var goodsid = e.goodsid;
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
	.content{padding:10upx 2%; width: 96%; flex-wrap:wrap;background-color: aqua;}
</style>