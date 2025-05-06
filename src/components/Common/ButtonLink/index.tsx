import Link from "next/link";
import { LinkProps } from "next/link";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";

export interface IButtonLinkProps
  extends LinkProps,
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
}: IButtonLinkProps) {
  const classes = buttonVariants({ variant, size });

  return (
    <Link
      className={`${widthFull ? "w-full max-w-full" : "w-fit"} ${classes}`}
      {...props}
    >
      {label}
    </Link>
  );
}
