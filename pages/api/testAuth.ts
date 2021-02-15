import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const auth = req.headers.authorization ?? "N/A";
  return res.status(200).json({ auth });
};
