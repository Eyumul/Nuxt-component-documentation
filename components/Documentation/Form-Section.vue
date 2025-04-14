<script setup lang="ts">
import { CHECK_BOX_OVERVIEW, CHECK_BOX_PROPS, CHOICES, DATE_PICKER_OVERVIEW, DATE_PICKER_PROPS, DEFAULT_LIST_ITEMS, DROPDOWN_ITEMS, DROPDOWN_OVERVIEW, DROPDOWN_PROPS, ETH_DATE_PICKER_OVERVIEW, ETH_DATE_PICKER_PROPS, FORM_CHECK_BOX_CODE, FORM_DATE_PICKER_CODE, FORM_DROPDOWN_CODE, FORM_ETH_DATE_PICKER, FORM_LIST_SEARCH_SELECT, FORM_LIST_SELECT, FORM_MULTI_SELECT, FORM_OTP_CODE, FORM_PROFILE_PICTURE_CODE, FORM_QUANTITY_CODE, FORM_RADIO_CODE, FORM_SWITCH_CODE, FORM_TEXT_AREA_CODE, FORM_TEXT_FIELD_CODE, FORM_TIME_PICKER_CODE, FORM_USAGE_TABLE_HEADER, LIST_SEARCH_OVERVIEW, LIST_SEARCH_SELECT_PROPS, LIST_SELECT_OVERVIEW, LIST_SELECT_PROPS, MULTI_SELECT_OVERVIEW, MULTI_SELECT_PROPS, OTP_OVERVIEW, OTP_PROPS, PROFILE_PICTURE_OVERVIEW, PROFILE_PICTURE_PROPS, QUANTITY_OVERVIEW, QUANTITY_PROPS, RADIO_CHOICES, RADIO_OVERVIEW, RADIO_PROPS, SWITCH_OVERVIEW, SWITCH_PROPS, TEXT_AREA_OVERVIEW, TEXT_AREA_PROPS, TEXT_FIELD_OVERVIEW, TEXT_FIELD_PROPS, TIME_PICKER_OVERVIEW, TIME_PICKER_PROPS } from '~/composables/constants/strings/components/form';
import { ref } from 'vue';

// Textfield variables
const normalTextField = ref("");
const passwordTextField = ref("");
const textFieldWithIcons = ref("");

// Checkbox
const checkedItems = ref<any[]>([])
const check = (value: any) => {
    if (checkedItems.value.indexOf(value) === -1) {
        checkedItems.value.push(value);
    } else {
        checkedItems.value = checkedItems.value.filter((item) => item !== value);
    }
};

// Radio variable
const selectedRadio = ref<any>();

// OTP variable
const otp = ref("")

// Quantity variable
const age = ref(18)

// Textarea variable
const textArea = ref("")

// Date Picker variables
import { EtDatetime } from 'abushakir';
const selectedDate = ref<Date>(new Date(new Date().setDate(new Date().getDate() + 1)));
const selectedDates = ref<Date[]>([]);

// Ethiopian Date Picker variables
const selectedEthiopianDate = ref<EtDatetime>();
const selectedEthiopianDates = ref<EtDatetime[]>([]);

// Dropdown variable
import type { DropdownItem, TabData } from '~/types/components';
const item = ref<DropdownItem>(DROPDOWN_ITEMS[0]);

// List Select variable
const listselect = ref<string>("");

// List Select Search variables
const listSearchSelect = ref<string>("item1");
const search = ref();
const onSearch = (value: any) => {
    search.value = value;
};

// Profile Picture variable
const profileImage = ref()

// Switch variable
const isOn = ref(false)

// Time Picker variable
import type { Time } from '~/types/components';
const time = ref<Time>({ hours: 0, minutes: 0 });

</script>

