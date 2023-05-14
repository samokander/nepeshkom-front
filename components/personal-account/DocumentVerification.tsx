import Section from "@/components/Section";
import Options from "./Options";

export default function DocumentVerification() {
  return (
    <Section header="">
      <div className="flex flex-row gap-[20px] h-full align-top w-full">
        {/* options */}
        <Options />
        {/* info */}
        <div className="w-[75%] h-full bg-[#242424] rounded-[20px] border-[#5B5B5B] border-[1px] p-8">
          <h1 className=" text-white text-4xl font-bold mb-7">
            Паспортные данные
          </h1>
          <div className="grid grid-rows-4 grid-cols-3 gap-5 w-full mb-[9%]">
            <div className=" col-start-1">
              <span className="text-[#919191] font-medium text-[12px]">
                Серия*
              </span>
              <div className="bg-white rounded-[12px] h-[52px]"></div>
            </div>
            <div className="col-start-2 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Номер*
              </span>
              <div className="bg-white rounded-[12px] h-[52px]"></div>
            </div>
            <div className="col-start-3 ">
              <span className="text-[#919191] font-medium text-[12px]">
                Дата выдачи*
              </span>
              <div className="bg-white rounded-[12px] h-[52px]"></div>
            </div>

            <div className="row-start-2 col-span-3">
              <span className="text-[#919191] font-medium text-[12px]">
                Кем выдан*
              </span>
              <div className="bg-white rounded-[12px] h-[52px]"></div>
            </div>
            <div className="row-start-3 col-span-3">
              <span className="text-[#919191] font-medium text-[12px]">
                Адрес постоянной регистрации*
              </span>
              <div className="bg-white rounded-[12px] h-[52px]"></div>
            </div>
            <div className="row-start-4 col-span-3">
              <span className="text-[#919191] font-medium text-[12px]">
                Адрес проживания (Заполнить если не
                совпадает с адресом постоянной регистрации)
              </span>
              <div className="bg-white rounded-[12px] h-[52px]"></div>
            </div>
          </div>
          {/* Водительское удостоверение */}

          <button className=" w-44 h-14 bg-primary text-white rounded-[14px] font-semibold">
            Редактировать
          </button>
        </div>
      </div>
    </Section>
  );
}
