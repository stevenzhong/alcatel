<template>
<div>
	<mt-header>
	  <a href="javascript:;" onclick="window.history.go(-1)"slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </a>
	</mt-header>
	<div class="productsList clear">
		<div class="pro" v-for="item in productsList">	
			<img :src="item.imgurl" alt="">
			<h3>{{item.title | removeItem}}</h3>
			<span>月销量:{{item.sold}}</span>
			<div class="buy" @click="addShopcar(item)"><img src="../../static/img/buy.png" alt=""></div>
		</div>
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
			this.$http.get('http://92bene.cn/getproducts.php').then(function(res){
				_this.productsList = res.data.products;
			}).catch(function(err){
				console.log('错误',err)
			})
		},
		addShopcar(item){
			alert("商品id:"+item.id+"商品信息:"+item.title)
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
.pro{
	width: 49%;
	float:left;
	margin-right: 2%;
	margin-bottom: 20px;
}
.pro img{
	width: 100%;
	max-width: 100%;
}
.pro:nth-child(even){
	margin-right: 0%;
}
.pro:first-child{
	margin-right: 2%;
}
.pro h3{
	font-size: 14px;
	line-height: 17px;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	overflow: hidden;
	-webkit-box-orient: vertical;
	margin-bottom: 5px;
}
.pro span{
	font-size: 12px;
	line-height: 30px;
}
.buy{
	width: 30px;
	height: 30px;
	overflow: hidden;
	float:right;
	margin-right: 5px;
}
</style>
