import Image from "next/image";
import Section from "../Section";

export default function Advantages() {
	const header = (
		<h2>
			Наши <a className="text-primary">преимущества</a>
		</h2>
	);
	const slogan = "Качественный сервис - залог постоянного сотрудничества";
	return (
		<Section header={header} slogan={slogan}>
			<div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 grid gap-5 lg:w-full lg:h-96">
				<div className="bg-darkgray rounded-3xl p-5 flex flex-col justify-between h-[146px] lg:h-auto">
					<p className="lg:text-2xl text-xl font-bold text-white">№1 обслуживание в Томске</p>
					<p className="text-halfblack text-sm lg:text-base">
						Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
					</p>
				</div>
				<div className="bg-primary rounded-3xl p-5 flex flex-col justify-between h-[146px] lg:h-auto">
					<p className="lg:text-2xl text-xl font-bold text-white">Поддержка арендатора 24/7</p>
					<p className="text-halfblack text-sm lg:text-base">
						Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
					</p>
				</div>
				<div className="bg-darkgray rounded-3xl row-span-2 p-5 flex flex-col justify-between h-[146px] lg:h-auto">
					<p className="lg:text-5xl text-xl font-bold text-white">Работаем без залога и лимита пробега</p>
					<p className="text-halfblack text-sm lg:text-base">
						Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
					</p>
				</div>
				<div className="bg-white rounded-3xl p-5 flex flex-col justify-between h-[146px] lg:h-auto">
					<p className="lg:text-2xl text-xl font-bold text-black">Только новые автомобили</p>
					<p className="text-halfwhite text-sm lg:text-base">
						Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
					</p>
				</div>
				<div className="bg-darkgray rounded-3xl p-5 flex flex-col justify-between h-[146px] lg:h-auto">
					<p className="lg:text-2xl text-xl font-bold text-white">Оформление за 5 минут</p>
					<p className="text-halfblack text-sm lg:text-base">
						Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.
					</p>
				</div>
			</div>
		</Section>
	);
}
