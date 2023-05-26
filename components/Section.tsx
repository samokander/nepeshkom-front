import { ReactNode } from "react";

type sectionProps = {
	header: ReactNode;
	slogan?: string;
	children: ReactNode;
};

export default function Section(props: sectionProps) {
	return (
		<section className="w-full flex flex-col justify-start md:mb-36 mb-10 md:mt-10">
			<header className="md:mb-5 font-bold text-white md:text-6xl text-3xl mb-3">{props.header}</header>
			{props.slogan && (
				<h2 className="md:mb-16 text-halfblack font-medium md:text-2xl text-base mb-7">{props.slogan}</h2>
			)}
			{props.children}
		</section>
	);
}
