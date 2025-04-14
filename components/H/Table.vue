<script
    setup
    lang="ts"
    generic="
        T extends {
            id: string;
            email_confirmation_sent?: boolean;
        } & StringKeyedObject
    "
>
import { _set, _get } from "@/composables/functions/lodash";
import type {
    TableHeader,
    StringKeyedObject,
} from "~/types/components";
const props = defineProps({
    headers: {
        type: Array<TableHeader>,
    },
    hasRecordsPerPage: {
        type: Boolean,
    },
    hasDateFilter: {
        type: Boolean,
    },
    items: {
        type: Array<T>,
        default: [],
    },
    //to store ids of checked items
    checkedItems: {
        type: Array<String>,
        default: [],
    },
    checkedItemsData: {
        type: Array<T>,
        default: [],
    },
    hasCheckBox: {
        type: Boolean,
        default: false,
    },
    rowStyle: {
        type: String,
        default: "",
    },
    rowHeadStyle: {
        type: String,
        default: "",
    },
    sort: {
        type: Array<T>,
        default: [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
    color1: String,
    color2: String,
    color3: String,
    supporterClass: {
        type: [String, Array],
    },
    supportHeaderClass: {
        type: String,
    },
    enableDiselector: {
        type: Boolean,
        default: false,
    },
    checkBoxType: {
        type: String,
        default: "checkbox",
    },
    imgPath: {
        type: String,
        default: "profile.",
    },
    imageName: {
        type: String,
        default: "profile_image",
    },
});
const emits = defineEmits([
    "click:row",
    "update:sort",
    "update:checkedItems",
    "update:checkedItemsData",
]);

const _sort = ref<StringKeyedObject>({});
onMounted(() => {
    props.sort.forEach((item) => {
        _sort.value = { ..._sort.value, ...item };
    });
});
const checkCheckedAll = computed(() => {
    return (
        props.checkedItems?.length == props.items?.length &&
        props.items?.length > 0
    );
});
function sort_by(header: TableHeader) {
    console.log("sort", _sort.value);
    if (header.sortable === false) return;
    let direction = _sort.value[header.value];
    if (direction && direction === "asc") {
        console.log("if one", _sort.value);
        _sort.value[header.value] = "desc";
    } else if (direction && direction === "desc") {
        console.log("if else", _sort.value);
        delete _sort.value[header.value];
    } else {
        console.log("else", _sort.value, header.value);
        _sort.value[header.value] = "asc";
    }
    let sort: StringKeyedObject[] = [];
    console.log("before loop", _sort.value);
    Object.keys(_sort.value).forEach((key) => {
        let obj = {};
        console.log("sortloop", key, "and", _sort.value[key]);
        _set(obj, key, _sort.value[key]);
        console.log("obj", obj);
        sort.push(obj);
    });
    console.log("final ", sort);
    emits("update:sort", sort);
}
function rowChecked(item: T, id: string) {
    emits(
        "update:checkedItems",
        Array.isArray(props.checkedItems)
            ? props.checkedItems.includes(id)
                ? props.checkedItems.filter((_id) => id !== _id)
                : [...props.checkedItems, id]
            : [id],
    );
    emits(
        "update:checkedItemsData",
        Array.isArray(props.checkedItemsData)
            ? props.checkedItemsData?.map((e) => e?.id).includes(id)
                ? props.checkedItemsData.filter((_id) => id !== _id?.id)
                : [...props.checkedItemsData, item]
            : [item],
    );
}
function rowCheckedAll() {
    emits(
        "update:checkedItems",
        props.checkedItems?.length == props.items?.length
            ? []
            : props.items.map((item) => {
                  if (
                      props.enableDiselector
                          ? !item?.email_confirmation_sent
                          : true
                  ) {
                      return item.id;
                  } else {
                      return;
                  }
              }),
    );
    emits(
        "update:checkedItemsData",
        props.checkedItems?.length == props.items?.length
            ? []
            : props.items.map((item) => {
                  if (
                      props.enableDiselector
                          ? !item?.email_confirmation_sent
                          : true
                  ) {
                      return item;
                  } else {
                      return;
                  }
              }),
    );
}
function getNestedProperty(obj: StringKeyedObject, path: string) {
    return path?.split(".").reduce((o, p) => (o ? o[p] : null), obj);
}
</script>

<template>
    <div class="h-[6px]"></div>
    <!-- component -->
    <div
        :class="!items?.length ? 'pb-60' : supporterClass"
        class="sm:rounded-lg relative border border-table-border"
    >
        <!-- FIXME loading not working -->
        <HProgress
            v-if="loading"
            height="h-[6px]"
            :color1="color1"
            :color2="color2"
            :color3="color3"
        />
        <table
            class="w-full font-body"
            :class="[items?.length ? 'divide-y divide-secondary-4' : '']"
        >
            <thead class="bg-white dark:bg-gray-700">
                <tr>
                    <th
                        v-if="hasCheckBox"
                        class="text-xs 2xl:px-4 px-2 font-bold text-left items-center dark:bg-gray-700 text-white hidden py-3 lg:table-cell tracking-wider uppercase"
                        :class="rowHeadStyle"
                    >
                        <input
                            v-if="checkCheckedAll"
                            type="checkbox"
                            @click.prevent="rowCheckedAll()"
                            :checked="checkCheckedAll"
                            class="accent-teal-800 focus:ring-primary h-4 w-4 text-primary border-primary/50 rounded text-md cursor-pointer"
                        />
                        <input
                            v-else
                            type="checkbox"
                            @click.prevent="rowCheckedAll()"
                            :checked="checkCheckedAll"
                            class="accent-teal-800 focus:ring-primary h-4 w-4 text-primary border-primary/50 rounded text-md cursor-pointer"
                        />
                    </th>
                    <th
                        class="text-xs 2xl:px-4 px-3 font-bold text-left text-black dark:text-white dark:bg-gray-700 py-3 table-cell tracking-wider uppercase overflow-clip"
                        v-for="(header, i) in headers"
                        :key="header.value"
                        :class="rowHeadStyle"
                    >
                        <span
                            class="cursor-pointer font-normal"
                            @click="sort_by(header)"
                        >
                            {{ header.text }}
                            <Icon
                                name="bi:sort-up"
                                width="20"
                                height="20"
                                v-if="
                                    _sort[header.value] === 'asc' &&
                                    header.sortable !== false
                                "
                                class="inline-block text-primary"
                            />
                            <Icon
                                name="bi:sort-down"
                                width="20"
                                height="20"
                                v-if="
                                    _sort[header.value] === 'desc' &&
                                    header.sortable !== false
                                "
                                class="inline-block text-primary"
                            />
                        </span>
                    </th>
                </tr>
            </thead>
            <span
                v-if="!loading"
                class="text-base md:text-xl xl:text-2xl text-center 3xl:text-4xl font-light absolute top-1/4"
                :class="[
                    items?.length
                        ? 'hidden'
                        : 'flex flex-col items-center gap-y-10 text-gray-400 font-normal justify-center w-full',
                ]"
            >
                <Icon
                    name="tabler:database-search"
                    class="text-8xl text-gray-300"
                />

                No Result Found
            </span>
            <tbody>
                <tr
                    :class="[rowStyle]"
                    v-for="(item, idx) in items"
                    :key="item.id"
                    @click="
                        () => {
                            $emit('click:row', item);
                        }
                    "
                    class="group hover:bg-primary/5 table-row flex-row lg:flex-no-wrap lg:shadow-none shadow mb-0 border-gray-200 rounded last:border-0 cursor-pointer"
                >
                    <td
                        v-if="hasCheckBox"
                        class="h-full table-cell relative lg:static border-b py-4 2xl:px-4 px-2 2xl:text-sm text-xs"
                        :class="[
                            rowStyle,
                            checkBoxType === 'image'
                                ? 'w-full lg:w-24'
                                : 'w-full lg:w-14',
                        ]"
                    >
                        <span v-if="checkedItems.includes(item.id)">
                            <input
                                type="checkbox"
                                :id="`chk${idx}`"
                                :checked="checkedItems.includes(item.id)"
                                :disabled="
                                    enableDiselector
                                        ? item?.email_confirmation_sent
                                        : false
                                "
                                @click.stop="rowChecked(item, item.id)"
                                class="accent-teal-800 focus:ring-primary h-4 w-4 text-primary border-primary/50 rounded text-md cursor-pointer"
                                :class="
                                    checkBoxType === 'image' ? 'hidden' : ''
                                "
                            />
                            <label
                                :for="`chk${idx}`"
                                @click.stop
                                v-if="checkBoxType === 'image'"
                            >
                                <div
                                    class="h-14 w-14 ring-2 ring-primary duration-300 transition-all flex-shrink-0 rounded-full overflow-clip bg-center bg-cover"
                                    :style="`background-image: url('${
                                        getNestedProperty(
                                            item,
                                            imgPath + imageName,
                                        ) || '/images/avatar.png'
                                    }');`"
                                ></div>
                            </label>
                        </span>
                        <span v-else>
                            <input
                                :id="`unchk${idx}`"
                                type="checkbox"
                                :checked="checkedItems.includes(item.id)"
                                @click.stop="rowChecked(item, item.id)"
                                :disabled="
                                    enableDiselector
                                        ? item?.email_confirmation_sent
                                        : false
                                "
                                class="accent-accent-teal-800 focus:ring-primary h-4 w-4 text-primary border-primary/50 rounded text-md cursor-pointer"
                                :class="
                                    checkBoxType === 'image' ? 'hidden' : ''
                                "
                            />
                            <label
                                :for="`unchk${idx}`"
                                v-if="
                                    !checkedItems.includes(item.id) &&
                                    checkBoxType === 'image'
                                "
                                @click.stop
                            >
                                <div
                                    class="h-14 w-14 flex-shrink-0 ring-1 ring-primary/50 duration-300 transition-all rounded-full overflow-clip bg-center bg-cover"
                                    :style="`background-image: url('${
                                        getNestedProperty(
                                            item,
                                            imgPath + imageName,
                                        ) || '/images/avatar.png'
                                    }');`"
                                ></div>
                            </label>
                        </span>
                    </td>
                    <slot
                        name="row"
                        :item="item"
                        :headers="headers"
                        :get="_get"
                    >
                        <td
                            v-for="header in headers"
                            :key="header.value"
                            :class="rowStyle"
                            class="w-full font-body lg:w-auto block lg:table-cell relative lg:static text-left text-gray-900 rounded py-4 2xl:px-4 px-2 2xl:text-sm text-xs"
                        >
                            <span
                                class="lg:hidden text-left w-1/3 align-middle inline-block text-sm font-normal text-secondary font-body"
                                >{{ header.text }}
                            </span>
                            <slot :item="item" :name="header.value">
                                <span
                                    class="align-middle inline-block whitespace-nowrap font-body lg:w-7/12 xl:w-9/12"
                                    v-if="header.value == 'roll_no'"
                                >
                                    {{ idx + 1 }}
                                </span>
                                <span
                                    class="align-middle inline-block overflow-ellipsis overflow-hidden whitespace-nowrap font-body lg:w-7/12 xl:w-9/12 truncate"
                                    v-else-if="header.value == 'full_name'"
                                >
                                    <!-- <PersonTypeIndicator :type="item.type" /> -->

                                    {{ _get(item, header.value) || "-" }}
                                </span>
                                <span
                                    class="lg:w-10/12 xl:w-11/12 align-middle inline-block overflow-ellipsis overflow-hidden whitespace-nowrap font-body truncate"
                                    v-else
                                >
                                    {{ _get(item, header.value) || "-" }}
                                </span>
                            </slot>
                        </td>
                    </slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
span[id^="chk"] {
    position: relative;
    display: flex;
    width: 30px;
    border-radius: 50%;
}
label {
    border: 1px solid #fff;
    display: block;
    position: relative;
    cursor: pointer;
    /* width: 30px; */
    /* background: #333; */
    border-radius: 50%;
}
label:before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid #80cbc4;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 18px;
    transition-duration: 0.4s;
    transform: scale(0);
}
label img {
    height: 50px;
    width: 50px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
    border-radius: 50%;
}
:checked + label {
    /* border-color: #ddd; */
    /* background: #333; */
    /* border-radius: 50%; */
    width: 60px;
}
:checked + label:before {
    content: "✓";
    background-color: #009688;
    transform: scale(1);
    z-index: 10;
    margin-left: 75%;
}
:checked + label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #80cbc4;
    z-index: -1;
}
.centering {
    position: absolute;
    bottom: -1%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
