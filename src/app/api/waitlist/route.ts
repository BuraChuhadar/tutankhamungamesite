import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (typeof email !== "string") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    // Use a set for idempotency and a hash for metadata
    const setKey = "waitlist:emails";
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ error: "KV not configured" }, { status: 500 });
    }

    const exists = await kv.sismember(setKey, normalized);
    if (exists) {
      return NextResponse.json({ status: "exists" }, { status: 200 });
    }

    await kv.sadd(setKey, normalized);
    await kv.hset(`waitlist:email:${normalized}`, {
      email: normalized,
      createdAt: new Date().toISOString(),
      source: "website",
    });

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (err) {
  console.error("/api/waitlist error", err);
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
