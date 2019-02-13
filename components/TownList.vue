<script>
export default {
  name: "town-list",
  props: ["townlist"]
};
</script>


<template>
  <table v-show="townlist.length > 0" class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="town in townlist" :key="town.code">
          <th>{{town.code}}</th>
          <td>{{town.nom}}</td>
      </tr>
    </tbody>
  </table>
</template>
