import Section from "@/components/Section";
import Options from "./Options";
import Request from "@/@types/Request";
import useFetchRequests from "../hooks/useFetchRequests";
import { useEffect, useState } from "react";
import { getAutoById } from "../hooks/helpers/getAutoById";
import XImage from "@/@types/XImage";

type BookedCarCardProps = {
  markaModel: string;
  year: number;
  transmission: string;
  v3: string;
  startDate: string | Date;
  endDate: string | Date;
  sum: number | string;
  imgUrl: XImage;
  numberId: number;
};

function BookedCarCard(props: BookedCarCardProps) {
  function addLeadingZeros(n: number) {
    let paddedNumber = String(n);
    while (paddedNumber.length < 4) {
      paddedNumber = "0" + paddedNumber;
    }
    return paddedNumber;
  }

  return (
    <div className=" h-full bg-[#242424] rounded-[20px] border-[#5B5B5B] border-[1px] p-8">
      <div className="flex flex-row gap-x-5 mb-5">
        <div className="w-[248px] h-[160px] overflow-hidden rounded-[16px]">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-cover"
              src={props.imgUrl.url}
              alt="Изображение"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          {/*  */}
          <div className="flex flex-row justify-between text-white mb-2">
            <h1 className="  text-4xl font-bold mb-3 w-full">
              {props.markaModel}
            </h1>
            <span className="opacity-40 font-semibold text-[24px]">
              #{addLeadingZeros(props.numberId)}
            </span>
          </div>
          {/*  */}
          <div className="flex flex-row w-auto gap-x-[10px] text-halfblack items-center tracking-[1px] mb-[5%]">
            <span className="font-normal text-[16px]">
              {`${props.year} год`}
            </span>
            <div className="rounded-full w-2 h-2 bg-secondary" />
            <span className="font-normal text-[16px]">
              {props.transmission}
            </span>
            <div className="rounded-full w-2 h-2 bg-secondary" />
            <span className="font-normal text-[16px]">
              {props.v3}
            </span>
          </div>
          {/*  */}
          <div className=" text-white flex flex-row gap-5">
            <div className="flex flex-col">
              <span className="opacity-40">
                Дата начала аренды:
              </span>
              <span>
                {props.startDate.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="opacity-40">
                Дата конца аренды:
              </span>
              <span>{props.endDate.toLocaleString()}</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="h-[100px] bg-background rounded-[12px] border-border_lightgray border p-4 flex flex-row">
        <div className="text-white w-[35%]">
          <span className="opacity-40 font-medium text-[16px]">
            Итоговая стоимость:
          </span>
          <h2 className=" font-bold text-[30px]">
            {props.sum} ₽
          </h2>
        </div>
        {/*  */}
        <div className="text-white w-[65%] items-stretch flex flex-col gap-5">
          <div>
            <span className="opacity-40 font-medium text-[16px] mr-[15%]">
              Доп. услуга
            </span>
            <span className="font-bold text-[16px]">
              Аренда с водителем - 1 200 ₽
            </span>
          </div>
          <div>
            <span className="opacity-40 font-medium text-[16px] mr-[15%]">
              Доп. услуга
            </span>
            <span className="font-bold text-[16px]">
              Аренда с водителем - 1 200 ₽
            </span>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default function BookingHistory() {
  const clientId = localStorage.getItem(
    "nepeshkom_cliendId"
  );
  const [loaded, setLoaded] = useState(false);

  const [bookingHistoryParams, setBookingHistoryParams] =
    useState<Array<BookedCarCardProps>>([]);

  const [requests, setRequests] = useFetchRequests(
    clientId,
    setLoaded
  );

  useEffect(() => {
    (async () => {
      const promiseParams = requests.map(
        async (req, index) => {
          return await parseRequest(req, index);
        }
      );
      const parsedParams = await Promise.all(promiseParams);
      setBookingHistoryParams(() => parsedParams);
    })();
  }, []);

  async function parseRequest(
    req: Request,
    index: number
  ): Promise<BookedCarCardProps> {
    let autoResponse = await getAutoById(req.AutoId);
    let result: BookedCarCardProps = {
      markaModel: "",
      year: 0,
      transmission: "",
      v3: "",
      startDate: "",
      endDate: "",
      sum: 0,
      imgUrl: {
        fileId: "",
        fileError: "",
        url: "",
        originalName: "",
        MimeType: "",
        surl: "",
        murl: "",
      },
      numberId: 1,
    };
    if (autoResponse) {
      result.markaModel = autoResponse.MarkaModelString;
      result.year = autoResponse.AutoYearSt;
      result.transmission =
        autoResponse.ModInfoTransmission;
      result.v3 = autoResponse.ModInfoV3;
      result.startDate = req.RentFromTime;
      result.endDate = req.RentToTime;
      result.sum = req.RentSum;
      result.imgUrl = autoResponse.Files[0];
      result.numberId = index + 1;
    }
    return result;
  }

  return (
    <Section header="">
      <div className="flex flex-row gap-[20px] h-full align-top w-full">
        {/* options */}

        <Options />
        <div className="w-[75%]">
          <h1 className=" text-white text-4xl font-bold mb-7 w-full">
            Все заявки {""}
            <span className="opacity-40">
              ({bookingHistoryParams.length})
            </span>
          </h1>
          <div className="grid auto-rows-max gap-7 ">
            {bookingHistoryParams.map((param) => {
              return (
                <BookedCarCard
                  key={param.numberId}
                  markaModel={param.markaModel}
                  year={param.year}
                  transmission={param.transmission}
                  v3={param.v3}
                  startDate={param.startDate}
                  endDate={param.endDate}
                  sum={param.sum}
                  imgUrl={param.imgUrl}
                  numberId={param.numberId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
