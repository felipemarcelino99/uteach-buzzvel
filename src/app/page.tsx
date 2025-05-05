import Carousel from "@/components/Carousel";
import CarouselWhite from "@/components/CarouselWhite";
import Button from "@/components/Common/Button";
import Card from "@/components/Common/Card";
import Indent from "@/components/Common/Indent";
import Link from "@/components/Common/Link";
import Title from "@/components/Common/Title";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="py-20">
        <Indent>
          <div className="flex items-center justify-between gap-8">
            <div className="max-w-[575px] w-full">
              <h1 className="title title-lg">
                <span className="before-underline-image">Teach</span> students
                worldwide
              </h1>
              <p className="text-default my-8">
                Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
                massa tincidunt viverra lectus pulvinar. Nunc ipsum est
                pellentesque turpis ultricies.
              </p>
              <div className="flex items-center justify-start gap-8">
                <Button
                  label="Sign Up Now"
                  textColor="#FFF"
                  backgroundColor="#EA580C"
                  borderColor="#EA580C"
                  type="lg"
                />
                <a href="javascript:;" className="flex items-center gap-4">
                  <Image
                    src="/images/icons/play.png"
                    alt="Ícone play"
                    width={20}
                    height={20}
                  />
                  <span className="block text-2xl text-[#2563EB] font-medium">
                    View Demo
                  </span>
                </a>
              </div>
              <div className="flex items-center justify-start gap-12 w-full max-w-full mt-20">
                <div>
                  <p className="text-base text-[#475569] leading-[1.4]">
                    Trusted by
                    <br />
                    leading companies
                  </p>
                </div>
                <Image
                  src="/images/icons/banner_top_1.png"
                  alt="Ícone 1"
                  width={25}
                  height={32}
                />
                <Image
                  src="/images/icons/banner_top_2.png"
                  alt="Ícone 1"
                  width={29}
                  height={32}
                />
                <Image
                  src="/images/icons/banner_top_3.png"
                  alt="Ícone 1"
                  width={32}
                  height={32}
                />
                <Image
                  src="/images/icons/banner_top_4.png"
                  alt="Ícone 1"
                  width={27}
                  height={32}
                />
                <Image
                  src="/images/icons/banner_top_5.png"
                  alt="Ícone 1"
                  width={33}
                  height={32}
                />
              </div>
            </div>
            <div
              role="img"
              aria-label="Imagem banner"
              className="max-w-[625px] w-full"
            >
              <Image
                src="/images/image_banner_top.png"
                alt="Imagem banner"
                width={625}
                height={545}
              />
            </div>
          </div>
        </Indent>
      </section>
      <section className="py-20 bg-[url(/images/about_detail.png)] bg-[calc(64%)_center] bg-no-repeat">
        <Indent>
          <div className="flex items-center justify-between gap-5">
            <div className="max-w-[505px] w-full">
              <h2 className="title title-sm">
                An <span className="before-underline-image">all-in-one</span>{" "}
                app that makes it easier
              </h2>
              <ul className="list-image-[url('/images/list-bullet.png')] ps-5 mb-12 mt-8">
                <li className="list-item">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </li>
                <li className="list-item">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </li>
                <li className="list-item">
                  Ullamcorper ornare in et egestas dolor orci.
                </li>
              </ul>
              <Link label="Find more about the app" />
            </div>
            <div className="max-w-[650px] w-full flex flex-col">
              <div
                role="img"
                aria-label="Thumb video"
                className="shadow-2xl rounded-[20px] ml-auto"
              >
                <Image
                  src="/images/video-thumb.png"
                  alt="Thumb video"
                  width={600}
                  height={392}
                />
              </div>
              <div className="max-w-[633px] flex items-stretch gap-4 mr-auto mt-[-70px]">
                <Card
                  title="The map of mathematics"
                  description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  type="featured"
                />
                <Card
                  title="The map of mathematics"
                  description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  type="popular"
                />
                <Card
                  title="The map of mathematics"
                  description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  type="new"
                />
              </div>
            </div>
          </div>
        </Indent>
      </section>
      <section className="py-20 bg-[#FACC15] after-carousel-detail">
        <Indent>
          <div className="max-w-[1136px] w-full mx-auto">
            <Carousel />
          </div>
        </Indent>
        <Image
          src="/images/carousel/detail-carousel-2.png"
          alt="Detail carousel"
          width={48}
          height={48}
          className="absolute top-[18px] right-[24%]"
        />
      </section>
      <section className="py-20">
        <Indent>
          <div className="flex items-center justify-center gap-11">
            <Image
              src="/images/meet.png"
              alt="Image meet"
              width={646}
              height={661}
            />
            <div>
              <h2 className="title title-sm">
                Meet <span className="before-plane-image">international</span>
                students & teachers
              </h2>
              <p className="text-default my-8">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
                senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
                facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
                urna, faucibus aenean lorem faucibus integer.
              </p>
              <Link label="Explore teachers and students" />
            </div>
          </div>
        </Indent>
      </section>
      <section className="py-20 bg-[#0F172A]">
        <Indent>
          <div className="flex items-stretch justify-between gap-4">
            <div className="flex flex-col justify-between items-center h-full">
              <Image
                src="/images/icons/hearth.png"
                width={64}
                height={64}
                alt="Icon hearth"
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
                src="/images/icons/diamond.png"
                width={64}
                height={64}
                alt="Icon diamond"
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
                src="/images/icons/student-hat.png"
                width={64}
                height={64}
                alt="Icon student hat"
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
      <section className="py-20">
        <Indent>
          <div className="flex items-center justify-between gap-6">
            <div>
              <Title semantic={false} label="What everyone says" type="sm" />
            </div>
            <div className="flex items-center gap-6">
              <button type="button" className="nav">
                <Image
                  src="/images/icons/nav-left.png"
                  alt="Previous"
                  width={13}
                  height={12}
                />
              </button>
              <button type="button" className="nav">
                <Image
                  src="/images/icons/nav-right.png"
                  alt="Next"
                  width={13}
                  height={12}
                />
              </button>
            </div>
          </div>
        </Indent>
        <CarouselWhite />
      </section>
      <section className="">
        <Indent>
          <div className="flex items-center justify-center gap-11">
            <div className="max-w-[600px] w-full">
              <h2 className="title title-sm">
                All the cool
                <span className="before-plane-image">features</span>
              </h2>
              <p className="text-default my-8">
                Mauris consequat, cursus pharetra et, habitasse rhoncus quis
                odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
                pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
                ullamcorper non viverra a, neque orci.
              </p>
              <Link label="View all the features" />
            </div>
            <div className="max-w-[560px] w-full pl-6 flex flex-col gap-6 bg-[url(/images/bg-features.png)] bg-[left_center] bg-no-repeat pt-20 pb-32">
              <div className="flex items-end gap-6">
                <Card
                  type="popular"
                  title="Design for how people think"
                  description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                />
                <Image
                  src="/images/img-features-1.png?v=123"
                  alt="Image meet"
                  width={226}
                  height={158}
                />
              </div>
              <div className="flex gap-6">
                <Image
                  src="/images/img-features-2.png?v=123"
                  alt="Image meet"
                  width={304}
                  height={179}
                />
                <Image
                  src="/images/img-features-3.png?v=123"
                  alt="Image meet"
                  width={232}
                  height={179}
                />
              </div>
            </div>
          </div>
        </Indent>
      </section>
      <section className="bg-[url(/images/bg-world.png)] bg-[center_center] bg-cover bg-no-repeat">
        <Indent>
          <div className="flex flex-col items-center py-64">
            <Title label="Join a world of learning" align="center" />
            <p className="text-default my-8 text-center">
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              <br /> Risus elit et fringilla habitant ut facilisi.
            </p>
            <Button
              label="Sign Up Now"
              textColor="#FFF"
              backgroundColor="#EA580C"
              borderColor="#EA580C"
            />
          </div>
        </Indent>
      </section>
    </main>
  );
}
