import Section from "../Section";

export default function Time() {
  const header = (
    <h2>
      <span className="text-primary">Время для аренды</span> и сдачи авто
    </h2>
  );
  return (
    <Section header={header} slogan="">
      <div className="flex flex-row flex-wrap gap-5 font-bold text-2xl leading-7">
        <div className="bg-white p-7 text-black rounded-3xl h-36 w-[330px]">
          <p>
            Сдача автомобилей ежедневно <br /> с <time className="text-primary">9:00</time> до{" "}
            <time className="text-primary">18:00</time>
          </p>
        </div>
        <div className="col-span-3 bg-white p-7 text-black rounded-3xl h-36 w-[330px]">
          <p>
            Доставка авто: <br /> по городу - <span className="text-primary">750 ₽</span> <br />
            до аэропорта - <span className="text-primary">1500 ₽</span>
          </p>
        </div>
        <div className="bg-white p-7 text-black rounded-3xl h-36 w-[480px]">
          <p>
            Сдача автомобиля вне рабочего времени оплачивается дополнительно -
            <span className="text-primary">750 ₽</span>
          </p>
        </div>
        <div className="bg-white p-8 text-black rounded-3xl h-44 w-[380px]">
          <p>
            Авто выдаётся чистым, при сдаче грязного авто оплачивается мойка - <br />
            <span className="text-primary">750 ₽</span>
          </p>
        </div>
        <div className="bg-white p-8 text-black rounded-3xl h-44 w-[380px]">
          <p>Сутки аренды рассчитываются начиная со времени получения автомобиля</p>
        </div>
        <div className="bg-white p-8 text-black rounded-3xl h-44 w-[380px]">
          <p>Уровень топлива при сдаче авто должен быть не меньше, чем при выдаче авто клиенту</p>
        </div>
      </div>
    </Section>
  );
}
