<template>
    <div class="container">
        <h3>Liste des fournisseurs</h3>
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

export default {
    name: 'SuppliersList',
    components: {
        Supplier,
    },
    data: () => {
        return {
            suppliers: [
                {
                    id: 1,
                    name: 'George de la Jungle',
                    status: true,
                    checkedAt: new Date().toLocaleString('fr-FR'),
                },
                {
                    id: 2,
                    name: 'Toutânkhamon',
                    status: false,
                    checkedAt: new Date().toLocaleString('fr-FR'),
                },
                {
                    id: 3,
                    name: 'Simba',
                    status: true,
                    checkedAt: new Date().toLocaleString('fr-FR'),
                },
                {
                    id: 4,
                    name: "Bob l'éponge",
                    status: true,
                    checkedAt: new Date().toLocaleString('fr-FR'),
                },
                {
                    id: 5,
                    name: 'Dark Vador',
                    status: false,
                    checkedAt: new Date().toLocaleString('fr-FR'),
                },
            ],
        };
    },
};
</script>

<style>
h3 {
    margin: auto;
    margin-top: 1em;
}
</style>
