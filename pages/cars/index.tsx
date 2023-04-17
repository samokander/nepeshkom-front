import AutoCard from "@/@types/AutoCard";
import CarCard from "@/components/CarCard";
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Autos() {
	const [autos, setAutos] = useState<AutoCard[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const resp = (await axios.get("http://api.vm-f965bd10.na4u.ru/autos")).data as AutoCard[];
				console.log("asd");
				console.log(resp);
				setAutos(resp);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	console.log(autos);

	return (
		<Layout>
			{autos.map((auto) => (
				<CarCard {...auto} />
			))}
		</Layout>
	);
}
