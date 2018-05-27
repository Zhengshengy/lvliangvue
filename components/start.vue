<template>
 <div id="box">
     <div class="container">
         <div class="wave ripple danger">
             <div class="circle"></div>
             <div class="circle"></div>
             <div class="circle"></div>
             <div class="content">
                 <img src="../assets/image/person.png" alt="">
             </div>
         </div>
     </div>
     <div class="desc">
         <h3>请通过人脸识别验证身份</h3>
         <h5>请您按照以下步骤完成您的脸部识别</h5>
     </div>
     <div class="search">
         <input type="text" placeholder="请填写您的姓名" v-model="name">
     </div>
     <div class="button" @click="go">

     </div>
     <div class="button1" @click="go1">

     </div>
 </div>
</template>
<script>
export default {
  name: 'start',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:""
    }
  },
  methods:{
    go(){
      if(this.name==""){
        window.speechSynthesis

        var speech=window.speechSynthesis;
        var speechSet=new SpeechSynthesisUtterance();
        speechSet.text="请输入您的名字";
        speech.speak(speechSet);
        return;
      }
      this.$router.push({name:'know',query:{name:this.name}});
    },
    go1(){
      this.$router.push({name:'facea'});
    }
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
        width: 3.6rem;
        height: 3.6rem;
        margin: 1.65rem auto 0;
    }
    .content{
        width:  2.3rem;
        height: 2.3rem;
        position: absolute;
        top: 0.65rem;
        left: 0.64rem;
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
        /*opacity: 0;*/
        transform: scale(0.64);
    }

    /* 波纹效果 */
    .wave.ripple .circle {
        width: 3.54rem;
        height: 3.54rem;
        border: 0.03rem solid #f6f6f6;
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
            transform: scale(0.64);
        }
        to {
            opacity: 0;
            transform: scale(1);
        }
    }

    .desc{
        text-align: center;
    }
    .desc h3{
       font-size: 0.3rem;
        color:#38bd71;
        line-height: 1.5;
    }
    .desc h5{
        font-size: 0.26rem;
        color: #9d9d9d;
        line-height: 1.5;
    }
    .search{
        width: 5.85rem;
        height: 0.85rem;
        border-bottom: 0.03rem solid #eeeeee;
        background: url("../assets/image/icon.png") no-repeat left center;
        margin: 1.83rem auto 1.3rem;

    }
    .search input{
        width: 100%;
        height: 100%;
        display: block;
        border: none;
        outline: none;
        font-size: 0.26rem;
        letter-spacing: 2px;
        color: #9d9d9d;
        background: none;
        box-sizing: border-box;
        padding-left: .45rem;
    }
    .button{
        display: block;
        width: 2.5rem;
        height: 1.8rem;
        background: url("../assets/image/btn1.png") no-repeat;
        background-size: contain;
        float:left;
        margin-left:1.2rem;
    }
  .button1{
        display: block;
        width: 2.5rem;
        height: 1.8rem;
        background: url("../assets/image/btn3.png") no-repeat;
        background-size: contain;
        float:left;
    }
</style>
