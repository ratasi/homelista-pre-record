"use client";

import { Navbar } from "@/components/Shared";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import { BreadcrumbPlace } from "./components/BreadcrumbPlace";
import { ContentPage, Header } from "./components";

export default function PlacePage() {
  const params = useParams<{ operation: string; place: string }>();
  // TODO: Get operation and place from bbdd

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
