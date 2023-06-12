import AutoCard from "@/@types/AutoCard";
import Image from "next/image";

export default function MiniCarCard(props: AutoCard & { isSelected?: boolean }) {
	return (
		<div className="flex flex-col gap-2 bg-background border-background border-solid">
			<div className="rounded-2xl w-[280px] h-[178px] relative">
				<Image
					fill
					src={props.Files[0]?.url}
					alt="car image"
					style={{
						borderRadius: "16px",
					}}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<p className="font-extrabold text-white text-2xl">{props.MarkaModelString}</p>
			<p className="font-semibold text-halfblack text-xl">{props.DefaultPrice} ₽/сут. </p>
		</div>
	);
}
