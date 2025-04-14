export function to24hr(hour: number, isAM: boolean): number {
  if (isAM) {
    if (hour == 12) return 0;
    else return hour;
  } else {
    if (hour == 12) return 12;
    else return hour + 12;
  }
}

export function timeRange(
  hours: Ref<number>,
  minutes: Ref<string>,
  is24hr: Ref<boolean>,
) {
  // Hour time range checker
  let max = is24hr.value ? 23 : 12;
  let min = is24hr.value ? 0 : 1;
  hours.value > max ? (hours.value = max) : hours;
  min > hours.value ? (hours.value = min) : hours;

  // Minute time range checker
  let minute = Number(minutes.value);
  minute > 60
    ? (minutes.value = "60")
    : minute < 0
      ? (minutes.value = "00")
      : minutes;
}
