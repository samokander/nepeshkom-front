import Section from "../Section";
import { useState } from "react";
import MainSlide from "@/components/car/booking/MainSlide";
import SlideLine from "@/components/car/booking/SlideLine";
import CarInfo from "@/components/car/booking/CarInfo";
import Options from "@/components/car/booking/Options";
import AccordionFAQ from "@/components/car/booking/AccordionFAQ";
import AutoCard from "@/@types/AutoCard";

export type autoId = {
  autoId: string | string[] | undefined;
};

export default function Booking(props: {
  autoInfo: AutoCard;
}) {
  const [index, setIndex] = useState(0);
  const [displayedSlides, setDisplayedSlides] =
    useState<number>(4);
  const autoInfo = props.autoInfo;
  function handleLeftClick() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else if (index === 0 && autoInfo.Files.length) {
      setIndex(autoInfo.Files.length - 1);
    }
  }

  function handleRightClick() {
    if (autoInfo.Files.length) {
      if (index < autoInfo.Files.length - 1) {
        setIndex((prev) => prev + 1);
      } else if (index === autoInfo.Files.length - 1) {
        setIndex(0);
      }
    }
  }

  const [marka, model] =
    autoInfo.MarkaModelString.split(" ");

  const header = (
    <h1>
      <span className="text-white">
        {autoInfo.MarkaModelString}
      </span>
    </h1>
  );

  return (
    <Section header={header} slogan="">
      <div className="">
        <div className="grid grid-cols-6 grid-rows-8 gap-[20px] mb-16 gap">
          {/* MainSlide */}
          <MainSlide
            leftClick={() => handleLeftClick()}
            rightClick={() => handleRightClick()}
            _index={index}
            urls={autoInfo.Files}
          />
          {/* SlideLine */}
          <SlideLine
            urls={autoInfo.Files}
            _displayedSlides={displayedSlides}
            _setDisplayedSlides={setDisplayedSlides}
            _index={index}
          />
          {/* ОПЦИИ */}
          <Options price={autoInfo.DefaultPrice} autoId={autoInfo.ItemID} />

          {/* info */}
          <CarInfo
            features={{
              brand: { title: "Марка", data: marka },
              model: { title: "Модель", data: model },
              year_of_manufacture: {
                title: "Год выпуска",
                data: `${autoInfo.AutoYearSt}`,
              },
              color: {
                title: "Цвет",
                data: autoInfo.ModInfoColor,
              },
              body: {
                title: "Кузов",
                data: autoInfo.ModInfoBody,
              },
              drive: {
                title: "Привод",
                data: autoInfo.ModInfoPrivod,
              },
              engine_displacementd: {
                title: "Объем двигателя",
                data: autoInfo.ModInfoV3,
              },
              gearbox: {
                title: "КПП",
                data: "Автомат",
              },
              engine_power: {
                title: "Мощность двигателя",
                data: `${autoInfo.ModInfoPowerLSValue} л.с.`,
              },
              fuel: {
                title: "Топливо",
                data: autoInfo.ModInfoEngine,
              },
              steering_wheel: {
                title: "Руль",
                data: "Левый",
              },
              insurance: {
                title: "Страховка",
                data: "ОСАГО без ограничений",
              },
            }}
            equipment={{
              conditioner: {
                title: "Кондиционер",
                data: "Есть",
              },
              alarm_and_autorun: {
                title: "Сигнализация и автозапуск",
                data: "Автозапуск",
              },
              multimedia: {
                title: "Мультимедиа",
                data: "Bluetooth, AUX, Radio",
              },
              tires: {
                title: "Резина",
                data: "Зимняя (шипы)",
              },
              tinting: {
                title: "Тонировка задних стекол",
                data: "Есть",
              },
            }}
          />
          <AccordionFAQ header={""} />
        </div>
        <section className="flex flex-row justify-items-stretch"></section>
      </div>
    </Section>
  );
}
