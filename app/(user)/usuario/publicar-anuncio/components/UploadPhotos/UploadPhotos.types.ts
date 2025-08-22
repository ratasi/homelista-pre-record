import { FormType } from "../../page.types";

export type UploadPhotosProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formProperty: FormType;
  setFormProperty: React.Dispatch<React.SetStateAction<FormType>>;
};
