import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

type Fields = string[];

export default function DocumentsModal({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
	// state

	const [inputDatas, setInputDatas] = useState<Fields>(["", "", ""]);

	//

	const handleSubmit = () => {};

	function handleChangeData(index: number, value: string) {
		const updated = [...inputDatas];
		updated[index] = value;
		setInputDatas(updated);
	}

	return (
		<div className="fixed w-[40%] h-auto bg-darkgray p-8 rounded-[16px] bottom-2/4">
			<button className="absolute top-5 right-5" onClick={() => setIsOpen(() => false)}>
				<img src="/icons/redcross.svg" />
			</button>
			<div className=" mb-[6.5%]">
				<h1 className=" text-[36px] font-bold text-white">Личные данные</h1>
				<p className=" font-medium text-[16px] text-halfblack">
					Сотрудничая с нами, Вы повышаете качество и ценность своей собственности
				</p>
			</div>

			<div className="grid auto-rows-max gap-5 w-[100%] mb-[3.125vw]">
				<div className="flex flex-row">
					<div className="flex-row w-[95%]">
						<div className="flex flex-row bg-white h-[52px] w-full rounded-[12px] items-center mr-3">
							<input
								placeholder="Фамилия"
								type="text"
								className="w-full h-full rounded-[12px] px-4"
								onChange={(event) => {
									handleChangeData(0, event.target.value);
								}}
								value={inputDatas[0]}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="grid auto-rows-max gap-5 w-[100%] mb-[3.125vw]">
				<div className="flex flex-row">
					<div className="flex-row w-[95%]">
						<div className="flex flex-row bg-white h-[52px] w-full rounded-[12px] items-center mr-3">
							<input
								placeholder="Фамилия"
								type="text"
								className="w-full h-full rounded-[12px] px-4"
								onChange={(event) => {
									handleChangeData(1, event.target.value);
								}}
								value={inputDatas[1]}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="grid auto-rows-max gap-5 w-[100%] mb-[3.125vw]">
				<div className="flex flex-row">
					<div className="flex-row w-[95%]">
						<div className="flex flex-row bg-white h-[52px] w-full rounded-[12px] items-center mr-3">
							<input
								placeholder="Фамилия"
								type="text"
								className="w-full h-full rounded-[12px] px-4"
								onChange={(event) => {
									handleChangeData(2, event.target.value);
								}}
								value={inputDatas[2]}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-[1.04vw]">
				{" "}
				<button
					className="w-[7.35vw] py-4 px-7 h-[2.7vw] rounded-[14px] bg-primary 
        text-white font-bold text-[16px] min-w-[140px] min-h-[50px]"
					onClick={() => handleSubmit()}>
					Отправить
				</button>
				<button
					className="w-[7.35vw] py-4 px-7 h-[2.7vw] rounded-[14px] bg-white 
        text-primary font-bold text-[16px] min-w-[140px] min-h-[50px]"
					onClick={() => setIsOpen(() => false)}>
					Отмена
				</button>
			</div>
		</div>
	);
}
