<template>
    <div class="container">
        <h3>Liste des fournisseurs</h3>
        <div v-if="error!=null">{{ error }}</div>
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
const axios = require('axios').default;

export default {
    name: 'SuppliersList',
    components: {
        Supplier,
    },
    data: () => {
        return {
            suppliers: [],
            loading: false,
            error: null,
        };
    },
    created: function loadSuppliers() {
        this.loading = true;
        axios
            .get('https://api-suppliers.herokuapp.com/api/suppliers')
            .then(loadedValue => {
                this.suppliers = loadedValue.data;
                this.loading = false;
            })
            .catch(rejectReason => {
                this.error = rejectReason;
            });
    },
};
</script>

<style scoped>
h3 {
    margin: auto;
    margin-top: 2em;
}
</style>
