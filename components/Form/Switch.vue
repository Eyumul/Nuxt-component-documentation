<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    hideDetail: Boolean,
    rules: {
        type: String,
        default: "",
        required: false,
    },
});

const emit = defineEmits(["update:modelValue"]);
const toggle = ref(props.modelValue);

const {
    errorMessage,
    value: inputValue,
    meta,
} = useField(props.name, props.rules, {
    initialValue: props.modelValue,
});

watch(
    () => props.modelValue,
    (newVal) => {
        toggle.value = newVal || false;
    },
);

watch(
    () => toggle.value,
    (newVal) => {
        inputValue.value = newVal;
        emit("update:modelValue", newVal);
    },
);
</script>
<template>
    <div>
        <HeadlessSwitch
            v-model="toggle"
            :class="toggle ? ' bg-primary-500' : ' bg-gray-300'"
            class="relative inline-flex flex-shrink-0 h-[24px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
            <span class="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                :class="toggle ? 'translate-x-9' : 'translate-x-0'"
                class="pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
            />
        </HeadlessSwitch>
        <p
            :visible="errorMessage"
            v-if="!props.hideDetail"
            :class="errorMessage ? 'h-5' : 'h-0'"
            class="mt-2 text-sm text-red-600 font-body"
            id="email-error"
        >
            {{ errorMessage }} &nbsp;
        </p>
    </div>
</template>
