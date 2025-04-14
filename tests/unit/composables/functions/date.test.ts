import { EtDatetime } from "abushakir";
import { 
    getDayStyle,
    getETCTable, 
    getEvange, 
    isCurrentDate, 
    isDisabledDate, 
    isSelectedDate 
} from "./../../../../composables/functions/date";
import type { ETCDate } from "~/types/components";

const now: EtDatetime = new EtDatetime();
const disabledDates: EtDatetime[] = [new EtDatetime(2014, 1, 1)];
const selectedDate: EtDatetime = new EtDatetime(2016, 12, 22);
const selectedDates: EtDatetime[] = [new EtDatetime(2016, 12, 21), new EtDatetime(2016, 12, 20)];

test('Testing getETCTable', () => {
    const table: Array<ETCDate[]> = getETCTable(2, 12, 2016, 30);

    // testing the first day displayed in the calendar table
    expect(table[0][0].day).toBe(29);
    expect(table[0][0].month).toBe(11);
    expect(table[0][0].style).toBe("text-gray-400");

    // testing the first day of ነሐሴ 2016 in the calendar table
    expect(table[0][2].day).toBe(1);
    expect(table[0][2].month).toBe(12);
});

test('Testing getEvange', () => {
    // testing the evange of 2016
    expect(getEvange(2016)).toBe("ዮሐንስ");
});

test('Testing isCurrentDate', () => {
    // testing the current date
    expect(isCurrentDate(now.year, now.month, now.day)).toBe(true);
});

test('Testing isDisabledDate', () => {
    // testing if the current date is disabled
    expect(isDisabledDate(2014, 1, 1, disabledDates)).toBe(true);
});

test('Testing isSelectedDate', () => {
    // testing if the current date is selected
    expect(isSelectedDate(selectedDates, 2016, 12, 20)).toBe(true);
});

test('Testing getDayStyle', () => {
    // testing the style of disabled date
    expect(getDayStyle(2014, 1, 1, selectedDate, selectedDates, disabledDates)).toBe("bg-gray-300 text-white rounded-md");

    // testing the style of the current date
    expect(getDayStyle(now.year, now.month, now.day, selectedDate, selectedDates, disabledDates)).toBe("bg-gray-500 text-white rounded-md");

    // testing the style of the selected date
    expect(getDayStyle(2016, 12, 20, selectedDate, selectedDates, disabledDates)).toBe("bg-blue-500 text-white rounded-md");

    // testing the style of the not selected, disabled and current date
    expect(getDayStyle(2016, 12, 25, selectedDate, selectedDates, disabledDates)).toBe("");
});