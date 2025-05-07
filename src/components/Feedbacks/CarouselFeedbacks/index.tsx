"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

type ItemType = {
  id: number;
  name: string;
  description: string;
  role: string;
  image: string;
};

type CarouselType = {
  items: ItemType[];
};

export default function CarouselFeedbacks({ items }: CarouselType) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 0)": {
        slides: {
          perView: 1,
          spacing: 24,
        },
      },
      "(min-width: 475)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 24,
        },
      },
    },
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider z-10 w-full mt-20 ml-[14.5%] overflow-hidden"
    >
      {items.map((item) => (
        <div key={item.id} className={`keen-slider__slide py-5 pl-5`}>
          <div className="flex flex-col gap-8 rounded-[20px] shadow-lg max-w-[412px] w-full p-8">
            <div>
              <p className="text-lg leading-[1.6] mb-4 text-black">
                {item.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div role="img" aria-label="Carousel image">
                <Image
                  src={`/images/carousel/${item.image}`}
                  width={64}
                  height={64}
                  alt="Carousel image"
                />
              </div>
              <div>
                <h5 className="text-lg leading-[1.6] text-black">
                  {item.name}
                </h5>
                <h6 className="text-base text-dark-gray">{item.role}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
