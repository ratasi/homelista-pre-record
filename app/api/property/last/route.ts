// app/api/property/last/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { property } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const lastProperties = await db
    .select()
    .from(property)
    .orderBy(desc(property.createdAt))
    .limit(5);

  return NextResponse.json(lastProperties);
}
