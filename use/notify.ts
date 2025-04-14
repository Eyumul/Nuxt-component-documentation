import { useTimeoutFn } from "@vueuse/core";
import { computed, ref } from "vue";
import type { NotificationProps } from "~/types/components";

const store = ref<{
  notification: { state: boolean } & NotificationProps;
}>({
  notification: { state: false },
});
export default function ({ timeout = 5000 } = {}) {
  const { start, stop } = useTimeoutFn(() => {
    store.value.notification = { state: false };
  }, timeout);

  // stop();

  const notify = (options: NotificationProps) => {
    store.value.notification = {
      state: true,
      ...options,
    };
    start();
  };
  const dismiss = () => {
    store.value.notification = { state: false };
  };

  return {
    notify,
    dismiss,
    notification: computed(() => store.value.notification),
  };
}
