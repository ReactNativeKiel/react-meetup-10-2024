import React from "react";

const CodeBlock: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <code className="block min-h-60 w-full whitespace-pre-line bg-black p-6 text-xl text-green-500">
      {children}
    </code>
  );
};

export default CodeBlock;
