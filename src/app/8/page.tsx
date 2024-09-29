import React from "react";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Experience</Headline>

      <PageContent>
        {/* 
          - works very well in a larger project for a year
          - building and maintaining forms has become a breeze
          - stream-lined forms (no JSX freedom etc.)
        */}
      </PageContent>
    </>
  );
};

export default Page;
