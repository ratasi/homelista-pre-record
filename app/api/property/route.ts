import { auth } from "@/auth";
import { db } from "@/db/drizzle";
import { property } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parseamos body
    const body = await req.json();

    // 3. Insertamos en DB
    const [newProperty] = await db
      .insert(property)
      .values({
        id: randomUUID(),
        tipology: body.tipology ?? "",
        location: body.location ?? "",
        streetName: body.streetName ?? "",
        streetNumber: body.streetNumber ?? "",
        operation: body.operation,
        stateHouse: body.stateHouse ?? "",
        buildMeters: body.buildMeters ? Number(body.buildMeters) : null,
        utilsMeters: body.utilsMeters ? Number(body.utilsMeters) : null,
        rooms: body.rooms ? Number(body.rooms) : null,
        bathrooms: body.bathrooms ? Number(body.bathrooms) : null,
        energyCertificate: body.energyCertificate,
        price: body.price ? body.price.toString() : "0",
        images: body.images ?? [],
        userId: session.user.id, // relación con el usuario que publica
      })
      .returning(); // devuelve el objeto insertado

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {}
}
