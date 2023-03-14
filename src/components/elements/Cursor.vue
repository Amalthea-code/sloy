<template>
  <div id="cursor" class="cursor" :style="{backgroundImage: 'url(' + image + ')'}"/>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
  import cursor_1 from '@/assets/images/cursor_1.svg'
  import cursor_2 from '@/assets/images/cursor_2.svg'
  import cursor_3 from '@/assets/images/cursor_3.svg'
  import cursor_4 from '@/assets/images/cursor_4.svg'
  import cursor_5 from '@/assets/images/cursor_5.svg'
  import cursor_6 from '@/assets/images/cursor_6.svg'
  import cursor_7 from '@/assets/images/cursor_7.svg'
  import cursor_8 from '@/assets/images/cursor_8.svg'
  import cursor_9 from '@/assets/images/cursor_9.svg'
  import cursor_10 from '@/assets/images/cursor_10.svg'
  import cursor_11 from '@/assets/images/cursor_11.svg'
  import cursor_12 from '@/assets/images/cursor_12.svg'
  import cursor_13 from '@/assets/images/cursor_13.svg'
  import cursor_14 from '@/assets/images/cursor_14.svg'
  import cursor_15 from '@/assets/images/cursor_15.svg'
  import cursor_16 from '@/assets/images/cursor_16.svg'
  import cursor_17 from '@/assets/images/cursor_17.svg'
  import cursor_18 from '@/assets/images/cursor_18.svg'
  import cursor_19 from '@/assets/images/cursor_19.svg'
  import cursor_20 from '@/assets/images/cursor_20.svg'
export default {
  computed: {
    ...mapGetters({
      GET_CURSOR: 'cursor/GET_CURSOR'
    }),
    image () {
      switch (this.GET_CURSOR) {
        case 'cursor_1':
          return cursor_1
        case 'cursor_2':
          return cursor_2
        case 'cursor_3':
          return cursor_3
        case 'cursor_4':
          return cursor_4
        case 'cursor_5':
          return cursor_5
        case 'cursor_6':
          return cursor_6
        case 'cursor_7':
          return cursor_7
        case 'cursor_8':
          return cursor_8
        case 'cursor_9':
          return cursor_9
        case 'cursor_10':
          return cursor_10
        case 'cursor_11':
          return cursor_11
        case 'cursor_12':
          return cursor_12
        case 'cursor_13':
          return cursor_13
        case 'cursor_14':
          return cursor_14
        case 'cursor_15':
          return cursor_15
        case 'cursor_16':
          return cursor_16
        case 'cursor_17':
          return cursor_17
        case 'cursor_18':
          return cursor_18
        case 'cursor_19':
          return cursor_19
        case 'cursor_20':
          return cursor_20
        default:
          return ''
      }
    }
  },
  watch: {
    GET_CURSOR: function (val) {
      if (val) {
        this.addEvent()
      } else {
        this.remuveEvent()
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_CURSOR: 'cursor/SET_CURSOR'
    }),
    addEvent () {
      document.body.style.cursor = 'none'
      document.body.addEventListener('mousemove', this.cursorHendler)
      document.body.addEventListener('mousedown', this.cursorRemuver)
    },
    remuveEvent () {
      document.body.style.cursor = 'auto'
      document.body.removeEventListener('mousemove', this.cursorHendler)
      document.body.removeEventListener('mousedown', this.cursorRemuver)
    }
  },
  mounted () {
    const cursor = document.getElementById('cursor')
    this.cursorHendler = function (event) {
      cursor.style.left = event.clientX + 'px'
      cursor.style.top = event.clientY + 'px'
    }
    this.cursorRemuver = () => {
      cursor.style.left = '-34px'
      cursor.style.top =  '-34px'
      this.SET_CURSOR('')
    }
  }
}
</script>

<style lang="scss" scoped>
  .cursor {
    position: fixed;
    display: block;
    width: 14px;
    height: 14px;
    padding: 10px;
    cursor: none;
    pointer-events: none;
    z-index: 1000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60% 60%;
  }
</style>