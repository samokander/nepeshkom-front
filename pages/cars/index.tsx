import CarCard from "@/components/CarCard";
import Layout from "@/components/Layout";

export default function Autos() {
	const info = {
		bodywork: "Седан",
		name: "Kia K5",
		year: 2019,
		gear: "АКПП",
		hp: 150,
		price: 4490,
	};
	return (
		<Layout>
			<CarCard info={info} img="../../public/static/Kia K5/F.jpg" />
		</Layout>
	);
}
 