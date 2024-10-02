import React from "react";
import BulletPoints from "~/components/presentation/BulletPoints";
import Headline from "~/components/presentation/Headline";
import PageContent from "~/components/presentation/PageContent";

const Page: React.FC = () => {
  return (
    <>
      <Headline>Forms in react</Headline>

      <PageContent>
        <BulletPoints>
          <BulletPoints.Item>
            Custom forms with custom state, validation, resets, ...
          </BulletPoints.Item>

          <BulletPoints.Item indent={1}>
            <a
              target="_blank"
              href="https://legacy.reactjs.org/docs/forms.html"
              className="text-blue-800 underline hover:text-blue-700"
            >
              https://legacy.reactjs.org/docs/forms.html
            </a>
          </BulletPoints.Item>

          <BulletPoints.Item indent={1}>
            <a
              target="_blank"
              href="https://react.dev/reference/react-dom/components/form"
              className="text-blue-800 underline hover:text-blue-700"
            >
              https://react.dev/reference/react-dom/components/form
            </a>
          </BulletPoints.Item>

          <BulletPoints.Item>
            Libs (Formik, react-hook-form, ...) simplify form handling
          </BulletPoints.Item>

          <BulletPoints.Item indent={1}>
            <a
              target="_blank"
              href="https://formik.org/docs/overview#the-gist"
              className="text-blue-800 underline hover:text-blue-700"
            >
              https://formik.org/docs/overview
            </a>
          </BulletPoints.Item>

          <BulletPoints.Item indent={1}>
            <a
              target="_blank"
              href="https://react-hook-form.com/get-started#SchemaValidation"
              className="text-blue-800 underline hover:text-blue-700"
            >
              https://react-hook-form.com/get-started
            </a>
          </BulletPoints.Item>
        </BulletPoints>
      </PageContent>
    </>
  );
};

export default Page;
