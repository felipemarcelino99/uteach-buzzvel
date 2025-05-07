import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";
import { ButtonHTMLAttributes } from "react";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  widthFull?: boolean;
  label: string;
}

export default function ButtonLink({
  widthFull = false,
  label,
  variant,
  size,
  ...props
}: IButtonProps) {
  const classes = buttonVariants({ variant, size });

  return (
    <button
      className={`${widthFull ? "w-full max-w-full" : "w-fit"} ${classes}`}
      {...props}
      aria-label={label}
      id="button"
    >
      {label}
    </button>
  );
}
