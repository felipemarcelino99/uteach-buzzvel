import Image from "next/image";
import Indent from "../Common/Indent";
import ButtonOutlined from "../Common/ButtonOutlined";

export default function Header() {
  return (
    <header>
      <Indent>
        <div className="w-full max-w-full flex md:gap-5 md:justify-between md:items-center md:py-8">
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
          <div className="flex w-full max-w-fit items-center gap-6">
            <a href="javascript:;" className="link whitespace-nowrap">
              Log In
            </a>
            <ButtonOutlined label="Sign Up Now" colorDefault="#0F172A" />
          </div>
        </div>
      </Indent>
    </header>
  );
}
