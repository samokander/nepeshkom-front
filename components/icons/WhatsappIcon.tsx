import Image from "next/image";

export default function WhatsappIcon() {
	return (
		<div className="bg-white rounded-xl w-12 h-12 flex justify-center items-center hover:cursor-pointer">
			<Image src="/icons/WhatsApp.svg" alt="whatsapp icon" width={21} height={21} />
		</div>
	);
}
