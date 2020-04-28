<template>
    <div class="container">
        <h3>Carte des fournisseurs</h3>
        <div v-if="error != null">{{ error }}</div>
        <div v-if="loading">Requête en cours ...</div>
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
                >
                    <l-popup>
                        <p>{{ supplier.name }}</p>
                    </l-popup>
                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { latLng } from 'leaflet';
import { mapState } from 'vuex';

export default {
    name: 'SuppliersMap',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zoom: 2,
            center: latLng(47.41322, -1.219482),
            bounds: null,
        };
    },
    computed: mapState(['suppliers', 'loading', 'error']),
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
