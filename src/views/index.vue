<script setup lang="ts">
import { useAcceptStore } from '@/stores/accept';

import AcceptView from '@/views/AcceptView.vue';
import HomeView from './HomeView.vue';

const acceptStore = useAcceptStore();
const isAccepted = ref(acceptStore.isAccepted);

watch(() => acceptStore.isAccepted, (value) => {
    isAccepted.value = value;
});

</script>

<template>
    <AcceptView v-if="!isAccepted"/>
    <HomeView v-if="isAccepted"/>    
</template>