"use client";

import { useTsController } from "@ts-react/form";
import { type ReactComponentWithRequiredProps } from "@ts-react/form/lib/src/createSchemaForm";
import React from "react";
import Base from "./Base";

const TextField: ReactComponentWithRequiredProps<
  React.ComponentProps<typeof Base> & {
    rows?: number;
    borderRad?: number;
  }
> = ({ rows,  borderRad = 0, ...baseProps }) => {
  const {
    field: { onChange, value },
  } = useTsController<string>();

  return (
    <Base {...baseProps}>
      {rows === undefined ? (
        <input onChange={(e) => onChange(e.target.value)} value={value ?? ""} />
      ) : (
        <textarea
          rows={rows}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </Base>
  );
};

export default TextField;
