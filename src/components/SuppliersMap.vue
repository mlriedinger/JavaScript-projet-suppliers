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
                <l-marker :lat-lng="markerLatLng"></l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
// import L from 'leaflet';
// import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

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
            markerLatLng: [47.31322, -1.319482],
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
