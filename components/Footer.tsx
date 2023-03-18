import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-darkgray border border-slightblack border-b-transparent rounded-t-3xl px-8 py-6 text-white">
			<div className="flex flex-row items-center justify-between mb-7">
				<Image src="Logo SVG.svg" alt="Nepeshkom logo" height={46} width={115} className="mr-8" />
				<nav className="flex justify-between flex-row w-8/12">
					<a>Автопарк</a>
					<a>Условия аренды</a>
					<a>Услуги</a>
					<a>О компании</a>
					<a>Контакты</a>
				</nav>
			</div>
			<div className="h-0.5 bg-background02 mb-7"></div>
			<div className="grid grid-cols-3">
				<div className="col-span-1 flex flex-col">
					<address className="not-italic col-span-1 row-span-1">
						<p>
							<span className="text-superdarkgray mb-1">Адрес</span> <br />
							Томск, Большая Подгорная улица, 87 <br />
						</p>
					</address>
					<div className="flex">
						<address className="not-italic  mr-10">
							<span className="text-superdarkgray mb-1 col-span-1 row-span-1">Телефон</span> <br />
							+7 999 999-99-99
						</address>
						<div className="flex flex-row">
							<div className="bg-white rounded-xl w-12 h-12 flex justify-center items-center mr-3">
								<Image src="icons/whatsapp.svg" alt="whatsapp icon" width={21} height={21} />
							</div>
							<div className="bg-white rounded-xl w-12 h-12 flex justify-center items-center">
								<Image src="icons/telegram.svg" alt="telegram icon" width={21} height={21} />
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-1 flex flex-col">
					<span className="text-superdarkgray mb-1">Режим работы</span>
					<time>Ежедневно с 9:00 до 21:00</time>
				</div>
				<div className="text-superdarkgray flex flex-col">
					<Link className="mb-3" href="/policy">
						Политика конфиденциальности
					</Link>
					<Link className="mb-3" href="/oferta">
						Публичная оферта
					</Link>
					<p>Техническая поддержка:</p>
					<address>support@mail.ru</address>
				</div>
			</div>
		</footer>
	);
}
