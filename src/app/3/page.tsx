"use client";

import React from "react";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Getting started</Headline>

      <PageContent>
        <CodeBlock>
          {`How to build a form?

            - Generate a mapping
            - create <OurCustomForm />
            - use <OurCustomForm /> with a zod schema
          `}
        </CodeBlock>

        {/* <NewEventForm /> goes here  */}
      </PageContent>
    </>
  );
};

export default Page;
