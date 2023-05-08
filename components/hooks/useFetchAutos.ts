import AutoCard from "@/@types/AutoCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchAutos(
	setLoaded: React.Dispatch<React.SetStateAction<boolean>>
): [AutoCard[], React.Dispatch<React.SetStateAction<AutoCard[]>>] {
	const [autos, setAutos] = useState<AutoCard[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const resp = (await axios.get(process.env.NEXT_PUBLIC_ALL_AUTOS_ROUTE as string)).data as AutoCard[];
				setAutos(resp);
				setLoaded(true);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return [autos, setAutos];
}
