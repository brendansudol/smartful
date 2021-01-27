import { formatISO, parseISO, startOfDay } from "date-fns";

export const START_DATE_ISO = "2021-01-01";
export const START_DATE = startOfDay(parseISO(START_DATE_ISO));

export function formatDate(date: Date) {
  return formatISO(date, { representation: "date" });
}
