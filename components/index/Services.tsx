import InfoCard from "./InfoCard";
import Section from "../Section";
import RentWithDriver from "../../public/static/services1.webp";
import BasicRent from "../../public/static/services2.webp";
import Transfer from "../../public/static/services3.webp";
import PhotoshootRent from "../../public/static/services4.webp";

export default function Services() {
	const header = <h2>Услуги</h2>;
	const slogan = "Сотрудничая с нами, Вы повышаете качество и ценность своей собственности";
	return (
		<Section header={header} slogan={slogan}>
			<div className="md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-5 md:w-full">
				<InfoCard header="Аренда с водителем" desc={slogan} imgSrc={RentWithDriver} dst="/" />
				<InfoCard header="Аренда без водителя" desc={slogan} imgSrc={BasicRent} dst="/" />
				<InfoCard header="Трансфер" desc={slogan} imgSrc={Transfer} dst="/" />
				<InfoCard header="Авто для фотосессии" desc={slogan} imgSrc={PhotoshootRent} dst="/" />
			</div>
		</Section>
	);
}
