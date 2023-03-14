<template>
    <Drag v-show="isShow" class="sloyCookie" innerid="cookie">
      <div class="cookie">
        <div class="cookie__title"><span>{{ $t('message.SloyCookie.title') }}</span>{{ $t('message.SloyCookie.text') }} <img src="@/assets/images/cookie.png" :alt="$t('message.fotoAlt')"></div>
        <div @click="cookieHendler" class="cookie__button">{{ $t('message.SloyCookie.button-left') }}</div>
        <div @click="cookieHendler" class="cookie__button">{{ $t('message.SloyCookie.button-right') }}</div>
      </div>
    </Drag>
</template>

<script>
  import behance from '@/assets/images/icons/behance.vue'
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      behance,
      Drag
    },
    data () {
      return {
        isShow: false
      }
    },
    mounted () {
      const cookie = localStorage.getItem('SLOY')
      if (!cookie || (+cookie + 31536000000)< Date.now()) {
        this.isShow = true
      }
    },
    methods: {
      cookieHendler () {
        localStorage.setItem('SLOY', Date.now())
        this.isShow = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cookie {
    user-select: none;
    background-color: #121212;
    width: 270px;
    height: 120px;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    &__title {
      font-family: Cera Pro;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.4px;
      text-align: center;
      color: #fff;
      width: 100%;
      height: calc(100% - 48px);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      border-bottom: 1px solid #272727;
      img {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 15px;
        left: 59%;
      }
      span {
        font-weight: 500; 
      }
    }
    &__button {
      display: flex;
      align-items: center;
      font-family: Cera Pro;
      justify-content: center;
      color: #606060;
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.4px;
      text-align: center;
      box-sizing: border-box;
      text-transform: uppercase;
      width: 50%;
      height: 48px;
      cursor: pointer;
      &:last-child {
        color: #0A84FF;
        border-left: 1px solid #272727;
      }
    }
  }
</style>