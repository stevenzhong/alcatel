<template>
	<div>
		<h3>热门新闻</h3>
		<div class="hotnews">
			<router-link v-for='item in newsList' :key='item.name' tag='div' :to="item.name">{{item.title}}</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return {
			newsList:[
				{name:'/news/tech',title:'最新科技'},
				{name:'/news/sport',title:'体育'},
				{name:'/news/edu',title:'教育频道'},
				{name:'/news/ent',title:'娱乐'},
				{name:'/news/travel',title:'旅游达人'},
				{name:'/news/war',title:'军事'},
				{name:'/news/money',title:'财经啦'}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 700;
    color: #545454;
    background-color: #f5f5f5;
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
</style>
