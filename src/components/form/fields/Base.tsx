"use client";

import { useFieldInfo, useTsController } from "@ts-react/form";
import React from "react";

const Base: React.FC<
  React.PropsWithChildren<{
    label?: string;
    caption?: string;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  }>
> = ({ label, caption, size = 12, children }) => {
  const {
    error,
    field: { name },
  } = useTsController<string>();

  const { isOptional, isNullable } = useFieldInfo();

  const required = !isOptional && !isNullable;

  return (
    <div
      className={`${error !== undefined ? "with-error" : ""} w-full`}
      style={{
        gridColumn: `span ${size} / span ${size}`,
      }}
    >
      <label className="flex flex-col gap-1">
        <span>
          {label ?? name}
          {required && "*"}
        </span>

        {children}
      </label>

      {caption && error === undefined ? (
        <div className="text-sm tracking-tight text-gray-300">{caption}</div>
      ) : null}

      {error !== undefined ? (
        <div className="text-sm tracking-tight text-red-500">
          {error.errorMessage}
        </div>
      ) : null}
    </div>
  );
};

export default Base;
