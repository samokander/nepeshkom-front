import axios from "axios";
import { BASE_URL } from "./consts";
import { getLocalStorageClientData } from "../utils/getLocalStorage";

export const getVerificationCode = async (phoneNumber: string) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/get-code`, {
            phoneNumber
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const verificateCode = async (verificationCode: string, phoneNumber: string) => {
    // const { phoneNumber } = getLocalStorageClientData()
    try {
        const res = await axios.post(`${BASE_URL}/auth/check-code`, {
            phoneNumber, verificationCode
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}