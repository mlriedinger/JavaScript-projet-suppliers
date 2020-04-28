<template>
    <div class="container">
        <h3>Liste des fournisseurs</h3>
        <div v-if="error != null">{{ error }}</div>
        <div v-if="loading">Requête en cours ...</div>
        <div class="text-dark text-justify" style="margin-top:2em;">
            Voici une liste de fournisseurs .. plutôt douteux. Tout ce que vous pourrez lire par la suite pourrait endommager gravement votre santé mais aussi celle de vos proches (évidemment).
        </div>
        <div class="text-dark text-justify" style="margin-top:2em;">
            Vous êtes toujours là ? <br/>Ye be warned .. Mouahaha (rire du Dr. Denfer)
        </div>
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
