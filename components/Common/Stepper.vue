<script setup lang="ts">
    import { DEFAULT_STEPS } from '~/composables/constants/strings/components/common';
    import type { StepperItem } from '~/types/components';

    defineProps({
      steps: {
        type: Array<StepperItem>,
        default: DEFAULT_STEPS,
      },
      step: {
        type: Number,
        default: 1,
      },
      indicatorClass: {
        type: String,
        default: "bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white"
      },
      hintClass: {
        type: String,
        default: "block text-xs md:text-sm font-medium text-gray-800"
      },
      activeHintClass: {
        type: String,
        default: "text-gray-500"
      },
      completedHintClass: {
        type: String,
        default: ""
      },
      activeIndicatorClass: {
        type: String,
        default: "bg-green-500 rounded-full"
      },
      completedIndicatorClass: {
        type: String,
        default: "bg-blue-500 rounded-full"
      },
      dividerClass: {
        type: String,
        default: "bg-gray-200 h-px dark:bg-neutral-700 ms-2"
      },
      completedDividerIndicator: {
        type: String,
        default: "bg-primary h-px ms-2"
      }
    });
</script>

<template>
  <div class="w-full">
    <div class="bg-grey-light h-1"></div>
    <ul class="relative flex gap-x-2 px-5">
      <!-- FIXME Responsiveness -->
      <li class="shrink basis-0 flex-1 last:flex-none group" v-for="s in steps">
        <div
          class="min-w-7 min-h-7 w-full flex items-center text-xs align-middle"
        >
          <span
            class="size-7 flex justify-center items-center flex-shrink-0"
            :class="
                s.id < step ? completedIndicatorClass :
                s.id === step ? activeIndicatorClass :
                indicatorClass
            "
          >
            <Icon
              name="line-md:confirm-circle-twotone"
              class="text-primary text-3xl lg:text-4xl"
              v-if="s.id < step"
            />
            <Icon
              :name="s.icon"
              class="text-xl lg:text-3xl rounded-full lg:p-1ring-2 ring-primary bg-primary text-white"
              v-if="s.id == step"
            />
            <Icon
              :name="s.icon"
              class="text-xl lg:text-3xl ring-2 ring-primary rounded-full lg:p-1"
              v-if="s.id > step"
            />
          </span>
          <div
            :class="[
              s.id > step - 1
                ? dividerClass
                : completedDividerIndicator,
            ]"
            class="w-full flex-1 group-last:hidden"
          ></div>
        </div>
        <div class="mt-3">
          <span
            :class="
                s.id > step ? hintClass :
                s.id === step ? activeHintClass : completedHintClass
            "
          >
            {{ s.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>