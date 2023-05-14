import XImage from "@/@types/XImage";
import Image from "next/image";

type SlideLineProps = {
  urls: XImage[];
  _displayedSlides: number;
  _setDisplayedSlides: React.Dispatch<
    React.SetStateAction<number>
  >;
  _index: number;
};

export default function SlideLine({
  urls,
  _displayedSlides,
  _setDisplayedSlides,
  _index,
}: SlideLineProps) {
  const slideLineLength = 4;

  // const slides = srcs.map((slide, id) => {
  //   if (id) {

  //   }
  //   <div
  //     className={`row-start-4 col-start-${
  //       id + 1
  //     } cursor-pointer`}
  //     id={`${id + slide.text}`}
  //   >
  //     <Image
  //       className="rounded-[16px]"
  //       width={180}
  //       height={116}
  //       src={slide.src}
  //       alt=""
  //     />
  //   </div>;
  // });

  const displayedSrcs = Array(slideLineLength).fill(0);

  for (
    let i = _displayedSlides - 4;
    i < _displayedSlides;
    i++
  ) {
    displayedSrcs[i] = urls[i];
  }

  const slides = displayedSrcs.map((slide, id) => {
    return (
      <div
        className={
          id === _index
            ? "row-start-4 cursor-pointer"
            : "row-start-4 cursor-pointer bg-background opacity-20"
        }
        key={`${id + slide?.url}`}
      >
        <Image
          className="rounded-[16px]"
          width={180}
          height={116}
          src={slide?.url}
          alt=""
        />
      </div>
    );
  });

  return <>{slides}</>;
}
