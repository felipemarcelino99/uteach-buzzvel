import React from "react";
import Image from "next/image";
import CustomLink from "../Common/CustomLink";
import Indent from "../Common/Indent";
import CardsCarousel from "./CardsCarousel";
import { items } from "./constants";

export default function AboutApp() {
  return (
    <section className="py-12 md:py-20 bg-about-app">
      <Indent>
        <div className="flex items-center justify-between gap-8 flex-col md:gap-5 md:flex-row">
          <div className="max-w-full md:max-w-[40%] w-full">
            <h2 className="title title-sm">
              An <span className="before-underline-image">all-in-one</span> app
              that makes it easier
            </h2>

            <ul className="custom-list">
              <li className="list-item">
                Est et in pharetra magna adipiscing ornare aliquam.
              </li>

              <li className="list-item">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </li>

              <li className="list-item">
                Ullamcorper ornare in et egestas dolor orci.
              </li>
            </ul>

            <CustomLink href="/" label="Find more about the app" />
          </div>
          <div className="max-w-full md:max-w-[570px] lg:max-w-[650px] w-full flex flex-col">
            <div
              role="img"
              aria-label="Thumb video"
              className="shadow-2xl rounded-[20px] ml-auto max-w-[92%]"
            >
              <Image
                src="/images/video-thumb.webp"
                alt="Thumb video"
                width={600}
                height={392}
                loading="lazy"
              />
            </div>

            <div className="mt-[-30px] md:mt-[-70px] max-w-[336px] ml-auto   mr-0 md:ml-0 md:mr-auto md:max-w-[96%]">
              <CardsCarousel items={items} />
            </div>
          </div>
        </div>
      </Indent>
    </section>
  );
}
