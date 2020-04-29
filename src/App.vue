<template>
    <div id="app" class="container">
        <img alt="Vue logo" src="./assets/logo.png" />
        <h1>Que voulez-vous faire?</h1>
        <nav class="row">
            <router-link to="/suppliers" class="col">
                <input
                    type="button"
                    value="Consulter la liste des fournisseurs"
                    class="btn btn-dark col btn-lg"
                />
            </router-link>

            <router-link to="/map" class="col">
                <input type="button" value="Voir la carte" class="btn btn-dark col btn-lg" />
            </router-link>
            <router-view></router-view>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'App',
    created: function() {
        this.$store.dispatch('getSuppliers'); // On fait un appel unique à l'API via le store, qui va alimenter les composants SuppliersMap et SuppliersList
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
h1 {
    margin-top: 1.5em;
}
.row {
    margin-top: 5em;
}
</style>
