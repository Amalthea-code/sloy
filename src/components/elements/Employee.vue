<template>
  <div class="employee" :id="'el' + current">
    <div class="employee__select" />
    <img :src="image" :alt="$t('message.fotoAlt')" class="employee__image">
    <h5 class="employee__name">{{ fullName }}</h5>
    <p class="employee__info">{{ info }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      fullName: {
        type: String,
        default: ''
      },
      info: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      current: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .employee {
    width: 510px;
    height: 430px;
    border-radius: 25px;
    background-color: #1b1b1b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background-color .3s;
    position: relative;
    user-select: none;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1700px) {
      width: calc((80vw - 60px) / 3);
      padding: 3vw 0;
      height: auto;
    }
    @media screen and (max-width: 1023px) {
      width: 510px;
      height: 430px;
      padding: 0;
    }
    @media screen and (max-width: 680px) {
      width: calc(100vw - 20px);
      &:hover {
        z-index: 10;
      }
    }
    &__select {
      z-index: 2;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    &:hover {
      .employee__name {
        color: #121212;
        user-select: none;
      }
      .employee__image {
        animation-name: wiggle;
        animation-iteration-count: infinite;
        animation-duration: 1s;
      }
      &#el0 {
        background-color: #e1d5eb;
      }
      &#el1 {
        background-color: #f7d7f3;
      }
      &#el2 {
        background-color: #e0ecef;
      }
      &#el3 {
        background-color: #fde6e6;
      }
      &#el4 {
        background-color: #e2f5e7;
      }
      &#el5 {
        background-color: #c2c1fd;
      }
      &#el6 {
        background-color: #d5ffdd;
      }
      &#el7 {
        background-color: #c0c2ff;
      }
      &#el8 {
        background-color: #d9aeff;
      }
      &#el9 {
        background-color: #b9fdff;
      }
      &#el10 {
        background-color: #daaafe;
      }
    }
    &__name {
      font-family: Cera Pro;
      font-size: 24px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #fff;
      text-align: center;
      margin: 30px 0 0;
      transition: color .3s;
    }
    &__info {
      font-family: Cera Pro;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.5px;
      text-align: center;
      color: #565656;
      margin: 8px 0 0;
    }
    &__image {
      height: 200px;
      object-fit: contain;
      user-select: none;
      @media screen and (max-width: 1700px) {
        height: 12vw;
      }
      @media screen and (max-width: 1023px) {
        height: 200px;
      }
    }
  }
  @keyframes wiggle {
    0% {
      transform: scale(1) rotate(0deg);
    }
    25% {
      transform: scale(1.05) rotate(-8deg);
    }
    50% {
      transform: scale(1) rotate(0deg);
    }
    75% {
      transform: scale(1.05) rotate(8deg);
    }
    100% {
      transform: scale(1) rotate(0);
    }
  }
</style>