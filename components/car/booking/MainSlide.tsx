import XImage from "@/@types/XImage";
import Image from "next/image";

type MainSlideProps = {
	leftClick: React.MouseEventHandler<HTMLDivElement>;
	rightClick: React.MouseEventHandler<HTMLDivElement>;
	_index: number;
	urls: XImage[];
};

export default function MainSlide({
	leftClick,
	rightClick,
	_index,
	//_setIndex,
	urls,
}: MainSlideProps) {
	return (
		<div className="aspect-[3/2] border relative">
			<Image
				id="selected_image"
				className="selected_image select-none"
				fill
				src={urls[_index]?.url}
				alt=""
				style={{ objectFit: "cover", borderRadius: "24px", zIndex: "-1" }}
			/>
			<div
				className="cursor-pointer absolute flex rounded-full justify-center items-center bg-white w-8 h-8 top-1/2 left-2"
				onClick={leftClick}>
				<Image src="/icons/arrowLeft.svg" alt="" width={10} height={10} />
			</div>
			<div
				className="cursor-pointer absolute flex rounded-full justify-center items-center bg-white w-8 h-8 top-[50%] right-2"
				onClick={rightClick}>
				<Image src="/icons/arrowRight.svg" alt="" width={10} height={10} />
			</div>
			<div className="absolute w-12 h-6 px-[10px] left-[46%] bottom-4 rounded-[30px] bg-white">
				<span className=" text-center text-primary text-[16px] font-semibold select-none">
					{`${_index + 1}/${urls?.length}`}
				</span>
			</div>
		</div>
	);
}
