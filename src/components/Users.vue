<template>
  <div class="container">
    <h2>List Users</h2>
    <div class="row">
      <div class="col-md-3" v-for="(info, data) in result" :key="data">
        <img :src="info.avatar" alt="..." class="card-img-top" height="50%" />
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              {{ info.first_name }} {{ info.last_name }}
            </div>
            <div class="card-text">
              {{ info.email }}
            </div>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-sm btn-secondary">
              <router-link :to="`/${info.id}`">Edit</router-link>
            </button>
            |
            <button
              type="button"
              class="btn btn-sm btn-danger"
              @click="deleteUser(info.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data: () => ({
    result: null,
  }),
  created() {
    axios.get("https://reqres.in/api/users?page=2").then((result) => {
      this.result = result.data.data;
    });
  },
  methods: {
    deleteUser: async function (id) {
      await axios({
        method: "DELETE",
        url: `https://reqres.in/api/users/${id}`,
      });
      window.location = "/";
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: white;
}
</style>