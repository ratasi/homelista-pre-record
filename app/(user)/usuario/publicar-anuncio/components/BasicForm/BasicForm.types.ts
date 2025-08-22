import { FormType } from "../../page.types";

export type BasicFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formProperty: FormType;
  setFormProperty: React.Dispatch<React.SetStateAction<FormType>>;
};
