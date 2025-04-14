<script setup lang="ts">
import { HEADLESS_USAGE_TABLE_HEADER } from '~/composables/constants/strings/components/headless';
import { MODAL_CODE, MODAL_OVERVIEW, MODAL_PROPS } from '~/composables/constants/strings/components/modal';

// Modal variable
const show = ref(false);
</script>

<template>
    <DocumentationDisplay title="Modal" id="modal" :code="MODAL_CODE" :overview="MODAL_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <button @click="show = true" class="border-2 rounded-[5px] border-gray-200 p-2 w-fit">Open
                    modal</button>
`                  </div>
            <ModalsModal v-model="show" wrapper-class="max-w-xl">
                <template #Heading>
                    <h1 class="text-2xl">Modal Heading</h1>
                </template>
                <template #content>
                    <p class="mt-10 text-lg">Modal Body</p>
                </template>
            </ModalsModal>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="MODAL_PROPS">
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
                    <li><span class="text-primary-700 dark:text-primary-400">heading</span> - </li>
                    <li><span class="text-primary-700 dark:text-primary-400">content</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
</template>