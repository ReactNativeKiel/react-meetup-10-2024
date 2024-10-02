import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { type LayoutProps } from ".next/types/app/layout";
import { Next, Prev } from "~/components/presentation/NextPrev";

export const metadata: Metadata = {
  title:
    "How to build maintainable, type-safe forms faster | React meetup Kiel #25",
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#74acb2] to-[#2b2f70] text-white`}
    >
      <body>
        <Prev />

        <main className="container flex h-full min-w-[50vw] flex-col items-center justify-center gap-6 px-4 py-16">
          {children}
        </main>

        <Next />

        <div className="fixed bottom-4 right-4 text-lg font-thin tracking-wide">
          Basti Buck, react meetup Kiel #25, 07.10.2024
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
