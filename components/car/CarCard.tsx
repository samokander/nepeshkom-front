import Image from "next/image";
import Button from "../Button";
import AutoCard from "@/@types/AutoCard";

export default function CarCard(props: AutoCard) {
	return (
		<div className="w-[380px] h-[424px] rounded-2xl bg-white p-4 flex flex-col">
			<div className="rounded-2xl h-[215px] relative mb-4">
				<Image
					src={props.Files[0]?.url}
					alt="car image"
					fill
					style={{
						borderRadius: "16px",
					}}
				/>
			</div>
			<div>
				<p className="text-black text-sm mb-0 opacity-50">{props.AutoClassTitle}</p>
				<p className="text-black font-bold text-2xl text-darkgray mb-1">{props.MarkaModelString}</p>
				<p className="mb-5 text-black opacity-50">{`${props.AutoYearSt} год • ${props.ModInfoTransmission} • ${props.ModInfoPowerLSValue} л.с`}</p>
			</div>
			<div className="flex flex-row justify-between items-center">
				<Button primary>Арендовать</Button>
				<div className="w-full text-center">
					<p className="font-semibold text-background text-xl">{props.CurrentCost} ₽/сут. </p>
				</div>
			</div>
		</div>
	);
}
