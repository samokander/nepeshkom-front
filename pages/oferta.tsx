import Layout from "@/components/Layout";
import Path from "@/components/Path";
import Section from "@/components/Section";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Policy() {
	const header = <h1>Публичная оферта</h1>;
	const [oferta, setOferta] = useState("");

	useEffect(() => {
		(async () => {
			const data = (await axios.get(process.env.NEXT_PUBLIC_CONTENT_OFERTA as string)).data;
			setOferta(data.text);
		})();
	});
	return (
		<Layout>
			<Path pageName="Публичная оферта" pathTo="/oferta" />
			<Section slogan="" header={header}>
				<p className="text-xl text-halfblack">{oferta}</p>
			</Section>
		</Layout>
	);
}
