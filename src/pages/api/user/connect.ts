import SokkerService from "@/services/sokkerService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // const { username, password } = req.body;
  // console.log(req.body);
  // const sokkerAuth = await SokkerService.authenticate(username, password);
  const team = await SokkerService.getLeagueByID(1);

  // if (sokkerAuth.authenticated) {

  // } else {
  //   return Response.json().status
  //   }

  return res.status(200).json(team);
}
