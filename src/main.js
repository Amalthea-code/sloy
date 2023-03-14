import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store/index'
import messages from './assets/plugins/i18n.json'
const i18n = createI18n({
  locale: 'ru',
  messages: messages
})
createApp(App).use(i18n).use(router).use(store).mount('#app')
