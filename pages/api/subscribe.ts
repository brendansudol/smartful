import type { NextApiRequest, NextApiResponse } from "next";
import { table } from "../../utils/airtable";
import { getTodayISO } from "../../utils/dates";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email) {
    return res.status(500).json({
      status: "error",
      error: "no email",
    });
  }

  const today = getTodayISO();
  const fields = {
    email,
    createDate: today,
    updateDate: today,
    status: "active",
  };

  try {
    const records = await table.create([{ fields }]);
    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "error",
      error: err.message ?? err.toString() ?? "N/A",
    });
  }
};
