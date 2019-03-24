<template>
  <div container>
    <md-card>
      <md-card-header>
       <div class="md-title">Recht anlegen</div>
      </md-card-header>
      <md-card-content>
        <div inputs-container>
          <md-field>
            <label>Name</label>
            <md-input v-model="inputRight.name"></md-input>
          </md-field>
          <md-button class="md-raised md-accent" v-on:click="addRight()">Recht hinzufügen</md-button>
        </div>
      </md-card-content>
    </md-card>
    <md-table v-if="rightsStore.length !== 0">
      <md-table-row>
        <md-table-head>Rechtname</md-table-head>
        <md-table-head options></md-table-head>
      </md-table-row>
      <md-table-row v-for="(right, index) in rightsStore" :key="index">
        <md-table-cell>{{right.name}}</md-table-cell>
        <md-table-cell><md-button v-on:click="deleteRight(right)" class="md-icon-button"><md-icon>delete</md-icon></md-button></md-table-cell>
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
  name: 'rights',
  components: {
    Empty
  },
  data () {
    return {
      inputRight: {}
    }
  },
  methods: {
    ...mapMutations([
      'ADD_RIGHT',
      'REMOVE_RIGHT'
    ]),
    addRight () {
      this.ADD_RIGHT({
        name: this.inputRight.name
      });
    },
    deleteRight(right) {
      this.REMOVE_RIGHT(right)
    }
  },
  computed: {
    ...mapState([
      'rightsStore'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
