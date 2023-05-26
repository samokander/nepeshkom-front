import { setContacts } from "@/store/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchContacts() {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			const res = await axios.get(process.env.NEXT_PUBLIC_CONTENT_CONTACTS as string)
			if (res?.data) {
				dispatch(setContacts(res?.data));
			}
		})();
	}, []);
}
