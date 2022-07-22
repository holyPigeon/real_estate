<template>
    <div>
        <div class="text-center p-5">
            <img @click="selectRoom(room.id)" :src="room.image" class="w-50 fadein-img" data-bs-toggle="modal"
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
        ...mapMutations(['selectRoom', 'popImage']),

    }
}
</script>

<style>
.mt-80 {
    margin-top: 80px;
}

.fadein-img{
opacity:1;
transition: 0.2s ease;
}

.fadein-img:hover{
opacity:0.7;
transition: 0.2s ease;
}
</style>