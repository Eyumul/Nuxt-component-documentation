<script setup lang="ts">
    import { ref } from 'vue';
    import { CHOICES } from '~/composables/constants/strings';
    import FormCheckbox from '@/components/Form/Checkbox.vue';

    const checkedItems = ref<any[]>([]);

    const check = (value: any) => {
        if (checkedItems.value.indexOf(value) === -1) {
        checkedItems.value.push(value);
        } else {
        checkedItems.value = checkedItems.value.filter((item) => item !== value);
        }
    };
</script>

<template>
    <Story title="Form/Checkbox">
        <FormCheckbox   
          v-for="(choice, index) in CHOICES"
          :key="index"
          :modelValue="checkedItems"
          :data="choice"
          class="text-primary-500 focus:outline-none focus:ring-0"
          :hideDetails="index === 0"
          @update:modelValue="(_: String[]) => check(choice.value)" />
    </Story>
</template>