<template>
	<view class="Cart">
		<view class="avatar">
			<image :src="item.url" mode="widthFix"></image>
		</view>
		<view class="name">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			item:{
				type:Object,
				default (){
					return {}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.Cart{
	display: flex;
	padding: 6rpx 0;
	border-bottom: 1px solid $uni-border-color;
	background-color: white;
	padding:10rpx 30rpx;
	margin-bottom: 20rpx;
	.avatar{
		margin-right: 30rpx;
		display: flex;
		align-items: center;
		image{
			width: 50rpx;
			height:50rpx;
			border-radius: 10rpx;
		}
		
	}
	.name{
		line-height: 86rpx;
	}
}
</style>
