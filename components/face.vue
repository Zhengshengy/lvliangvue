<template>
    <div class="recognition">
        <div class="recBox">
          <video src="" ref="video" width="100%" height="100%" autoplay></video>
          <canvas :width="width" :height="height" ref="canvas"> </canvas>
        </div>
        <div class="dotBox" v-show="flag">
            <div class="dot dot1"></div>
            <div class="dot dot2"></div>
            <div class="dot dot3"></div>
            <div class="dot dot4"></div>
            <div class="dot dot5"></div>
        </div>
        <div class="text">{{msg}} &nbsp;&nbsp; <router-link to="/" tag="span"> 重新拍摄</router-link></div>



        <div class="copyright">UNIQUE TECNOLOGY</div>
    </div>
</template>
<script>
export default {
  name: 'start',
  data () {
    return {
      msg: '正脸对准屏幕',
      flag:false,
      width:0,
      height:0,
      ok:true,
      name:this.$route.query.name
    }
  },
    methods:{
      go:function(name){
          this.$router.push({path:'shibie',query:{name:name}});
      },
      say(con,callback){
        var speech=window.speechSynthesis;
        var speechSet=new SpeechSynthesisUtterance();
        speechSet.text=con;
        speech.speak(speechSet);
        speechSet.onend= ()=> {
           callback()
        }
      }

    },
    mounted:function(){
      this.width=this.$refs.video.offsetWidth;
      this.height=this.$refs.video.offsetHeight
       setTimeout(()=>{
           this.msg = '识别中  别着急...';
           this.flag = true;

       },3000)

      navigator.mediaDevices.getUserMedia({
       video:{
         width:this.width,height:this.height
       }
     }).then((data)=>{
        this.$refs.video.srcObject=data;
        console.dir(this.$refs.video)
        this.say("眨眨眼", ()=> {
            this.say("摇摇头",()=>{
              this.$refs.video.onprogress= ()=> {
           if(this.ok) {
             this.ok=false;
             var canvas = this.$refs.canvas;
             var cobj = canvas.getContext("2d");
             cobj.drawImage(this.$refs.video, 0, 0);
             /*开始获取图片的数据*/
             var base = (canvas.toDataURL("image/jpeg", 0.7).substr(23));
             console.log(base);
             /*
             *  安全规则
             * */
             fetch("/api/photo",{
               method:"post",
               headers:{
                 "content-type":"application/x-www-form-urlencoded"
               },
               body:"url="+base+"&name="+this.name
             }).then(function (e) {
               return e.json();
             }).then((e)=>{
                  if(e['error_code']){
                      this.ok=true

                  }else{
                     var speech=window.speechSynthesis;
                      var speechSet=new SpeechSynthesisUtterance();
                      speechSet.text="采集完毕";
                      speech.speak(speechSet);
                      speechSet.onend= ()=> {
                         this.go(this.$route.query.name);
                      }

                  }
             })
           }

        }
            })
        })


     })
    }

}
</script>

<style scoped>
    .recognition{
        width: 100%;
        height: 100vh;
        background: #fbfbfb;
        color:#a0a0a0;
    }
    video{
      position: absolute;
      left:0;top:0;z-index: 99;
    }
    canvas{
      position: absolute;
      left:0;top:0;
    }
    .recognition .recBox{
        width: 3.83rem;
        height: 5rem;
        background: #f6f6f6;
        border: 0.06rem solid #efefef;
        margin:2rem auto 3.25rem ;
      position: relative;
    }
    .recognition .text{
        text-align: center;
        font-size: 0.24rem;
        margin-top: 0.53rem;
        margin-bottom: 1.33rem;
    }
    .recognition .copyright{
        width: 100%;
        text-align: center;
        font-size: 0.14rem;
        position: absolute;
        left: 0;
        bottom: 0.53rem;
    }
    .recognition .dotBox{
        width: 1.1rem;
        height: 0.16rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .recognition .dotBox .dot{
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
        background: #d1f0e4;
    }
    .recognition .dotBox .dot1{
        animation: change 1.5s 0.2s infinite alternate;
    }
    .recognition .dotBox .dot2{
        animation: change 1.5s 0.4s infinite alternate;
    }
    .recognition .dotBox .dot3{
        animation: change 1.5s 0.6s infinite alternate;
    }
    .recognition .dotBox .dot4{
        animation: change 1.5s 0.8s infinite alternate;
    }
    .recognition .dotBox .dot5{
        animation: change 1.5s 1s infinite alternate;
    }
    @keyframes change{
        0%{
            background: #d1f0e4;
        }
        50%{
            background: #7cdbb6;
        }
        100%{
            background: #27c588;
        }
    }

</style>
