<template>
	<div class="swipe">
		<mt-swipe :auto="0">
            <mt-swipe-item v-for="item in imgList" :key="item.id"><img :src="item.src" alt=""></mt-swipe-item>
        </mt-swipe>
	</div>
</template>

<script>
export default {
	data(){
		return {
			imgList:[
				{id:1,src:require('../assets/img/image1.jpg')},
				{id:2,src:require('../assets/img/image2.jpg')},
				{id:3,src:require('../assets/img/image3.jpg')}
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swipe{
	height: 200px;
}
</style>