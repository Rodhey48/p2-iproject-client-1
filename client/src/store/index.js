import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios"
import Swal from 'sweetalert2'

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://badminton-lover.herokuapp.com";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isRegister: false,
    news: [],
    userLogin: '',
    rangkingsMs: [],
    rangkingsMd: [],
    rangkingsWs: [],
    rangkingsWd: [],
    rangkingsXd: [],
  },
  mutations: {
    LOGIN(state, payload) {
      state.isLogin = true
      state.userLogin = payload.username
      localStorage.setItem("token", payload.access_token)
      localStorage.setItem("User", payload.username)
    },
    REGISTER(state) {
      state.isRegister = true
    },
    GET_NEWS(state, payload) {
      state.news = payload
    },
    ISLOGIN(state) {
      state.isLogin = true
      state.userLogin = localStorage.getItem('User')
    },
    ISLOGOUT(state) {
      localStorage.clear();
      state.isLogin = false
    },
    GET_RANGKINGMS(state, payload) {
      state.rangkingsMs = payload
    },
    GET_RANGKINGMD(state, payload) {
      state.rangkingsMd = payload
    },
    GET_RANGKINGWS(state, payload) {
      state.rangkingsWs = payload
    },
    GET_RANGKINGWD(state, payload) {
      state.rangkingsWd = payload
    },
    GET_RANGKINGXD(state, payload) {
      state.rangkingsXd = payload
    }
  },
  actions: {
    async postLogin(context, payload) {
      try {
        const respone = await axios({
          method: "post",
          url: `${baseUrl}/login`,
          data: payload,
        });
        context.commit('LOGIN', respone.data)
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async postRegister(context, payload) {
      try {
        const respone = await axios({
          method: "post",
          url: `${baseUrl}/register`,
          data: payload,
        });
        context.commit('REGISTER', respone)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async postGoogleLogin(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${baseUrl}/googlelogin`,
          data: {
            idToken: payload
          },
        });
        context.commit('LOGIN', response.data)
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async getNews(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/news`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_NEWS", respone.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    async getRangkingsMs(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/rangkings/ms`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_RANGKINGMS", respone.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    async getRangkingsWs(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/rangkings/ws`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_RANGKINGWS", respone.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    async getRangkingsMd(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/rangkings/md`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_RANGKINGMD", respone.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    async getRangkingsWd(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/rangkings/wd`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_RANGKINGWD", respone.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    async getRangkingsXd(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/rangkings/xd`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_RANGKINGXD", respone.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },
  },
  modules: {}
})