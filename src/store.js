import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    equipments: [],

    memberlistings: [],
    membercars: [],
    memberredeems: [],
    servicehistorys: [],
    provinces: [],
    carbrands: [],
    carmodels: [],
    servicebranchs: [],
  },
  mutations: {
    set_user: (state, user) => state.user = user,
    set_equipments: (state, equipments) => state.equipments = equipments,

    set_memberlistings: (state, memberlistings) => state.memberlistings = memberlistings,
    set_membercars: (state, membercars) => state.membercars = membercars,
    set_memberredeems: (state, memberredeems) => state.memberredeems = memberredeems,
    set_servicehistorys: (state, servicehistorys) => state.servicehistorys = servicehistorys,
    set_provinces: (state, provinces) => state.provinces = provinces,
    set_carbrands: (state, carbrands) => state.carbrands = carbrands,
    set_carmodels: (state, carmodels) => state.carmodels = carmodels,
    set_servicebranchs: (state, servicebranchs) => state.servicebranchs = servicebranchs,
  },
  actions: {
    get_user_login: ({ commit }) => Axios.post('/api/userlogin/getUserLogin').then(res => commit('set_user', res.data)),
    set_equipments: ({ commit }, params = { page: 1 }) => Axios.get(`/api/equipment`, { params }).then(res => commit('set_equipments', res.data)),

    set_memberlistings: ({ commit }, params = { page: 1 }) => Axios.get(`/api/memberlisting`, { params }).then(res => commit('set_memberlistings', res.data)),
    set_membercars: ({ commit }) => Axios.get('/api/membercar', ).then(res => commit('set_membercars', res.data.recordset)),
    set_memberredeems: ({ commit }) => Axios.get('/api/memberredeem', ).then(res => commit('set_memberredeems', res.data.recordset)),

    set_servicehistorys: ({ commit }) => Axios.get('/api/servicehistory', ).then(res => commit('set_servicehistorys', res.data.recordset)),
    set_provinces: ({ commit }, params = { page: 1 }) => Axios.get(`/api/province`, { params }).then(res => commit('set_provinces', res.data)),
    set_carbrands: ({ commit }) => Axios.get('/api/carbrand', ).then(res => commit('set_carbrands', res.data.recordset)),
    set_carmodels: ({ commit }) => Axios.get('/api/carmodel', ).then(res => commit('set_carmodels', res.data.recordset)),
    set_servicebranchs: ({ commit }) => Axios.get('/api/servicebranch', ).then(res => commit('set_servicebranchs', res.data.recordset)),
  }
})