import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const auth = getAuthToken(req);

  let status: string | null = null;
  if (auth == null) status = "none";
  else if (auth === process.env.SMARTFUL_AUTH_KEY) status = "success";
  else status = "fail";

  console.log(`auth status = ${status}`);
  return res.status(200).json({ auth: status });
};

function getAuthToken(req: NextApiRequest): string | undefined {
  return req.headers.authorization?.slice(7) || undefined;
}
