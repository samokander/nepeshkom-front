import Image from "next/image";
import Button from "./Button";
import Section from "./Section";

export default function Rent() {
  const header = (
    <div className="grid grid-cols-11 grid-rows-1 gap-5 mb-12">
      <div className="col-span-8">
        <h1>
          Аренда автомобилей <br /> в Томске
        </h1>
      </div>
      <div className="col-span-3">
        <h2 className="mb-7 text-halfblack font-medium text-xl">
          Комплексные аутсорсинговые услуги для частных и государственных предприятий по всей России
        </h2>
        <Button primary>Выбрать авто</Button>
      </div>
    </div>
  );
  return (
    <Section header={header} slogan={""}>
      <div className="w-full h-[500px] bg-secondary rounded-3xl">
        <Image src="" alt="" fill />
      </div>
    </Section>
  );
}
