<template>
  <Drag :innerid="innerid">
    <div class="foto">
      <img :src="image" :alt="$t('message.fotoAlt')">
      <div class="foto__select" />
    </div>
  </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      Drag
    },
    props: {
      image: {
        type: String
      },
      innerid: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foto {
    user-select: none;
    width: 420px;
    height: 520px;
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1600px) {
      width: 320px;
      height: 420px;
    }
    img {
      width: 420px;
      height: 520px;
      object-fit: cover;
      @media screen and (max-width: 1600px) {
        width: 320px;
        height: 420px;
      }
    }
    &__select {
      width: 100%;
      height: 100%;
      z-index: 2;
      top: 0;
      left: 0;
      position: absolute;
    }
  }
</style>