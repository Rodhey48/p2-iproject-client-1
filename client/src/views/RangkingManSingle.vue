<template>
  <Table :rangking="rangkingsMs"></Table>
</template>

<script>
import Table from "../components/Table.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "RangkingManSingle",
  components: { Table },
  methods: {
    ...mapActions(["getRangkingsMs"]),
  },
  computed: {
    ...mapState(["rangkingsMs"]),
  },
  async created() {
    await this.getRangkingsMs();
  },
};
</script>

<style>
</style>