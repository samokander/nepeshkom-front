import Image from "next/image";
import Section from "../Section";

function Test() {
	const header = (
		<h1>
			<span className="text-white">Kia K5</span>
		</h1>
	);

	return (
		<Section header={header} slogan="">
			<div>
				<div className="grid grid-cols-6 grid-rows-4 gap-[20px] ">
					<div className="row-span-3 col-span-4 row-start-1 col-start-1">
						<img />
					</div>
					<div className="row-start-4 col-start-1">
						<img />
					</div>
					<div className="row-start-4 col-start-2">
						<img />
					</div>
					<div className="row-start-4 col-start-3">
						<img />
					</div>
					<div className="row-start-4 col-start-4">
						<img />
					</div>
					<div className="flex flex-col content-between col-start-5 row-span-4 col-span-2 rounded-[16px] items-stretch p-[20px]">
						<h3 className="mb-[10px]">Период аренды</h3>
						<span className="mb-[20px]">Кол-во дней: 2</span>
						<div className="flex flex-row items-center p-[14px] gap-[14px] isolate w-[340px] h-[52px] bg-white border-[1px] rounded-[12px]">
							<span className="text-sblack font-medium mx-[14px] w-[164px] h-[24px] text-[16px]">Дата начала аренды</span>
							<Image className="absolute" src="calendar.svg" alt="" />
							<hr className="w-[1px] h-[50px]" />
							<div className="">
								<button className="relative block w-[84px] text-center bg-white border-none h-[24px] font-raleway font-medium text-[16px]"></button>
								<select>
									<option value="12:00">12:00</option>
									<option value="13:00">13:00</option>
									<option value="15:00">15:00</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Test;
