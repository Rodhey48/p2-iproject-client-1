<template>
  <div>
    <Navbar></Navbar>
    <div class="container mt-5">
      <ButtonGroup></ButtonGroup>
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue";
import ButtonGroup from "../components/ButtonGroup.vue";

export default {
  name: "Rangking",
  components: { Navbar, Table, ButtonGroup },
};
</script>

<style>
</style>