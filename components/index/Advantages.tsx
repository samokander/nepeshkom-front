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
			<div className="grid grid-cols-3 grid-rows-2 gap-5 w-full h-96">
				<div className="bg-darkgray rounded-3xl p-5 flex flex-col justify-between">
					<p className="text-2xl font-bold text-white">№1 обслуживание в Томске</p>
					<p>Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.</p>
				</div>
				<div className="bg-primary rounded-3xl p-5 flex flex-col justify-between">
					<p className="text-2xl font-bold text-white">Поддержка арендатора 24/7</p>
					<p>Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.</p>
				</div>
				<div className="bg-darkgray rounded-3xl row-span-2 p-5 flex flex-col justify-between">
					<p className="text-5xl font-bold text-white">
						Работаем <br /> без залога <br /> и лимита пробега
					</p>
					<p>Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.</p>
				</div>
				<div className="bg-white rounded-3xl p-5 flex flex-col justify-between">
					<p className="text-2xl font-bold text-black">Только новые автомобили</p>
					<p>Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.</p>
				</div>
				<div className="bg-darkgray rounded-3xl p-5 flex flex-col justify-between">
					<p className="text-2xl font-bold text-white">Оформление за 5 минут</p>
					<p>Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей.</p>
				</div>
			</div>
		</Section>
	);
}
