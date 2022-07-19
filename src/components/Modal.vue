<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalLabel">{{ $store.state.roomList[0].title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="$store.state.roomList[0].image" class="w-100 mb-4">
                        {{ $store.state.roomList[0].content }} <br>
                        {{ $store.state.roomList[0].price }} 원
                    </div>
                    <div class="modal-footer row">
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
export default {
    name: 'modal',
}
</script>

<style>
</style>