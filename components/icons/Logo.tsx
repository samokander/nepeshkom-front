import Image from "next/image";
import Link from "next/link";

export default function Logo(props: { w: number; h: number }) {
	return (
		<Link href="/">
			<Image src="Logo SVG.svg" alt="Nepeshkom logo" height={props.h} width={props.w} className="mr-8" />
		</Link>
	);
}
