import type { AccordionItem, Prop, StepperItem, TableData, TableHeader } from "~/types/components";

export const ACCORDION_CODE = `
<CommonAccordion :items="data" :collabsable="true" class="w-[50%] xl:w-1/4">
  <template #content="{ item }">
        <ul 
          class="flex flex-col justify-start gap-2 text-sm"
          v-for="(i, index) in item.items" 
          :key="index" 
        >
            <li>{{ i }}</li>
        </ul>
    </template>
</CommonAccordion>`;

export const DRAWER_CODE = `
<button class="w-max border-2 text-sm p-4 rounded-md" @click="drawerOpen = true">Open Drawer</button>
<CommonDrawer 
  wrapperClass="top-0 h-screen bg-white p-6 shadow-lg w-[50%] lg:max-w-[40svw]" 
  direction="right" 
  :model-value="drawerOpen" 
  :auto-close="true" 
  @update:modelValue="(val) => drawerOpen = val"
>
    <template #body>
        <div>Drawer</div>
    </template>
</CommonDrawer>`;

export const STEPPER_CODE = `
<CommonStepper
    :step="2"
    completed-indicator-class="bg-blue-500 text-white rounded-full"
    active-indicator-class="bg-gray-300 rounded-full"
    completed-divider-indicator="bg-blue-500 h-2"
    completed-hint-class="text-blue-500"
/>`;

export const ACCORDION_OVERVIEW = `The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes.
A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.`;

export const DRAWER_OVERVIEW = `The drawer component is a container that slides in from the edge of the screen. It can be used to display additional information or options that are not part of the main content. The drawer can be opened and closed by clicking a button or a link.`;

export const STEPPER_OVERVIEW = `The stepper component is a navigation bar that guides users through a multi-step process. It is used to break down a complex process into smaller, more manageable steps. The stepper component can be used in forms, surveys, or any other multi-step process.`;

export const ACCORDION_DATA: AccordionItem[] = [
  {
    title: "Title 1",
    items: ["Subtitle 1", "Subtitle 2", "Subtitle 3"],
  },
  {
    title: "Title 2",
    items: ["Subtitle 1", "Subtitle 2", "Subtitle 3"],
  },
  {
    title: "Title 3",
    items: ["Subtitle 1", "Subtitle 2", "Subtitle 3"],
  },
];


export const ACCORDION_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "items",
      description: "Array of objects containing the title and items to be displayed in the accordion."
    }
  },
  {
    id: "2",
    data: {
      name: "collapsable",
      description: "Boolean value that indicate whether the accordion is collabsable or not."
    }
  }
];

export const COMMON_USAGE_TABLE_HEADER: TableHeader[] = [
  {
    text: "Props",
    value: "name"
  },
  {
    text: "Description",
    value: "description"
  }
];

export const DEFAULT_STEPS: StepperItem[] = [
  { name: "one", id: 1, icon: "mdi:number-1-circle-outline" },
  { name: "two", id: 2, icon: "mdi:number-2-circle-outline" },
  { name: "three", id: 3, icon: "mdi:number-3-circle-outline" },
  { name: "four", id: 4, icon: "mdi:number-4-circle-outline" },
  { name: "five", id: 5, icon: "mdi:number-5-circle-outline" },
];

export const DRAWER_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "wrapperClass",
      description: "Class to be applied to the drawer container."
    }
  },
  {
    id: "2",
    data: {
      name: "direction",
      description: "Direction from which the drawer will slide in."
    }
  },
  {
    id: "3",
    data: {
      name: "modelValue",
      description: "Boolean value to control the visibility of the drawer."
    }
  },
  {
    id: "4",
    data: {
      name: "autoClose",
      description: "Boolean value to close the drawer when clicked outside."
    }
  },
  {
    id: "5",
    data: {
      name: "update:modelValue",
      description: "Event emitted when the drawer is closed."
    }
  }
];

export const STEPPER_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "step",
      description: "Current step of the stepper."
    }
  },
  {
    id: "2",
    data: {
      name: "completedIndicatorClass",
      description: "Class to be applied to the completed step indicator."
    }
  },
  {
    id: "3",
    data: {
      name: "activeIndicatorClass",
      description: "Class to be applied to the active step indicator."
    }
  },
  {
    id: "4",
    data: {
      name: "completedDividerIndicator",
      description: "Class to be applied to the divider between completed steps."
    }
  },
  {
    id: "5",
    data: {
      name: "completedHintClass",
      description: "Class to be applied to the hint text of the completed step."
    }
  }
];
