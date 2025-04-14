<script setup lang="ts">
    import { ref } from 'vue';
    import { EtDatetime } from 'abushakir';
    import FormEthiopianDatePicker from '@/components/Form/Ethiopian-Date-Picker.vue';

    const selectedEthiopianDate = ref<EtDatetime>();
    const selectedEthiopianDates = ref<EtDatetime[]>([]);
</script>

<template>
    <Story title="Form/Ethiopian Date Picker">
        <div class="flex flex-col justify-start p-4 gap-4">
            <p class="text-lg font-semibold">Single Date</p>
            <FormEthiopianDatePicker 
                v-model="selectedEthiopianDate"
                :disabled-dates="[new EtDatetime(), new EtDatetime(2016, 12, 23)]"
                @update:model-value="(val: EtDatetime) => (selectedEthiopianDate = val)"
            />
            <span class="text-sm">
                Selected date:
                {{ selectedEthiopianDate?.toIso8601String().split("T")[0] }}
            </span>
            <p class="text-lg font-semibold mt-4">Multiple Date</p>
            <FormEthiopianDatePicker 
                v-model="selectedEthiopianDates as EtDatetime[]"
                :disabled-dates="[new EtDatetime(), new EtDatetime(2016, 12, 23)]"
                :multiDates="true"
                :maxNumberOfDates="3"
                @update:modelValue="(newDates: EtDatetime[]) => selectedEthiopianDates = newDates"
            />
             <span class="text-sm">
                Selected dates:
                {{
                    selectedEthiopianDates
                        .map((date) => date?.toIso8601String().split("T")[0])
                        .join(", ")
                }}
            </span>
        </div>
    </Story>
</template>