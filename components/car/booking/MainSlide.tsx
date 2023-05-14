import XImage from "@/@types/XImage";
import Image from "next/image";

type MainSlideProps = {
  leftClick: React.MouseEventHandler<HTMLDivElement>;
  rightClick: React.MouseEventHandler<HTMLDivElement>;
  _index: number;
  //_setIndex: React.Dispatch<React.SetStateAction<number>>;
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
    <div className="relative row-span-3 col-span-4 row-start-1 col-start-1 max-w-[780px] inline-block w-auto">
      <div>
        <Image
          id="selected_image"
          className="selected_image select-none"
          width={780}
          height={440}
          src={urls[_index]?.url}
          alt=""
        />
        <div
          className="cursor-pointer absolute flex rounded-full bg-white w-[32px] h-[32px] transform -translate-y-1/2 top-[50%] right-[95%]"
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

        <div
          className="cursor-pointer absolute flex rounded-full bg-white w-[32px] h-[32px] transform -translate-y-1/2 top-[50%] right-[1%]"
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
        <div className="absolute w-[48px] h-[23px] px-[10px] py-[2px] transform left-[46%] -translate-y-[-375px] top-[5%] rounded-[30px] bg-white">
          <span className=" text-center text-primary text-[16px] font-semibold static select-none">
            {`${_index + 1}/${urls?.length}`}
          </span>
        </div>
      </div>
    </div>
  );
}
