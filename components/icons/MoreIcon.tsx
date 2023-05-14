import Image from "next/image";
import React from "react";

export default function MoreIcon(props: {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	function handleSwitch() {
		props.setVisible((prev) => !prev);
	}

	return (
		<div className="flex justify-center items-center rounded-xl h-12 w-12 hover:cursor-pointer" onClick={handleSwitch}>
			<Image src={`${props.visible ? "icons/Close.svg" : "icons/Plus.svg"}`} alt="more icon" width={42} height={42} />
		</div>
	);
}
