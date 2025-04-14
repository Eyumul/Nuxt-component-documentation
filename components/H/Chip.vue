<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
    },
    class: String,
    btnClass: String,
    trailingIcon: String,
});

const emit = defineEmits(["iconClick", "chipClick"]);
</script>

<template>
    <div>
        <span
            :class="class"
            @click="emit('chipClick')"
            class="max-w-[15rem] px-4 py-1 rounded-full text-gray-600 bg-primary-50 font-semibold text-sm flex gap-x-2 items-center align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
        >
            <p>{{ label }}</p>
            <button
                type="button"
                :class="btnClass"
                class="bg-transparent hover focus:outline-none z-10"
                @click.stop="emit('iconClick')"
            >
                <div v-if="trailingIcon" class="flex items-center">
                    <Icon
                        :name="trailingIcon"
                        class="text-black ml-2 hover:scale-125 duration-200"
                        size="25"
                    ></Icon>
                </div>
                <div v-else class="flex items-center">
                    <Icon
                        name="eva:close-fill"
                        class="text-2xl shrink-0 hover:text-red-600 hover:scale-125 duration-200"
                    />
                </div>
            </button>
        </span>
    </div>
</template>
