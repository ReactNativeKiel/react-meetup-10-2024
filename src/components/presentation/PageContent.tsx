import React from "react";

const PageContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="min-h-[70vh] w-full">{children}</div>;
};

export default PageContent;
