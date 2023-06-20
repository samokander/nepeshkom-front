import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";
import { InfoCardProps } from "../index/InfoCard";

export default function ServiceSection(props: InfoCardProps) {
	const router = useRouter();

	function handleRedirect() {
		router.push(props.dst!);
	}

	return (
		<section className="rounded-3xl bg-darkgray border border-solid border-slightblack">
			<div className="relative aspect-video w-full h-[440px] items-end justify-between flex p-8 bg-tint rounded-3xl">
				<Image
					src={props.imgSrc}
					alt={props.header}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{ objectFit: "cover", borderRadius: "24px", zIndex: 0 }}
				/>
				<div className="z-10 w-full flex justify-between">
					<h1 className="font-bold md:text-4xl mb-2 text-xl text-white">{props.header}</h1>
					<Button primary on_click={handleRedirect}>
						Заказать услугу
					</Button>
				</div>
			</div>
			<div className="md:p-8 p-5">
				<h2 className="font-medium md:text-xl text-sm text-halfblack">{props.desc}</h2>
			</div>
		</section>
	);
}
