import Button from "@/components/Button";
import { useState } from "react";

export default function CarInfo({
  features,
  equipment,
}: carInfoProps) {
  const featuresKeys = Object.keys(features);
  const equipmentKeys = Object.keys(equipment);

  const [optionSelect, setOptionSelect] = useState(false);

  let parsedFeatures = featuresKeys.map((key, id) => {
    return (
      <div className="" key={id}>
        <h2 className=" font-normal text-2xl text-white mb-3">
          {features[key].title}
        </h2>
        <span className=" font-normal text-[20px] leading-6 text-white opacity-40">
          {features[key].data}
        </span>
      </div>
    );
  });

  let parsedEquipments = equipmentKeys.map((key, id) => {
    return (
      <div className="" key={id}>
        <h2 className="font-medium text-2xl text-white mb-3">
          {equipment[key].title}
        </h2>
        <span className=" font-medium text-[20px] leading-6 text-white opacity-40">
          {equipment[key].data}
        </span>
      </div>
    );
  });

  let _features = (
    <>
      <h2 className=" font-bold text-[30px] leading-[35px] text-white mb-8">
        Характеристики
      </h2>

      <div className="grid grid-cols-2 grid-rows-6 gap-x-12 gap-y-5 justify-items-start w-full">
        {parsedFeatures}
      </div>
    </>
  );

  let _equipments = (
    <>
      <h2 className=" font-bold text-[30px] leading-[35px] text-white mb-8">
        Комплектация
      </h2>

      <div className="grid grid-cols-2 grid-rows-6 gap-x-12 gap-y-5 justify-items-start w-full">
        {parsedEquipments}
      </div>
    </>
  );

  return (
    <section className="max-w-[780px] w-[50rem] row-start-5 col-start-1 col-span-4 mt-10">
      <div className="grid grid-cols-2 gap-x-4 w-80">
        <button
          className={
            !optionSelect
              ? "bg-primary w-40 h-8 text-white font-bold text-base rounded-[10px] mb-8"
              : "bg-[#242424] w-40 h-8 text-white font-bold text-base border-[1px] border-[#5B5B5B] rounded-[10px] px-4 mb-8"
          }
          onClick={() => setOptionSelect(false)}
        >
          Характеристики
        </button>
        <button
          className={
            optionSelect
              ? "bg-primary w-40 h-8 text-white font-bold text-base rounded-[10px] mb-8"
              : "bg-[#242424] w-40 h-8 text-white font-bold text-base border-[1px] border-[#5B5B5B] rounded-[10px] px-4 mb-8"
          }
          onClick={() => setOptionSelect(true)}
        >
          Комплектация
        </button>
      </div>
      {optionSelect ? _equipments : _features}
    </section>
  );
}

{
  /* <div className="" key={id}>
  <h2 className="font-medium text-2xl text-white mb-3">
    {el.title}
  </h2>
  <span className=" font-medium text-[20px] leading-6 text-white opacity-40">
    {features.brand}
  </span>
</div>; */
}
