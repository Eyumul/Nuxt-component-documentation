<script setup lang="ts">
    import { ref } from 'vue';
    import FormTextfield from '../../../components/Form/Textfield.vue';

    const normalTextField = ref("");
    const passwordTextField = ref("");
    const textFieldWithIcons = ref("");
</script>

<template>
    <Story title="Form/Textfield">
        <FormTextfield
            v-model="normalTextField"
            name="normalTextField"
            placeholder="Normal Textfield"
            class="p-2 text-gray-800 focus:border-2 focus:border-gray-950"
        />
        <FormTextfield
            v-model="passwordTextField"
            name="passwordTextField"
            placeholder="Password Textfield"
            type="password"
            class="p-2 text-gray-800 focus:border-2 focus:border-gray-950"
        />
        <FormTextfield
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
                <button class="p-2 bg-gray-950 rounded-md text-white ml-4">
                Search
                </button>
            </template>
        </FormTextfield>
    </Story>
</template>