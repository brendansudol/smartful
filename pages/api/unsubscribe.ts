import type { NextApiRequest, NextApiResponse } from "next";
import { table } from "../../utils/airtable";
import { getTodayISO } from "../../utils/dates";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const today = getTodayISO();
  const { email } = req.body;

  if (!email) {
    return res.status(500).json({
      status: "error",
      error: "no email",
    });
  }

  try {
    // first, look up table entry by email field
    const selectParams = { filterByFormula: `{email} = '${email}'` };
    const records = await table.select(selectParams).firstPage();
    const recordIds = records.map((r) => r.id);

    // if no entries match the given email, just pretend
    // that the unsubscribe succeeds, because it's same result
    if (recordIds.length === 0) {
      return res.status(200).json({ status: "success" });
    }

    // lastly, update `status` to "unsub" for matching entries
    await table.update(
      recordIds.map((id) => ({
        id,
        fields: { status: "unsub", updateDate: today },
      }))
    );
    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "error",
      error: err.message ?? err.toString() ?? "N/A",
    });
  }
};
