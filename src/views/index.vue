<script setup lang="ts">
import { useAcceptStore } from '@/stores/accept';

import AcceptView from '@/views/AcceptView.vue';
import HomeView from './pages/HomeView.vue';

const acceptStore = useAcceptStore();
const isAccepted = ref(acceptStore.isAccepted);
const showHome = ref(false);

watch(() => acceptStore.isAccepted, (value) => {
    isAccepted.value = value;
    showHome.value = value;
});

</script>

<template>
    <Transition name="fade-out" >
        <AcceptView v-if="!isAccepted"/>
    </Transition>
    <Transition name="fade-in" >
        <HomeView v-if="showHome" />
    </Transition>
</template>