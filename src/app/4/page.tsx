"use client";

import React from "react";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";
import { z } from "zod";
import { OurForm } from "~/components/form/mapping";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Why?</Headline>

      <PageContent>
        <CodeBlock>Another form</CodeBlock>

        {/* <SignUpForm /> goes here */}

        <OurForm
          onSubmit={(values) => alert(values)}
          schema={z.object({
            title: z.string(),
            description: z.string(),
          })}
          // renderAfter={() => <button type="submit">Submit</button>}
        />
      </PageContent>
    </>
  );
};

export default Page;
