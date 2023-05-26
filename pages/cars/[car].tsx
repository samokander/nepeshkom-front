import Layout from "@/components/Layout";
import Link from "next/link";
import Booking from "@/components/car/Booking";
import { useRouter } from "next/router";
import axios from "axios";
import AutoCard from "@/@types/AutoCard";
import { useEffect, useState } from "react";
import CarCardLoader from "@/components/car/CarCardLoader";
import { getAutoById } from "@/components/hooks/helpers/getAutoById";

export default function Car() {
	const [loaded, setLoaded] = useState(false);
	const [auto, setAuto] = useState<AutoCard>();
	const router = useRouter();
	const { car } = router.query;

	useEffect(() => {
		if (!car) return;

		const awaitGetAuto = async () => {
			const res = await getAutoById(car);
			setAuto(res);
			console.log(res);
		};

		awaitGetAuto();
	}, [car]);

	return <Layout>{auto && <Booking autoInfo={auto} />}</Layout>;
}
