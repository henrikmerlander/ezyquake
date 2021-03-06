import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VChip,
  VGrid,
  VImg,
  VRadioGroup,
  VTextField,
  VToolbar,
  transitions,
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VChip,
    VGrid,
    VImg,
    VRadioGroup,
    VTextField,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#ffab00',
    secondary: '#000000',
    accent: '#ffab00',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
  customProperties: true,
  iconfont: 'md',
})
