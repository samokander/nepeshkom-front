import AutoCard from "@/@types/AutoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import Calendar from "../Calendar";
import Select from "react-select";
import useFetchFilters from "../hooks/useFetchFilters";
import FilterIcon from "../icons/FilterIcon";
import { colors } from "react-select/dist/declarations/src/theme";

export default function Filter(props: {
	setAutos: React.Dispatch<React.SetStateAction<AutoCard[]>>;
	setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [showFilter, setShowFilter] = useState(false);
	const [brand, setBrand] = useState<string[]>([]);
	const [classCode, setClasssCode] = useState<string[]>([]);
	const [color, setColor] = useState<string[]>([]);
	const [priv, setPriv] = useState<string[]>([]);
	const [transmission, setTransmission] = useState<string[]>([]);
	const [body, setBody] = useState<string[]>([]);

	const [fromValue, setFromValue] = useState<string>("");
	const [toValue, setToValue] = useState<string>("");

	const filters = useFetchFilters();

	async function handleFilterClick() {
		props.setLoaded(false);
		try {
			const autos = (
				await axios.get(process.env.NEXT_PUBLIC_SEARCH_WITH_FULL_DATA as string, {
					data: {
						DateFrom: fromValue.replaceAll("-", ".") + " 00:00:00",
						DateTo: toValue.replaceAll("-", ".") + " 00:00:00",
						Brands: brand,
						Colors: color,
						Transmissions: transmission,
						BodyTypes: body,
						PrivodTypes: priv,
						AutoClasses: classCode,
					},
				})
			).data as AutoCard[];

			console.log(autos);
			props.setAutos(autos);
		} catch {}
		props.setLoaded(true);
	}

	useEffect(() => {
		setBrand([]);
		setClasssCode([]);
		setColor([]);
		setPriv([]);
		setTransmission([]);
		setBody([]);
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
					}>
					<div className="flex flex-row gap-5 items-center h-fit">
						<Calendar fromValue={fromValue} setFromValue={setFromValue} toValue={toValue} setToValue={setToValue} />
						<FilterIcon showFilter={showFilter} setShowFilter={setShowFilter} />
					</div>
					<Button primary on_click={handleFilterClick}>
						Показать
					</Button>
				</div>
				{showFilter && (
					<div className="flex flex-row justify-evenly absolute w-full h-24 top-full bg-darkgray  border-x border-x-halfblack border-b border-b-halfblack items-center justify-items-stretch gap-5 px-5 rounded-b-2xl">
						<Select
							options={filters.body}
							isMulti
							className="w-full"
							placeholder="Кузов"
							styles={{ control: (styles) => ({ ...styles, height: "52px", overflowY: "auto", borderRadius: 12 }) }}
							onChange={(newValue) => setBody(newValue.map((el) => el.label))}
						/>
						<Select
							options={filters.brand}
							isMulti
							className="w-full"
							placeholder="Марка"
							styles={{ control: (styles) => ({ ...styles, height: "52px", overflowY: "auto", borderRadius: 12 }) }}
							onChange={(newValue) => setBrand(newValue.map((el) => el.label))}
						/>
						<Select
							options={filters.classCode}
							isMulti
							className="w-full"
							placeholder="Класс"
							styles={{ control: (styles) => ({ ...styles, height: "52px", overflowY: "auto", borderRadius: 12 }) }}
							onChange={(newValue) => setClasssCode(newValue.map((el) => el.label))}
						/>
						<Select
							options={filters.color}
							isMulti
							className="w-full"
							placeholder="Цвет"
							styles={{ control: (styles) => ({ ...styles, height: "52px", overflowY: "auto", borderRadius: 12 }) }}
							onChange={(newValue) => setColor(newValue.map((el) => el.label))}
						/>
						<Select
							options={filters.priv}
							isMulti
							className="w-full"
							placeholder="Привод"
							styles={{ control: (styles) => ({ ...styles, height: "52px", overflowY: "auto", borderRadius: 12 }) }}
							onChange={(newValue) => setPriv(newValue.map((el) => el.label))}
						/>
						<Select
							options={filters.transmission}
							isMulti
							className="w-full"
							placeholder="Коробка"
							styles={{ control: (styles) => ({ ...styles, height: "52px", overflowY: "auto", borderRadius: 12 }) }}
							onChange={(newValue) => setTransmission(newValue.map((el) => el.label))}
						/>
					</div>
				)}
			</div>
		</>
	);
}
