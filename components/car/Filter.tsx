import AutoCard from "@/@types/AutoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import Calendar from "../Calendar";
import useFetchAutos from "../hooks/useFetchAutos";
import useFetchFilters from "../hooks/useFetchFilters";
import FilterIcon from "../icons/FilterIcon";

export default function Filter(props: {
  setAutos: React.Dispatch<
    React.SetStateAction<AutoCard[]>
  >;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showFilter, setShowFilter] = useState(false);
  const [brand, setBrand] = useState("");
  const [classCode, setClasssCode] = useState("");
  const [color, setColor] = useState("");
  const [priv, setPriv] = useState("");
  const [transmission, setTransmission] = useState("");
  const [body, setBody] = useState("");

  const filters = useFetchFilters();

  function filterFunction(el: AutoCard) {
    return (
      el.MarkaModelString.includes(brand) &&
      el.AutoClassTitle.includes(classCode) &&
      el.ModInfoColor.toLowerCase().includes(
        color.toLowerCase()
      ) &&
      el.ModInfoPrivod.includes(priv) &&
      el.ModInfoTransmission.includes(transmission) &&
      el.ModInfoBody.includes(body)
    );
  }

  async function handleFilterClick() {
    props.setLoaded(false);
    const autos = (
      await axios.get(
        process.env.NEXT_PUBLIC_ALL_AUTOS_ROUTE as string
      )
    ).data as AutoCard[];
    props.setAutos(
      autos.filter((el) => filterFunction(el))
    );
    props.setLoaded(true);
  }

  useEffect(() => {
    setBrand("");
    setClasssCode("");
    setColor("");
    setPriv("");
    setTransmission("");
    setBody("");
  }, [showFilter]);

  return (
    <>
      <div className="h-max w-full flex flex-col relative">
        <div
          className={
            "flex flex-row justify-between w-full bg-darkgray h-24 items-center px-5" +
            (showFilter
              ? " rounded-t-2xl border-x border-x-halfblack border-t border-t-halfblack"
              : " rounded-2xl border border-halfblack")
          }
        >
          <div className="flex flex-row gap-5 items-center h-fit">
            <Calendar />
            <FilterIcon
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
          </div>
          <Button primary on_click={handleFilterClick}>
            Показать
          </Button>
        </div>
        {showFilter && (
          <div className="flex flex-row justify-evenly absolute w-full h-24 top-full bg-darkgray  border-x border-x-halfblack border-b border-b-halfblack items-center justify-items-stretch gap-5 px-5 rounded-b-2xl">
            <select
              className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid hover:cursor-pointer"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <>
                <option disabled value="">
                  Марка
                </option>
                {filters?.brands.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  );
                })}
              </>
            </select>
            <select
              className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 hover:cursor-pointer border-solid"
              value={classCode}
              onChange={(e) =>
                setClasssCode(e.target.value)
              }
            >
              <>
                <option disabled hidden value="">
                  Класс
                </option>
                {filters?.autoClassesCodes.map(
                  (el, index) => {
                    return (
                      <option value={el} key={index}>
                        {el}
                      </option>
                    );
                  }
                )}
              </>
            </select>
            <select
              className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid hover:cursor-pointer"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <>
                <option disabled hidden value="">
                  Цвет
                </option>
                {filters?.colors.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  );
                })}
              </>
            </select>
            <select
              className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid hover:cursor-pointer"
              value={priv}
              onChange={(e) => setPriv(e.target.value)}
            >
              <>
                <option disabled hidden value="">
                  Привод
                </option>
                {filters?.privodTypes.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  );
                })}
              </>
            </select>
            <select
              className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid hover:cursor-pointer"
              value={transmission}
              onChange={(e) =>
                setTransmission(e.target.value)
              }
            >
              <>
                <option disabled hidden value="">
                  Коробка
                </option>
                {filters?.transmissions.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  );
                })}
              </>
            </select>
            <select
              className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid hover:cursor-pointer"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            >
              <>
                <option disabled hidden value="">
                  Кузов
                </option>
                {filters?.bodyTypes.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  );
                })}
              </>
            </select>
          </div>
        )}
      </div>
    </>
  );
}
