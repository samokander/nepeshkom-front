import { useContext, useEffect } from "react";
import { PersonalDataContext } from "@/components/Context";
import { useRouter } from "next/router";
import { getLocalStorageClientData } from "../utils/getLocalStorage";

export default function Options(isMobile: boolean = true) {
	const router = useRouter();
	const { selectedOption, setSelectedOption } = useContext(PersonalDataContext);

	const logout = () => {
		localStorage.removeItem("nepeshkom_phoneNumber");
		localStorage.removeItem("nepeshkom_cliendId");
		router.push("/auth");
	};

	useEffect(() => {
		if (!getLocalStorageClientData().phoneNumber) logout();
	}, []);

	return (
		<div
			className={`h-[65%] max-h-[408px] ${
				isMobile ? "" : "bg-[#242424] rounded-[20px] border-[#5B5B5B] border-[1px]"
			} p-5 flex flex-col gap-[20px] items-center
            text-[16px] font-bold text-primary`}>
			<button
				className={
					selectedOption === 0
						? "w-full bg-primary text-white p-4 rounded-[14px] min-h-[20%] h-auto cursor-pointer select-none"
						: "w-full bg-white p-4 rounded-[14px] min-h-[20%] h-auto cursor-pointer select-none"
				}
				onClick={() => setSelectedOption(0)}>
				Личная информация
			</button>

			<button
				className={
					selectedOption === 1
						? "w-full bg-primary text-white p-4 rounded-[14px] min-h-[20%] h-auto cursor-pointer select-none"
						: "w-full bg-white p-4 rounded-[14px] min-h-[20%] h-auto cursor-pointer select-none"
				}
				onClick={() => setSelectedOption(1)}>
				Проверка документов
			</button>

			<button
				className={
					selectedOption === 2
						? "w-full bg-primary text-white p-4 rounded-[14px] min-h-[20%] h-auto cursor-pointer select-none"
						: "w-full bg-white p-4 rounded-[14px] min-h-[20%] h-auto cursor-pointer select-none"
				}
				onClick={() => setSelectedOption(2)}>
				История бронирования
			</button>

			<div className="cursor-pointer select-none">
				<span className=" underline text-[16px] leading-5 font-bold text-error">
					<button onClick={() => logout()}>Выйти из аккаунта</button>
				</span>
			</div>
		</div>
	);
}
