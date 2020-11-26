import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    curso: {}
  },

  mutations: {
    getCursosMutation(state, payload) {
      state.cursos = payload;
    },

    getCursoMutation(state, payload) {
      state.curso = payload;
    }
  },

  actions: {
    getCursosAction({commit}) {
      fetch('http://localhost:3000/cursos', {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          commit('getCursosMutation', data);
      })
    },

    getCursoAction({commit}, id) {
      fetch(`http://localhost:3000/cursos/${id}`, {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          commit('getCursoMutation', data);
      })
    }
  },

  modules: {
  }
})
