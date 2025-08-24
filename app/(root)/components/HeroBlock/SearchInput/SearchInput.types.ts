import { SetStateAction } from "react";

export type SearchInputProps = {
  searchProvince: string;
  setSearchProvince: React.Dispatch<SetStateAction<string>>;
  propertyType: string;
  actionType: string;
};
