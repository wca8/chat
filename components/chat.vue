<template>
	<view class="Chat">
		<view class="avatar">
			<image class="friend" v-if="chatType==3" :src="item.url" mode="widthFix"></image>
			<image class="official" v-if="chatType==1" :src="OFFICIAL_LOGO_URL" mode="widthFix"></image>
			<image class="subscription" v-if="chatType==6" :src="SUBSCRIPTION_URL" mode="widthFix"></image>
			<image class="pay" v-if="chatType==4" :src="PAY_URL" mode="widthFix"></image>
			<view v-if="chatType==3" class="msg_num">
				{{item.message}}
			</view>
			<view  v-if="chatType!=3" class="official_msg msg_num"></view>
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
	import {
		OFFICIAL_LOGO_URL,
		SUBSCRIPTION_URL,
		PAY_URL
	} from '../static/constant/public.js'


	export default {
		data() {
			return {
				OFFICIAL_LOGO_URL,
				SUBSCRIPTION_URL,
				PAY_URL
			};
		},
		props: {
			// 0群聊 1官方公告 2群消息  3好友消息 4支付消息 5公众号 6订阅号
			chatType: {
				type: Number,
				default () {
					return 0
				}
			},
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Chat {
		display: flex;
		word-break: break-all;
		border-bottom: 2rpx solid $uni-border-color;
		padding: 10rpx 0;

		.avatar {
			margin-right: 20rpx;
			position: relative;

			.official {
				border-bottom-right-radius: 15rpx;
			}

			.official_msg {
				width: 20rpx!important;
				height: 20rpx!important;
			}

			.msg_num {
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
				height: 100rpx;
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
