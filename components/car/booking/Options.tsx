import Image from "next/image";
import clock from "../../../public/icons/clock.svg";
import { useState } from "react";
import CalendarRent from "@/components/CalendarRent";
import ModalWindow from "@/components/ModalWindow";
import { addRentRequest } from "@/components/hooks/useFetchAddRent";
import { format } from "date-fns";

export default function Options(props: { price: number, autoId: number }) {
  const [airportDelivery, setAirportDelivery] =
    useState(false);
  const [cityDelivery, setCityDelivery] = useState(false);
  const [startRentHour, setStartRentHour] = useState();
  const [endRentHour, setEndRentHour] = useState();
  const [startRentDate, setStartRentDate] = useState<Date>();
  const [endRentDate, setEndRentDate] = useState<Date>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  
  //const [price, setPrice]



  const handleRentAuto = async () => {
    console.log(typeof startRentDate)
    if (startRentDate && endRentDate) {
      const startDate = format(startRentDate, "dd.MM.yyyy") + ' ' + (startRentHour || '00:00') + ':00'
      const endDate = format(endRentDate, "dd.MM.yyyy")+ ' ' + (endRentHour || '00:00') + ':00'
      const res = await addRentRequest(props.autoId, startDate, endDate)

      if (typeof res?.LongParamValue === 'number') setErr(false)
      else setErr(true)
    } else {
      setErr(true)
    }
    
    setShowModal(true)
  }

  return (
    <section
      className="flex flex-col col-start-5 row-span-4 col-span-2 
							rounded-[16px] p-[20px] bg-darkgray w-[380px] 
							border-[1px] border-[#5B5B5B] h-auto"
    >
      <h3 className="mb-[10px] font-bold text-[30px] text-white">
        Период аренды
      </h3>
      <span className="mb-[20px] font-semibold text-[16px] text-white opacity-50">
        Кол-во дней: {Math.floor((endRentDate - startRentDate) / (1000 * 60 * 60 * 24))}
      </span>

      {/* ВЫБОР ДАТЫ */}

      <div
        className="flex flex-row items-center isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]"
      >
        <CalendarRent label="Дата начала аренды" onChange={setStartRentDate}/>
        <div className="w-max h-12 pl-5 flex flex-nowrap justify-around items-center bg-white border border-shadeofgrey rounded-tr-xl rounded-br-xl font-raleway">
          <input type="time" id="appt" value={startRentHour} onChange={(ev) => {setStartRentHour(ev.target.value)}} />
        </div>
        
        {/* <span className="text-sblack font-medium w-[164px] h-[24px] text-[16px]">
          Дата начала аренды
        </span>
        <button>
          <Image
            width={23}
            height={23}
            src="/icons/Calendar.svg"
            alt=""
          />
        </button> */}
{/* 
        <div className="w-[1px] h-[50px] bg-superdarkgray"></div>
        <div className="">
          <button
            className="relative block w-[84px] text-left bg-white border-none h-[24px] 
										font-raleway font-medium text-[16px] cursor-pointer 
									  "
          >
            {"12:00"}
            <Image
              className="absolute top-[50%] right-[5px] translate-y-[-50%] w-[10.5] h-[6.25]"
              width={10.5}
              height={6.25}
              src="../public/icons/arrowDown.svg"
              alt=""
            />
          </button>
        </div> */}
      </div>

      <div
        className="flex flex-row items-center isolate w-[340px] h-[52px] 
        bg-white border-[1px] rounded-[12px] mb-[20px]"
      >
        <CalendarRent label="Дата конца аренды" onChange={setEndRentDate} />
        <div className="w-max h-12 pl-5 flex flex-nowrap justify-around items-center bg-white border border-shadeofgrey rounded-tr-xl rounded-br-xl font-raleway">
          <input type="time" id="appt" value={endRentHour} onChange={(ev) => {setEndRentHour(ev.target.value)}} />
        </div>
        {/* <span className="text-sblack font-medium w-[164px] h-[24px] text-[16px]">
          Дата конца аренды
        </span>
        <button>
          <Image
            width={23}
            height={23}
            src="/icons/Calendar.svg"
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
            {"14:00"}
            <Image
              className="absolute top-[50%] right-[5px] translate-y-[-50%]"
              width={10.5}
              height={6.25}
              src="../public/icons/arrowDown.svg"
              alt=""
            />
          </button>
        </div> */}
      </div>
      {/* ПЕРЕКЛЮЧАТЕЛЬ 1 */}
      <div className="flex flex-row items-center mb-[21px]">
        <label className="switch">
          <input
            type="checkbox"
            value={airportDelivery}
            onChange={() => {
              setAirportDelivery((prev) => !prev);
            }}
          ></input>
          <span className="slider"></span>
        </label>
        <p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">
          Доставка до аэропорта - 1500 ₽
        </p>
      </div>
      {/* ПЕРЕКЛЮЧАТЕЛЬ 2 */}
      <div className="flex flex-row items-center mb-[16%]">
        <label className="switch">
          <input
            type="checkbox"
            value={cityDelivery}
            onChange={() =>
              setCityDelivery((prev) => !prev)
            }
          ></input>
          <span className="slider"></span>
        </label>
        <p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">
          Доставка по городу - 750 ₽
        </p>
      </div>
      {/* extra */}
      {cityDelivery || airportDelivery ? (
        <div
          className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]"
        ></div>
      ) : (
        <></>
      )}
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
        {props.price} ₽/сут.
      </h1>
      <button className="w-[340px] h-[52px] min-h-[52px] bg-primary rounded-[14px] font-bold text-[16px] text-white" onClick={handleRentAuto}>
        Забронировать
      </button>

      <ModalWindow showModal={showModal} setShowModal={setShowModal} err={err}  />
    </section>
  );
}
