import { useEffect, useState } from "react";
import { verificateCode } from "../hooks/getAuthRequests";
import { useRouter } from "next/router";

export default function SmsCodeInput({ phone, setPhone }) {
    const router = useRouter();
    const [code, setCode] = useState<string>()

    const handleSetCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
    }

    useEffect(() => {
        if (code) {
            if (code.length !== 5) return
            (async () => {
                const res = await verificateCode(code, phone)
                if (res?.status) {
                    localStorage.setItem('nepeshkom_phoneNumber', phone)
                    localStorage.setItem('nepeshkom_cliendId', res?.data?.IntegrationId)
                    router.push('/')
                } else {
                    console.log(123)
                    console.log(res)
                }
            })();
        }
    }, [code]);

	return (
		<div className="flex flex-col text-halfblack">
			<div className="text-2xl">
                <span 
                    onClick={() => setPhone(null)} 
                    className="hover:underline">
                        Вернуться назад
                </span>
                </div>
            <div className="flex flex-col pt-10">
                <div className="text-white text-5xl font-bold pb-4">Введите код</div>
                <div className="text-xl">Мы отправили его на номер +{phone}</div>
                <div className="flex flex-col pt-7 w-96">
                    <label className="text-xs" htmlFor="">Код из смс</label>
                    <input
                        value={code}
                        onChange={handleSetCode}
                        type="text" 
                        placeholder="Введите 5 цифр" 
                        className="text-base rounded-[12px] px-[14px] py-[16px] text-halfwhite" />
                </div>
                <div className="text-base pt-4">Отправить повторно sms можно через 59 сек.</div>
            </div>
		</div>
	);
}