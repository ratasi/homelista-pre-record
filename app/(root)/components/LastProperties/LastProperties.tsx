"use client";

import { useEffect, useState } from "react";
import { property } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

type PropertyType = InferSelectModel<typeof property>;

export function LastProperties() {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch("/api/property/last");
      const data = await res.json();
      setProperties(data);
      setLoading(false);
    };
    fetchProperties();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (properties.length === 0) return <p>No hay propiedades aún.</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{p.tipology}</h3>
            <p>
              {p.location}, {p.streetName} {p.streetNumber}
            </p>
            <p className="font-bold text-green-600">{p.price} €</p>
            {p.images.length > 0 && (
              <img
                src={p.images[0]?.url}
                alt={p.tipology}
                className="w-full h-40 object-cover rounded-lg mt-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
