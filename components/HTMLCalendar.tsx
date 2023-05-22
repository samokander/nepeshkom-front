import { useState } from "react";

type CalendarProps = {
	date: string;
	setDate: React.Dispatch<React.SetStateAction<string>>;
};

export default function HTMLCalendar(props: CalendarProps) {
	return (
		<input
			type="date"
			value={props.date}
			onChange={(e) => props.setDate(e.target.value)}
			className="rounded-xl px-5 h-12 w-[250px]"
		/>
	);
}
