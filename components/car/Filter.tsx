import { useState } from "react";
import Button from "../Button";
import Calendar from "../Calendar";
import FilterIcon from "../icons/FilterIcon";

export default function Filter() {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<>
			<div className="h-max w-full flex flex-col relative">
				<div
					className={
						"flex flex-row justify-between w-full bg-darkgray h-24 items-center px-5" +
						(showFilter ? " rounded-t-2xl border-x border-x-halfblack border-t border-t-halfblack" : " rounded-2xl border border-halfblack")
					}>
					<div className="flex flex-row gap-5 items-center h-fit">
						<Calendar />
						<FilterIcon showFilter={showFilter} setShowFilter={setShowFilter} />
					</div>
					<Button primary>Показать</Button>
				</div>
				{showFilter && (
					<div className="flex flex-row justify-evenly absolute w-full h-24 top-full bg-darkgray  border-x border-x-halfblack border-b border-b-halfblack items-center justify-items-stretch gap-5 px-5 rounded-b-2xl">
						<select className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid">
							<option disabled selected>
								Марка
							</option>
						</select>
						<select className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid">
							<option disabled selected>
								Кузов
							</option>
						</select>
						<select className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid">
							<option disabled selected>
								Год выпуска
							</option>
						</select>
						<select className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid">
							<option disabled selected>
								Привод
							</option>
						</select>
						<select className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid">
							<option disabled selected>
								Коробка
							</option>
						</select>
						<select className="h-12 flex-grow rounded-xl px-4 border-r-transparent border-r-8 border-solid">
							<option disabled selected>
								Мощность двигателя
							</option>
						</select>
					</div>
				)}
			</div>
		</>
	);
}
