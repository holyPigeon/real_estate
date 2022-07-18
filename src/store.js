import { createStore } from 'vuex'
import roomList from './assets/roomList'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore({
    state() {
        return {
            menus: ['home', 'login', 'register'],
            roomList: roomList,
        }
    },
    mutations: {
        
    },
    computed: {

    },
    actions: {
        // morePost(context) {
        //     let count = 0;
        //     axios.get(`https://codingapple1.github.io/vue/more0.json`).then((json) => {
        //         context.commit('setMore', json.data);
        //         count++;
        //     }).catch(() => {
        //         console.log('error: no more url');
        //     })
        // },
    },
})

export default store;