import type { CheckboxItem, DropdownItem, ListSelectItem, Prop, TableData, TableHeader } from "~/types/components";

export const FORM_CHECK_BOX_CODE = `\n<script setup lang="ts">
import type { CheckboxItem } from "~/type/components"
const CHOICES: CheckboxItem[] = [
  {
    label: "Choice 1",
    value: "choice1",
    description: "Choice 1 description",
  },
  {
    label: "Choice 2",
    value: "choice2",
    description: "Choice 2 description",
  },
  {
    label: "Choice 3",
    value: "choice3",
    description: "Choice 3 description",
  },
];

const checkedItems = ref<any[]>([])
const check = (value: any) => {
  if (checkedItems.value.indexOf(value) === -1) {
    checkedItems.value.push(value);
  } else {
    checkedItems.value = checkedItems.value.filter((item) => item !== value);
  }
};
</script>

<template>
  <FormCheckBox v-for="(choice, index) in CHOICES" :key="index"
    class="text-primary-500 focus:outline-none focus:ring-0"
    :modelValue="checkedItems"
    :data="choice"
    :hideDetails="index === 0"
    @update:modelValue="_ => check(choice.value)"
  />
</template>`;

export const CHECK_BOX_OVERVIEW = "The Checkbox component is a simple input element that allows users to select or deselect one or more options from a list. It typically consists of a small square box that can be checked or unchecked by clicking on it. Checkboxes are commonly used in forms to allow users to choose multiple options, such as hobbies, preferences, or agreement to terms and conditions."

export const CHECK_BOX_PROPS: TableData<Prop>[] = [
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
      name: "data",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "hideClass",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "rules",
      description: ""
    }
  },
];

export const FORM_DATE_PICKER_CODE = `\n<script setup lang="ts">
// Datepicker variables
const selectedDate = ref<Date>(new Date(new Date().setDate(new Date().getDate() + 1)));
const selectedDates = ref<Date[]>([]);
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <span>Single date picker</span>
      <FormDatePicker
        v-model="selectedDate"
        :disabled-dates="[new Date()]"
        @update:modelValue="(newDate: Date) => selectedDate = newDate"
      />
      <span class="text-sm">
        Selected date: {{ selectedDate.toISOString().split('T')[0] }}
      </span>
    </div>
    <div class="flex flex-col">
      <span>Multiple date picker</span>
      <FormDatePicker
        v-model="selectedDates"
        :multiDates="true"
        :maxNumberOfDates="3"
        @update:modelValue="(newDates: Date[]) => selectedDates = newDates"
      />
      <span class="text-sm">
        Selected dates: {{ selectedDates.map(date => date.toISOString().split('T')[0]).join(', ') }}
      </span>
    </div>
  </div>
</template>`;

export const DATE_PICKER_OVERVIEW = "The Date Picker component is a user interface element that allows users to select a specific date or date range. It typically displays a calendar-like interface where users can choose a date by clicking on it. Date pickers are commonly used in forms and applications to capture birth dates, appointment dates, or booking dates."

export const DATE_PICKER_PROPS: TableData<Prop>[] = [
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
      name: "disableDates",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "maxNumberOfDates",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "multiDates",
      description: ""
    }
  },
];

export const FORM_ETH_DATE_PICKER = `\n<span>Single date picker</span>
<FormEthiopianDatePicker
    v-model="selectedEthiopianDate"
    :disabled-dates="[new EtDatetime()]"
    @update:model-value="(newDate: EtDatetime) => selectedEthiopianDate = newDate"
/>
<span class="text-sm">Selected date: {{ selectedEthiopianDate?.toIso8601String().split('T')[0] }}</span>
<span>Multiple date picker</span>
<FormEthiopianDatePicker
    v-model="selectedEthiopianDates as EtDatetime[]"
    :disabled-dates="[new EtDatetime(), new EtDatetime(2016, 12 ,23)]"
    :multiDates="true"
    :maxNumberOfDates="3"
    @update:modelValue="(newDates: EtDatetime[]) => selectedEthiopianDates = newDates"
/>
<span class="text-sm">Selected dates: {{ selectedEthiopianDates.map(date => date?.toIso8601String().split('T')[0]).join(', ') }}</span>`;

