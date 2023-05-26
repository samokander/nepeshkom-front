import Layout from "@/components/Layout";
import Path from "@/components/Path";
import Section from "@/components/Section";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Policy() {
	const header = <h1>Политика конфиденциальности</h1>;
	const [policy, setPolicy] = useState("");

	useEffect(() => {
		(async () => {
			const data = (await axios.get(process.env.NEXT_PUBLIC_CONTENT_PRIVACY as string)).data;
			setPolicy(data.text);
		})();
	});

	return (
		<Layout>
			<Path pageName="Политика конфиденциальности" pathTo="/policy" />
			<Section slogan="" header={header}>
				<p className="text-xl text-halfblack">{policy}</p>
			</Section>
		</Layout>
	);
}
