<script setup lang="ts">
import { ref } from "vue";

// Drawer variable
const drawerOpen = ref(false)
</script>

<template>
    <div
        class="lg:h-[calc(100vh-78px)] h-[calc(100vh-57px)] bg-gray-50 dark:bg-secondary-950 dark:text-white w-full pt-[20px] lg:pt-[40px]">
        <!-- Main content goes here (to see the window give a class for the above of 'border-2 border-blue-500' ) -->
        <div class="flex flex-col pb-[40px] gap-8 md:gap-[50px]">
            <DocumentationIntroductionSection/>
            <DocumentationGuideSection/>
            <DocumentationConfigurationSection/>
            <DocumentationCLISection/>
            <DocumentationCommonSection/>
            <DocumentationFileUploadSection/>
            <DocumentationHeadlessSection/>
            <DocumentationFormSection/>
            <DocumentationModalSection/>
        </div>
    </div>
</template>
