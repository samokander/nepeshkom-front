import AutoCard from "@/@types/AutoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import Select from "react-select";
import useFetchFilters from "../hooks/useFetchFilters";
import FilterIcon from "../icons/FilterIcon";
import { format } from "date-fns";
import HTMLCalendar from "../HTMLCalendar";
import { useDispatch } from "react-redux";
import { setAutos, setLoading } from "@/store/store";
import convertDateFormat from "../utils/convertDateFormat";
import useMobile from "../hooks/useMobile";

export default function Filter() {
	const [showFilter, setShowFilter] = useState(false);
	const [brand, setBrand] = useState<string[]>([]);
	const [classCode, setClasssCode] = useState<string[]>([]);
	const [color, setColor] = useState<string[]>([]);
	const [priv, setPriv] = useState<string[]>([]);
	const [transmission, setTransmission] = useState<string[]>([]);
	const [body, setBody] = useState<string[]>([]);

	const [fromValue, setFromValue] = useState<string>(() => {
		const date = new Date();
		return convertDateFormat(date.toLocaleDateString());
	});
	const [toValue, setToValue] = useState<string>("");

	const dispatch = useDispatch();

	const filters = useFetchFilters();

	const mobile = useMobile(678);

	async function handleFilterClick() {
		dispatch(setLoading(true));
		try {
			const autos = (
				await axios.get(process.env.NEXT_PUBLIC_SEARCH_WITH_FULL_DATA as string, {
					data: {
						DateFrom: fromValue.replaceAll("-", ".") + " 00:00:00",
						DateTo: (toValue ? toValue.replaceAll("-", ".") : "9999.12.31") + " 00:00:00",
						Brands: brand,
						Colors: color,
						Transmissions: transmission,
						BodyTypes: body,
						PrivodTypes: priv,
						AutoClasses: classCode,
					},
				})
			).data as AutoCard[];
			dispatch(setAutos(autos));
			dispatch(setLoading(false));
		} catch (e) {
			console.log(e);
			dispatch(setLoading(false));
		}
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
						"flex flex-row justify-between w-full bg-darkgray min-h-24 gap-5 flex-wrap py-5 items-center px-5 max-[678px]:justify-center" +
						(showFilter
							? " rounded-t-2xl border-x border-x-halfblack border-t border-t-halfblack"
							: " rounded-2xl border border-halfblack")
					}>
					<div className="flex flex-row gap-5 items-center h-fit flex-wrap justify-center">
						<div className="flex flex-row gap-3 items-center flex-wrap">
							<HTMLCalendar date={fromValue} setDate={setFromValue} />
							{!mobile && <p className="font-bold text-white">-</p>}
							<HTMLCalendar date={toValue} setDate={setToValue} />
						</div>
						<FilterIcon showFilter={showFilter} setShowFilter={setShowFilter} />
					</div>
					<Button primary on_click={handleFilterClick}>
						Показать
					</Button>
				</div>
				{showFilter && (
					<div className="flex flex-row justify-evenly max-[678px]:flex-wrap absolute w-full h-fit min-h-24 py-5 top-full bg-darkgray  border-x border-x-halfblack border-b border-b-halfblack items-center gap-5 px-5 rounded-b-2xl z-50">
						<Select
							options={filters.body}
							isMulti
							className="w-full"
							placeholder="Кузов"
							styles={{
								control: (styles) => ({
									...styles,
									height: "52px",
									overflowY: "auto",
									borderRadius: 12,
									flexGrow: "grow",
								}),
							}}
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
