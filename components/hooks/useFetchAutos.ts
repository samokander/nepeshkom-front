import AutoCard from "@/@types/AutoCard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAutos, setLoading, store } from "@/store/store";

export default function useFetchAutos() {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const resp = (await axios.get(process.env.NEXT_PUBLIC_ALL_AUTOS_ROUTE as string)).data as AutoCard[];
				dispatch(setAutos(resp));
			} catch (err) {
				console.error(err);
			} finally {
				dispatch(setLoading(false));
			}
		})();
	}, []);
}
