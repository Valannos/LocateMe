<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md">
        <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Code postal</label>
            <input
              v-model="codePostal"
              type="text"
              class="form-control"
              id="code"
              aria-describedby="emailHelp"
              placeholder="Ex: 35000"
            >
            <small id="code" class="form-text text-muted">Saisssiez un code postal</small>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <town-list v-bind:townlist="list"></town-list>
    </div>
  </div>
</template>

<script>
import TownList from "./../components/TownList.vue"
import Axios from 'axios';


export default {
  data() {
    return {
      codePostal: "",
      list: []
    };
  },
  methods: {
    onSubmit: function() {
      let url = "https://geo.api.gouv.fr/communes/";
      Axios.get(url, {
          params: {
            codePostal: this.codePostal,
            fields: "nom",
            fields: "codesPostaux",
            format: "json"
          }
        })
        .then(res => {
          var results = res.data;
          if (results.length > 0) {
            results.forEach(element => {
              this.list.push(element);
            });
          }
          this.codePostal = "";
        });
    }
  },
  components: {
    TownList
  }
};
</script>
