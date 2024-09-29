import React from "react";
import CodeBlock from "~/components/presentation/CodeBlock";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Maintaining forms</Headline>

      <PageContent>
        <CodeBlock>Extend and maintain the form</CodeBlock>

        {/* <SignUpForm copy /> goes here */}
      </PageContent>
    </>
  );
};

export default Page;
