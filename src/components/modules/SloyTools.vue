<template>
  <Drag class="sloyTools" innerid="tools">
    <Modal>
      <template v-slot:title>
        Tools
      </template>
      <template v-slot:box>
        <div class="tools">
          <tool v-for="(el, index) in tools" :key="index" :select="el.select" :image="el.image" />
        </div>
      </template>
    </Modal>
  </Drag>
</template>

<script>
import Drag from '@/components/elements/Drag.vue'
import Modal from '@/components/elements/Modal.vue'
import Tool from '@/components/elements/Tool.vue'

import cursor_1 from '@/assets/images/cursor_1.svg'
import cursor_2 from '@/assets/images/cursor_2.svg'
import cursor_3 from '@/assets/images/cursor_3.svg'
import cursor_4 from '@/assets/images/cursor_4.svg'
import cursor_5 from '@/assets/images/cursor_5.svg'
import cursor_6 from '@/assets/images/cursor_6.svg'
import cursor_7 from '@/assets/images/cursor_7.svg'
import cursor_8 from '@/assets/images/cursor_8.svg'
import cursor_9 from '@/assets/images/cursor_9.svg'
import cursor_10 from '@/assets/images/cursor_10.svg'
import cursor_11 from '@/assets/images/cursor_11.svg'
import cursor_12 from '@/assets/images/cursor_12.svg'
import cursor_13 from '@/assets/images/cursor_13.svg'
import cursor_14 from '@/assets/images/cursor_14.svg'
import cursor_15 from '@/assets/images/cursor_15.svg'
import cursor_16 from '@/assets/images/cursor_16.svg'
import cursor_17 from '@/assets/images/cursor_17.svg'
import cursor_18 from '@/assets/images/cursor_18.svg'
import cursor_19 from '@/assets/images/cursor_19.svg'
import cursor_20 from '@/assets/images/cursor_20.svg'

export default {
  components: {
    Drag,
    Modal,
    Tool
  },
  data () {
    return {
      tools: [
        {
          select: 'cursor_1',
          image: cursor_1
        },
        {
          select: 'cursor_2',
          image: cursor_2
        },
        {
          select: 'cursor_3',
          image: cursor_3
        },
        {
          select: 'cursor_4',
          image: cursor_4
        },
        {
          select: 'cursor_5',
          image: cursor_5
        },
        {
          select: 'cursor_6',
          image: cursor_6
        },
        {
          select: 'cursor_7',
          image: cursor_7
        },
        {
          select: 'cursor_8',
          image: cursor_8
        },
        {
          select: 'cursor_9',
          image: cursor_9
        },
        {
          select: 'cursor_10',
          image: cursor_10
        },
        {
          select: 'cursor_11',
          image: cursor_11
        },
        {
          select: 'cursor_12',
          image: cursor_12
        },
        {
          select: 'cursor_13',
          image: cursor_13
        },
        {
          select: 'cursor_14',
          image: cursor_14
        },
        {
          select: 'cursor_15',
          image: cursor_15
        },
        {
          select: 'cursor_16',
          image: cursor_16
        },
        {
          select: 'cursor_17',
          image: cursor_17
        },
        {
          select: '',
          image: cursor_18
        },
        {
          select: 'cursor_19',
          image: cursor_19
        },
        {
          select: 'cursor_20',
          image: cursor_20
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tools {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 96px;
    padding: 18px 24px 32px;
    @media screen and (max-width: 1600px) {
      gap: 6px;
      width: 78px;
      padding: 10px 16px 12px;
    }
  }
</style>