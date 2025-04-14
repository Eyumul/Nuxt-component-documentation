<script setup lang="ts">
    import { BREADCRUMB_DATA } from '~/composables/constants/strings';
    import HBreadcrumb from '../../../components/H/Breadcrumb.vue';
</script>

<template>
    <Story title="H/Breadcrumb">
        <HBreadcrumb :nodes="BREADCRUMB_DATA" />
    </Story>
</template>
