<script setup lang="ts">
import { ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import type { DropdownItem } from "~/types/components";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
    items: Array<DropdownItem>,
    label: {
        type: String,
        required: false
    }
});

const select = ref<DropdownItem>(props.items![0]);
const show = ref(false);

const outside = useDebounceFn(() => {
    show.value = false;
}, 300);

const pick = (item: DropdownItem) => {
    select.value = item;
    show.value = false;
}

watch(select, (newVal) => {
    emits("update:modelValue", newVal);
});

</script>

<template>
    <div class="relative">
        <div class="flex flex-col justify-start">
            <span v-if="label" class="text-xs text-gray-900">{{ label }}</span>
            <button
                class="flex flex-row w-full border-none shadow-now focus:outline-none focus:ring-0 px-0 py-2 text-md"
                @click="show = true" @blur="outside">{{
                    select.name }}
                <Icon name="tabler:chevron-down" class="ml-3 text-2xl text-gray-500" />
            </button>
        </div>
        <ul v-if="show" class="absolute z-10 bg-white rounded-lg shadow w-44 ">
            <li v-for="item in items" :key="item.id" @click="() => pick(item)"
                class="border-b border-gray-200 select-none relative py-3 px-3 secondary-text cursor-pointer overflow-auto dark:bg-transparent dark:border-sheger_light_gray-200">
                <div class="flex items-center justify-between font-normal bIntermediatelock font-body">
                    <p class="block capitalize break-words">
                        {{ item.name }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>