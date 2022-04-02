import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import multiTab from './modules/multi-tab'
import permission from './modules/permission'
import material from './modules/material/material' // 普通素材
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    user,
    permission,
    multiTab,
    material,
  },
})
