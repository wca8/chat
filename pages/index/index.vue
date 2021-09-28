<template>
	<view class="content">
		
		<tabControl>
			<template v-slot:center>
				Like(36)
			</template>
		</tabControl>
		
		<view class="msg-content">
			<block v-for="item in msg">
				<chat :chatType="3" :item='item'></chat>
			</block>
			<block v-for="item in msg2">
				<chat :chatType="1" :item='item'></chat>
			</block>
			<block v-for="item in msg3">
				<chat :chatType="6" :item='item'></chat>
			</block>
			<block v-for="item in msg4">
				<chat :chatType="4" :item='item'></chat>
			</block>
			<block v-for="item in msg2">
				<chat :chatType="1" :item='item'></chat>
			</block>
			<block v-for="item in msg2">
				<chat :chatType="1" :item='item'></chat>
			</block>
		</view>
		

	</view>
</template>

<script>
	import chat from '../../components/chat.vue'
	import tabControl from '../../components/tabControl.vue'
	
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
				],
				msg2: [{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: 'Like团队',
						time: '20:13',
						content: '明天去哪玩!',
						message: 3
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: 'Like团队',
						time: '19:42',
						content: '可以一块跳舞吗!',
						message: 1
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: 'Like团队',
						time: '19:36',
						content: '明天可以一块吃饭吗!',
						message: 4
					}
				],
				msg3: [{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '订阅号',
						time: '20:13',
						content: '明天去哪玩!',
						message: 3
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '订阅号',
						time: '19:42',
						content: '可以一块跳舞吗!',
						message: 1
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '订阅号',
						time: '19:36',
						content: '明天可以一块吃饭吗!',
						message: 4
					}
				],
				msg4: [{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: 'Like支付',
						time: '20:13',
						content: '明天去哪玩!',
						message: 3
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: 'Like支付',
						time: '19:42',
						content: '可以一块跳舞吗!',
						message: 1
					}
				]
			}
		},
		components: {
			chat,
			tabControl,
		
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
		.msg-content{
			padding: 30rpx;
			box-sizing: border-box;
			width: 100%;
		}
		
	}
</style>
