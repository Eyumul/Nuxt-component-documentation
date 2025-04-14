<script setup lang="ts">
    import { ref } from "vue";
    import type { Time } from "~/types/components";
    import FormTimePicker from "../../../components/Form/Time-Picker.vue";

    const time = ref<Time>();
</script>

<template>
    <Story title="Form/Time-Picker">
        <FormTimePicker v-model="time!" label="Add Time" />
    </Story>
</template>