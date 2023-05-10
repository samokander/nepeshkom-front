import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type infoCardProps = {
	header: string;
	desc: string;
	imgSrc: StaticImageData;
	dst: string;
};

export default function InfoCard(props: infoCardProps) {
	const router = useRouter();

	function handleRedirect() {
		router.push(props.dst);
	}

	return (
		<section className="bg-white rounded-3xl place-self-stretch">
			<div className="relative lg:h-80 aspect-video">
				<Image src={props.imgSrc} alt={props.header} fill />
				<a onClick={handleRedirect} className="absolute bottom-4 right-4">
					<Image src="Arrow.svg" alt="redirect arrow" width={21} height={21} />
				</a>
			</div>
			<div className="lg:p-8 p-5">
				<h1 className="font-bold lg:text-3xl mb-2 text-xl">{props.header}</h1>
				<h2 className="font-medium lg:text-xl text-sm text-halfwhite">{props.desc}</h2>
			</div>
		</section>
	);
}
