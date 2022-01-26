<template>
  <b-card
    :title="el.title"
    :img-src="el.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2 mt-2 mr-2 ml-2"
    :footer="'Publish at ' + el.publishAt"
  >
    <b-card-text>
      {{ el.description }}
    </b-card-text>

    <b-button :href="el.url" variant="primary" target="_blank"
      >Go to {{ el.source }}</b-button
    >
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: ["el"],
};
</script>

<style>
</style>