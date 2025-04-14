<script setup lang="ts">
    import { ref } from 'vue';
    import FormOTPField from '../../../components/Form/OTP-Field.vue';

    const otp = ref('');
</script>

<template>
    <Story title="Form/OTP-Field">
        <FormOTPField 
            v-model="otp"
            :fields="6"
            class="p-2 focus:border-2 focus:border-gray-950"
        />
    </Story>
</template>