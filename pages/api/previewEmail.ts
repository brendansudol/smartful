import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../lib/getData";
import { getHtml } from "./_lib/template";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dateISO = "2021-02-11";
    const data = getData(dateISO);
    const html = getHtml(dateISO, data);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Whoops!</h1><p>There was a problem.</p>");
    console.error(e);
  }
};
