import SokkerService from "@/services/sokkerService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { user, pass } = req.body;

  const sokkerAuth = await SokkerService.authenticate(user, pass);

  if (sokkerAuth.authenticated) {
  }

  return res.status(200).json(sokkerAuth);
}
