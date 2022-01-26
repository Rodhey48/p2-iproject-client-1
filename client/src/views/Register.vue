<template>
  <section
    class="section d-flex justify-content-center align-self-center"
    id="registerpage"
  >
    <div class="card col-4 align-self-center mt-5">
      <div
        class="card-header mx-auto bg-transparent"
        style="font-size: x-large; font-weight: bold"
      >
        <h3 class="font-weight-bold">Register</h3>
      </div>
      <div class="card-body">
        <form action="" id="form-register">
          <div class="mb-3">
            <label for="username-register" class="form-label"
              >Username :
            </label>
            <input
              type="text"
              class="form-control"
              id="username-register"
              placeholder="Username"
              v-model="formRegister.username"
            />
          </div>
          <div class="mb-3">
            <label for="email-register" class="form-label">Email : </label>
            <input
              type="email"
              class="form-control"
              id="email-register"
              placeholder="Email"
              v-model="formRegister.email"
            />
          </div>
          <div class="mb-3">
            <label for="password-register" class="form-label"
              >Password :
            </label>
            <input
              type="password"
              class="form-control"
              id="password-register"
              placeholder="Password"
              v-model="formRegister.password"
            />
          </div>
          <div class="mb-3">
            <label for="phoneNumber-register" class="form-label"
              >Phone Number :
            </label>
            <input
              type="text"
              class="form-control"
              id="phoneNumber-register"
              placeholder="Phone Number"
              v-model="formRegister.phoneNumber"
            />
          </div>
          <div class="col-12 mx-auto text-center mt-4">
            <Button name="Register" @buttonClick="register"></Button>
          </div>
        </form>
        <div class="col-12 text-center mt-5">
          <p>
            Do you have account?
            <Button name="Login" @buttonClick="toLogin"></Button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../components/Button.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Register",
  components: { Button },
  data() {
    return {
      formRegister: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  computed: {
    ...mapState(["isRegister"]),
  },
  methods: {
    ...mapActions(["postRegister"]),
    toLogin: function () {
      this.$router.push({ name: "Login" });
    },
    async register() {
      await this.postRegister(this.formRegister);
      if (this.isRegister) {
        this.$router.push({
          name: "Login",
        });
      }
    },
  },
};
</script>

<style>
</style>