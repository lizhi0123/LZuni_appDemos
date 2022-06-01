<template>
	<view class="container">

		<text class="iconfont icon-guanzhu" style="font-size: 100rpx;color: red;"></text>


		<block v-for="(item,index) in newsList">


			<!-- 列表 -->
			<view class="p-2 bg-color">
				<!-- 头像昵称|关注按钮 -->
				<view class="flex align-center justify-between">
					<view class="flex align-center">
						<!-- 头像 -->
						<image src="/static/tabbar/order.png" mode="" class="rounded"
							style="width: 65rpx;height: 65rpx;margin-right: 20rpx;" lazy-load="">
						</image>
						<!-- 昵称| 发布时间 -->
						<view>
							<!-- 昵称 -->
							<view class="font-30" style="line-height: 1.3;">
								昵称
							</view>
							<text style="color: #9D9589;">2019-10-20 下午4:30</text>
						</view>


					</view>
					<!-- 按钮 -->
					<view class="flex align-center jusitify-center bgcolor-mainGreen color-white"
						style="width: 90rpx;height: 50rpx;border-radius: 5rpx;">
						关注
					</view>
				</view>


				<!-- 标题 -->
				<view class="mlr-15 mt-10 mb-10 font-30">
					<!-- border: 4rpx solid #E55936; -->
					我是标题
				</view>
				<!-- 图片 -->
				<image src="/static/tabbar/home_selected.png" mode="scaleToFill" class="rounded"
					style="height: 350rpx;width: 100%;"></image>

				<!-- 图标按钮 -->
				<view class="flex align-center">
					<!-- 赞 -->
					<view class="flex align-center jusitify-center flex-1">
						<text class="iconfont icon-dianzan font-45" style="margin-right: 10rpx; color: red;"></text>
						<text>1</text>
					</view>
					<!-- 收藏 -->
					<view class="flex align-center jusitify-center flex-1">
						<text class="iconfont icon-shoucang font-45" style="margin-right: 10rpx;"></text>
						<text>2</text>
					</view>
					<!-- 分享 -->
					<view class="flex align-center jusitify-center flex-1">
						<text class="iconfont icon-fenxiang font-45" style="margin-right: 10rpx;"></text>
						<text>3</text>
					</view>
					<!-- 加入购物车 -->
					<view class="flex align-center jusitify-center flex-1">
						<text class="iconfont icon-ic_jiarugouwuche color-mainRed font-45"
							style="margin-right: 10rpx;"></text><!-- 红色#E55936 -->
						<text>4</text>
					</view>

				</view>
				
			</view>
			<!-- 空白 -->
			<view class="bg-color-page" style="width: 100%;height: 20rpx;">
				
			</view>

		</block>
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
