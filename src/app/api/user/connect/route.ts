import SokkerService from "@/services/sokkerService";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// interface MyRequest<T> extends NextRequest {
//   body
// }

export const POST = async () => {
  // const { username, password } = await req.json();
  // console.log(req.body);
  // const sokkerAuth = await SokkerService.authenticate(username, password);
  const team = await SokkerService.getLeagueByID(1);

  // if (sokkerAuth.authenticated) {

  // } else {
  //   return Response.json().status
  //   }

  return NextResponse.json(team, { status: 200 });
};
