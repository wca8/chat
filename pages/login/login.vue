<template>
	<view>
		<input v-model="text" type="text" placeholder="账号" value="" />
		<input v-model="password" type="text" placeholder="密码" value="" />
		<button @click="login" type="default">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				password: ''
			}
		},
		onLoad(){
			uni.getStorage({
					key: 'token',
				    success: function (res) {
						console.log('获取token成功')
				      uni.switchTab({
						  url:'../index/index'
					  })
				    }
			})
		},
		methods: {
			async login() {
				const res = await this.$request('/login', {
					name: this.text,
					password: this.password
				}, 'post')
				console.log(res)
				if (res.token) {
					uni.switchTab({
						url: '../index/index'
					})
					uni.setStorage({
						key:'token',
						data:res.token
					})
				}
			},

		}
	}
</script>

<style>

</style>
