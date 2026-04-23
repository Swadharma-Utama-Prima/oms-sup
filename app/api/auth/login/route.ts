import { NextResponse } from "next/server";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;
  const email = body.email?.trim().toLowerCase();
  const password = body.password;

  const expectedEmail =
    process.env.AUTH_DEMO_EMAIL?.trim().toLowerCase() || "admin@example.com";
  const expectedPassword = process.env.AUTH_DEMO_PASSWORD || "changeme";

  if (!email || !password) {
    return NextResponse.json(
      {
        ok: false,
        message: "Email and password are required.",
      },
      { status: 400 }
    );
  }

  if (email === expectedEmail && password === expectedPassword) {
    return NextResponse.json({
      ok: true,
      message: "Login success (demo mode).",
    });
  }

  return NextResponse.json(
    {
      ok: false,
      message: "Invalid credentials.",
    },
    { status: 401 }
  );
}
