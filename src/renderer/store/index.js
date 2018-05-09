import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

function getPlugins (modules) {
  var plugins = []
  for (var module in modules) {
    plugins = plugins.concat(modules[module].plugins || [])
  }
  return plugins
}

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: getPlugins(modules)
})
