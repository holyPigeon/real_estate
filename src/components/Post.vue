<template>
    <div>
        <div class="text-center p-5">
            <img @click="selectRoom(room.id)" :src="room.image" class="w-50" data-bs-toggle="modal"
                data-bs-target="#myModal">
            <p style="margin: 0px;">{{ room.content }}</p>
        </div>
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