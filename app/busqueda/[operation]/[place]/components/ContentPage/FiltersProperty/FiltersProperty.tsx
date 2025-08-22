import { FilterPrice } from "./FilterPrice";
import { FilterSizes } from "./FilterSizes";
import { FiltersState } from "./FiltersState";
import { RemoveFilters } from "./RemoveFilters";

export function FiltersProperty() {
  return (
    <div>
      <FilterPrice />

      <FilterSizes />

      <FiltersState />

      <div className="py-4 border-b " />

      <RemoveFilters />
    </div>
  );
}
