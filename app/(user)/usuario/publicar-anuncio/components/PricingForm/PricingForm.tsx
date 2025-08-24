import { ButtonPrimary } from "@/components/Shared";

export type PricingFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export function PricingForm(props: PricingFormProps) {
  const { setStep } = props;

  return (
    <div>
      <h1>Pricingggg</h1>
      <ButtonPrimary
        text="Siguiente paso"
        onClick={() => setStep((prev) => prev + 1)}
      />
    </div>
  );
}
