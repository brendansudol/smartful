import sg from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../lib/getData";
import { getSubscribers } from "../../utils/airtable";
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
    const htmlContent = getHtml(dateISO, data);

    const subscribers = await getSubscribers();
    await sendgrid.sendMultiple({
      to: subscribers,
      from: { name: "Smartful", email: "hello@getsmartful.com" },
      subject: `Smartful Daily - ${date.toFormat("dd LLL yyyy")}`,
      html: htmlContent,
    });

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
