<template>
  <div id="app">
    <router-view></router-view>
    <vFooter v-show="footerShow"></vFooter>
  </div>
</template>

<script>
import vHeader from './components/Header.vue'
import vFooter from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
  	'footerShow'
  ]),
  watch:{
  	$route(to){
  		var reg=/news\/\D+/;
      var reg1 = /newsDetails\/\d+/;
  		if(reg.test(to.path) || reg1.test(to.path)){
  			this.$store.dispatch('hideFooter');
  		}else{
  			this.$store.dispatch('showFooter');
  		}
  	}
  },
  components:{
  	vHeader,
    vFooter
  }
}
</script>

<style scoped>

</style>
