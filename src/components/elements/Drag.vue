<template>
  <div class="drag" :id="innerid" @mousedown="dragON">
   <slot />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
export default {
  data () {
    return {
      positionX: null,
      positionY: null
    }
  },
  props: {
    innerid: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      GET_ZINDEX: 'drag/GET_ZINDEX'
    })
  },
  methods: {
    ...mapMutations({
      SET_ZINDEX: 'drag/SET_ZINDEX'
    }),
    dragON (event) {
      if (window.innerWidth < 1024) {
        return
      }
      const drag = document.getElementById(this.innerid)
      this.SET_ZINDEX(this.GET_ZINDEX + 1)
      const zIndex = this.GET_ZINDEX
      let shiftX = event.clientX - drag.getBoundingClientRect().left
      let shiftY = event.clientY - drag.getBoundingClientRect().top
      drag.style.position = 'absolute' 
      drag.style.zIndex = zIndex
      drag.style.bottom = 'auto'
      drag.style.right = 'auto'
      moveAt(event.pageX, event.pageY) 

      function moveAt(pageX, pageY) {
        drag.style.left = pageX - shiftX + 'px'
        drag.style.top = pageY - shiftY + 'px'
      }

      function onMouseMove(event) {
        if (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight || event.clientX <= 0 || event.clientY <= 0) {
          document.removeEventListener('mousemove', onMouseMove)
          return
        }
        moveAt(event.pageX, event.pageY)
      }
      document.addEventListener('mousemove', onMouseMove)
      drag.onmouseup = function() {
        drag.style.zIndex = zIndex
        document.removeEventListener('mousemove', onMouseMove)
        event.target.onmouseup = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .drag {
    display: inline-block;
    cursor: grab;
    @media screen and (max-width: 1023px)  {
      cursor: auto;
    }
    &:active {
      cursor: grabbing;
      @media screen and (max-width: 1023px) {
        cursor: auto;
      }
    }
    &#logo {
      position: absolute;
      top: 8vh;
      left: 4vw;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#text {
      position: absolute;
      top: 16vh;
      right: 23vw;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#language {
      position: absolute;
      top: 4vh;
      right: 21vw;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#telegram0 {
      position: absolute;
      top: 56vh;
      left: 7vw;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#behance0 {
      position: absolute;
      top: 44vh;
      left: 33vw;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#contacts {
      position: absolute;
      top: 80vh;
      left: 10vw;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#projects {
      position: absolute;
      top: 43vh;
      left: 42vw;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#range {
      position: absolute;
      top: 47vh;
      left: 15vw;
      @media screen and (max-width: 1600px) {
        top: 60vh;
      }
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#button {
      position: absolute;
      top: 90vh;
      left: 77vw;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#telegram1 {
      position: absolute;
      left: 17vw;
      top: 290vh;
      @media screen and (max-width: 1023px) {
        display: none;
      }
    }
    &#telegram2 {
      position: absolute;
      left: 50vw;
      top: 463vh;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#contact {
      position: absolute;
      right: 5vw;
      top: 454vh;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#chat {
      position: absolute;
      right: 30vw;
      top: 478vh;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#audio0 {
      position: absolute;
      left: 10vw;
      top: 445vh;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#audio1 {
      position: absolute;
      left: 22vw;
      top: 454vh;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#audio2 {
      position: absolute;
      right: 61vw;
      top: 437vh;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#audio3 {
      position: absolute;
      left: 44vw;
      top: 442vh;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#foto1 {   
      position: absolute;
      z-index: 1;
      right: 21vw;
      top: 280vh;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#foto2 {
      position: absolute;
      z-index: 3;
      right: 11vw;
      top: 306vh;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#foto3 {
      position: absolute;
      z-index: 2;
      right: 8vw;
      top: 292vh;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#foto4 {
      position: absolute;
      z-index: 4;
      right: 18vw;
      top: 328vh;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#kit {
      position: absolute;
      left: 38vw;
      top: 334vh;
      z-index: 5;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#rules {
      position: absolute;
      left: 8vw;
      top: 302vh;
      z-index: 5;
      @media screen and (max-width: 1023px)  {
        position: static;
      }
    }
    &#notes {
      position: absolute;
      left: 32vw;
      top: 291vh;
      z-index: 5;
      @media screen and (max-width: 1023px) {
        position: static;
      }
    }
    &#tools {
      position: absolute;
      right: 10vw;
      top: 10vh;
      @media screen and (max-width: 1023px)  {
        display: none;
      }
    }
    &#cookie {
      position: fixed;
      right: 40px;
      bottom: 40px;
    }
  }
</style>