<script setup lang="ts">
    import HTab from "../../../components/H/Tab.vue";
    import { TABS_DATA } from "~/composables/constants/strings";
</script>

<template>
    <Story title="H/Tab">
        <HTab :tabs="TABS_DATA" :disabledTabIndex="2">
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
    </Story>
</template>