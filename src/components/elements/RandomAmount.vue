<template>
  <div v-if="amount" class="amount">
    {{ amount }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      amount: null
    }
  },
  methods: {
    calcAmount () {
      this.amount += (Math.floor(Math.random() * 9) + 1)
      if (this.amount >= 100) {
        clearInterval(this.randomInterval)
        this.amount = '99+'
      }
    }
  },
  mounted () {
    this.randomInterval = setInterval(this.calcAmount, 60000)
  },
  unmounted () {
    clearInterval(this.randomInterval)
  }
}
</script>

<style lang="scss" scoped>
  .amount {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #ec3030;
    color: #fff;
    font-family: Cera Pro;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3px;
    position: absolute;
    @media screen and (max-width: 1600px) {
      width: 30px;
      height: 30px;
      font-size: 14px;
      line-height: 16px;
    }
  }
</style>