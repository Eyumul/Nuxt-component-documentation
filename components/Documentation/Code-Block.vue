<script setup lang="ts">
    import { useClipboard } from "@vueuse/core";
    import { onMounted } from 'vue';
    import Prism from "prismjs";
    import "prismjs/themes/prism.min.css";
    import "~/assets/css/dracula.css";

    onMounted(() => {
        Prism.highlightAll();
    });

    const props = defineProps({
        code: String,
        sharable: {
            type: Boolean,
            default: true
        }
    });

    const source = ref<string>(props.code!);
    const { copy, copied, isSupported } = useClipboard({ source, legacy: true });
</script>

<template>
    <div class="relative">
        <div class="h-full w-full bg-[#282A36] text-white p-2 rounded-md overflow-auto">
            <div v-if="sharable" class="flex justify-between items-center">
                <span class="text-gray-400">Code:</span>
                <button @click="copy(source)" class="">
                    <p v-if="copied" class=" m-[14px] 2xl:mr-[24px]">Copied!</p>
                    <icon v-else name="clarity:clipboard-line" class="text-primary-900 dark:text-primary-600 dark:hover:text-primary-700 text-2xl m-[14px] 2xl:mr-[24px] cursor-pointer hover:text-primary-900"/>
                </button>
            </div>
            <pre>
                <code class="lang-html">
                    <span>{{ code }}</span>;
                </code>
            </pre>
        </div>
    </div>
</template>