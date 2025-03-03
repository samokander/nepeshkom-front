import AutoCard from "@/@types/AutoCard";
import Filter from "@/components/car/Filter";
import CarCard from "@/components/car/CarCard";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CarCardLoader from "@/components/car/CarCardLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, setAutos } from "@/store/store";
import { auto } from "@popperjs/core";
import useFetchAutos from "@/components/hooks/useFetchAutos";

export default function Autos() {
	const [sort, setSort] = useState("");
	const autos = useSelector((state: AppState) => state.autos);

	const loading = useSelector((state: AppState) => state.loading);

	const dispatch = useDispatch();

	useFetchAutos();

	useEffect(() => {
		let sorted;
		switch (sort) {
			case "exp":
				sorted = [...autos];
				sorted.sort((a, b) => b.CurrentCost - a.CurrentCost);
				dispatch(setAutos(sorted));
				break;
			case "ch":
				sorted = [...autos];
				sorted.sort((a, b) => a.CurrentCost - b.CurrentCost);
				dispatch(setAutos(sorted));
				break;
			case "pow":
				sorted = [...autos];
				sorted.sort((a, b) => b.ModInfoPowerLSValue - a.ModInfoPowerLSValue);
				dispatch(setAutos(sorted));
				break;
			case "":
				sorted = [...autos];
				sorted.sort((a, b) => a.ItemID - b.ItemID);
				dispatch(setAutos(sorted));
		}
	}, [sort]);

	return (
		<Layout>
			<Section header="Автомобили">
				<Filter />
			</Section>
			<div className="flex flex-col">
				<div className="flex flex-row justify-between mb-8">
					<p className="text-xl font-medium text-halfblack">Найдено {autos?.length} автомобилей</p>
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
				<div className="w-full flex flex-row flex-wrap gap-5 mb-36 justify-center">
					{!loading
						? autos?.map((auto, index) => <CarCard {...auto} key={index} />)
						: Array(6)
								.fill("")
								.map((el, index) => <CarCardLoader key={index} />)}
				</div>
			</div>
		</Layout>
	);
}
