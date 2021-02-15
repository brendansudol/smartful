import { readFileSync } from "fs";
import path from "path";
import { IDayData } from "./types";

const directory = path.join(process.cwd(), "public/data/daily");

// TODO: add error handling
export function getData(dateISO: string): IDayData {
  const fullPath = path.join(directory, `${dateISO}.json`);
  const fileContents = readFileSync(fullPath, "utf8");
  const data = JSON.parse(fileContents);
  return data;
}
