<script setup lang="ts">
    import { TABLE_HEADER, TABLE_ITEMS } from '~/composables/constants/strings';
</script>

<template>
    <Story title="H/Table">
        <HTable :headers="TABLE_HEADER" , :items="TABLE_ITEMS">
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
    </Story>
</template>