import Link from "next/link";
import { useState } from "react";
import Logo from "../icons/Logo";
import OptionsIcon from "../icons/OptionsIcon";

export default function HeaderM() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <div className="h-16 rounded-2xl bg-darkgray border border-slightblack flex justify-between px-5 items-center my-3">
        <Logo w={80} h={32} />
        <OptionsIcon setShowOptions={setShowOptions} />
      </div>
      {showOptions && (
        <div className="rounded-2xl bg-darkgray border border-slightblack p-5 mb-3">
          <ul className="flex flex-col gap-5 text-white font-semibold text-base">
            <li>
              <Link href="/" className="mb-">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/cars" className="mb-">
                Автопарк
              </Link>
            </li>
            <li>
              <Link href="/terms" className="mb-">
                Условия аренды
              </Link>
            </li>
            <li>
              <Link href="/services" className="mb-">
                Услуги
              </Link>
            </li>
            <li>
              <Link href="/about" className="mb-">
                О компании
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="mb-">
                Контакты
              </Link>
            </li>
            <li>
              <Link
                href="/personal-account"
                className="text-primary"
              >
                Личный кабинет
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
