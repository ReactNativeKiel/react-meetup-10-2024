"use client";

import { useNumberFieldInfo, useTsController } from "@ts-react/form";
import { type ReactComponentWithRequiredProps } from "@ts-react/form/lib/src/createSchemaForm";
import React from "react";
import Base from "./Base";

const NumberField: ReactComponentWithRequiredProps<
  React.ComponentProps<typeof Base> & {
    step?: number;
  }
> = ({ step, ...baseProps }) => {
  const {
    field: { onChange, value },
  } = useTsController<number>();

  const { minValue, maxValue, isInt } = useNumberFieldInfo();

  return (
    <Base {...baseProps}>
      <input
        min={minValue}
        max={maxValue}
        type="number"
        value={value !== undefined ? value + "" : ""}
        onChange={(e) => {
          onChange(e.target.valueAsNumber);
        }}
        step={isInt ? 1 : (step ?? 0.1)}
      />
    </Base>
  );
};

export default NumberField;
