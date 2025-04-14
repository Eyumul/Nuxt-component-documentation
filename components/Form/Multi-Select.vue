<script setup lang="ts">
  import { useField } from "vee-validate";
  import { useEventBus } from "@vueuse/core";
  import type { ChipItem, MultiSelectItem } from "~/types/components";

  const bus = useEventBus("removeSelectedChip");
  bus.on(listener);

  const props = defineProps({
    modelValue: {
      type: [String, Number, Object, Boolean, Array],
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    selectedChips: {
      type: [String, Array, Object],
      default: undefined,
    },
    items: {
      type: Array<MultiSelectItem>,
      required: true,
    },
    returnBy: {
      type: String,
      required: false,
    },
    showBy: {
      type: String,
      required: false,
    },
    chipsStyle: {
      type: String,
      required: false,
    },
    init: {
      type: [String, Number],
      required: false,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
    loading: {
      type: Boolean,
      required: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "id",
    },
    trailingIcon: {
      type: String,
      default: ""
    },
    rules: {
      type: String,
      default: "",
      required: false
    },
    chipsTextStyle:{ 
      type: String,
      default: "break-words whitespace-pre-wrap w-full flex flex-wrap overflow-hidden text-sm",
    },
    listClass: {
      type: String,
      required: false,
    },
    deletedItem: {
      type: String,
      required: false,
    },
    showError: {
      type: Boolean,
      default: true,
      required: false,
    },
    inside: {
      type: Boolean,
      default: true,
      required: false,
    },
  });

  const chips = ref<ChipItem[]>([]);
  const show = ref<boolean>(false);
  const search = ref<string | undefined>(undefined);
  const selected = ref<{ [key: string]: boolean }>({});
  const list_select = ref<HTMLElement | null>(null);
  const items = ref({ ...props.items });
  const emit = defineEmits<{
    (
      e: "update:modelValue",
      value: string | number | object | boolean | undefined
    ): void;
    (
      e: "update:selectedChips",
      value: Array<ChipItem>
    ): void;
    (e: "search", value: string | undefined): void;
  }>();

  const {
    errorMessage,
    value: inputValue,
  } = useField(props.name, props.rules, {
    initialValue: props.modelValue,
  });

  const select = (val: { [key: string]: any }) => {
    selected.value[val[props.value]] = !selected.value[val[props.value]];
    if (!Object.values(selected.value).includes(false)) {
      chips.value.push(val as any);
      inputValue.value = chips.value.map((chip) => chip.id);
    } else {
      delete selected.value[val.id];
      chips.value = chips.value.filter((e) => e.id !== val.id);
      inputValue.value = chips.value.map((chip) => chip.id);
    }
    if (chips.value && chips.value.length) {
      emit(
        "update:modelValue",
        chips.value.map((chip) => chip.id)
      );
      emit("update:selectedChips", chips.value);
    } else {
      emit("update:modelValue", undefined);

      emit("update:selectedChips", chips.value);
    }
  };

  const queryList = () => {
    items.value = props.items.filter((item: { name: string }) => {
      return item.name
        .toLowerCase()
        .includes(search.value?.toLowerCase() || "");
    });
    emit("search", search.value);
  };

  onMounted(() => {
    if (
      typeof props.init == "object"
        ? Object.keys(props.init).length
        : props.init!
    ) {
      if (props.modelValue !== undefined) {
        inputValue.value = props.modelValue;
      }
    }
  });

  const deleteChip = (index: number) => {
    let id = chips.value[index].id;
    chips.value.splice(index, 1);
    delete selected.value[id];
    if (chips.value.length < 1) {
      inputValue.value = chips.value;
    }
    if (chips.value && chips.value.length) {
      emit(
        "update:modelValue",
        chips.value.map((chip) => chip.id)
      );
      emit("update:selectedChips", chips.value);
    } else {
      emit("update:modelValue", undefined);
      emit("update:selectedChips", chips.value);
    }
  };

  function listener(idx: any) {
    deleteChip(idx);
  }
  
  watch(
    () => props.modelValue,
    (newVal) => {
      if (!newVal) {
        chips.value = [];
      }
    }
  );
</script>

<template>
  <div class="w-full relative">
    <div
      :class="[
        errorMessage
          ? 'focus:ring-red-500 focus:border-red-500 hover:border-red-500 border-red-500'
          : 'focus:ring-primary  focus:border-primary hover:border-primary border-gray-300 border-1 ',
        'flex flex-wrap items-center bg-white dark:bg-secondary-hover relative pr-7 rounded-md py-1 px-2 gap-1 border shadow-sm cursor-text',
        chips.length ? '' : 'h-10',
      ]"
      @click="show = !show"
    >
      <div
        class="flex justify-center items-center break-words"
        :class="[chipsStyle || 'px-1 bg-gray-200', inside ? '' : 'hidden']"
        v-for="(chip, i) of chips"
        :key="chip.label"
      >
        <p :class="chipsTextStyle" v-if="inside">
          {{ chip.name }}
        </p>
        <Icon
          v-if="inside"
          name="ion:close-outline"
          class="ml-1 hover:cursor-pointer text-xl duration-200 dark:hover:text-white shrink-0"
          @click="deleteChip(i)"
          >clear</Icon
        >
      </div>
      <h1
        v-if="!chips.length || !inside"
        class="text-sm text-gray-400 dark:text-white"
        :class="[!inside ? 'py-1.5' : '']"
      >
        {{ placeholder }}
      </h1>
      <div
        v-if="trailingIcon"
        class="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none ml-2"
        @click="show = true"
      >
        <Icon :name="trailingIcon" class="h-5 w-5 text-gray-400 ml-2" />
      </div>
    </div>
    <ul
      ref="list_select"
      v-show="show"
      class="w-full bg-white absolute z-50 overflow-y-scroll overflow-x-hidden dark:bg-gray-500 border border-primary shadow min-h-[10rem] max-h-[22rem] rounded-b-md text-base overflow-auto"
      :class="[listClass || '']"
    >
      <li class="h-1">
        <h-progress
          v-if="loading"
          class="rounded-xl w-full"
          color1="bg-primary-lite"
          color2="bg-primary"
          color3="bg-primary-dark"
          height="h-1"
        ></h-progress>
      </li>
      <li class="px-2 border-b pb-2">
        <input
          class="flex-1 focus:ring-0 focus:ring-primary focus:outline-none flex min-w-20 rounded-md focus:border-primary focus:border-2 border-gray-400 border w-full p-1 dark:bg-gray-700 dark:text-white dark:placeholder:text-white"
          name="select"
          @click="show = true"
          v-model="search"
          @input="queryList"
          :placeholder="placeholder"
          :disabled="false"
        />
      </li>
      <li
        v-for="item in items"
        @click="select(item)"
        :class="[
          multiple && selected[item[value]]
            ? 'bg-primary/20 dark:bg-gray-400'
            : '',
        ]"
        class="border-b select-none relative py-3 px-3 hover:bg-primary/30 hover:dark:bg-gray-400 text-gray-600 cursor-pointer"
      >
        <div class="flex items-center justify-between">
          <span class="text-gray-600 font-semibold block dark:text-white">
            {{ item.name }}
          </span>
          <Icon
            name="ic:round-check"
            v-if="multiple && selected[item[value]]"
            class="text-2xl text-gray-600 dark:text-white shrink-0"
          />
        </div>
      </li>
    </ul>
    <p
      :visible="errorMessage"
      class="mt-2 text-sm text-red-600"
      :class="errorMessage ? 'h-5' : 'h-0'"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
