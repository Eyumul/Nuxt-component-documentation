<script setup lang="ts">
import { BREADCRUMB_CODE, BREADCRUMB_DATA, BREADCRUMB_OVERVIEW, BREADCRUMB_PROPS, CHIP_CODE, CHIP_OVERVIEW, CHIP_PROPS, HEADLESS_USAGE_TABLE_HEADER, NOTIFICATION_CODE, NOTIFICATION_OVERVIEW, NOTIFICATION_PROPS, PAGINATE_CODE, PAGINATE_OVERVIEW, PAGINATE_PROPS, PROGRESS_CODE, PROGRESS_OVERVIEW, PROGRESS_PROPS, TAB_CODE, TAB_OVERVIEW, TAB_PROPS, TABLE_CODE, TABLE_DATA, TABLE_HEADER, TABLE_OVERVIEW, TABLE_PROPS, TABS_DATA } from '~/composables/constants/strings/components/headless';

// Paginate variables
const limit = ref(10);
const offset = ref(0);
const currentPage = ref(1);
const totalCount = ref(50);

// Progress variable
const isLoading = ref(false)

// Notification
import useNotify from "@/use/notify";
const { notify } = useNotify();

function notifyMe() {
    notify({ description: "Notify!" });
}
</script>

<template>
    <DocumentationDisplay title="Table" id="table" :code="TABLE_CODE" :overview="TABLE_OVERVIEW" >
        <template #preview>
            <HTable :headers="TABLE_HEADER" , :items="TABLE_DATA">
                <template #row="{ headers, item }">
                    <td v-for="header in headers" :key="header.value">
                        <HVRow :item="item" :header="header">
                            <template #name="{ item }">
                                {{ item.data.user.full_name }}
                            </template>
                            <template #email="{ item }">
                                {{ item.data.user.email }}
                            </template>
                            <template #date="{ item }">
                                {{ item.data.pickup_date }}
                            </template>
                            <template #price="{ item }">
                                {{ item.data.price }}
                            </template>
                        </HVRow>
                    </td>
                </template>
            </HTable>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="TABLE_PROPS">
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
                    <li><span class="text-primary-700 dark:text-primary-400">row</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Pagination" id="pagination" :code="PAGINATE_CODE" :overview="PAGINATE_OVERVIEW" >
        <template #preview>
            <div class="w-full flex flex-wrap justify-around mb-6">
                <FormQuantity v-model="limit" name="limit" label="Items Per Page"
                    labelClass="text-black text-center" />
                <div class="flex flex-col">
                    <h1>Current Page</h1>
                    <p class="text-center my-2 text-xl">
                        {{ currentPage }}
                    </p>
                </div>
                <FormQuantity v-model="totalCount" name="limit" label="Total Data"
                    labelClass="text-black text-center" />
            </div>
            <HPaginate class="w-full" v-model="currentPage" v-model:offset="offset" :items-per-page="limit"
                :total-data="totalCount" />
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="PAGINATE_PROPS">
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
    <DocumentationDisplay title="Progress Bar" id="progress_bar" :code="PROGRESS_CODE" :overview="PROGRESS_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center gap-4">
                <p>Is Loading:</p>
                <FormSwitch v-model="isLoading" name="isLoading" />
            </div>
            <HProgress v-model="isLoading" />
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="PROGRESS_PROPS">
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
    <DocumentationDisplay title="Tab" id="tab" :code="TAB_CODE" :overview="TAB_OVERVIEW" >
        <template #preview>
            <HTab :tabs="TABS_DATA">
                <template #home>
                    <p>Home</p>
                </template>
                <template #services>
                    <p>Services</p>
                </template>
                <template #about>
                    <p>About</p>
                </template>
            </HTab>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="TAB_PROPS">
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
    <DocumentationDisplay title="Breadcrumb" id="breadcrumb" :code="BREADCRUMB_CODE" :overview="BREADCRUMB_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <HBreadcrumb :nodes="BREADCRUMB_DATA" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="BREADCRUMB_PROPS">
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
    <DocumentationDisplay title="Notification" id="notification" :code="NOTIFICATION_CODE" :overview="NOTIFICATION_OVERVIEW">
        <template #preview>
            <HNotification />
            <div class="flex justify-center">
                <button class="w-max border-2 text-sm p-4 rounded-md" @click="notifyMe">Notify me</button>
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="NOTIFICATION_PROPS">
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
    <DocumentationDisplay title="Chip" id="chip" :code="CHIP_CODE" :overview="CHIP_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <HChip label="chip" @chipClick="notify({ description: 'Chip Cliked' })"
                    @iconClick="notify({ description: 'Icon Cliked' })" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="HEADLESS_USAGE_TABLE_HEADER" , :items="CHIP_PROPS">
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