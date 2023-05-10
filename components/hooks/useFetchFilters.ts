import React, { useEffect, useState } from "react";
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
	const [filters, setFilters] = useState<Filters>();

	useEffect(() => {
		(async () => {
			try {
				const resp = (await axios.get(process.env.NEXT_PUBLIC_GET_FILTERS_ROUTE as string)).data;
				setFilters(resp);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return filters;
}
