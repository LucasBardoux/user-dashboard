<template>
  <div container>
    <md-card>
      <md-card-header>
       <div class="md-title">Rolle anlegen</div>
      </md-card-header>
      <md-card-content>
        <div inputs-container>
          <md-field>
            <label>Name</label>
            <md-input v-model="inputRole.name"></md-input>
          </md-field>
           <md-divider></md-divider>
          <div grid-4-1>
            <md-field>
              <label for="rights">Rechte wählen</label>
              <md-select v-model="selectedRight" name="rights" id="rights">
                <md-option v-for="(right, index) in rightsStore" :key="index" v-bind:value="right.name">{{right.name}}</md-option>
              </md-select>
              <md-button v-on:click="addRightToRole()">
                <md-icon>add</md-icon>
              </md-button>
            </md-field>
            <p v-for="(role, index) in inputRole.rights" :key="index">{{role.name}}</p>
          </div>
          <md-button class="md-raised md-primary" v-on:click="addRole()" >Rolle hinzufügen</md-button>
        </div>
      </md-card-content>
    </md-card>
    <md-table v-if="rolesStore.length !== 0">
      <md-table-row>
        <md-table-head>Rollenname</md-table-head>
        <md-table-head>Rechte</md-table-head>
        <md-table-head options></md-table-head>
      </md-table-row>
      <md-table-row v-for="(role, index) in rolesStore" :key="index">
        <md-table-cell>{{role.name}}</md-table-cell>
        <md-table-cell>{{getRights(role)}}</md-table-cell>
        <md-table-cell><md-button v-on:click="deleteRole(role)" class="md-icon-button"><md-icon>delete</md-icon></md-button></md-table-cell>
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
  name: 'roles',
  components: {
    Empty
  },
  data () {
    return {
      selectedRight: {},
      inputRole: {
        rights: []
      }
    }
  },
  methods: {
    ...mapMutations([
      'ADD_ROLE',
      'REMOVE_ROLE'
    ]),
    addRole() {
      this.ADD_ROLE({
        name: this.inputRole.name,
        rights: this.inputRole.rights
      });
    },
    deleteRole(role) {
      this.REMOVE_ROLE(role)
    },
    addRightToRole() {
      if(this.inputRole.rights.find(e => e.name === this.selectedRight))
        return;
      const right = this.rightsStore.find(e => e.name === this.selectedRight);
      this.inputRole.rights.push(right);
    },
    getRights(role) {
      return role.rights.map(e => e.name).join(";")
    }
  },
  computed: {
    ...mapState([
      'rolesStore',
      'rightsStore'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
