import Form from "../Common/Form";
import Indent from "../Common/Indent";
import Title from "../Common/Title";

export default function RequestDemo() {
  return (
    <section className="py-12 md:py-22 bg-orange">
      <Indent>
        <div>
          <Title
            label="Ready for your next project?"
            color="#FFF"
            align="center"
          />
          <p className="font-light text-lg md:text-[32px] text-white my-8 text-center">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>
          <div className="flex items-center justify-center">
            <Form />
          </div>
        </div>
      </Indent>
    </section>
  );
}
