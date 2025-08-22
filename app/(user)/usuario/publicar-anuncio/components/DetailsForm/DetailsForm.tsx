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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { DetailsFormProps } from "./DetailsForm.types";
import { formSchema } from "./DetailsForm.data";
import { Input } from "@/components/ui/input";

export function DetailsForm(props: DetailsFormProps) {
  const { formProperty, setFormProperty, setStep } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stateHouse: formProperty.stateHouse,
      buildMeters: formProperty.buildMeters,
      utilsMeters: formProperty.utilsMeters,
      rooms: formProperty.rooms,
      bathrooms: formProperty.bathrooms,
      energyCertificate: formProperty.energyCertificate,
      price: formProperty.price,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFormProperty((prev) => ({
      ...prev,
      ...values,
    }));
    setStep((prev) => prev + 1);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-3">
        <FormField
          control={form.control}
          name="stateHouse"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Estado del inmueble</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">A reformar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">Buen estado</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="buildMeters"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Metros construidos</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="utilsMeters"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Metros útiles</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habitaciones</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Baños</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="energyCertificate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certificado energético</FormLabel>
              <FormControl>
                <Input {...field} placeholder="A, B, C, D, E, F" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio del inmueble</FormLabel>
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
