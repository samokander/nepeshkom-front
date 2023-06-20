import Image from "next/image";
import { PropsWithChildren } from "react";

type buttonProps = {
	primary: boolean;
	icon?: string;
	on_click?: () => void;
	className?: string;
};

export default function Button(props: PropsWithChildren & buttonProps) {
	return (
		<span
			className={
				`flex justify-center items-center text-center min-w-[150px] h-14 rounded-xl text-base px-4 font-bold cursor-pointer` +
				(props.primary ? " bg-primary text-white" : ` bg-lightgray border-solid text-primary`) +
				` ${props.className}`
			}
			onClick={props.on_click}>
			<span className="flex flex-row justify-evenly">
				{props.icon && <Image src={props.icon} alt="" width={20} height={20} className="mr-2" />}
				{props.children}
			</span>
		</span>
	);
}
