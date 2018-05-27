<template>
 <div id="box">
  <div class="container">
   <div class="wave ripple danger">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="content">
     <img src="../assets/image/voice.png" alt="">
    </div>
   </div>
  </div>
  <div class="desc">
   <h5>请将音量调至适中</h5>
   <h5>跟随视频和语音指示缓慢动作</h5>
  </div>
  <div class="button" @click="go">

  </div>
 </div>
</template>
<script>
    export default {
        name: 'start',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                name:this.$route.query.name,
                flag:false
            }
        },
      methods:{
        go(){
          if(!this.flag){
            return
          }
          this.$router.push({name:'face',query:{name:this.name}})
        }
      },
      mounted(){
          var speech=window.speechSynthesis;
          var speechSet=new SpeechSynthesisUtterance();
          speechSet.onend=()=>{
            this.flag=true;
          }
          setTimeout( ()=> {
            this.flag=true;
          },4000)
          speechSet.text="将音量调到适中,请跟随指示做动作";
          speech.speak(speechSet);

      }
    }
</script>

<style scoped>

 #box{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/image/bg.png');
  background-repeat: no-repeat;
  background-size: 100% ;
  background-position: left 0.5rem;
  border-top: 1px solid #ffffff;
 }
 .container {
  width: 2.5rem;
  height: 2.5rem;
  margin: 4.4rem auto 0;
 }
 .content{
  width:  1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
 }
 .content img{
  width: 100%;
  height: 100%;
 }
 /************以下为具体实现************/
 .wave {
  width: 100%;
  height: 100%;
  position: relative;
 }

 .wave .circle {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  opacity: 0;
  transform: scale(1);

 }

 /* 波纹效果 */
 .wave.ripple .circle {
  width: 1.44rem;
  height: 1.44rem;
  background: #f6f6f6;
 }
 .wave.ripple .circle:first-child {
  animation: circle-opacity 2s infinite;
 }

 .wave.ripple .circle:nth-child(2) {
  animation: circle-opacity 2s infinite;
  animation-delay: .3s;
 }

 .wave.ripple .circle:nth-child(3) {
  animation: circle-opacity 2s infinite;
  animation-delay: .6s;
 }
 @keyframes circle-opacity{
     from {
         opacity: 1;
         transform: scale(1);
     }
     to {
         opacity: 0;
         transform: scale(2);
     }
 }
 @keyframes warn {
     0% {
         transform: scale(1);
         opacity: 1;
     }
    /* 25% {
         transform: scale(1.25);
         opacity: 0.75;
     }*/
     50% {
         transform: scale(1.5);
         opacity: 0.5;
     }
    /* 75% {
         transform: scale(1.75);
         opacity: 0.2;
     }*/
     100% {
         transform: scale(2);
         opacity: 0;
     }
 }

 .desc{

  text-align: center;
  margin-top: 0.1rem;
  margin-bottom: 2.75rem;
 }
 .desc h5{
  font-size: 0.26rem;
  color: #9d9d9d;
  line-height: 1.5;
 }

 .button{
  display: block;
  width: 4.4rem;
  height: 1.8rem;
  background: url("../assets/image/btn2.png") no-repeat;
  background-size: cover;
  margin: 0 auto;
 }
</style>
