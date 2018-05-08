import xmlrpc from 'xmlrpc'

let host = 'http://localhost:8077'
let user = 'nhomar@vauxoo.com'
let pwd = 'Cl4v3d3M0'
let db = 'qfga11c'
let uid

function xmlrpcCall (model, method, args, kwargs, callback) {
  if (!uid) {
    xmlrpc.createClient(host + '/xmlrpc/2/common').methodCall('authenticate', [
      db, user, pwd, {}
    ], function (err, res) {
      if (err) return False
      uid = res
      console.log('User: ' + uid)
    })
  } else {
    console.log(model, method, args, kwargs, callback)
    xmlrpc.createClient(host + '/xmlrpc/2/object').methodCall('execute_kw', [
      db, uid, pwd, model, method, args, kwargs
    ], function (err, res) {
      if (err) return False
      callback(res)
    })
  }
}

const state = {
  main: 0,
  name: '',
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  SET_NAME (state, name) {
    state.name = name
  }
}

const actions = {
  someAsyncTask ({ commit, state }) {
    var odoo = xmlrpc.createClient('http://demo.odoo.com/start')
    xmlrpcCall('res.users', 'read', [[state.main], ['name']], {}, function (res) {
      console.log(res)
      commit('SET_NAME', res[0].name)
    })
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
