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
    mounted() {
      navigator.mediaDevices.getUserMedia({
        video: {
          width: 300, height: 320
        }
      }).then((stream) => {
        this.$refs.video.srcObject = stream;
        this.$refs.btn.onclick = () => {
          var obj = this.$refs.video;
          var canvas = this.$refs.canvas;
          var cobj=canvas.getContext("2d");
          cobj.drawImage(obj,0,0);
          this.gaotong(canvas);
          console.log(canvas.toDataURL());
          stream.getTracks()[0].stop();

        }
      })


    },
    methods: {
      distance(one, two){
        return Math.sqrt(Math.pow(one[0] - two[0], 2) + Math.pow(one[1] - two[1], 2) + Math.pow(one[2] - two[2], 2));
      },
      gaotong(canvas, img) {
        var cobj = canvas.getContext("2d");
        //cobj.drawImage(img, 0, 0, 400, 300);
        var data = cobj.getImageData(0, 0, 300, 320);
        var width = data.width;
        var height = data.height;
        var gray = [125, 125, 125];
        var black = [0, 0, 0];
        var white = [255, 255, 255];
        var val = 20;

        for (var y = 0; y < height; y++) {
          for (var x = 0; x < width; x++) {
            var current = [data.data[x * 4 + y * width * 4] + 0, data.data[x * 4 + y * width * 4] + 1, data.data[x * 4 + y * width * 4] + 2];
            var right = [data.data[(x + 1) * 4 + y * width * 4] + 0, data.data[(x + 1) * 4 + y * width * 4] + 1, data.data[(x + 1) * 4 + y * width * 4] + 2];
            var bottom = [data.data[x * 4 + (y + 1) * width * 4] + 0, data.data[x * 4 + (y + 1) * width * 4] + 1, data.data[x * 4 + (y + 1) * width * 4] + 2];
            if (this.distance(current, right) > val && this.distance(current, bottom) > val) {
              data.data[x * 4 + y * width * 4 + 0] = white[0];
              data.data[x * 4 + y * width * 4 + 1] = white[1];
              data.data[x * 4 + y * width * 4 + 2] = white[2];
            } else if (this.distance(current, right) <= val && this.distance(current, bottom) <= val) {
              data.data[x * 4 + y * width * 4 + 0] = black[0];
              data.data[x * 4 + y * width * 4 + 1] = black[1];
              data.data[x * 4 + y * width * 4 + 2] = black[2];
            } else {
              data.data[x * 4 + y * width * 4 + 0] = gray[0];
              data.data[x * 4 + y * width * 4 + 1] = gray[1];
              data.data[x * 4 + y * width * 4 + 2] = gray[2];
            }
          }
        }
        cobj.putImageData(data, 0, 0);
      }

    }
  }
</script>

<style scoped>
  .box {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }

  .btn {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 40px;
    color: #fff;
    transition: all .5s linear;
  }

  .btn:active {
    background: #ccc;
    color: #666;
  }

  .back {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 40px;
    color: #fff;
    transition: all .5s linear;
    text-decoration: none;
  }

  .photo {
    width: 100%;
    height: 320px;
    position: absolute;
    left: 0;
    top: 40px;
  }

  video {
    width: 300px;
    height: 320px;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0px;
  }

  canvas {
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 100
  }
</style>
