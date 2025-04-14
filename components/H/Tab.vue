<script setup lang="ts">
import { Tab, TabList, TabGroup, TabPanels, TabPanel } from "@headlessui/vue";
import type { TabData } from "~/types/components";

defineProps({
    tabs: {
        type: Array<TabData>,
        default: () => [],
    },
    disabledTabIndex: {
        type: Number,
        required: false
    },
    disabledTabClass: {
        type: String,
        default: "text-gray-400",
    }
});

const selectedTab = ref(0);

function tabWidth() {
    const element = document.getElementById(`tab-${selectedTab.value}`);
    return element?.offsetWidth;
}

function changeTab(index: number) {
    selectedTab.value = index;
    const element = document.getElementById(`tab-${selectedTab.value}`);
    const position = element?.offsetLeft;
    const indicator = document.getElementById("tab-indicator") as HTMLElement;
    indicator.style.left = `${position ? position : 0}px`;
    indicator.style.width = `${tabWidth()}px`;
}

onMounted(() => {
    setTimeout(() => changeTab(0), 1000);
});
</script>

<template>
    <ClientOnly>
        <div class="relative">
            <TabGroup
                :selectedIndex="selectedTab"
                @change="changeTab"
                as="template"
            >
                <TabList as="div" class="flex flex-wrap justify-between">
                    <div
                        class="flex items-center 5xs:justify-between lg:justify-start space-x-16 w-full overflow-auto"
                    >
                        <Tab
                            v-for="(tab, index) in tabs"
                            :id="`tab-${index}`"
                            :class="[
                                selectedTab === index
                                    ? 'text-primary-500 ' :
                                        disabledTabIndex === index ? 'text-gray-400' :
                                            'text-hahu-gray',
                                'outline-none focus:outline-none duration-500 ease-in-out cursor-pointer',
                            ]"
                            as="div"
                            :key="tab.value"
                            :disabled="disabledTabIndex === index"
                        >
                            <span class="flex gap-2 items-center">
                                <Icon :name="tab.icon" />
                                <p>{{ tab.name }}</p>
                            </span>
                        </Tab>
                    </div>
                </TabList>
                <div class="relative w-full border-b py-1">
                    <div
                        id="tab-indicator"
                        class="absolute duration-200 left-0 bottom-0 h-0.5 bg-primary-500"
                    ></div>
                </div>

                <TabPanels as="div">
                    <TabPanel as="div" v-for="tab in tabs" :key="tab.value">
                        <slot :name="tab.value"></slot>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </ClientOnly>
</template>
