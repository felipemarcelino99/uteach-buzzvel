import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "bg-orange border-orange text-white",
      black: "bg-dark border-dark text-white",
      outlineDefault: "border-blue text-blue hover:bg-blue hover:text-white",
      outlineBlack: "border-dark text-dark hover:bg-dark hover:text-white",
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
