<script setup lang="ts">
    import { ref } from 'vue';
    import CommonDrawer from '@/components/Common/Drawer.vue';

    const drawerOpen = ref(false);
</script>

<template>
    <Story title="Common/Drawer">
        <div>
            <button
                class="w-max border-2 text-sm p-4 rounded-md"
                @click="drawerOpen = true"
            >
                Open Drawer
            </button>
            <CommonDrawer
                wrapperClass="top-0 h-screen bg-white p-6 shadow-lg w-[50%] lg:max-w-[40svw]"
                :model-value="drawerOpen"
                direction="right"
                :auto-close="true"
                @update:modelValue="(val: boolean) => drawerOpen = val"
            >
                <template #body>
                    <div>Drawer</div>
                </template>
            </CommonDrawer>
        </div>
    </Story>
</template>