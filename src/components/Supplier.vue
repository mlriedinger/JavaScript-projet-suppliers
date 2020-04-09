<template>
    <div class="container">
        <h3>{{ name }}</h3>
        <h5 v-if="status" style="color:#339966">En stock</h5>
        <h5 v-else style="color:red">Rupture de stock</h5>
        <h6>Stock relevé le : {{ checkedAt }}</h6>
    </div>
</template>

<script>
export default {
    name: 'Supplier',
    props: {
        name: String,
        status: Boolean,
        checkedAt: Date,
    },
};
</script>

<style scoped>
.container {
    box-shadow: 5px 5px 5px #999999;
    border-radius: 1em;
    margin-top: 2em;
    padding: 1em;
    border: 0.5px solid #999999;
}
</style>
