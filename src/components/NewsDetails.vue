<template>
	<div>
		<mt-header :title="dataList.from">
		  <a href="javascript:;" onclick="window.history.go(-1)" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </a>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<h3>{{dataList.title}}</h3>
		<div class="time">{{dataList.time}}</div>
		<div class="content" v-html="dataList.content">
			{{dataList.content}}
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			dataList:[]
		}
	},
	beforeMount() {
	    this.fetchData(this.$route.params.id);
	},
	methods:{
		fetchData(id){
			var _this=this;
			this.$http.get('http://wangyi.butterfly.mopaasapp.com/detail/api?simpleId='+id).then(function(res){
				_this.dataList = res.data;
			}).catch(function(err){
				console.log('文章详细页面:',err);
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
	font-size: 16px;
	line-height: 32px;
	text-align: center;
}
.time{
	font-size: 12px;
	text-align: center;
	margin-bottom: 30px;
}
.content img{
	width: 100% !important;
	max-width: 100% !important;
}
.content{
	padding: 0 10px;
}
</style>
