<script setup lang="ts">
    defineProps({
        name: String,
        code: String
    });

    const showCode = ref(false);
</script>

<template>
    <div class="flex flex-col justify-start p-4 gap-4">
        <span class="text-xl dark:text-white">{{ name }}</span>
        <slot name="component" />
        <button class="text-sm text-blue-500 w-max border-none focus:outline-none focus:ring-0" @click="showCode = !showCode">{{showCode ? 'Hide code' : 'Show code'}}</button>
        <DocumentationCodeBlock v-if="showCode" :code="code" />
    </div>
</template>