import React from "react";

type IndentType = {
  children: React.ReactNode;
};

export default function Indent({ children }: IndentType) {
  return (
    <div className="w-full max-w-full px-4 lg:px-0 lg:max-w-[1280px] lg:w-[90%] lg:mx-auto">
      {children}
    </div>
  );
}
