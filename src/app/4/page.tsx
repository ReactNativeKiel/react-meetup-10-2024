"use client";

import React from "react";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Why?</Headline>

      <PageContent>
        <CodeBlock>Another form</CodeBlock>

        {/* <SignUpForm /> goes here */}
      </PageContent>
    </>
  );
};

export default Page;
