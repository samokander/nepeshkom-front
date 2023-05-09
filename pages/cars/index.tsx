import AutoCard from "@/@types/AutoCard";
import Filter from "@/components/car/Filter";
import CarCard from "@/components/CarCard";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Autos() {
  const [autos, setAutos] = useState<AutoCard[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = (
          await axios.get(
            "http://api.vm-f965bd10.na4u.ru/autos"
          )
        ).data as AutoCard[];
        setAutos(resp);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  console.log(autos);

  return (
    <Layout>
      <Section header="Автомобили" children={<Filter />} />
      <div className="w-full flex flex-row flex-wrap gap-5 mb-36">
        {autos &&
          autos.map((auto) => <CarCard {...auto} />)}
      </div>
    </Layout>
  );
}
