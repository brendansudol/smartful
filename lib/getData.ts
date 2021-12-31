import { readFileSync } from "fs";
import path from "path";
import { IDayData } from "./types";

const directory = path.join(process.cwd(), "public/data/daily");

// TODO: add error handling
export function getData(dateISO: string): IDayData {
  // normalize date to always use 2021 data
  const [_, month, day] = dateISO.split("-");
  const dateNorm = `2021-${month}-${day}`;

  const fullPath = path.join(directory, `${dateNorm}.json`);
  const fileContents = readFileSync(fullPath, "utf8");
  const data = JSON.parse(fileContents);

  return data;
}
