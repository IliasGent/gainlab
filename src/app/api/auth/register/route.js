import { promises as fs } from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const DB_PATH = path.join(process.cwd(), 'data', 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'gainlab_secret_key_2024';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Пароль должен быть не менее 6 символов' }, { status: 400 });
    }

    // Read users
    const file = await fs.readFile(DB_PATH, 'utf8');
    const db = JSON.parse(file);

    // Check if user exists
    if (db.users.find(u => u.email === email)) {
      return NextResponse.json({ error: 'Пользователь с таким email уже существует' }, { status: 409 });
    }

    // Hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    db.users.push(newUser);
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));

    // Create JWT and set cookie
    const token = jwt.sign({ id: newUser.id, email: newUser.email, name: newUser.name }, JWT_SECRET, { expiresIn: '7d' });
    const response = NextResponse.json({ message: 'Успешная регистрация', user: { id: newUser.id, name: newUser.name, email: newUser.email } });
    response.cookies.set('gl_token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7, path: '/' });

    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
