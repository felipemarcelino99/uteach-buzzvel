import Image from "next/image";
import Indent from "../Common/Indent";
import Link from "next/link";
import { MENU_SECTIONS } from "./constants";

export default function Footer() {
  return (
    <footer className="pt-12 bg-[#0F172A]">
      <Indent>
        <div className="flex items-start justify-start flex-col md:flex-row gap-8 md:gap-7 lg:gap-12 pb-[50px]">
          <div className="footer-block">
            <Image
              src="/images/logo-white.webp"
              alt="Logo uTeach"
              width={175}
              height={35}
            />
          </div>
          <div className="flex w-full items-start justify-start gap-8 flex-col md:flex-row md:gap-7 lg:gap-12 flex-wrap">
            {MENU_SECTIONS.map((item) => {
              return (
                <div className="footer-block" key={item.key}>
                  <ul>
                    <li>
                      <Link href="/">{item.title}</Link>
                    </li>
                    {item.items.map((menu) => {
                      return (
                        <li key={menu.label}>
                          <Link href="/" className="flex items-center gap-2">
                            {menu.label}
                            {menu?.tag && (
                              <span className="flex items-center justify-center w-[45px] h-5 bg-[#F3E8FF] text-[#6B21A8] text-xs capitalize rounded-sm">
                                {menu.tag}
                              </span>
                            )}
                            {menu?.icon && (
                              <Image
                                src={menu.icon}
                                alt={`${menu.label} icon`}
                                width={14}
                                height={13}
                              />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between py-6 border-t-1 border-[#334155] gap-5 flex-col md:flex-row">
          <div>
            <p>uteach @ 2023. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex items-center flex-wrap gap-5 md:gap-8">
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/" className="flex items-center gap-2">
                  EN
                  <Image
                    src="/images/icons/world.webp"
                    alt="Icon World"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center gap-2">
                  EUR
                  <Image
                    src="/images/icons/euro.webp"
                    alt="Icon Euro"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/icons/accessibility.webp"
                    alt="Icon Accessibility"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Indent>
    </footer>
  );
}
