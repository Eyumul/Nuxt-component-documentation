<script setup lang="ts">
    import useNotify from "@/use/notify";
    import HNotification from "../../../components/H/Notification.vue";

    const { notify } = useNotify();
    
    function notifyMe() {
        notify({ description: "Notify!" });
    }
</script>

<template>
    <Story title="H/Notification">
        <HNotification/>
        <div class="flex">
            <button @click="notifyMe">Notify me</button>
        </div>
    </Story>
</template>