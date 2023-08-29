import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(req, res) {
  // Get the token from the "Authorization" header
  // const token = req.headers.get('Authorization');
  const headersList = new Headers();
  const userAgent = headersList.get('user-agent');
  if (!token) {
    return new Response('Authorization header missing', { status: 400 });
  }

  // Your processing logic here

  return NextResponse.next({
    status: 200,
    body: JSON.stringify({ message: 'Request processed successfully' }),
  });
}

