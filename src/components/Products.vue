<template>
<div>
	<mt-header>
	  <a href="javascript:;" onclick="window.history.go(-1)"slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </a>
	</mt-header>
	<div class="productsList">
		{{productsList}}
	</div>
</div>
</template>

<script>
import data from '../util/mock'
export default {
	data(){
		return{
			productsList:[]
		}
	},
	beforeMount(){
		this.fecthData();
	},
	methods:{
		fecthData(){
			var _this =this;
			this.$http.get('http://92bene.cn/getData.php').then(function(res){
				_this.productsList = res.data.products;
			}).catch(function(err){
				console.log('错误',err)
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	width: 100%;
	position: fixed;
	top:0;
	font-size:14px;
	z-index: 999;
}
.productsList{
	padding: 10px 5px;
	margin-top: 40px;
}
</style>
