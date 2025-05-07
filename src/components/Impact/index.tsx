import Image from "next/image";
import Indent from "../Common/Indent";

export default function Impact() {
  return (
    <section className="py-12 md:py-20 bg-[#0F172A]">
      <Indent>
        <div className="flex gap-12 flex-col items-center justify-center md:items-stretch md:justify-evenly md:gap-4 md:flex-row">
          <div className="flex flex-col justify-between items-center h-full">
            <Image
              src="/images/icons/hearth.webp"
              width={64}
              height={64}
              alt="Icon hearth"
              loading="lazy"
            />
            <h4 className="title title-lg text-center text-[#FACC15] my-4">
              195
            </h4>
            <p className="text-2xl leading-[1.6] text-center text-[#FACC15]">
              user countries
            </p>
          </div>
          <div className="flex flex-col justify-between items-center h-full">
            <Image
              src="/images/icons/diamond.webp"
              width={64}
              height={64}
              alt="Icon diamond"
              loading="lazy"
            />
            <h4 className="title title-lg text-center text-[#FACC15] my-4">
              1M
            </h4>
            <p className="text-2xl leading-[1.6] text-center text-[#FACC15]">
              valued teachers
            </p>
          </div>
          <div className="flex flex-col justify-between items-center h-full">
            <Image
              src="/images/icons/student-hat.webp"
              width={64}
              height={64}
              alt="Icon student hat"
              loading="lazy"
            />
            <h4 className="title title-lg text-center text-[#FACC15] my-4">
              17M
            </h4>
            <p className="text-2xl leading-[1.6] text-center text-[#FACC15]">
              happy students
            </p>
          </div>
        </div>
      </Indent>
    </section>
  );
}
