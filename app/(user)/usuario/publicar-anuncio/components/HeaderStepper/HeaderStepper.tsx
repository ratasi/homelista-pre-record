import { cn } from "@/lib/utils";
import { HeaderStepperProps } from "./HeaderStepper.types";

export function HeaderStepper(props: HeaderStepperProps) {
  const { step } = props;

  const baseClass = "p-4 text-center transition-colors duration-200";
  const activeClass = "bg-black text-white font-semibold";
  const inactiveClass = "bg-white text-gray-700";

  const steps = [
    { id: 1, title: "Datos básicos" },
    { id: 2, title: "Detalles" },
    { id: 3, title: "Fotos" },
    { id: 4, title: "Pago" },
    { id: 5, title: "Resumen" },
  ];

  return (
    <div className="grid grid-cols-5">
      {steps.map((st) => (
        <div
          key={st.id}
          className={cn(
            baseClass,
            step === st.id ? activeClass : inactiveClass
          )}
        >
          <h3>
            {st.id}. {st.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
