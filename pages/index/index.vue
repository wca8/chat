<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<block v-for="item in msg">
			<fChat :item='item'></fChat>
		</block>


	</view>
</template>

<script>
	import fChat from '../../components/fChat.vue'
	export default {
		data() {
			return {
				msg: [{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '何承会',
						time: '20:13',
						content: '明天去哪玩!',
						message: 3
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '小红',
						time: '19:42',
						content: '可以一块跳舞吗!',
						message: 1
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '王美丽',
						time: '19:36',
						content: '明天可以一块吃饭吗!',
						message: 4
					}
				]
			}
		},
		components: {
			fChat
		},
		onLoad() {

		},
		methods: {

		},
		onPullDownRefresh() {
			console.log(1)
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.content {
		.status_bar {
		      height: var(--status-bar-height);
		      width: 100%;
		  }
		padding: 30rpx;
		box-sizing: border-box;
		width: 100%;
	}
</style>
