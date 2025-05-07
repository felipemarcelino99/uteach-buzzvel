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
          <div className="flex items-center gap-20 flex-col md:flex-row">
            <div className="text-default max-w-full md:max-w-[400px] xl:max-w-[528px] w-full">
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
                        ? "w-8 h-2 bg-dark rounded-[10px] "
                        : "w-2 h-2  bg-white rounded-full"
                    }`}
                    aria-label={`Carousel Dot ${idx}`}
                    id={`dot_${idx}`}
                  />
                ))}
              </div>
            </div>
            <div
              role="img"
              aria-label="Carousel image"
              className="rounded-[20px] border-3 border-dark z-10 w-full h-auto max-w-[420px] lg:max-w-[528px"
            >
              <Image
                src="/images/carousel/woman.webp"
                width={528}
                height={415}
                alt="Carousel image"
                className="block w-full h-auto max-w-[420px] lg:max-w-[528px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
