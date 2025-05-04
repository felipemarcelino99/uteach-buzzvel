import Image from "next/image";
import React from "react";

type LinkType = {
  label: string;
  color?: string;
  link?: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({
  label,
  color = "#2563EB",
  link = "#",
  className = "",
  ...props
}: LinkType) {
  return (
    <a
      className={`flex items-center gap-2.5 text-xl font-medium ${className}`}
      style={{ color }}
      href={link}
      {...props}
    >
      <p>{label}</p>
      <Image
        src="/images/icons/arrow-right.png"
        alt="Icon arrow right"
        width={14}
        height={13}
      />
    </a>
  );
}
