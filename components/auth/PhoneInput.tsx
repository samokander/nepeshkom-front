import { useState } from "react";
import { getVerificationCode } from "../hooks/getAuthRequests";

const phonePattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);

export default function PhoneInput({ phone, setPhone }) {
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [oferta, setOferta] = useState<boolean>(false);
	const [errors, setErrors] = useState<string>("");

	const validation = () => {
		let err = "";

		if (!phonePattern.test(phoneNumber))
			err += "\n * Неправильный формат номера телефона. Телефон должен содержать 10 цифр.";

		if (!oferta) err += "\n * Необходимо согласие на условия оферты.";

		return err;
	};

	const handleInputPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		const phone = e.target.value;
		setPhoneNumber(phone);
	};

	const handleInputOferta = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOferta(e.target.checked);
	};

	const getCodeHandler = async () => {
		const err = validation();
		setErrors(err);

		if (err.length > 1) return 0;

		const res = await getVerificationCode(phoneNumber);

		// localStorage.setItem('nepeshkom_phoneNumber', phoneNumber)
		// phone = phoneNumber
		setPhone(phoneNumber);
	};

	return (
		<div className="flex flex-col text-halfblack font-medium">
			<div className="flex flex-col pt-10">
				<div className="text-white text-5xl font-bold pb-4">Авторизация</div>
				<div className="text-xl">Войдите или зарегистрируйтесь, чтобы продолжить</div>
				<div className="flex flex-col pt-7 w-96">
					<label className="text-xs" htmlFor="phoneNumber">
						Телефон
					</label>
					<input
						value={phoneNumber}
						onChange={handleInputPhoneNumber}
						type="text"
						name="phoneNumber"
						placeholder="7xxxxxxxxx"
						className="text-base rounded-[12px] px-[14px] py-[16px] text-halfwhite"
					/>
				</div>
				<div className="pt-4 flex flex-row">
					<input
						checked={oferta}
						onChange={handleInputOferta}
						type="checkbox"
						name="oferta"
						className="w-[20px] h-[20px] rounded-[3px] border-white bg-transparent"
					/>
					<label htmlFor="oferta" className="ml-[12px] block text-xs">
						Согласен (-на) с условиями оферты и с обработкой
						<br /> персональных данных
					</label>
				</div>
				{errors.length > 1 && <div className="pt-9 text-[#D92B26]">{errors}</div>}
				<div className="pt-7">
					<button
						onClick={getCodeHandler}
						className="bg-[#D92B26] rounded-2xl py-4 px-7 text-white font-bold text-base">
						Получить код
					</button>
				</div>
			</div>
		</div>
	);
}
