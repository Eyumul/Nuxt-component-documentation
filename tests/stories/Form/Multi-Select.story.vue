<script setup lang="ts">
    import { DEFAULT_LIST_ITEMS } from '~/composables/constants/strings';
    import type { ChipItem } from '~/types/components';
    import FormMultiSelectList from '../../../components/Form/Multi-Select.vue';

    const items = ref<ChipItem[]>([]);
</script>

<template>
    <Story title="Form/Multi-Select">
        <FormMultiSelectList 
            :items="DEFAULT_LIST_ITEMS" 
            name="multi-select" 
            @update:selectedChips="(chips) => items = chips"
        />
    </Story>
</template>