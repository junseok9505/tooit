<template lang="html">
  <Lnd class="lnd"></Lnd>
  <Gnd class="gnd"></Gnd>
  <Rnd class="rnd"></Rnd>
  <Button class="rnd-btn" @click="rndMove()">
    <img src="@/assets/icon_arrow.svg" />
  </Button>
  <router-view class="main"></router-view>
</template>

<script>

import anime from 'animejs/lib/anime.es.js'
import {reactive} from 'vue'

import Lnd from '@/components/global/Lnd.vue'
import Gnd from '@/components/global/Gnd.vue'
import Rnd from '@/components/global/Rnd.vue'



export default {
  components: {
    Lnd,
    Gnd,
    Rnd
  },
  setup(){

    const state = reactive({
      isRnd : true
    })


    const rndMove = () => {
      let x_Move;
      if(state.isRnd){
        x_Move = '150px';
        state.isRnd = false;
      }else{
        x_Move = '0px';
        state.isRnd = true;
      }
      anime({
        targets: '.rnd, .rnd-btn',
        translateX: x_Move,
        easing: 'easeInOutQuad',
        duration: 900
      })

    }



    return {
      rndMove
    }
  }
}
</script>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";


  .lnd{
    position: absolute;
    top : 0;
    left: 0;
    width : $lndWidth;
    height : 100%;
    z-index: 2;
  }

  .gnd{
    position: absolute;
    top: 0;
    left: $lndWidth;
    width : calc(100% - #{$lndWidth});
    height : $gndHeight;
    z-index: 1;

  }

  .rnd{
    position: absolute;
    top: 0;
    right: 0;
    width: $rndWidth;
    height : 100%;
    z-index: 2;
  }

  .rnd-btn{
    position: absolute;
    top :  50%;
    right : $rndWidth;
    width : 30px;
    height : 80px;
    margin-top : -40px;
    background : #23262D;
    z-index: 3;
    border-radius: 20px 0 0 20px;
    >img{
      width : 12px;
      height : 12px;
      padding-left: 2px;
    }
  }

  .main{
    position : absolute;

    width : calc(100% - #{$lndWidth});
    height : calc(100% - #{$gndHeight});
    top : $gndHeight;
    left : $lndWidth;
  }


</style>
