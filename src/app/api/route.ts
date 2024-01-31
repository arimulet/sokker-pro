import SokkerService from "@/services/sokkerService";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { user, pass } = await req.json();

  const sokkerAuth = await SokkerService.authenticate(user, pass);

  if (sokkerAuth.authenticated) {
  }

  return NextResponse.json(sokkerAuth);
};
