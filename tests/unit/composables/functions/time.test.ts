import { ref } from "vue";
import { timeRange, to24hr } from "./../../../../composables/functions/time";

const hours = ref(4);
const minutes = ref("30");

test('Testing to24hr()', () => {
    expect(to24hr(12, true)).toEqual(0);
    expect(to24hr(1, true)).toEqual(1);

    expect(to24hr(12, false)).toEqual(12);
    expect(to24hr(1, false)).toEqual(13);
});

test('Testing timeRange()', () => {
    timeRange(hours, minutes, ref(true))
    expect(hours.value).toEqual(4);
    expect(minutes.value).toEqual("30");
});

