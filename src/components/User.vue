<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>Vorname</md-table-head>
        <md-table-head>Nachname</md-table-head>
        <md-table-head>Telefonnummer</md-table-head>
        <md-table-head>E-Mail</md-table-head>
      </md-table-row>
      <md-table-row v-for="user in users" :key="user.id">
        <md-table-cell>{{user.firstname}}</md-table-cell>
        <md-table-cell>{{user.lastname}}</md-table-cell>
        <md-table-cell>{{user.phone}}</md-table-cell>
        <md-table-cell>{{user.mail}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user',
  data () {
    return {
      users: null
    }
  },
  methods: {
    init () {
      axios
        .get(
          'https://my-json-server.typicode.com/LucasBardoux/user-dashboard/user'
        )
        .then(response => {
          this.users = response.data
        })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
