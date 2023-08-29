import { NextResponse } from "next/server";

// GET

export async function GET(req, res) {

  return NextResponse.json({
    "message": "Welcome to our API!",

    "version": "1.0"

  });
}
