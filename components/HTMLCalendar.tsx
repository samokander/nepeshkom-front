import { useState } from "react";

type CalendarProps = {
	date: number;
	setDate: React.Dispatch<React.SetStateAction<number>>;
};

export default function HTMLCalendar(props: CalendarProps) {
	return (
		<input
			type="date"
			value={props.date}
			onChange={(e) => props.setDate(e.target.valueAsNumber)}
			className="rounded-xl px-5 h-12 w-[250px]"
		/>
	);
}
