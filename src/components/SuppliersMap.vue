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
                >
                    <l-popup>{{ supplier.message }} </l-popup>
                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

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
            center: [47.41322, -1.219482],
            bounds: null,
            suppliers: [
                {
                    id: 1,
                    latitude: -8.5080922,
                    longitude: 115.2639576,
                    message: `C'est George de la Jungle !`,
                },
                {
                    id: 2,
                    latitude: 30.0170039,
                    longitude: 31.2134508,
                    message: `C'est Toutânkhamon !`,
                },
                {
                    id: 3,
                    latitude: 14.35848617553711,
                    longitude: -3.5952553749084473,
                    message: `C'est Butters ! Non je rigole, c'est Simba.`,
                },
                {
                    id: 4,
                    latitude: -9.9999999,
                    longitude: 69.9999999,
                    message: `C'est Bob l'éponge carrée !`,
                },
                {
                    id: 5,
                    latitude: 44.3518895,
                    longitude: -73.0324936,
                    message: `Je suis ton pèèèèèèèère.`,
                },
            ],
        };
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

<style>
h3 {
    margin: auto;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}
</style>
