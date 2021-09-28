<template>
	<view>
		<view  class="stat"></view>
		<view class="TabControl">
			<view>
				<slot name="left"></slot>
			</view>
			<view class="msg_num">
				
				<slot name="center"></slot>
			</view>
			<view class="search_btn">
				<image src="../static/img/tabcontrol/search.png" mode="widthFix"></image>
				<image src="../static/img/tabcontrol/plus.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iStatusBarHeight: 0
			};
		}, 
		onLoad() {
            this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight
        }
	}
</script>

<style lang="scss" scoped>
	.stat {
		background-color: rgb(237, 237, 237);
		position: fixed;
		z-index: 1;
		height: var(--status-bar-height); // --status-bar-height系统状态栏高度
		width: 100%;
		top: 0;
		left: 0;
	}

	.TabControl {
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		background-color: rgb(237, 237, 237);
		height: 80rpx;
		align-items: center;
		position: fixed;
		top:  var(--status-bar-height);
		width: 100%;
		z-index: 100;

		view {
			flex: 1;

		}

		.msg_num {
			flex: 4;
			text-align: center;
		}

		.search_btn {
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex: 1.5;
			image {
				width: 40rpx;
			}
		}
	}
</style>
