<template>
	<div>
		<ul class="footerNav">
			<router-link tag='li' to='home'>主页</router-link>
			<router-link tag='li' to='news'>新闻</router-link>
			<router-link tag='li' to='notices'>公告</router-link>
			<router-link tag='li' to='products'>产品</router-link>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerNav{
	width: 100%;
	display: flex;
	position: fixed;
	bottom: 0;
	border-top:1px solid #f5f5f5;
	background-color: #26a2ff;
}
.footerNav li{
	flex: 1;
	font-size: 16px;
	line-height: 40px;
	text-align: center;
	color:#fff;
}
</style>