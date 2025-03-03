/* eslint-disable @next/next/no-img-element */
import Section from "@/components/Section";
import Options from "./Options";
import Request from "@/@types/Request";
import useFetchRequests from "../hooks/useFetchRequests";
import { useEffect, useState } from "react";
import { getAutoById } from "../hooks/helpers/getAutoById";
import XImage from "@/@types/XImage";
import Image from "next/image";
import useMobile from "../hooks/useMobile";

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
	defaultPrice: number;
};

const changeToHttp = (url: string) => {
	if (url.startsWith("https")) {
		return url.replace("https", "http");
	} else return url;
};

function BookedCarCard(props: BookedCarCardProps) {
	const isMobile = useMobile(840);
	function addLeadingZeros(n: number) {
		let paddedNumber = String(n);
		while (paddedNumber.length < 4) {
			paddedNumber = "0" + paddedNumber;
		}
		return paddedNumber;
	}

	return (
		<div className=" h-full bg-[#242424] rounded-[20px] border-[#5B5B5B] border-[1px] p-8">
			<div className={`flex flex-row gap-x-5 mb-5 ${isMobile ? "flex-wrap" : ""}`}>
				<div className={`h-[160px] overflow-hidden rounded-[16px] ${isMobile ? "" : "w-[248px]"}`}>
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="object-cover"
							src={changeToHttp(props.imgUrl.url)}
							width={1000}
							height={1000}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt="Изображение"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col">
					{/*  */}
					<div className="flex flex-row justify-between text-white mb-2">
						<h1 className="  text-4xl font-bold mb-3 w-full">{props.markaModel}</h1>
						<span className="opacity-40 font-semibold text-[24px]">#{addLeadingZeros(props.numberId)}</span>
					</div>
					{/*  */}
					<div className="flex flex-row w-auto gap-x-[10px] text-halfblack items-center tracking-[1px] mb-[5%]">
						<span className="font-normal text-[16px]">{`${props.year} год`}</span>
						<div className="rounded-full w-2 h-2 bg-secondary" />
						<span className="font-normal text-[16px]">{props.transmission}</span>
						<div className="rounded-full w-2 h-2 bg-secondary" />
						<span className="font-normal text-[16px]">{props.v3}</span>
					</div>
					{/*  */}
					<div className={`text-white flex  gap-5 ${isMobile ? "flex-col" : "flex-row"}`}>
						<div className={`flex ${isMobile ? "flex-row" : "flex-col"}`}>
							<span className="opacity-40">Дата начала аренды:</span>
							<span className={`${isMobile ? "pl-2" : ""}`}>{props.startDate.toLocaleString()}</span>
						</div>
						<div className={`flex ${isMobile ? "flex-row" : "flex-col"}`}>
							<span className="opacity-40">Дата конца аренды:</span>
							<span className={`${isMobile ? "pl-2" : ""}`}>{props.endDate.toLocaleString()}</span>
						</div>
					</div>
					{/*  */}
				</div>
			</div>
			<div
				className={` bg-background rounded-[12px] border-border_lightgray border p-4 flex ${
					isMobile ? "flex-col-reverse" : "h-[100px] flex-row "
				}`}>
				<div className={`text-white ${isMobile ? "" : "w-[35%]"}`}>
					<span className="opacity-40 font-medium text-[16px]">Итоговая стоимость:</span>
					<h2 className=" font-bold text-[30px] ">{props.sum} ₽</h2>
				</div>
				{/*  */}
				<div className="text-white w-[65%] items-stretch flex flex-col gap-5">
					{/* <div>
            <span className="opacity-40 font-medium text-[16px] mr-[15%]">
              Доп. услуга
            </span>
            <span className="font-bold text-[16px]">
              Аренда с водителем - 1 200 ₽
            </span>
          </div> */}
					<div>
						<span className="opacity-40 font-medium text-[16px] mr-[15%]">Стоимость аренды</span>
						<span className={`font-bold text-[16px] ${isMobile ? "flex pb-2" : ""}`}>{props.defaultPrice} / сут</span>
					</div>
				</div>
				{/*  */}
			</div>
		</div>
	);
}

export default function BookingHistory() {
	const clientId = localStorage.getItem("nepeshkom_cliendId");
	const [loaded, setLoaded] = useState(false);
	const isMobile = useMobile(840);

	const [bookingHistoryParams, setBookingHistoryParams] = useState<Array<BookedCarCardProps>>([]);

	const [requests, setRequests] = useFetchRequests(clientId, setLoaded);

	useEffect(() => {
		(async () => {
			const promiseParams = requests.map(async (req, index) => {
				return await parseRequest(req, index);
			});
			const parsedParams = await Promise.all(promiseParams);
			setBookingHistoryParams(() => parsedParams);
		})();
	}, [requests]);

	async function parseRequest(req: Request, index: number): Promise<BookedCarCardProps> {
		let autoResponse = await getAutoById(req.AutoId);
		let result: BookedCarCardProps = {
			markaModel: "",
			year: 0,
			transmission: "",
			v3: "",
			startDate: "",
			endDate: "",
			sum: 0,
			defaultPrice: 0,
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
		if (autoResponse?.ItemID) {
			result.markaModel = autoResponse.MarkaModelString;
			result.year = autoResponse.AutoYearSt;
			result.transmission = autoResponse.ModInfoTransmission;
			result.v3 = autoResponse.ModInfoV3;
			result.startDate = req.RentFromTime;
			result.endDate = req.RentToTime;
			result.sum = req.RentSum;
			result.imgUrl = autoResponse?.Files?.[0];
			result.numberId = index + 1;
			result.defaultPrice = autoResponse.DefaultPrice;
		}
		return result;
	}

	return (
		<Section header="">
			<div className={`${isMobile ? "" : "flex flex-wrap flex-row"} gap-[20px] h-full align-top w-full`}>
				{/* options */}

				<Options isMobile={isMobile} />
				<div className="grow">
					<h1 className=" text-white text-4xl font-bold mb-7 w-full">
						Все заявки {""}
						<span className="opacity-40">({bookingHistoryParams.length})</span>
					</h1>
					<div className="grid auto-rows-max gap-7 ">
						{bookingHistoryParams.map((param) => {
							if (param.startDate !== "")
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
										defaultPrice={param.defaultPrice}
									/>
								);
						})}
					</div>
				</div>
			</div>
		</Section>
	);
}
