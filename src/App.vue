<template>
  <div>
    <Navbar></Navbar>
    <div v-if="page == 0">
      <Modal></Modal>
      <div class="text-center p-5 border-gray">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>

      <div v-for="(r, i) in $store.state.roomList" :key="i">
        <Post :room="r" class="border-gray" />
      </div>
    </div>
    <div v-if="page == 1">
      <Publish></Publish>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Post from './components/Post.vue'
import Modal from './components/Modal'
import Publish from './components/Publish.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['page']),
  },
  methods: {
  },
  components: {
    Navbar,
    Post,
    Modal,
    Publish
}
}
</script>

<style>
/* div {
  border: 1px solid black;
} */
.bg-gray {
  background-color: #d4d6dc;
}

.border-gray {
  border: 10px solid #d4d6dc;
  border-top: 5px solid #d4d6dc;
  border-bottom: 5px solid #d4d6dc;
}

body {
  margin: 0 auto;
}
</style>
