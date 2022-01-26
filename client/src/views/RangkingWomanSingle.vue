<template>
  <Table :rangking="rangkingsWs"></Table>
</template>

<script>
import Table from "../components/Table.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "RangkingManSingle",
  components: { Table },
  methods: {
    ...mapActions(["getRangkingsWs"]),
  },
  computed: {
    ...mapState(["rangkingsWs"]),
  },
  async created() {
    await this.getRangkingsWs();
  },
};
</script>

<style>
</style>