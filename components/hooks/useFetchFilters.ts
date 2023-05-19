import { useEffect, useState } from "react";
import axios from "axios";

type Filters = {
	brands: string[];
	colors: string[];
	autoClassesCodes: string[];
	transmissions: string[];
	bodyTypes: string[];
	privodTypes: string[];
	defaultPriceMin: number;
	defaultPriceMax: number;
	modInfoPowerLSMin: number;
	modInfoPowerLSMax: number;
};

export default function useFetchFilters() {
	const [brand, setBrand] = useState<{ value: string; label: string }[]>([{ value: "string", label: "string" }]);
	const [classCode, setClassCode] = useState<{ value: string; label: string }[]>([
		{ value: "string", label: "string" },
	]);
	const [color, setColor] = useState<{ value: string; label: string }[]>([{ value: "string", label: "string" }]);
	const [priv, setPriv] = useState<{ value: string; label: string }[]>([{ value: "string", label: "string" }]);
	const [transmission, setTransmission] = useState<{ value: string; label: string }[]>([
		{ value: "string", label: "string" },
	]);
	const [body, setBody] = useState<{ value: string; label: string }[]>([{ value: "string", label: "string" }]);

	useEffect(() => {
		const brandsOptions: { value: string; label: string }[] = [];
		const classesOptions: { value: string; label: string }[] = [];
		const colorsOptions: { value: string; label: string }[] = [];
		const privodOptions: { value: string; label: string }[] = [];
		const transmissionsOptions: { value: string; label: string }[] = [];
		const bodiesOptions: { value: string; label: string }[] = [];

		(async () => {
			try {
				const resp = (await axios.get(process.env.NEXT_PUBLIC_GET_FILTERS_ROUTE as string)).data as Filters;

				for (const filterName of resp.brands) {
					brandsOptions.push({ value: filterName.toLowerCase(), label: filterName });
				}
				for (const filterName of resp.autoClassesCodes) {
					classesOptions.push({ value: filterName.toLowerCase(), label: filterName });
				}
				for (const filterName of resp.colors) {
					colorsOptions.push({ value: filterName.toLowerCase(), label: filterName });
				}
				for (const filterName of resp.privodTypes) {
					privodOptions.push({ value: filterName.toLowerCase(), label: filterName });
				}
				for (const filterName of resp.transmissions) {
					transmissionsOptions.push({ value: filterName.toLowerCase(), label: filterName });
				}
				for (const filterName of resp.bodyTypes) {
					bodiesOptions.push({ value: filterName.toLowerCase(), label: filterName });
				}

				setBrand(brandsOptions);
				setClassCode(classesOptions);
				setColor(colorsOptions);
				setPriv(privodOptions);
				setTransmission(transmissionsOptions);
				setBody(bodiesOptions);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return {
		brand,
		classCode,
		color,
		priv,
		transmission,
		body,
	};
}
