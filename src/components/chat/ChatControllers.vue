<template>
  <div class="controllers">
    <input id="file" type="file" class="controllers__media-input" @change="addFile">
    <label for="file" class="controllers__media"><media /></label>
    <div class="controllers__box">
      <input
        type="text"
        ref="input"
        class="controllers__input"
        v-model="inputValue"
        @keydown.enter="createMessage"
        @focus="focusHendler"
      >
      <div @click="createMessage" class="controllers__button"><arrowKit /></div>
    </div>
  </div>
</template>

<script>
  import arrowKit from '@/assets/images/icons/arrowKit.vue'
  import media from '@/assets/images/icons/media.vue'
  export default {
    components: {
      arrowKit,
      media
    },
    data () {
      return {
        inputValue: '',
        image: '',
        focusAttempt: false,
        imageURL: ''
      }
    },
    methods: {
      createMessage () {
        this.$emit('createMessage', {
          message: this.inputValue,
          image: this.image,
          imageURL: this.imageURL
        }),
        this.$refs.input.focus()
      },
      addFile (event) {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(event.target.files[0])
        this.image = event.target.files[0]
        fileReader.onload = () => {
          this.imageURL = fileReader.result
        }
      },
      focusHendler () {
        if (!this.focusAttempt) {
          this.$emit('focusAttempt')
          this.focusAttempt = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .controllers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__box {
      display: flex;
      justify-content: space-between;
      border: 1px solid #ebebf54d;
      border-radius: 18px;
      width: 292px;
      height: 34px;
      position: relative;
      @media screen and (max-width: 680px) {
        width: calc(100% - 50px);
      }
    }
    &__input {
      background-color: transparent;
      color: #fff;
      border: none;
      font-family: Cera Pro;
      font-size: 15px;
      line-height: 18px;
      padding: 0 0 0 18px;
      box-sizing: border-box;
      width: 254px;
    }
    &__button {
      position: absolute;
      width: 24px;
      height: 24px;
      transform: translate(0, -50%) rotate(180deg);
      cursor: pointer;
      top: 50%;
      right: 4px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
    &__media {
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 18px;
      height: 18px;
      &-input {
        width: 0;
        height: 0;
      }
    }
  }
</style>