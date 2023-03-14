<template>
  <div class="main">
    <sloy-tools />
    <sloy-logo />
    <sloy-text />
    <div class="main__box">
      <sloy-language />
      <sloy-telegram :current="0" />
      <sloy-behance :current="0" />
      <sloy-contacts />
    </div>
    <sloy-projects />
    <sloy-range />
    <sloy-projects-button />
  </div>
</template>

<script>
  import SloyLogo from '@/components/modules/SloyLogo.vue'
  import SloyRange from '@/components/modules/SloyRange.vue'
  import SloyProjects from '@/components/modules/SloyProjects.vue'
  import SloyProjectsButton from '@/components/modules/SloyProjectsButton.vue'
  import SloyContacts from '@/components/modules/SloyContacts.vue'
  import SloyTelegram from '@/components/modules/SloyTelegram.vue'
  import SloyText from '@/components/modules/SloyText.vue'
  import SloyTools from '@/components/modules/SloyTools.vue'
  import SloyLanguage from '@/components/modules/SloyLanguage.vue'
  import sloyBehance from '@/components/modules/sloyBehance.vue'
  export default {
    components: {
      SloyLogo,
      SloyProjects,
      SloyRange,
      SloyContacts,
      SloyProjectsButton,
      SloyTelegram,
      SloyLanguage,
      sloyBehance,
      SloyTools,
      SloyText
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    min-height: 100vh;
    @media screen and (max-width: 680px) {
      min-height: auto;
    }
    &__box {
      display: flex;
      justify-content: space-between;
      margin: 20px 10px 0;
    }
  }
</style>
