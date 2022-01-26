<template>
  <TableDouble :rangking="rangkingsWd"></TableDouble>
</template>

<script>
import TableDouble from "../components/TableDouble.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "RangkingWomanDouble",
  components: { TableDouble },
  methods: {
    ...mapActions(["getRangkingsWd"]),
  },
  computed: {
    ...mapState(["rangkingsWd"]),
  },
  async created() {
    await this.getRangkingsWd();
  },
};
</script>

<style>
</style>
