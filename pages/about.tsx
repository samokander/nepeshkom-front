import TeamMember from "@/components/about/TeamMember";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
	const header1 = <h1>О компании</h1>;

	return (
		<Layout>
			<Section header={header1} slogan={""}>
				<div className="w-full h-[440px] relative bg-tint mb-16 rounded-2xl border border-halfblack">
					<Image
						src="/static/about1.jpg"
						alt="cars"
						fill
						style={{
							borderRadius: "16px",
							objectFit: "cover",
							border: "1px solid rgb(255,255,255,0.25)",
							zIndex: -1,
						}}
					/>
				</div>

				<div className="mb-16">
					<h2 className="text-5xl mb-10 font-bold text-white">
						NEPESHKOM — компания по аренде автомобилей с самыми лучшими условиями
					</h2>
					<div className="flex flex-row h-[176px] gap-5">
						<div className="aspect-square h-full rounded-3xl flex flex-col justify-between p-5 bg-darkgray text-white">
							<h1 className="font-bold text-5xl mb-11">10</h1>
							<p>
								лет опыта <br /> работы
							</p>
						</div>
						<div className="aspect-square h-full rounded-3xl flex flex-col justify-between p-5 bg-primary text-white">
							<h1 className="font-bold text-5xl mb-11">24</h1>
							<p>профессионала в команде</p>
						</div>
						<div className="aspect-square h-full rounded-3xl flex flex-col justify-between p-5 bg-white">
							<h1 className="font-bold text-5xl mb-11">400+</h1>
							<p>довольных клиентов</p>
						</div>
						<p className="text-halfblack font-medium">
							Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей. По многочисленным запросам наших
							постоянных клиентов о комплексном уходе за интерьером и экстерьером их автомобилей, мы открыли свою
							собственную детейлинг-студиюА еще наша детейлинг студия предоставляет услуги МАЛЯРНОГО-КУЗОВНОГО ЦЕХА!
							Локальная покраска за короткие сроки, покраска элементов в камере и выправления вмятин без покраски!
						</p>
					</div>
				</div>
				<h2 className="text-5xl mb-10 font-bold text-white">Мы больше чем просто прокат</h2>
				<div className="flex flex-col mb-16">
					<div className="flex flex-row gap-5 mb-16">
						<div className="h-[300px] w-[580px] flex flex-row gap-5">
							<div className="w-[280px] h-[300px] relative bg-tint rounded-2xl border border-halfblack">
								<Image
									src="/static/about2.jpg"
									alt=""
									fill
									style={{
										borderRadius: "16px",
										objectFit: "cover",
										border: "1px solid rgb(255,255,255,0.25)",
										zIndex: -1,
									}}
								/>
							</div>

							<p className="text-halfblack w-[280px] font-medium text-xl">
								Компания #НЕПЕШКОМ предоставляет аренду авто с профессиональным водителем. Это очень удобно для людей,не
								имеющих водительского удостоверения.
							</p>
						</div>
						<div className="w-[580px] h-[480px] relative bg-tint rounded-2xl border border-halfblack">
							<Image
								src="/static/about3.jpg"
								alt=""
								fill
								style={{
									borderRadius: "16px",
									objectFit: "cover",
									border: "1px solid rgb(255,255,255,0.25)",
									zIndex: -1,
								}}
							/>
						</div>
					</div>
					<div className="w-[980px]">
						<h2 className="text-3xl font-bold text-white ml-[300px]">Прокат автомобиля с водителем</h2>
						<h2 className="text-3xl mb-10 font-bold text-white">
							позволяет расслабиться после тяжелого трудового <br /> дня и насладиться дорогой домой.
						</h2>
						<div className="flex justify-end gap-5">
							<div className="w-[280px] h-[300px] relative bg-tint rounded-2xl border border-halfblack">
								<Image
									src="/static/about4.jpg"
									alt=""
									fill
									style={{
										borderRadius: "16px",
										objectFit: "cover",
										border: "1px solid rgb(255,255,255,0.25)",
										zIndex: -1,
									}}
								/>
							</div>

							<p className="text-halfblack w-[370px] font-medium text-xl">
								Прокат автомобиля с водителем – это очень удобно и безопасно. Вы всегда будете знать, что сможете уехать
								домой в каком бы состояниини были. Ведь таксисты не всегда соглашаются брать захмелевшего клиента.
							</p>
						</div>
					</div>
				</div>
				<h2 className="text-5xl mb-10 font-bold text-white">Наша команда</h2>
				<div className="gap-5 flex-row flex mb-16">
					<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
					<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
					<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
					<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
				</div>
				<div className="w-full border border-halfblack bg-darkgray p-8 flex flex-row gap-5 rounded-2xl">
					<p className="w-[550px] text-halfblack font-medium text-xl">
						Компания #НЕПЕШКОМ предоставляет аренду авто с профессиональным водителем. Это очень удобно для людей, не
						имеющих водительского удостоверения. Часто услугой пользуются бизнесмены, которые ценят каждую минуту
						времени и даже во время поездки занимаются делами.
						<br /> <br /> Прокат автомобиля с водителем позволяет расслабиться после тяжелого трудового дня и
						насладиться дорогой домой. Услуга подойдет также тем, кто собирается на мероприятие, где планируется
						распитие спиртных напитков. Прокат автомобиля с водителем – это очень удобно и безопасно. Вы всегда будете
						знать, что сможете уехать домой в каком бы состоянии ни были. Ведь таксисты не всегда соглашаются брать
						захмелевшего клиента.
					</p>
					<div className="w-[550px] h-[448px] relative bg-tint rounded-2xl border border-halfblack z-10">
						<Image
							src="/static/about5.jpg"
							alt=""
							fill
							style={{
								borderRadius: "16px",
								objectFit: "cover",
								zIndex: -1,
								filter: "brightness(75%)",
							}}
						/>
					</div>
				</div>
			</Section>
		</Layout>
	);
}
