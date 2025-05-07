"use client";
type HeaderLinkType = {
  children: React.ReactNode;
};

export default function HeaderLink({ children }: HeaderLinkType) {
  return <li className="link">{children}</li>;
}
