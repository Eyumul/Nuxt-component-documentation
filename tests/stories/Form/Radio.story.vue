<script setup lang="ts">
    import { ref } from 'vue';
    import FormRadio from '../../../components/Form/Radio.vue';

    const radio = ref();
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
</script>

<template>
    <Story title="Form/Radio">
        <FormRadio
            label="Radio"
            v-model="radio"
            :items="options"
            name="radio"
        />
    </Story>
</template>