<template>
  <div id="app">
    <transition>
       <router-view/>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
.v-enter{
      opacity: 0;
  }
  .v-enter-to{
 opacity: 1;
  }
  .v-enter-active{
    transition: opacity 1s linear;
  }
  .v-leave{
 opacity: 1;
  }
  .v-leave-to{
opacity: 0;
  }
  .v-leave-active{
transition: opacity 1s linear;
  }
</style>
