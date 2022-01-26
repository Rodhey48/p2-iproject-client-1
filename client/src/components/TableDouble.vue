<template>
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Player 1</th>
        <th scope="col">Player 2</th>
        <th scope="col">Country</th>
        <th scope="col">Points</th>
        <th scope="col">Tournaments</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="el in rangking" :key="el.member_id">
        <th scope="row">{{ el.rank }}</th>
        <td style="color: white">{{ el.player1 }}</td>
        <td style="color: white">{{ el.player2 }}</td>
        <td style="color: white">{{ el.country }}</td>
        <td style="color: red">{{ el.points }}</td>
        <td style="color: white">{{ el.tournaments }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableDouble",
  props: ["rangking"],
};
</script>

<style>
</style>