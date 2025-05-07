import Image from "next/image";
import Indent from "../Common/Indent";
import CustomLink from "../Common/CustomLink";

export default function Meet() {
  return (
    <section className="py-12 md:py-20">
      <Indent>
        <div className="flex items-center justify-center gap-11 flex-col-reverse md:flex-row">
          <Image
            src="/images/meet.webp"
            alt="Image meet"
            width={646}
            height={661}
          />
          <div className="max-w-full md:max-w-[600px]">
            <h2 className="title title-sm">
              Meet <span className="before-plane-image">international</span>{" "}
              students & teachers
            </h2>
            <p className="text-default my-6 md:my-8">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </p>
            <CustomLink href="/" label="Explore teachers and students" />
          </div>
        </div>
      </Indent>
    </section>
  );
}
