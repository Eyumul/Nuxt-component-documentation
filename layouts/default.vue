<template>
    <div>
        <div v-if="!isLargeScreen" class="flex flex-col h-screen w-full">
            <div :class="collapsed ? ' fixed max-w-[390px] z-50 -translate-x-full transition-all duration-500 ease-in-out' :'translate-x-0 transition-all duration-500 ease-in-out fixed max-w-[390px] z-50 shadow-2xl dark:shadow-gray-600 dark:bg-black bg-white h-full px-[5px] sm:px-[15px] md:px-[25px]'">
                <div class="flex dark:bg-black pt-[15px] items-center justify-between">
                    <button @click="collapsed = !collapsed">
                        <Icon name="material-symbols:close-rounded" class="text-4xl dark:text-primary-600 text-primary-900"/>
                    </button>
                </div>
                <div class="flex flex-col dark:bg-black text-primary-900 dark:text-white items-center gap-8">
                    <div class="flex justify-center gap-4 items-center">
                        <img alt="Menab's Logo" src="../assets/images/minab_logo.png" class="dark:hidden" />
                        <img alt="Menab's Logo" src="../assets/images/minab_logo_darkmood.png" class="dark:inline hidden" />
                        <div class="flex items-center">
                            <select class="text-primary-900 dark:text-white text-sm font-semibold focus:outline-none focus:ring-0 dark:bg-black bg-white cursor-pointer">
                                <option>V 0.01</option>
                            </select>
                        </div>
                    </div>
                    <DocumentationMenuContent :scrollContainer="scrollableContainer" @updateCollapsed="updateCollapsed" />
                </div>
            </div>
            <div>
                <div :class="collapsed ? 'sticky border-b-[0.5px] border-gray-100 dark:border-gray-800 top-0 pb-[10px] pt-[15px] px-[5px] sm:px-[15px] md:px-[25px] dark:bg-black bg-white flex items-center justify-between' : 'sticky border-b-[0.5px] border-gray-100 dark:border-gray-800 pb-[10px] top-0 pt-[15px] px-[5px] sm:px-[15px] md:px-[25px] dark:bg-black bg-white flex items-center justify-end h-[62px]'">
                    <button @click="collapsed = !collapsed" :class="collapsed ? '' : 'hidden'">
                        <Icon name="material-symbols:menu-rounded" class="text-4xl text-primary-900 dark:text-primary-600"/>
                    </button>
                    <div class="flex items-center gap-8 text-2xl">
                        <Icon name="logos:gitlab"/>
                        <button @click="toggleColorMode" class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dark:hidden size-6 hover:fill-primary-900 text-primary-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="dark:inline text-white hidden size-6 hover:text-primary-600">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <circle cx="12" cy="12" r="4"/>
                                <path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/>
                            </g>
                        </svg>
                    </button>
                    </div>
                </div>
                <div ref="scrollableContainer" class="overflow-y-scroll bg-gray-50 dark:bg-secondary-950 main w-full px-[10px] sm:px-[20px] md:px-[30px] pt-[20px]">
                    <slot/>
                </div>
            </div>
        </div>
        <div v-else class="h-screen overflow-clip lg:flex flex-col w-full">
            <div class="sticky border-b-[0.5px] border-gray-100 dark:border-gray-800 top-0 flex justify-between pt-[20px] pb-[14px] bg-white dark:bg-black dark:text-white z-50 pl-[68px] pr-[74px]">
                <div class="flex items-end gap-[17px]">
                    <img class="dark:hidden" alt="Menab's logo" src="../assets/images/minab_logo_full.png"/>
                    <img  class="dark:inline hidden" alt="Menab's logo" src="../assets/images/minab_logo_full_darkmood.png"/>
                    <div class="flex items-center">
                        <select class="text-primary-900 dark:text-white text-sm font-semibold focus:outline-none focus:ring-0 dark:bg-black bg-white cursor-pointer">
                            <option>V 0.01</option>
                        </select>
                    </div>
                </div>
                <div class="flex items-center justify-end gap-[50px] text-2xl">
                    <a target="_blank" href="https://gitlab.com/besumicheal/minab-nuxtjs-typescript-template"><Icon name="logos:gitlab"/></a>
                    <button @click="toggleColorMode" class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dark:hidden size-6 hover:fill-primary-900 text-primary-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="dark:inline hidden size-6 hover:text-primary-600">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <circle cx="12" cy="12" r="4"/>
                                <path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/>
                            </g>
                        </svg>
                    </button>
                    <!-- <button @click="scrollToSection('getting_started')" class="dark:bg-primary-600  dark:hover:bg-primary-900 dark:hover:text-white bg-primary-900 hover:bg-primary-500 hover:text-primary-900 text-white font-bold rounded-[8px] px-[24px] py-[10px] text-xs ml-[50px]"> GET STARTED </button> -->
                </div>
            </div>
            <div class="flex w-full">
                <DocumentationMenuContent :scrollContainer="scrollableContainer" />
                <div ref="scrollableContainer" class="overflow-y-scroll bg-gray-50 dark:bg-secondary-950 main w-full lg:pr-[2%] 2xl:pr-[7%] lg:pl-[1%] 2xl:pl-[4%]">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const scrollableContainer = ref(null);
const collapsed = ref(true);
const colorMode = useColorMode();
colorMode.preference = 'light';

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

const updateCollapsed = (value) => {
    collapsed.value = value
}

if(import.meta.client){
    localStorage.removeItem('nuxt-color-mode');
    colorMode.preference = localStorage.getItem("colorMode")
}

function toggleColorMode() {
    if(localStorage.getItem('colorMode') == 'light'){
        localStorage.setItem("colorMode", "dark")
    } else {
        localStorage.setItem("colorMode", "light")
    }
    colorMode.preference = localStorage.getItem("colorMode")
}

const isLargeScreen = ref(true);

// Function to check screen size console
const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1080; // Tailwind lg breakpoint is 1024px
};

// Add event listener on window resize to detect screen size change
onMounted(() => {
  checkScreenSize(); // Check initial screen size
  window.addEventListener('resize', checkScreenSize); // Update on resize
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize); // Cleanup on unmount
});
</script>

<style>
/* width */
div {
    font-family: "Roboto", serif;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
} 
.menu::-webkit-scrollbar-track {
    border: 2.5px solid white;
    @apply bg-[#c0c0c0] border-[2.5px] border-white dark:border-black 
}
.main::-webkit-scrollbar-track {
    border: 2.5px solid white;
    @apply bg-[#c0c0c0] border-[2.5px] border-white dark:border-secondary-950 
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #481d5c;
  border-radius: 10px;
  @apply dark:bg-[#8549A1]
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7729a2; 
}
</style>