import React from "react";

type IndentType = {
  children: React.ReactNode;
};

export default function Indent({ children }: IndentType) {
  return (
    <div className="w-full max-w-full px-5 md:px-0 md:max-w-[1280px] md:mx-auto">
      {children}
    </div>
  );
}
