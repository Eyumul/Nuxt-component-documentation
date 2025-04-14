<script setup lang="ts">
    import { ref } from 'vue';
    import FileUploadSingleImageWithCropper from '../../../components/File-Upload/Single-Image-With-Cropper.vue';

    const croppedImage = ref("");
</script>

<template>
    <Story title="File-Upload/Single-With-Cropper">
        <FileUploadSingleImageWithCropper
            v-model="croppedImage"
            name="image"
            @upload="(val: string) => croppedImage = val"
        />
        <img :src="croppedImage" />
    </Story>
</template>