import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "bg-[#EA580C] border-[#EA580C] text-white",
      black: "bg-[#0F172A] border-[#0F172A] text-white",
      outlineDefault: "border-[#2563EB] text-[#2563EB]",
      outlineBlack: "border-[#0F172A] text-[#0F172A]",
    },
    size: {
      default:
        "text-base px-7 md:text-xl py-3 md:px-9 lg:text-2xl lg:py-5 lg:px-12",
      sm: "text-sm px-5 py-2 md:text-base md:px-7 md:py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
