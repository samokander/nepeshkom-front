import AutoCard from "@/@types/AutoCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchAuto(
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>,
  autoId: string | string[] | undefined
): [
  AutoCard,
  React.Dispatch<React.SetStateAction<AutoCard>>
] {
  const baseUrl = process.env
    .NEXT_PUBLIC_ALL_AUTOS_ROUTE as string;
  const [auto, setAuto] = useState<AutoCard | null>(null);
  console.log('gg' + autoId)

  useEffect(() => {
    (async () => {
      
      try {
        
        const resp = (
          await axios.get(`${baseUrl}/${autoId}`)
        ).data as AutoCard;
        setAuto(resp);
        setLoaded(() => true);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return [auto, setAuto];
}
