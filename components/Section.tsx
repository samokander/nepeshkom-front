import { ReactNode } from "react";

type sectionProps = {
	header: ReactNode;
	slogan?: string;
	children: ReactNode;
};

export default function Section(props: sectionProps) {
	return (
		<section className="w-full flex flex-col justify-start mb-36 h-fit mt-10">
			<header className="mb-5 font-bold text-white text-6xl leading-[75px]">{props.header}</header>
			{props.slogan && <h2 className="mb-16 text-halfblack font-medium text-2xl">{props.slogan}</h2>}
			{props.children}
		</section>
	);
}
