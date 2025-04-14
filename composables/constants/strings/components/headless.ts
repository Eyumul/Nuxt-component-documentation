import type { BreadcrumbNode, DefaultTableData, Prop, TabData, TableData, TableHeader } from "~/types/components";

export const BREADCRUMB_CODE = `\n//DATA
export const BREADCRUMB_DATA: BreadcrumbNode[] = [
  {
    name: "Home",
    link: "/",
    icon: "lucide:home",
  },
  {
    name: "Headless",
    link: "/#",
    icon: "logos:headlessui-icon",
  },
];

<HBreadcrumb :nodes="BREADCRUMB_DATA" />`;

export const BREADCRUMB_OVERVIEW = "The Breadcrumb component is a navigational aid that displays a hierarchical path of the user's current location within a website or application. It typically consists of a series of links, each representing a level in the hierarchy. Breadcrumbs help users understand their current position and provide a way to navigate back to previous pages."

export const BREADCRUMB_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "nodes",
      description: ""
    }
  },
];

export const CHIP_CODE = `\n<HChip
    label="chip"
    @chipClick="notify({ description: 'Chip Cliked' })"
    @iconClick="notify({ description: 'Icon Cliked' })"
/>`;

export const CHIP_OVERVIEW = "The chip component is a small, interactive element that represents a single piece of information, such as a tag, a filter, or a choice. Chips can be used to categorize content, filter search results, or select multiple options. They are often used in combination with other components, such as input fields or dropdown menus."

export const CHIP_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "lable",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "btnClass",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "trailingIcon",
      description: ""
    }
  },
];

export const HEADLESS_USAGE_TABLE_HEADER: TableHeader[] = [
  {
    text: "Props",
    value: "name"
  },
  {
    text: "Description",
    value: "description"
  }
];

export const NOTIFICATION_CODE = `\n<script setup lang="ts">
import useNotify from "@/use/notify";
const { notify } = useNotify();

// Notification
function notifyMe() {
    notify({ description: "Notify!" });
}
</script>

<template>
    <HNotification />
    <div class="flex">
        <button @click="notifyMe">Notify me</button>
    </div>
</template>`;

export const NOTIFICATION_OVERVIEW = "The notification component is a user interface element that displays important messages or alerts to the user. It can be displayed as a pop-up, a banner, or an in-line message. Notifications are commonly used to inform users of new messages, system updates, or errors."

export const NOTIFICATION_PROPS: TableData<Prop>[] = [];

export const PAGINATE_CODE = `\n<script setup lang="ts">
  // Paginate variables
  const limit = ref(10);
  const offset = ref(0);
  const currentPage = ref(1);
  const totalCount = ref(50);
<script/>

<template>
  <div class="w-full flex justify-around mb-6">
    <FormQuantity
      v-model="limit"
      name="limit"
      label="Items Per Page"
      labelClass="text-black text-center"
    />
    <div class="flex flex-col">
      <h1>Current Page</h1>
      <p class="text-center my-2 text-xl">
        {{ currentPage }}
      </p>
    </div>
    <FormQuantity
      v-model="totalCount"
      name="limit"
      label="Total Data"
      labelClass="text-black text-center"
    />
  </div>
  <HPaginate
    v-model="currentPage"
    v-model:offset="offset"
    :items-per-page="limit"
    :total-data="totalCount"
  />
</template>\n`;

export const PAGINATE_OVERVIEW = "The pagination component is a user interface element that allows users to navigate through large datasets in smaller, more manageable chunks. It typically displays a series of numbered pages or arrows, enabling users to move forward or backward through the data. Pagination is commonly used in web applications to display search results, product listings, or long articles."

export const PAGINATE_PROPS: TableData<Prop>[] = [
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
      name: "length",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "disabled",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "itemsPerPage",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "totalData",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "offset",
      description: ""
    }
  },
];

export const PROGRESS_CODE = `\n<script setup lang="ts">
  // Progress variable
  const isLoading = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <p>Is Loading:</p>
    <FormSwitch v-model="isLoading" name="isLoading" />
  </div>
  <HProgress v-model="isLoading" />
</template>\n`;

export const PROGRESS_OVERVIEW = "The progress bar component is a visual indicator that shows the progress of a task or process. It can be displayed as a horizontal bar that fills up over time, or as a circular indicator that rotates. Progress bars are commonly used to show the progress of file uploads, downloads, software installations, or any other lengthy operation. "

export const PROGRESS_PROPS: TableData<Prop>[] = [
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
      name: "class",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "color1",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "color2",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "color3",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "height",
      description: ""
    }
  },
];

export const TAB_CODE = `\n<script setup lang="ts">
import type { TabData } from "~/type/components"
const TABS_DATA: TabData[] = [
  {
    name: "Home",
    icon: "lucide:home",
    value: "home",
  },
  {
    name: "Services",
    icon: "lucide:cloud-cog",
    value: "services",
  },
  {
    name: "About",
    icon: "lucide:info",
    value: "about",
  },
];
<script>

<template>
  <HTab :tabs="TABS_DATA">
      <template #home>
          <p>Home</p>
      </template>
      <template #services>
          <p>Services</p>
      </template>
      <template #about>
          <p>About</p>
      </template>
  </HTab>
</template>\n`;

export const TAB_OVERVIEW = "The tab component is a user interface element that organizes content into different sections or views. It typically consists of a set of tabs, each representing a specific section, and a content area that displays the content of the selected tab. Tabs are commonly used to organize complex information, such as settings, options, or multiple pages of content."

export const TAB_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "tabs",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "disableTabIndex",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "disableTabClass",
      description: ""
    }
  },
];

