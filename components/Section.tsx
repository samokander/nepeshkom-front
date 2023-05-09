import { ReactNode } from "react";

type sectionProps = {
	header: ReactNode;
	slogan?: string;
	children: ReactNode;
};

export default function Section(props: sectionProps) {
	return (
		<section className="w-full flex flex-col justify-start lg:mb-36 mb-10 h-fit lg:mt-10">
			<header className="lg:mb-5 font-bold text-white lg:text-6xl text-3xl mb-3">{props.header}</header>
			{props.slogan && (
				<h2 className="lg:mb-16 text-halfblack font-medium lg:text-2xl text-base mb-7">{props.slogan}</h2>
			)}
			{props.children}
		</section>
	);
}
