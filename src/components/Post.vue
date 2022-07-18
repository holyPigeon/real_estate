<template>
    <div style="text-align: center;">
        <img :src="room.image" class="w-50 mt-80" data-bs-toggle="modal"
        data-bs-target="#myModal">
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
.mt-80 {
    margin-top: 80px;
}
</style>