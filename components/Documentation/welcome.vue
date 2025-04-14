<template>
    <div class="flex flex-col items-center justify-start p-10 bg-black text-white h-screen w-screen">
        <div class="w-fit flex flex-col items-center">
            <img alt="Menab's Logo" src="/assets/images/minab_logo_full_big_darkmood.png" class="w-[200px]" />
            <p class="text-sm lg:text-3xl uppercase font-black text-primary-500 text-center mt-10">Minab Documentation & starters tool Kit</p>
            <p v-pre class="text-xs lg:text-sm text-center bg-secondary-900 px-2 lg:px-5 py-[2px] mt-5 rounded-sm">Remove <span class="font-normal text-primary-600">&lt;DoumentationWelcome /&gt;</span> component in app.vue and create your own code.</p>
        </div>
        <div class="w-[0.5px] self-start h-[200px] bg-gray-700 lg:m-10"></div>
        <div class="flex flex-col gap-10 items-start">
            <div class="containter">
                <p class="text-lg lg:text-5xl text opacity-75"><span class="text-primary-600 opacity-100">Welcome!</span> This will get you started in to your project with built in Component by Minab.</p>
            </div>
            <!-- change '/' to the link of the documentation after deployment -->
            <button @click="$router.push('/documentation')" class="bg-primary-900 hover:bg-primary-600 rounded-[8px] py-[4px] px-5 flex gap-4 text-lg items-center">
                <icon name="mdi:file-document-multiple"/>
                <p>View Documentation</p>
            </button>
        </div>
        <div class="w-[0.5px] self-start h-[200px] bg-gray-700 lg:m-10"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {display: inline-block;}
.text {
    letter-spacing: 2px;
    font-family: "Agdasima", sans-serif;
    border-right: 1px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
        typing 10s steps(87),
        cursor 0.43s step-end infinite alternate;
}
@keyframes cursor {
    50% { border-color: transparent }
}
@keyframes typing {
    from { width: 0 }
}

</style>