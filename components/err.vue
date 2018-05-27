<template>
    <div id="box">
        <div class="desc">
            <h3>我不认识你</h3>
        </div>

        <a  class="button">
            比对失败
        </a>
    </div>
</template>
<script>
    export default {
        name: 'start',
        data() {
            return {
                name:this.$route.query.name
            }
        },
        methods: {
        },

        mounted(){
          var speech=window.speechSynthesis;
          var speechSet=new SpeechSynthesisUtterance();
          speechSet.text="对比失败,我不认识你";
          speech.speak(speechSet);
        }


    }
</script>

<style scoped>

    #box {
        width: 100%;
        height: 100vh;
        background-image: url('../assets/image/successa.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-top: 1px solid transparent;
    }
    .desc{
        text-align: center;
        margin-top: 2rem;
    }
    .desc h3{
        font-size: 0.38rem;
        color: #ffffff;
        line-height: 1.5;
    }
    .button {
        display: block;
        width: 4.4rem;
        height: 1.8rem;
        background:rgba(0,0,0,0) url("../assets/image/button4.png") no-repeat;
        background-size: contain;
        margin: 0  0 0 -2.2rem ;
        position: absolute;
        bottom: 1rem;
        left: 50%;
        color: #fff;
        font-size: 0.3rem;
        text-align: center;
        border: none;
        line-height: 1.4rem;
    }
</style>
