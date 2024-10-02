import React from "react";
import BulletPoints from "~/components/presentation/BulletPoints";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Check claims</Headline>

      <PageContent>
        <BulletPoints>
          <BulletPoints.Item>✅ Typesafety First 👷‍♂</BulletPoints.Item>
          <BulletPoints.Item>✅ No more boilerplate 🧰</BulletPoints.Item>
          <BulletPoints.Item>✅ Headless 🤯</BulletPoints.Item>
        </BulletPoints>
      </PageContent>
    </>
  );
};

export default Page;
