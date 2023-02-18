import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white rounded-t-3xl px-8 py-6 mt-96">
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
        <address className="not-italic">
          <p>
            <span className="text-superdarkgray mb-1">Адрес</span> <br />
            Томск, Большая Подгорная улица, 87 <br />
            Режим работы с 9:00 до 21:00
          </p>
        </address>
        <address className="not-italic">
          <span className="text-superdarkgray mb-1">Телефон</span> <br />
          +7 999 999-99-99
        </address>
        <div className="text-superdarkgray">
          <a className="mb-3">Политика конфиденциальности</a>
          <p>
            Техническая поддержка: <address>support@mail.ru</address>
          </p>
        </div>
      </div>
    </footer>
  );
}
