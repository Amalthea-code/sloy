<template>
    <Drag class="sloyTelegram" :innerid="'telegram' + current">
      <div class="telegram">
        <telegram />
        <random-amount class="amount" />
      </div>
    </Drag>
</template>

<script>
  import telegram from '@/assets/images/icons/telegram.vue'
  import Drag from '@/components/elements/Drag.vue'
  import RandomAmount from '@/components/elements/RandomAmount.vue'
  export default {
    components: {
      telegram,
      Drag,
      RandomAmount
    },
    props: {
      current: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .telegram {
    user-select: none;
    width: 80px;
    height: 80px;
    font-family: Cera Pro;
    font-size: 33px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: #fff;
    border-radius: 50%;
    background-color: rgb(13,153,255);
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    svg {
      width: 80px;
      height: 80px;
    }
    @media screen and (max-width: 1600px) {
      width: 60px;
      height: 60px;
      svg {
        width: 60px;
        height: 60px;
      }
    }
  }
  .amount {
    top: -14px;
    right: -14px;
  }
</style>