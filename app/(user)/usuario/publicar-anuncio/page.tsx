"use client";

import { useState } from "react";

import { Navbar } from "@/components/Shared";

import {
  BasicForm,
  HeaderStepper,
  DetailsForm,
  UploadPhotos,
  PricingForm,
  Summary,
} from "./components";
import { FormType } from "./page.types";

export default function PublicarAnuncio() {
  const [step, setStep] = useState(1);
  const [formProperty, setFormProperty] = useState<FormType>({
    tipology: "",
    location: "",
    streetName: "",
    streetNumber: "",
    operation: "venta",
    stateHouse: "",
    buildMeters: "",
    utilsMeters: "",
    rooms: "",
    bathrooms: "",
    energyCertificate: "",
    price: "",
    images: [],
  });

  return (
    <div>
      <Navbar theme="yellow" />

      <HeaderStepper step={step} />

      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-3xl font-bold">Poner tu anuncio de particular</h1>

        {step === 1 && (
          <BasicForm
            setStep={setStep}
            formProperty={formProperty}
            setFormProperty={setFormProperty}
          />
        )}

        {step === 2 && (
          <DetailsForm
            setStep={setStep}
            formProperty={formProperty}
            setFormProperty={setFormProperty}
          />
        )}

        {step === 3 && (
          <UploadPhotos
            setStep={setStep}
            formProperty={formProperty}
            setFormProperty={setFormProperty}
          />
        )}

        {step === 4 && <PricingForm setStep={setStep} />}

        {step === 5 && <Summary formProperty={formProperty} />}
      </div>
    </div>
  );
}
