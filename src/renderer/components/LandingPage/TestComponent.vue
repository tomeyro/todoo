<template>
  <div>
      <h1>Testing {{ Counter.main }} {{ Counter2.main }} {{ Counter.name }}</h1>
      <button @click="show()">Show</button>
      <button @click="someAsyncTask()">+</button>
      <button @click="someAsyncTask()">-</button>
  </div>
</template>

<script>
  import store from '@/store'
  import { mapActions } from 'vuex'

  export default {
    name: 'test-component',
    data: () => store.state,
    methods: mapActions(['someAsyncTask', 'show'])
  }
</script>

<style>
  h1 {
    color: red;
  }
</style>