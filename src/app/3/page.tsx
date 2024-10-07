"use client";

import { createTsForm } from "@ts-react/form";
import React from "react";
import { z } from "zod";
import NumberField from "~/components/form/fields/NumberField";
import TextField from "~/components/form/fields/TextField";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const mapping = [
  [z.string(), TextField],
  [z.number(), NumberField],
] as const;

const OurCustomForm = createTsForm(mapping);

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
        <OurCustomForm
          onSubmit={(values) => alert(values)}
          schema={z.object({
            name: z.string().min(3),
            email: z.string().email(),
          })}
          renderAfter={() => <button type="submit">Submit</button>}
        />
      </PageContent>
    </>
  );
};

export default Page;
