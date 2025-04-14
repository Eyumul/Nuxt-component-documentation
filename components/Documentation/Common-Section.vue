<script setup lang="ts">
    import { 
        ACCORDION_CODE,
        ACCORDION_DATA, 
        ACCORDION_OVERVIEW, 
        ACCORDION_PROPS, 
        COMMON_USAGE_TABLE_HEADER, 
        DRAWER_CODE, 
        DRAWER_OVERVIEW, 
        DRAWER_PROPS,
        STEPPER_CODE,
        STEPPER_OVERVIEW,
        STEPPER_PROPS
    } from '~/composables/constants/strings/components/common';

    const drawerOpen = ref(false);
</script>

<template>
    <DocumentationDisplay title="Accordion" id="accordion"
        :overview="ACCORDION_OVERVIEW"
        :code="ACCORDION_CODE">
        <template #preview>
            <div class="flex justify-center">
                <CommonAccordion :items="ACCORDION_DATA" :collabsable="true" class="w-[50%] xl:w-1/4">
                    <template #content="{ item }">
                        <ul v-for="(i, index) in item.items" :key="index"
                            class="flex flex-col justify-start gap-2 text-sm text-black">
                            <li>{{ i }}</li>
                        </ul>
                    </template>
                </CommonAccordion>
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="COMMON_USAGE_TABLE_HEADER" , :items="ACCORDION_PROPS">
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
                    <li><span class="text-primary-700 dark:text-primary-400">content</span> - The content of the accordion. As shown in the example code it helps us to get the value of items we have passed as prop and render child components as much as we like.</li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Drawer" id="drawer" :code="DRAWER_CODE" :overview="DRAWER_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <button class="w-max border-2 text-sm p-4 rounded-md" @click="drawerOpen = true">Open
                    Drawer</button>
                <CommonDrawer wrapperClass="top-0 h-screen bg-white p-6 shadow-lg w-[50%] lg:max-w-[40svw]"
                    :model-value="drawerOpen" direction="right" :auto-close="true"
                    @update:modelValue="(val: boolean) => drawerOpen = val">
                    <template #body>
                        <div>Drawer</div>
                    </template>
                </CommonDrawer>
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="COMMON_USAGE_TABLE_HEADER" , :items="DRAWER_PROPS">
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
                    <li><span class="text-primary-700 dark:text-primary-400">body</span> - The content of the drawer.</li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Stepper" id="stepper" :code="STEPPER_CODE" :overview="STEPPER_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <CommonStepper :step="2" completed-indicator-class="bg-blue-500 text-white rounded-full"
                    active-indicator-class="bg-gray-300 rounded-full"
                    completed-divider-indicator="bg-blue-500 h-2" completed-hint-class="text-blue-500" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="COMMON_USAGE_TABLE_HEADER" , :items="STEPPER_PROPS">
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
            </div>
        </template>
    </DocumentationDisplay>
</template>