"use client";

import { Navbar } from "@/components/Shared";
import { useParams } from "next/navigation";
import { BreadcrumbPlace } from "./components/BreadcrumbPlace";
import { ContentPage, Header } from "./components";
import axios from "axios";
import { useEffect, useState } from "react";

type PropertyType = {
  id: string;
  tipology: string;
  location: string;
  streetName: string;
  streetNumber: string;
  operation: "venta" | "alquiler";
  price: number;
  images: { url: string }[];
  latitude?: number;
  longitude?: number;
  // otros campos según necesites
};

export default function PlacePage() {
  const params = useParams<{
    operation: string;
    tipologia: string;
    place: string;
  }>();

  // TODO: Get operation and place from bbdd
  console.log(params);
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params) return;

    const operation = params.operation.toLowerCase() as "venta" | "alquiler";
    const tipology = params.tipologia.toLowerCase().replace(/\s+/g, "-");
    const location = params.place.toLowerCase().replace(/\s+/g, "-");

    const getProperties = async () => {
      try {
        const response = await axios.get<PropertyType[]>(
          `/api/property?operation=${operation}&tipology=${tipology}&location=${location}`
        );
        setProperties(response.data);
      } catch (err) {
        console.error("Error cargando propiedades:", err);
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, [params]);

  if (loading) return <p>Cargando propiedades...</p>;
  console.log(properties);

  return (
    <div className="w-full bg-[#F4F5F2]">
      <Navbar theme="yellow" />

      <div className="max-w-7xl mx-auto">
        <BreadcrumbPlace />

        <Header />

        <ContentPage />
      </div>
    </div>
  );
}
