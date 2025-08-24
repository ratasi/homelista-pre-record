"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { dataTipologyTypes } from "@/models/tipology.data";
import { BasicFormProps } from "./BasicForm.types";
import { formSchema } from "./BasicForm.data";
import { fetchCoordinates } from "@/utils/fetchCoordinates";
import { normalizeString } from "@/utils/normalizeString";

export function BasicForm(props: BasicFormProps) {
  const { setStep, formProperty, setFormProperty } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipology: formProperty.tipology,
      location: formProperty.location,
      streetName: formProperty.streetName,
      streetNumber: formProperty.streetNumber,
      type: formProperty.operation,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const fullAddress = `${values.streetName} ${values.streetNumber}, ${values.location}`;

    const coords = await fetchCoordinates(fullAddress);

    setFormProperty((prev) => ({
      ...prev,
      ...values,
      tipology: normalizeString(values.tipology),
      location: normalizeString(values.location),
      latitude: coords?.latitude ?? null,
      longitude: coords?.longitude ?? null,
    }));
    setStep((prev) => prev + 1);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-3">
        <FormField
          control={form.control}
          name="tipology"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Elige el tipo de inmueble</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="border border-[#cbccc7] px-3 rounded-none text-[#4d4d4c] font-extrabold text-lg bg-white box-border w-full">
                  <SelectValue placeholder="Viviendas" />
                </SelectTrigger>
                <SelectContent className="h-full">
                  {dataTipologyTypes.map((tipology) => (
                    <SelectItem key={tipology.value} value={tipology.value}>
                      {tipology.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Operación</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="venta" />
                    </FormControl>
                    <FormLabel className="font-normal">Venta</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="alquiler" />
                    </FormControl>
                    <FormLabel className="font-normal">Alquiler</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Localidad</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="streetName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la vía</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="streetNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de la vía</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!form.formState.isValid}>
          Siguiente
        </Button>
      </form>
    </Form>
  );
}
