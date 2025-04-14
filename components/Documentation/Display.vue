<script setup lang="ts">
const tab = ref('preview');
const device = ref('pc');

defineProps({
    title: {
        type: String
    },
    overview: {
        type: String
    },
    code: {
        type: String
    },
    id: {
        type: String
    }
});
</script>

<template>
    <div class="space-y-[20px]">
        <p :id="id" class="text-[32px] uppercase xl:text-[30px] font-bold text-center md:text-start">{{ title }}</p>
        <p class="text-[14px] md:text-[16px] text-center md:text-start font-bold">Overview</p>
        <p class="text-[14px] dark:font-light md:text-[16px] text-justify md:text-start max-w-[1270px]">{{ overview }}</p>
        <div class="w-full border-2 max-w-[1270px] rounded-[10px] border-primary-300 dark:border-secondary-600 lg:p-[24px] lg:pl-[74px] p-[13px] xs:p-[26px] sm:p-[39px] md:p-[52px] bg-primary-100 dark:bg-secondary-900">
            <div class="flex justify-center md:justify-start lg:justify-center xl:justify-start gap-[36px] xs:gap-[72px] sm:gap-[108px] md:gap-[28px] lg:gap-[48px]">
                <button @click="tab = 'preview'" :class="[tab=='preview' ? 'bg-primary-300 dark:bg-secondary-600 dark:text-white text-black' : 'bg-transparent text-secondary-400']" class="font-semibold rounded-[8px] py-[6px] px-[12px] text-[14px]">Preview</button>
                <button @click="tab = 'code'" :class="[tab == 'code' ? 'bg-primary-300 dark:bg-secondary-600 dark:text-white text-black' : 'bg-transparent text-secondary-400']" class="font-semibold rounded-[8px] py-[6px] px-[12px] text-[14px]">Code</button>
                <button @click="tab = 'usage'" :class="[tab == 'usage' ? 'bg-primary-300 dark:bg-secondary-600 dark:text-white text-black' : 'bg-transparent text-secondary-400']" class="font-semibold rounded-[8px] py-[6px] px-[12px] text-[14px]">Usage</button>
            </div>
            <div v-if="tab == 'preview'">
                <div :class="[device == 'pc' ? 'w-[100%] px-16' : device == 'tablet' ? 'w-[75%] px-8' : device == 'mobile' ? 'w-[25%] px-8' : '']" class="flex overflow-auto border-[1px] border-primary-900 mx-auto flex-col justify-center h-[490px] my-[25px] sm:my-[10px] lg:my-[25px] rounded-[8px] bg-white dark:bg-black">
                    <slot name="preview"></slot>
                </div>
                <div class="flex justify-center xl:justify-start items-center gap-[30px]">
                    <button @click="device = 'mobile'">
                        <Icon name="lucide:smartphone" :class="[device == 'mobile' ? 'text-primary-900 dark:text-primary-600' : 'dark:text-secondary-600 text-primary-300']" class="size-[24px]" />
                    </button>
                    <button @click="device = 'pc'">
                        <Icon name="lucide:laptop" :class="[device == 'pc' ? 'text-primary-900 dark:text-primary-600' : 'dark:text-secondary-600 text-primary-300']" class="size-[24px]" />
                    </button>
                    <button @click="device = 'tablet'">
                        <Icon name="lucide:tablet-smartphone" :class="[device == 'tablet' ? 'text-primary-900 dark:text-primary-600' : 'dark:text-secondary-600 text-primary-300']" class="size-[24px]" />
                    </button>
                </div>
            </div>
            <div v-else-if="tab == 'code'">
                <div class="w-full h-[490px] my-[25px] sm:my-[10px] lg:my-[25px] rounded-[8px] bg-white dark:bg-gray-900 border-[1px] border-gray-300 dark:border-gray-700">
                    <DocumentationCodeBlock :code="code" class="w-full rounded-[8px] overflow-clip h-full"/>
                </div>
            </div>
            <div v-else-if="tab == 'usage'">
                <slot name="usage"></slot>
            </div>
        </div>
    </div>
</template>