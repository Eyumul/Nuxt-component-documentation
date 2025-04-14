<script setup lang="ts">
    import { ref } from "vue";
    import { EtDatetime } from "abushakir";
    import { ETHIOPIAN_DATE_NAMES, ETHIOPIAN_MONTH_NAMES } from "~/composables/constants/date";
    import { getDayStyle, getETCTable, getEvange } from "~/composables/functions/date";

    const emits = defineEmits(['update:modelValue']);

    const props = defineProps({
        modelValue: {
            type: [EtDatetime, Array<EtDatetime>],
            default: () => new EtDatetime()
        },
        disabledDates: {
            type: Array<EtDatetime>,
            default: () => []
        },
        maxNumberOfDates: {
            type: Number,
            default: 1
        },
        multiDates: {
            type: Boolean,
            default: false
        },
    });
    
    const date = ref(new EtDatetime());
    const firstDate = ref(new EtDatetime(date.value.year, date.value.month, 1));
    const open = ref(false);
    const days = ref(date.value.month === 13 ? getEvange(date.value.year) === "ዮሐንስ" ? 6 : 5 : 30);
    const selectedDate = ref<EtDatetime>();
    const selectedDates = ref<EtDatetime[]>([]);

    const select = (day: number, month: number, year: number) => {
        if(!props.disabledDates.some(date => date.year === year && date.month === month && date.day === day)){
            if(props.multiDates) {
                if(selectedDates.value.length < props.maxNumberOfDates) {
                    if(selectedDates.value.some(date => date.day === day && date.month === month && date.year === year)) {
                        selectedDates.value = selectedDates.value.map(date => {
                            if(date.day === day && date.month === month && date.year === year) {
                                return undefined;
                            }
                            return date;
                        }).filter(date => date !== undefined);
                    } else {
                        selectedDates.value = [...selectedDates.value, new EtDatetime(year, month, day)];
                    }
                }else {
                    if(selectedDates.value.some(date => date.day === day && date.month === month && date.year === year)) {
                        selectedDates.value = selectedDates.value.map(date => {
                            if(date.day === day && date.month === month && date.year === year) {
                                return undefined;
                            }
                            return date;
                        }).filter(date => date !== undefined);
                    }
                }
            }else {
                if(selectedDate.value?.day === day && selectedDate.value?.month === month && selectedDate.value?.year === year) {
                    selectedDate.value = undefined;
                }else {
                    selectedDate.value = new EtDatetime(year, month, day);
                }
            }
        }
    }

    const nextMonth = () => {
        if(date.value.month === 12) {
            date.value = new EtDatetime(date.value.year + 1, 13, 1);
        }else {
            date.value = new EtDatetime(date.value.year, date.value.month + 1, date.value.day);
        }  
    }

    const prevMonth = () => {
        if(date.value.month === 1) {
            date.value = new EtDatetime(date.value.year - 1, 13, 1);
        }else {
            date.value = new EtDatetime(date.value.year, date.value.month - 1, date.value.day);
        }
    }

    watch(date, (newVal) => {
        days.value = date.value.month === 13 ? getEvange(date.value.year) === "ዮሐንስ" ? 6 : 5 : 30;
        firstDate.value = new EtDatetime(newVal.year, newVal.month, 1);
    }, { deep: true });

    watch(selectedDate, (newVal) => {
        emits('update:modelValue', newVal);
    });

    watch(selectedDates, (newVal) => {
        emits('update:modelValue', newVal);
    });
</script>

<template>
    <ModalsModal wrapperClass="max-w-md" v-model="open">
        <template #content>
            <div class="flex flex-col p-4 gap-4">
                <div class="flex items-center justify-evenly">
                    <Icon class="cursor-pointer" name="lucide:chevron-left" @click="prevMonth"/>
                    <span>{{ ETHIOPIAN_MONTH_NAMES[date.month - 1] }}</span>
                    <span>{{ date.year }}</span>
                    <Icon class="cursor-pointer" name="lucide:chevron-right" @click="nextMonth"/> 
                </div>
                <div class="flex flex-wrap justify-between border-b-2 border-gray-300 font-semibold items-center">
                    <span v-for="(day, index) in ETHIOPIAN_DATE_NAMES" :key="index" class="w-10">
                        {{ day.slice(0, 2) }}
                    </span>
                </div>
                <div v-for="i in 5" :key="i" class="flex flex-col gap-2">
                    <div class="flex flex-wrap justify-between items-center">
                        <span v-for="j in 7" 
                            :key="j" class="flex items-center justify-center w-10 h-10 cursor-pointer" 
                            :class="
                                getDayStyle(
                                    getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].year, 
                                    getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].month, 
                                    getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].day, 
                                    selectedDate!, selectedDates as EtDatetime[], disabledDates) !== '' ? 
                                        getDayStyle(
                                            getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].year, 
                                            getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].month, 
                                            getETCTable(firstDate.weekday,date.month, date.year, days)[i - 1][j - 1].day, 
                                            selectedDate!, selectedDates as EtDatetime[], disabledDates) :
                                                getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].style"
                            @click="() => select(
                                getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].day, 
                                getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].month,
                                getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].year)"
                            >
                            {{ getETCTable(firstDate.weekday, date.month, date.year, days)[i - 1][j - 1].day }}
                        </span>
                    </div>
                </div>
            </div>
        </template>
    </ModalsModal>
     <client-only>
        <button class="flex items-center justify-between border-2 px-4 py-2 rounded-md" @click="open = true">
            <div class="flex items-center gap-3 text-ellipsis">
                <Icon name="lucide:calendar-days"/>
                {{ multiDates ?  selectedDates.map(date => `${date.year}-${date.month}-${date.day}`).join(', ') : date.toString() }}
            </div>
            <Icon name="lucide:x" @click="multiDates ? selectedDates = [] : selectedDate = undefined"/>
        </button>
     </client-only>
</template>