<script setup lang="ts">
    import { ref } from 'vue';
    import FormProfilePicture from '../../../components/Form/Profile-Picture.vue';

    const image = ref('');
</script>

<template>
    <Story title="Form/Profile-Picture">
        <FormProfilePicture
            label="Upload Profile"
            v-model:image="image"
        />
    </Story>
</template>