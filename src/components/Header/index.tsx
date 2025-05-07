"use client";
import Image from "next/image";
import Indent from "../Common/Indent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonLink from "../Common/ButtonLink";
import Link from "next/link";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header>
      <Indent>
        <div className="flex items-center justify-between py-4 md:py-0">
          <Link href="/" className="block md:hidden">
            <Image
              src="/images/logo.png"
              alt="Logo uTeach"
              width={103}
              height={35}
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
                    <Link href="" role="img" aria-label="Logo uTeach">
                      <Image
                        src="/images/logo.png"
                        alt="Logo uTeach"
                        width={103}
                        height={35}
                      />
                    </Link>
                    <ul className="container-logo">
                      <li className="link">
                        <Link href="/">Products</Link>
                      </li>
                      <li className="link">
                        <Link href="/">Solutions</Link>
                      </li>
                      <li className="link">
                        <Link href="/">Pricing</Link>
                      </li>
                      <li className="link">
                        <Link href="/">Resources</Link>
                      </li>
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
            ></button>
          </div>
        </div>
      </Indent>
    </header>
  );
}
