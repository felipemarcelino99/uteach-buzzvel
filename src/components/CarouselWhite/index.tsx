"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export default function CarouselWhite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 4,
      spacing: 24,
    },
  });

  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <div ref={sliderRef} className="keen-slider z-10 w-full mt-20 ml-[14.5%]">
      {slides.map((n) => (
        <div key={n} className={`keen-slider__slide py-5 pl-5`}>
          <div className="flex flex-col gap-8 rounded-[20px] shadow-lg max-w-[412px] w-full p-8">
            <div>
              <p>
                Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
                non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
                Vitae quis cras vitae praesent morbi adipiscing purus
                consectetur mi.
              </p>
            </div>
            <div className="">
              <div role="img" aria-label="Carousel image">
                <Image
                  src="/images/carousel/user.png"
                  width={64}
                  height={64}
                  alt="Carousel image"
                />
              </div>
              <h5>Hellen Jummy</h5>
              <h6>Financial Counselor</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
