import Image from "next/image";
import Section from "../Section";

export default function About() {
  const header = <h2>О компании</h2>;

  return (
    <Section header={header} slogan="">
      <div className="grid grid-cols-2 grid-rows-3 gap-5">
        <div className="row-span-1">
          <p className="text-halfblack text-base">
            Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей. По
            многочисленным запросам наших постоянных клиентов о комплексном уходе за интерьером и
            экстерьером их автомобилей, мы открыли свою собственную детейлинг-студию <br /> <br /> А
            еще наша детейлинг студия предоставляет услуги МАЛЯРНОГО-КУЗОВНОГО ЦЕХА! Локальная
            покраска за короткие сроки, покраска элементов в камере и выправления вмятин без
            покраски!
          </p>
        </div>
        <div className="rounded-3xl place-self-stretch row-span-2 bg-gray">
          {/* <Image src="" alt="" fill /> */}
        </div>
        <div className="rounded-3xl place-self-stretch row-span-2 bg-gray">
          {/* <Image src="" alt="" fill /> */}
        </div>
        <div className="place-self-stretch grid grid-cols-3 text-white gap-5">
          <div className="place-self-stretch rounded-3xl flex flex-col justify-between p-5 bg-darkgray">
            <h1 className="font-bold text-5xl mb-11">10</h1>
            <p>
              лет опыта <br /> работы
            </p>
          </div>
          <div className="place-self-stretch rounded-3xl flex flex-col justify-between p-5 bg-primary">
            <h1 className="font-bold text-5xl mb-11">24</h1>
            <p>профессионала в команде</p>
          </div>
          <div className="place-self-stretch rounded-3xl flex flex-col justify-between p-5 bg-darkgray">
            <h1 className="font-bold text-5xl mb-11">400+</h1>
            <p>профессионала в команде</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
