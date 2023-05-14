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
  const [auto, setAuto] = useState<AutoCard>({
    ItemID: 0,
    ModelId: 0,
    CustomCode1: "",
    CustomCode2: "",
    GosNumber: "",
    MarkaModelString: "",
    AutoYearSt: 0,
    CurrentCost: 0,
    DefaultPrice: 0,
    Deposit: 0,
    Discount: 0,
    DefaultPriceWithDiscountSt: 0,
    MileageLimit: 0,
    MileageLimitOver: 0,
    ExcessMileageCost: 0,
    FranchiseZero: 0,
    UnlimitCost: 0,
    UpperLimitCost: 0,
    FranchiseFull: 0,
    FranchiseLite: 0,
    AutoClassTitle: "",
    TiresType: "",
    CurrentContractFromTime: "",
    CurrentContractToTime: "",
    NearestReserveTimeStringSt: "",
    MinReservFromFilialTitle: "",
    RequestReservedStringSt: "",
    NearestFreeTime: "",
    ModInfoColor: "",
    ModInfoBody: "",
    ModInfoPrivod: "",
    ModInfoEngine: "",
    ModInfoV3: "",
    ModInfoTransmission: "",
    ModInfoPowerLSValue: 0,
    Files: [],
  });

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
