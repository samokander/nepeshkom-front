import AutoCard from "@/@types/AutoCard";
import Filter from "@/components/car/Filter";
import CarCard from "@/components/car/CarCard";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CarCardLoader from "@/components/car/CarCardLoader";
import { useEffect, useState } from "react";
import useFetchAutos from "../../components/hooks/useFetchAutos";

export default function Autos() {
	const [loaded, setLoaded] = useState(false);
	const [sort, setSort] = useState("");

	const [autos, setAutos] = useFetchAutos(setLoaded);
	console.log(autos);

	useEffect(() => {
		switch (sort) {
			case "exp":
				setAutos(autos.toSorted((a, b) => b.CurrentCost - a.CurrentCost));
				break;
			case "ch":
				setAutos(autos.toSorted((a, b) => a.CurrentCost - b.CurrentCost));
				break;
			case "pow":
				setAutos(autos.toSorted((a, b) => b.ModInfoPowerLSValue - a.ModInfoPowerLSValue));
			case "":
				setAutos(autos.toSorted((a, b) => a.ItemID - b.ItemID));
		}
	}, [sort]);

	return (
		<Layout>
			<Section header="Автомобили" children={<Filter setAutos={setAutos} setLoaded={setLoaded} />} />
			<div className="flex flex-col">
				<div className="flex flex-row justify-between mb-8">
					<p className="text-xl font-medium text-halfblack">Найдено {autos.length} автомобилей</p>
					<select
						value={sort}
						onChange={(e) => setSort(e.target.value)}
						className="text-xl font-medium text-halfblack rounded-xl bg-transparent pr-3">
						<option value={""} disabled hidden>
							Cортировать по
						</option>
						<option value={""}>Не выбрано</option>
						<option value={"exp"}>Дороже</option>
						<option value={"ch"}>Дешевле</option>
						<option value={"pow"}>Мощнее</option>
					</select>
				</div>
				<div className="w-full flex flex-row flex-wrap gap-5 mb-36">
					{loaded
						? autos?.map((auto, index) => <CarCard {...auto} key={index} />)
						: Array(6)
								.fill("")
								.map((el, index) => <CarCardLoader key={index} />)}
				</div>
			</div>
		</Layout>
	);
}
