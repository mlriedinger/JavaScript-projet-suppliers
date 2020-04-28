import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import 'leaflet/dist/leaflet.css';
import Vuex from 'vuex';

const axios = require('axios').default;

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

// Création d'un store Vuex

const store = new Vuex.Store({
    state: {
        suppliers: [],
        loading: true,
        error: null,
    },
    actions: {
        getSuppliers({ commit }) {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(loadedValue => {
                    commit('SET_SUPPLIERS', loadedValue.data);
                })
                .catch(rejectReason => {
                    commit('SET_ERROR', rejectReason);
                });
        },
    },
    mutations: {
        SET_SUPPLIERS(state, suppliers) {
            state.suppliers = suppliers;
            state.loading = false;
        },
        SET_ERROR(state, error) {
            state.loading = false;
            state.error = error;
        },
    },
});

// Création de la vue (attention à bien appeler la vue APRES le store !)

new Vue({
    router,
    store,
    render: h => h(App),
    computed: {
        suppliers: function() {
            return store.state.suppliers;
        },
    },
}).$mount('#app');

// Code pour afficher les marqueurs sur la carte (stackoverflow)

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl;
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
