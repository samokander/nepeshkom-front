import Section from "../Section";

export default function Minimal() {
  const header = (
    <h1>
      <span className="text-primary">Минимальные</span> условия проката
    </h1>
  );
  return (
    <Section header={header} slogan="">
      <div className="flex justify-end items-start w-full h-[440px] bg-secondary rounded-2xl flex-col p-5">
        <h2 className="text-white font-bold text-5xl">Оформляем по двум документам</h2>
        <p className="text-halfblack font-medium text-base leading-6">
          Максимально прозрачны для арендатора – никаких сюрпризов в договоре
        </p>
        <div className="w-full flex-row flex gap-5 mt-5">
          <p className="block bg-primary rounded-full font-bold text-xl py-2 px-6 text-white w-min">
            Паспорт
          </p>
          <p className="block bg-white rounded-full font-bold text-xl py-2 px-6 text-black w-max">
            Водительское удостоверение
          </p>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-2 grid-rows-2 gap-5">
        <div className="bg-darkgray border-solid border border-halfblack p-7 col-span-2 h-[142px] rounded-3xl">
          <h3 className="font-bold text-2xl text-white mb-2">Минимальный срок аренды – 24 часа</h3>
          <p className="font-medium text-halfblack text-base">
            Вместе с «НЕПЕШКОМ» поездки по России становятся комфортными. Воспользуйтесь сервисом
            уже сегодня. Мир стоит того, чтобы путешествовать, особенно с любимыми!
          </p>
        </div>
        <div className="bg-darkgray border-solid border border-halfblack p-7 h-[142px] rounded-3xl">
          <h3 className="font-bold text-2xl text-white mb-2">Стаж от 2х лет</h3>
          <p className="font-medium text-halfblack text-base">
            Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
          </p>
        </div>
        <div className="bg-darkgray border-solid border border-halfblack p-7 h-[142px] rounded-3xl">
          <h3 className="font-bold text-2xl text-white mb-2">Без залога и лимита пробега</h3>
          <p className="font-medium text-halfblack text-base">
            Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
          </p>
        </div>
      </div>
    </Section>
  );
}
