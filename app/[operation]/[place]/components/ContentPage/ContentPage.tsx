import { FiltersProperty } from "./FiltersProperty";
import { SaveSearch } from "./SaveSearch";

import dynamic from "next/dynamic";

const MapSearch = dynamic(() => import("./MapSearch/MapSearch"), {
  ssr: false,
});

export function ContentPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[312px_1fr] mt-10 ">
      <aside>
        <SaveSearch />

        <div className="p-4 bg-white">
          <MapSearch />

          <FiltersProperty />
        </div>
      </aside>
      <main>
        <p>show housess</p>
      </main>
    </div>
  );
}
