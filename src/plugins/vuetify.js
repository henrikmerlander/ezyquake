import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VBtn,
  VGrid,
  VImg,
  VRadioGroup,
  VToolbar,
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VGrid,
    VImg,
    VRadioGroup,
    VToolbar,
  },
  customProperties: true,
  iconfont: 'md',
})
