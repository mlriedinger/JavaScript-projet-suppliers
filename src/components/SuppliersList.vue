<template>
    <div class="container">
        <h3>Liste des fournisseurs</h3>
        <div v-if="error != null">{{ error }}</div>
        <div v-if="loading">Requête en cours ...</div>
        <Supplier
            v-for="supplier in suppliers"
            :key="supplier.id"
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"
        />
    </div>
</template>

<script>
import Supplier from './Supplier.vue';
import { mapState } from 'vuex';

export default {
    name: 'SuppliersList',
    components: {
        Supplier,
    },
    computed: mapState(['suppliers', 'loading', 'error']),
};
</script>

<style scoped>
h3 {
    margin: auto;
    margin-top: 2em;
}
</style>
