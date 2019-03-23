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
          <md-button class="md-raised md-primary" v-on:click="addRight()">Recht hinzufügen</md-button>
        </div>
      </md-card-content>
    </md-card>
    <md-table>
      <md-table-row>
        <md-table-head>Rechtname</md-table-head>
      </md-table-row>
      <md-table-row v-for="(right, index) in rightsStore" :key="index">
        <md-table-cell>{{right.name}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'rights',
  data () {
    return {
      inputRight: {}
    }
  },
  methods: {
    ...mapMutations([
      'ADD_RIGHT'
    ]),
    addRight () {
      this.ADD_RIGHT({
        name: this.inputRight.name
      });
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
