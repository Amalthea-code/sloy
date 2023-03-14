<template>
    <Drag class="sloyText" innerid="text">
      <div class="text">
        <div class="text__title">{{ $t("message.SloyText.title") }}</div>
        <p class="text__info">{{ $t("message.SloyText.info") }}</p>
        <div class="text__button" :style="{ backgroundColor: GET_ACCENT }">
          <arrow />
        </div>
      </div>
    </Drag>
</template>

<script>
  import { mapGetters } from 'vuex'
  import arrow from '@/assets/images/icons/arrow.vue'
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      arrow,
      Drag
    },
    computed: {
      ...mapGetters({
        GET_ACCENT: 'accent/GET_ACCENT'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .text {
    user-select: none;
    width: 570px;
    height: 320px;
    border-radius: 25px;
    background-color: #1b1b1b;
    box-sizing: border-box;
    padding: 30px 40px;
    position: relative;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1600px) {
      padding: 20px 30px;
      width: 480px;
      height: 190px;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
      height: 100%;
      padding: 8% 20px;
    }
    &__title {
      font-family: Cera Pro;
      font-size: 28px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.4px;
      color: #606060;
      @media screen and (max-width: 1600px) {
        font-size: 20px;
        line-height: 22px;
      }
      @media screen and (max-width: 680px) {
        font-size: 17px;
        line-height: 22px;
      }
    }
    &__info {
      font-family: Cera Pro;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.4px;
      color: #fff;
      @media screen and (max-width: 1600px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (max-width: 680px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
    &__button {
      position: absolute;
      cursor: pointer;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      transform: rotate(45deg);
      display: flex;
      justify-content: center;
      align-items: center;
      right: 24px;
      bottom: 14px;
    }
  }
  .sloyText {
    @media screen and (max-width: 1023px) {
      margin: 60px 0 0 3vw;
    }
    @media screen and (max-width: 680px) {
      margin: 20px 10px 0;
    }
  }
</style>