<template>
	<view class="friend">
		<tabControl>
			<template v-slot:center>
				通讯录
			</template>
		</tabControl>

		<view class="friend_list">
			<!-- 官方 -->
			<block v-for="item in official">
				<friend :item="item"></friend>
			</block>

			
			<!-- 我的朋友 -->
			<block v-for="item in friendList">
				<friend :item="item"></friend>
			</block>
		</view>
	</view>
</template>

<script>
	import tabControl from '../../components/tabControl.vue'
	import friend from '../../components/friend.vue'
	export default {
		data() {
			return {
				official: [{
						url: 'https://dcdn.it120.cc/2021/09/28/6c831b37-8dbb-49df-ad23-64c3785d71cf.png',
						name: '新的朋友'
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/28/e5748e09-8173-448e-81e9-df90215d8027.png',
						name: '群聊'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/28/194d1409-0cba-4aa6-948e-fb3b12479512.png',
						name: '公众号'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/28/3744cb43-d70b-4b3a-8de4-b9959995787e.png',
						name: '标签'
					}

				],
				friendList: [{
						url: 'https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg',
						name: '李红'
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '韩梅梅'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '六二哈'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '彩虹小姐'
					},{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '六二哈'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '彩虹小姐'
					},{
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '六二哈'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/25/83f746f6-be3f-4f6a-bf61-78c88886f7cc.png',
						name: '彩虹小姐'
					},

				]
			}
		},

		components: {
			tabControl,
			friend
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.friend {
		.friend_list {
	
			padding: 30rpx;
		}
	}
</style>
