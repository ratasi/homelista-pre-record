import { SetStateAction } from "react";

export type PropertiesTabsProps = {
  actionType: PropertiesTypes;
  setActionType: React.Dispatch<SetStateAction<PropertiesTypes>>;
};

type PropertiesTypes = "comprar" | "alquilar" | "compartir";
