import Image from "next/image";
import Section from "../components/Section";
import Layout from "@/components/Layout";
import cal from "../public/icons/calendar.svg";
import arrdwn from "../public/icons/arrowDown.svg";
import clock from "../public/icons/clock.svg";
import { useState } from "react";

export default function Booking() {
	const [index, setIndex] = useState(0);

	function handleLeftClick() {
		if (index > 0) {
			setIndex((prev) => prev - 1);
			console.log(index);
		} else if (index === 0) {
			setIndex(srcs.length - 1);
			console.log(index);
		}
	}

	function handleRightClick() {
		if (index < srcs.length - 1) {
			setIndex((prev) => prev + 1);
			console.log(index);
		} else if (index === srcs.length - 1) {
			setIndex(0);
			console.log(index);
		}
	}

	const header = (
		<h1>
			<span className="text-white">Kia K5</span>
		</h1>
	);

	const srcs = [
		{
			src: "/static/Kia K5/F.webp",
			text: "f",
		},
		{
			src: "/static/Kia K5/B.webp",
			text: "b",
		},
		{
			src: "/static/Kia K5/L.webp",
			text: "l",
		},
		{
			src: "/static/Kia K5/R.webp",
			text: "r",
		},
		{
			src: "/static/Kia K5/RB.webp",
			text: "rb",
		},
		{
			src: "/static/Kia K5/LB.webp",
			text: "lb",
		},
		{
			src: "/static/Kia K5/LF.webp",
			text: "lf",
		},
		{
			src: "/static/Kia K5/RF.webp",
			text: "rf",
		},
	];

	return (
		<Layout>
			<Section header={header} slogan="">
				<div className="">
					<div className="grid grid-cols-6 grid-rows-4 gap-[20px]">
						<div className="relative row-span-3 col-span-4 row-start-1 col-start-1 max-w-[780px] ">
							<Image id="selected_image" className="rounded-[20px]" width={780} height={440} src={srcs[index].src} alt="" />
							<div className="absolute flex flex-row justify-between transform -translate-y-1/2 top-[50%] mx-[10px] w-[97%]">
								{/* left arrow */}
								<div className="cursor-pointer flex rounded-full bg-white w-[32px] h-[32px] " onClick={handleLeftClick}>
									<Image className="ml-[10px] my-auto " src="/icons/arrowLeft.svg" alt="" width={10} height={10} />
								</div>
								{/* right arrow */}
								<div className="cursor-pointer flex rounded-full bg-white w-[32px] h-[32px]" onClick={handleRightClick}>
									<Image className="ml-[10px] my-auto " src="/icons/arrowRight.svg" alt="" width={10} height={10} />
								</div>
							</div>
							<div className="absolute w-[48px] h-[23px] px-[10px] py-[2px] transform left-[46%] -translate-y-[-375px] top-[5%] rounded-[30px] bg-white">
								<span className=" text-center text-primary text-[16px] font-semibold static">{`${index + 1}/8`}</span>
							</div>
						</div>

						<div className="row-start-4 col-start-1">
							<Image className="rounded-[16px]" width={180} height={116} src="/static/Kia K5/B.webp" alt="" />
						</div>

						<div className="row-start-4 col-start-2">
							<Image className="rounded-[16px]" width={180} height={116} src="/static/Kia K5/RB.webp" alt="" />
						</div>

						<div className="row-start-4 col-start-3">
							<Image className="rounded-[16px]" width={180} height={116} src="/static/Kia K5/LB.webp" alt="" />
						</div>

						<div className="row-start-4 col-start-4">
							<Image className="rounded-[16px]" width={180} height={116} src="/static/Kia K5/LF.webp" alt="" />
						</div>

						{/* ОПЦИИ */}
						<div
							className="flex flex-col content-between col-start-5 row-span-4 col-span-2 
							rounded-[16px] items-stretch p-[20px] bg-darkgray w-[380px] h-min
							border-[1px] border-superlightgary">
							<h3 className="mb-[10px] font-bold text-[30px] text-white">Период аренды</h3>
							<span className="mb-[20px] font-semibold text-[16px] text-white opacity-50">Кол-во дней: 2</span>

							{/* ВЫБОР ДАТЫ */}

							<div
								className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]">
								<span className="text-sblack font-medium w-[164px] h-[24px] text-[16px]">Дата начала аренды</span>
								<button>
									<Image width={23} height={23} src={cal} alt="" />
								</button>

								<div className="w-[1px] h-[50px] bg-superdarkgray"></div>
								<div className="">
									<button
										className="relative block w-[84px] text-left bg-white border-none h-[24px] 
										font-raleway font-medium text-[16px] cursor-pointer 
									  ">
										{"sss"}
										<Image
											className="absolute top-[50%] right-[5px] translate-y-[-50%] w-[10.5] h-[6.25]"
											width={10.5}
											height={6.25}
											src={arrdwn}
											alt=""
										/>
									</button>
								</div>
							</div>

							<div
								className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] 
								bg-white border-[1px] rounded-[12px] mb-[20px]">
								<span className="text-sblack font-medium w-[164px] h-[24px] text-[16px]">Дата конца аренды</span>
								<button>
									<Image width={23} height={23} src={cal} alt="" />
								</button>

								<div className="w-[1px] h-[50px] bg-superdarkgray"></div>

								<div className="">
									<button
										className="relative block w-[84px] text-left bg-white border-none h-[24px] 
										font-raleway font-medium text-[16px] cursor-pointer 
									  ">
										{"sss"}
										<Image className="absolute top-[50%] right-[5px] translate-y-[-50%]" width={10.5} height={6.25} src={arrdwn} alt="" />
									</button>
								</div>
							</div>
							{/* ПЕРЕКЛЮЧАТЕЛЬ 1 */}
							<div className="flex flex-row items-center mb-[21px]">
								<label className="switch">
									<input type="checkbox"></input>
									<span className="slider"></span>
								</label>
								<p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">Доставка до аэропорта - 1500 ₽</p>
							</div>
							{/* ПЕРЕКЛЮЧАТЕЛЬ 2 */}
							<div className="flex flex-row items-center mb-[90px]">
								<label className="switch">
									<input type="checkbox"></input>
									<span className="slider"></span>
								</label>
								<p className="ml-[22px] font-semibold text-[16px] text-white opacity-50">Доставка по городу - 750 ₽</p>
							</div>
							{/* FOOTER */}
							<div className="flex flex-row items-center mb-[12.5px]">
								<span className="flex flex-row items-center font-semibold text-[16px] text-white opacity-50">
									<Image className="mr-[14px]" width={16} height={20} src={clock} alt="" />
									Оформление за 5 минут
								</span>
							</div>
							<h1 className="font-bold text-[40px] tracking-[0.01em] text-white mb-[20px] p-0">4 490 ₽/сут.</h1>
							<button className="w-[340px] h-[52px] min-h-[52px] bg-primary rounded-[14px] font-bold text-[16px] text-white">Забронировать</button>
						</div>
					</div>
				</div>
			</Section>
		</Layout>
	);
}
