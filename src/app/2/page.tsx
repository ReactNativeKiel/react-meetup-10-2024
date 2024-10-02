import React from "react";
import BulletPoints from "~/components/presentation/BulletPoints";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>react-ts-form</Headline>

      <PageContent>
        <BulletPoints>
          <BulletPoints.Item>
            <a
              target="_blank"
              href="https://react-ts-form.com/"
              className="text-blue-800 underline hover:text-blue-700"
            >
              react-ts-form.com
            </a>
          </BulletPoints.Item>

          <BulletPoints.Item indent={1}>
            Wrapper around react-hook-form
          </BulletPoints.Item>

          <BulletPoints.Item>Claims</BulletPoints.Item>

          <BulletPoints.Item indent={1}>Typesafety First 👷‍♂</BulletPoints.Item>
          <BulletPoints.Item indent={1}>
            No more boilerplate 🧰
          </BulletPoints.Item>
          <BulletPoints.Item indent={1}>Headless 🤯</BulletPoints.Item>
        </BulletPoints>
      </PageContent>
    </>
  );
};

export default Page;
