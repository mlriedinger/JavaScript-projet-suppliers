<template>
    <div class="hello container">
        <h1>{{ msg }}</h1>
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
        </form>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-dark {
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 2em;
}
</style>
