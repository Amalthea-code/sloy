<template>
    <Drag class="sloyContacts" innerid="contacts">
      <div class="contacts">
        <div @click="switchOpen" :style="{ backgroundColor: GET_ACCENT }" class="contacts__title">{{ $t("message.SloyContacts") }}</div>
        <div :class="{'contacts__list': true, 'contacts__list_open': isOpen}">
          <div class="contacts__element">Telegram</div>
          <div class="contacts__element">Behance</div>
          <div class="contacts__element">Phone</div>
          <div class="contacts__element">Email</div>
        </div>
      </div>
    </Drag>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      Drag,
    },
    computed: {
      ...mapGetters({
        GET_ACCENT: 'accent/GET_ACCENT'
      })
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      switchOpen () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contacts {
    user-select: none;
    font-family: Cera Pro;
    font-size: 33px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.5px;
    box-sizing: border-box;
    width: 224px;
    position: relative;
    @media screen and (max-width: 1600px) {
      font-size: 18px;
      line-height: 20px;
      width: 160px;
    }
    &__title {
      color: #fff;
      padding: 26px 0;
      border-radius: 50px;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
      text-align: center;
      @media screen and (max-width: 1600px) {
        padding: 16px 0;
      }
      @media screen and (max-width: 1023px) {
        height: 60px;
        padding: 0 30px;
        font-size: 24px;
        line-height: 60px;
      }
      cursor: pointer;
    }
    &__list {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 0;
      box-sizing: border-box;
      padding: 25px 0;
      background-color: #1b1b1b;
      border-radius: 40px;
      opacity: 0;
      transition: opacity .3s;
      width: 0;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
      @media screen and (max-width: 1600px) {
        padding: 8px 0;
      }
      &_open {
        opacity: 1;
        width: 224px;
        .contacts__element {
          display: block;
        }
        @media screen and (max-width: 1600px) {
          width: 160px;
        }
      }
    }
    &__element {
      display: none;
      color: #565656;
      text-align: center;
      padding: 15px 0;
    }
  }
</style>