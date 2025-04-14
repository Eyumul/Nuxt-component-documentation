<script setup lang="ts">
    import { ref } from 'vue';
    import FormTextarea from '../../../components/Form/Textarea.vue';

    const value = ref();
</script>

<template>
    <Story title="Form/Textarea">
        <FormTextarea
            v-model="value"
            name="textarea"
            placeholder="textarea"
            class="p-2 text-gray-800 focus:border-2 focus:border-gray-950"
        />
    </Story>
</template>