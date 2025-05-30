import Link, { LinkProps } from "next/link";
import Image from "next/image";

interface ICustomLinkType extends LinkProps {
  label: string;
  color?: string;
  link?: string;
  className?: string;
}

export default function CustomLink({
  label,
  color = "blue",
  className = "",
  ...props
}: ICustomLinkType) {
  return (
    <Link
      className={`flex items-center gap-2.5 text-xl font-medium ${className}`}
      style={{ color }}
      {...props}
    >
      <p>{label}</p>
      <Image
        src="/images/icons/arrow-right.webp"
        alt="Icon arrow right"
        width={14}
        height={13}
        loading="lazy"
      />
    </Link>
  );
}
