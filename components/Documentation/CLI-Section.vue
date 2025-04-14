<script setup lang="ts">
    const FOLDER_STRUCTURE: string = `
        your-project
        |   assets
        |   |   css
        |   |   |   main.css
        |   |   |   tailwind.css
        |   |   images
        |   components
        |   |   Common
        |   |   File-Upload
        |   |   Form
        |   |   H
        |   |   Modals 
        |   composables
        |   |   constants
        |   |   |   strings.ts
        |   |   |   date.ts
        |   |   functions
        |   |   |   date.ts
        |   |   |   file.ts
        |   |   |   lodash.ts
        |   |   |   time.ts
        |   layouts
        |   |    default.vue
        |   pages
        |   |   index.vue
        |   plugins
        |   |   rules.ts
        |   public
        |   server
        |   types
        |   |   components.d.ts
        |   |   file.d.ts
        |   |   validation.d.ts
        |   use
        |   |   notify.ts
        |   .gitignore
        |   app.vue
        |   nuxt.config.ts
        |   package.json
        |   README.md
        |   tailwind.config.ts
        |   tsconfig.json
    `;
</script>

<template>
    <div class="flex flex-col gap-6">
        <h1 class="text-[32px] uppercase xl:text-[30px] font-bold text-center md:text-start">CLI Integration</h1>
        <div class="flex flex-col gap-3">
            <span id="installation_and_setting_up_cli" class="text-xl md:text-[16px] text-center md:text-start font-bold">Installation and Setup</span> 
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li>Download the binary</li>
                <DocumentationClipboard content="curl -L -o minab-components 'https://docs.google.com/uc?export=download&id=1POT2D1xwBHobBHexvHmBITzbg9LUPmU7'"/>
                <li>Give executable permission to the binary</li>
                <DocumentationClipboard content="sudo chmod +x minab-components"/>
                <li>Move the binary to the bin directory</li>
                <DocumentationClipboard content="sudo mv minab-components /usr/local/bin"/>
            </ul>
            <span id="setting_up_a_project_with_cli" class="text-xl md:text-[16px] text-center md:text-start font-bold">Setting Up a Project with CLI</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <DocumentationClipboard content="minab-components create"/>
                <p><u><b>Note:</b></u> The CLI prompts us the name of our project, preferable programming language, package manager and components. After our project is created, the CLI provide us the next step to run our project.</p>
            </ul>
            <span id="adding_components_with_cli" class="text-xl md:text-[16px] text-center md:text-start font-bold">Adding Components with CLI</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li>We can add components to our existing project by providing the name of the components for this CLI command</li>
                <DocumentationClipboard content="minab-components chip table"/>
            </ul>
            <span id="project_structure_overview" class="text-xl md:text-[16px] text-center md:text-start font-bold">Project Structure Overview</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li>After creating new project with the CLI, our project will have the following folder strucutre.</li>
                <DocumentationCodeBlock :code="FOLDER_STRUCTURE" :sharable="false"/>
                <p><u><b>Note:</b></u> almost all of the folders and files that are avaliable in the Typescript version are avaliable in the Javascript version except the <code>types</code> folder and <code>.ts</code> files will have <code>.js</code> extension.</p>
            </ul>
        </div>
    </div>
</template>