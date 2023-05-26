import React from "react";
import Footer from "../Footer";
import HeaderM from "./HeaderM";

export default function MobileLayout(props: React.PropsWithChildren) {
	return (
		<div className="lining-nums proportional-nums mx-3">
			<HeaderM />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
}
