<script setup lang="ts">
    import { ref } from 'vue';
    import { DEFAULT_LIST_ITEMS } from '~/composables/constants/strings';
    import type { ListSelectItem } from '~/types/components';
    import FormListSearchSelect from '@/components/Form/List-Search-Select.vue';

    const listSearchSelect = ref<ListSelectItem | undefined>();
    const search = ref();

    const onSearch = (value: any) => {
        search.value = value;
    };
</script>

<template>  
    <Story title="Form/List-Search-Select">
        <FormListSearchSelect 
            :items="DEFAULT_LIST_ITEMS"
            :label="'List Search Select'"
            v-model="listSearchSelect"
            @search="onSearch"
            name="pricing"
            :multiple="true"
        />
    </Story>
</template>