import React from "react";
import Title from "../Common/Title";
import ButtonLink from "../Common/ButtonLink";
import Image from "next/image";

export default function Join() {
  return (
    <section className="w-full bg-yellow overflow-hidden py-4 md:py-0 md:pt-20 md:pb-14">
      <div className="flex items-center justify-between w-full max-w-full px-4 md:px-0 md:x-0 flex-col md:flex-row gap-8 md:gap-0">
        <Image
          src="/images/detail-world-left.webp"
          alt="Image"
          width={439}
          height={637}
          className="hidden h-auto w-full md:block md:max-w-[360px] lg:max-w-[439px]"
          loading="lazy"
        />
        <Image
          src="/images/detail-world-top.webp"
          alt="Image"
          width={361}
          height={167}
          className="block h-auto w-full md:hidden max-w-[361px]"
          loading="lazy"
        />
        <div className="flex flex-col items-center min-w-[350px]">
          <Title label="Join a world of learning" align="center" />
          <p className="text-default my-8 text-center">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            <br /> Risus elit et fringilla habitant ut facilisi.
          </p>
          <ButtonLink label="Sign Up Now" href="/" />
        </div>
        <Image
          src="/images/detail-world-right.webp"
          alt="Image"
          width={426}
          height={600}
          className="h-auto w-full hidden md:block md:max-w-[343px] lg:max-w-[426px]"
          loading="lazy"
        />
        <Image
          src="/images/detail-world-bottom.webp"
          alt="Image"
          width={352}
          height={195}
          className="h-auto w-full block md:hidden max-w-[352px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
