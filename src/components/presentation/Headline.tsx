import React from "react";

const Headline: React.FC<
  React.PropsWithChildren<{ size?: "xxl" | "xl" | "lg" }>
> = ({ size = "xl", children }) => {
  let fontSize = "";

  switch (size) {
    case "xxl":
      fontSize = "text-8xl";
      break;

    case "xl":
    default:
      fontSize = "text-6xl";
      break;

    case "lg":
      fontSize = "text-5xl";
      break;
  }

  return (
    <h1 className={`${fontSize} text-center font-extrabold tracking-tight`}>
      {children}
    </h1>
  );
};

export default Headline;
