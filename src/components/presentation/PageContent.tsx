import React from "react";

const PageContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="min-h-[70vh] w-full space-y-6">{children}</div>;
};

export default PageContent;
