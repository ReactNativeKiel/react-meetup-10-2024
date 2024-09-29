"use client";

import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import TextField from "./fields/TextField";
import Form from "./Form";
import NumberField from "./fields/NumberField";

const mapping = [
  [z.string(), TextField],
  [z.number(), NumberField],
] as const;

export const OurForm = createTsForm(mapping, { FormComponent: Form });
