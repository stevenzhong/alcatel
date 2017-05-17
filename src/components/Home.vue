<template>
  <div class="home">
    <div class="logo">
    	<img src="../assets/img/logo.png" alt="">
    </div>
    <Swiper></Swiper>
    <div class="main">
    	<ul>
    		<li>随时随地查看新闻公告</li>
    		<li>每天为你推荐精选产品</li>
    		<li>第一时间查看考勤情况</li>
    	</ul>
    </div>
  </div>
</template>

<script>
import Swiper from './Swipe.vue'
export default {
	data(){
		return {
			'msg':''
		}
	},
	components:{
		Swiper
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  
}
.logo{
	width:32%;
	max-width: 120px;
	margin-left: 2%;
}
.main{
	height: 180px;
	background: url(../assets/img/main_bg.png) no-repeat;
	background-position: right bottom;
	background-size:40% auto;
}
.main ul{
	margin-left: 25px;
	padding-top: 30px;
}
.main ul li{
	width: 100%;
	font-size: 14px;
	line-height:30px;
	color:#4a4a4a;
}
.main ul li:before{
	content: '.';
	display: inline-block;
	margin-right:5px;
	font-size: 14px;
	line-height: 30px;
}
</style>
