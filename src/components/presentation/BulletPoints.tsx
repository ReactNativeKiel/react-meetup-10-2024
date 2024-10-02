import React from "react";

const BulletPoints: React.FC<React.PropsWithChildren> &
  BulletPointComposition = ({ children }) => {
  return (
    <div className="space-y-4 text-left text-4xl font-light">{children}</div>
  );
};

const Item: React.FC<
  React.PropsWithChildren<{ indent?: 0 | 1 | 2 | 3 | 4 | 5 | 6 }>
> = ({ indent = 0, children }) => {
  return (
    <div
      className="flex items-center gap-2"
      style={{ marginInlineStart: indent * 2 + "rem" }}
    >
      <svg
        className="mt-1.5 h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" fill="currentColor" />
      </svg>

      <div>{children}</div>
    </div>
  );
};

interface BulletPointComposition {
  Item: typeof Item;
}

BulletPoints.Item = Item;

export default BulletPoints;
