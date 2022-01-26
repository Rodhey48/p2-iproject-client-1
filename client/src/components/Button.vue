<template>
  <button type="submit" class="btn btn-primary" @click.prevent="buttonClick">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["name"],
  methods: {
    buttonClick: function () {
      this.$emit("buttonClick");
    },
  },
};
</script>

<style>
</style>