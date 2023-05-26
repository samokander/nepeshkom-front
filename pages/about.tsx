import TeamMember from "@/components/about/TeamMember";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
	const header1 = <h1>О компании</h1>;

	return (
		<Layout>
			<Section header={header1} slogan={""}>
				<div className="w-full h-[440px] relative bg-tint mb-16 rounded-2xl border border-halfblack flex">
					<Image
						src="/static/about1.webp"
						alt="cars"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{
							borderRadius: "16px",
							objectFit: "cover",
							border: "1px solid rgb(255,255,255,0.25)",
							zIndex: -1,
						}}
					/>
				</div>
				<div className="mb-16 flex flex-col">
					<h2 className="text-5xl mb-10 font-bold text-white">
						NEPESHKOM — компания по аренде автомобилей с самыми лучшими условиями
					</h2>
					<div className="flex flex-row min-h-[176px] gap-5 flex-wrap">
						<div className="aspect-square max-h-[165px] rounded-3xl flex flex-col justify-between p-5 bg-darkgray text-white flex-grow">
							<h1 className="font-bold text-5xl mb-11">10</h1>
							<p>лет опыта</p>
						</div>
						<div className="aspect-square max-h-[165px] rounded-3xl flex flex-col justify-between p-5 bg-primary text-white flex-grow">
							<h1 className="font-bold text-5xl mb-11">24</h1>
							<p>профессионала</p>
						</div>
						<div className="md:aspect-square max-h-[165px] rounded-3xl flex flex-col justify-between p-5 bg-white flex-grow">
							<h1 className="font-bold text-5xl mb-11">400+</h1>
							<p>клиентов</p>
						</div>
						<p className="text-halfblack font-medium min-[1110px]:max-w-xl">
							Более 10 лет мы успешно занимаемся ремонтом и обслуживанием автомобилей. По многочисленным запросам наших
							постоянных клиентов о комплексном уходе за интерьером и экстерьером их автомобилей, мы открыли свою
							собственную детейлинг-студию. А еще наша детейлинг студия предоставляет услуги МАЛЯРНОГО-КУЗОВНОГО ЦЕХА!
							Локальная покраска за короткие сроки, покраска элементов в камере и выправления вмятин без покраски!
						</p>
					</div>
				</div>
				<h2 className="text-5xl mb-10 font-bold text-white">Мы больше чем просто прокат</h2>
				<div className="flex flex-col mb-16">
					<div className="flex md:flex-row gap-5 mb-16 flex-col flex-wrap">
						<div className="h-[300px] flex flex-row gap-5 flex-grow">
							<div className="aspect-[280/300] w-1/3 relative bg-tint rounded-2xl border border-halfblack">
								<Image
									src="/static/about2.webp"
									alt=""
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
						<div className="aspect-[580/480] relative bg-tint rounded-2xl border border-halfblack flex-grow min-h-[286px] max-h-[480px]">
							<Image
								src="/static/about3.webp"
								alt=""
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								style={{
									borderRadius: "16px",
									objectFit: "cover",
									border: "1px solid rgb(255,255,255,0.25)",
									zIndex: -1,
								}}
							/>
						</div>
					</div>
					<div className="min-[980px]:w-[980px]">
						<h2 className="text-3xl font-bold text-white ml-[33%]">Прокат автомобиля с водителем</h2>
						<h2 className="text-3xl mb-10 font-bold text-white">
							позволяет расслабиться после тяжелого трудового <br /> дня и насладиться дорогой домой.
						</h2>
						<div className="flex justify-end gap-5">
							<div className="w-[280px] h-[300px] relative bg-tint rounded-2xl border border-halfblack">
								<Image
									src="/static/about4.webp"
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
								домой в каком бы состоянии ни были. Ведь таксисты не всегда соглашаются брать захмелевшего клиента.
							</p>
						</div>
					</div>
				</div>
				<h2 className="text-5xl mb-10 font-bold text-white">Наша команда</h2>
				<div className="max-w-[96.5vw] mb-10">
					<div className="overflow-x-auto flex-row flex flex-nowrap gap-5">
						<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
						<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
						<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
						<TeamMember name="Алексей Алексеевич" role="Генеральный директор" img="" />
					</div>
				</div>

				<div className="w-full border border-halfblack bg-darkgray p-8 flex flex-row gap-5 rounded-2xl max-[980px]:flex-col">
					<p className=" min-[980px]:w-1/2 text-halfblack font-medium text-xl flex-grow">
						Компания #НЕПЕШКОМ предоставляет аренду авто с профессиональным водителем. Это очень удобно для людей, не
						имеющих водительского удостоверения. Часто услугой пользуются бизнесмены, которые ценят каждую минуту
						времени и даже во время поездки занимаются делами.
						<br /> <br /> Прокат автомобиля с водителем позволяет расслабиться после тяжелого трудового дня и
						насладиться дорогой домой. Услуга подойдет также тем, кто собирается на мероприятие, где планируется
						распитие спиртных напитков. Прокат автомобиля с водителем – это очень удобно и безопасно. Вы всегда будете
						знать, что сможете уехать домой в каком бы состоянии ни были. Ведь таксисты не всегда соглашаются брать
						захмелевшего клиента.
					</p>
					<div className=" min-[980px]:w-1/2 min-h-[448px] relative bg-tint rounded-2xl border border-halfblack z-10 flex-grow">
						<Image
							src="/static/about5.webp"
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
