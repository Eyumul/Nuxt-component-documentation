<script setup lang="ts">
import { FILE_UPLOAD_USAGE_TABLE_HEADER, SINGLE_FILE_UPLOAD_CODE, SINGLE_FILE_UPLOAD_OVERVIEW, SINGLE_FILE_UPLOAD_PROPS, SINGLE_FILE_UPLOAD_WITH_CROPPER_CODE, SINGLE_FILE_UPLOAD_WITH_CROPPER_OVERVIEW, SINGLE_FILE_UPLOAD_WITH_CROPPER_PROPS } from '~/composables/constants/strings/components/file.upload';

// Upload image variables
const image = ref(null)
const croppedImage = ref(null)
</script>

<template>
    <DocumentationDisplay title="Single file Upload" id="single_file_upload" :code="SINGLE_FILE_UPLOAD_CODE" :overview="SINGLE_FILE_UPLOAD_OVERVIEW">
        <template #preview>
            <img :src="image" v-if="image" class="p-10 border-2 border-gray-500 border-dashed" />
            <FileUploadSingle v-else model-value="" uploaded="" name="image" @upload="val => image = val" />
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FILE_UPLOAD_USAGE_TABLE_HEADER" , :items="SINGLE_FILE_UPLOAD_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
                <h1 class="text-xl font-semibold">Slots</h1>
                <ul class="flex flex-col gap-2 px-3 list-disc">
                    <li><span class="text-primary-700 dark:text-primary-400">button</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Single file Upload with cropper" id="single_file_upload_with_cropper"
        :code="SINGLE_FILE_UPLOAD_WITH_CROPPER_CODE"
        :overview="SINGLE_FILE_UPLOAD_WITH_CROPPER_OVERVIEW"
    >
        <template #preview>
            <img :src="croppedImage" v-if="croppedImage" class="p-10 border-2 border-gray-500 border-dashed" />
            <FileUploadSingleImageWithCropper v-else model-value="" uploaded="" name="image"
                @upload="val => croppedImage = val" />
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FILE_UPLOAD_USAGE_TABLE_HEADER" , :items="SINGLE_FILE_UPLOAD_WITH_CROPPER_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
                <h1 class="text-xl font-semibold">Slots</h1>
                <ul class="flex flex-col gap-2 px-3 list-disc">
                    <li><span class="text-primary-700 dark:text-primary-400">button</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
</template>