export const TABLE_CODE = `\n<HTable :headers="TABLE_HEADER", :items="TABLE_ITEMS">
    <template #row="{headers, item}">
        <td v-for="header in headers" :key="header.value">
            <HVRow :item="item" :header="header">
                <template #name="{item}">
                    {{ item.user.full_name }}
                </template>
                <template #email="{item}">
                    {{ item.user.email }}
                </template>
                <template #date="{item}">
                    {{ item.pickup_date }}
                </template>
                <template #price="{item}">
                    {{ item.price }}
                </template>
            </HVRow>
        </td>
    </template>
</HTable>`;

export const TABLE_OVERVIEW = "The Table component provides a structured way to display data in rows and columns. It allows for organizing information clearly, making it easy for users to view and compare data. Features can include sorting, filtering, pagination, and customizable columns. Ideal for displaying large datasets, the Table component ensures efficient navigation and data manipulation, enhancing user experience."

export const TABLE_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "headers",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "hasRecordPerPage",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "hasDateFilter",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "items",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "checkedItems",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "checkedItemsData",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "hasCheckedBox",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "rowStyle",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "rowHeadStyle",
      description: ""
    }
  },
  {
    id: "10",
    data: {
      name: "sort",
      description: ""
    }
  },
  {
    id: "11",
    data: {
      name: "loading",
      description: ""
    }
  },
  {
    id: "12",
    data: {
      name: "color1",
      description: ""
    }
  },
  {
    id: "13",
    data: {
      name: "color2",
      description: ""
    }
  },
  {
    id: "14",
    data: {
      name: "color3",
      description: ""
    }
  },
  {
    id: "15",
    data: {
      name: "supporterClass",
      description: ""
    }
  },
  {
    id: "16",
    data: {
      name: "supportHeaderClass",
      description: ""
    }
  },
  {
    id: "17",
    data: {
      name: "enableDiselector",
      description: ""
    }
  },
  {
    id: "18",
    data: {
      name: "checkBoxType",
      description: ""
    }
  },
  {
    id: "19",
    data: {
      name: "imgPath",
      description: ""
    }
  },
  {
    id: "20",
    data: {
      name: "imageName",
      description: ""
    }
  },
];

export const BREADCRUMB_DATA: BreadcrumbNode[] = [
    {
      name: "Home",
      link: "/",
      icon: "lucide:home",
    },
    {
      name: "Headless",
      link: "/#",
      icon: "logos:headlessui-icon",
    },
];

export const TABS_DATA: TabData[] = [
    {
      name: "Home",
      icon: "lucide:home",
      value: "home",
    },
    {
      name: "Services",
      icon: "lucide:cloud-cog",
      value: "services",
    },
    {
      name: "About",
      icon: "lucide:info",
      value: "about",
    },
];

export const TABLE_DATA: TableData<DefaultTableData>[] = [
    {
        "id": "skdjfa",
        data: {
            "address": {
                "pickup_address": {
                    "lat": 37.4585,
                    "lng": 3.3271,
                    "city": "South Dax",
                    "street_name": "30177 E 8th Street"
                },
                "dropoff_address": {
                    "lat": 38.2133,
                    "lng": 13.4923,
                    "city": "Fort Noemyland",
                    "street_name": "2901 Brandyn Dale"
                }
            },
            "user": {
                "full_name": "Chadd Quigley",
                "email": "Annabelle.Kutch85@gmail.com"
            },
            "phone_number": "602-207-3126 x9518",
            "pickup_date": "2024-01-05T09:09:20.132Z",
            "price": 142,
            "dropoff_date": "2025-07-11T11:28:52.984Z",
            "passengers": 1,
            "pickup_amount": 1,
            "dropoff_amount": 1,
            "trip_type": "Ambulance",
            "round_type": "1 way"
        }
    },
    {
        "id": "skjdfalj",
        data:{
            "address": {
                "pickup_address": {
                    "lat": 36.5317,
                    "lng": 2.9272,
                    "city": "Daynefield",
                    "street_name": "915 Eleonore Loaf"
                },
                "dropoff_address": {
                    "lat": 37.704,
                    "lng": 8.7249,
                    "city": "North Jaredton",
                    "street_name": "27274 Schulist Manors"
                }
            },
            "user": {
                "full_name": "Emily Howell",
                "email": "Darrell.Rolfson94@yahoo.com"
            },
            "phone_number": "922-448-6441 x4246",
            "pickup_date": "2023-10-27T21:28:13.538Z",
            "price": 656,
            "dropoff_date": "2024-09-02T17:01:01.626Z",
            "passengers": 2,
            "pickup_amount": 1,
            "dropoff_amount": 1,
            "trip_type": "Wheelchair",
            "round_type": "2way"
        }
    },
    {
        "id": "skdjkkk",
        data: {
            "address": {
                "pickup_address": {
                    "lat": 30.9951,
                    "lng": 1.4386,
                    "city": "Thielcester",
                    "street_name": "8501 Muller Cliffs"
                },
                "dropoff_address": {
                    "lat": 37.0146,
                    "lng": 9.2018,
                    "city": "West Susie",
                    "street_name": "86399 Martin Luther King Boulevard"
                }
            },
            "user": {
                "full_name": "Rachelle Hayes",
                "email": "Britney57@gmail.com"
            },
            "phone_number": "290-415-1161",
            "pickup_date": "2024-05-18T01:35:50.391Z",
            "price": 326,
            "dropoff_date": "2025-01-28T11:42:00.793Z",
            "passengers": 2,
            "pickup_amount": 2,
            "dropoff_amount": 1,
            "trip_type": "Wheelchair",
            "round_type": "2way"
        }
    }
];

export const TABLE_HEADER: TableHeader[] = [
    { text: "Name", value: "name" },
    { text: "Email", value: "email" },
    { text: "Date", value: "date" },
    { text: "Price", value: "price" },
];