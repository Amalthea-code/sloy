<template>
  <Drag class="sloyKit" innerid="kit">
    <div :class="{
        'kit': true,
        'kit_active': isActive
      }"
    >
      <h5 class="kit__title">Media Kit</h5>
      <div class="kit__text">
        {{ $t("message.SloyKit.title") }}
      </div>
      <div class="kit__box">
        <div class="kit__info">
          Нам понадобится твой номер. Все скинем в Telegram или WhatsUp
        </div>
        <div class="kit__switch">
          <span @click="switchSelect(true)" class="kit__switch-1"><telegramKit /></span>
          <div
            @click="switchSelect(0)"
            :class="{
              'kit__switcher': true,
              'kit__switcher_active': select,
            }"
          >
            <span />
          </div>
          <span @click="switchSelect(false)" class="kit__switch-2"><whatsupKit /></span>
        </div>
        <input type="text" v-model="inputValue" class="kit__input">
      </div>
      <div class="kit__button" @click="switchActive"><arrowKit /></div>
    </div>
  </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  import telegramKit from '@/assets/images/icons/telegramKit.vue'
  import whatsupKit from '@/assets/images/icons/whatsupKit.vue'
  import arrowKit from '@/assets/images/icons/arrowKit.vue'
  export default {
    components: {
      telegramKit,
      whatsupKit,
      arrowKit,
      Drag
    },
    data () {
      return {
        isActive: false,
        select: 1,
        inputValue: ''
      }
    },
    methods: {
      switchActive () {
        if (!this.isActive) {
          this.isActive = true
        } else {
          if (this.inputValue) {
            fetch('https://api.telegram.org/ЗДЕСЬ_ДОЛЖЕН_БЫТЬ_APIKEY/sendMessage?chat_id=815649466&text=Запрос на Media Kit. Отправить в ' + (this.select ? 'Telegram по номеру: ' : 'WhatsUp по номеру: ') + this.inputValue, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })
          }
        }
      },
      switchSelect (props) {
        props === 0 ? this.select = !this.select : this.select = props
      }
    }
  }
</script>

<style lang="scss" scoped>
  .kit {
    background-color: #1B1B1B;
    border-radius: 25px;
    height: 218px;
    width: 330px;
    padding: 30px 40px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 680px) {
      width: 300px;
    }
    &_active {
      .kit__title {
        transform: translate(0, -218px);
      }
      .kit__text {
        transform: translate(0, -218px);
      }
      .kit__button {
        transform: scale(0.6) rotate(180deg) translate(24px, 14px);
      }
      .kit__input {
        display: block;
      }
      .kit__box {
        transform: translate(-290px, 0);
      }
    }
    &__title {
      color: #606060;
      font-family: Cera Pro;
      font-size: 28px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.5px;
      margin: 0 0 8px;
      transition: transform .3s;
    }
    &__text {
      font-family: Cera Pro;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #fff;
      transition: transform .3s;
    }
    &__switch {
      display: flex;
      align-items: center;
      margin: 8px 0;
      &-1 {
        width: 30px;
        height: 30px;
      }
      &-2 {
        width: 30px;
        height: 30px;
        svg {
          width: 30px;
          height: 30px;
        }
      }
      span {
        cursor: pointer;
      }
    }
    &__switcher {
      width: 52px;
      height: 30px;
      background-color: #40C351;
      border-radius: 36px;
      position: relative;
      margin: 0 4px;
      cursor: pointer;
      transition: background-color .3s;
      span {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        transition: transform .3s;
        top: 2px;
        right: 2px;
      }
      &_active {
        background-color: #007AFF;
        span {
          transform: translate( -21px, 0);
        }
      }
    }
    &__box {
      position: absolute;
      top: 30px;
      left: 331px;
      transition: transform .3s;
      width: 240px;
    }
    &__input {
      box-sizing: border-box;
      background-color: transparent;
      width: 246px;
      height: 32px;
      border: 1px solid #ebebf54d;
      border-radius: 18px;
      color: #fff;
      padding: 0 0 0 14px;
      @media screen and (max-width: 680px) {
        width: 216px;
      }
    }
    &__button {
      position: absolute;
      right: 28px;
      bottom: 22px;
      width: 34px;
      height: 34px;
      cursor: pointer;
      transition: transform .3s;
      transform: scale(1) rotate(0deg);
    }
    &__info {
      font-family: Cera Pro;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #fff;
    }
  }
  .sloyKit {
    @media screen and (max-width: 1023px) {
      margin: 40px 0 0 2vw;
    }
    @media screen and (max-width: 680px) {
      margin: 20px calc((100vw - 320px)/2) 0;
    }
  }
</style>