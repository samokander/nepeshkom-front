import React, { useState } from "react";
import isMobile from "./hooks/useMobile";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";

export default function Layout(props: React.PropsWithChildren) {
	return (
		<>{isMobile() ? <MobileLayout>{props.children}</MobileLayout> : <DesktopLayout>{props.children}</DesktopLayout>}</>
	);
}
