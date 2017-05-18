<template>
	<div>
		<mt-header title="热门新闻">
		  <a href="javascript:;" onclick="window.history.go(-1)"slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </a>
		</mt-header>
		<div class="hotnews">
			<div v-for='item in newsList' :key='item.name' >
				<router-link :to='item.name'>{{item.title}}</router-link>
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
			]
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
.hotnews{
	padding: 15px 0 5px 10px;
    font-size: 0;
}
.hotnews div{
	display: inline-block;
	padding: 2px 8px;
	margin: 0 12px 12px 0;
	border:1px solid #ea6f5a;
	border-radius: 4px;
	font-size: 14px;
	color:#ea6f5a;
}
.hotnews div a{
	color:#ea6f5a;
}
</style>
