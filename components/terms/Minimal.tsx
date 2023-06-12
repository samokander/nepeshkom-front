import { AppState } from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchTermsContent from "../hooks/useFetchTermsContent";
import Section from "../Section";

export default function Minimal() {
	const header = (
		<h1>
			<span className="text-primary">Минимальные</span> условия проката
		</h1>
	);

	const terms = useSelector((state: AppState) => state.rentTerms)?.minRent;

	return (
		<Section header={header} slogan="">
			<div className="flex justify-end items-start w-full h-[440px] rounded-2xl flex-col p-5 relative bg-tint max-[560px]:p-3">
				<Image
					fill
					src="/static/terms.webp"
					alt="cars"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{ objectFit: "cover", borderRadius: "24px", zIndex: "-1" }}
				/>
				<h2 className="text-primary font-bold text-5xl">Оформляем по двум документам</h2>
				<p className="text-halfblack font-medium text-base leading-6">
					Максимально прозрачны для арендатора – никаких сюрпризов в договоре
				</p>
				<div className="w-full flex-row flex gap-5 mt-5 items-center">
					<p className="flex bg-primary rounded-full font-bold text-xl h-full py-2 px-6 text-center items-center text-white w-min max-[560px]:text-sm">
						Паспорт
					</p>
					<p className="block bg-white rounded-full font-bold text-xl text-center py-2 px-6 text-black w-max max-[560px]:text-sm">
						Водительское удостоверение
					</p>
				</div>
			</div>
			<div className="mt-20 flex flex-col gap-5">
				<div className="bg-darkgray border-solid border border-halfblack p-7 col-span-2 rounded-3xl">
					<h3 className="font-bold text-2xl text-white mb-2">{terms?.cardFirstTitle}</h3>
					<p className="font-medium text-halfblack text-base">{terms?.cardFirstText}</p>
				</div>
				<div className="flex flex-row gap-5 flex-grow max-[560px]:flex-col">
					<div className="bg-darkgray border-solid border border-halfblack p-7 rounded-3xl">
						<h3 className="font-bold text-2xl text-white mb-2">{terms?.cardSecondTitle}</h3>
						<p className="font-medium text-halfblack text-base">{terms?.cardSecondText}</p>
					</div>
					<div className="bg-darkgray border-solid border border-halfblack p-7 rounded-3xl">
						<h3 className="font-bold text-2xl text-white mb-2">{terms?.cardThirdTitle}</h3>
						<p className="font-medium text-halfblack text-base">{terms?.cardThirdText}</p>
					</div>
				</div>
			</div>
		</Section>
	);
}
