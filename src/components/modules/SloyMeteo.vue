<template>
    <drag class="sloyText" innerid="text">
    </drag>
</template>

<script>
  import Drag from '@/components/elements/Drag.vue'
  export default {
    components: {
      Drag
    },
    data () {

    },
    mounted () {
      fetch('https://api.imgbb.com/1/upload?expiration=60&key=c4ffeecf0c487ba0ff459d557e209beb')
        .then(() => {
          
        })
    }
  }
</script>

<style lang="scss" scoped>
</style>