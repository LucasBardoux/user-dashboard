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
          <md-divider></md-divider>
          <div grid-4-1>
            <md-field>
              <label for="roles">Rolle wählen</label>
              <md-select v-model="selectedRole" name="roles" id="roles">
                <md-option v-for="(role, index) in rolesStore" :key="index" v-bind:value="role.name">{{role.name}}</md-option>
              </md-select>
              <md-button v-on:click="addRoleToUser()">
                <md-icon>add</md-icon>
              </md-button>
            </md-field>
            <p v-for="(role, index) in inputUser.roles" :key="index">{{role.name}}</p>
          </div>
          <md-button class="md-raised md-accent" v-on:click="addUser()" >Nutzer hinzufügen</md-button>
        </div>
      </md-card-content>
    </md-card>

    <md-table v-if="usersStore.length !== 0">
      <md-table-row>
        <md-table-head>Vorname</md-table-head>
        <md-table-head>Nachname</md-table-head>
        <md-table-head>Telefonnummer</md-table-head>
        <md-table-head>E-Mail</md-table-head>
        <md-table-head>Rollen</md-table-head>
        <md-table-head options></md-table-head>
      </md-table-row>
      <md-table-row v-for="(user, index) in usersStore" :key="index">
        <md-table-cell>{{user.firstname}}</md-table-cell>
        <md-table-cell>{{user.lastname}}</md-table-cell>
        <md-table-cell>{{user.phone}}</md-table-cell>
        <md-table-cell>{{user.mail}}</md-table-cell>
        <md-table-cell>{{getRoles(user)}}</md-table-cell>
        <md-table-cell><md-button v-on:click="deleteUser(user)" class="md-icon-button"><md-icon>delete</md-icon></md-button>
      </md-table-cell>
      </md-table-row>
    </md-table>
    <Empty v-else></Empty>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import Empty from './Empty'

export default {
  name: 'user',
  components: {
    Empty
  },
  data () {
    return {
      selectedRole: {},
      inputUser: {
        roles: []
      }
    }
  },
  methods: {
    ...mapMutations([
      'ADD_USER',
      'REMOVE_USER'
    ]),
    addUser () {
      this.ADD_USER({
        firstname: this.inputUser.firstname,
        lastname: this.inputUser.lastname,
        phone: this.inputUser.phone,
        mail: this.inputUser.mail,
        roles: this.inputUser.roles
      });
      this.inputUser = {
        roles: []
      }
    },
    deleteUser(user){
      this.REMOVE_USER(user)
    },
    addRoleToUser() {
      if(this.inputUser.roles.find(e => e.name === this.selectedRole))
        return;
      const role = this.rolesStore.find(e => e.name === this.selectedRole);
      this.inputUser.roles.push(role);
    },
    getRoles(user) {
      return user.roles.map(e => e.name).join(";")
    }
  },
  computed: {
    ...mapState([
      'usersStore',
      'rolesStore'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
