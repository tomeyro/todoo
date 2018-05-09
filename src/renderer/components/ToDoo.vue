<template>
  <div id="todoo">
    ToDoo<br>
    <template v-if="uid">
      Yes user
    </template>
    <template v-else>
      No user
    </template>
    <div v-if="loading">
      Loading
    </div>
    <button @click="show()">Show</button>
    <test-component></test-component>
  </div>
</template>

<script>
  import store from '@/store'
  import { mapActions } from 'vuex'
  import TestComponent from './ToDoo/TestComponent'

  export default {
    name: 'to-doo',
    components: {
      TestComponent
    },
    data: () => store.state.ToDoo,
    methods: Object.assign({
      show () {
        console.log(store.commit, store.state)
        store.commit('SET_USER', 2)
      }
    }, mapActions([
      'startLoading'
    ])),
    created () { this.startLoading() }
  }
</script>

<style>
</style>