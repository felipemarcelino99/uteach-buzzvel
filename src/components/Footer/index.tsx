import Image from "next/image";
import Indent from "../Common/Indent";

export default function Footer() {
  return (
    <footer className="pt-12 bg-[#0F172A]">
      <Indent>
        <div className="flex items-start justify-between gap-3 pb-[50px]">
          <div className="footer-block">
            <Image
              src="/images/logo-white.png"
              alt="Logo uTeach"
              width={175}
              height={35}
            />
          </div>
          <div className="footer-block">
            <ul>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Browse</a>
              </li>
              <li>
                <a>Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <ul>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Browse</a>
              </li>
              <li>
                <a>Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <ul>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Browse</a>
              </li>
              <li>
                <a>Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <ul>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Browse</a>
              </li>
              <li>
                <a>Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <ul>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Browse</a>
              </li>
              <li>
                <a>Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-5 py-6 border-t-1 border-[#334155]">
          <div>
            <p>uteach @ 2023. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li>
                <a>Terms</a>
              </li>
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  EN
                  <Image
                    src="/images/icons/world.png"
                    alt="Icon World"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  EUR
                  <Image
                    src="/images/icons/euro.png"
                    alt="Icon Euro"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a>
                  <Image
                    src="/images/icons/accessibility.png"
                    alt="Icon Accessibility"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Indent>
    </footer>
  );
}
