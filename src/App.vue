<template>
    <div id="app" class="container">
        <img alt="Vue logo" src="./assets/logo.png" />
        <h1>Que voulez-vous faire ?</h1>
        <form class="row">
            <input
                type="button"
                value="Consulter la liste des fournisseurs"
                class="btn btn-dark col"
                @click="onSuppliersListClick"
            />

            <input
                type="button"
                value="Voir la carte"
                class="btn btn-dark col"
                @click="onMapClick"
            />
            <SuppliersList></SuppliersList>
            <SuppliersMap></SuppliersMap>
        </form>
    </div>
</template>

<script>
import SuppliersList from './components/SuppliersList.vue';
import SuppliersMap from './components/SuppliersMap.vue';

export default {
    name: 'App',
    components: {
        SuppliersList,
        SuppliersMap,
    },
    methods: {
        onSuppliersListClick() {
            alert('Tu as cliqué sur la liste de fournisseurs !');
        },
        onMapClick() {
            alert('Tu as cliqué sur la map !');
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.btn-dark {
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 2em;
}
</style>
