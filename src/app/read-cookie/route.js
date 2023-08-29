import { NextResponse } from "next/server";

// GET

export async function GET(req, res) {
  const data = { message: "Success" };
  const cookievalue= req.cookies.get('theme')
  return NextResponse.json({
    data:data,
    cookie:cookievalue

  });
}
