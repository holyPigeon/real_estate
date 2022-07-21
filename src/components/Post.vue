<template>
    <div>
        <div class="text-center p-5">
            <img @click="selectRoom(room.id)" :src="room.image" class="w-50 shadow-img" data-bs-toggle="modal"
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

.shadow-img {
transition: .1s ease;
}

.shadow-img:hover{
box-shadow:
1px 1px #373737,
2px 2px #373737,
3px 3px #373737,
4px 4px #373737,
5px 5px #373737,
6px 6px #373737;
-webkit-transform: translateX(-3px);
transform: translateX(-3px);
transition: .1s ease;
}
</style>