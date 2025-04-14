<script setup lang="ts">
    import { useField } from "vee-validate";
    import type { RadioItem } from "~/types/components";

    const emit = defineEmits(["update:modelValue"]);

    const props = defineProps({
        modelValue: {
            type: [String, Number, Boolean],
            default: undefined,
        },
        items: Array<RadioItem>,
        name: {
            type: String,
            default: undefined,
            required: true,
        },
        rules: {
            type: String,
            default: "",
            required: false,
        },
        class: {
            type: String,
        },
        label: {
            type: String,
            default: undefined,
            required: false,
        },
        labelClass: {
            type: String,
        },
        disabled: Boolean,
    });

    const {
        errorMessage,
        value: inputValue,
        meta,
    } = useField(props.name as string, props.rules, {
        initialValue: props.modelValue,
    });

    const set = (event: Event) => {
        const target = event.target as HTMLInputElement;
        emit("update:modelValue", target.value);
    };

    watch(
        () => props.modelValue,
        (newVal) => {
            inputValue.value = newVal!;
        }
    );
</script>

<template>
  <label :class="labelClass" :for="label" class="block">{{ label }} </label>
  <div :class="props.class" class="flex">
    <div class="relative flex items-start flex-wrap" :class="item.class" v-for="item in props.items" :key="item.value">
      <div class="flex items-center h-5">
        <input v-model="inputValue" @input="set" :id="item.value" :aria-describedby="item.label"
          :disabled="props.disabled" :name="props.name" type="radio" :value="item.value" class="duration-200" :class="[
            errorMessage
              ? 'focus:ring-red-500  h-5 w-5 focus:border-red-500 rounded-md text-sm  cursor-pointer'
              : 'focus:ring-0 h-5 w-5  border-secondary rounded-md text-sm cursor-pointer text-primary-500',
            props.disabled
              ? 'pointer-events-none text-gray-400 focus:ring-gray-400'
              : 'text-primary',
          ]" />
      </div>
      <div class="ml-3 text-sm mr-2">
        <label :for="item.value" :class="labelClass" class="font-sm text-secondary cursor-pointer">
          {{ item.label }}
        </label>
        <p v-if="item.description" class="text-secondary text-sm">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
  <p :visible="errorMessage" class="text-sm text-red-600" :class="errorMessage ? 'h-5 mt-2' : 'h-0 mt-0'"
    id="email-error">
    {{ errorMessage }} &nbsp;
  </p>
</template>