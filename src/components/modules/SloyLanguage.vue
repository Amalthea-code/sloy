<template>
  <Drag class="sloyLanguage" innerid="language">
    <div class="language">
      <div class="language__info">
        <div class="language__title" @mousedown.stop @click.stop="switchOpen">{{ $t("message.SloyLanguage.title") }}</div>
        <div class="language__active-lang" @mousedown.stop @click.stop="switchOpen">{{ select === 0 ? $t("message.SloyLanguage.ru") : $t("message.SloyLanguage.en") }}</div>
        <span
          @mousedown.stop
          @click.stop="switchOpen"
          :class="{
            'language__arrow': true,
            'language__arrow_open': isOpen
          }"
        >
          <arrow-lang />
        </span>
      </div>
      <div
        :class="{
          'language__box': true,
          'language__box_open': isOpen
        }"
      >
        <div :class="{'language__element': true, 'language__element_active': select === 0}" @click="switchSelect(0, 'ru')">{{ $t("message.SloyLanguage.ru") }} <span v-show="select === 0" :style="{ backgroundColor: GET_ACCENT }" /></div>
        <div :class="{'language__element': true, 'language__element_active': select === 1}" @click="switchSelect(1, 'en')">{{ $t("message.SloyLanguage.en") }}<span v-show="select === 1" :style="{ backgroundColor: GET_ACCENT }" /></div>
      </div>
    </div>
  </Drag>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Drag from '@/components/elements/Drag.vue'
  import arrowLang from '@/assets/images/icons/arrowLang.vue'
  export default {
    components: {
      Drag,
      arrowLang
    },
    data () {
      return {
        isOpen: false,
        select: 0
      }
    },
    computed: {
      ...mapGetters({
        GET_ACCENT: 'accent/GET_ACCENT'
      })
    },
    methods: {
      switchOpen () {
        this.isOpen = !this.isOpen
      },
      switchSelect (props, lang) {
        if (this.isOpen) {
          this.$i18n.locale = lang
          this.select = props
          this.switchOpen()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .language {
    display: flex;
    align-items: center;
    background-color: #1B1B1B;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    user-select: none;
    &__title {
      font-family: Cera Pro;
      font-size: 24px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
      @media screen and (max-width: 1600px) {
        font-size: 18px;
        line-height: 20px;
      }
    }
    &__info {
      display: flex;
      justify-content: space-between;
      position: relative;
      font-family: Cera Pro;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: -0.4px;
      border-radius: 25px;
      background-color: #121212;
      color: #565656;
      align-items: center;
      box-sizing: border-box;
      padding: 0 48px 0 28px;
      height: 60px;
      width: 300px;
      @media screen and (max-width: 1600px) {
        font-size: 18px;
        line-height: 20px;
        height: 55px;
        width: 260px;
      }
      @media screen and (max-width: 1023px) {
        height: 60px;
        font-size: 18px;
        line-height: 20px;
        width: 220px;
      }
    }
    &__active-lang {
      cursor: pointer;
    }
    &__arrow {
      position: absolute;
      top: 50%;
      right: 26px;
      transform: translate(0, -50%);
      transition: transform .3s;
      cursor: pointer;
      &_open {
        transform: translate(0, -50%) rotate(180deg);
      }
    }
    &__box {
      height: 0;
      overflow: hidden;
      width: 100%;
      box-sizing: border-box;
      padding: 0 28px;
      transition: height .3s;
      &_open {
        height: 110px;
        @media screen and (max-width: 1600px) {
          height: 105px;
        }
      }
    }
    &__element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-family: Cera Pro;
      font-size: 20px;
      line-height: 55px;
      letter-spacing: -0.4px;
      height: 55px;
      cursor: pointer;
      @media screen and (max-width: 1600px) {
        font-size: 18px;
        line-height: 20px;
        height: 50px;
      }
      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      &_active {
        order: -1;
      }
    }
  }
</style>