<script setup lang="ts">
import type { Time } from "@/types/components";
import { timeRange, to24hr } from "~/composables/functions/time";

const props = defineProps<{
    modelValue: Time;
    label: string;
    labelClass: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const isAM = ref(true);
const is24hr = ref(false);
const hours = ref(12);
const minutes = ref("00");
const timePicker = ref(false);

function rangeCheck() {
    timeRange(hours, minutes, is24hr);
}

function timeConfirm() {
    const setTime: Time = {
        hours: is24hr.value
            ? hours.value
            : to24hr(hours.value, isAM.value),
        minutes: Number(minutes.value),
    };
    emit("update:modelValue", setTime);
    timePicker.value = false;
}

watch(is24hr, () => {
    timeRange(hours, minutes, is24hr);
});
</script>

<template>
    <ModalsModal v-model="timePicker" wrapper-class="max-w-md">
        <template #Heading>
            <h1>Add Time</h1>
        </template>
        <template #content>
            <div class="flex min-w-min rounded-2xl bg-gray-200 mt-8">
                <div class="flex flex-col gap-4 p-6">
                    <!-- Heading -->
                    <div class="flex">Enter time</div>
                    <!-- Time picker -->
                    <div class="flex gap-2">
                        <div class="flex flex-col gap-2">
                            <input
                                name="hours"
                                class="h-24 w-36 text-6xl text-center rounded-lg bg-gray-100 focus:bg-purple-300"
                                type="number"
                                v-model="hours"
                                @change="rangeCheck"
                            />
                            <label for="hours">Hours</label>
                        </div>
                        <span class="mt-7 text-4xl font-bold">:</span>
                        <div class="flex flex-col gap-2">
                            <input
                                name="minute"
                                class="h-24 w-36 text-6xl text-center rounded-lg bg-gray-100 focus:bg-purple-300"
                                type="number"
                                v-model="minutes"
                                @change="rangeCheck"
                            />
                            <label for="minute">Minutes</label>
                        </div>
                        <div
                            class="flex flex-col h-24"
                            :class="{ invisible: is24hr }"
                        >
                            <button
                                class="h-full ring-1 ring-black p-2 rounded-t-md"
                                :class="{ 'bg-fuchsia-300': isAM }"
                                @click="isAM = true"
                            >
                                AM
                            </button>
                            <button
                                class="h-full ring-1 ring-black p-2 rounded-b-md"
                                :class="{ 'bg-fuchsia-300': !isAM }"
                                @click="isAM = false"
                            >
                                PM
                            </button>
                        </div>
                    </div>
                    <!-- Buttons -->
                    <div class="flex justify-between">
                        <button
                            class="flex items-center shadow-md p-2 rounded-md bg-gray-100"
                            :class="{ 'bg-purple-300': is24hr }"
                            @click="is24hr = !is24hr"
                        >
                            24h
                        </button>
                        <div
                            class="flex gap-6 px-2 text-purple-800 font-semibold"
                        >
                            <button @click="timePicker = false">Cancel</button>
                            <button @click="timeConfirm">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ModalsModal>
    <div class="flex">
        <button :class="labelClass" @click="timePicker = true">{{ label }}</button>
    </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
}
</style>
