<script setup lang="ts">
import { useField } from "vee-validate";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
    modelValue: {
        type: Number,
        default: 0,
    },
    label: {
        type: String,
        default: "",
    },
    labelClass: {
        type: String,
        default:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200",
    },
    formClass: {
        type: String,
        default: "w-[10rem] mx-auto",
    },
    name: String,
    rules: {
        type: String,
        default: "",
        required: false,
    },
    min: {
        type: Number,
        default: -9999998,
    },
    max: {
        type: Number,
        default: 9999998,
    },
    helperText: {
        type: String,
        default: "",
    },
});

const {
    errorMessage,
    value: inputValue,
    meta,
} = useField(props.name as string, props.rules, {
    initialValue: props.modelValue,
});

const customErrorMessage = ref<string | null>(null);

const increment = () => {
    if (inputValue.value < props.max) {
        inputValue.value++;
    }
};

const decrement = () => {
    if (inputValue.value > props.min) {
        inputValue.value--;
    }
};

const handleInput = (e: Event) => {
    const value = parseInt((<HTMLInputElement>e.target).value);
    console.log(value);

    if (value >= props.min && value <= props.max) {
        inputValue.value = value;
    } else {
        customErrorMessage.value = `Please enter a number between ${props.min} and ${props.max}`;
    }
};

watch(inputValue, (newVal) => {
    emits("update:modelValue", newVal);
});

watch(
    () => props.modelValue,
    (newVal) => {
        inputValue.value = newVal!;
    },
);
</script>

<template>
    <div :class="formClass">
        <div for="quantity-input" :class="labelClass">{{ label }}</div>
        <div class="relative flex items-center">
            <button
                @click="decrement"
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                class="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
                <Icon name="lucide:minus" />
            </button>
            <input
                v-model="inputValue"
                type="text"
                inputmode="numeric"
                :name="props.name"
                data-input-counter
                @input="handleInput"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                :class="[
                    errorMessage
                        ? 'border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-primary-1 focus:ring-primary-1',
                ]"
                :placeholder="`${min}+`"
            />
            <button
                @click="increment"
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                class="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
                <Icon name="lucide:plus" />
            </button>
        </div>
        <p
            id="helper-text-explanation"
            class="mt-2 text-xs text-gray-500 dark:text-gray-400"
            v-if="props.helperText && !customErrorMessage"
        >
            {{ props.helperText }}
        </p>
        <p
            id="error-message"
            class="mt-2 text-xs text-red-500 dark:text-red-400"
            v-if="customErrorMessage"
        >
            {{ customErrorMessage }}
        </p>
    </div>
</template>

<style scoped></style>
