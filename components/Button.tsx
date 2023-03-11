import Image from "next/image";
import { PropsWithChildren } from "react";

type buttonProps = {
	primary: boolean;
	icon?: string;
};

export default function Button(props: PropsWithChildren & buttonProps) {
	function handleButtonClick() {}

	return (
		<a
			className={
				"block min-w-[180px] w-max h-14 text-center rounded-xl text-base py-4 font-bold" +
				(props.primary ? " bg-primary" : " bg-lightgray border-solid text-primary w-[194px]")
			}
			type="button">
			<div className="flex flex-row justify-evenly">
				{props.icon && <Image src={props.icon} alt="" width={24} height={24} />}
				{props.children}
			</div>
		</a>
	);
}
