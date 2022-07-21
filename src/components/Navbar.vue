<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-vue-dark">
            <div class="container-fluid">
                <a @click="goToPage(0)" class="navbar-brand" style="color: #41b883;" href="">Vuedongsan</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a @click="goToPage(1)" class="nav-link" style="color: #41b883;" href="#">New Room</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" style="color: #41b883;" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Support
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-light" style="color: #41b883; border-color: #41b883;" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'navbar',
    methods: {
        ...mapMutations(['goToPage']),
    }
}
</script>

<style>
    .bg-vue-dark {
        background-color: #35495E;
    }
    .btn-outline-vue {
        color: #41b883;
        border-color: #41b883;
    }
    .text-vue {
        color: #41b883;
    }
</style>