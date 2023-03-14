<template>
  <div
    :class="{
      'project': true,
      'project_isOpen': isOpen
    }"
  >
    <div @click.stop="switchOpen" @mousedown.stop class="project__drug" />
    <img @click.stop="switchOpen" @mousedown.stop class="project__image" :src="image" :alt="$t('message.fotoAlt')">
    <div class="project__box">
      <h5 class="project__title">{{ title }}</h5>
      <p class="project__text">{{ text }}</p>
      <a :href="link" class="project__link">{{ $t("message.SloyProject") }}</a>
    </div>
    <div @click.stop="switchOpen" @mousedown.stop class="project__button" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    title: {
      default: '',
      type: String
    },
    image: {
      default: '',
      type: String
    },
    text: {
      default: '',
      type: String
    },
    link: {
      default: '',
      type: String
    },
    innerid: {
      default: '',
      type: String
    }
  },
  methods: {
    switchOpen () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .project {
    width: 370px;
    height: 430px;
    border-radius: 25px;
    overflow: hidden;
    background-color: #1b1b1b;
    position: relative;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1700px) {
      width: 270px;
      height: 330px;
    }
    @media screen and (max-width: 1400px) {
      width: 370px;
      height: 430px;
    }
    @media screen and (max-width: 1023px) {
      width: 100%;
      height: 50vw;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 100vw;
    }
    &_isOpen {
      .project__image {
        transform: translate(0, -320px);
        @media screen and (max-width: 680px) {
          transform: translate(0, -42vw);
        }
        @media screen and (max-width: 500px) {
          transform: translate(0, -82vw);
        }
      }
      .project__drug {
        transform: translate(0, -320px);
        @media screen and (max-width: 680px) {
          transform: translate(0, -42vw);
        }
        @media screen and (max-width: 500px) {
          transform: translate(0, -82vw);
        }
      }
      .project__box {
        transform: translate(0, -320px);
        @media screen and (max-width: 680px) {
          transform: translate(0, -42vw);
        }
        @media screen and (max-width: 500px) {
          transform: translate(0, -82vw);
        }
      }
      .project__button {
        @media screen and (max-width: 1023px) {
          transform: translate(0, 40px);
        }
        transform: translate(0, 62px);
        &::before {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
    &__image {
      width: 370px;
      height: 430px;
      border-radius: 25px;
      transition: transform .3s;
      cursor: pointer;
      @media screen and (max-width: 1700px) {
        width: 100%;
        height: 100%;
      }
      @media screen and (max-width: 1023px) {
        width: 100%;
        height: 50vw;
        object-fit: cover;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        height: 100vw;
      }
    }
    &__drug {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 25px;
      overflow: hidden;
      transition: transform .3s;
      z-index: 3;
    }
    &__box {
      width: 370px;
      height: 264px;
      transition: transform .3s;
      box-sizing: border-box;
      padding: 26px 30px;
      @media screen and (max-width: 1023px) {
        width: 100%;
        padding: 8px 10px;
      }
    }
    &__title {
      font-family: Cera Pro;
      font-size: 28px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.5px;
      color: #606060;
      margin: 0 0 14px;
      @media screen and (max-width: 1023px) {
        font-size: 17px;
        line-height: 20px;
      }
      @media screen and (max-width: 500px) {
        font-size: 22px;
        line-height: 24px;
      }
    }
    &__text {
      font-family: Cera Pro;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #fff;
      @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 14px;
      }
      @media screen and (max-width: 500px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
    &__link {
      font-family: Cera Pro;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #0a84ff;
      @media screen and (max-width: 1023px) {
        font-size: 14px;
        line-height: 17px;
      }
      @media screen and (max-width: 500px) {
        font-size: 19px;
        line-height: 20px;
      }
    }
    &__button {
      width: 38px;
      height: 38px;
      background-color: #121212;
      border-radius: 50%;
      position: absolute;
      top: -38px;
      right: 18px;
      z-index: 1;
      cursor: pointer;
      transition: transform .5s;
      @media screen and (max-width: 1023px) {
        width: 24px;
        height: 24px;
        top: -24px;
        right: 12px;
      }
      &::before {
        width: 18px;
        height: 2px;
        border-radius: 1px;
        content: '';
        background-color: #fff;
        z-index: 2;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        transition: transform .3s;
        @media screen and (max-width: 1023px) {
          width: 12px;
          height: 2px;
        }
      }
      &::after {
        width: 18px;
        height: 2px;
        border-radius: 1px;
        content: '';
        background-color: #fff;
        z-index: 2;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        transition: transform .3s;
        @media screen and (max-width: 1023px) {
          width: 12px;
          height: 2px;
        }
      }
    }
  }
</style>