import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { ru } from "date-fns/locale";
import { format, isValid, parse, isAfter, isBefore } from "date-fns";
import { DayPicker, DateRange, SelectRangeEventHandler } from "react-day-picker";
import { usePopper } from "react-popper";
import Image from "next/image";

export default function Calendar() {
	const [selectedRange, setSelectedRange] = useState<DateRange>();
	const [fromValue, setFromValue] = useState<string>("");
	const [toValue, setToValue] = useState<string>("");
	const [isPopperOpen, setIsPopperOpen] = useState(false);

	const popperRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const calendarRef = useRef<HTMLDivElement>(null);

	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

	const popper = usePopper(popperRef.current, popperElement, {
		placement: "top",
	});

	useEffect(() => {
		if (!isPopperOpen) return;
		function handleClick(e: MouseEvent) {
			if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
				closePopper();
			}
		}
		window.addEventListener("click", handleClick);
		// clean up
		return () => window.removeEventListener("click", handleClick);
	}, [isPopperOpen]);

	const closePopper = () => {
		setIsPopperOpen(false);
		buttonRef?.current?.focus();
	};

	const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFromValue(e.target.value);
		const date = parse(e.target.value, "y-MM-dd", new Date());
		if (!isValid(date)) {
			return setSelectedRange({ from: undefined, to: undefined });
		}
		if (selectedRange?.to && isAfter(date, selectedRange.to)) {
			setSelectedRange({ from: selectedRange.to, to: date });
		} else {
			setSelectedRange({ from: date, to: selectedRange?.to });
		}
	};

	const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setToValue(e.target.value);
		const date = parse(e.target.value, "y-MM-dd", new Date());

		if (!isValid(date)) {
			return setSelectedRange({ from: selectedRange?.from, to: undefined });
		}
		if (selectedRange?.from && isBefore(date, selectedRange.from)) {
			setSelectedRange({ from: date, to: selectedRange.from });
		} else {
			setSelectedRange({ from: selectedRange?.from, to: date });
		}
	};

	const handleButtonClick = () => {
		isPopperOpen ? closePopper() : setIsPopperOpen(true);
	};

	const handleRangeSelect: SelectRangeEventHandler = (range: DateRange | undefined) => {
		setSelectedRange(range);
		if (range?.from) {
			setFromValue(format(range.from, "dd-MM-y"));
		} else {
			setFromValue("");
		}
		if (range?.to) {
			setToValue(format(range.to, "dd-MM-y"));
		} else {
			setToValue("");
		}
	};

	return (
		<div ref={calendarRef}>
			<div
				ref={popperRef}
				className="w-max h-12 px-5 flex flex-row flex-nowrap justify-around items-center bg-white border border-shadeofgrey rounded-xl font-raleway">
				<input type="text" placeholder="Дата начала аренды" value={fromValue} onChange={handleFromChange} />
				<p className="mx-3"> — </p>
				<input type="text" placeholder="Дата конца аренды" value={toValue} onChange={handleToChange} />
				<a
					ref={buttonRef}
					type="button"
					className="bg-white hover:cursor-pointer"
					aria-label="Pick a date"
					onClick={handleButtonClick}>
					<Image src="icons/Сalendar.svg" alt="calendar icon" width={24} height={24} />
				</a>
			</div>
			{isPopperOpen && (
				<div>
					<div
						tabIndex={-1}
						style={popper.styles.popper}
						className="dialog-sheet z-50"
						{...popper.attributes.popper}
						ref={setPopperElement}
						role="dialog">
						<DayPicker
							initialFocus={isPopperOpen}
							mode="range"
							selected={selectedRange}
							onSelect={handleRangeSelect}
							showOutsideDays
							className="text-white font-raleway"
							locale={ru}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
