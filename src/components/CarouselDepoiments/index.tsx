import React from "react";
import Indent from "../Common/Indent";
import Carousel from "../Carousel";

export default function CarouselDepoiments() {
  return (
    <section className="py-20 bg-[#FACC15] overflow-x-clip">
      <Indent>
        <div className="max-w-[1136px] w-full mx-auto after-carousel-detail">
          <Carousel />
        </div>
      </Indent>
    </section>
  );
}
