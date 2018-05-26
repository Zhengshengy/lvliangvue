<template>
      <div class="box">
        <a href="#/" class="back">
          返回
        </a>
        <div class="photo">
          <video src="" autoplay ref="video"></video>
          <canvas width="300" height="320" ref="canvas"></canvas>
        </div>
        <div class="btn" ref="btn">
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
              this.$refs.btn.onclick= ()=> {
              var obj=this.$refs.video;
              var canvas=this.$refs.canvas;
              var cobj=canvas.getContext("2d");
              cobj.drawImage(obj,0,0);
              stream.getTracks()[0].stop();
              var data=cobj.getImageData(0,0,300,320);
              console.log(data);

              var width=(data.width);
              var height=(data.height);

              for(var i=0;i<width*height;i++){
                data.data[i*4+0]=255-data.data[i*4+0];
                data.data[i*4+1]=255-data.data[i*4+1];
                data.data[i*4+2]=255-data.data[i*4+2];
                data.data[i*4+3]=255;
              }
              cobj.putImageData(data,0,0);

              }
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
    width:300px;height:320px;padding:0;margin:0;
    position: absolute;left:0;top:0px;
  }
  canvas{
    position: absolute;
    left:0;top:0px;
    z-index:100
  }
</style>
