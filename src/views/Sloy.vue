<template>
  <div class="sloy">
    <main-block />
    <team />
    <info />
    <Projects />
    <contacts />
    <cursor />
    <sloy-cookie />
  </div>
</template>

<script>

import Team from '@/components/block/Team.vue'
import Info from '@/components/block/Info.vue'
import Projects from '@/components/block/Projects.vue'
import Contacts from '@/components/block/Contacts.vue'
import MainBlock from '@/components/block/MainBlock.vue'
import Cursor from '@/components/elements/Cursor.vue'
import SloyCookie from '@/components/modules/SloyCookie.vue'
export default {
  components: {
    Projects,
    Contacts,
    Team,
    MainBlock,
    Info,
    Cursor,
    SloyCookie
  }
}
</script>

<style>
  body {
    overflow-x: hidden;
  }
</style>
