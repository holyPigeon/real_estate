<template>
  <div>
    <Navbar></Navbar>
    <div style="text-align: center;">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <div v-for="(r, i) in $store.state.roomList" :key="i">
      <Post :room="r" />
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
/* div {
  border: 1px solid black;
} */

body {
  margin: 0 auto;
}
</style>
