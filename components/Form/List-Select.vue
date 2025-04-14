<script setup lang="ts">
  import { useField } from "vee-validate";
  import { useDebounceFn } from "@vueuse/core";
  import type { ListSelectItem } from "~/types/components";

  const props = defineProps({
    id: {
      type: String,
      required: false,
    },
    leadingIcon: {
      type: String,
      required: false,
    },
    trailingIcon: {
      type: String,
      required: false,
    },
    query: {
      type: Object,
      required: false,
    },
    items: {
      type: Array<ListSelectItem>,
      default: [],
    },
    placeholder: {
      type: String,
      default: "Search",
    },
    labelClass: {
      type: String,
      required: false,
    },
    clearable: {
      type: Boolean,
      required: false,
    },
    returnObject: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: [String, Number, Object, Boolean],
      required: false,
    },
    name: {
      type: String
    },
    type: {
      type: String
    },
    rules: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    listHeight: {
      type: String,
      required: false
    },
    placeholderStyle: {
      type: String,
      required: false
    },
    hideDetail: {
      type: Boolean,
      required: false
    },
  });

  const emit = defineEmits<{
    (e: "update:modelValue", value: string | number | object | boolean): void;
    (e: "returnedObject", value: string | number | object | boolean): void;
  }>();

  const selected = ref<any>("");
  const { items } = toRefs(props) || [];
  const show = ref<boolean>(false);
  const placeholder = ref<string>("");
  const input = ref<HTMLInputElement | null>(null);
  const {
    errorMessage,
    value: inputValue,
    meta,
  } = useField(props.name as string, props.rules, {
    initialValue: props.modelValue,
  });

  const outside = useDebounceFn(() => {
    show.value = false;
  }, 300);

  const set = (item: {
    id: string | number;
    name: string;
    identifier?: string;
  }) => {
    inputValue.value = item["name"];
    show.value = false;
    if (props.returnObject) {
      emit("update:modelValue", item);
    } else {
      emit("update:modelValue", item.name);
      emit("returnedObject", item.name);
      selected.value = item.name;
    }
  };
  const clear = () => {
    placeholder.value = "";
    inputValue.value = "";
    show.value = false;
    if (input.value) input.value.focus();
    emit("update:modelValue", "");
  };

  watch(
    () => props.modelValue,
    (newVal) => {
      if (newVal !== undefined) {
        inputValue.value = newVal;
        selected.value = newVal;
        let selectedItem = props.items.find((item: any) => item.name == newVal);

        if (selectedItem) {
          placeholder.value = selectedItem.name;
        }
      }
    }
  );

  onMounted(() => {
    let selectedItem = props.items.find(
      (item: any) => item.id == props.modelValue
    );
    if (selectedItem) {
      inputValue.value = selectedItem.id;
      selected.value = props.modelValue;
      placeholder.value = selectedItem.name;
    }
  });
</script>
<template>
  <div class="relative">
    <div class="flex gap-x-2">
      <slot name="label"> </slot>
      <span
        v-if="rules?.includes('required') && !props.disabled"
        class="text-red-600"
        >*</span
      >
    </div>
    <div class="relative rounded-md shadow-sm font-body">
      <div
        v-if="leadingIcon && !disabled"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <component
          class="h-7 w-7 text-primary/30"
          :is="leadingIcon"
        ></component>
      </div>
      <input
        ref="input"
        v-model="placeholder"
        @click="show = true"
        @focus="show = true"
        @blur="outside"
        autocomplete="off"
        :type="type"
        :placeholder="props.placeholder || 'Select'"
        :name="props.name"
        :id="id"
        class="block w-full pr-10 focus:outline-none md:text-base text-sm rounded-md dark:bg-secondary-hover"
        :class="[
          errorMessage
            ? 'focus:ring-red-500 focus:border-red-500 hover:border-red-500 border-red-500 '
            : 'focus:ring-primary focus:border-primary hover:border-primary/70 border-gray-300 border-1',
          disabled ? ' bg-gray-100 cursor-not-allowed' : '',
          props.class ? props.class : '',
          props.placeholderStyle
            ? props.placeholderStyle
            : ' placeholder-gray-500 ',
        ]"
        :disabled="disabled"
        aria-invalid="true"
        aria-describedby="email-error"
      />
      <div v-if="!clearable || !selected"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <Icon  name="tabler:chevron-down" width="25" height="25" color="gray" />
      </div>
      <div
        v-else-if="clearable && selected && !disabled"
        @click="clear"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        <Icon
          name="gg:close"
          width="25"
          height="25"
          color="gray"
          class="cursor-pointer"
        />
      </div>
    </div>
    <ul
      v-show="show"
      class="absolute z-50 overflow-y-scroll overflow-x-hidden w-full bg-white border border-gray-300 shadow max-h-56 h-auto rounded-md text-base"
      :class="listHeight ? listHeight : ''"
    >
      <li
        v-for="item in items"
        :key="item.id"
        @click="set(item)"
        :class="{ 'bg-primaryLite dark:bg-gray-400/30': selected == item.id }"
        class="border-b border-gray-200 select-none relative py-3 px-3 hover:bg-primary/5 text-secondary cursor-pointer overflow-auto"
      >
        <div
          class="flex items-center justify-between"
          :class="[
            labelClass
              ? labelClass
              : 'text-secondary font-normal block font-body',
          ]"
        >
          <span class="block capitalize break-words">{{ item.name }}</span>
          <div class="flex space-x-1">
            <Icon
              v-if="item.id == selected"
              name="ic:round-check"
              width="25"
              height="25"
              class="cursor-pointer text-primary"
            />
          </div>
        </div>
      </li>
    </ul>
    <p
      v-if="!hideDetail"
      class="col-span-5 mt-1 font-body text-sm text-red-600 duration-300 transition-all"
      :visible="errorMessage"
      :class="errorMessage ? 'h-5' : 'h-0'"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
<style scoped>
  .zz {
    z-index: 99;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px white;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #80cbc4;
    border-radius: 3px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #80cbc4;
  }
</style>
