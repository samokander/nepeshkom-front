import Image from "next/image";

type MainSlideProps = {
  leftClick: React.MouseEventHandler<HTMLDivElement>;
  rightClick: React.MouseEventHandler<HTMLDivElement>;
  _index: number;
  //_setIndex: React.Dispatch<React.SetStateAction<number>>;
  srcs: Array<{ src: string; text: string }>;
};

export default function MainSlide({
  leftClick,
  rightClick,
  _index,
  //_setIndex,
  srcs,
}: MainSlideProps) {
  return (
    <div className="relative row-span-3 col-span-4 row-start-1 col-start-1 max-w-[780px] ">
      <div>
        <Image
          id="selected_image"
          className="selected_image select-none"
          width={780}
          height={440}
          src={srcs[_index].src}
          alt=""
        />
      </div>

      <div className="absolute flex flex-row justify-between transform -translate-y-1/2 top-[50%] mx-[10px] w-[97%]">
        {/* left arrow */}
        <div
          className="cursor-pointer flex rounded-full bg-white w-[32px] h-[32px] "
          onClick={leftClick}
        >
          <Image
            className="ml-[10px] my-auto select-none"
            src="/icons/arrowLeft.svg"
            alt=""
            width={10}
            height={10}
          />
        </div>
        {/* right arrow */}
        <div
          className="cursor-pointer flex rounded-full bg-white w-[32px] h-[32px]"
          onClick={rightClick}
        >
          <Image
            className="ml-[10px] my-auto select-none"
            src="/icons/arrowRight.svg"
            alt=""
            width={10}
            height={10}
          />
        </div>
      </div>
      <div className="absolute w-[48px] h-[23px] px-[10px] py-[2px] transform left-[46%] -translate-y-[-375px] top-[5%] rounded-[30px] bg-white">
        <span className=" text-center text-primary text-[16px] font-semibold static select-none">
          {`${_index + 1}/${srcs.length}`}
        </span>
      </div>
    </div>
  );
}
