<template>
  <div id="app">
    <router-view></router-view>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from './components/Header.vue'
import vFooter from './components/Footer.vue'
export default {
  name: 'app',
  components:{
  	vHeader,
    vFooter
  }
}
</script>

<style scoped>

</style>
