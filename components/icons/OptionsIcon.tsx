import Image from "next/image";
import React, { useState } from "react";

export default function OptionsIcon(props: { setShowOptions: React.Dispatch<React.SetStateAction<boolean>> }) {
	function handleSwitch() {
		props.setShowOptions((prev) => !prev);
	}

	return (
		<div className="flex justify-center items-center rounded-xl h-12 w-12" onClick={handleSwitch}>
			<Image src="icons/Options.svg" alt="telegram icon" width={21} height={21} />
		</div>
	);
}
