<script setup lang="ts">
    import { ref } from 'vue';
    import FileUploadSingle from '../../../components/File-Upload/Single.vue';

    const image = ref("");
</script>

<template>
    <Story title="File-Upload/Single">
        <FileUploadSingle
            v-model="image"
            name="image"
            @upload="val => image = val"
        />
        <img :src="image" />
    </Story>
</template>