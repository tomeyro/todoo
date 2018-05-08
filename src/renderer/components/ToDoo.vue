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
  </div>
</template>

<script>
  import store from '@/store'
  import { mapActions } from 'vuex'

  export default {
    name: 'to-doo',
    data: () => store.state.ToDoo,
    methods: mapActions([
      'startLoading'
    ]),
    created () { this.startLoading() }
  }
</script>

<style>
</style>