export const ETH_DATE_PICKER_OVERVIEW = "The Ethiopian Date Picker component is a specialized user interface element that allows users to select a date according to the Ethiopian calendar. It displays a calendar-like interface with unique Ethiopian calendar features, such as the 13-month calendar and the different eras. This component is essential for applications and websites that cater to Ethiopian users and require accurate date input and processing."

export const ETH_DATE_PICKER_PROPS: TableData<Prop>[] = [
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
      name: "disableDates",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "maxNumberOfDates",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "multiDates",
      description: ""
    }
  },
];

export const FORM_DROPDOWN_CODE = `\n<FormDropdown
    label="Select item"
    :items="DROPDOWN_ITEMS"
    @update:model-value="val => item = val"
/>`;

export const DROPDOWN_OVERVIEW = "The Dropdown component is a user interface element that displays a list of options in a compact and organized manner. When clicked, it expands to reveal the options, allowing the user to select one. Dropdowns are commonly used to present choices, such as country selection, product categories, or user preferences."

export const DROPDOWN_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "items",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "label",
      description: ""
    }
  },
];

export const FORM_LIST_SELECT = `\n<FormListSelect
    label="Select item"
    :items="DEFAULT_LIST_ITEMS"
    name="item"
    v-model:model-value="listselect"
/>`;

export const LIST_SELECT_OVERVIEW = "The List Select component is a user interface element that allows users to select multiple items from a list of options. It displays a list of items, each with a checkbox or radio button, enabling users to choose one or more options. List Selects are commonly used in forms and filters to allow users to select multiple criteria or preferences."

export const LIST_SELECT_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "id",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "leadingIcon",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "trailinIcon",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "query",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "items",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "placeholder",
      description: ""
    }
  },
  {
    id: "7",  
    data: {
      name: "label",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "lableClass",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "clearable",
      description: ""
    }
  },
  {
    id: "10",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "11",
    data: {
      name: "returnObject",
      description: ""
    }
  },
  {
    id: "12",
    data: {
      name: "type",
      description: ""
    }
  },
  {
    id: "13",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "14",
    data: {
      name: "selected",
      description: ""
    }
  },
  {
    id: "15",
    data: {
      name: "loading",
      description: ""
    }
  },
  {
    id: "16",
    data: {
      name: "errorMessage",
      description: ""
    }
  },
  {
    id: "17",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "18",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "19",
    data: {
      name: "hidenDetail",
      description: ""
    }
  },
  {
    id: "20",
    data: {
      name: "disabled",
      description: ""
    }
  },
  {
    id: "21",
    data: {
      name: "listHeight",
      description: ""
    }
  },
  {
    id: "22",
    data: {
      name: "placeholderStyle",
      description: ""
    }
  },
];

export const FORM_LIST_SEARCH_SELECT = `\n<FormListSearchSelect
  :items="DEFAULT_LIST_ITEMS"
  :label="'List Search Select'"
  v-model="listSearchSelect"
  @search="onSearch"
  :name="'pricing'"
  :clearable="true"
/>`

export const LIST_SEARCH_OVERVIEW = "The List Search Select component is a user interface element that combines the functionality of a list select and a search bar. It allows users to search through a large list of options and select multiple items. As the user types in the search bar, the list filters to display only matching items. This component is useful for scenarios where there are many options to choose from, and users need to quickly find and select specific items."

export const LIST_SEARCH_SELECT_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "id",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "label",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "name",
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
      name: "text",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "value",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "search",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "selected",
      description: ""
    }
  },
  {
    id: "10",
    data: {
      name: "loading",
      description: ""
    }
  },
  {
    id: "11",
    data: {
      name: "errorMessage",
      description: ""
    }
  },
  {
    id: "12",
    data: {
      name: "placeholder",
      description: ""
    }
  },
  {
    id: "13",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "14",
    data: {
      name: "clearable",
      description: ""
    }
  },
  {
    id: "15",
    data: {
      name: "trailinIcon",
      description: ""
    }
  },
  {
    id: "16",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "17",
    data: {
      name: "supporter",
      description: ""
    }
  },
  {
    id: "18",
    data: {
      name: "hidenDetail",
      description: ""
    }
  },
  {
    id: "19",
    data: {
      name: "searchPlaceholder",
      description: ""
    }
  },
  {
    id: "20",
    data: {
      name: "disabled",
      description: ""
    }
  },
  {
    id: "21",
    data: {
      name: "placeholderStyle",
      description: ""
    }
  },
];

