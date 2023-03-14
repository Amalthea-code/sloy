<template>
    <Drag innerid="button">
      <div class="button">{{ $t('message.SloyProjectsButton') }}</div>
    </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      Drag
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    user-select: none;
    font-family: Cera Pro;
    font-size: 24px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #fff;
    padding: 20px 42px;
    border-radius: 30px;
    background-color: #1b1b1b;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1600px) {
      font-size: 18px;
      line-height: 20px;
      padding: 16px 38px;
    }
  }
</style>