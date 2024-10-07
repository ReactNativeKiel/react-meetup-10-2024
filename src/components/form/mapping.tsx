"use client";

import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import TextField from "./fields/TextField";
import Form from "./Form";
import NumberField from "./fields/NumberField";

export const AddressSchema = z.object({
  zip: z.string(),
  city: z.string(),
  street: z.string(),
});

const mapping = [
  [z.string(), TextField],
  [z.number(), NumberField],
  // [AddressSchema, ComplexAddressField],
] as const;

export const OurForm = createTsForm(mapping, { FormComponent: Form });
