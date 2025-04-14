<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col gap-6">
        <h1 class="text-[32px] uppercase xl:text-[30px] font-bold text-center md:text-start">Guides</h1>
        <div class="flex flex-col gap-3">
            <span id="best_practice" class="text-xl md:text-[16px] text-center md:text-start font-bold">Best Practices</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li><u><b>Creating custom component:</b></u> create a corresponding <code>.vue</code> file for your custom component in <b>Common</b>, <b>Form</b>, <b>File upload</b>, <b>Modal</b> or <b>Headless (H)</b> folder in the <b>components</b> folder based on the type of the component using this format <i>Component-Name</i>.
                     If the new component can't be in the current categories (Common, Form, File upload, Modals and Headless), create new folder to represent it's category and put the <code>.vue</code> file there. Finally avoid using both Javascript and Typescript.</li>
                <li><u><b>Creating custom composable (utility function):</b></u> create a corresponding <code>.ts</code> or <code>.js</code> in the <b>composables</b> folder. If the file contains exported constant values, refactor them to the <code>strings.ts</code> file located in the <b>constants</b> folder. If not put the <code>.ts</code> or <code>.js</code>
                    file in the one existing folders (date, file, lodash, time) in <b>functions</b> folder based on the type of the composable function. 
                </li>
                <li><u><b>Creating custom type definition:</b></u> if the type definition is related to a custom component, put the type definition in the <code>component.d.ts</code> file in the <b>types</b> folder. If not create a corresponding <code>.d.ts</code> file in the <b>types</b> folder</li>
                <li><u><b>Adding asset files:</b></u> put the corresponding asset file in the folder based on the file type.</li>
            </ul>
        </div>
        <div class="flex flex-col gap-3">
            <span id="troubleshooting" class="text-xl md:text-[16px] text-center md:text-start font-bold">Troubleshooting</span>
            <p>If you are getting any errors or a componet isn't rendered as expected follow these steps:</p>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li>Make sure to check the nitro server log in your IDE and the developer console in your browser.</li>
                <li>Use nuxt dev tools to inspect the components that are rendered.</li>
                <li>Check the corresponding <code>.vue</code> file of the component in your IDE to check if there are errors or not.</li>
                <li>If the issue can't be fixed or tracked using the above methods, create an issue in the <a class="text-blue-500 underline" href="https://gitlab.com/besumicheal/minab-nuxtjs-typescript-template" target="_blank">Gitlab repo</a></li>
            </ul>
        </div>
    </div>
</template>