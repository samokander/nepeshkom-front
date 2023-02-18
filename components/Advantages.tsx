import Image from "next/image";
import Section from "./Section";

export default function Advantages() {
  const header = (
    <h1>
      Наши <a className="text-primary">преимущества</a>
    </h1>
  );
  const slogan = "Качественный сервис - залог постоянного сотрудничества";
  return (
    <Section header={header} slogan={slogan}>
      <div className="grid grid-cols-11 grid-row-2 gap-5 w-full h-96">
        <div className="bg-secondary rounded-3xl col-span-3"></div>
        <div className="bg-secondary rounded-3xl col-span-2"></div>
        <div className="bg-secondary rounded-3xl col-span-3"></div>
        <div className="bg-secondary rounded-3xl col-span-3 row-span-2"></div>
        <div className="bg-secondary rounded-3xl col-span-4"></div>
        <div className="bg-secondary rounded-3xl col-span-4"></div>
      </div>
    </Section>
  );
}
