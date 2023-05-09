import Image from "next/image";
import clock from "../../../public/icons/clock.svg";

export default function Options() {
  return (
    <section
      className="flex flex-col content-between col-start-5 row-span-4 col-span-2 
							rounded-[16px] items-stretch p-[20px] bg-darkgray w-[380px] h-min
							border-[1px] border-[#5B5B5B]"
    >
      <h3 className="mb-[10px] font-bold text-[30px] text-white">
        Период аренды
      </h3>
      <span className="mb-[20px] font-semibold text-[16px] text-white opacity-50">
        Кол-во дней: 2
      </span>

      {/* ВЫБОР ДАТЫ */}

      <div
        className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]"
      >
        <span className="text-sblack font-medium w-[164px] h-[24px] text-[16px]">
          Дата начала аренды
        </span>
        <button>
          <Image
            width={23}
            height={23}
            src="/icons/calendar.svg"
            alt=""
          />
        </button>

        <div className="w-[1px] h-[50px] bg-superdarkgray"></div>
        <div className="">
          <button
            className="relative block w-[84px] text-left bg-white border-none h-[24px] 
										font-raleway font-medium text-[16px] cursor-pointer 
									  "
          >
            {"sss"}
            <Image
              className="absolute top-[50%] right-[5px] translate-y-[-50%] w-[10.5] h-[6.25]"
              width={10.5}
              height={6.25}
              src="../public/icons/arrowDown.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <div
        className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]"
      >
        <span className="text-sblack font-medium w-[164px] h-[24px] text-[16px]">
          Дата конца аренды
        </span>
        <button>
          <Image
            width={23}
            height={23}
            src="icons/calendar.svg"
            alt=""
          />
        </button>

        <div className="w-[1px] h-[50px] bg-superdarkgray"></div>

        <div className="">
          <button
            className="relative block w-[84px] text-left bg-white border-none h-[24px] 
										font-raleway font-medium text-[16px] cursor-pointer 
									  "
          >
            {"sss"}
            <Image
              className="absolute top-[50%] right-[5px] translate-y-[-50%]"
              width={10.5}
              height={6.25}
              src="../public/icons/arrowDown.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      {/* ПЕРЕКЛЮЧАТЕЛЬ 1 */}
      <div className="flex flex-row items-center mb-[21px]">
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
        <p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">
          Доставка до аэропорта - 1500 ₽
        </p>
      </div>
      {/* ПЕРЕКЛЮЧАТЕЛЬ 2 */}
      <div className="flex flex-row items-center mb-[90px]">
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
        <p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">
          Доставка по городу - 750 ₽
        </p>
      </div>
      {/* FOOTER */}
      <div className="flex flex-row items-center mb-[12.5px]">
        <span className="flex flex-row items-center font-semibold text-[16px] text-white opacity-50">
          <Image
            className="mr-[14px]"
            width={16}
            height={20}
            src={clock}
            alt=""
          />
          Оформление за 5 минут
        </span>
      </div>
      <h1 className="font-bold text-[40px] tracking-[0.01em] text-white mb-[20px] p-0">
        4 490 ₽/сут.
      </h1>
      <button className="w-[340px] h-[52px] min-h-[52px] bg-primary rounded-[14px] font-bold text-[16px] text-white">
        Забронировать
      </button>
    </section>
  );
}
