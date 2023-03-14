<template>
    <Drag class="sloyLogo" innerid="logo">
      <Modal>
        <template v-slot:title>
          Sloy_logo_2021.gif
        </template>
        <template v-slot:box>
          <div class="element accent">
            <logo />
          </div>
        </template>
      </Modal>
    </Drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  import Modal from '@/components/elements/Modal.vue'
  import logo from '@/assets/images/icons/logo.vue'
  export default {
    components: {
      Drag,
      Modal,
      logo
    }
  }
</script>

<style lang="scss" scoped>
  .element {
    user-select: none;
    padding: 60px;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 1600px) {
      padding: 30px;
      width: 360px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 680px) {
      box-sizing: border-box;
      padding: 8% 20px;
      width: calc(100vw - 20px);
    }
  }
  .sloyLogo {
    @media screen and (max-width: 1023px) {
      margin: 60px 0 0 16vw;
    }
    @media screen and (max-width: 680px) {
      margin: 60px 10px 0;
    }
  }
</style>