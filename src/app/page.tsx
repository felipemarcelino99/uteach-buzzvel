import ButtonLink from "@/components/Common/ButtonLink";
import Card from "@/components/Common/Card";
import Form from "@/components/Common/Form";
import Indent from "@/components/Common/Indent";
import CustomLink from "@/components/Common/CustomLink";
import Title from "@/components/Common/Title";
import StudentsWorldwide from "@/components/StudentsWorldwide";
import Image from "next/image";
import AboutApp from "@/components/AboutApp";
import { CardStyle } from "@/components/Common/Card/cardEnums";
import Meet from "@/components/Meet";
import Impact from "@/components/Impact";
import Feedbacks from "@/components/Feedbacks";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="">
      <StudentsWorldwide />
      <AboutApp />
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
      <Meet />
      <Impact />
      <Feedbacks />

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
              <CustomLink href="/" label="View all the features" />
            </div>
            <div className="max-w-[560px] w-full pl-6 flex flex-col gap-6 bg-[url(/images/bg-features.png)] bg-[left_center] bg-no-repeat pt-20 pb-32">
              <div className="flex items-end gap-6">
                <Card
                  type={CardStyle.Featured}
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
      <section className="w-full bg-[#FACC15] bg-world">
        <Indent>
          <div className="flex flex-col items-center py-64">
            <Title label="Join a world of learning" align="center" />
            <p className="text-default my-8 text-center">
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              <br /> Risus elit et fringilla habitant ut facilisi.
            </p>
            <ButtonLink label="Sign Up Now" href="/" />
          </div>
        </Indent>
      </section>
      <section className="py-22 bg-[#EA580C]">
        <Indent>
          <div>
            <Title
              label="Ready for your next project?"
              color="#FFF"
              align="center"
            />
            <p className="font-light text-[32px] text-white my-8 text-center">
              Sit elit feugiat turpis sed integer integer accumsan turpis.
            </p>
            <div className="flex items-center justify-center">
              <Form />
            </div>
          </div>
        </Indent>
      </section>
    </main>
  );
}
