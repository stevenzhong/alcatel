<template>
	<div>
		<ul class="list">
			<li v-for='item in arrList'>
				<div class="pic">
					<img :src="item.imgurl" alt="">
				</div>
				<p>{{item.time}}</p>
				<h3>{{item.title}}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return{
			arrList:[],
			showHots:true
		}
	},
	beforeCreate(){
		if(!this.arrList){
			this.showHots = false;
		}
	},
	beforeMount() {
	    this.fetchData('tech');
	},
	watch:{
		$route(to){
			var str = to.path;
			var params = str.split('/');
	    	this.fetchData(params[2]);
		}
	},
	methods:{
		fetchData(type){
			var _this=this;
			this.$http.get('http://wangyi.butterfly.mopaasapp.com/news/api?type='+type+'&page=1&limit=10').then(function(res){
				// console.log(res.data.list);
				_this.arrList = res.data.list;
			}).catch(function(err){
				console.log('文章详细页面:',err);
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
	padding: 15px 5% 0;
	background-color: #f3f3f3;
}
.list li{
	margin:4px 0;
}
.list li:last-child{
	margin-bottom: 50px;
}
.list li p{
	color:#969696;
	font-size: 12px;
}
.list li h3{
	color:#333;
	font-size: 14px;
	line-height: 24px;
	margin-bottom: 20px;
}
.pic img{
	width: 100%;
	max-width: 100%;
	max-height: 150px;
}
</style>
