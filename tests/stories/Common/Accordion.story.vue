<script setup lang="ts">
    import { DATA } from '~/composables/constants/strings';
    import CommonAccordion from '@/components/Common/Accordion.vue';
</script>

<template>
    <Story title="Common/Accordion">
        <CommonAccordion :items="DATA" :collabsable="true" class="w-[50%] xl:w-1/4">
            <template #content="{ item }">
                <ul
                    v-for="(i, index) in item.items"
                    :key="index"
                    class="flex flex-col justify-start gap-2 text-sm"
                >
                    <li>{{ i }}</li>
                </ul>
            </template>
        </CommonAccordion>
    </Story>
</template>