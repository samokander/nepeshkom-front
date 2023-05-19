import Section from "../Section";
import { YMaps, Map, Placemark, FullscreenControl } from "@pbe/react-yandex-maps";
import useFetchContacts from "../hooks/useFetchContacts";
import { AppState } from "@/store/store";
import { useSelector } from "react-redux";
import WhatsappIcon from "../icons/WhatsappIcon";
import TelegramIcon from "../icons/TelegramIcon";

export default function ContactInfo() {
	const contacts = useSelector((state: AppState) => state.contacts);
	useFetchContacts();
	const header = <h1>Контакты</h1>;
	return (
		<Section header={header} slogan={""}>
			<div className="grid grid-cols-8 grid-rows-2 w-full bg-darkgray p-6 rounded-3xl mb-10">
				<div className="col-span-5 row-span-2 flex flex-col justify-between">
					<div className="mb-5">
						<p className="text-superdarkgray mb-2">Адрес</p>
						<address className="not-italic text-white text-2xl font-semibold">{contacts?.address}</address>
					</div>
					<div className="mb-5">
						<p className="text-superdarkgray mb-2">Режим работы</p>
						<p className="not-italic text-white text-2xl font-semibold">{contacts?.workingMode}</p>
					</div>
					<div className="mb-5">
						<p className="text-superdarkgray mb-2">Телефон</p>
						<p className="text-white text-2xl font-semibold">{contacts?.phoneNumber}</p>
					</div>
					<div className="mb-5">
						<p className="text-superdarkgray">Email</p>
						<address className="not-italic text-white text-2xl font-semibold">{contacts?.technicalSupport}</address>
					</div>
				</div>
				<div className="col-span-3 row-span-1 flex flex-col text-superdarkgray place-self-stretch">
					<a className="mb-3">Политика конфиденциальности</a>
					<a className="mb-3">Пользовательское соглашение</a>
					<div className="flex flex-row gap-5">
						<WhatsappIcon />
						<TelegramIcon />
					</div>
				</div>
				<div className="col-span-3 row-span-1 w-full place-self-end flex flex-row">
					<p className="text-superdarkgray">Техническая поддержка: support.mail@ru</p>
				</div>
			</div>
			<YMaps>
				<div className="rounded-2xl w-full">
					<Map
						defaultState={{ center: [56.503693309819965, 84.95313794838682], zoom: 17 }}
						className="w-[1180px] h-[600px] rounded-3xl">
						<Placemark defaultGeometry={[56.50353749103979, 84.95458143982566]} />
						<FullscreenControl />
					</Map>
				</div>
			</YMaps>
		</Section>
	);
}
