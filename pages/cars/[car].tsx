import Layout from "@/components/Layout";
import Link from "next/link";
import Booking from "@/components/car/Booking";
import { useRouter } from "next/router";
import axios from "axios";
import AutoCard from "@/@types/AutoCard";
import { useEffect, useState } from "react";
import useFetchAuto from "@/components/hooks/useFetchAuto";
import CarCardLoader from "@/components/car/CarCardLoader";

export default function Car() {
  const [loaded, setLoaded] = useState(false);
  // const [autoInfo, setAutoInfo] = useState<AutoCard>({
  //   ItemID: 0,
  //   ModelId: 0,
  //   CustomCode1: "",
  //   CustomCode2: "",
  //   GosNumber: "",
  //   MarkaModelString: "",
  //   AutoYearSt: 0,
  //   DefaultPrice: 0,
  //   Deposit: 0,
  //   Discount: 0,
  //   DefaultPriceWithDiscountSt: 0,
  //   MileageLimit: 0,
  //   MileageLimitOver: 0,
  //   ExcessMileageCost: 0,
  //   FranchiseZero: 0,
  //   UnlimitCost: 0,
  //   UpperLimitCost: 0,
  //   FranchiseFull: 0,
  //   FranchiseLite: 0,
  //   AutoClassTitle: "",
  //   TiresType: "",
  //   CurrentContractFromTime: "",
  //   CurrentContractToTime: "",
  //   NearestReserveTimeStringSt: "",
  //   MinReservFromFilialTitle: "",
  //   RequestReservedStringSt: "",
  //   NearestFreeTime: "",
  //   ModInfoColor: "",
  //   ModInfoBody: "",
  //   ModInfoPrivod: "",
  //   ModInfoEngine: "",
  //   ModInfoV3: "",
  //   ModInfoTransmission: "",
  //   ModInfoPowerLSValue: 0,
  //   Files: [],
  // });
  //const [autoId, setAutoId] = useState("")
  const router = useRouter();
  const autoId = router.query.car;
  console.log(loaded);
  console.log("autoId: ", autoId);

  const [auto, setAuto] = useFetchAuto(setLoaded, autoId);

  console.log(loaded);
  return (
    <Layout>
      {loaded ? (
        <Booking autoInfo={auto} />
      ) : (
        Array(6)
          .fill("")
          .map(() => <CarCardLoader />)
      )}
    </Layout>
  );
}
