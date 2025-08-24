import { PropertiesTabsProps } from "./PropertiesTabs.types";

export function PropertiesTabs(props: PropertiesTabsProps) {
  const { actionType, setActionType } = props;
  const tabs: { value: "comprar" | "alquilar" | "compartir"; label: string }[] =
    [
      { value: "comprar", label: "Comprar" },
      { value: "alquilar", label: "Alquilar" },
      { value: "compartir", label: "Compartir" },
    ];

  return (
    <div className="flex h-full">
      {tabs.map((tab) => (
        <span
          key={tab.value}
          onClick={() => setActionType(tab.value)}
          className={`py-1.5 px-3 font-extrabold text-lg flex items-center justify-center cursor-pointer 
                    ${
                      actionType === tab.value
                        ? "border-2 border-[#b62682] text-[#b62682] bg-[#fff0f9]"
                        : "border border-[#cbccc7] text-[#4d4d4c] bg-white hover:border-[#b62682]"
                    }`}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
}
