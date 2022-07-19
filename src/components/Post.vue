<template>
    <div style="text-align: center;">
        <img @click="selectRoom(room.id)" :src="room.image" class="w-50 mt-80" data-bs-toggle="modal"
        data-bs-target="#myModal">
        <p>{{ room.content }}</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'post',
    props: {
        room: Object,
    },
    methods: {
        ...mapMutations(['selectRoom']),
        
    }
}
</script>

<style>
.mt-80 {
    margin-top: 80px;
}
</style>