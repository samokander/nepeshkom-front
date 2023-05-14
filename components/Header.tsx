import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import Logo from "./icons/Logo";

export default function Header() {
  return (
    <header className="flex flex-row items-center p-4 w-[1180] bg-darkgray border border-slightblack rounded-2xl mt-5 justify-between text-white mb-12">
      <div className="flex flex-row items-center w-5/6">
        <Logo w={115} h={45} />
        <nav className="flex justify-between flex-row w-8/12">
          <Link href="/cars" className="text-center mx-2">
            Автопарк
          </Link>
          <Link href="/terms" className="text-center mx-2">
            Условия аренды
          </Link>
          <Link
            href="/services"
            className="text-center mx-2"
          >
            Услуги
          </Link>
          <Link href="/about" className="text-center mx-2">
            О компании
          </Link>
          <Link
            href="/contacts"
            className="text-center mx-2"
          >
            Контакты
          </Link>
        </nav>
      </div>
      <Link href="/personal-account">
        <Button icon="icons/Account.svg" primary={false}>
          Личный кабинет
        </Button>
      </Link>
    </header>
  );
}
