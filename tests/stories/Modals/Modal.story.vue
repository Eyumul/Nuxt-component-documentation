<script setup lang="ts">
    import { ref } from "vue";
    import ModalsModal from "@/components/Modals/Modal.vue";

    const show = ref(false);
</script>

<template>
    <Story title="Modals/Modal">
        <button @click="show = true">Open modal</button>
        <ModalsModal v-model="show" wrapper-class="max-w-xl">
            <template #Heading>
                <h1 class="text-2xl">Modal Heading</h1>
            </template>
            <template #content>
                <p class="mt-10 text-lg">Modal Body</p>
            </template>
        </ModalsModal>
    </Story>
</template>