import ContentRentTermsResp from "@/@types/ContentRentTermsResp";
import { setRentTerms } from "@/store/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchTermsContent() {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const data = (await axios.get(process.env.NEXT_PUBLIC_CONTENT_RENT_TERMS_ROUTE as string)).data;
			dispatch(setRentTerms(data));
		})();
	}, []);
}
