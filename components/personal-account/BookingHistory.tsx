import Section from "@/components/Section";
import Options from "./Options";
import AutoCard from "@/@types/AutoCard";
import useFetchRequests from "../hooks/useFetchRequests";
import { useState } from "react";

function BookedCarCard() {
  return (
    <div className=" h-full bg-[#242424] rounded-[20px] border-[#5B5B5B] border-[1px] p-8">
      <div className="flex flex-row gap-x-5 mb-5">
        <div className="w-[248px] h-[160px] bg-white rounded-[16px]"></div>
        <div className="w-full flex flex-col">
          {/*  */}
          <div className="flex flex-row justify-between text-white mb-2">
            <h1 className="  text-4xl font-bold mb-3 w-full">
              Kia K5
            </h1>
            <span className="opacity-40 font-semibold text-[24px]">
              #0001
            </span>
          </div>
          {/*  */}
          <div className="flex flex-row w-auto gap-x-[10px] text-halfblack items-center tracking-[1px] mb-[5%]">
            <span className="font-normal text-[16px]">
              2021 год
            </span>
            <div className="rounded-full w-2 h-2 bg-secondary" />
            <span className="font-normal text-[16px]">
              АКПП
            </span>
            <div className="rounded-full w-2 h-2 bg-secondary" />
            <span className="font-normal text-[16px]">
              180 л.с.
            </span>
          </div>
          {/*  */}
          <div className=" text-white flex flex-row gap-5">
            <div className="flex flex-col">
              <span className="opacity-40">
                Дата начала аренды:
              </span>
              <span>20.20.2000 - 12:00</span>
            </div>
            <div className="flex flex-col">
              <span className="opacity-40">
                Дата начала аренды:
              </span>
              <span>20.20.2000 - 12:00</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="h-[100px] bg-background rounded-[12px] border-border_lightgray border p-4 flex flex-row">
        <div className="text-white w-[35%]">
          <span className="opacity-40 font-medium text-[16px]">
            Итоговая стоимость:
          </span>
          <h2 className=" font-bold text-[30px]">
            11 680 ₽
          </h2>
        </div>
        {/*  */}
        <div className="text-white w-[65%] items-stretch flex flex-col gap-5">
          <div>
            <span className="opacity-40 font-medium text-[16px] mr-[15%]">
              Доп. услуга
            </span>
            <span className="font-bold text-[16px]">
              Аренда с водителем - 1 200 ₽
            </span>
          </div>
          <div>
            <span className="opacity-40 font-medium text-[16px] mr-[15%]">
              Доп. услуга
            </span>
            <span className="font-bold text-[16px]">
              Аренда с водителем - 1 200 ₽
            </span>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default function BookingHistory() {
  const clientId = localStorage.getItem(
    "nepeshkom_cliendId"
  );
  const [loaded, setLoaded] = useState(false);
  const [requests, setRequests] = useFetchRequests(
    clientId,
    setLoaded
  );
  return (
    <Section header="">
      <div className="flex flex-row gap-[20px] h-full align-top w-full">
        {/* options */}

        <Options />
        <div className="w-[75%]">
          <h1 className=" text-white text-4xl font-bold mb-7 w-full">
            Все заявки {""}
            <span className="opacity-40">
              ({requests.length})
            </span>
          </h1>
          <div className="grid auto-rows-max gap-7 ">
            {requests.map((request, index) => {
              return <div key={index}></div>;
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
