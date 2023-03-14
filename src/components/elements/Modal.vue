<template>
  <div class="sloy">
    <div class="sloy__title-box">
      <h5 class="sloy__title"><slot name="title" /></h5>
    </div>
    <div class="sloy__box">
      <slot name="box" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .sloy {
    display: inline-block;
    border-radius: 25px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    &__title {
      color: #606060;
      user-select: none;
      
      &-box {
        background-color: #121212;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__box {}
    background-color: #1b1b1b;
  }
</style>