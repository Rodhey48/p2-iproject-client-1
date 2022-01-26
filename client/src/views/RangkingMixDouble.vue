<template>
  <TableDouble :rangking="rangkingsXd"></TableDouble>
</template>

<script>
import TableDouble from "../components/TableDouble.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "RangkingMixDouble",
  components: { TableDouble },
  methods: {
    ...mapActions(["getRangkingsXd"]),
  },
  computed: {
    ...mapState(["rangkingsXd"]),
  },
  async created() {
    await this.getRangkingsXd();
  },
};
</script>

<style>
</style>
