<template>
  <div>
    <Navbar></Navbar>
    <img alt="Vue logo" src="./assets/logo.png">

    <div v-for="(r, i) in $store.state.roomList" :key="i">
      <Post :room="r"/>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Post from './components/Post.vue'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Navbar,
    Post
  }
}
</script>

<style>
body {
  margin: 0 auto;
}
</style>
