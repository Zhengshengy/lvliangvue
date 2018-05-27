<template>
 <div id="box" @click="go">
  <router-link :to="{name:'face'}" class="button">

  </router-link>
 </div>
</template>
<script>
    export default {
        name: 'start',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            go(){
                this.$router.push('facea')
            }
        }
    }
</script>

<style scoped>

 #box{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/image/success.png');
  background-repeat: no-repeat;
  background-size: 100%  100%;
 }
 .button{
  display: block;
  width: 4.4rem;
  height: 1.8rem;
  background: url("../assets/image/btn3.png") no-repeat;
  background-size: cover;
  margin: 0 auto;
  position: absolute;
  bottom:1rem ;
  left: 50%;
  margin-left: -2.2rem;
 }
</style>
