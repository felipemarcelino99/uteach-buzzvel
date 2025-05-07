import Image from "next/image";
import ButtonLink from "../Common/ButtonLink";
import Indent from "../Common/Indent";
import Link from "next/link";

export default function StudentsWorldwide() {
  return (
    <section className="py-12 md:py-20">
      <Indent>
        <div className="flex items-center justify-between gap-12 flex-col md:gap-8 md:flex-row">
          <div className="max-w-[575px] w-full">
            <h1 className="title title-lg">
              <span className="before-underline-image">Teach</span> students
              worldwide
            </h1>

            <p className="text-default my-8">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>

            <div className="flex items-center justify-start gap-8">
              <ButtonLink label="Sign Up Now" href="/" />

              <Link
                href="/"
                className="flex items-center justify-between gap-4"
              >
                <Image
                  src="/images/icons/play.webp"
                  alt="Ícone play"
                  width={20}
                  height={20}
                />
                <span className="block text-base md:text-xl lg:text-2xl text-[#2563EB] font-medium">
                  View Demo
                </span>
              </Link>
            </div>

            <div className="flex justify-start w-full max-w-full flex-col mt-11 gap-4 items-start md:items-center md:gap-5 lg:gap-12 md:mt-20 md:flex-row">
              <div>
                <p className="text-base text-[#475569] leading-[1.4]">
                  Trusted by
                  <br />
                  leading companies
                </p>
              </div>

              <div className="flex justify-start w-full max-w-full gap-4 items-start md:items-center md:gap-5 lg:gap-12">
                <Image
                  src="/images/icons/banner_top_1.webp"
                  alt="Ícone 1"
                  width={25}
                  height={32}
                />

                <Image
                  src="/images/icons/banner_top_2.webp"
                  alt="Ícone 1"
                  width={29}
                  height={32}
                />

                <Image
                  src="/images/icons/banner_top_3.webp"
                  alt="Ícone 1"
                  width={32}
                  height={32}
                />

                <Image
                  src="/images/icons/banner_top_4.webp"
                  alt="Ícone 1"
                  width={27}
                  height={32}
                />

                <Image
                  src="/images/icons/banner_top_5.webp"
                  alt="Ícone 1"
                  width={33}
                  height={32}
                />
              </div>
            </div>
          </div>

          <div
            role="img"
            aria-label="Imagem banner"
            className="max-w-[625px] w-full"
          >
            <Image
              src="/images/image_banner_top.webp"
              alt="Imagem banner"
              width={625}
              height={545}
            />
          </div>
        </div>
      </Indent>
    </section>
  );
}
