import { FiltersProperty } from "./FiltersProperty";
import { HousesList } from "./HousesList";
import { SaveSearch } from "./SaveSearch";

import dynamic from "next/dynamic";

const MapSearch = dynamic(
  () => import("@/components/Shared/MapSearch/MapSearch"),
  {
    ssr: false,
  }
);

export function ContentPage() {
  // TODO: Create context with filters and params
  return (
    <div className="grid grid-cols-1 md:grid-cols-[312px_1fr] mt-10 ">
      <aside>
        <SaveSearch />

        <div className="p-4 bg-white">
          <MapSearch />

          <FiltersProperty />
        </div>
      </aside>
      <main className="px-6">
        <HousesList />
      </main>
    </div>
  );
}
