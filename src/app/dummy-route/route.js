import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const data = { message: 'Success' };

    const redirectUrl = new URL('/redirect-page', req.url);
    return NextResponse.redirect(redirectUrl);
 
}
