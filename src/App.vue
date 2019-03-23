<template>
  <div id="app">
    <md-tabs md-sync-route md-alignment="centered">
      <md-tab id="tab-home" md-label="User" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="Roles" to="/roles"></md-tab>
      <md-tab id="tab-posts" md-label="Rights" to="/rights"></md-tab>
    </md-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
