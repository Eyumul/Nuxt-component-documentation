<script setup lang="ts">
    import { ref, computed, toRefs } from "vue";
    import { useDebounceFn } from "@vueuse/core";
    import { useField } from "vee-validate";
    import { onClickOutside } from "@vueuse/core";
    import type { ListSelectSearchItem } from "~/types/components";

    const emit = defineEmits([
        "update:modelValue",
        "update:selected",
        "search",
        "onSelectionFound",
    ]);

    const props = defineProps({
        id: String,
        label: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        items: {
            type: Array<ListSelectSearchItem>,
            required: true,
            default() {
                return [];
            },
        },
        text: {
            type: String,
            default: "name",
        },
        value: {
            type: String,
            default: "id",
        },
        search: {
            type: String,
        },
        modelValue: {
            type: [String, Array, Object],
            default: ""
        },
        selected: {
            type: String,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        errorMessages: {
            type: String,
        },
        placeHolder: {
            type: String,
        },
        class: {
            type: String,
            default: "",
        },
        clearable: Boolean,
        trailingIcon: String,
        rules: {
            type: String,
            default: "",
            required: false,
        },
        supporter: {
            type: String,
        },
        hideDetail: Boolean,
        searchPlaceholder: String,
        disabled: Boolean,
        placeholderStyle: String,
    });

    const {
        errorMessage,
        value: inputValue,
    } = useField(props.name, props.rules, {
        initialValue: props.modelValue,
    });

    const vv = ref(props.selected);
    const selected = ref({});
    const _placeholder = ref(props.placeHolder);
    const show = ref(false);
    const input = ref<HTMLInputElement | null>(null);
    const search = ref<string | undefined>(undefined);
    const items = ref({ ...props.items });
    const listItems = ref(items);
    const list_select = ref(null);

    const placeholder = computed(() => {
        if (items.value?.length) {
            let v: any = items.value.find((e: any) => e[props.value] === props.selected)!;

            if (v) {
                selected.value = v[props.value];
                _placeholder.value = v[props.text];
                inputValue.value = v[props.text];

                emit("onSelectionFound", v);
                return _placeholder.value;
            } else if (props.placeHolder) {
                _placeholder.value = props.placeHolder;
            } else {
                _placeholder.value = "Select";
            }
        }

        return _placeholder.value;
    });

    const select = (item: any) => {
        vv.value = item.id;
        inputValue.value = item[props.text];
        emit("update:selected", item[props.value]);
        emit("update:modelValue", item);
        selected.value = item[props.value];
        _placeholder.value = item[props.text];
        show.value = false;
    };

    const outside = useDebounceFn(() => {
        show.value = false;
    }, 300);

    const open = () => {
        show.value = true;
        input.value?.focus();
    };
    
    const queryList = () => {
      listItems.value = props.items.filter((item: ListSelectSearchItem) => {
        return item.name
          .toLowerCase()
          .includes(search.value?.toLowerCase() || "");
      });
      emit("search", search.value);

      if (search.value) {
        show.value = true;
      } else {
        show.value = false;
      }
    };

    const clear = () => {
        search.value = undefined;
        inputValue.value = "";
        selected.value = "";
        show.value = false;
        items.value = props.items;
        emit("update:modelValue", undefined);
        emit("update:selected", undefined);
        emit("onSelectionFound", undefined);
        emit("search", "");
    };

    onClickOutside(list_select, (_) => (show.value = false));
</script>

<template>
  <div class="relative">
    <slot name="label"></slot>
    <div class="relative rounded-md shadow-sm font-body bg-gray-200 border-none focus:border-2 text-gray-900 p-2">
      <button
        type="button"
        :id="id"
        :disabled="disabled"
        @click="open"
        class="bg-gray-200 flex gap-x-1 items-center text-base overflow-hidden whitespace-nowrap text-ellipsis relative w-full border rounded-md pl-3 pr-10 py-2 text-left cursor-default truncate"
        :class="[
          errorMessage
            ? 'focus:ring-red-500 focus:border-red-500 hover:border-red-500 border-red-500'
            : '',
          props.class ? props.class : '',
          disabled ? ' bg-gray-100 !cursor-not-allowed' : '',
          placeholder && !inputValue ? 'text-gray-500' : 'text-gray-400',
        ]"
      >
        <slot name="leadingIcon"></slot>
        {{ inputValue || placeholder || "Select" }}
      </button>
      <div
        v-if="trailingIcon"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <Icon :name="trailingIcon" width="25" height="25" color="gray" />
      </div>
      <div
        v-if="clearable"
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
      ref="list_select"
      v-show="show"
      :class="supporter"
      class="px-2 absolute z-50 w-full bg-white dark:bg-primary-2 border-r-2 border-l-2 border-b-2 border-primary-1/50 scrollbar scrollbar-thin scrollbar-track-rounded-full scrollbar-track-primary shadow-lg max-h-56 h-auto rounded-br-xl rounded-b-xl text-base overflow-auto"
    >
      <div class="flex justify-center items-center">
        <input
          ref="input"
          @input="queryList"
          v-model="search"
          @blur="outside"
          autocomplete="off"
          type="text"
          :name="props.name"
          id="email"
          class="my-1 p-2 placeholder:text-gray-400 block sm:text-sm w-full border-2 border-primary-950 rounded-md font-body"
          :placeholder="props.searchPlaceholder || 'Search'"
        />
      </div>
      <div class="h-1">
        <HProgress
          v-if="loading && items?.length"
          class="rounded-xl w-full"
          color1="bg-primary-1"
          color2="bg-primary-3"
          color3="bg-primary-6"
          height="h-1"
        ></HProgress>
      </div>
      <div
        v-for="item in listItems"
        :key="item.id"
        @click="select(item)"
        class="border-b select-none relative py-3 px-2 hover:bg-blue-50 hover:text-black text-gray-500 cursor-pointer"
      >
        <div class="flex items-center justify-between :hover:text-black">
          <span
            class="text-gray-500 font-normal block font-body"
          >
            {{ item.name }}
          </span>
          <Icon
            v-if="placeholder == item.name"
            name="ic:round-check"
            width="25"
            height="25"
            class="cursor-pointer text-[#003F7D]"
          />
        </div>
      </div>
      <div
        v-if="!loading && items?.length === 0"
        class="text-black test-lg flex justify-center items-center pb-2"
      >
        <slot name="option" :item="search" />
      </div>
    </ul>

    <p
      :visible="errorMessage"
      v-if="!props.hideDetail && errorMessage"
      class="mt-2 text-sm text-red-600 font-body"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>