<template>
    <DocumentationDisplay title="Textfield" id="textfield" :code="FORM_TEXT_FIELD_CODE" :overview="TEXT_FIELD_OVERVIEW">
        <template #preview>
            <FormTextfield v-model="normalTextField" name="name" placeholder="normal textfield"
                class="p-2 focus:border-2 focus:border-gray-950" />
            <FormTextfield v-model="passwordTextField" name="password" placeholder="password textfield"
                type="password" class="p-2 focus:border-2 focus:border-gray-950" trailingIcon="lucide:eye">
                <template #label>
                    <span class="text-sm p-2">Password</span>
                </template>
            </FormTextfield>
            <FormTextfield v-model="textFieldWithIcons" name="icon" placeholder="textfield with icons"
                class="p-2 focus:border-2 focus:border-gray-950" leadingIcon="lucide:search"
                leadingIconClass="text-gray-950 ml-2" trailingIcon="lucide:x"
                trailingIconClass="text-gray-950 mr-2">
                <template #button>
                    <button class="p-2 bg-gray-950 rounded-md text-white ml-4">
                        Search
                    </button>
                </template>
            </FormTextfield>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="TEXT_FIELD_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
                <h1 class="text-xl font-semibold">Slots</h1>
                <ul class="flex flex-col gap-2 px-3 list-disc">
                    <li><span class="text-primary-700 dark:text-primary-400">label</span> - </li>
                    <li><span class="text-primary-700 dark:text-primary-400">leading</span> - </li>
                    <li><span class="text-primary-700 dark:text-primary-400">trailing</span> - </li>
                    <li><span class="text-primary-700 dark:text-primary-400">button</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Checkbox" id="checkbox" :code="FORM_CHECK_BOX_CODE" :overview="CHECK_BOX_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <div>
                    <FormCheckbox v-for="(choice, index) in CHOICES" :key="index" :modelValue="checkedItems"
                        :data="choice" class="text-primary-500 focus:outline-none focus:ring-0"
                        :hideDetails="index === 0" @update:modelValue="(_: String[]) => check(choice.value)" />
                </div>
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="CHECK_BOX_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Radio" id="radio" :code="FORM_RADIO_CODE" :overview="RADIO_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <FormRadio :modelValue="selectedRadio" :items="RADIO_CHOICES" name="radio"
                    class="flex items-center gap-6 focus:outline-none focus:ring-0"
                    @update:modelValue="(val) => (selectedRadio = val)" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="RADIO_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="OTP Field" id="otp_field" :code="FORM_OTP_CODE" :overview="OTP_OVERVIEW" >
        <template #preview>
            <FormOTPField v-model="otp" :fields="6"
                class="p-2 border-gray-500 focus:border-2 focus:border-primary-800" />
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="OTP_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Quantity" id="quantity" :code="FORM_QUANTITY_CODE" :overview="QUANTITY_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <FormQuantity v-model="age" :min="18" :max="100" helperText="Please enter your age" label="age"
                    name="age" labelClass="text-gray-950" formClass="w-[10rem]"
                    class="p-2 text-gray-950 focus:border-2 focus:border-gray-950" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="QUANTITY_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Textarea" id="textarea" :code="FORM_TEXT_AREA_CODE" :overview="TEXT_AREA_OVERVIEW">
        <template #preview>
            <FormTextarea v-model="textArea" name="name" placeholder="textarea"
                class="p-2 text-gray-800 focus:border-2 focus:border-gray-950" />
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="TEXT_AREA_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Date Picker" id="date_picker" :code="FORM_DATE_PICKER_CODE" :overview="DATE_PICKER_OVERVIEW" >
        <template #preview>
            <div class="flex flex-col gap-14">
                <div class="flex flex-col gap-2">
                    <span>Single date picker</span>
                    <FormDatePicker v-model="selectedDate" :disabled-dates="[new Date()]"
                        @update:modelValue="(newDate: Date) => selectedDate = newDate" />
                    <span class="text-sm">Selected date: {{ selectedDate.toISOString().split("T")[0] }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span>Multiple date picker</span>
                    <FormDatePicker v-model="selectedDates" :multiDates="true" :maxNumberOfDates="3"
                        @update:modelValue="(newDates: Date[]) => selectedDates = newDates" />
                    <span class="text-sm">Selected dates:
                        {{ selectedDates
                            .map((date) => date.toISOString().split("T")[0])
                            .join(", ") }}
                    </span>
                </div>
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="DATE_PICKER_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Ethiopian Date Picker" id="ethiopian_date_picker" :code="FORM_ETH_DATE_PICKER" :overview="ETH_DATE_PICKER_OVERVIEW">
        <template #preview>
            <div class="flex flex-col gap-14">
                <div class="flex flex-col gap-2">
                    <span>Single date picker</span>
                    <FormEthiopianDatePicker v-model="selectedEthiopianDate"
                        :disabled-dates="[new EtDatetime()]"
                        @update:model-value="(newDate: EtDatetime) => selectedEthiopianDate = newDate" />
                    <span class="text-sm">Selected date:
                        {{ selectedEthiopianDate?.toIso8601String().split("T")[0] }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <span>Multiple date picker</span>
                    <FormEthiopianDatePicker v-model="selectedEthiopianDates as EtDatetime[]"
                        :disabled-dates="[new EtDatetime(), new EtDatetime(2016, 12, 23)]" :multiDates="true"
                        :maxNumberOfDates="3"
                        @update:modelValue="(newDates: EtDatetime[]) => selectedEthiopianDates = newDates" />
                    <span class="text-sm">Selected dates:
                        {{
                            selectedEthiopianDates
                                .map((date) => date?.toIso8601String().split("T")[0])
                                .join(", ")
                        }}</span>
                </div>
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="ETH_DATE_PICKER_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Dropdown" id="dropdown" :code="FORM_DROPDOWN_CODE" :overview="DROPDOWN_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <FormDropdown label="Select item" :items="DROPDOWN_ITEMS"
                    @update:model-value="(val) => (item = val)" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="DROPDOWN_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="List Select" id="list_select" :code="FORM_LIST_SELECT" :overview="LIST_SELECT_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <FormListSelect label="Select item" :items="DEFAULT_LIST_ITEMS" name="item"
                    v-model:model-value="listselect" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="LIST_SELECT_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
                <h1 class="text-xl font-semibold">Slots</h1>
                <ul class="flex flex-col gap-2 px-3 list-disc">
                    <li><span class="text-primary-700 dark:text-primary-400">label</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Multi Select" id="multi_select" :code="FORM_MULTI_SELECT" :overview="MULTI_SELECT_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <FormMultiSelect :items="DEFAULT_LIST_ITEMS" :name="'multi-select'" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="MULTI_SELECT_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="List Search Select" id="list_search_select" :code="FORM_LIST_SEARCH_SELECT" :overview="LIST_SEARCH_OVERVIEW">
        <template #preview>
            <div class="flex justify-center">
                <FormListSearchSelect :items="DEFAULT_LIST_ITEMS" :label="'List Search Select'"
                    v-model="listSearchSelect" @search="onSearch" :name="'pricing'" :clearable="true" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="LIST_SEARCH_SELECT_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
                <h1 class="text-xl font-semibold">Slots</h1>
                <ul class="flex flex-col gap-2 px-3 list-disc">
                    <li><span class="text-primary-700 dark:text-primary-400">label</span> - </li>
                    <li><span class="text-primary-700 dark:text-primary-400">leadingIcon</span> - </li>
                    <li><span class="text-primary-700 dark:text-primary-400">option</span> - </li>
                </ul>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Profile Picture" id="profile_picture" :code="FORM_PROFILE_PICTURE_CODE" :overview="PROFILE_PICTURE_OVERVIEW" >
        <template #preview>
            <div class="flex w-fit self-center justify-center">
                <FormProfilePicture label="Upload Profile" v-model:image="profileImage" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="PROFILE_PICTURE_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Switch" id="switch" :code="FORM_SWITCH_CODE" :overview="SWITCH_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <FormSwitch v-model="isOn" name="switch" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="SWITCH_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
    <DocumentationDisplay title="Time Picker" id="time_picker" :code="FORM_TIME_PICKER_CODE" :overview="TIME_PICKER_OVERVIEW" >
        <template #preview>
            <div class="flex justify-center">
                <FormTimePicker v-model="time" label="Add Time"
                    labelClass="w-max border-2 text-sm p-4 rounded-md" />
            </div>
        </template>
        <template #usage>
            <div class="flex flex-col gap-3 px-2">
                <h1 class="text-xl font-semibold">Props</h1>
                <HTable :headers="FORM_USAGE_TABLE_HEADER" , :items="TIME_PICKER_PROPS">
                    <template #row="{ headers, item }">
                        <td v-for="header in headers" :key="header.value">
                            <HVRow :item="item" :header="header" class="border-b border-gray-600 dark:border-white">
                                <template #name="{ item }">
                                    <span class="px-2 py-1 text-primary-700 dark:text-primary-400">{{ item.data.name }}</span>
                                </template>
                                <template #description="{ item }">
                                    {{ item.data.description }}
                                </template>
                            </HVRow>
                        </td>
                    </template>
                </HTable>
            </div>
        </template>
    </DocumentationDisplay>
</template>