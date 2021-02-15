import sg from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const sendgrid = getSendgridClient();
  const msg = {
    to: "brendansudol@gmail.com",
    from: {
      name: "Smartful",
      email: "hello@getsmartful.com",
    },
    subject: "Smartful test email",
    html: "<h1>Test!</h1>",
  };

  return res.status(200).json({ status: "success" });

  //   try {
  //     await sendgrid.send(msg);
  //     return res.status(200).json({ status: "success" });
  //   } catch (e) {
  //     console.error(e);
  //     return res.status(200).json({ status: "fail" });
  //   }
};

function getSendgridClient() {
  sg.setApiKey(process.env.SENDGRID_API_KEY!);
  return sg;
}
