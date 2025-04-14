<script setup lang="ts">
    import { ref } from 'vue';
    import FormSwitch from '../../../components/Form/Switch.vue';

    const isOn = ref();
</script>

<template>
    <Story title="Form/Switch">
        <FormSwitch
            v-model="isOn"
            name="switch"
        />
    </Story>
</template>