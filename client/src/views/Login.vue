<template>
  <section
    class="section d-flex justify-content-center align-items-center"
    id="loginpage"
  >
    <div class="card col-4 align-self-center mt-5">
      <div
        class="card-header mx-auto bg-transparent font-weight-bold"
        style="font-size: x-large; font-weight: bold"
      >
        <h3 class="font-weight-bold">Login</h3>
      </div>
      <div class="card-body">
        <form action="" id="login-form">
          <div class="mb-3">
            <label for="loginemail" class="form-label">Email : </label>
            <input
              type="email"
              class="form-control"
              id="loginemail"
              placeholder="Email"
              v-model="formLogin.email"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password : </label>
            <input
              type="password"
              class="form-control"
              id="loginpassword"
              placeholder="Password"
              v-model="formLogin.password"
            />
          </div>
          <div class="col-12 text-center">
            <Button name="Login" @buttonClick="login"></Button>
          </div>
          <br />
        </form>
        <div class="col-12 text-center">
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
            >google</GoogleLogin
          >
        </div>
        <div class="col-12 text-center mt-5">
          <p>
            you need register?
            <Button name="Register" @buttonClick="toRegister"></Button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Button from "../components/Button.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginPage",
  components: { GoogleLogin, Button },
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
      params: {
        client_id:
          "776607770607-a0idstfarqoqfk9626oh2vkrnvgk75d0.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    ...mapActions(["postLogin", "postGoogleLogin"]),
    toRegister: function () {
      this.$router.push({ name: "Register" });
    },
    async login() {
      await this.postLogin(this.formLogin);
      if (this.isLogin) {
        this.$router.push({ name: "Home" });
      }
    },
    onSuccess: function (googleUser) {
      let idToken = googleUser.getAuthResponse().id_token;
      this.postGoogleLogin(idToken);
    },
    onFailure: function () {
      console.log("error");
    },
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>

<style>
</style>