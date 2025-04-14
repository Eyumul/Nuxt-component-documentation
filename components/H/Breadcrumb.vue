<script setup lang="ts">
import type { BreadcrumbNode } from "~/types/components";

defineProps({
    nodes: {
        type: Array<BreadcrumbNode>,
        required: true,
    },
});
</script>

<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol
            class="inline-flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse"
        >
            <li v-for="(node, index) in nodes">
                <div class="flex items-center space-x-1 md:space-x-2">
                    <Icon v-if="index" name="lucide:slash" />
                    <NuxtLink
                        :to="node.link"
                        class="inline-flex items-center text-xs lg:text-lg text-gray-700"
                    >
                        <div class="flex items-center gap-2">
                            <Icon v-if="node.icon" :name="node.icon" />
                            <span>{{ node.name }}</span>
                        </div>
                    </NuxtLink>
                </div>
            </li>
        </ol>
    </nav>
</template>
