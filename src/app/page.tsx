import Button from "@/components/Common/Button";
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
              <Title
                label="Teach students worldwide"
                semantic={true}
                type="lg"
              />
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
      <section className="py-20 bg-[url(/images/about_detail.png)] bg-[calc(63%)_center] bg-no-repeat">
        <Indent>
          <div className="flex items-center justify-between gap-5">
            <div className="max-w-[505px] w-full">
              <Title
                label="An all-in-one app that makes it easier"
                semantic={false}
              />
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
            <div>
              <div role="img" aria-label="Thumb video">
                <Image
                  src="/images/video-thumb.png"
                  alt="Thumb video"
                  width={600}
                  height={392}
                />
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </Indent>
      </section>
    </main>
  );
}
