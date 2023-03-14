<template>
  <Drag class="sloyContact" innerid="contact">
    <div class="contact">
      <h5 class="contact__title" :style="{ color: GET_ACCENT }">{{ $t("message.SloyContact.title") }}</h5>
      <div class="contact__logo">
        <img src="@/assets/images/contact.png" alt="" class="contact__logo-image">
        <h4 class="contact__logo-title">Sloy</h4>
      </div>
      <div class="contact__box">
        <a class="contact__element" href="">
          <span class="contact__element-svg"><phone :style="{ fill: GET_ACCENT }" /></span>
          <span class="contact__element-title" :style="{ color: GET_ACCENT }">{{ $t("message.SloyContact.call") }}</span>
        </a>
        <a class="contact__element" href="">
          <span class="contact__element-svg"><whatsup :style="{ fill: GET_ACCENT }" /></span>
          <span class="contact__element-title" :style="{ color: GET_ACCENT }">WhatsUp</span>
        </a>
        <a class="contact__element" href="">
          <span class="contact__element-svg"><telegram-button :style="{ fill: GET_ACCENT }" /></span>
          <span class="contact__element-title" :style="{ color: GET_ACCENT }">Telegram</span>
        </a>
        <div class="contact__element">
          <span class="contact__element-svg"><mail :style="{ fill: '#555657' }" /></span>
          <span class="contact__element-title" :style="{ color: '#555657' }">mail</span>
        </div>
      </div>
      <div class="contact__phone">
        <div class="contact__phone-title">{{ $t("message.SloyContact.callTitle") }}</div>
        <a href="tel:+79271634141" class="contact__phone-link" :style="{ color: GET_ACCENT }">+7 927 163 41 41</a>
      </div>
      <div class="contact__info">
        <div class="contact__info-title">{{ $t("message.SloyContact.noteTitle") }}</div>
        <div class="contact__info-list">{{ $t("message.SloyContact.noteInfo") }}</div>
      </div>
    </div>
  </Drag>
</template>

<script>
  import { mapGetters } from 'vuex'
  import phone from '@/assets/images/icons/phone.vue'
  import whatsup from '@/assets/images/icons/whatsup.vue'
  import telegramButton from '@/assets/images/icons/telegramButton.vue'
  import mail from '@/assets/images/icons/mail.vue'
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      Drag,
      phone,
      whatsup,
      telegramButton,
      mail
    },
    computed: {
      ...mapGetters({
        GET_ACCENT: 'accent/GET_ACCENT'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .contact {
    width: 400px;
    height: 480px;
    background-color: #121212;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 28px 20px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 680px) {
      width: 100%;
    }
    &__title {
      font-family: Cera Pro;
      font-size: 24px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.4px;
    }
    &__logo {
      display: flex;
      margin: 0 auto;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &-image {
        border-radius: 50%;
        overflow: hidden;
        object-fit: contain;
        height: 92px;
        width: 92px;
      }
      &-title {
        font-family: Cera Pro;
        font-size: 29px;
        line-height: 36px;
        letter-spacing: 0.7px;
        color: #fff;
        margin: 16px 0 0;
      }
    }
    &__box {
      display: flex;
      justify-content: space-between;
      margin: 22px 0 16px;
    }
    &__element {
      border-radius: 12px;
      background-color: #1c1c1e;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 84px;
      height: 60px;
      @media screen and (max-width: 680px) {
        width: 24%;
        height: 12vw;
        min-height: 60px;
      }
      &-svg {
        svg {
          width: 20px;
          height: 20px;
        }
      }
      &-title {
        font-family: Cera Pro;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.3px;
        margin: 4px 0 0;
      }
    }
    &__phone {
      background-color: #1c1c1e;
      padding: 12px 16px;
      border-radius: 12px;
      margin: 0 0 18px;
      &-title {
        font-family: Cera Pro;
        font-size: 14px;
        line-height: 18px;
        color: #fff;
        margin: 0 0 6px;
      }
      &-link {
        font-family: Cera Pro;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
      }
    }
    &__info {
      background-color: #1c1c1e;
      padding: 12px 16px;
      border-radius: 12px;
      &-title {
        font-family: Cera Pro;
        font-size: 14px;
        line-height: 18px;
        color: #fff;
      }
      &-list {
        font-family: Cera Pro;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
    }
  }
  .sloyContact {
    @media screen and (max-width: 1023px) {
      margin: 60px 0 0 calc(100% - 400px);
    }
    @media screen and (max-width: 680px) {
      margin: 0;
      width: 100%;
    }
  }
</style>