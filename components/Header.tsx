import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex flex-row items-center p-4 w-[1180] bg-darkgray border border-slightblack rounded-2xl mt-5 justify-between text-white mb-12">
			<div className="flex flex-row items-center w-5/6">
				<Link href="/">
					<Image src="Logo SVG.svg" alt="Nepeshkom logo" height={46} width={115} className="mr-8" />
				</Link>
				<nav className="flex justify-between flex-row w-8/12">
					<Link href="/cars" className="text-center mx-2">
						Автопарк
					</Link>
					<Link href="/terms" className="text-center mx-2">
						Условия аренды
					</Link>
					<Link href="" className="text-center mx-2">
						Услуги
					</Link>
					<Link href="" className="text-center mx-2">
						О компании
					</Link>
					<Link href="/contacts" className="text-center mx-2">
						Контакты
					</Link>
				</nav>
			</div>

			<Button icon="icons/Account.svg" primary={false}>
				Личный кабинет
			</Button>
		</header>
	);
}
