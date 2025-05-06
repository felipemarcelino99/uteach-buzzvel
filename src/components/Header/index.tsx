"use client";
import Image from "next/image";
import Indent from "../Common/Indent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonLink from "../Common/ButtonLink";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header>
      <Indent>
        <div className="flex items-center justify-between py-4 md:py-0">
          <a href="" className="block md:hidden">
            <Image
              src="/images/logo.png"
              alt="Logo uTeach"
              width={103}
              height={35}
            />
          </a>
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
                    <a href="javascript:;" role="img" aria-label="Logo uTeach">
                      <Image
                        src="/images/logo.png"
                        alt="Logo uTeach"
                        width={103}
                        height={35}
                      />
                    </a>
                    <ul className="container-logo">
                      <li className="link">
                        <a>Products</a>
                      </li>
                      <li className="link">
                        <a>Solutions</a>
                      </li>
                      <li className="link">
                        <a>Pricing</a>
                      </li>
                      <li className="link">
                        <a>Resources</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-full max-w-fit items-center gap-6 mt-12 flex-col md:flex-row md:mt-0">
                    <a href="javascript:;" className="link whitespace-nowrap">
                      Log In
                    </a>
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
