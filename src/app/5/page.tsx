"use client";

import React from "react";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";
import { z } from "zod";
import { AddressSchema, OurForm } from "~/components/form/mapping";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  maxCount: z.number().min(1).max(10),
  address: AddressSchema,
});

const Page: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const titleValue = form.watch("title");

  return (
    <>
      <Headline>Maintaining forms</Headline>

      <PageContent>
        <CodeBlock>Extend and maintain the form</CodeBlock>

        {/* <SignUpForm copy /> goes here */}

        <OurForm
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          defaultValues={{
            title: "My Event",
            description: "This is a cool event",
            maxCount: 5,
          }}
          form={form}
          schema={FormSchema}
          formProps={{
            gap: 10,
          }}
          props={{
            title: {
              size: 5,
              borderRad: 100,
            },
            description: {
              rows: 5,
              size: 5,
              // hidden: titleValue === "basti",
              label: "Description",
              caption: "Please provide a description",
            },
            // maxCount: {
            //   max: 10,
            // }
          }}
          // renderAfter={() => <button type="submit">Submit</button>}
        />
      </PageContent>
    </>
  );
};

export default Page;
