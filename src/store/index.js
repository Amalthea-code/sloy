import { createStore } from 'vuex'

import drag from '@/store/modules/drag'
import projects from '@/store/modules/projects'
import accent from '@/store/modules/accent'
import cursor from '@/store/modules/cursor'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    drag,
    projects,
    accent,
    cursor
  }
})
