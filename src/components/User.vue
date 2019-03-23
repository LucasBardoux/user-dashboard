<template>
  <div container>
    <md-card>
      <md-card-header>
       <div class="md-title">Nutzer anlegen</div>
      </md-card-header>
      <md-card-content>
        <div inputs-container>
          <md-field>
            <label>Vorname</label>
            <md-input v-model="inputUser.firstname"></md-input>
          </md-field>
          <md-field>
            <label>Nachname</label>
            <md-input v-model="inputUser.lastname"></md-input>
          </md-field>
          <md-field>
            <label>Telefonnummer</label>
            <md-input v-model="inputUser.phone"></md-input>
          </md-field>
          <md-field>
            <label>E-Mail</label>
            <md-input v-model="inputUser.mail"></md-input>
          </md-field>
          <md-button class="md-raised md-primary" v-on:click="addUser()" >Nutzer hinzufügen</md-button>
        </div>
      </md-card-content>
    </md-card>

    <md-table>
      <md-table-row>
        <md-table-head>Vorname</md-table-head>
        <md-table-head>Nachname</md-table-head>
        <md-table-head>Telefonnummer</md-table-head>
        <md-table-head>E-Mail</md-table-head>
      </md-table-row>
      <md-table-row v-for="(user, index) in usersStore" :key="index">
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'user',
  data () {
    return {
      inputUser: {}
    }
  },
  methods: {
    ...mapMutations([
      'ADD_USER'
    ]),
    addUser () {
      this.ADD_USER({
        firstname: this.inputUser.firstname,
        lastname: this.inputUser.lastname,
        phone: this.inputUser.phone,
        mail: this.inputUser.mail
      });
    }
  },
  computed: {
    ...mapState([
      'usersStore'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
