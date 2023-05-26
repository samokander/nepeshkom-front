import Image from "next/image";

export default function TeamMember(props: { name: string; role: string; img: string }) {
	return (
		<div className="max-w-[280px] h-[374px] flex flex-col p-4 gap-4 bg-darkgray rounded-2xl border border-halfblack ">
			<Image
				src={props.img}
				alt=""
				width={248}
				height={248}
				style={{
					borderRadius: "16px",
					objectFit: "cover",
				}}
			/>
			<div>
				<p className="font-bold text-2xl text-white">{props.name}</p>
				<p className="font-medium text-base text-halfblack">{props.role}</p>
			</div>
		</div>
	);
}
