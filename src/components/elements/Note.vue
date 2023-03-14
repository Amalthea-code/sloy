<template>
  <div
    class="note"
    @click="selectActive"
  >
    <div class="note__box">
      <img :src="image" :alt="$t('message.fotoAlt')" class="note__image">
      <h5 class="note__title">{{ title }}</h5>
    </div>
    <p class="note__text">{{ text }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: '',
        type: String
      },
      text: {
        default: '',
        type: String
      },
      image: {
        default: '',
        type: String
      }
    },
    methods: {
      selectActive () {
        this.$emit('select', {
          title: this.title,
          text: this.text,
          image: this.image
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .note {
    padding: 18px 0 20px;
    border-bottom: 1px solid #121212;
    cursor: pointer;
    @media screen and (max-width: 1600px) {
      padding: 12px 0 14px;
    }
    &__box {
      display: flex;
    }
    &__title {
      font-family: Cera Pro;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #fff;
    }
    &__text {
      font-family: Cera Pro;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #606060;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &__image {
      width: 20px;
      height: 20px;
      object-fit: contain;
      margin: 0 10px 0 0;
    }
  }
</style>