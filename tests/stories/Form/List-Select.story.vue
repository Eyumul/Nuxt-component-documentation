<script setup lang="ts">
    import { ref } from 'vue';
    import { DEFAULT_LIST_ITEMS } from '../../../composables/constants/strings';
    import FormListSelect from '../../../components/Form/List-Select.vue';

    const listSelect = ref();
</script>

<template>
    <Story title="Form/List-Select">
        <FormListSelect 
            label="Select item"
            :items="DEFAULT_LIST_ITEMS"
            name="item"
            v-model:model-value="listSelect"
        >
            <template #label>
                <span>Test</span>
            </template>
        </FormListSelect>
    </Story>
</template>