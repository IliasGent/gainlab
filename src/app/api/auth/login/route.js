import { promises as fs } from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const DB_PATH = path.join(process.cwd(), 'data', 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'gainlab_secret_key_2024';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Введите email и пароль' }, { status: 400 });
    }

    const file = await fs.readFile(DB_PATH, 'utf8');
    const db = JSON.parse(file);

    const user = db.users.find(u => u.email === email);
    if (!user) {
      return NextResponse.json({ error: 'Неверный email или пароль' }, { status: 401 });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ error: 'Неверный email или пароль' }, { status: 401 });
    }

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    const response = NextResponse.json({ message: 'Вход выполнен', user: { id: user.id, name: user.name, email: user.email } });
    response.cookies.set('gl_token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7, path: '/' });

    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
