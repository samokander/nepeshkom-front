import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row items-center p-4 w-[1180] bg-white rounded-2xl mt-5">
      <Image src="Logo SVG.svg" alt="Nepeshkom logo" height={46} width={115} className="mr-8" />
      <nav className="flex justify-between flex-row w-8/12">
        <a>Автопарк</a>
        <a>Условия аренды</a>
        <a>Услуги</a>
        <a>О компании</a>
        <a>Контакты</a>
      </nav>
    </header>
  );
}
