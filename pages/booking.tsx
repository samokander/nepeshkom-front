import Image from "next/image";
import Section from "../components/Section";
import Layout from "@/components/Layout";

import { useEffect, useState } from "react";
import { srcs } from "../other/slides";
import MainSlide from "@/components/car/booking/MainSlide";
import SlideLine from "@/components/car/booking/SlideLine";
import CarInfo from "@/components/car/booking/CarInfo";
import Options from "@/components/car/booking/Options";
import AccordionFAQ from "@/components/car/booking/AccordionFAQ";
import { useRouter } from "next/router";

export default function Booking() {
	const [index, setIndex] = useState(0);
	const [displayedSlides, setDisplayedSlides] = useState<number>(4);
	const router = useRouter();

	useEffect(() => {
		console.log(router.query.car);
	}, []);

	function handleLeftClick() {
		if (index > 0) {
			setIndex((prev) => prev - 1);
		} else if (index === 0) {
			setIndex(srcs.length - 1);
		}
	}

	function handleRightClick() {
		if (index < srcs.length - 1) {
			setIndex((prev) => prev + 1);
		} else if (index === srcs.length - 1) {
			setIndex(0);
		}
	}

	const header = (
		<h1>
			<span className="text-white">Kia K5</span>
		</h1>
	);

	return (
		<Layout>
			<Section header={header} slogan="">
				<div className="">
					<div className="grid grid-cols-6 grid-rows-8 gap-[20px] mb-16 gap">
						{/* MainSlide */}
						<MainSlide
							leftClick={() => handleLeftClick()}
							rightClick={() => handleRightClick()}
							_index={index}
							srcs={srcs}
						/>
						{/* SlideLine */}
						<SlideLine
							srcs={srcs}
							_displayedSlides={displayedSlides}
							_setDisplayedSlides={setDisplayedSlides}
							_index={index}
						/>
						{/* ОПЦИИ */}
						<Options />

						{/* info */}
						<CarInfo
							features={{
								brand: { title: "Марка", data: "KIA" },
								model: { title: "Модель", data: "K5" },
								year_of_manufacture: {
									title: "Год выпуска",
									data: "2019",
								},
								color: { title: "Цвет", data: "Черный" },
								body: { title: "Кузов", data: "Седан" },
								drive: {
									title: "Привод",
									data: "Передний",
								},
								engine_displacementd: {
									title: "Объем двигателя",
									data: "2.0",
								},
								gearbox: {
									title: "КПП",
									data: "Автомат",
								},
								engine_power: {
									title: "Мощность двигателя",
									data: "200 л.с.",
								},
								fuel: {
									title: "Топливо",
									data: "Бензин 95",
								},
								steering_wheel: {
									title: "Руль",
									data: "Левый",
								},
								insurance: {
									title: "Страховка",
									data: "ОСАГО без ограничений",
								},
							}}
							equipment={{
								conditioner: {
									title: "Кондиционер",
									data: "Есть",
								},
								alarm_and_autorun: {
									title: "Сигнализация и автозапуск",
									data: "Автозапуск",
								},
								multimedia: {
									title: "Мультимедиа",
									data: "Bluetooth, AUX, Radio",
								},
								tires: {
									title: "Резина",
									data: "Зимняя (шипы)",
								},
								tinting: {
									title: "Тонировка задних стекол",
									data: "Есть",
								},
							}}
						/>
						<AccordionFAQ header={""} />
					</div>
					<section className="flex flex-row justify-items-stretch"></section>
				</div>
			</Section>
		</Layout>
	);
}
