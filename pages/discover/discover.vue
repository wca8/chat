<template>
	<view class="discover">
		<tabControl>
			<template v-slot:center>
				发现
			</template>
		</tabControl>
		
		<view class="discover_list">
			<block v-for="item in official">
				<cart :item="item"></cart>
			</block>
		</view>
	</view>
</template>

<script>
	import tabControl from '../../components/tabControl.vue'
	import cart from '../../components/cart.vue'
	export default {
		data() {
			return {
				official: [{
						url: 'https://dcdn.it120.cc/2021/09/28/a36fc655-b15a-4d80-a45d-17cf01dfb21b.png',
						name: '朋友圈'
					},
					{
						url: 'https://dcdn.it120.cc/2021/09/28/d712353d-4e99-46bf-aa99-00b8cde6a9c4.png',
						name: '我的日记'
					}, 
					{
						url: 'https://dcdn.it120.cc/2021/09/28/5b67c464-b9d2-4f3a-9782-230fb6b57909.png',
						name: '去购物'
					}, 
					{
						url: 'https://dcdn.it120.cc/2021/09/28/85851f0b-12c3-49d1-896c-89b2eb65af3c.png',
						name: '扫一扫'
					}, {
						url: 'https://dcdn.it120.cc/2021/09/28/46083074-7ee6-4f28-8a53-879abb6ecc2b.png',
						name: '我的健康'
					}
				
				],
			}
		},
		components:{
			tabControl,
			cart
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.discover{
	 background-color: rgb(237, 238, 239);
	 min-height: calc(100vh - (var(--status-bar-height) + 80rpx));
	.discover_list{
		
	}
}
</style>
