<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        default: null,
    },
    label: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["update:image"]);

const image = ref(props.image);
const addPicture = ref(false);

watch(
    () => image.value,
    (newVal) => {
        emit("update:image", newVal);
    },
);
</script>

<template>
    <ModalsModal v-model="addPicture">
        <template #Heading>
            <div class="flex">Add Picture</div>
        </template>
        <template #content>
            <div class="flex mt-8">
                <FileUploadSingleImageWithCropper
                    fileType="image"
                    text="Images"
                    name="croppedImage"
                    :limit="10"
                    v-model="image"
                    @upload="
                        (val: string) => {
                            image = val;
                            addPicture = false;
                        }
                    "
                ></FileUploadSingleImageWithCropper>
            </div>
        </template>
    </ModalsModal>

    <div class="flex gap-4 items-center w-full">
        <span
            @click="addPicture = true"
            class="flex justify-center items-center border-2 border-dashed cursor-pointer size-24 aspect-square overflow-hidden object-contain rounded-full border-primary-500"
        >
            <img v-if="image" :src="image" />
            <div v-else class="flex p-2 m-5 rounded-full bg-primary-50">
                <Icon name="lucide:plus" class="text-gray-600" />
            </div>
        </span>
        <p>{{ label }}</p>
    </div>
</template>
