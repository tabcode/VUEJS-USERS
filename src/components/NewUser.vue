<template>
  <div class="continer p-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <img
            v-bind:src="`${src}`"
            alt="avatar"
            class="img-card-top"
            v-if="avatar"
            height="350"
          />
          <div class="card-header">New User</div>
          <form @submit="sendUser" method="post">
            <div class="card-body text-left">
              <div class="row">
                <div class="col">
                  Nombre
                  <input
                    type="text"
                    name="name"
                    class="form-control form-control-sm"
                    required
                    v-bind:value="`${name}`"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  Email
                  <input
                    type="email"
                    name="email"
                    class="form-control form-control-sm"
                    required
                    v-bind:value="`${email}`"
                  />
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button type="submit" class="btn btn-sm btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewUser",
  data() {
    return {
      name: "",
      email: "",
      avatar: false,
      src: null,
    };
  },
  async mounted() {
    let func = this.$route.params.func;
    if (func != "new") {
      const user = (
        await axios({
          method: "GET",
          url: `https://reqres.in/api/users/${func}`,
        })
      ).data.data;
      this.name = user.first_name + " " + user.last_name;
      this.email = user.email;
      this.avatar = true;
      this.src = user.avatar;
    }
  },
  methods: {
    sendUser: async function (e) {
      let func = this.$route.params.func;
      e.preventDefault();
      if (func == "new") {
        await axios({
          method: "post",
          url: "https://reqres.in/api/users",
          data: {
            name: this.name,
            email: this.email,
          },
        });
        this.$router.push("/");
      } else {
        console.log("update");
        this.$router.push("/");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
