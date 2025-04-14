<script setup lang="ts">
    import { ref } from 'vue';
    import { DROPDOWN_ITEMS } from '~/composables/constants/strings';
    import FormDropdown from '@/components/Form/Dropdown.vue';

    const item = ref<string>('');
</script>

<template>
    <Story title="Form/Dropdown">
        <FormDropdown 
            label="Select item"
            :items="DROPDOWN_ITEMS"
            @update:model-value="(val) => (item = val)"
        />
    </Story>
</template>