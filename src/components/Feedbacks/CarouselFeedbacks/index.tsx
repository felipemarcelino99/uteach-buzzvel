"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { forwardRef, useImperativeHandle } from "react";

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

export interface CarouselHandle {
  next: () => void;
  prev: () => void;
}

// eslint-disable-next-line react/display-name
const CarouselFeedbacks = forwardRef<CarouselHandle, CarouselType>(
  ({ items }, ref) => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      loop: false,
      slides: {
        perView: 1,
        spacing: 24,
      },
      breakpoints: {
        "(min-width: 475px)": { slides: { perView: 2, spacing: 24 } },
        "(min-width: 768px)": { slides: { perView: 3, spacing: 24 } },
        "(min-width: 1024px)": { slides: { perView: 4, spacing: 24 } },
      },
    });

    useImperativeHandle(ref, () => ({
      next: () => instanceRef.current?.next(),
      prev: () => instanceRef.current?.prev(),
    }));

    return (
      <div
        ref={sliderRef}
        className="keen-slider z-10 w-full mt-20 ml-[14.5%] overflow-hidden"
      >
        {items.map((item) => (
          <div key={item.id} className="keen-slider__slide py-5 pl-5">
            <div className="flex flex-col gap-8 rounded-[20px] shadow-lg max-w-[412px] w-full p-8">
              <p className="text-lg leading-[1.6] mb-4 text-black">
                {item.description}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={`/images/carousel/${item.image}`}
                  width={64}
                  height={64}
                  alt="Carousel image"
                />
                <div>
                  <h5 className="text-lg text-black">{item.name}</h5>
                  <h6 className="text-base text-[#475569]">{item.role}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="keen-slider__slide py-5 pl-5"></div>
      </div>
    );
  }
);

export default CarouselFeedbacks;
