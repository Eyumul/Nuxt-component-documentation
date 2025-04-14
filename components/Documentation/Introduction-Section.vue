<script setup lang="ts">
    import { ACCORDION_CODE } from '~/composables/constants/strings/components/common';
    import type { TabData } from '~/types/components';

    const languageTab: TabData[] = [
        {
            name: "JS",
            icon: "cib:js",
            value: "js"
        },
        {
            name: "TS",
            icon: "akar-icons:typescript-fill",
            value: "ts"
        }
    ];

    const packagesTab: TabData[] = [
        {
            name: "NPM",
            icon: "cib:npm",
            value: "npm"
        },
        {
            name: "Yarn",
            icon: "cib:yarn",
            value: "yarn"
        },
        {
            name: "PNPM",
            icon: "devicon:pnpm",
            value: "pnpm"
        },
        {
            name: "Bun",
            icon: "devicon:bun",
            value: "bun"
        }
    ];
</script>

<template>
    <div class="flex flex-col gap-6">
        <h1 class="text-[32px] uppercase xl:text-[30px] font-bold text-center md:text-start">Introduction</h1>
        <span id="overview" class="text-xl md:text-[16px] text-center md:text-start font-bold">Overview</span>
        <p>Minab Components is a boilerplate project designed for efficient web development using Nuxt.js.
            Equipped with custom-built components and composables, it leverages TypeScript and
            Tailwind CSS to streamline your workflow. This template allows you to focus on building core
            features for your application rather than starting from scratch.</p>
        <div class="flex flex-col gap-3">
            <span id="installation_and_setup"
                class="text-xl md:text-[16px] text-center md:text-start font-bold">Installation and Setup</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li>Create folder for your project and navigate to it.</li>
                <DocumentationClipboard content="mkdir your-project && cd your-project" />
                <li>Download the template.</li>
                <HTab :tabs="languageTab">
                    <template #js>
                        <div class="mt-4">
                            <DocumentationClipboard content="curl -L -o template.zip 'https://drive.google.com/uc?export=download&id=1iUxIAnaXWa5qnVpjpyegIme0mQeMMzJV'" />
                        </div>
                    </template>
                    <template #ts>
                        <div class="mt-4">
                            <DocumentationClipboard content="curl -L -o template.zip 'https://drive.google.com/uc?export=download&id=1CvZR1PsbbOO_dGZY-pWRcnWu_AxQhaU9'" />
                        </div>
                    </template>
                </HTab>
                <li>Extract and remove the template archive</li>
                <DocumentationClipboard content="unzip template.zip && rm ./template.zip" />
                <li>Install packages</li>
                <div class="w-full overflow-auto">
                    <HTab :tabs="packagesTab">
                        <template #npm>
                            <div class="mt-4">
                                <DocumentationClipboard content="npm install" />
                            </div>
                        </template>
                        <template #yarn>
                            <div class="mt-4">
                                <DocumentationClipboard content="yarn" />
                            </div>
                        </template>
                        <template #pnpm>
                            <div class="mt-4">
                                <DocumentationClipboard content="pnpm install" />
                            </div>
                        </template>
                        <template #bun>
                            <div class="mt-4">
                                <DocumentationClipboard content="bun install" />
                            </div>
                        </template>
                    </HTab>
                </div>
                <li>Running the app</li>
                <HTab :tabs="packagesTab">
                    <template #npm>
                        <div class="mt-4">
                            <DocumentationClipboard content="npm run dev" />
                        </div>
                    </template>
                    <template #yarn>
                        <div class="mt-4">
                            <DocumentationClipboard content="yarn dev" />
                        </div>
                    </template>
                    <template #pnpm>
                        <div class="mt-4">
                            <DocumentationClipboard content="pnpm dev" />
                        </div>
                    </template>
                    <template #bun>
                        <div class="mt-4">
                            <DocumentationClipboard content="bun dev" />
                        </div>
                    </template>
                </HTab>
            </ul>
        </div>
        <div class="flex flex-col gap-3">
            <span id="getting_started" class="text-xl md:text-[16px] text-center md:text-start font-bold">Getting started</span>
            <p> In minab components there are 5 main categories: <b>Common</b>, <b>Form</b>, <b>File upload</b>, <b>Modal</b> and <b>Headless (H)</b>.</p>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li>The <b>Common</b> category includes widely used components like <a class="text-blue-500 underline" href="#accordion">Accordion</a>, <a class="text-blue-500 underline" href="#drawer">Drawer</a>, and <a class="text-blue-500 underline" href="#stepper">Stepper</a>.</li>
                <li><b>Form</b> components are designed specifically for use in forms. It contains <a class="text-blue-500 underline" href="#checkbox">check-box</a>, <a class="text-blue-500 underline" href="#radio">radio</a>, <a class="text-blue-500 underline" href="#textfield">textfield</a>, <a class="text-blue-500 underline" href="#otp_field">otp-field</a>, <a class="text-blue-500 underline" href="#quantity">quantity</a>,
                    <a class="text-blue-500 underline" href="#textarea">textarea</a>, <a class="text-blue-500 underline" href="#date_picker">date-picker</a>, <a class="text-blue-500 underline" href="#ethiopian_date_picker">ethiopian-date-picker</a>, <a class="text-blue-500 underline" href="#dropdown">dropdown</a>, <a class="text-blue-500 underline" href="#list_select">list-select</a>,
                    <a class="text-blue-500 underline" href="#multi_select">multi-select</a>, <a class="text-blue-500 underline" href="#list_search_select">list-search-select</a>, <a class="text-blue-500 underline" href="#profile_picture">profile-picture</a>, <a class="text-blue-500 underline" href="#switch">switch</a>, and <a class="text-blue-500 underline" href="#time_picker">time-picker</a> components.</li>
                <li><b>File Upload</b> components handle file upload functionality. It contains <a class="text-blue-500 underline" href="#single_file_upload">single-file-upload</a> and <a class="text-blue-500 underline" href="#single_file_upload_with_cropper">single-file-upload-with-cropper</a> components.</li>
                <li>The <b>Modal</b> contains only the  <a class="text-blue-500 underline" href="#modal">modal</a> component for the time being.</li>
                <li>The <b>Headless</b> components are unstyled by default, giving you the flexibility to apply custom styles. It contains  <a class="text-blue-500 underline" href="#table">table</a>, <a class="text-blue-500 underline" href="#tab">tab</a>, <a class="text-blue-500 underline" href="#pagination">pagination</a>, <a class="text-blue-500 underline" href="#progress_bar">progress-bar</a>, <a class="text-blue-500 underline" href="#breadcrumb">breadcrumb</a>, <a class="text-blue-500 underline" href="#notification">notification</a>, and <a class="text-blue-500 underline" href="#chip">chip</a> components.</li>
            </ul>
            <p>After installing the required components, we can use any component by calling the category name followed by the component name like this:</p>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <DocumentationCodeBlock :code="ACCORDION_CODE" />
                <li>As shown in the above source code, we can add custom CSS properties using Tailwind CSS classes.</li>
            </ul>
        </div>
    </div>
</template>