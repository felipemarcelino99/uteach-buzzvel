import Image from "next/image";
import React from "react";
import Card from "../Common/Card";
import CustomLink from "../Common/CustomLink";
import Indent from "../Common/Indent";
import { CardStyle } from "../Common/Card/cardEnums";

export default function Features() {
  return (
    <section className="pb-[60px]">
      <Indent>
        <div className="flex items-center justify-center flex-col md:flex-row md:gap-7 lg:gap-11">
          <div className="max-w-full md:max-w-[600px] w-full">
            <h2 className="title title-sm">
              All the cool
              <span className="before-plane-image">features</span>
            </h2>
            <p className="text-default my-8">
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
              ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
              pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
              ullamcorper non viverra a, neque orci.
            </p>
            <CustomLink href="/" label="View all the features" />
          </div>
          <div className="max-w-full w-full flex flex-col justify-center pl-0 md:pl-2.5 gap-4 lg:pl-6 lg:gap-6 bg-[url(/images/bg-features-mobile.webp)] bg-[right_top] bg-size-[auto] md:bg-[url(/images/bg-features.webp)] md:bg-[center_left] md:bg-size-[contain] bg-no-repeat min-h-[469px] md:min-h-[550px]">
            <div className="flex items-end gap-4 lg:gap-6 overflow-hidden">
              <Card
                type={CardStyle.Featured}
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                className="max-w-56 min-w-56 md:min-w-0"
              />
              <div className="relative max-w-[186px] w-full min-w-[186px] md:min-w-0">
                <Image
                  src="/images/img-features-1.webp?v=123"
                  alt="Image meet"
                  width={186}
                  height={158}
                  className="shadow-xl max-w-[186px] w-full block h-auto min-w-[186px] md:min-w-0"
                  loading="lazy"
                />
                <div className="max-w-20 rounded-full shadow-xl absolute bottom-4 right-[-40px]">
                  <Image
                    src="/images/img-features-1-detail.webp?v=123"
                    alt="Image meet"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-6 overflow-hidden">
              <Image
                src="/images/img-features-2.webp?v=123"
                alt="Image meet"
                width={304}
                height={179}
                className="shadow-xl max-w-[304px] w-full block h-auto min-w-[304px] md:min-w-0"
                loading="lazy"
              />
              <Image
                src="/images/img-features-3.webp?v=123"
                alt="Image meet"
                width={232}
                height={179}
                className="shadow-xl max-w-[232px] w-full block h-auto min-w-[232px] md:min-w-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Indent>
    </section>
  );
}
