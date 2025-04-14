<script setup lang="ts">
    import useNotify from "@/use/notify";
    import HChip from '../../../components/H/Chip.vue';
    import HNotification from "../../../components/H/Notification.vue";

    const { notify } = useNotify();
</script>

<template>
    <Story title="H/Chip">
        <HNotification/>
        <HChip 
            label="chip"
            @chipClick="notify({ description: 'Chip Cliked' })"
            @iconClick="notify({ description: 'Icon Cliked' })"
        />
    </Story>
</template>