import React from "react";

type IndentType = {
  children: React.ReactNode;
};

export default function Indent({ children }: IndentType) {
  return (
    <div className="w-full max-w-full px-5 md:max-w-[1280px] md:w-[90%] md:mx-auto">
      {children}
    </div>
  );
}
