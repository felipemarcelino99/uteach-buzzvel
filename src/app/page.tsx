import StudentsWorldwide from "@/components/StudentsWorldwide";
import AboutApp from "@/components/AboutApp";
import Meet from "@/components/Meet";
import Impact from "@/components/Impact";
import Feedbacks from "@/components/Feedbacks";
import Features from "@/components/Features";
import Join from "@/components/Join";
import RequestDemo from "@/components/RequestDemo";
import CarouselDepoiments from "@/components/Common/CarouselDepoiments";

export default function Home() {
  return (
    <main className="">
      <StudentsWorldwide />
      <AboutApp />
      <CarouselDepoiments />
      <Meet />
      <Impact />
      <Feedbacks />
      <Features />
      <Join />
      <RequestDemo />
    </main>
  );
}
