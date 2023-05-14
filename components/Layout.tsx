import React, { useEffect, useState } from "react";
import isMobile from "./hooks/useMobile";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";

export default function Layout(props: React.PropsWithChildren) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<>
			{isMobile() && loaded ? (
				<MobileLayout>{props.children}</MobileLayout>
			) : (
				<DesktopLayout>{props.children}</DesktopLayout>
			)}
		</>
	);
}
