import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex flex-row items-center p-4 w-[1180] bg-white rounded-2xl my-5 justify-between">
      <div className="flex flex-row items-center w-5/6">
        <Image src="Logo SVG.svg" alt="Nepeshkom logo" height={46} width={115} className="mr-8" />
        <nav className="flex justify-between flex-row w-8/12">
          <a className="text-center mx-2">Условия аренды</a>
          <a className="text-center mx-2">Услуги</a>
          <a className="text-center mx-2">О компании</a>
          <a className="text-center mx-2">Контакты</a>
          <a className="text-center mx-2">Автопарк</a>
        </nav>
      </div>

      <Button icon="icons/Account.svg" primary={false}>
        Личный кабинет
      </Button>
    </header>
  );
}
