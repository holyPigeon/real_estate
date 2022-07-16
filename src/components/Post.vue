<template>
  <div>
    <img :src="room.image">
    <p>{{ room.content }}</p>
  </div>
</template>

<script>
export default {
    name: 'post',
    props: {
        room: Object,
    }
}
</script>

<style>

</style>