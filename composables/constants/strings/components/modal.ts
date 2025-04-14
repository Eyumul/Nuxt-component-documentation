import type { Prop, TableData, TableHeader } from "~/types/components";

export const MODAL_CODE = `\n<button @click="show = true">Open modal</button>
<ModalsModal v-model="show" wrapper-class="max-w-xl">
    <template #Heading>
        <h1 class="text-2xl">Modal Heading</h1>
    </template>
    <template #content>
        <p class="mt-10 text-lg">Modal Body</p>
    </template>
</ModalsModal>`;

export const MODAL_OVERVIEW = "The Modal component is a pop-up window that overlays the main content of a webpage or application. It is used to display important information, collect user input, or prompt user actions. Modals typically have a dark background and a light-colored content area. They can be closed by clicking outside the modal or by clicking a specific button within the modal."

export const MODAL_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "wrapperClass",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "title",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "autoClose",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "enabledOverflow",
      description: ""
    }
  },
];

export const MODAL_USAGE_TABLE_HEADER: TableHeader[] = [
  {
    text: "Props",
    value: "name"
  },
  {
    text: "Description",
    value: "description"
  }
];