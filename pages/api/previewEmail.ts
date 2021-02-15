import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../lib/getData";
import { getHtml } from "./_lib/template";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = getData("2021-02-02");
    const html = getHtml(data);
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
