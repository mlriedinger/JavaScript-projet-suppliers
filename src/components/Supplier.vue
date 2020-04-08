<template>
    <div class="container">
        <h3>Fournisseur : {{ name }}</h3>
        <h5 v-if="status" style="color:#339966">En stock</h5>
        <h5 v-else style="color:red">Rupture de stock</h5>
        <h6>Stock relevé le : {{ checkedAt }}</h6>
    </div>
</template>

<script>
export default {
    name: 'Supplier',
    data: () => {
        return {
            name: 'George de la Jungle',
            status: false, // est ce qu'il y a du stock
            checkedAt: new Date().toLocaleString('fr-FR'), // date de la dernière mise à jour du stock
        };
    },
};
</script>

<style scoped>
.container {
    box-shadow: 5px 5px 5px #999999;
    border-radius: 1em;
    margin-top: 2em;
    padding: 1em;
}
</style>
