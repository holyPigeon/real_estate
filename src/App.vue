<template>
  <div>
    <Navbar></Navbar>
    <!-- Button trigger modal -->
    <Modal></Modal>
    <div class="text-center mt-5">
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
import Modal from './components/Modal'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    modalShow() {
    }
  },
  components: {
    Navbar,
    Post,
    Modal
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
