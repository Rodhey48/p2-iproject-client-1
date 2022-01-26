<template>
  <div>
    <Navbar></Navbar>
    <div class="container mt-5">
      <ButtonGroup></ButtonGroup>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ButtonGroup from "../components/ButtonGroup.vue";

export default {
  name: "Rangking",
  components: { Navbar, ButtonGroup },
};
</script>

<style>
</style>