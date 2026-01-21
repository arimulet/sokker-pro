import AppService from '@/services/AppService'
import type { NextApiRequest, NextApiResponse } from "next";

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const players = await  AppService.getPlayers()
    // if (sokkerAuth.authenticated) {

    // } else {
    //   return Response.json().status
    //   }

    return res.status(200).json({ players });
}
