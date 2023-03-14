<template>
    <Drag class="sloyProjects" innerid="projects">
      <Modal>
        <template v-slot:title>
          {{ $t("message.SloyProjects") }}
        </template>
        <template v-slot:box>
          <div class="projects">
            <div class="projects__box">
              <a @dragstart.prevent.stop @mousedown.prevent.stop v-for="(el, index) in GET_PROJECTS" :key="index" :href="el.link" target="blank" class="projects__element">
                <img :src="el.image" :alt="$t('message.fotoAlt')">
              </a>
            </div>
            <div class="projects__bar">
              <div @click="switchPojects(0)" class="projects__button">All</div>
              <div @click="switchPojects(1)" class="projects__button">Web</div>
              <div @click="switchPojects(2)" class="projects__button">Social</div>
              <div @click="switchPojects(3)" class="projects__button">Branding</div>
              <div @click="switchPojects(4)" class="projects__button">Logos</div>
              <div :class="{
                'projects__swither': true,
                'projects__swither_all': switchPosition === 0,
                'projects__swither_web': switchPosition === 1,
                'projects__swither_social': switchPosition === 2,
                'projects__swither_branding': switchPosition === 3,
                'projects__swither_logos': switchPosition === 4
              }" />
            </div>
          </div>
        </template>
      </Modal>
    </Drag>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Drag from '@/components/elements/Drag.vue'
  import Modal from '@/components/elements/Modal.vue'
  import logo from '@/assets/images/icons/logo.vue'
  export default {
    data () {
      return {
        switchPosition: 0
      }
    },
    components: {
      Drag,
      Modal,
      logo
    },
    computed: {
      ...mapGetters({
        GET_PROJECTS: 'projects/GET_PROJECTS'
      })
    },
    methods: {
      ...mapActions({
        switchPoject: 'projects/switchPojects'
      }),
      switchPojects (props) {
        if (props === this.switchPosition) { return }
        this.switchPosition = props
        this.switchPoject(props)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .projects {
    user-select: none;
    position: relative;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    &__box {
      width: 420px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 1px;
      overflow-y: scroll;
      height: 420px;
      @media screen and (max-width: 1600px) {
        height: 305px;
        width: 305px;
      }
      @media screen and (max-width: 680px) {
        width: calc(100vw - 20px);
        height: calc(100vw - 20px);
      }
    }
    &__element {
      width: 138px;
      height: 138px;
      img {
        width: 138px;
        height: 138px;
        object-fit: cover;
        pointer-events: none;
      }
      @media screen and (max-width: 1600px) {
        width: 100px;
        height: 100px;
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          pointer-events: none;
        }
      }
      @media screen and (max-width: 680px) {
        width: calc((100vw - 24px)/3);
        height: calc((100vw - 24px)/3);
        img {
          width: calc((100vw - 24px)/3);
          height: calc((100vw - 24px)/3);
        }
      }
    }
    &__bar {
      position: absolute;
      bottom: 18px;
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(58, 58, 60, 0.5);
      box-shadow: 0px -0.5px 0px rgba(255, 255, 255, 0.16);
      backdrop-filter: blur(54px);
      border-radius: 20px;
      left: 50%;
      width: calc(100% - 52px);
      transform: translate(-50%, 0);
      border-radius: 20px;
    }
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Cera Pro;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.5px;
      text-align: center;
      color: #fff;
      padding: 4px 6px;
      box-sizing: border-box;
      height: 32px;
      width: 72px;
      cursor: pointer;
      position: relative;
      z-index: 3;
    }
    &__swither {
      position: absolute;
      z-index: 2;
      width: 72px;
      height: 32px;
      background-color: #1b1b1b;
      border-radius: 16px;
      top: 4px;
      left: 5px;
      transition: transform .3s, width .3s;
      &_all {
        width: 62px;
      }
      &_web {
        transform: translate(74px, 0);
        width: 60px;
      }
      &_social {
        transform: translate(148px, 0);
        width: 64px;
      }
      &_branding {
        transform: translate(212px, 0);
        width: 84px;
      }
      &_logos {
        transform: translate(296px, 0);
        width: 62px;
      }
    }
  }
  .sloyProjects {
    @media screen and (max-width: 1023px) {
      margin: 60px 0 0 calc(90vw - 420px);
    }
    @media screen and (max-width: 680px) {
      margin: 20px 10px 0;
    }
  }
</style>