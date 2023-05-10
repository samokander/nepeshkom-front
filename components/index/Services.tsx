import InfoCard from "./InfoCard";
import Section from "../Section";
import RentWithDriver from "../../public/RentWithDriver.png";
import BasicRent from "../../public/BasicRent.png";
import Transfer from "../../public/Transfer.png";
import PhotoshootRent from "../../public/PhotoshootRent.png";

export default function Services() {
	const header = <h2>Услуги</h2>;
	const slogan = "Сотрудничая с нами, Вы повышаете качество и ценность своей собственности";
	return (
		<Section header={header} slogan={slogan}>
			<div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col gap-5 lg:w-full">
				<InfoCard header="Аренда с водителем" desc={slogan} imgSrc={RentWithDriver} dst="/" />
				<InfoCard header="Аренда без водителя" desc={slogan} imgSrc={BasicRent} dst="/" />
				<InfoCard header="Трансфер" desc={slogan} imgSrc={Transfer} dst="/" />
				<InfoCard header="Авто для фотосессии" desc={slogan} imgSrc={PhotoshootRent} dst="/" />
			</div>
		</Section>
	);
}
