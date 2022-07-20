<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content text-center">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalLabel">{{
                                $store.state.roomList[selectedRoomId].title
                        }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="$store.state.roomList[selectedRoomId].image" class="w-100 mb-4">
                        {{ $store.state.roomList[selectedRoomId].content }} <br>
                        {{ $store.state.roomList[selectedRoomId].price }} 원
                    </div>
                    <div class="modal-footer">
                        <div class="col text-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'modal',
    computed: {
        ...mapState(['selectedRoomId'])
    },
}
</script>

<style>
</style>