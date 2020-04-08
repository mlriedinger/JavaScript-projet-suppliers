<template>
    <div class="container">
        <h2>Liste des fournisseurs</h2>
        <div class="list"></div>
        <Supplier :name="name" :status="status" :checkedAt="checkedAt" />
    </div>
</template>

<script>
import Supplier from './Supplier.vue';

export default {
    name: 'SuppliersList',
    components: {
        Supplier,
    },
    data: () => {
        return {
            name: 'George de la Jungle',
            status: true,
            checkedAt: new Date().toLocaleString('fr-FR'),
        };
    },
};
</script>

<style>
h2 {
    margin: auto;
    margin-top: 1em;
}
</style>
