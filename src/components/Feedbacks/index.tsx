import React from "react";
import Indent from "../Common/Indent";
import Title from "../Common/Title";
import Image from "next/image";
import CarouselFeedbacks from "./CarouselFeedbacks";
import { items } from "./constants";

export default function Feedbacks() {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <Indent>
        <div className="flex items-center justify-between gap-6">
          <div>
            <Title semantic={false} label="What everyone says" type="sm" />
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="nav"
              aria-label="Carousel nav previous"
              id="nav_previous"
            >
              <Image
                src="/images/icons/nav-left.png"
                alt="Previous"
                width={13}
                height={12}
              />
            </button>
            <button type="button" className="nav">
              <Image
                src="/images/icons/nav-right.png"
                alt="Next"
                width={13}
                height={12}
                aria-label="Carousel nav next"
                id="nav_next"
              />
            </button>
          </div>
        </div>
      </Indent>
      <CarouselFeedbacks items={items} />
    </section>
  );
}
