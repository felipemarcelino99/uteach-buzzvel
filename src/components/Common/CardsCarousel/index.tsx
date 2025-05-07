"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Card from "@/components/Common/Card";
import { CardStyle } from "@/components/Common/Card/cardEnums";

type ItemType = {
  id: number;
  title: string;
  description: string;
  type: CardStyle;
};

type CarouselType = {
  items: ItemType[];
};

export default function CardsCarousel({ items }: CarouselType) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 0)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider z-10 w-full items-stretch">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          type={item.type}
          className="!w-52 !max-w-52"
        />
      ))}
    </div>
  );
}
