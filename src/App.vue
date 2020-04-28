<template>
    <div id="app" class="container">
        <img alt="Vue logo" src="./assets/logo.png" />
        <h1>Que voulez-vous faire?</h1>
        <nav class="row">
            <router-link to="/suppliers" class="col">
                <input
                    type="button"
                    value="Consulter la liste des fournisseurs"
                    class="btn btn-dark col"
                />
            </router-link>

            <router-link to="/map" class="col">
                <input
                    type="button"
                    value="Voir la carte"
                    class="btn btn-dark col"
                />
            </router-link>
            <router-view></router-view>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'App',
    created: function() {
        this.$store.dispatch('getSuppliers');
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

.row {
    margin-top: 2em;
}
</style>
