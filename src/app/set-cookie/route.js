import { NextResponse } from "next/server";

// POST

export async function POST(req, res) {
  const data = { message: "Success" };
  const setCookie = req.cookies.set;
  const response = new NextResponse(JSON.stringify({ success: true, data: data }));
  response.cookies.set({
    name: 'theme',
    value: 'dark'
  });
  return response;
}

