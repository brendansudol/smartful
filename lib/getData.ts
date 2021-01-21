import fs from "fs";
import path from "path";
import sample from "lodash.sample";
import sampleSize from "lodash.samplesize";

const directory = path.join(process.cwd(), "public", "static");

export function getData() {
  const fullPath = path.join(directory, "data.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = JSON.parse(fileContents);

  return {
    artist: sample(data.artists),
    charity: sample(data.charities),
    event: sample(data.events),
    funFacts: sampleSize(data.funFacts1, 3),
    holidays: data.holidays,
    idiom: sample(data.idioms),
    person: sample(data.people),
    quote: sample(data.quotes),
    wiki: sample(data.wiki),
    word: sample(data.words),
  };
}
