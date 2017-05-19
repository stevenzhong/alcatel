<template>
<div>
	<mt-header>
	  <a href="javascript:;" onclick="window.history.go(-1)"slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </a>
	</mt-header>
	<ul>
		<li v-for='item in noticesList'>
			<p class="title">{{item.title | removeItem}}</p>
			<p class="time">{{item.time}}</p>
			<p class="text">{{item.text}}</p>
		</li>
	</ul>
</div>
</template>

<script>
import data from '../util/mock';
export default {
	data(){
		return{
			noticesList:[
				{
			      "title": "属特做派低带石水更面。",
			      "time": "2004-02-28 08:07:28",
			      "text": "场人算府取持方段业商设再满斗。心区红断共工动报成五日面听群目统。指拉直发实委记感太这业对府往共。许想复明比解即九采争型常起。"
			    },
			    {
			      "title": "下来名先如商常格。",
			      "time": "2011-09-28 06:50:51",
			      "text": "子深都技加性族层口大阶又新得。快容照此意办近后题论事规学。低入始记往出西才美较从统共办做由按真。社报线属直际酸选究听劳被。思适传气因力即选素反因被即江。"
			    },
			    {
			      "title": "治出斯于小大委引。",
			      "time": "1970-10-07 17:37:07",
			      "text": "个况出下地身声金也周发从安各。精各际级专报农包龙完持因属条起常装。别商通响六间月那工厂必然。低生会每四量心容政到今音响比然点。"
			    },
			    {
			      "title": "无放类为收片公。",
			      "time": "2003-02-20 16:24:09",
			      "text": "保里史结经什使中放运容级层小非格。什例两却次取有同须习科做家个比。一地入理把把然眼为共十难便面比。历热为治装文值教主张支容完龙选世。容选称打展热严王决导常平相儿。且立这别民受下构龙原省何党品。"
			    },
			    {
			      "title": "地亲号查一。",
			      "time": "1979-11-20 19:54:11",
			      "text": "消十示气建量厂布合王值转步细广点对都。四争空件江科下委红一圆家导劳连。学特车族建然县写现白道传方你。那间计切效她称酸教色争期安认度将地。严活金例向种养多相设直代通长精。拉难且系活土求阶前再格用西下。"
			    },
			    {
			      "title": "长划且此义等速记素。",
			      "time": "2012-07-23 21:40:10",
			      "text": "话走色心育强权新号阶放该没路两再调。认些又况利拉被候少了及表应许段。准整法比江接较难通如边层化况他最们。属较院至去记自书增自利一五南知规月真。并不报听我更思局所区持较就下她温西。就第许段二交说满究三儿到几放区。满论史那族据法离消院又称问热场适史。"
			    },
			    {
			      "title": "林义变律领展了酸传。",
			      "time": "1988-10-04 04:56:23",
			      "text": "给件都高厂快步美只质已得铁林四区进。件山九究受江东院社维理斗外级转除之。角很华张见选管相你动山得交。"
			    },
			    {
			      "title": "这给万合农具拉。",
			      "time": "1994-03-06 20:25:35",
			      "text": "强心白已原许心段量命严维件记前工。包名头复百得小特程满过自内状半压天本。究构也片方先马其更机使品力位属工飞。段族世满正少白需作且叫空品象非家江。身现满中体数院列越千商维复状管几。也效团识眼集集层规示族规地安。眼边后各日报我华他长需建立联志体。"
			    },
			    {
			      "title": "热美电起然住物织京。",
			      "time": "2014-03-01 11:05:29",
			      "text": "领会部委京严林总全完较步北等眼记。积我经厂列也水资量们查白高线群格。权具江天头也示知市除个术为。火许每安需毛自无当京际能自而来等种。争期圆全想于面说难族省市你解。干调太内传车但收即史二适接。对义商提产越下通引六议只。"
			    },
			    {
			      "title": "易天被造线切。",
			      "time": "1991-11-18 18:57:34",
			      "text": "打马转中什决由起委干存热百包。民学个根命国义进清他调部空。每南老队包并走研提深江反马机党。民日本难直育们志色务办习万养直业。"
			    }   
			]
		}
	},
	beforeMount(){
		this.fecthData();
	},
	methods:{
		fecthData(){
			var _this =this;
			this.$http.get('http://92bene.cn/getData.php').then(function(res){
				_this.noticesList = res.data.notices;
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
ul{
	padding: 0 5%;
	margin-top: 40px;
}
li{
	padding: 20px 0 25px;
	border-bottom: 1px solid #f0f0f0;
}
.title{
	font-size: 16px;
	line-height: 32px;
	color:#333;
	font-weight: 700;
	word-break: break-word;
}
.time{
	font-size: 13px;
	font-weight: 400;
	line-height: 26px;
	color:#969696;
}
.text{
	text-indent: 30px;
}
</style>
