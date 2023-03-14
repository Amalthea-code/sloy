<template>
  <div class="box" ref="box">
    <transition-group name="message" tag="div">
      <message
        v-for="(el, index) in messages"
        :key="el.message + index"
        :position="el.position"
        :message="el.message"
        :imageURL="el.imageURL"
        class="message"
      />
    </transition-group>
  </div>
</template>

<script>
  import Message from '@/components/elements/Message.vue'
  export default {
    components: {
      Message
    },
    props: {
      messages: {
        default: () => [],
        type: Array
      }
    },
    watch: {
      messages: {
      deep: true,
        handler() {
          setTimeout(() => {
            this.$refs.box.scrollTo({
              top: this.$refs.box.children[0].clientHeight,
              behavior: 'smooth'
            })
          }, 0)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .box {
      height: 264px;
      box-sizing: border-box;
      padding: 0 8px;
      overflow-y: scroll;
    }
</style>
