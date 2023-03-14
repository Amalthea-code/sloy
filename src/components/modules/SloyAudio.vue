<template>
  <Drag :innerid="'audio' + current">
    <div class="audio">
      <div v-if="playing" class="audio__play" @click="togglePlayback"><Stop /></div>
      <div v-else class="audio__play" @click="togglePlayback"><play /></div>
      <div class="audio__box">
        <input v-model="valueRage" @mousedown.stop="setRange" type="range" min="0" :max="duration" :class="{'audio__input': true, 'audio__input_play': playing}" :style="{ background: image }">
      </div>
      <div class="audio__seek">{{ playing ? second : totalSecond }}</div>
    </div>
  </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  import VueHowler from 'vue-howler'
  import play from '@/assets/images/icons/play.vue'
  import Stop from '@/assets/images/icons/stop.vue'
  import Track from '@/assets/images/icons/track.vue'
  export default {
    mixins: [VueHowler],
    components: {
      Drag,
      play,
      Stop,
      Track
    },
    computed: {
      second () {
        const minutes = Math.floor(this.seek / 60)
        const seconds = Math.floor(this.seek % 60)
        return minutes + ':' + seconds
      },
      totalSecond () {
        const minutes = Math.floor(this.duration / 60)
        const seconds = Math.floor(this.duration % 60)
        return minutes + ':' + seconds
      },
      valueRage: {
        get: function () {
          return this.seek
        },
        set: function (newValue) {
          this.setSeek(Number(newValue))
        }
      }
    },
    props: {
      current: {
        type: Number,
        default: 0
      },
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .audio {
    padding: 6px 8px;
    border-radius: 25px;
    background-color: #1b1b1b;
    display: flex;
    align-items: center;
    span {
      color: white;
    }
    &__play {
      cursor: pointer;
      display: inline-block;
      color: white;
      width: 30px;
      height: 30px;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    &__seek {
      color: #fff;
      font-family: Cera Pro;
      font-size: 12px;
      font-weight: 400;
      line-height: 13px;
      text-align: left;
      width: 24px;
    }
    &__input {
      width: 84px;
      height: 30px;
      margin: 0;
      top: 0;
      left: 0;
      background: url("@/assets/images/Waveform.png");
      -webkit-appearance: none;
      overflow: hidden;
      background-size: 100%;
      &::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 1px; /* 1 */
          height: 30px;
          background: transparent;
          box-shadow: 100vw 0 0 100vw transparent;
      }
      &_play {
      &::-webkit-slider-thumb {
        background: #1b1b1b;
        box-shadow: 100vw 0 0 100vw #1b1b1bb3;
      }
      }
      &::-webkit-slider-runnable-track {
          background: transparent;
      }
    }
    &__box {
      width: 84px;
      height: 30px;
      margin: 0 6px;
    }
  }
</style>