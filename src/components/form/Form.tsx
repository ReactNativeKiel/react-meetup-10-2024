import React from "react";

const Form = ({
  children,
  onSubmit,

  gap = 16,
  submitLabel = "Submit",
}: {
  children: React.ReactNode;
  onSubmit: () => void;

  gap?: number;
  submitLabel?: string;
}) => {
  return (
    <form
      noValidate
      className={`my-3 grid w-full grid-cols-12 rounded-xl bg-white/20 p-4`}
      style={{ gap: `${gap}px` }}
      onSubmit={onSubmit}
    >
      {children}

      <div className="col-span-12">
        <button
          type="submit"
          className="rounded bg-white/20 px-2 py-1 hover:bg-white/30"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default Form;
