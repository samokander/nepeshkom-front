import Image from "next/image";
import Section from "../Section";

export default function About() {
	const header = <h2>О компании</h2>;

	return (
		<Section header={header} slogan="">
			<div className="lg:grid grid-cols-2 grid-rows-3 gap-5 flex flex-col">
				<div className="row-span-1">
					<p className="text-halfblack text-base">
						Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей. По многочисленным запросам наших
						постоянных клиентов о комплексном уходе за интерьером и экстерьером их автомобилей, мы открыли свою
						собственную детейлинг-студию <br /> <br /> А еще наша детейлинг студия предоставляет услуги
						МАЛЯРНОГО-КУЗОВНОГО ЦЕХА! Локальная покраска за короткие сроки, покраска элементов в камере и выправления
						вмятин без покраски!
					</p>
				</div>
				<div className="rounded-3xl place-self-stretch row-span-2 aspect-auto col-start-2 row-start-1 relative">
					<Image src="/static/index_about1.jpg" alt="" fill style={{ objectFit: "cover", borderRadius: "24px" }} />
				</div>
				<div className="place-self-stretch grid lg:grid-cols-3 grid-cols-2 text-white gap-5">
					<div className="place-self-stretch rounded-3xl flex flex-col justify-between p-5 bg-darkgray">
						<h1 className="font-bold text-5xl mb-11">10</h1>
						<p>
							лет опыта <br /> работы
						</p>
					</div>
					<div className="place-self-stretch rounded-3xl flex flex-col justify-between p-5 bg-primary">
						<h1 className="font-bold text-5xl mb-11">24</h1>
						<p>профессионала в команде</p>
					</div>
					<div className="place-self-stretch col-span-full lg:col-span-1 rounded-3xl flex flex-col justify-between p-5 bg-darkgray">
						<h1 className="font-bold text-5xl mb-11">400+</h1>
						<p>профессионала в команде</p>
					</div>
				</div>
				<div className="rounded-3xl place-self-stretch row-span-2 bg-gray aspect-auto col-start-1 row-start-2 relative">
					<Image src="/static/index_about2.jpg" alt="" fill style={{ objectFit: "cover", borderRadius: "24px" }} />
				</div>
			</div>
		</Section>
	);
}
