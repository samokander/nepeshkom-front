import Image from "next/image";

export default function TelegramIcon() {
	return (
		<div className="bg-white rounded-xl w-12 h-12 flex justify-center items-center hover:cursor-pointer">
			<Image src="icons/Telegram.svg" alt="telegram icon" width={21} height={21} />
		</div>
	);
}
