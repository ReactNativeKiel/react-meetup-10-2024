"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MAX_PAGE_COUNT } from "./meta";

const Next: React.FC = () => {
  const pathname = usePathname().replace(/\//, "");

  const currentPage = parseInt(pathname || "0", 10);

  if (currentPage === MAX_PAGE_COUNT) {
    return null;
  }

  return (
    <Link
      className="fixed right-4 top-1/2 rounded bg-white/5 px-4 py-8 text-2xl text-white hover:bg-white/10"
      href={`/${currentPage + 1}`}
    >
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};

const Prev: React.FC = () => {
  const pathname = usePathname().replace(/\//, "");

  if (pathname === "") {
    return null;
  }

  const currentPage = parseInt(pathname || "1", 10);

  return (
    <Link
      className="fixed left-4 top-1/2 rounded bg-white/5 px-4 py-8 text-2xl text-white hover:bg-white/10"
      href={`/${currentPage === 1 ? "" : currentPage - 1}`}
    >
      <svg
        className="h-8 w-8 rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};

export { Next, Prev };
