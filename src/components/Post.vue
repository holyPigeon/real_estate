<template>
    <div style="text-align: center;">
        <img :src="room.image" class="w-75 mt-80">
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
.room-img {
    width: 70%;
    margin-top: 40px;
}

.mt-80 {
    margin-top: 80px;
}
</style>