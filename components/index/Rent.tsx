import usefetchAutos from "@/components/hooks/useFetchAutos";
import { AppState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
import useMobile from "../hooks/useMobile";
import HTMLCalendar from "../HTMLCalendar";
import Section from "../Section";
import MiniCarCard from "./MiniCarCard";
import MiniCarCardLoader from "./MiniCarCardLoader";

export default function Rent() {
	const mobile = useMobile();

	const [fromValue, setFromValue] = useState("");
	const [toValue, setToValue] = useState("");

	usefetchAutos();

	const autos = useSelector((state: AppState) => state.autos);
	const loading = useSelector((state: AppState) => state.loading);

	const header = (
		<div className="md:grid md:grid-cols-11 md:grid-rows-1 gap-5 md:mb-12 flex flex-col">
			<div className="col-span-8">
				<h1>
					Аренда автомобилей <br /> в Томске
				</h1>
			</div>
			<div className="col-span-3">
				<h2 className="mb-7 text-halfblack font-medium text-xl">
					Комплексные аутсорсинговые услуги для частных и государственных предприятий по всей России
				</h2>
			</div>
		</div>
	);

	return (
		<Section header={header} slogan={""}>
			<div className="md:w-full h-[500px] rounded-t-3xl relative overflow-hidden bg-tint flex flex-col justify-end p-4">
				<p className="font-bold text-white md:text-3xl text-lg text-center md:text-start z-0">
					Выберите удобный период
				</p>
				<Image
					src="/static/main.webp"
					alt="3 cars"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						borderRadius: "24px 24px 0px 0px",
						objectFit: "cover",
						zIndex: -1,
					}}
				/>
			</div>
			<div className="md:w-full py-5 gap-5 bg-darkgray flex px-5 md:flex-row md:justify-between justify-center rounded-b-3xl md:mb-20 mb-10 flex-col flex-wrap">
				<div className="flex md:flex-row gap-5 items-center flex-wrap justify-center">
					<HTMLCalendar date={fromValue} setDate={setFromValue} />
					{mobile ? "" : <p className="font-bold text-white">-</p>}
					<HTMLCalendar date={toValue} setDate={setToValue} />
				</div>
				<Button primary>Показать</Button>
			</div>
			<div className="flex flex-col md:w-full gap-7">
				<div className="flex flex-row justify-between items-center">
					<h2 className="font-bold text-3xl text-white">Или выберите подходящий автомобиль</h2>
					<Link className="text-halfblack font-semibold hover:underline" href="/cars">
						Посмотреть все &rsaquo;
					</Link>
				</div>
				<div className="flex flex-row gap-5 flex-nowrap overflow-x-auto max-w-[99vw]">
					{autos?.slice(0, 4).map((auto, index) => {
						return !loading ? <MiniCarCard {...auto} key={index} /> : <MiniCarCardLoader />;
					})}
				</div>
			</div>
		</Section>
	);
}
