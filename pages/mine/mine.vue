<template>
	<view class="mine">
		<view class="info">
			<view class="avatar">
				<image src="../../static/img/test/avatar.jpg" mode=""></image>
			</view>
			<view class="name">
				<view class="nickName">
					{{userInfo.nickName}}
				</view>
				<view class="like_account"> 
					<view>Like号:{{userInfo.Like}}</view>
					<view> > </view>
				</view>

			</view>
		</view>
		<view class="mine_list">
			<block v-for="item in official">
				<cart :item="item"></cart>
			</block>
		</view>
	</view>
</template>

<script>
	import cart from '../../components/cart.vue'
	export default {
		data() {
			return {
				userInfo: {
					nickName: '一片月',
					Like: 'aMoon666666',
					avatar: 'https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg',
					sign: '心若安好,清风自来!',
					type: 0
				},
				official: [{
						url: 'https://dcdn.it120.cc/2021/09/28/160bc4c9-3783-449b-b3de-4fdd742adc76.png',
						name: '支付'
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/28/fca9f60f-87bc-410f-ab0d-8a5968dde8de.png',
						name: '朋友圈'
					}, 
					{
						url: 'https://dcdn.it120.cc/2021/09/28/ab1b72bb-76de-4d1c-97ab-f76cf166802d.png',
						name: '收藏'
					}, 
					{
						url: 'https://dcdn.it120.cc/2021/09/28/f8ba9dea-9ec1-4a39-b1f1-af037220b3e6.png',
						name: '设置'
					}
				
				],
			}
		},
		methods: {

		},
		components:{
			cart
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		min-height: calc(100vh - (var(--status-bar-height) + 80rpx));
		background-color: rgb(237, 238, 239);
		
		.info {
			padding:0 30rpx 35rpx 30rpx;
			display: flex;
			background-color: white;
			image {
				width: 130rpx;
				height: 130rpx;
				border-radius: 10rpx;
			}
			.name{
				margin-left: 36rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				flex: 1;
				.nickName{
					font-size: 42rpx;
					font-weight: 550;
				}
				.like_account{
					display: flex;
					justify-content: space-between;
					position: relative;
					top: -20rpx;
					color: $uni-text-color-grey;
					font-size: 30rpx;
				}
			}
		}
		
		.mine_list{
			margin-top: 20rpx;
		}
	}
</style>
