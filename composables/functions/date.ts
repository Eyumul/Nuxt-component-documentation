import { EtDatetime } from "abushakir";
import { EVANGE_LIST } from "../constants/date";
import type { ETCDate } from "~/types/components";

export function getETCTable(weekday: number, month: number, year: number, days: number = 30) { 
    let table = [];
    let count = 1;
    for (let i = 0; i < 5; i++) {
        let row: ETCDate[] = [];
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && weekday <= j) || (i > 0 && count <= days)) {
                row.push({
                    day: count,
                    month: month,
                    year: year,
                    style: ""
                });
                count++;
            } else {
                if (count < days) {
                    row.push({
                        day: 31 - weekday + j,
                        month: month === 1 ? 13 : month - 1,
                        year: month === 1 ? year - 1 : year,
                        style: "text-gray-400"
                    });
                } else {
                    row.push({
                        day: count - days,
                        month: month === 13 ? 1 : month + 1,
                        year: month === 13 ? year + 1 : year,
                        style: "text-gray-400"
                    });
                    count++;
                }
            }
        }
        table.push(row);
    }
    return table;
}

export function getEvange(year: number) {
    return EVANGE_LIST[(year + 5500) % 4];
}

export function isCurrentDate(year: number, month: number, day: number) {
    const now = new EtDatetime();
    return now.year === year && now.month === month && now.day === day;
}

export function isDisabledDate(year: number, month: number, day: number, disabledDates: EtDatetime[]) {
    return disabledDates.some(date => date?.year === year && date?.month === month && date?.day === day);
}

export function isSelectedDate(selectedDates: EtDatetime[], year: number, month: number, day: number) {
    return selectedDates.some(date => date?.year === year && date?.month === month && date?.day === day);
}

export function getDayStyle(year: number, month: number, day: number, selectedDate: EtDatetime, selectedDates: EtDatetime[], disabledDates: EtDatetime[]) {
    if(isDisabledDate(year, month, day, disabledDates)) {
        return "bg-gray-300 text-white rounded-md";
    }else if (isSelectedDate(selectedDates, year, month, day) || (selectedDate && selectedDate.day === day && selectedDate.month === month && selectedDate.year === year)) {
        return "bg-blue-500 text-white rounded-md";
    } else if (isCurrentDate(year, month, day)) {
        return "bg-gray-500 text-white rounded-md";
    } else {
        return "";
    }
}