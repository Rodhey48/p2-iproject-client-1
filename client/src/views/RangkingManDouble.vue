<template>
  <TableDouble :rangking="rangkingsMd"></TableDouble>
</template>

<script>
import TableDouble from "../components/TableDouble.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "RangkingManDouble",
  components: { TableDouble },
  methods: {
    ...mapActions(["getRangkingsMd"]),
  },
  computed: {
    ...mapState(["rangkingsMd"]),
  },
  async created() {
    await this.getRangkingsMd();
  },
};
</script>

<style>
</style>