export const FORM_MULTI_SELECT = `\n<FormMultiSelect
    :items="DEFAULT_LIST_ITEMS"
    :name="'multi-select'"
/>`

export const MULTI_SELECT_OVERVIEW = "The Multi-Select component is a user interface element that allows users to select multiple items from a list of options. It typically displays a list of items with checkboxes, enabling users to choose one or more options. Multi-Select components are commonly used in forms and filters to allow users to select multiple criteria or preferences, such as selecting multiple tags or categories."

export const MULTI_SELECT_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "selectedChip",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "items",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "returnBy",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "showBy",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "chipStyle",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "init",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "placeholder",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "loading",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "multiple",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "value",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "trailingIcon",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "chipTextStyle",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "listClass",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "deleteItem",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "showError",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "inside",
      description: ""
    }
  },
];

export const FORM_OTP_CODE = `\n<script setup lang="ts">
// OTP variable
const otp = ref("")
</script>

<template>
  <FormOTPField
    v-model="otp"
    :fields="6"
    class="p-2 focus:border-2 focus:border-gray-950"
  />
</template>\n`;

export const OTP_OVERVIEW = "The OTP field component is a specialized input field designed to capture One-Time Passwords (OTPs). It typically consists of a series of small input boxes, each accepting a single digit. OTP fields are commonly used for two-factor authentication, ensuring secure access to accounts."

export const OTP_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "fields",
      description: ""
    }
  },
];

export const FORM_QUANTITY_CODE = `\n<FormQuantity
    v-model="age"
    :min="18"
    :max="100"
    helperText="Please enter your age"
    label="age"
    name="age"
    labelClass="text-gray-950"
    formClass="w-[10rem]"
    class="p-2 text-gray-950 focus:border-2 focus:border-gray-950"
/>`;

export const QUANTITY_OVERVIEW = "The Quantity component is an input element that allows users to specify a numerical quantity, such as the number of items to purchase or the desired quantity of a product. It typically consists of a numerical input field and buttons to increment or decrement the value. Quantity components are commonly used in e-commerce applications and shopping carts."

export const QUANTITY_PROPS: TableData<Prop>[] = [
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
      name: "label",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "labelClass",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "formClass",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "min",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "max",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "helperText",
      description: ""
    }
  },
];

export const FORM_PROFILE_PICTURE_CODE = `\n<FormProfilePicture
  label="Upload Profile"
  v-model:image="image"
/>`;

export const PROFILE_PICTURE_OVERVIEW = "The Profile Picture component is a visual element that displays a user's image, typically a headshot or avatar. It is commonly used in user profiles, chat applications, and social media platforms. Profile pictures help personalize user experiences and foster a sense of community."

export const PROFILE_PICTURE_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "image",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "label",
      description: ""
    }
  },
];

export const FORM_RADIO_CODE = `\n<FormRadio :modelValue="selectedRadio" :items="RADIO_CHOICES" name="radio"
  class="flex items-center gap-6 focus:outline-none focus:ring-0"
  @update:modelValue="(val) => (selectedRadio = val)"
/>`

export const RADIO_OVERVIEW = "The Radio component is an input element that allows users to select only one option from a list of choices. It typically consists of a small circular button that can be selected or deselected by clicking on it. Radio buttons are often used in forms to present mutually exclusive options, such as gender, size, or payment method. "

export const RADIO_PROPS: TableData<Prop>[] = [
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
      name: "items",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "label",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "labelClass",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "disabled",
      description: ""
    }
  },
];

export const FORM_SWITCH_CODE = `\n<FormSwitch v-model="isOn" name="switch" />`;

export const SWITCH_OVERVIEW = "The Switch component is a user interface element that allows users to toggle between two states, typically 'on' and 'off.' It is often represented as a small slider that can be moved between two positions. Switches are commonly used to control settings, preferences, or binary choices."

export const SWITCH_PROPS: TableData<Prop>[] = [
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
      name: "name",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "hiddenClass",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "rules",
      description: ""
    }
  },
];

