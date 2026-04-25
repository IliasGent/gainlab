import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'gainlab_secret_key_2024';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('gl_token')?.value;
    if (!token) return NextResponse.json({ user: null });

    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ user: { id: decoded.id, name: decoded.name, email: decoded.email } });
  } catch {
    return NextResponse.json({ user: null });
  }
}
