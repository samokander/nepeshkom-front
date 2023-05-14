import Request from "@/@types/Request";
import React, { useEffect, useState } from "react";
import axios from "axios";
// не готово
export default function useFetchRequests(
  clientId: number | string,
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>
): [
  Request[],
  React.Dispatch<React.SetStateAction<Request[]>>
] {
  const [requests, setRequests] = useState<Request[]>([]);
  const baseUrl = process.env
    .NEXT_PUBLIC_GET_REQUESTS_ROUTE as string;
  useEffect(() => {
    (async () => {
      try {
        const resp = (await axios.post(baseUrl))
          .data as Request[];
        setRequests(resp);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return [requests, setRequests];
}
