import { DateTime } from "luxon";

export const START_DATE_ISO = "2021-02-01";
export const TIME_ZONE = "America/New_York";

export function getTodayISO(): string {
  const now = DateTime.fromObject({ zone: TIME_ZONE });
  return now.toISODate();
}

export function isToday(dateISO: string): boolean {
  return dateISO === getTodayISO();
}

export function isFuture(dateISO: string): boolean {
  return dateISO > getTodayISO();
}

export function parseISO(dateISO: string): DateTime {
  return DateTime.fromISO(dateISO, { zone: TIME_ZONE });
}
