"use client";
import Image from "next/image";
import Indent from "../Common/Indent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonLink from "../Common/ButtonLink";
import Link from "next/link";
import { ITEMS } from "./constants";
import HeaderLink from "../Common/HeaderLink";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header>
      <Indent>
        <div className="flex items-center justify-between py-4 md:py-0">
          <Link href="/" className="block md:hidden">
            <Image
              src="/images/logo.webp"
              alt="Logo uTeach"
              width={103}
              height={35}
              priority={true}
            />
          </Link>
          <AnimatePresence>
            {(isOpened || typeof window !== "undefined") && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`${
                  isOpened ? "opened" : "hidden"
                } md:block w-full max-w-full absolute md:relative`}
              >
                <nav className="w-full max-w-full absolute flex-col items-center md:relative md:flex-row flex justify-between py-4 md:gap-5 md:py-8">
                  <div className="container-logo">
                    <Link href="" aria-label="Logo uTeach">
                      <Image
                        src="/images/logo.webp"
                        alt="Logo uTeach"
                        width={103}
                        height={35}
                        priority={true}
                      />
                    </Link>
                    <ul className="container-logo">
                      {ITEMS.map((item) => {
                        return (
                          <HeaderLink key={item.id}>
                            <Link href="/">{item.label}</Link>
                          </HeaderLink>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex w-full max-w-fit items-center gap-6 mt-12 flex-col md:flex-row md:mt-0">
                    <Link
                      href="javascript:;"
                      className="link whitespace-nowrap"
                    >
                      Log In
                    </Link>
                    <ButtonLink
                      href="/"
                      variant="outlineBlack"
                      size="sm"
                      label="Sign Up Now"
                    />
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="block md:hidden">
            <button
              className={`${isOpened && "menu-open"} hamburger`}
              onClick={() => setIsOpened(!isOpened)}
              aria-label="Hamburger menu"
              id="hamburger_menu"
            ></button>
          </div>
        </div>
      </Indent>
    </header>
  );
}
