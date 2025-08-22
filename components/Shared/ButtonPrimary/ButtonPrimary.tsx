import { Button } from "@/components/ui/button";
import { ButtonPrimaryProps } from "./ButtonPrimary.types";
import { cn } from "@/lib/utils";

export function ButtonPrimary(props: ButtonPrimaryProps) {
  const { text, onClick, className } = props;

  return (
    <Button
      className={cn(
        "bg-[#b62682] border border-[#b62682] rounded-none font-bold text-lg h-[42px] hover:bg-[#8c1d64] w-full md:w-auto",
        className
      )}
      onClick={onClick}
      style={{
        boxShadow:
          "inset 0 -1px 1px 0 #8c1d64, inset 0 1px 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {text}
    </Button>
  );
}
