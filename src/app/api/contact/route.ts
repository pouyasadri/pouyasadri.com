import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { submitContact } from "@/infrastructure/composition";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await submitContact(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { ok: false, errors: error.flatten() },
        { status: 400 },
      );
    }

    console.error("[contact] failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
