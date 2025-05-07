// Feedbacks.tsx
"use client";

import React, { useRef } from "react";
import Indent from "../Common/Indent";
import Title from "../Common/Title";
import Image from "next/image";
import CarouselFeedbacks, { CarouselHandle } from "./CarouselFeedbacks";
import { items } from "./constants";

export default function Feedbacks() {
  const carouselRef = useRef<CarouselHandle>(null);

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
              onClick={() => carouselRef.current?.prev()}
              aria-label="Carousel nav previous"
            >
              <Image
                src="/images/icons/nav-left.webp"
                alt="Previous"
                width={13}
                height={12}
                loading="lazy"
              />
            </button>
            <button
              type="button"
              className="nav"
              onClick={() => carouselRef.current?.next()}
              aria-label="Carousel nav next"
            >
              <Image
                src="/images/icons/nav-right.webp"
                alt="Next"
                width={13}
                height={12}
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </Indent>
      <CarouselFeedbacks ref={carouselRef} items={items} />
    </section>
  );
}
