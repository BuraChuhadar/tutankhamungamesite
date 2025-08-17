import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

// Simple token auth via query string or header
function authorized(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || request.headers.get("x-export-token");
  const expected = process.env.EXPORT_TOKEN;
  return expected && token && token === expected;
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const setKey = "waitlist:emails";
  const members: string[] = await kv.smembers(setKey);

  const rows = ["email,createdAt,source"]; // CSV header
  for (const email of members) {
    const data = await kv.hgetall<Record<string, string>>(`waitlist:email:${email}`);
    rows.push([
      JSON.stringify(email),
      JSON.stringify(data?.createdAt || ""),
      JSON.stringify(data?.source || "")
    ].join(","));
  }

  const csv = rows.join("\n");
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=waitlist.csv",
      "Cache-Control": "no-store",
    },
  });
}
