"use client";

import React from "react";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Maintaining forms #2</Headline>

      <PageContent>
        <CodeBlock>Use field props</CodeBlock>

        {/* <SignUpForm copy /> goes here */}
      </PageContent>
    </>
  );
};

export default Page;
