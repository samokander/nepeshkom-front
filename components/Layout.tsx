import React, { useEffect, useState } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";
import useMobile from "./hooks/useMobile";

export default function Layout(props: React.PropsWithChildren) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	const isMobile = useMobile(840);

	return (
		<>
			{isMobile && loaded ? (
				<MobileLayout>{props.children}</MobileLayout>
			) : (
				<DesktopLayout>{props.children}</DesktopLayout>
			)}
		</>
	);
}
