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
  theme: {
    primary: '#B71C1C',
    secondary: '#000000',
    accent: '#B71C1C',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
  customProperties: true,
  iconfont: 'md',
})
