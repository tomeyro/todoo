<template>
  <div>
      <h1>{{ uid }}</h1>
      <img src="@/assets/logo.png" height="100">
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'test-component',
    data: () => store.state.ToDoo,
    methods: {}
  }
</script>

<style>
  h1 {
    color: red;
  }
</style>