<template>
	<view class="fChat">
		<view class="avatar">
			<image :src="item.url" mode="widthFix"></image>
			<view class="msg_num">{{item.message}}</view>
		</view>
		<view class="name">
			<view class="name-item">
				<view class="fname">{{item.name}}</view>
				<view class="lastTime">{{item.time}}</view>
			</view>
			<view class="content">{{item.content}}</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.fChat {
		display: flex;
		word-break: break-all;
		border-bottom: 2rpx solid $uni-border-color;
		padding: 20rpx 0;

		.avatar {
			margin-right: 20rpx;
			position: relative;
			.msg_num{
				width: 30rpx;
				height: 30rpx;
				line-height: 26rpx;
				position: absolute;
				top: -10rpx;
				right: -10rpx;
				color: white;
				background-color: $uni-bg-msg;
				border-radius: 50%;
				font-size: 22rpx;
				text-align: center;
			}
			image {
				width: 100rpx;
			}
		}

		.name {
			flex: 1;
			display: flex;
			flex-direction: column;

			.name-item {
				display: flex;
				justify-content: space-between;

				.fname {
					font-size: 36rpx;
				}

				.lastTime {
					font-size: 26rpx;
					color: $uni-text-color-grey;
				}
			}

			.content {
				font-size: 28rpx;
				color: $uni-text-color-grey;
			}
		}
	}
</style>
