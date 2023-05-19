import usefetchAutos from "@/components/hooks/useFetchAutos";
import Image from "next/image";
import Link from "next/link";
import { ReactFragment, useState } from "react";
import Button from "../Button";
import Calendar from "../Calendar";
import useMobile from "../hooks/useMobile";
import Section from "../Section";
import MiniCarCard from "./MiniCarCard";
import MiniCarCardLoader from "./MiniCarCardLoader";

export default function Rent() {
	const [loaded, setLoaded] = useState(false);
	const mobile = useMobile();

	const [autos, setAutos] = usefetchAutos(setLoaded);

	const header = (
		<div className="lg:grid lg:grid-cols-11 lg:grid-rows-1 gap-5 lg:mb-12 flex flex-col">
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
			<div className="lg:w-full h-[500px] rounded-t-3xl relative overflow-hidden bg-tint flex flex-col justify-end p-4">
				<p className="font-bold text-white lg:text-3xl text-lg text-center lg:text-start z-0">
					Выберите удобную для Вас дату
				</p>
				<Image
					src="/static/main.webp"
					alt="3 cars"
					fill
					style={{
						borderRadius: "24px 24px 0px 0px",
						objectFit: "cover",
						zIndex: -1,
					}}
				/>
			</div>
			<div className="h-[92px] lg:w-full bg-darkgray flex items-center px-5 flex-row justify-between rounded-b-3xl lg:mb-20 mb-10">
				{mobile ? <input type="date" /> : <Calendar />}
				<Link href="/cars">
					<Button primary>Показать</Button>
				</Link>
			</div>
			<div className="flex flex-col lg:w-full gap-7">
				<div className="flex flex-row justify-between items-center">
					<h2 className="font-bold text-3xl text-white">Или выберите подходящий автомобиль</h2>
					<Link className="text-halfblack font-semibold hover:underline" href="/cars">
						Посмотреть все &rsaquo;
					</Link>
				</div>
				<div className="lg:flex lg:flex-row lg:gap-5 outer">
					{mobile ? (
						<div className="flex flex-nowrap overflow-x-auto gap-5">
							{autos.slice(0, 4).map((auto) => {
								return loaded ? <MiniCarCard {...auto} /> : <MiniCarCardLoader />;
							})}
						</div>
					) : loaded ? (
						autos.slice(0, 4).map((auto, index) => {
							return <MiniCarCard {...auto} key={index} />;
						})
					) : (
						<>
							<MiniCarCardLoader />
							<MiniCarCardLoader />
							<MiniCarCardLoader />
							<MiniCarCardLoader />
						</>
					)}
				</div>
			</div>
		</Section>
	);
}
