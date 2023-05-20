import AutoCard from "@/@types/AutoCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAutos, setLoading } from "@/store/store";

export default function useFetchAutos() {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const resp = (await axios.get(process.env.NEXT_PUBLIC_ALL_AUTOS_ROUTE as string)).data as AutoCard[];
				dispatch(setAutos(resp));
				dispatch(setLoading(false));
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
}
