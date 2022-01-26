<template>
  <div class="home mb-5">
    <Navbar></Navbar>
    <div class="mt-4">
      <h1>News Today</h1>
    </div>
    <div class="d-flex justify-content-center flex-wrap mt-5">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
export default {
  name: "Home",
  components: { Navbar, Card },
};
</script>
