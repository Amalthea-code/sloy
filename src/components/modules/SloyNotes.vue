<template>
  <Drag class="sloyNotes" innerid="notes">
    <Modal>
      <template v-slot:title>
        Все о SLOY
      </template>
      <template v-slot:box>
        <div :class="{'slider': true, 'slider_active': isActive}">
          <div class="slider__box">
            <div class="notes">
              <h5 class="notes__title" :style="{ color: GET_ACCENT }">{{ $t("message.SloyNotes.title") }}</h5>
              <div class="notes__box">
                <note
                  v-for="(el, index) in notes"
                  :key="index"
                  :title="el.title"
                  :image="el.image"
                  :text="el.text"
                  @select="getProps"
                />
              </div>
            </div>
            <div class="note-select" @click="returnNotes">
              <div class="note-select__box">
                <img :src="image" alt="Ты видишь это сообщение потому что у тебя проблемы с интернетом" class="note-select__image">
                <h5 class="note-select__title">{{ title }}</h5>
              </div>
              <p class="note-select__text">{{ text }}</p>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </Drag>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Drag from '@/components/elements/Drag.vue'
  import Modal from '@/components/elements/Modal.vue'
  import Note from '@/components/elements/Note.vue'
  import note1 from '@/assets/images/note1.png'
  import note2 from '@/assets/images/note2.png'
  import note3 from '@/assets/images/note3.png'
  import note4 from '@/assets/images/note4.png'

  export default {
    components: {
      Note,
      Drag,
      Modal
    },
    computed: {
      ...mapGetters({
        GET_ACCENT: 'accent/GET_ACCENT'
      }),
      notes () {
        return [
        {
          title: this.$t("message.SloyNotes.notes1.title"),
          text: this.$t("message.SloyNotes.notes1.text"),
          image: note1
        },
        {
          title: this.$t("message.SloyNotes.notes2.title"),
          text: this.$t("message.SloyNotes.notes2.text"),
          image: note3
        }
      ]
      }
    },
    data () {
      return {
        title: null,
        image: null,
        text: null,
        isActive: false
      }
    },
    methods: {
      getProps (props) {
        this.isActive = true
        this.title = props.title
        this.image = props.image
        this.text = props.text
      },
      returnNotes () {
        this.isActive = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider {
    width: 420px;
    overflow: hidden;
    @media screen and (max-width: 1600px) {
      width: 320px;
    }
    @media screen and (max-width: 680px) {
      width: calc(100vw - 20px);
    }
    &_active {
      .slider__box {
        transform: translate(-420px, 0);
        @media screen and (max-width: 1600px) {
          transform: translate(-320px, 0);
        }
        @media screen and (max-width: 680px) {
          transform: translate(calc(-100vw + 20px), 0);
        }
      }
    }
    &__box {
      display: flex;
      transition: transform .3s;
      width: 840px;
      @media screen and (max-width: 680px) {
        width: calc(200vw - 40px);
      }
    }
  }
  .notes {
    width: 420px;
    padding: 22px 0 32px;
    transition: transform .3s;
    @media screen and (max-width: 1600px) {
      width: 320px;
      padding: 16px 0 20px;
    }
    @media screen and (max-width: 680px) {
      width: calc(100vw - 20px);
    }
    &__title {
      padding: 0 34px;
      font-family: Cera Pro;
      font-size: 24px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.5px;
      @media screen and (max-width: 1600px) {
        padding: 0 20px;
        font-size: 18px;
        line-height: 20px;
      }
    }
    &__box {
      height: 320px;
      overflow-y: scroll;
      padding: 0 34px;
      @media screen and (max-width: 1600px) {
        padding: 0 20px;
        height: 270px;
      }
    }
  }
  .note-select {
    cursor: pointer;
    width: 420px;
    padding: 32px 34px;
    box-sizing: border-box;
    @media screen and (max-width: 1600px) {
      width: 320px;
      padding: 10px 20px;
    }
    @media screen and (max-width: 680px) {
      width: calc(100vw - 20px);
    }
    &__box {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin: 0 10px 0 0;
      }
    }
    &__title {
      font-family: Cera Pro;
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.5px;
      color: #fff;
    }
    &__text {
      margin: 20px 0 0;
      font-family: Cera Pro;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #606060;
    }
  }
  .sloyNotes {
    @media screen and (max-width: 1023px) {
      margin: 40px 0 0 10vw;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
      margin: 20px 0 0;
    }
  }
</style>