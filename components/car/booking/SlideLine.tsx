import XImage from "@/@types/XImage";
import Image from "next/image";

type SlideLineProps = {
	urls: XImage[];
	_displayedSlides: number;
	_setDisplayedSlides: React.Dispatch<React.SetStateAction<number>>;
	_index: number;
};

export default function SlideLine({ urls, _displayedSlides, _setDisplayedSlides, _index }: SlideLineProps) {
	const slideLineLength = 4;

	const displayedSrcs = Array(slideLineLength).fill(0);

	for (let i = _displayedSlides - 4; i < _displayedSlides; i++) {
		displayedSrcs[i] = urls[i];
	}

	const slides = displayedSrcs.map((slide, id) => {
		return (
			<div
				className={`relative cursor-pointer aspect-[3/2] w-full border-primary border ${
					id === _index && "bg-background opacity-20"
				}`}
				key={`${id + slide?.url}`}>
				<Image
					className="rounded-[16px]"
					fill
					src={slide?.url}
					alt=""
					style={{ objectFit: "cover", borderRadius: "24px", zIndex: "-1" }}
				/>
			</div>
		);
	});

	return <div className="flex flex-row justify-between w-full border h-[15vw] max-h-[120px] gap-5 mt-5">{slides}</div>;
}
