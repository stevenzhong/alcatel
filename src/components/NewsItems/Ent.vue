<template>
	<div>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @top-status-change="handleTopChange">
			<ul class="list">
				<li v-for='item in arrList'>
					<router-link :to="'/newsDetails/'+item.id">
						<div class="pic">
							<img :src="item.imgurl" alt="">
						</div>
						<p>{{item.time}}</p>
						<h3>{{item.title}}</h3>
					</router-link>
				</li>
			</ul>
			<div slot="top" class="mint-loadmore-top">
		      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }"><img src="../../../static/img/refresh.gif" height="32" width="32"alt=""></span>
		    </div>
		    <div slot="bottom" class="mint-loadmore-bottom">
		      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }"><img src="../../../static/img/loading.gif" alt=""></span>
		    </div>
		    <div class="allLoaded" v-show="allLoaded">
		  		----到底了----
		  	</div>
	  	</mt-loadmore>
	</div>
</template>

<script>
export default {
	data(){
		return{
			arrList:[],
			topStatus:'',
			allLoaded:false,
			nums:5
		}
	},
	beforeMount() {
	    this.fetchData('ent',this.nums);
	},
	methods:{
		fetchData(type,nums){
			var _this=this;
			this.$http.get('http://wangyi.butterfly.mopaasapp.com/news/api?type='+type+'&page=1&limit='+nums).then(function(res){
				// console.log(res.data.list);
				_this.arrList = res.data.list;
			}).catch(function(err){
				console.log('文章详细页面:',err);
			})
		},
		loadTop() {
			this.arrList = [];
			this.fetchData('ent',this.nums);
		  	this.$refs.loadmore.onTopLoaded();
		},
		loadBottom() {
			this.nums +=5;
		   this.fetchData('ent',this.nums);
		   if(this.nums >100){
		   		this.allLoaded = true;// 若数据已全部获取完毕
		   }
		   this.$refs.loadmore.onBottomLoaded();
		},
		handleTopChange(status) {
	       this.topStatus = status;
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
.list li:last-child h3{
	margin-bottom: 0px;
}
.allLoaded{
	background-color: #f3f3f3;
	border-top: 1px solid #ddd;
	padding: 10px 0;
	text-align: center;
	margin-top: -5px;
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