<script setup lang="ts">
    import { ref } from 'vue';
    import { DEFAULT_STEPS } from '~/composables/constants/strings';
    import CommonStepper from '@/components/Common/Stepper.vue';

    const step = ref(1);

    const next = () => {
        if(step.value < DEFAULT_STEPS.length + 1) {
            step.value++;
        }
    }

    const previous = () => {
        if(step.value > 0) {
            step.value--;
        }
    }
</script>

<template>
    <Story title="Common/Stepper">
        <div class="flex flex-col justify-start p-4 gap-4">
            <div class="flex items-center justify-between">
                <button class="flex items-center justify-center px-3 py-1" @click="next">Next</button>
                <button class="flex items-center justify-center px-3 py-1" @click="previous">Previous</button>
            </div>
            <CommonStepper 
                :step="step"  
                :steps="DEFAULT_STEPS"
                completed-indicator-class="bg-blue-500 text-white rounded-full"
                active-indicator-class="bg-gray-300 rounded-full"
                completed-divider-indicator="bg-blue-500 h-2"
                completed-hint-class="text-blue-500"
            />
        </div>
    </Story>
</template>