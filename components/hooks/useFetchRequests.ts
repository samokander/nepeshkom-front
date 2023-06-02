import Request from "@/@types/Request";
import React, { useEffect, useState } from "react";
import axios from "axios";
// не готово
export default function useFetchRequests(
  clientId: null | string,
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
        if (clientId) {
          const resp = (
            await axios.post(baseUrl, {
              ClientIntegrationId: clientId,
              RentRequestDealTypeId: 31843,
            })
          ).data as Request[];
          setRequests(resp);
          setLoaded(true);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return [requests, setRequests];
}
