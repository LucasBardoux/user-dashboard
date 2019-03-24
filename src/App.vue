<template>
  <div id="app">
    <!-- <md-toolbar> -->
    <md-tabs md-sync-route md-alignment="centered">
      <md-tab id="tab-home" md-label="Nutzer" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="Rollen" to="/roles"></md-tab>
      <md-tab id="tab-posts" md-label="Rechte" to="/rights"></md-tab>
    </md-tabs>
    <md-divider></md-divider>
    <!-- </md-toolbar> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './styles/styles.scss';
</style>
