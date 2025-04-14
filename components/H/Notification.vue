<script setup lan="ts">
import useNotify from "@/use/notify";
const { dismiss, notification } = useNotify();
</script>

<template>
    <!-- Global notification live region, render this permanently at the end of the document -->

    <div
        aria-live="assertive"
        class="z-[1000] fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
            <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
            <transition
                enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="notification && notification.state"
                    class="max-w-sm w-full pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
                    :class="[
                        notification.cardClass ||
                            'bg-white  shadow-lg rounded-lg',
                        notification.borderClass
                            ? notification.borderClass
                            : 'border-l-8',
                    ]"
                >
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0" v-if="notification.icon">
                                <Icon
                                    :name="notification.icon"
                                    :class="
                                        notification.iconClass ||
                                        'h-5 w-5 text-gray-400'
                                    "
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <div
                                class="flex items-center"
                                v-if="notification.image"
                            >
                                <img
                                    class="h-10 w-10"
                                    :src="notification.image"
                                />
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p
                                    class=""
                                    :class="
                                        notification.titleClass ||
                                        'text-gray-900 text-sm font-medium '
                                    "
                                >
                                    {{ notification.title }}
                                </p>
                                <p
                                    class="mt-1"
                                    :class="
                                        notification.descriptionClass ||
                                        'text-gray-500 text-sm '
                                    "
                                >
                                    {{ notification.description }}
                                </p>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button
                                    @click="dismiss"
                                    class="rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    :class="
                                        notification.closeButtonClass ||
                                        'bg-white text-gray-400 hover:text-gray-500'
                                    "
                                >
                                    <span class="sr-only">Close</span>
                                    <Icon
                                        name="clarity:close-line"
                                        width="25"
                                        height="25"
                                    />
                                    <!-- <XIcon class="h-5 w-5" aria-hidden="true" /> -->
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
