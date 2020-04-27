<template>
    <div class="container">
        <h3>Carte des fournisseurs</h3>
        <div style="height: 420px;">
            <l-map
                style="height: 100%; width: 100%"
                :zoom="zoom"
                :center="center"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
                @update:bounds="boundsUpdated"
            >
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker
                    v-for="supplier in suppliers"
                    :key="supplier.id"
                    :lat-lng="[supplier.latitude, supplier.longitude]"
                ></l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
const axios = require('axios').default;

export default {
    name: 'SuppliersMap',
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zoom: 2,
            center: [47.41322, -1.219482],
            bounds: null,
            suppliers: [],
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
    methods: {
        zoomUpdated(zoom) {
            this.zoom = zoom;
        },
        centerUpdated(center) {
            this.center = center;
        },
        boundsUpdated(bounds) {
            this.bounds = bounds;
        },
    },
};
</script>

<style scoped>
h3 {
    margin: auto;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}
</style>
