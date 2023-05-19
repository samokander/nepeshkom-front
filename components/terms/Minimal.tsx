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
			<div className="flex justify-end items-start w-full h-[440px] rounded-2xl flex-col p-5 relative bg-tint">
				<Image
					fill
					src="/static/terms.webp"
					alt="cars"
					style={{ objectFit: "cover", borderRadius: "24px", zIndex: "-1" }}
				/>
				<h2 className="text-primary font-bold text-5xl">Оформляем по двум документам</h2>
				<p className="text-halfblack font-medium text-base leading-6">
					Максимально прозрачны для арендатора – никаких сюрпризов в договоре
				</p>
				<div className="w-full flex-row flex gap-5 mt-5">
					<p className="block bg-primary rounded-full font-bold text-xl py-2 px-6 text-white w-min">Паспорт</p>
					<p className="block bg-white rounded-full font-bold text-xl py-2 px-6 text-black w-max">
						Водительское удостоверение
					</p>
				</div>
			</div>
			<div className="mt-20 grid grid-cols-2 grid-rows-2 gap-5">
				<div className="bg-darkgray border-solid border border-halfblack p-7 col-span-2 h-[142px] rounded-3xl">
					<h3 className="font-bold text-2xl text-white mb-2">{terms?.cardFirstTitle}</h3>
					<p className="font-medium text-halfblack text-base">{terms?.cardFirstText}</p>
				</div>
				<div className="bg-darkgray border-solid border border-halfblack p-7 h-[142px] rounded-3xl">
					<h3 className="font-bold text-2xl text-white mb-2">{terms?.cardSecondTitle}</h3>
					<p className="font-medium text-halfblack text-base">{terms?.cardSecondText}</p>
				</div>
				<div className="bg-darkgray border-solid border border-halfblack p-7 h-[142px] rounded-3xl">
					<h3 className="font-bold text-2xl text-white mb-2">{terms?.cardThirdTitle}</h3>
					<p className="font-medium text-halfblack text-base">{terms?.cardThirdText}</p>
				</div>
			</div>
		</Section>
	);
}
