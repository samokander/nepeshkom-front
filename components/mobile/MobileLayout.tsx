import React from "react";
import FooterM from "./FooterM";
import HeaderM from "./HeaderM";

export default function MobileLayout(props: React.PropsWithChildren) {
	return (
		<div className="lining-nums proportional-nums mx-3">
			<HeaderM />
			<main>{props.children}</main>
			<FooterM />
		</div>
	);
}
