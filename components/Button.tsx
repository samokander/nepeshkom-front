import Image from "next/image";
import { PropsWithChildren } from "react";

type buttonProps = {
	primary: boolean;
	icon?: string;
	on_click?: () => void;
	width?: number;
};

export default function Button(props: PropsWithChildren & buttonProps) {
	return (
		<a
			className={
				`block min-w-[150px] w-max h-14 text-center rounded-xl text-base py-4 px-4 font-bold hover:cursor-pointer` +
				(props.primary ? " bg-primary text-white" : " bg-lightgray border-solid text-primary w-[194px]")
			}
			onClick={props.on_click}>
			<span className="flex flex-row justify-evenly">
				{props.icon && <Image src={props.icon} alt="" width={20} height={20} className="mr-2" />}
				{props.children}
			</span>
		</a>
	);
}
