<script setup lang="ts">
    import { ref } from "vue";
    import HProgress from "../../../components/H/Progress.vue";

    const isLoading = ref(true);
</script>

<template>
    <Story title="H/Progress">
        <HProgress v-model="isLoading" />
    </Story>
</template>