<template>
  <div id="app">
    <NavBar />
    <router-view>
      <Users />
      <NewUser />
    </router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
export default {
  name: "App",
  components: {
    NavBar,
    Users,
    NewUser,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.user {
  color: black;
}
</style>
