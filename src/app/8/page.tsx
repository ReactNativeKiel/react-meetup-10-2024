import React from "react";
import BulletPoints from "~/components/presentation/BulletPoints";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Experience</Headline>

      <PageContent>
        <BulletPoints>
          <BulletPoints.Item>
            proven and works very well in a larger project for over a year
          </BulletPoints.Item>

          <BulletPoints.Item>
            building and maintaining forms has become a breeze
          </BulletPoints.Item>

          <BulletPoints.Item>
            stream-lined forms (no JSX freedom etc.)
          </BulletPoints.Item>
        </BulletPoints>
      </PageContent>
    </>
  );
};

export default Page;
