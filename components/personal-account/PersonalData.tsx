import Section from "@/components/Section";
import Options from "./Options";
import { PersonalDatatOptionProps } from "@/pages/personal-account";
import { useContext, useEffect, useState } from "react";
import { getClientsByPhoneNumber } from "../hooks/getFetchClientData";
import Client from "@/@types/Client";
import { PersonalDataContext } from "../Context";
import PersonalDataModal from "./PersonalDataModal";

export default function PersonalData() {
  const [client, setClient] = useState<Client>();
  const { isModalOpen, setIsModalOpen } = useContext(
    PersonalDataContext
  );

  useEffect(() => {
    const awaitGetClient = async () => {
      const res = await getClientsByPhoneNumber();

      if (res?.Clients?.length > 0) {
        setClient(res.Clients[0]);
      }
      console.log(res);
    };

    awaitGetClient();
  }, []);

  return (
    <Section header="">
      {isModalOpen && setIsModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-background bg-opacity-80">
            <PersonalDataModal
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="flex flex-row gap-[20px] h-full align-top w-full">
        {/* options */}
        <Options />
        {/* user-info */}
        <div className=" w-[75%] h-full bg-[#242424] rounded-[20px] border-[#5B5B5B] border-[1px] p-8">
          <h1 className=" text-white text-4xl font-bold mb-7">
            Личная информация
          </h1>
          <div className="grid grid-rows-2 grid-cols-6 gap-5 w-full mb-[50px]">
            <div className="col-span-2 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Фамилия*
              </span>
              <div className="bg-white rounded-[12px] h-[52px] flex justify-center items-center">
                {client?.Name?.LastName}
              </div>
            </div>
            <div className="col-span-2 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Имя*
              </span>
              <div className="bg-white rounded-[12px] h-[52px] flex justify-center items-center">
                {client?.Name?.FirstName}
              </div>
            </div>
            <div className="col-span-2 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Отчество*
              </span>
              <div className="bg-white rounded-[12px] h-[52px] flex justify-center items-center">
                {client?.Name?.Patronimic}
              </div>
            </div>
            <div className="col-span-3 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Телефон*
              </span>
              <div className="bg-white rounded-[12px] h-[52px] flex justify-center items-center">
                {client?.Phones?.[0]}
              </div>
            </div>
            <div className="col-span-3 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Дата рождения*
              </span>
              <div className="bg-white rounded-[12px] h-[52px] flex justify-center items-center">
                {client?.BirthDate}
              </div>
            </div>
          </div>
          <button
            className=" w-44 h-14 bg-primary text-white rounded-[14px] font-semibold"
            onClick={() =>
              setIsModalOpen ? setIsModalOpen(true) : 0
            }
          >
            Редактировать
          </button>
        </div>
      </div>
      <div className="">
        <div></div>
      </div>
    </Section>
  );
}
