import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langCn from './cn'

Vue.use(VueI18n)

const messages = {
  en: {
    title: 'welcome'
  },
  cn: {
    ...langCn
  }
}

const i18n = new VueI18n({
  locale: 'cn',
  messages
})

export default i18n
