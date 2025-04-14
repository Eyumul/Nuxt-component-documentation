<script setup lang="ts">
    import { ref } from "vue";
    import HPaginate from "../../../components/H/Paginate.vue";

    const limit = ref(4);
    const offset = ref(0);
    const currentPage = ref(1);
    const totalCount = ref(50);
</script>

<template>
    <Story title="H/Paginate">
        <HPaginate
            v-model="currentPage"
            v-model:offset="offset"
            :items-per-page="limit"
            :total-data="totalCount"
        />
    </Story>
</template>