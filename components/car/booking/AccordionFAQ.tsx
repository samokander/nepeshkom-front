import { useState, PropsWithChildren } from "react";

function Accordion(
  props: accordionProps & PropsWithChildren
) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full rounded-3xl bg-darkgray flex flex-col border border-halfblack cursor-pointer select-none mb-5">
      <div
        className="w-full h-[80px] rounded-3xl bg-darkgray text-white font-semibold  text-3xl p-5 align-middle"
        onClick={() => setVisible(!visible)}
      >
        <div className="flex flex-row justify-between">
          <span className=" font-medium text-xl">
            {props.header}
          </span>
          <img src="/icons/whiteArrowDown.svg" />
        </div>
      </div>
      {visible && (
        <div className="block mx-8 mb-8 text-halfblack">
          {props.faq?.map((el, id) => {
            return (
              <div
                key={id}
                className="flex flex-row justify-start mb-4"
              >
                <img src={el.title} className=" mr-3" />
                <span className=" font-medium text-base">
                  {el.data}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function AccordionFAQ(
  props: accordionProps & PropsWithChildren
) {
  const [visible, setVisible] = useState(false);
  return (
    <section className="row-start-5 col-start-5 col-span-2 mt-10">
      <Accordion
        header="Условия"
        faq={[
          {
            title: "/icons/booking/document.svg",
            data: "Паспорт и водительское",
          },
          {
            title: "/icons/booking/document.svg",
            data: "Стаж от 2-х лет",
          },
          {
            title: "/icons/booking/nocam.svg",
            data: "Без залога",
          },
          {
            title: "/icons/booking/speedlimit.svg",
            data: "Без лимита пробега",
          },
          {
            title: "/icons/booking/clock.svg",
            data: "Минимальный срок аренды 24 часа",
          },
        ]}
      />
      <Accordion
        header="Как далеко можно уезжать?"
        faq={[
          {
            title: "/icons/booking/point.svg",
            data: "До 1000 км без согласования",
          },
          {
            title: "/icons/booking/point.svg",
            data: "Более 1000 км по согласованию",
          },
          {
            title: "/icons/booking/point.svg",
            data: "Нельзя выезжать за пределы РФ",
          },
        ]}
      />
      <Accordion
        header="Время для аренды и сдачи"
        faq={[
          {
            title: "/icons/booking/timelimit.svg",
            data: "Сдача и выдача автомобилей ежедневно с 9:00 до 18:00",
          },
          {
            title: "/icons/booking/timelimit.svg",
            data: "Сутки аренды рассчитываются начиная со времени получения автомобиля",
          },
          {
            title: "/icons/booking/timelimit.svg",
            data: "Сдача автомобиля вне рабочего времени оплачивается дополнительно - 750 ₽",
          },
          {
            title: "/icons/booking/auto.svg",
            data: "Авто выдаётся чистым, при сдаче грязного авто оплачивается мойка - 600 ₽",
          },
          {
            title: "/icons/booking/fuel.svg",
            data: "Уровень топлива при сдаче авто должен быть не меньше, чем при выдаче авто клиенту",
          },
        ]}
      />
    </section>
  );
}
