import Image from "next/image";
import Button from "../Button";
import Calendar from "../Calendar";
import Section from "../Section";

export default function Rent() {
	const header = (
		<div className="grid grid-cols-11 grid-rows-1 gap-5 mb-12">
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
			<div className="w-full h-[500px] rounded-t-3xl relative overflow-hidden bg-tint flex flex-col justify-end p-4">
				<p className="font-bold text-white text-3xl z-0">Выберите удобную для Вас дату</p>
				<Image
					src="/Фото/Главная/1. Первый экран — крупный размер.jpeg"
					alt="3 cars"
					fill
					style={{
						borderRadius: "24px 24px 0px 0px",
						objectFit: "cover",
						zIndex: -1,
					}}
				/>
			</div>
			<div className="h-[92px] w-full bg-darkgray flex items-center px-5 flex-row justify-between">
				<Calendar />
				<Button primary>Показать</Button>
			</div>
		</Section>
	);
}
