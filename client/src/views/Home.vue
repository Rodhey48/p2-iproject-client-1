<template>
  <div class="home mb-5">
    <Navbar></Navbar>
    <div class="mt-4">
      <h1>News Today</h1>
    </div>
    <div class="d-flex justify-content-center flex-wrap mt-5">
      <Card v-for="el in news" :key="el.id" :el="el"></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: { Navbar, Card },
  computed: {
    ...mapState(["news"]),
  },
  methods: {
    ...mapActions(["getNews"]),
    ...mapMutations(["ISLOGIN"]),
  },
  async created() {
    await this.getNews();
    if (localStorage.getItem("token")) {
      this.ISLOGIN();
    }
  },
};
</script>
