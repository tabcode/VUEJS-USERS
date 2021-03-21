<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="text-white">Users</router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-link text-white" to="/" exact-path>List users</router-link>
          <router-link class="nav-link text-white" :to="`/new`" exact-path>Create user</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar"
};
</script>