<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss" >
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	/*每个页面公共css */
	body{
	/* 	padding: 30rpx;
		box-sizing: border-box; */
		/* padding-top:var(--status-bar-height+(80rpx)); */
		padding-top:calc(var(--status-bar-height) + 80rpx);
	}
</style>
