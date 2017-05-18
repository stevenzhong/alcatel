<template>
  <div class="home">
    <div class="logo">
    	<img src="../../static/img/logo.png" alt="">
    </div>
    <Swiper></Swiper>
    <div class="main">
    	<ul>
    		<li>随时随地查看新闻公告</li>
    		<li>每天为你推荐精选产品</li>
    		<li>第一时间查看考勤情况</li>
    	</ul>
    	<div class="pic"><img src="../../static/img/main_bg.png" alt=""></div>
    </div>
	<div class="kaoqin">
		<h3>日常考勤</h3>
		<div class="username">
			用户名: <input placeholder="请输入用户名" v-model="username" />
		</div>
		<div class="password">
			密&nbsp;&nbsp;&nbsp;码: <input placeholder="请输入密码"  type="password" v-model="password" />
		</div>
		<div class="check" @click="showDaily">点击查询</div>
		<div class="ifobox" v-show="showIfo">
			<p>上班考勤:<span>{{ifo.a}}</span></p>
			<p>下班考勤:<span>{{ifo.b}}</span></p>
		</div>
		<div class="errbox" v-show="showerr">
			{{ifo.err}}
		</div>
	</div>
  </div>
</template>

<script>
import Swiper from './Swipe.vue'
export default {
	data(){
		return {
			username:'',
			password:'',
			showIfo:false,
			ifo:{},
			showerr:false
		}
	},
	components:{
		Swiper
	},
	methods:{
		showDaily(){
			if(this.username && this.password){
				this.showIfo = true;
				this.ifo ={
					'a':'08:29:34',
					'b':'19:31:54'
				};
				var _this = this;
				setTimeout(function(){
					_this.showIfo = false;
				},2000)
			}else if(this.username){
				this.showerr = true;
				this.ifo = {
					'err':'请输入正确密码'
				}
				var _this = this;
				setTimeout(function(){
					_this.showerr = false;
				},2000)
			}else if(this.password){
				this.showerr = true;
				this.ifo = {
					'err':'请输入正确用户名'
				}
				var _this = this;
				setTimeout(function(){
					_this.showerr = false;
				},2000)
			}else{
				this.showerr = true;
				this.ifo = {
					'err':'请输入正确用户名及密码'
				}
				var _this = this;
				setTimeout(function(){
					_this.showerr = false;
				},2000)
			}
			
		}
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
	position: relative;
	overflow: hidden;
}
.main .pic{
	width: 40%;
	position: absolute;
	right: -5%;
	top:-2%;
}
.main .pic img{
	width: 100%;
	max-width: 100%;
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
.kaoqin{
	margin-bottom: 40px;
}
.kaoqin h3{
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 700;
    color: #545454;
    background-color: #f5f5f5;
}
.username,.password{
	padding: 20px 20px;
}
.check{
	padding: 5px 20px;
	margin:0 auto;
	margin-top: 20px;
	border: 1px solid #26a2ff;
	border-radius: 4px;
	background: #26a2ff;
	color:#fff;
	text-align: center;
}
.ifobox,.errbox{
	width: 80%;
	position: fixed;
	left:50%;
	top:50%;
	transform: translate3d(-50%,-50%,0);
	background: rgba(0,0,0,.7);
	color:#fff;
	height: 120px;
}
.errbox{
	line-height: 60px;
	text-align: center;
}
.ifobox p{
	font-size: 14px;
	line-height: 24px;
	margin:10px 0 10px 20px;
}
.ifobox p span{
	margin-left: 20px;
}
</style>
