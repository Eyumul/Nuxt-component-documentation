<script setup lang="ts">
  import type { AccordionItem } from "~/types/components";

  const props = defineProps({
    items: {
      type: Array<AccordionItem>,
      default: [],
      required: false,
    },
    collabsable: {
      type: Boolean,
      default: false,
      required: false,
    },
  });

  const tableData = ref(props.items || []);
  const content = ref(null);

  const beforeEnter = (el: Element) => {
    el.setAttribute("style", "height:0");
  };

  const enter = (el: Element) => {
    el.setAttribute("style", `height:${el.scrollHeight}px`);
  };

  const beforeLeave = (el: Element) => {
    el.setAttribute("style", `height:${el.scrollHeight}px`);
  };

  const leave = (el: Element) => {
    el.setAttribute("style", "height:0");
  };

  const toggleOpen = (index: number) => {
    if (props.collabsable) {
      tableData.value.forEach((item, i) => {
        if (i !== index) item.open = false;
      });
    }
    tableData.value[index].open = !tableData.value[index].open;
  };
</script>

<template>
  <div class="flex flex-col gap-y-5" v-if="tableData">
    <div
      v-for="(i, index) in tableData"
      :key="index"
      @click="toggleOpen(index)"
      class="flex-col w-full px-5 py-4 cursor-pointer bg-gray-100 dark:bg-[#424242] rounded-md duration-200"
    >
      <div
        class="flex justify-between items-center w-full capitalize text-gray-700 dark:text-white"
      >
        <p class="capitalize">
          {{ i?.title }}
        </p>
        <Icon
          class="text-xl font-medium cursor-pointer duration-200 shrink-0 self-center"
          :class="i?.open ? '' : 'transform rotate-180'"
          name="mingcute:up-fill"
        />
      </div>
      <transition
        name="slide-fade"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-show="i.open" class="overflow-y-auto" ref="content">
          <div v-if="$slots.content">
            <slot name="content" :item="i" />
          </div>
          <div v-else>- - -</div>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    overflow: hidden;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }

  .slide-fade-enter-to,
  .slide-fade-leave {
    opacity: 1;
  }
</style>
