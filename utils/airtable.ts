import Airtable from "airtable";

const at = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
const base = at.base(process.env.AIRTABLE_BASE_ID!);
export const table = base("people");
