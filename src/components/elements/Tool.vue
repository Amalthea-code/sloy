<template>
  <div
    :class="{
      'tool': true,
      'tool_active': GET_CURSOR === select
    }"
    @click="SET_CURSOR(select)"
    :style="{backgroundImage: 'url(' + image + ')'}"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    select: {
      default: '',
      type: String
    },
    image: {
      default: '',
      type: String
    },
  },
  computed: {
    ...mapGetters({
      GET_CURSOR: 'cursor/GET_CURSOR'
    })
  },
  methods: {
    ...mapMutations({
      SET_CURSOR: 'cursor/SET_CURSOR'
    })
  }
}
</script>

<style lang="scss" scoped>
  .tool {
    width: 44px;
    height: 44px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60% 60%;
    border-radius: 4px;
    transition: background-color .3s;
    cursor: pointer;
    &_active {
      background-color: #121212;
    }
    @media screen and (max-width: 1600px) {
      width: 36px;
      height: 36px;
    }
  }
</style>
