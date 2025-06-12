// app/api/mood/route.ts
import { NextResponse } from "next/server";
import { moods, MoodEntry } from "@/utils/moods";

export async function GET() {
  return NextResponse.json(moods);
}

export async function POST(request: Request) {
  try {
    const body: MoodEntry = await request.json();

    if (!body.mood || !body.timestamp || !body.employeeId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    moods.push(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}