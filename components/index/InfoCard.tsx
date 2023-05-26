import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

export type InfoCardProps = {
	header: string;
	desc: string;
	imgSrc: StaticImageData;
	dst: string;
};

export default function InfoCard(props: InfoCardProps) {
	const router = useRouter();

	function handleRedirect() {
		router.push(props.dst!);
	}

	return (
		<section className="rounded-3xl place-self-stretch bg-white">
			<div className="relative md:h-80 aspect-video w-full">
				<Image
					src={props.imgSrc}
					alt={props.header}
					fill
					style={{ objectFit: "cover", borderRadius: "24px" }}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<a onClick={handleRedirect} className="absolute bottom-4 right-4">
					<Image src="Arrow.svg" alt="redirect arrow" width={21} height={21} />
				</a>
			</div>
			<div className="md:p-8 p-5">
				<h1 className="font-bold md:text-3xl mb-2 text-xl">{props.header}</h1>
				<h2 className="font-medium md:text-xl text-sm text-halfwhite">{props.desc}</h2>
			</div>
		</section>
	);
}
