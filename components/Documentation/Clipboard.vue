<script setup lang="ts">
    import { useClipboard } from "@vueuse/core";

    const props = defineProps({
        content: String,
        sharable: {
            type: Boolean,
            default: true
        }
    });

    const source = ref<string>(props.content!);
    const { copy, copied, isSupported } = useClipboard({ source, legacy: true });
</script>

<template>
    <span class="flex items-center text-[13px] justify-between w-full p-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md overflow-x-auto">
        $ {{ content }}
        <span v-if="copied">copied</span>
        <button v-else-if="!copied && sharable" class="flex items-center justify-center focus:outline-none focus:ring-0" @click="copy(source)">
            <client-only>
                <Icon name="lucide:copy" />
            </client-only>
        </button>
    </span>
</template>