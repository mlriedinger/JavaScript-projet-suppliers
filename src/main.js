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
                .get('https://api-suppliers.herokuapp.com/api/suppliers') // Appel à l'API, qui renvoit une promise
                .then(loadedValue => {
                    // Si la promise est resolved
                    commit('SET_SUPPLIERS', loadedValue.data); // Appel au mutateur qui modifie l'état de "suppliers" avec les données de l'API en paramètre
                })
                .catch(rejectReason => {
                    // Si la promise est rejected
                    commit('SET_ERROR', rejectReason); // Appel au mutateur qui gère l'état de "error" avec la valeur de rejet
                });
        },
    },
    mutations: {
        // Permettent de modifier l'état de "suppliers", "loading" et "error"
        SET_SUPPLIERS(state, suppliers) {
            state.suppliers = suppliers; // Modifie l'état de "suppliers" avec les données de l'API
            state.loading = false; // Modifie l'état de "loading" à false puisque le chargement des données est terminé
        },
        SET_ERROR(state, error) {
            state.loading = false; // Idem au dessus
            state.error = error; // Modifie l'état de "error" si l'appel à l'API n'a pas fonctionné
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
