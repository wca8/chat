<template>
	<view class="Friend">
		<view class="avatar">
			<image :src="item.url" mode=""></image>
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
.Friend{
	display: flex;
	padding: 15rpx 0;
	border-bottom: 1px solid $uni-border-color;

	.avatar{
		margin-right: 30rpx;
		display: flex;
		align-items: center;
		image{
			width: 86rpx;
			height: 86rpx;
			border-radius: 10rpx;
		}
		
	}
	.name{
		line-height: 86rpx;
	}
}
</style>
