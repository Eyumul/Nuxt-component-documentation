<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col gap-6">
        <h1 class="text-[32px] uppercase xl:text-[30px] font-bold text-center md:text-start">Configuration</h1>
        <div class="flex flex-col gap-3">
            <span id="component_config" class="text-xl md:text-[16px] text-center md:text-start font-bold">Component Configuration</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li><u><b>Notification:</b></u> the notification component is one of the <b>Headless</b> components that require special type of composable that is putted on <code>use/notify.ts</code> file. It contains functions and computed values used for push notification.</li>
            </ul>
            <p>We can add constant configurations for components in the <code>composables/constants/strings.ts</code> or <code>composables/constants/strings.js</code> file.</p>
        </div>
        <div class="flex flex-col gap-3">
            <span id="global_config" class="text-xl md:text-[16px] text-center md:text-start font-bold">Global Configuration</span>
            <ul class="flex flex-col gap-3 list-disc px-8">
                <li><u><b>Tailwind CSS:</b></u> we can custom colors, fonts, spacing, and other configurations in the <code>tailwind.config.js</code> file.</li>
                <li><u><b>Plugins:</b></u></li>
                <ul class="flex flex-col gap-3 list-disc px-8">
                    <li><u>vee-validate:</u> is a Nuxt.js plugin that contains rules definition for <code>vee-validate</code> fields. We can add additional custom rules in <code>plugins/rules.ts</code> or <code>plugins/rules.js</code>.</li>
                </ul>
            </ul>
        </div>
    </div>
</template>