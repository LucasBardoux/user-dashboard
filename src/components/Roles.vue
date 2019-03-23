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
          <md-button class="md-raised md-primary" v-on:click="addRole()" >Rolle hinzufügen</md-button>
        </div>
      </md-card-content>
    </md-card>
    <md-table>
      <md-table-row>
        <md-table-head>Rollenname</md-table-head>
      </md-table-row>
      <md-table-row v-for="(role, index) in rolesStore" :key="index">
        <md-table-cell>{{role.name}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'roles',
  data () {
    return {
      inputRole: {}
    }
  },
  methods: {
    ...mapMutations([
      'ADD_ROLE'
    ]),
    addRole () {
      this.ADD_ROLE({
        name: this.inputRole.name
      });
    }
  },
  computed: {
    ...mapState([
      'rolesStore'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
