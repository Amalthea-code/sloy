<template>
  <div class="info">
    <div class="container">
      <h2 class="info__title">
        <span v-html="$t('message.Info')" />
      </h2>
      <div class="info__box">
        <sloy-telegram :current="1" />
        <sloy-notes />
        <sloy-rules />
        <sloy-kit />
        <sloy-foto
          v-for="(el, index) in team"
          :key="index"
          :image="el.image"
          :innerid="el.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import TeamFoto1 from '@/assets/images/teams1.jpg'
  import TeamFoto2 from '@/assets/images/teams2.jpg'
  import TeamFoto3 from '@/assets/images/teams3.jpg'
  import TeamFoto4 from '@/assets/images/teams4.jpg'
  import SloyNotes from '@/components/modules/SloyNotes.vue'
  import SloyTelegram from '@/components/modules/SloyTelegram.vue'
  import SloyRules from '@/components/modules/SloyRules.vue'
  import SloyFoto from '@/components/modules/SloyFoto.vue'
  import SloyKit from '@/components/modules/SloyKit.vue'
  export default {
    components: {
    SloyTelegram,
    SloyNotes,
    SloyRules,
    SloyFoto,
    SloyKit
},
    data () {
      return {
        team: [
          {
            id: 'foto1',
            image: TeamFoto1
          },
          {
            id: 'foto2',
            image: TeamFoto2
          },
          {
            id: 'foto3',
            image: TeamFoto3
          },
          {
            id: 'foto4',
            image: TeamFoto4
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    min-height: 100vh;
    &__title {
      font-family: Cera Pro;
      font-size: 60px;
      font-weight: 500;
      line-height: 80px;
      letter-spacing: -0.5px;
      color: #fff;
      @media screen and (max-width: 1023px) {
        font-size: 40px;
        line-height: 60px;
      }
      @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 37px;
      }
    }
    &__box {
      height: 100vh;
      @media screen and (max-width: 680px) {
        height: 100%;
      }
    }
    @media screen and (max-width: 680px) {
      padding: 0;
      margin: 80px 0 0;
    }
  }
</style>