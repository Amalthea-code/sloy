<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts__box">
        <sloy-audio :class="'sloyAudio-' + index" v-for="(el, index) in audios" :key="index" :image='el.image' :sources='el.audioSources' :current="index" />
        <sloy-chat />
        <sloy-contact />
        <sloy-telegram :current="2" />
        <div class="contacts__block">
          <h2 class="contacts__title">
            <span v-html="$t('message.Contacts.title')" />
            <img src="@/assets/images/hearth.png" :alt="$t('message.fotoAlt')">
          </h2>
          <logo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/images/Waveform.png'
import image2 from '@/assets/images/Waveform.png'
import image3 from '@/assets/images/Waveform.png'
import image4 from '@/assets/images/Waveform.png'
import logo from '@/assets/images/icons/logo.vue'
import SloyContact from '@/components/modules/SloyContact.vue'
import SloyTelegram from '@/components/modules/SloyTelegram.vue'
import SloyAudio from '@/components/modules/SloyAudio.vue'
import SloyChat from '@/components/modules/SloyChat.vue'
export default {
  components: {
    logo,
    SloyContact,
    SloyTelegram,
    SloyAudio,
    SloyChat
  },
  data () {
    return {
      audios: [
        {
          image: image1,
          audioSources: [
            "src/assets/audio/haski1.mp3"
          ],
        },
        {
          image: image2,
          audioSources: [
            "src/assets/audio/haski2.mp3"
          ],
        },
        {
          image: image3,
          audioSources: [
            "src/assets/audio/haski1.mp3"
          ],
        },
        {
          image: image4,
          audioSources: [
            "src/assets/audio/haski2.mp3"
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 300px 0 300px;
    @media screen and (max-width: 1023px) {
      padding: 80px 0 220px;
    }
    &__title {
      font-family: Cera Pro;
      font-size: 48px;
      font-weight: 500;
      line-height: 62px;
      letter-spacing: -0.6px;
      color: #fff;
      @media screen and (max-width: 1023px) {
        font-size: 40px;
        line-height: 60px;
      }
      @media screen and (max-width: 680px) {
        font-size: 28px;
        line-height: 45px;
        letter-spacing: -0.5px;
      }
      img {
        width: 48px;
        height: 48px;
        object-fit: contain;
        position: relative;
        top: 10px;
        @media screen and (max-width: 1023px) {
          width: 24px;
          height: 24px;
          top: 4px;
          left: 6px;
        }
      }
    }
    &__block {
      svg {
        @media screen and (max-width: 1023px) {
          width: calc(100vw - 20px);
          height: auto;
        }
      }
    }
  }
  .sloyAudio {
    &-0 {
      @media screen and (max-width: 1023px) {
        margin: 0 0 46px 3%;
      }
    }
    &-1 {
      @media screen and (max-width: 1023px) {
        margin: 0 12px 64px 44%;
      }
    }
    &-2 {
      @media screen and (max-width: 1023px) {
        margin: 0 0 64px 9%;
      }
    }
    &-3 {
      @media screen and (max-width: 1023px) {
        margin: 0 0 64px 30%;
      }
    }
  }
</style>