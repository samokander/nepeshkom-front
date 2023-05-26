import Button from "@/components/Button";
import { useState } from "react";

export default function CarInfo({ features }: carInfoProps) {
	const featuresKeys = Object.keys(features);

	let parsedFeatures = featuresKeys.map((key, id) => {
		return (
			<div className="" key={id}>
				<h2 className=" font-medium text-2xl text-white mb-3">{features[key].title}</h2>
				<span className=" font-medium text-[20px] leading-6 text-white opacity-40 shrink">{features[key].data}</span>
			</div>
		);
	});

	return (
		<section className="flex flex-col justify-center flex-grow">
			<h2 className=" font-bold text-[30px] text-white mb-8 w-full text-start">Информация об автомобиле</h2>
			<div className="grid grid-cols-2 grid-rows-6 gap-x-12 gap-y-5 w-full">{parsedFeatures}</div>
		</section>
	);
}
