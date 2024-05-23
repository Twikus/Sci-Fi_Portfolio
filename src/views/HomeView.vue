<script setup>
import Layout from '@/views/Layout.vue';

const show = ref(false);

setTimeout(() => {
    show.value = true;
}, 1000);
</script>

<template>
    <div class="body-container">
        <Layout v-if="show"/>
    </div>
</template>

<style lang="scss">
.body-container {
    margin: 0 40px;
}
</style>