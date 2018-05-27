<template>
    <div class="recognition">

    </div>

</template>
<script>
export default {
  name: 'start',
  data () {
    return {

    }
  },
  mounted:function(){
      setTimeout(()=>{
          this.$router.push('success')
      },5000)
  }
}
</script>
<style scoped>
    .recognition{
        width: 100%;
        height: 100vh;
        background: #ffffff url("../assets/image/shibie.png");
        background-size: cover;

    }

</style>
