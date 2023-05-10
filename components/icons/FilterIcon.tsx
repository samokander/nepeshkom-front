import Image from "next/image";
import React from "react";

export default function FilterIcon(props: {
	showFilter: boolean;
	setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	function handleSwitch() {
		props.setShowFilter((prev) => !prev);
	}

	return (
		<div
			className="bg-white flex justify-center items-center rounded-xl h-12 w-12 hover:cursor-pointer"
			onClick={handleSwitch}>
			<Image
				src={`${props.showFilter ? "icons/FilterOff.svg" : "icons/FilterOn.svg"}`}
				alt="telegram icon"
				width={21}
				height={21}
			/>
		</div>
	);
}
