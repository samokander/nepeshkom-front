import Layout from "@/components/Layout";
import Link from "next/link";
import Booking from "@/components/car/Booking";
import { useRouter } from "next/router";
import axios from "axios";
import AutoCard from "@/@types/AutoCard";
import { useEffect, useState } from "react";
import useFetchAuto from "@/components/hooks/useFetchAuto";
import CarCardLoader from "@/components/car/CarCardLoader";
import { getAutoById } from "@/components/hooks/getFerchAuto";

export default function Car() {
  const [loaded, setLoaded] = useState(false);
  const [auto, setAuto] = useState()
  const router = useRouter()
  const { car } = router.query

  useEffect(() => {
    if (!car) return

    const awaitGetAuto = async () => {
      const res = await getAutoById(car)
      setAuto(res)
      console.log(res)
    }

    awaitGetAuto()

    
  }, [car])


  return (
    <Layout>
      {auto ? (
        <Booking autoInfo={auto} />
      ) : (
        Array(6)
          .fill("")
          .map(() => <CarCardLoader />)
      )}
    </Layout>
  );
}
