import sg from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../lib/getData";
import { getTodayISO, parseISO } from "../../utils/dates";
import { getHtml } from "./_lib/template";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const auth = getAuthToken(req);
  if (auth == null || auth !== process.env.SMARTFUL_AUTH_KEY) {
    return res.status(200).json({ status: "fail", error: "auth" });
  }

  try {
    const sendgrid = getSendgridClient();
    const dateISO = getTodayISO();
    const date = parseISO(dateISO);
    const data = getData(dateISO);
    const html = getHtml(dateISO, data);
    const subject = `Smartful Daily - ${date.toFormat("dd LLL yyyy")}`;
    const msg = {
      to: ["brendansudol@gmail.com", "libbysudol@gmail.com"],
      from: { name: "Smartful", email: "hello@getsmartful.com" },
      subject,
      html,
    };

    await sendgrid.sendMultiple(msg);
    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error(err);
    return res.status(200).json({
      status: "fail",
      error: err.message ?? err.toString() ?? "N/A",
    });
  }
};

function getAuthToken(req: NextApiRequest): string | undefined {
  return req.headers.authorization?.slice(7) || undefined;
}

function getSendgridClient() {
  sg.setApiKey(process.env.SENDGRID_API_KEY!);
  return sg;
}
