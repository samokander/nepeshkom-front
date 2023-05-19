import { AppState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import useFetchContacts from "./hooks/useFetchContacts";
import TelegramIcon from "./icons/TelegramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

export default function Footer() {
	const contacts = useSelector((state: AppState) => state.contacts);

	useFetchContacts();

	return (
		<footer className="bg-darkgray border border-slightblack border-b-transparent rounded-t-3xl px-8 py-6 text-white">
			<div className="flex flex-row items-center justify-between mb-7">
				<Image src="Logo SVG.svg" alt="Nepeshkom logo" height={46} width={115} className="mr-8" />
				<nav className="flex justify-between flex-row w-8/12">
					<Link href="/cars">Автопарк</Link>
					<Link href="/terms">Условия аренды</Link>
					<Link href="/services">Услуги</Link>
					<Link href="/about">О компании</Link>
					<Link href="/contacts">Контакты</Link>
				</nav>
			</div>
			<div className="h-0.5 bg-background02 mb-7"></div>
			<div className="grid grid-cols-3">
				<div className="col-span-1 flex flex-col">
					<address className="not-italic col-span-1 row-span-1">
						<p>
							<span className="text-superdarkgray mb-1">Адрес</span> <br />
							{contacts?.shortAddress}
							<br />
						</p>
					</address>
					<div className="flex">
						<address className="not-italic  mr-10">
							<span className="text-superdarkgray mb-1 col-span-1 row-span-1">Телефон</span> <br />
							{contacts?.phoneNumber}
						</address>
						<div className="flex flex-row flex-start gap-5">
							<TelegramIcon />
							<WhatsappIcon />
						</div>
					</div>
				</div>
				<div className="col-span-1 flex flex-col">
					<span className="text-superdarkgray mb-1">Режим работы</span>
					<time>{contacts?.workingMode}</time>
				</div>
				<div className="text-superdarkgray flex flex-col">
					<Link className="mb-3" href="/policy">
						Политика конфиденциальности
					</Link>
					<Link className="mb-3" href="/oferta">
						Публичная оферта
					</Link>
					<p>Техническая поддержка:</p>
					<address>{contacts?.technicalSupport}</address>
				</div>
			</div>
		</footer>
	);
}
