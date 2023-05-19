import { useEffect, useState } from "react";
import PhoneInput from "./auth/PhoneInput";
import SmsCodeInput from "./auth/SmsCodeInput";
import { getLocalStorageClientData } from "./utils/getLocalStorage";

export default function Auth() {
    const [phoneNumber, setPhoneNumber] = useState(getLocalStorageClientData().phoneNumber)

	return (
		<div className="w-full">
			{ phoneNumber ? <SmsCodeInput phone={phoneNumber} setPhone={setPhoneNumber} /> : <PhoneInput phone={phoneNumber} setPhone={setPhoneNumber} />}
		</div>
	);
}