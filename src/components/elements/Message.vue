<template>
  <div class="message" :style="{ justifyContent: position ?  'right' : 'left' }">
    <div class="message__box">
      <span :class="{'message__text': true, 'message__text_user': position }">{{ message }}</span>
      <span v-if="imageURL" :class="{'message__images': true, 'message__images_smile': !position}">
        <img :src="imageURL" alt="" class="message__image">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      default: '',
      type: String
    },
    position: {
      default: false,
      type: Boolean
    },
    message: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .message {
    display: flex;
    margin: 16px 0;
    opacity: 1;
    transition: all .3s;
    &-enter-active {
      opacity: 0;
    }
    &-leave-active {
      opacity: 0;
    }
    &__box {
      display: inline-block;
      max-width: 262px;
      box-sizing: border-box;
      padding: 8px 16px;
      border-radius: 18px;
      background-color: #2C2C2E;
    }
    &__text {
      font-family: Cera Pro;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.4px;
      color: #fff;
      &_user {
        word-break: break-all;
      }
    }
    &__images {
      display: inline-block;
      &_smile {
        width: 18px;
        height: 18px;
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
