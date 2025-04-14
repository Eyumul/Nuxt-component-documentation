<script setup lang="ts">
    import { ref } from 'vue';
    import FormDatePicker from '@/components/Form/Date-Picker.vue';

    const selectedDate = ref<Date>();
</script>

<template>
    <Story title="Form/Date-Picker">
        <FormDatePicker
           v-model="selectedDate"
          :disabled-dates="[new Date()]"
          @update:modelValue="(newDate: Date) => selectedDate = newDate"
        />
    </Story>
</template>