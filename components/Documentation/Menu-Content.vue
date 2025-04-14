<template>
    <div class="flex dark:bg-black dark:text-white gap-[13px] flex-col items-center w-full lg:w-fit px-[16px] sm:px-[6px] lg:px-[21px]">
        <div class="sticky top-[78px] flex gap-[13px] lg:pt-8 dark:bg-black bg-white flex-col items-center">
            <p class="text-center lg:w-[352px] dark:text-primary-600 text-primary-900 font-medium text-3xl font-roboto">Minab Components Documentation</p>
            <button class="dark:bg-primary-600  dark:hover:bg-primary-900 dark:hover:text-white lg:hidden bg-primary-900 text-white text-sm font-bold rounded-[8px] w-full py-[10px] max-w-[310px]"> GET STARTED </button>
            <div class="flex gap-2 items-center">
                <p class="text-xs text-secondary-700 dark:text-secondary-300">UI Components for Vue/Nuxt.js</p>
            </div>
            <div class="relative w-full mt-[27px] xs:px-4 lg:px-0 ">
                <Icon name="uil:search" class="absolute dark:text-primary-600 left-[15px] xs:left-[31px] lg:left-[15px] top-[7px] text-lg"/>
                <input type='text' placeholder="Search for Components" class="w-full px-[46px] placeholder-secondary-400 ring-[1px] ring-primary-900 rounded-[8px] h-[30px] dark:bg-secondary-900 dark:text-white bg-primary-300 focus:border-none text-primary-900"/>
            </div>
        </div>
        <div class="flex flex-col pt-8 pb-8 text-black dark:text-white overflow-y-scroll menu lg:h-[calc(100vh-294px)] h-[calc(100vh-376px)] xs:h-[calc(100vh-344px)] w-full">
            <div class="flex flex-col pl-4 border-l-[1px] border-gray-200 dark:border-gray-700">
                <!-- Menu content goes here (to see the window give a class for the above of 'border-2 border-green-500' ) -->
                <p class="menuHeader">Introduction</p>
                <button @click="scrollToSection('overview')" class="menuContent">Overview</button>
                <button @click="scrollToSection('installation_and_setup')" class="menuContent">Installation & Setup</button>
                <button @click="scrollToSection('getting_started')" class="menuContent">Getting Started</button>
                <p class="menuHeader">Guides</p>          
                <button @click="scrollToSection('best_practice')" class="menuContent">Best Practices</button>
                <button @click="scrollToSection('troubleshooting')" class="menuContent">Troubleshooting</button>
                <!-- <button @click="scrollToSection('performance_optimization')" class="menuContent">Performance Optimization</button> -->
                <p class="menuHeader">Configuration</p>          
                <button @click="scrollToSection('component_config')" class="menuContent">Component Configuration</button>
                <button @click="scrollToSection('global_config')" class="menuContent">Global Configuration</button>
                <p class="menuHeader">CLI Integration</p>          
                <button @click="scrollToSection('installation_and_setting_up_cli')" class="menuContent">Installation and Setup</button>
                <button @click="scrollToSection('setting_up_a_project_with_cli')" class="menuContent">Setting Up a Project with CLI</button>
                <button @click="scrollToSection('adding_components_with_cli')" class="menuContent">Adding Components with CLI</button>
                <button @click="scrollToSection('project_structure_overview')" class="menuContent">Project Structure Overview</button>
                <p class="menuHeader">Components</p>
                <button @click="scrollToSection('accordion')" class="menuContent">Accordion</button>
                <button @click="scrollToSection('drawer')" class="menuContent">Drawer</button>
                <button @click="scrollToSection('stepper')" class="menuContent">Stepper</button>
                <!-- file upload components -->
                <button @click="scrollToSection('single_file_upload')" class="menuContent">Single File Upload</button>
                <button @click="scrollToSection('single_file_upload_with_cropper')" class="menuContent">Single File Upload With Croppper</button>
                <!-- headless ui components -->
                <button @click="scrollToSection('table')" class="menuContent">Table</button>
                <button @click="scrollToSection('pagination')" class="menuContent">Pagination</button>
                <button @click="scrollToSection('progress_bar')" class="menuContent">Progress Bar</button>
                <button @click="scrollToSection('tab')" class="menuContent">Tab</button>
                <button @click="scrollToSection('breadcrumb')" class="menuContent">Breadcrumb</button>
                <button @click="scrollToSection('notification')" class="menuContent">Notification</button>
                <button @click="scrollToSection('chip')" class="menuContent">Chip</button>
                <!-- form components -->
                <button @click="scrollToSection('textfield')" class="menuContent">TextField</button>
                <button @click="scrollToSection('checkbox')" class="menuContent">Checkbox</button>
                <button @click="scrollToSection('radio')" class="menuContent">Radio</button>
                <button @click="scrollToSection('otp_field')" class="menuContent">OTP Field</button>
                <button @click="scrollToSection('quantity')" class="menuContent">Quantity</button>
                <button @click="scrollToSection('textarea')" class="menuContent">Textarea</button>
                <button @click="scrollToSection('date_picker')" class="menuContent">Date Picker</button>
                <button @click="scrollToSection('ethiopian_date_picker')" class="menuContent">Ethiopian Date Picker</button>
                <button @click="scrollToSection('dropdown')" class="menuContent">Drop Down</button>
                <button @click="scrollToSection('list_select')" class="menuContent">List Select</button>
                <button @click="scrollToSection('multi_select')" class="menuContent">Multi Select</button>
                <button @click="scrollToSection('list_search_select')" class="menuContent">List Search Select</button>
                <button @click="scrollToSection('profile_picture')" class="menuContent">Profile Picture</button>
                <button @click="scrollToSection('switch')" class="menuContent">Switch</button>
                <button @click="scrollToSection('time_picker')" class="menuContent">Time Picker</button>
                <!-- modal components -->
                <button @click="scrollToSection('modal')" class="menuContent">Modal</button>
                <!-- <p class="menuHeader">Usage</p>          
                <button @click="scrollToSection('basic_examples')" class="menuContent">Basic Examples</button>
                <button @click="scrollToSection('advanced_examples')" class="menuContent">Advanced Examples</button>
                <button @click="scrollToSection('customizing_components')" class="menuContent">Customizing Components</button>
                <button @click="scrollToSection('theming_and_styling')" class="menuContent">Theming and Styling</button> -->
                <!-- <p class="menuHeader">API Reference</p>          
                <button @click="scrollToSection('component_api')" class="menuContent">Component API</button>
                <button @click="scrollToSection('utilities_api')" class="menuContent">Utilities API</button>
                <p class="menuHeader">Support & Update</p>
                <button @click="scrollToSection('version_updates')" class="menuContent">Version Updates</button>
                <button @click="scrollToSection('new_features_and_fixes')" class="menuContent">New Features & Fixes</button>
                <button @click="scrollToSection('how_to_contribute')" class="menuContent">How to Contribute</button>
                <button @click="scrollToSection('style_guide')" class="menuContent">Style Guide</button>
                <button @click="scrollToSection('code_of_conduct')" class="menuContent">Code of Conduct</button>
                <button @click="scrollToSection('frequently_asked_questions')" class="menuContent">Frequently Asked Questions</button> -->
            </div>
            <p class="text-xs mt-24 text-center">Copyright © 2024 - All right reserved</p>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['updateCollapsed'])
const props = defineProps({
  scrollContainer: Object,
})

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
  if (element && props.scrollContainer) {
    const offsetTop = element.offsetTop - 78
    props.scrollContainer.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
  emit('updateCollapsed',true)
}
</script>

<style scoped>
.menuHeader{
    @apply font-medium text-lg mt-4 first:-mt-3;
    position: relative;
}
.menuHeader::before {
    content:"\150";
    font-family: FontAwesome;
    position: absolute;
    left: -24px;
    width: 24px;
    height: 24px;
}
.menuContent{
    @apply text-base text-start mt-2 pl-10 dark:text-gray-300;
}
</style>