<template>
	<div>
		<mt-header :title="title">
		  <a href="javascript:;" onclick="window.history.go(-1)"slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </a>
		</mt-header>
		<div class="hotnews clear">
			<div v-for='item in newsList' :key='item.name' >
				<router-link :to='item.name' ><span @click='getTitle(item.title)'>{{item.title}}</span></router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return {
			newsList:[
				{name:'tech',title:'最新科技'},
				{name:'sport',title:'体育'},
				{name:'edu',title:'教育频道'},
				{name:'ent',title:'娱乐'},
				{name:'travel',title:'旅游达人'},
				{name:'war',title:'军事'},
				{name:'money',title:'财经啦'}
			],
			title:'最新科技'
		}
	},
	methods:{
		getTitle(name){
			this.title = name;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    font-size: 14px;
    font-weight: 700;
    color: #545454;
    background-color: #f5f5f5;
}
h3 a{
	font-size: 14px;
	color: red;
}
header{
	width: 100%;
	position: fixed;
	top:0;
	font-size:14px;
	z-index: 999;
}
.hotnews{
	margin-top:40px;
	padding: 15px 0 5px 10px;
    font-size: 0;
}
.hotnews div{
	display: inline-block;
	padding: 2px 8px;
	margin: 0 12px 12px 0;
	border:1px solid #969696;
	border-radius: 4px;
	font-size: 14px;
	color:#969696;
}
.hotnews div.active{
	border:1px solid #ea6f5a;
}
.hotnews div a{
	color:#969696;
}
.hotnews div a.active{
	font-size: 16px;
	color:#ea6f5a;
}
</style>
