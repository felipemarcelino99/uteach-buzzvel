"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const slides = [1, 2, 3];

  return (
    <div ref={sliderRef} className="keen-slider z-10 w-full">
      {slides.map((n) => (
        <div key={n} className="keen-slider__slide">
          <div className="flex items-center gap-20">
            <div className="text-default max-w-[528px] w-full">
              <p>
                Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
                mattis est velit in. Nibh in purus sit convallis phasellus ut.
                At vel erat ultricies commodo. Neque suspendisse a habitasse
                commodo.
              </p>
              <p className="mt-4">
                Marie Poirot,
                <br />
                <b>Bigapp</b>
              </p>
              <div className="flex justify-start mt-12 gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={` ${
                      currentSlide === idx
                        ? "w-8 h-2 bg-[#0F172A] rounded-[10px] "
                        : "w-2 h-2  bg-white rounded-full"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div
              role="img"
              aria-label="Carousel image"
              className="rounded-[20px] border-3 border-[#0F172A]"
            >
              <Image
                src="/images/carousel/woman.png"
                width={528}
                height={415}
                alt="Carousel image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