export const FORM_TEXT_AREA_CODE = `\n<FormTextarea
    v-model="textArea"
    name="name"
    placeholder="textarea"
    class="p-2 text-gray-800 focus:border-2 focus:border-gray-950"
/>`;

export const TEXT_AREA_OVERVIEW = "The Text Area component is a multi-line input field that allows users to enter and edit large amounts of text. It provides a rectangular area where users can type, format, and submit text input, such as comments, reviews, or long-form content. "

export const TEXT_AREA_PROPS: TableData<Prop>[] = [
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
      name: "name",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "id",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "type",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "maxlength",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "placeholder",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "label",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "labelClass",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "trailingIcon",
      description: ""
    }
  },
  {
    id: "10",
    data: {
      name: "rows",
      description: ""
    }
  },
  {
    id: "11",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "12",
    data: {
      name: "disabled",
      description: ""
    }
  },
];

export const FORM_USAGE_TABLE_HEADER: TableHeader[] = [
  {
    text: "Props",
    value: "name"
  },
  {
    text: "Description",
    value: "description"
  }
];

export const FORM_TEXT_FIELD_CODE = `\n<script setup lang="ts">
// Textfield variables
const normalTextField = ref("");
const passwordTextField = ref("");
const textFieldWithIcons = ref("");
</script>

<template>
  <FormTextField
      v-model="normalTextField"
      name="name"
      placeholder="normal textfield"
      class="p-2 focus:border-2 focus:border-gray-950"
  />
  <FormTextField
      v-model="passwordTextField"
      name="password"
      placeholder="password textfield"
      type="password"
      class="p-2 focus:border-2 focus:border-gray-950"
      trailingIcon="lucide:eye"
  />
  <FormTextField
      v-model="textFieldWithIcons"
      name="icon"
      placeholder="textfield with icons"
      class="p-2 focus:border-2 focus:border-gray-950"
      leadingIcon="lucide:search"
      leadingIconClass="text-gray-950 ml-2"
      trailingIcon="lucide:x"
      trailingIconClass="text-gray-950 mr-2"
  >
      <template #button>
          <button class="p-2 bg-gray-950 rounded-md text-white ml-4">Search</button>
      </template>
  </FormTextField>
</template>`;

export const TEXT_FIELD_OVERVIEW = "The TextField component is a fundamental input element that allows users to enter text. It provides a rectangular area where users can type, edit, and submit text input. TextFields can be used for various purposes, such as capturing names, addresses, emails, passwords, or any other text-based information."

export const TEXT_FIELD_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "id",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "type",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "placeholder",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "label",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "labelClass",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "hideDetail",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "trailingIcon",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "leadingIcon",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "leadingIconClass",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "max",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "min",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "disabled",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "class",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "iconLeadingClass",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "placeholderStyle",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "iconBackground",
      description: ""
    }
  },
  {
    id: "1",
    data: {
      name: "mainDiv",
      description: ""
    }
  },
];

export const FORM_TIME_PICKER_CODE = `\n<script setup lang="ts">
import type { Time } from "~/types/components";
const time = ref<Time>()
</script>

<template>
    <HTimePicker v-model="time" lable="Add Time" />
</template>`;

export const TIME_PICKER_OVERVIEW = "The Time Picker component is a user interface element that allows users to select a specific time or time range. Time Pickers are commonly used in scheduling applications, appointment booking systems, and time-based workflows."

export const TIME_PICKER_PROPS: TableData<Prop>[] = [
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
      name: "label",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "labelClass",
      description: ""
    }
  },
];

export const CHOICES: CheckboxItem[] = [
    {
      label: "Choice 1",
      value: "choice1",
      description: "Choice 1 description",
    },
    {
      label: "Choice 2",
      value: "choice2",
      description: "Choice 2 description",
    },
    {
      label: "Choice 3",
      value: "choice3",
      description: "Choice 3 description",
    },
];

export const DEFAULT_LIST_ITEMS: ListSelectItem[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

export const DROPDOWN_ITEMS: DropdownItem[] = [
    {
      id: "1",
      name: "Item 1",
      value: "item1",
    },
    {
      id: 2,
      name: "Item 2",
      value: "item2",
    },
];

export const RADIO_CHOICES: CheckboxItem[] = [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
      description: "No description",
    },
];
  