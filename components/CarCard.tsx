import Image from "next/image";
import Button from "./Button";
import axios from "axios";

type CarCardProps = {
	info: {
		bodywork: string;
		name: string;
		year: number;
		gear: string;
		hp: number;
		price: number;
	};
	img: string;
};

export default function CarCard(props: CarCardProps) {
	return (
		<div className="w-[380px] h-[424px] rounded-2xl bg-white p-4 flex flex-col">
			<div className="rounded-2xl h-[215px] relative mb-4">
				<Image
					src="/static/Kia K5/R.webp"
					alt="car image"
					fill
					style={{
						borderRadius: "16px",
					}}
				/>
			</div>
			<div>
				<p className="text-black text-sm mb-0 opacity-50">{props.info.bodywork}</p>
				<p className="text-black font-bold text-2xl text-darkgray mb-1">{props.info.name}</p>
				<p className="mb-5 text-black opacity-50">{`${props.info.year} год • ${props.info.gear} • ${props.info.hp} л.с`}</p>
			</div>
			<div className="flex flex-row justify-between items-center">
				<Button primary>Арендовать</Button>
				<div className="w-full text-center">
					<p className="font-semibold text-background text-xl">{props.info.price} ₽/сут. </p>
				</div>
			</div>
		</div>
	);
}
