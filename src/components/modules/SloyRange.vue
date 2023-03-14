<template>
    <Drag innerid="range">
      <div class="range">
        <input v-model="valueRage" @mousedown.stop type="range" min="1" max="1476" class="range__input">
        <span class="range__span" />
      </div>
    </Drag>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Drag from '@/components/elements/Drag.vue'
  import Modal from '@/components/elements/Modal.vue'
  import logo from '@/assets/images/icons/logo.vue'
  export default {
    components: {
      Drag,
      Modal,
      logo
    },
    methods: {
      ...mapMutations({
        SET_ACCENT: 'accent/SET_ACCENT'
      })
    },
    data () {
      return {
        valueRage: null
      }
    },
    watch: {
      valueRage: function (value) {
        if (value < 246) {
          this.SET_ACCENT('rgb(255,'+ (Number(value) + 9) + ', 9)')
        } else if (value < 492) {
          this.SET_ACCENT('rgb('+ (246 - (Number(value) - 246)) +', 255, 9)')
        } else if (value < 738) {
          this.SET_ACCENT('rgb(9, 255, '+ (9 + (Number(value) - 492)) +')')
        } else if (value < 984) {
          this.SET_ACCENT('rgb(9, '+ (246 - (Number(value) - 738)) +', 255)')
        } else if (value < 1230) {
          this.SET_ACCENT('rgb('+ (9 + (Number(value) - 984)) +', 9, 255)')
        } else if (value < 1476) {
          this.SET_ACCENT('rgb(255, 9, '+ (246 - (Number(value) - 1230)) +')')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .range {
    user-select: none;
    padding: 34px 18px;
    background-color: #1b1b1b;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1600px) {
      padding: 20px 16px;
    }
    &__input {
      -webkit-appearance: none;
      background: linear-gradient(90deg, #FF1109 0%, #FFE900 16.6%, #00FE00 33.3%, #00FEF7 49.8%, #0E1AFF 66.4%, #FF06FF 83%, #FF130F 100%);
      width: 314px;
      height: 12px;
      @media screen and (max-width: 1600px) {
        width: 240px;
        height: 10px;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 46px;
        background-image: url('@/assets/images/arrow.svg');
        cursor: pointer;
        background-size: contain;
        background-repeat: no-repeat;
        @media screen and (max-width: 1600px) {
          width: 12px;
          height: 40px;
        }
      }
      &::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 46px;
        background-image: url('@/assets/images/arrow.svg');
        cursor: pointer;
      }
    }
  }
</style>