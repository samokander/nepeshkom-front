import Image from "next/image";
import clock from "../../../public/icons/clock.svg";
import { useState } from "react";
import ModalWindow from "@/components/ModalWindow";
import { addRentRequest } from "@/components/hooks/useFetchAddRent";
import { format } from "date-fns";
import HTMLCalendar from "@/components/HTMLCalendar";
import { getLocalStorageClientData } from "@/components/utils/getLocalStorage";
import { useRouter } from "next/router";
import convertDateFormat from "@/components/utils/convertDateFormat";

export default function Options(props: { price: number; autoId: number }) {
	const router = useRouter();
	const [airportDelivery, setAirportDelivery] = useState(false);
	const [cityDelivery, setCityDelivery] = useState(false);
	const [startRentHour, setStartRentHour] = useState();
	const [endRentHour, setEndRentHour] = useState();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [err, setErr] = useState<boolean>(false);

	const [fromValue, setFromValue] = useState<string>("");
	const [toValue, setToValue] = useState<string>("");

	const handleRentAuto = async () => {
		if (!getLocalStorageClientData().phoneNumber) router.push("/auth");
		if (fromValue && toValue) {
			const startDate = convertDateFormat(fromValue) + " " + (startRentHour || "00:00") + ":00";
			const endDate = convertDateFormat(toValue) + " " + (endRentHour || "00:00") + ":00";
			const res = await addRentRequest(props.autoId, startDate, endDate);

			if (typeof res?.LongParamValue === "number") setErr(false);
			else setErr(true);
		} else {
			setErr(true);
		}

		setShowModal(true);
	};

	return (
		<section
			className="flex flex-col col-start-5 row-span-4 col-span-2 
							rounded-[16px] p-[20px] bg-darkgray w-[380px] 
							border-[1px] border-[#5B5B5B] h-auto">
			<h3 className="mb-[10px] font-bold text-[30px] text-white">Период аренды</h3>
			<span className="mb-[20px] font-semibold text-[16px] text-white opacity-50">
				Кол-во дней: {Math.floor((new Date(toValue).valueOf() - new Date(fromValue).valueOf()) / (1000 * 60 * 60 * 24))}
			</span>

			{/* ВЫБОР ДАТЫ */}

			<div
				className="flex flex-row items-center isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]">
				<HTMLCalendar date={fromValue} setDate={setFromValue} />
				<div className="w-max h-12 pl-5 flex flex-nowrap justify-around items-center bg-white border border-shadeofgrey rounded-tr-xl rounded-br-xl font-raleway">
					<input
						type="time"
						id="appt"
						value={startRentHour}
						onChange={(ev) => {
							setStartRentHour(ev.target.value);
						}}
					/>
				</div>
			</div>

			<div
				className="flex flex-row items-center isolate w-[340px] h-[52px] 
        bg-white border-[1px] rounded-[12px] mb-[20px]">
				<HTMLCalendar date={toValue} setDate={setToValue} />
				<div className="w-max h-12 pl-5 flex flex-nowrap justify-around items-center bg-white border border-shadeofgrey rounded-tr-xl rounded-br-xl font-raleway">
					<input
						type="time"
						id="appt"
						value={endRentHour}
						onChange={(ev) => {
							setEndRentHour(ev.target.value);
						}}
					/>
				</div>
			</div>
			{/* ПЕРЕКЛЮЧАТЕЛЬ 1 */}
			<div className="flex flex-row items-center mb-[21px]">
				<label className="switch">
					<input
						type="checkbox"
						value={airportDelivery}
						onChange={() => {
							setAirportDelivery((prev) => !prev);
						}}></input>
					<span className="slider"></span>
				</label>
				<p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">Доставка до аэропорта - 1500 ₽</p>
			</div>
			{/* ПЕРЕКЛЮЧАТЕЛЬ 2 */}
			<div className="flex flex-row items-center mb-[16%]">
				<label className="switch">
					<input type="checkbox" value={cityDelivery} onChange={() => setCityDelivery((prev) => !prev)}></input>
					<span className="slider"></span>
				</label>
				<p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">Доставка по городу - 750 ₽</p>
			</div>
			{/* extra */}
			{cityDelivery || airportDelivery ? (
				<div
					className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]"></div>
			) : (
				<></>
			)}
			{/* FOOTER */}
			<div className="flex flex-row items-center mb-[12.5px]">
				<span className="flex flex-row items-center font-semibold text-[16px] text-white opacity-50">
					<Image className="mr-[14px]" width={16} height={20} src={clock} alt="" />
					Оформление за 5 минут
				</span>
			</div>
			<h1 className="font-bold text-[40px] tracking-[0.01em] text-white mb-[20px] p-0">{props.price} ₽/сут.</h1>
			<button
				className="w-[340px] h-[52px] min-h-[52px] bg-primary rounded-[14px] font-bold text-[16px] text-white"
				onClick={handleRentAuto}>
				Забронировать
			</button>

			<ModalWindow showModal={showModal} setShowModal={setShowModal} err={err} />
		</section>
	);
}
