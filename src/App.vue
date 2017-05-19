<template>
  <div id="app">
    <loading v-if="loading"></loading>
    <router-view></router-view>
    <vFooter v-show="footerShow"></vFooter>
  </div>
</template>

<script>
import vFooter from './components/Footer.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
  	'footerShow',
    'loading'
  ]),
  watch:{
  	$route(to){
  		// var reg=/news\/\D+/;
    //   var reg1 = /newsDetails\/\d+/;
  		if(to.path !== '/home'){
  			this.$store.dispatch('hideFooter');
  		}else{
  			this.$store.dispatch('showFooter');
  		}
  	}
  },
  components:{
    vFooter
  }
}
</script>

<style scoped>

</style>
