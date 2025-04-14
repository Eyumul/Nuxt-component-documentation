<script setup lang="ts">
    import { ref } from 'vue';
    import FormQuantity from '../../../components/Form/Quantity.vue';

    const quantity = ref(1);
</script>

<template>
    <Story title="Form/Quantity">
        <FormQuantity
            label="Quantity"
            v-model="quantity"
            :min="0"
            :max="10"
            name="quantity"
        />
    </Story>
</template>