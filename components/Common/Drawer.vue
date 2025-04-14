<script setup lang="ts">
    import { onClickOutside } from "@vueuse/core";
    
    const props = defineProps({
        modelValue: { type: Boolean, default: false },
        wrapperClass: {
            type: String,
            default: "top-0  w-64 h-screen bg-white dark:bg-[#424242] shadow-md",
        },
        direction: { type: String, default: "left" },
        autoClose: { type: Boolean, default: false },
    });

    const emit = defineEmits(["update:modelValue", "close"]);

    const drawer = ref(null);
    const isOpen = computed({
        get() {
            return props.modelValue;
        },
        set(newVal) {
            emit("update:modelValue", newVal);
        }
    });

    function toggleDrawer() {
        isOpen.value = !isOpen.value;
    }

    function closeDrawer() {
        isOpen.value = false;
        emit("update:modelValue", false);
    }

    onClickOutside(drawer, (e) => {
        props.autoClose ? closeDrawer() : null;
    });

    const drawerDirection = computed(() => {
        return props.direction === "left" && props.modelValue
            ? "translate-x-0 left-0"
            : props.direction === "left" && !props.modelValue
            ? "-translate-x-full left-0"
            : props.direction === "right" && props.modelValue
                ? "-translate-x-0 right-0"
                : props.direction === "right" && !props.modelValue
                ? "translate-x-full right-0"
                : "";
    });
</script>

<template>
  <div ref="drawer" class="fixed z-[1001] transition-all duration-300 ease-in h-screen"
    :class="[drawerDirection, wrapperClass]">
    <button v-if="isOpen" type="button" @click="isOpen = false" :class="[
      direction === 'left'
        ? 'lg:-right-[26px]'
        : 'lg:-left-[26px]',
    ]"
      class="bg-white dark:bg-[#424242] dark:text-white text-primary ring-2 ring-gray-300 shadow-lg [writing-mode:vertical-lr] text-base font-medium absolute top-2 lg:top-1/2 p-3 flex items-center gap-x-2 rounded-full z-50 lg:z-0">
      <Icon name="material-symbols:close" :class="[
        direction == 'right'
          ? isOpen
            ? 'rotate-180'
            : ''
          : isOpen
            ? ''
            : 'rotate-180',
        'text-xs sm:text-2xl transition-all duration-300',
      ]" />
    </button>
    <div class="overflow-y-auto h-full">
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped>
    ::-webkit-scrollbar {
        width: 2px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #fff;
    }
</style>