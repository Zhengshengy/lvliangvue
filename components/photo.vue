<template>
      <div class="box">
        <a href="#/" class="back">
          返回
        </a>
        <div class="photo">
          <video src="" autoplay ref="video"></video>
        </div>
        <div class="btn">
              开始拍照
        </div>
      </div>
</template>

<script>
    export default {
        name: "photo",
        mounted(){
          navigator.mediaDevices.getUserMedia({
            video:{
              width:300,height:320
            }
          }).then((stream)=> {
              this.$refs.video.srcObject=stream;
          })
        }
    }
</script>

<style scoped>
.box{
   width:300px;
   height:400px;
   border:1px solid #ccc;
   position: absolute;
   left:0;right:0;bottom:0;top:0;margin:auto;
}
  .btn{
    width:100%;height:40px;background: rgba(0,0,0,.7);
    position: absolute;
    bottom: 0;left:0;
    text-align: center;
    line-height: 40px;
    color:#fff;
    transition: all .5s linear;
  }
  .btn:active{
    background: #ccc;
    color:#666;
  }
  .back{
    width:100%;height:40px;background: rgba(0,0,0,.7);
    position: absolute;
    top: 0;left:0;
    text-align: center;
    line-height: 40px;
    color:#fff;
    transition: all .5s linear;
    text-decoration: none;
  }
  .photo{
    width:100%;height:320px;position: absolute;
    left:0;top:40px;
  }
  video{
    width:100%;height:100%;
  }
</style>
